# LOCAL_PATHS.md — локальные пути разработки

Этот файл фиксирует пользовательские локальные пути, которые нужны Codex/VS Code для работы с донором старого SaaS.

## 1. Донор старого SaaS

**Название донора:** `imgfactory`

**Путь в Windows Explorer:**

```text
\\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory
```

**Путь внутри WSL/Ubuntu:**

```bash
/home/axel/code/_donors/imgfactory
```

Для команд в терминале VS Code, если проект открыт через WSL, использовать именно Linux-путь:

```bash
cd /home/axel/code/_donors/imgfactory
```

UNC-путь `\\wsl.localhost\...` нужен только для открытия папки из Windows Explorer. В командах Bash/Codex использовать его не нужно.

## 2. Роль донора

Донор используется только как read-only reference для аудита и переноса отдельных решений:

- YooKassa client;
- создание платежа;
- webhook;
- промокоды;
- auth/password/session;
- SMTP/email;
- rate-limit/anti-abuse.

Донор не является частью нового репозитория `rezyume-online` и не должен импортироваться из production-кода.

## 3. Что нельзя делать

Нельзя:

- копировать папку `/home/axel/code/_donors/imgfactory` внутрь `rezyume-online/src`;
- делать import из донорской папки в новом коде;
- коммитить донорский репозиторий в новый Git;
- переносить `.env` донора;
- переносить подписки, рекуррент, балансы, очереди, воркеры, старые тарифы и старый UI оплаты.

## 4. Проверка доступности донора

Команды для терминала WSL:

```bash
cd /home/axel/code/_donors/imgfactory
pwd
ls -la
git status --short
find . -maxdepth 4 -type f | grep -Ei 'yookassa|payment|pay|promo|webhook|auth|email|mail|smtp|limit' | head -100
```

Если команда `cd` не сработала, значит донор ещё не доступен в WSL по ожидаемому пути или путь отличается.
