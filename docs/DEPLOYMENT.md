# DEPLOYMENT.md — деплой на Debian 12 + ispmanager

## 1. Целевая схема

```text
internet
  ↓
nginx 443 SSL
  ↓ reverse proxy
Next.js app :3000 через pm2
  ↓
MariaDB localhost
  ↓
/var/www/rezyume/storage
```

## 2. Что не используем в production

- Docker;
- docker-compose;
- Kubernetes;
- Redis;
- отдельные worker-процессы;
- внешнюю БД;
- S3.

## 3. Подготовка пользователя и папок

Рекомендуемый системный пользователь приложения:

```bash
adduser --disabled-password --gecos "" rezyume
mkdir -p /var/www/rezyume/app
mkdir -p /var/www/rezyume/storage/photos/original
mkdir -p /var/www/rezyume/storage/photos/enhanced
mkdir -p /var/www/rezyume/storage/pdf
mkdir -p /var/www/rezyume/storage/docx
mkdir -p /var/www/rezyume/backups
mkdir -p /var/log/rezyume
chown -R rezyume:rezyume /var/www/rezyume
chown -R rezyume:rezyume /var/log/rezyume
```

Если ispmanager уже создал пользователя сайта, использовать пользователя сайта вместо `rezyume`.

## 4. Node.js 22 LTS

Установка через nvm под пользователем приложения:

```bash
su - rezyume
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 22
nvm use 22
node -v
npm -v
```

## 5. pm2

```bash
npm install -g pm2
pm2 -v
```

Старт приложения:

```bash
cd /var/www/rezyume/app
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 start npm --name rezyume-online -- start
pm2 save
pm2 startup
```

После `pm2 startup` выполнить команду, которую покажет pm2.

## 6. MariaDB

Создать БД и пользователя через ispmanager или CLI.

Права пользователя БД:

```sql
CREATE DATABASE rezyume_online CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'rezyume_user'@'localhost' IDENTIFIED BY 'strong_application_password';
GRANT ALL PRIVILEGES ON rezyume_online.* TO 'rezyume_user'@'localhost';
FLUSH PRIVILEGES;
```

Реальный пароль не хранить в Git.

## 7. nginx reverse proxy

В ispmanager оставить управление доменом, SSL и почтой.

В дополнительный nginx config домена добавить proxy на Node:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}

location /storage/ {
    alias /var/www/rezyume/storage/;
    add_header X-Content-Type-Options nosniff;
    add_header Content-Disposition "attachment";
    types {
        application/pdf pdf;
        application/vnd.openxmlformats-officedocument.wordprocessingml.document docx;
        image/jpeg jpg jpeg;
        image/png png;
        image/webp webp;
    }
    default_type application/octet-stream;
}
```

Если файлы должны проверяться на доступ через приложение, не отдавать `/storage/` напрямую. В MVP безопаснее отдавать через `/api/files/...` с проверкой доступа.

## 8. SSL

SSL выпускать через ispmanager/Let's Encrypt.

Проверить:

- `https://rezyume-online.ru/`;
- `https://www.rezyume-online.ru/`;
- редирект HTTP → HTTPS;
- webhook YooKassa доступен по HTTPS.

## 9. Playwright на сервере

Под пользователем приложения:

```bash
cd /var/www/rezyume/app
npx playwright install chromium
npx playwright install-deps chromium
```

Проверить генерацию PDF отдельным smoke-test route или через конструктор.

## 10. Переменные окружения

Файл `.env` лежит на сервере в `/var/www/rezyume/app/.env`.

Права:

```bash
chmod 600 /var/www/rezyume/app/.env
chown rezyume:rezyume /var/www/rezyume/app/.env
```

## 11. Деплой новой версии

```bash
cd /var/www/rezyume/app
git pull
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 reload rezyume-online
pm2 logs rezyume-online --lines 100
```

## 12. Rollback

Минимальный rollback:

```bash
cd /var/www/rezyume/app
git log --oneline -5
git checkout <previous_commit_hash>
npm ci
npx prisma generate
npm run build
pm2 reload rezyume-online
```

Если были миграции БД, rollback согласовывать отдельно. Не выполнять destructive migration без backup.

## 13. Backup

Nightly:

```bash
mysqldump --single-transaction --quick rezyume_online > /var/www/rezyume/backups/rezyume_online_$(date +%F).sql
tar -czf /var/www/rezyume/backups/rezyume_storage_$(date +%F).tar.gz /var/www/rezyume/storage
find /var/www/rezyume/backups -type f -mtime +14 -delete
```

Для production желательно вынести копию backup на отдельный диск или внешнее хранилище.

## 14. Логи

pm2:

```bash
pm2 logs rezyume-online
pm2 monit
```

nginx:

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

Приложение не должно логировать:

- пароль;
- password hash;
- session cookie;
- YooKassa secret;
- SMTP password;
- Gemini API key;
- полные телефоны/email пользователей в error logs.

## 15. Smoke-test после деплоя

Проверить:

1. `/api/health`.
2. `/`.
3. `/constructor`.
4. Сохранение резюме.
5. PDF export.
6. Публичная ссылка.
7. Тестовая оплата YooKassa на staging/test mode.
8. Webhook.
9. Login.
10. Кабинет.
11. DOCX.
12. Sitemap.
13. Robots.


## 99. Важно про донорский проект

Донор `imgfactory` не участвует в деплое. В production-репозитории не должно быть:

- донорской папки `_donors/imgfactory`;
- import/reference на локальный путь `/home/axel/code/_donors/imgfactory`;
- env-переменных донора;
- старых тарифов, подписок, балансов, очередей и worker-кода из донора.
