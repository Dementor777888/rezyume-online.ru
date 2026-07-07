# ENVIRONMENT.md — окружение и переменные

## 1. Runtime

Production-сервер:

- Debian 12;
- ispmanager;
- nginx;
- MariaDB;
- Node.js 22 LTS;
- pm2;
- локальное файловое хранилище.

Development:

- Node.js 22 LTS;
- npm;
- MariaDB локально или на dev-сервере;
- Playwright Chromium;
- доступ к SMTP sandbox или реальному SMTP;
- YooKassa test shop credentials.

## 2. Основные env-переменные

| Переменная | Где используется | Описание |
|---|---|---|
| `NODE_ENV` | app | `development`, `test`, `production` |
| `APP_URL` | app/email/payment | Базовый URL сайта |
| `DATABASE_URL` | Prisma | MariaDB connection string |
| `SESSION_SECRET` | auth | Секрет подписи session cookie |
| `PASSWORD_PEPPER` | auth | Дополнительный серверный секрет для паролей |
| `STORAGE_ROOT` | files/export/photo | Корень файлового хранилища |
| `PDF_STORAGE_DIR` | export | Папка PDF |
| `DOCX_STORAGE_DIR` | export | Папка DOCX |
| `PHOTO_STORAGE_DIR` | photo | Папка фото |
| `YOOKASSA_SHOP_ID` | payment | ID магазина YooKassa |
| `YOOKASSA_SECRET_KEY` | payment | Secret key YooKassa |
| `YOOKASSA_WEBHOOK_SECRET` | payment | Секрет проверки webhook, если используется в реализации |
| `SMTP_HOST` | email | SMTP host |
| `SMTP_PORT` | email | SMTP port |
| `SMTP_SECURE` | email | TLS true/false |
| `SMTP_USER` | email | SMTP login |
| `SMTP_PASSWORD` | email | SMTP password |
| `MAIL_FROM` | email | From address |
| `MAIL_REPLY_TO` | email | Reply-to address |
| `GEMINI_API_KEY` | AI photo | Ключ Gemini/Nano Banana |
| `ADMIN_IP_ALLOWLIST` | admin/nginx/app | Список IP для админки через запятую |
| `CRON_ENABLED` | cron | Включение node-cron в production |
| `BACKUP_DIR` | backup | Папка для локальных backup-файлов |
| `LOG_LEVEL` | logging | `debug`, `info`, `warn`, `error` |

## 3. Рекомендуемые production paths

```text
/var/www/rezyume/app
/var/www/rezyume/storage
/var/www/rezyume/storage/photos
/var/www/rezyume/storage/photos/original
/var/www/rezyume/storage/photos/enhanced
/var/www/rezyume/storage/pdf
/var/www/rezyume/storage/docx
/var/www/rezyume/backups
/var/log/rezyume
```

## 4. Storage-права

Пользователь, под которым работает Node/pm2, должен иметь права на запись:

```text
/var/www/rezyume/storage
/var/www/rezyume/backups
/var/log/rezyume
```

nginx не должен иметь возможность выполнять загруженные файлы как скрипты.

## 5. Playwright

PDF-экспорт требует Chromium.

В production нужно установить системные зависимости Playwright:

```bash
npx playwright install chromium
npx playwright install-deps chromium
```

Если `install-deps` конфликтует с политикой сервера, зависимости устанавливаются через apt вручную по выводу Playwright.

## 6. Email

Минимальные письма MVP:

1. Пароль от личного кабинета после оплаты.
2. Успешная оплата и ссылки на файлы.
3. Восстановление пароля.
4. Подтверждение email-подписки на новые резюме для Шага 3.
5. Отписка от email-подписки для Шага 3.

## 7. YooKassa

В development использовать тестовый магазин.

В production:

- webhook должен быть доступен по HTTPS;
- endpoint: `/api/payments/webhook/yookassa`;
- нужно проверять идемпотентность по `providerPaymentId`;
- нельзя включать рекуррентные платежи.

## 8. Gemini/Nano Banana

AI-фото не блокирует MVP.

До подключения AI-фото:

- `GEMINI_API_KEY` может отсутствовать;
- UI AI-фото не должен показывать рабочую кнопку;
- платный пакет всё равно может запускаться с шаблонами, DOCX и кабинетом.

## 9. Cron

Внутри приложения:

- очистка просроченных anonymous free-резюме;
- digest подписки на новые резюме для Шага 3;
- nightly backup.

В development `CRON_ENABLED=false`.

В production `CRON_ENABLED=true` только у одного pm2-процесса.

## 10. Что нельзя хранить в Git

Нельзя коммитить:

- `.env`;
- реальные ключи YooKassa;
- реальные SMTP-пароли;
- реальные Gemini API keys;
- дампы БД с ПДн;
- реальные фото пользователей;
- PDF/DOCX пользователей;
- donor repository с приватным кодом, если новый репозиторий будет отдельным.

## 11. Локальный донор старого SaaS

Донор `imgfactory` используется только локально как read-only reference.

Windows Explorer:

```text
\\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory
```

WSL/Bash:

```bash
/home/axel/code/_donors/imgfactory
```

Этот путь не является runtime-переменной приложения. Не добавлять его в production `.env` и не делать из production-кода import по этому пути.
