# DONOR_PAYMENT_AUDIT.md — аудит донора оплаты

## 1. Статус аудита

- [x] Путь к донору указан.
- [ ] Донор скачан локально и доступен в WSL по указанному пути.
- [x] Донор лежит вне нового проекта.
- [ ] Codex/разработчик просмотрел payment flow.
- [ ] Найдены файлы YooKassa.
- [ ] Найдены webhook-файлы.
- [ ] Найдены промокоды.
- [ ] Найдены email-файлы.
- [ ] Найдены auth/password/session-файлы.
- [ ] Найдены rate-limit/anti-abuse-файлы.
- [ ] Отмечены запрещённые части.
- [ ] Составлен список переносимых функций.
- [ ] Код нового проекта ещё не изменён до завершения аудита.

## 2. Общая информация по донору

| Поле | Значение |
|---|---|
| Название донора | `imgfactory` |
| Windows Explorer path | `\\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory` |
| WSL/Bash path | `/home/axel/code/_donors/imgfactory` |
| Тип проекта | |
| Framework | |
| Runtime | |
| ORM/DB | |
| Payment provider | YooKassa |
| Есть подписки | |
| Есть рекуррент | |
| Есть балансы/лимиты как валюта | |
| Есть очереди/воркеры | |
| Есть Redis | |
| Есть email transport | |
| Есть auth/session | |

## 3. Быстрые команды аудита донора

Выполнить из терминала VS Code, открытого в WSL:

```bash
cd /home/axel/code/_donors/imgfactory
pwd
ls -la
git status --short
find . -maxdepth 5 -type f | grep -Ei 'yookassa|payment|pay|promo|webhook|auth|session|password|email|mail|smtp|limit|rate' | sort | head -200
```

Отдельно проверить env-примеры и package.json:

```bash
cd /home/axel/code/_donors/imgfactory
find . -maxdepth 4 -type f \( -name '.env*' -o -name 'package.json' -o -name 'prisma.schema' -o -name 'schema.prisma' \) | sort
```

Важно: реальные `.env` и секреты не копировать в новый проект.

## 4. Найденные payment-файлы

| Файл | Что делает | Переносить | Комментарий |
|---|---|---|---|
| | | | |

## 5. Найденные YooKassa env-переменные

| Переменная в доноре | Назначение | Новая переменная | Комментарий |
|---|---|---|---|
| | | `YOOKASSA_SHOP_ID` | |
| | | `YOOKASSA_SECRET_KEY` | |
| | | `YOOKASSA_WEBHOOK_SECRET` | |

## 6. Создание платежа в доноре

Проверить:

- [ ] Где создаётся платеж.
- [ ] Как считается сумма.
- [ ] Где создаётся internal Payment.
- [ ] Где сохраняется provider payment id.
- [ ] Как передаётся returnUrl.
- [ ] Как обрабатываются ошибки YooKassa.
- [ ] Есть ли idempotency key.
- [ ] Есть ли сохранение карты или рекуррент.

Вывод:

```text
После аудита сюда записать краткую схему donor create payment flow.
```

## 7. Webhook в доноре

Проверить:

- [ ] Endpoint webhook.
- [ ] Какие события принимает.
- [ ] Как проверяется подлинность события.
- [ ] Как ищется payment.
- [ ] Как защищается от повторов.
- [ ] Как обновляется статус.
- [ ] Что происходит после success.
- [ ] Что происходит после cancel/refund.
- [ ] Что логируется.

Вывод:

```text
После аудита сюда записать краткую схему donor webhook flow.
```

## 8. Промокоды в доноре

Проверить:

- [ ] Модель промокода.
- [ ] Типы промокодов.
- [ ] Проверка active.
- [ ] Проверка expiresAt.
- [ ] Проверка maxUses.
- [ ] Расчёт percent.
- [ ] Расчёт fixed.
- [ ] Есть ли бесплатный доступ.
- [ ] Когда увеличивается usedCount.
- [ ] Есть ли redemption log.

Вывод:

```text
После аудита сюда записать, что переносится и как адаптируется к Promo/PromoRedemption.
```

## 9. Auth в доноре

Проверить:

- [ ] Как хэшируются пароли.
- [ ] Как генерируются пароли.
- [ ] Как устроен login.
- [ ] Как устроен logout.
- [ ] Как устроено восстановление пароля.
- [ ] Где session cookie.
- [ ] Есть ли роли.
- [ ] Как защищён admin.

Вывод:

```text
После аудита сюда записать, что переносится в auth нового сервиса.
```

## 10. Email в доноре

Проверить:

- [ ] SMTP transport.
- [ ] Шаблоны писем.
- [ ] Письмо после оплаты.
- [ ] Письмо восстановления пароля.
- [ ] Обработка ошибок отправки.
- [ ] Логирование.

Вывод:

```text
После аудита сюда записать, какие email helpers переносим.
```

## 11. Rate-limit/anti-abuse в доноре

Проверить:

- [ ] Есть ли rate-limit.
- [ ] Где хранится счётчик.
- [ ] Какие endpoints защищены.
- [ ] Есть ли привязка к IP.
- [ ] Есть ли привязка к userId.
- [ ] Есть ли лимиты генераций.

Вывод:

```text
После аудита сюда записать, что можно использовать для /api/photos, /api/export, /api/payments.
```

## 12. Запрещённые части, найденные в доноре

Отметить всё, что найдено и не должно быть перенесено:

- [ ] Подписки.
- [ ] Рекуррентные платежи.
- [ ] Сохранение карты для следующих списаний.
- [ ] Балансы пользователей.
- [ ] Кошельки.
- [ ] Лимиты как валюта пользователя.
- [ ] Очереди.
- [ ] Воркеры.
- [ ] Redis.
- [ ] Старые тарифы.
- [ ] Старый UI оплаты.
- [ ] Старые тексты оферты/подписки.

## 13. Переносимые функции

| Функция | Файл донора | Новый файл | Статус |
|---|---|---|---|
| YooKassa client | | `src/lib/payment/yookassa.ts` | |
| create payment | | `src/server/services/payment/create-payment.ts` | |
| webhook processing | | `src/server/services/payment/process-yookassa-webhook.ts` | |
| promo validation | | `src/server/services/promo/validate-promo.ts` | |
| password hash | | `src/lib/auth/password.ts` | |
| session | | `src/lib/auth/session.ts` | |
| email transport | | `src/lib/email/transport.ts` | |
| payment success email | | `src/lib/email/templates/payment-success.ts` | |
| rate limit | | `src/lib/rate-limit/index.ts` | |

## 14. Зависимости npm из донора

| Package | Зачем нужен | Переносить |
|---|---|---|
| | | |

## 15. Риски переноса

| Риск | Как избежать |
|---|---|
| Перенос рекуррента | Искать и удалять все параметры saved_payment_method/recurrent/subscription |
| Перенос старых тарифов | Сумму брать только из нового `Payment.amount`, default 9900 |
| Дубли webhook | Использовать `providerPaymentId @unique` и transaction |
| Утечка секретов | Не копировать `.env` и реальные ключи |
| Старый UI оплаты | Реализовать UI по `DESIGN_IMPLEMENTATION.md` |
| Несовместимая БД | Маппить только на Prisma-модель нового проекта |

## 16. Итоговое решение после аудита

Заполнить после просмотра донора:

```text
1. Какие файлы донора используем как reference.
2. Какие функции переносим.
3. Какие зависимости добавляем.
4. Какие части запрещены к переносу.
5. Какие изменения нужны в новой Prisma-схеме.
6. Какие тесты провести после переноса.
```
