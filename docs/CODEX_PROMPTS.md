# CODEX_PROMPTS.md — готовые промпты для Codex

## 1. Первый запуск проекта

```text
Прочитай docs/CODEX.md, docs/PRD.md, docs/ARCHITECTURE.md, docs/data-model.md, docs/RESUME_DATA_CONTRACT.md и docs/TASKS.md.

Выполни только задачу P0.01 из docs/TASKS.md: создай каркас Next.js 15 App Router с TypeScript strict, базовой структурой src/, главной страницей и /api/health.

Не подключай оплату, кабинет, SEO-каталог, AI, DOCX и админку. Не добавляй Docker, Redis, очереди, подписки, балансы и микросервисы.

После выполнения покажи список созданных файлов и команды для проверки.
```

## 2. Prisma и модель данных

```text
Прочитай docs/CODEX.md, docs/data-model.md, docs/RESUME_DATA_CONTRACT.md и docs/TASKS.md.

Выполни задачу P0.02: подключи Prisma и MariaDB. Перенеси Prisma schema из docs/data-model.md и добавь в Resume поле editTokenHash String? @unique, потому что publicToken используется только для просмотра, а anonymous edit требует отдельный секретный токен.

Создай src/lib/db/prisma.ts. Не меняй продуктовую модель оплаты. Не добавляй подписки, балансы и очереди.

После выполнения покажи команды npx prisma validate и npx prisma migrate dev.
```

## 3. Контракт ResumeData

```text
Прочитай docs/RESUME_DATA_CONTRACT.md и docs/TASKS.md.

Выполни задачи P1.01 и P1.02: создай TypeScript-типы ResumeData и zod-валидацию. Все поля должны соответствовать контракту из документа. Не используй any для Resume.data.

Добавь src/types/resume.ts и src/lib/validation/resume.ts. Реализуй дефолтный объект ResumeData.

После выполнения покажи пример использования validation schema.
```

## 4. Seed-фикстуры

```text
Прочитай docs/SEED_DATA_PLAN.md и docs/TASKS.md.

Выполни задачу P1.03: создай src/lib/resume/fixtures.ts с реалистичными вымышленными резюме для менеджера по продажам, frontend-разработчика, бухгалтера, логиста и администратора.

Данные должны соответствовать ResumeData из docs/RESUME_DATA_CONTRACT.md. Не используй реальные персональные данные.
```

## 5. Конструктор shell

```text
Прочитай docs/CODEX.md, docs/DESIGN_IMPLEMENTATION.md, docs/RESUME_DATA_CONTRACT.md и docs/TASKS.md.

Выполни задачу P2.01: создай экран /constructor с layout конструктора, stepper 6 шагов, левой областью формы и правым sticky live preview на десктопе. На мобайле preview должен открываться через нижнюю модалку или drawer.

Пока используй seed-данные и не подключай серверное сохранение. Не добавляй оплату, auth, AI и DOCX.
```

## 6. LocalStorage draft

```text
Прочитай docs/TASKS.md и docs/RESUME_DATA_CONTRACT.md.

Выполни задачу P2.02: реализуй localStorage draft для конструктора. Draft должен сохраняться при изменении формы, восстанавливаться после перезагрузки и очищаться отдельной кнопкой.

Добавь индикатор статуса сохранения. Не отправляй данные на сервер в этой задаче.
```

## 7. Free-шаблоны резюме

```text
Прочитай docs/DESIGN_IMPLEMENTATION.md, docs/RESUME_DATA_CONTRACT.md и docs/TASKS.md.

Выполни задачу P2.04: реализуй два free-шаблона резюме start и start_photo. Оба должны принимать ResumeTemplateProps, использовать один ResumeData и корректно рендерить кириллицу.

Не делай отдельную структуру данных для шаблонов. Не подключай PDF в этой задаче.
```

## 8. Сохранение Resume

```text
Прочитай docs/API.md, docs/RESUME_DATA_CONTRACT.md, docs/data-model.md и docs/TASKS.md.

Выполни задачу P3.01: реализуй POST /api/resumes. Endpoint должен валидировать ResumeData, требовать personalDataAccepted, создавать anonymous free Resume с expiresAt = now + 24h, publicToken и editTokenHash.

Верни resumeId, publicToken, publicUrl, editToken и expiresAt. В БД хранить только hash editToken.
```

## 9. PDF export

```text
Прочитай docs/API.md, docs/DESIGN_IMPLEMENTATION.md, docs/DEPLOYMENT.md и docs/TASKS.md.

Выполни задачи P3.02 и P3.03: создай print route /print/resume/[id] и PDF export через Playwright. Используй те же React-шаблоны, что live preview. PDF должен иметь корректную кириллицу и A4-разметку.

Не подключай DOCX и оплату в этой задаче.
```

## 10. Донор оплаты — только аудит

```text
Прочитай docs/CODEX.md, docs/LOCAL_PATHS.md, docs/DONOR_REUSE_PLAN.md, docs/DONOR_PAYMENT_AUDIT.md, docs/API.md и docs/data-model.md.

Донорский проект находится в WSL по пути: `/home/axel/code/_donors/imgfactory`.
Windows UNC-путь только для справки: `\\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory`.

Используй донорский проект только как read-only reference. Не меняй код нового проекта.

Сначала проверь доступность донора командами в терминале WSL: cd /home/axel/code/_donors/imgfactory && pwd && ls -la && git status --short.

Затем найди в доноре YooKassa client, create payment, webhook, promo, auth/password/session, email и rate-limit. Заполни docs/DONOR_PAYMENT_AUDIT.md: файлы, зависимости, env-переменные, что переносим, что запрещено.

Не переноси подписки, рекуррент, балансы, лимиты как валюту, очереди, воркеры, старые тарифы и старый UI оплаты.
```

## 11. Реализация оплаты после аудита

```text
Прочитай docs/CODEX.md, docs/API.md, docs/data-model.md, docs/LOCAL_PATHS.md, docs/DONOR_REUSE_PLAN.md и заполненный docs/DONOR_PAYMENT_AUDIT.md.

Реализуй payment create и YooKassa webhook строго под новый сервис:
- сумма 9900 копеек;
- один Payment на один Resume;
- разовый платеж;
- без подписки;
- без рекуррента;
- providerPaymentId unique;
- webhook payment.succeeded активирует Resume.tier = paid и Resume.expiresAt = null.

Используй код донора только как reference. Не переноси запрещённые части.
```
