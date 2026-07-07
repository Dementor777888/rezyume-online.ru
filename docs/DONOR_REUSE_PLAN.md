# DONOR_REUSE_PLAN.md — план работы с донором старого SaaS

## 1. Роль донора

Донор старого SaaS — временный read-only источник кода для переноса отдельных проверенных решений.

Донор не является источником истины нового проекта.

Источники истины нового проекта:

1. `docs/PRD.md`;
2. `docs/ARCHITECTURE.md`;
3. `docs/data-model.md`;
4. `docs/reuse-map.md`;
5. `docs/CODEX.md`;
6. `docs/API.md`;
7. `docs/RESUME_DATA_CONTRACT.md`;
8. `design_system/`.

## 2. Где хранить донор

Фактический донор проекта уже скачан как `imgfactory`.

Путь в Windows Explorer:

```text
\\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory
```

Путь внутри WSL/Ubuntu, который должен использовать Codex и терминал VS Code:

```bash
/home/axel/code/_donors/imgfactory
```

Рекомендуемая локальная структура сохранена: донор лежит рядом с проектами, но вне нового репозитория.

```text
/home/axel/code/
  rezyume-online/
  _donors/
    imgfactory/
```

Донор не класть в:

```text
rezyume-online/src/
rezyume-online/app/
rezyume-online/components/
rezyume-online/lib/
```

Путь к донору зафиксирован в `docs/LOCAL_PATHS.md`. Сам донорский код не коммитить в новый репозиторий.

## 3. Что можно переносить

### YooKassa

Разрешено смотреть и адаптировать:

- создание платежа;
- конфигурацию клиента;
- обработку ошибок API;
- redirect/confirmation flow;
- webhook handler;
- проверку статуса платежа;
- идемпотентность webhook;
- mapping provider status → internal status.

### Промокоды

Разрешено смотреть и адаптировать:

- поиск промокода;
- проверку активности;
- проверку срока действия;
- проверку лимита использований;
- расчёт скидки;
- запись факта применения.

Нужно добавить новый тип:

```text
free_access
```

### Auth

Разрешено смотреть и адаптировать:

- bcrypt hash;
- password generation;
- session cookie;
- login/logout;
- password recovery;
- middleware проверки роли.

### Email

Разрешено смотреть и адаптировать:

- SMTP transport;
- шаблонизацию писем;
- retry/error handling;
- письмо после оплаты;
- письмо восстановления пароля.

### Rate-limit

Разрешено смотреть и адаптировать:

- общую механику антиабуза;
- лимиты на upload/photo/export;
- защиту внешних API от выжигания квоты.

## 4. Что запрещено переносить

Запрещено переносить:

- рекуррентные платежи;
- подписки;
- тарифные планы старого SaaS;
- балансы пользователей;
- кошельки;
- внутреннюю валюту лимитов;
- очереди;
- воркеры;
- Redis;
- старую структуру БД без адаптации;
- старую модель оплаты «за лимиты»;
- старые UI-экраны оплаты;
- тексты, обещающие подписку, тарифы или автопродление;
- код, который сохраняет карту для последующих списаний.

## 5. Целевой payment-flow нового сервиса

```text
Resume created/free
  ↓
User enters email on payment screen
  ↓
Find or create User
  ↓
Create Payment pending for Resume
  ↓
Apply Promo if provided
  ↓
If finalAmount = 0 → activate paid without YooKassa
  ↓
If finalAmount > 0 → create YooKassa payment
  ↓
YooKassa confirmation
  ↓
Webhook payment.succeeded
  ↓
Payment.status = succeeded
Resume.tier = paid
Resume.expiresAt = null
Resume.userId = user.id
  ↓
Send email with account password and resume links
```

## 6. Mapping старого SaaS → нового сервиса

| Старый SaaS | Новый сервис |
|---|---|
| Payment for plan/credits | Payment for one Resume |
| User balance | Не переносится |
| Limits as currency | Только rate-limit/anti-abuse |
| Subscription | Не переносится |
| YooKassa client | Адаптировать |
| YooKassa webhook | Адаптировать |
| Promo discount | Адаптировать |
| Promo free usage | Маппинг в `free_access` |
| Email transport | Адаптировать |
| Password auth | Адаптировать |
| Worker jobs | Не переносится |

## 7. Целевая модель Payment

Использовать модель из `docs/data-model.md`:

```prisma
model Payment {
  id         String        @id @default(cuid())
  userId     String
  resumeId   String        @unique
  amount     Int           @default(9900)
  status     PaymentStatus @default(pending)
  provider   String        @default("yookassa")
  providerPaymentId String? @unique
  promoId    String?
  createdAt  DateTime      @default(now())
  paidAt     DateTime?
}
```

Правила:

- один `Resume` имеет максимум один успешный `Payment`;
- повторный webhook безопасен;
- `amount` в копейках;
- `providerPaymentId` unique;
- refund не переводит резюме автоматически в free без отдельного решения.

## 8. Целевая модель Promo

Типы:

```text
free_access
percent
fixed
```

Правила:

- `free_access` делает finalAmount = 0;
- `percent` применяет скидку 1–100%;
- `fixed` вычитает сумму в копейках;
- finalAmount не может быть меньше 0;
- `usedCount` увеличивается только после успешной оплаты или успешной free-активации;
- `PromoRedemption` создаётся после фактического применения.

## 9. Порядок аудита донора

1. Найти payment-модуль.
2. Найти webhook route.
3. Найти promo-модуль.
4. Найти auth/password/session.
5. Найти email transport.
6. Найти rate-limit/anti-abuse.
7. Заполнить `DONOR_PAYMENT_AUDIT.md`.
8. Выписать зависимости npm.
9. Выписать env-переменные.
10. Отметить запрещённые части.
11. Только после этого переносить код.

## 10. Как давать Codex задачу по донору

Правильная формулировка:

```text
Прочитай docs/CODEX.md, docs/API.md, docs/data-model.md, docs/reuse-map.md, docs/LOCAL_PATHS.md и docs/DONOR_REUSE_PLAN.md.
Донорский проект находится в WSL по пути: /home/axel/code/_donors/imgfactory
Используй донорский проект только как read-only reference для YooKassa, webhook, промокодов, email и auth.
Не переноси подписки, балансы, очереди, воркеры, старые тарифы и старую структуру БД.
Сначала заполни docs/DONOR_PAYMENT_AUDIT.md по найденным файлам донора. Код нового проекта пока не меняй.
```

Затем отдельная задача:

```text
На основе заполненного docs/DONOR_PAYMENT_AUDIT.md реализуй payment create и webhook в новом проекте строго по docs/API.md и docs/data-model.md.
```

## 11. Когда удалить донор

Донор можно удалить после того, как:

- payment create работает;
- webhook работает;
- promo работает;
- auth/email нужные части перенесены;
- тестовый payment-flow пройден;
- в новом репозитории нет import/reference на донорскую папку;
- `DONOR_PAYMENT_AUDIT.md` заполнен.

Удаление:

```bash
rm -rf /home/axel/code/_donors/imgfactory
```
