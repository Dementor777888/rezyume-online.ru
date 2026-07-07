# Docs-пакет для старта разработки «Резюме Онлайн»

Этот комплект дополняет базовые документы проекта и нужен перед загрузкой репозитория в VS Code/Codex.

## Как использовать

1. В новом репозитории создать папку `docs/`.
2. Скопировать туда базовые документы проекта:
   - `PRD.md`
   - `ARCHITECTURE.md`
   - `data-model.md`
   - `reuse-map.md`
   - `seo-catalog.md`
   - `competitor-research.md`
   - `design-brief.md`
3. Распаковать дизайн-систему в папку `design_system/` в корне проекта.
4. Скопировать файлы из этого пакета в `docs/`.
5. Перед первым заданием Codex открыть `docs/CODEX.md` и `docs/TASKS.md`.

## Рекомендуемая структура репозитория

```text
rezyume-online/
  docs/
    PRD.md
    ARCHITECTURE.md
    data-model.md
    reuse-map.md
    seo-catalog.md
    competitor-research.md
    design-brief.md
    CODEX.md
    ROADMAP.md
    TASKS.md
    RESUME_DATA_CONTRACT.md
    API.md
    DESIGN_IMPLEMENTATION.md
    ACCEPTANCE_CRITERIA.md
    ENVIRONMENT.md
    DEPLOYMENT.md
    DONOR_REUSE_PLAN.md
    DONOR_PAYMENT_AUDIT.md
    SECURITY_AND_LEGAL.md
    SEED_DATA_PLAN.md
    CODEX_PROMPTS.md
    LOCAL_PATHS.md
  design_system/
  prisma/
  public/
  src/
```

## Главный принцип старта

Не просить Codex «сделать весь SaaS». Первый рабочий вертикальный срез:

```text
форма конструктора → live preview → сохранение Resume → бесплатный PDF → публичная ссылка 24 часа
```

Оплата, кабинет, DOCX, SEO-каталог, админка и AI подключаются после того, как этот срез стабильно работает.

## Донор второго SaaS

Локальный донор уже задан:

```text
Windows Explorer: \\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory
WSL/Bash:         /home/axel/code/_donors/imgfactory
```

Для VS Code/Codex в WSL использовать путь `/home/axel/code/_donors/imgfactory`. UNC-путь `\\wsl.localhost\...` нужен только для открытия папки из Windows.

Старый SaaS использовать только как временный read-only источник для:

- YooKassa client;
- создания платежа;
- webhook;
- идемпотентности;
- промокодов;
- email-отправки;
- auth/password/session;
- rate-limit/антиабуз.

Донор не должен попадать внутрь `src/` нового проекта и не должен становиться равноправной частью репозитория.
