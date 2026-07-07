# API.md — контракты API «Резюме Онлайн»

## 1. Общие правила

Все API возвращают JSON, кроме endpoints скачивания файлов.

### Успешный ответ

```json
{
  "ok": true,
  "data": {}
}
```

### Ошибка

```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Проверьте заполненные поля.",
    "details": []
  }
}
```

### Коды ошибок

| Код | Когда используется |
|---|---|
| `VALIDATION_ERROR` | Неверные входные данные |
| `UNAUTHORIZED` | Нет сессии или неверный пароль |
| `FORBIDDEN` | Нет доступа к ресурсу |
| `NOT_FOUND` | Ресурс не найден |
| `EXPIRED` | Free-ссылка истекла |
| `PAYMENT_REQUIRED` | Фича доступна только paid |
| `PAYMENT_ALREADY_SUCCEEDED` | Резюме уже оплачено |
| `PROMO_INVALID` | Промокод не найден или неактивен |
| `PROMO_EXPIRED` | Промокод истёк |
| `PROMO_LIMIT_REACHED` | Лимит промокода исчерпан |
| `RATE_LIMITED` | Слишком много запросов |
| `FILE_TOO_LARGE` | Файл превышает лимит |
| `UNSUPPORTED_FILE_TYPE` | Тип файла не разрешён |
| `EXTERNAL_SERVICE_ERROR` | Ошибка YooKassa, SMTP или AI API |
| `INTERNAL_ERROR` | Непредвиденная ошибка сервера |

## 2. Auth model

Есть три режима доступа:

1. **Anonymous free user** — данные в localStorage, редактирование через `editToken`.
2. **Paid user** — session через httpOnly cookie.
3. **Admin** — session + роль `admin`, опционально IP allowlist на nginx.

## 3. Healthcheck

### `GET /api/health`

Ответ:

```json
{
  "ok": true,
  "data": {
    "status": "ok"
  }
}
```

## 4. Resume API

### `POST /api/resumes`

Создаёт анонимное free-резюме или paid draft, если пользователь авторизован.

#### Request

```json
{
  "title": "Резюме менеджера по продажам",
  "data": {},
  "template": "start",
  "accent": "blue",
  "publishToBaseRequested": false
}
```

`data` должен соответствовать `docs/RESUME_DATA_CONTRACT.md`.

#### Response

```json
{
  "ok": true,
  "data": {
    "resumeId": "cm123resume",
    "publicToken": "cm123publictoken",
    "publicUrl": "https://rezyume-online.ru/rezume/cm123publictoken",
    "editToken": "rzo_edit_6e0b0b9a3d0c4f0d9f8c2a1b7e5d4c3a",
    "expiresAt": "2026-07-07T12:00:00.000Z"
  }
}
```

Правила:

- для anonymous free `expiresAt = now + 24h`;
- `editToken` возвращается только при создании;
- в БД хранится только `editTokenHash`;
- если `data.consent.personalDataAccepted !== true`, вернуть `VALIDATION_ERROR`.

### `GET /api/resumes/[id]`

Возвращает резюме для редактирования.

#### Query для anonymous

```text
?editToken=rzo_edit_6e0b0b9a3d0c4f0d9f8c2a1b7e5d4c3a
```

#### Response

```json
{
  "ok": true,
  "data": {
    "id": "cm123resume",
    "title": "Резюме менеджера по продажам",
    "tier": "free",
    "status": "published",
    "template": "start",
    "accent": "blue",
    "data": {},
    "expiresAt": "2026-07-07T12:00:00.000Z",
    "publicUrl": "https://rezyume-online.ru/rezume/cm123publictoken"
  }
}
```

Правила доступа:

- anonymous free требует корректный `editToken`;
- paid требует session владельца или admin;
- публичный просмотр идёт через `/rezume/[publicToken]`, не через этот API.

### `PATCH /api/resumes/[id]`

Обновляет резюме.

#### Request

```json
{
  "editToken": "rzo_edit_6e0b0b9a3d0c4f0d9f8c2a1b7e5d4c3a",
  "title": "Резюме менеджера по продажам",
  "data": {},
  "template": "clean",
  "accent": "teal"
}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "resumeId": "cm123resume",
    "updatedAt": "2026-07-06T12:30:00.000Z",
    "pdfCacheInvalidated": true,
    "docxCacheInvalidated": true
  }
}
```

Правила:

- free может использовать только `start` и `start_photo`;
- paid может использовать все шаблоны;
- при изменении `data`, `template`, `accent` сбрасывать `pdfPath` и `docxPath`;
- anonymous требует `editToken`;
- paid требует session владельца.

### `DELETE /api/resumes/[id]`

Удаляет резюме владельца.

#### Request

```json
{
  "editToken": "rzo_edit_6e0b0b9a3d0c4f0d9f8c2a1b7e5d4c3a"
}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "deleted": true
  }
}
```

## 5. Public resume

### `GET /rezume/[publicToken]`

Это page route, не JSON API.

Правила:

- если resume не найден → 404;
- если free и `expiresAt < now` → страница истечения ссылки;
- если paid → публичная страница доступна бессрочно;
- если это обычная share-link владельца, контакты видны;
- если это карточка Базы резюме, контакты скрыты по `publicFieldsMask` и роли пользователя.

## 6. Export API

### `POST /api/resumes/[id]/export/pdf`

Генерирует или возвращает кэш PDF.

#### Request

```json
{
  "editToken": "rzo_edit_6e0b0b9a3d0c4f0d9f8c2a1b7e5d4c3a"
}
```

Для paid session token берётся из cookie, `editToken` не нужен.

#### Response

```json
{
  "ok": true,
  "data": {
    "downloadUrl": "https://rezyume-online.ru/api/files/pdf/cm123resume.pdf",
    "cached": false
  }
}
```

Правила:

- PDF доступен free и paid;
- кириллица обязательна;
- повторный запрос возвращает кэш, если резюме не изменилось.

### `POST /api/resumes/[id]/export/docx`

Генерирует или возвращает кэш DOCX.

#### Request

```json
{}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "downloadUrl": "https://rezyume-online.ru/api/files/docx/cm123resume.docx",
    "cached": false
  }
}
```

Правила:

- DOCX доступен только paid;
- free получает `PAYMENT_REQUIRED`;
- кириллица обязательна;
- повторный запрос возвращает кэш, если резюме не изменилось.

## 7. Files API

### `GET /api/files/pdf/[fileName]`

Скачивание PDF.

Правила:

- не принимать произвольный путь;
- `fileName` проверять whitelist-паттерном;
- доступ проверять по resume ownership, editToken или publicToken depending context.

### `GET /api/files/docx/[fileName]`

Скачивание DOCX.

Правила:

- только paid owner/admin;
- нельзя отдавать чужие файлы.

## 8. Photo API

### `POST /api/photos/upload`

Загружает фото.

#### FormData

```text
file: image/jpeg | image/png | image/webp
resumeId: string
editToken: string
```

#### Response

```json
{
  "ok": true,
  "data": {
    "photoId": "photo_123",
    "originalUrl": "https://rezyume-online.ru/storage/photos/original/photo_123.jpg",
    "maxSizeMb": 15
  }
}
```

Правила:

- максимум 15 MB;
- разрешены JPEG, PNG, WebP;
- EXIF очищать;
- путь формирует backend.

### `POST /api/photos/enhance`

AI-улучшение фото.

#### Request

```json
{
  "resumeId": "cm123resume",
  "photoId": "photo_123"
}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "photoId": "photo_123",
    "originalUrl": "https://rezyume-online.ru/storage/photos/original/photo_123.jpg",
    "enhancedUrl": "https://rezyume-online.ru/storage/photos/enhanced/photo_123.jpg"
  }
}
```

Правила:

- доступно только paid;
- timeout 30 секунд;
- при ошибке AI вернуть `EXTERNAL_SERVICE_ERROR`, но не удалять original.

## 9. Payment API

### `POST /api/payments/create`

Создаёт платеж YooKassa.

#### Request

```json
{
  "resumeId": "cm123resume",
  "email": "user@example.com",
  "promoCode": "START99",
  "returnUrl": "https://rezyume-online.ru/payment/success"
}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "paymentId": "cm123payment",
    "amount": 9900,
    "currency": "RUB",
    "confirmationUrl": "https://yookassa.ru/checkout/payments/v2/contract?orderId=example",
    "status": "pending"
  }
}
```

Правила:

- email валидировать;
- создать User, если его нет;
- если User создан впервые, сгенерировать пароль и отправить после успешной оплаты;
- Payment привязать к Resume;
- если промокод `free_access`, не создавать YooKassa payment, сразу активировать paid;
- если Resume уже paid, вернуть `PAYMENT_ALREADY_SUCCEEDED`.

### `POST /api/payments/webhook/yookassa`

Webhook YooKassa.

#### Request

Тело приходит от YooKassa в формате провайдера.

#### Response

```json
{
  "ok": true,
  "data": {
    "processed": true
  }
}
```

Правила:

- принимать только события оплаты;
- проверять `providerPaymentId`;
- повторное событие не должно создавать дубль;
- при `payment.succeeded`:
  - `Payment.status = succeeded`;
  - `Payment.paidAt = now`;
  - `Resume.tier = paid`;
  - `Resume.expiresAt = null`;
  - `Resume.userId = payment.userId`;
  - сгенерировать PDF/DOCX или поставить на синхронную генерацию при первом скачивании;
  - отправить письмо.

## 10. Promo API

### `POST /api/promos/validate`

Проверяет промокод до оплаты.

#### Request

```json
{
  "code": "START99",
  "email": "user@example.com",
  "resumeId": "cm123resume"
}
```

#### Response для скидки

```json
{
  "ok": true,
  "data": {
    "valid": true,
    "type": "percent",
    "value": 50,
    "baseAmount": 9900,
    "finalAmount": 4950
  }
}
```

#### Response для бесплатного доступа

```json
{
  "ok": true,
  "data": {
    "valid": true,
    "type": "free_access",
    "value": 0,
    "baseAmount": 9900,
    "finalAmount": 0
  }
}
```

## 11. Auth API

### `POST /api/auth/login`

#### Request

```json
{
  "email": "user@example.com",
  "password": "correct horse battery staple"
}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "user": {
      "id": "cm123user",
      "email": "user@example.com",
      "role": "user"
    }
  }
}
```

Правила:

- session установить в httpOnly cookie;
- не возвращать passwordHash.

### `POST /api/auth/logout`

#### Response

```json
{
  "ok": true,
  "data": {
    "loggedOut": true
  }
}
```

### `POST /api/auth/recover`

#### Request

```json
{
  "email": "user@example.com"
}
```

#### Response

```json
{
  "ok": true,
  "data": {
    "sent": true
  }
}
```

Правило: всегда возвращать одинаковый ответ, даже если email не найден.

## 12. Catalog API

### `GET /api/catalog/sections`

Возвращает разделы каталога.

### `GET /api/catalog/sections/[slug]/professions`

Возвращает профессии раздела.

### `GET /api/articles`

Возвращает опубликованные статьи.

## 13. Admin API

Все admin endpoints требуют роль `admin`.

### `GET /api/admin/promos`

Список промокодов.

### `POST /api/admin/promos`

Создать промокод.

#### Request

```json
{
  "code": "START99",
  "type": "percent",
  "value": 50,
  "maxUses": 100,
  "expiresAt": "2026-12-31T23:59:59.000Z",
  "active": true
}
```

### `PATCH /api/admin/promos/[id]`

Обновить промокод.

### `POST /api/admin/catalog/sections`

Создать раздел каталога.

### `POST /api/admin/catalog/professions`

Создать профессию.

### `POST /api/admin/articles`

Создать статью.

### `POST /api/admin/faq`

Создать FAQ.

### `POST /api/admin/content-pages`

Создать служебную страницу.

## 14. Cron/internal API

В production cron запускается внутри приложения через node-cron.

### Очистка free-резюме

Правило:

- удалять анонимные free-резюме, у которых `expiresAt < now - 7 days`;
- файлы PDF/DOCX/photo удалять вместе с записью.

### Digest подписок

Для Шага 3:

- брать active-подписки;
- собирать новые публичные резюме по разделам;
- отправлять email;
- поддерживать отписку в один клик.
