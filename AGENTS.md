# AGENTS.md — rezyume-online.ru

## Project identity

This repository is the SaaS project "Резюме Онлайн" / rezyume-online.ru.

The product is a Russian-language resume builder:
- free flow: resume wizard, live preview, 2 free templates, PDF export, public link for 24 hours, no registration;
- paid flow later: one-time 99 ₽ AI-version, no subscription, PDF + DOCX, all templates, permanent link, account;
- current development target: Slice 1 only — free resume without payment.

## Critical source documents

Before changing code, read:

- docs/00-README.md
- docs/CODEX.md
- docs/TASKS.md
- docs/ROADMAP.md
- docs/RESUME_DATA_CONTRACT.md
- docs/API.md
- docs/DESIGN_IMPLEMENTATION.md
- docs/ACCEPTANCE_CRITERIA.md
- docs/ENVIRONMENT.md
- docs/LOCAL_PATHS.md
- PRD.md
- ARCHITECTURE.md
- data-model.md
- reuse-map.md
- design-brief.md

If a document conflicts with another document, follow this priority:
1. AGENTS.md
2. docs/CODEX.md
3. docs/TASKS.md
4. docs/RESUME_DATA_CONTRACT.md
5. docs/API.md
6. docs/DESIGN_IMPLEMENTATION.md
7. PRD.md
8. ARCHITECTURE.md
9. data-model.md
10. design-brief.md

## Donor repository

The donor repository is read-only reference only.

WSL path:
- /home/axel/code/_donors/imgfactory

Windows Explorer path:
- \\wsl.localhost\Ubuntu\home\axel\code\_donors\imgfactory

For Slice 1, do not use the donor unless explicitly needed. Payment, promo codes, auth, email and rate-limit migration are not part of Slice 1.

Never copy the donor repository into this project.
Never import donor code blindly.
Never copy donor .env files, secrets, tokens, credentials or production data.

## Current goal

Implement Slice 1: free resume without payment.

The user must be able to:
1. open the local app;
2. fill a 6-step resume wizard;
3. see sticky live preview;
4. save draft in localStorage;
5. create anonymous free resume in the database;
6. download PDF for free;
7. receive a public link valid for 24 hours;
8. reopen the public resume page by token.

## Strict scope for Slice 1

Build only:

- Next.js app skeleton;
- Prisma + MariaDB or SQLite local fallback only if MariaDB is not available;
- Resume model changes required for anonymous edit token;
- resume data contract and zod validation;
- 6-step constructor:
  - contacts;
  - experience;
  - education;
  - skills;
  - photo;
  - template;
- localStorage draft autosave;
- live preview;
- 2 free templates:
  - start;
  - start_photo;
- PDF export with Cyrillic support;
- public resume page;
- 24-hour free link;
- basic consent checkbox for personal data processing;
- minimal seed data;
- lint/typecheck/build verification.

## Explicitly forbidden in Slice 1

Do not implement:
- YooKassa;
- payment;
- promo codes;
- paid templates;
- DOCX export;
- AI photo enhancement;
- Gemini/Nano Banana;
- voice input;
- import old resume;
- ATS scoring;
- cover letter;
- personal cabinet;
- employer role;
- resume database catalog of real users;
- email sending;
- admin panel;
- queues;
- Redis;
- BullMQ;
- Docker;
- Kubernetes;
- microservices;
- subscriptions;
- recurrent payments;
- balances;
- user wallets;
- GraphQL.

## Architecture rules

Use:
- Next.js 15 App Router;
- TypeScript;
- React;
- Prisma;
- zod;
- MariaDB-compatible Prisma schema;
- Playwright for PDF export;
- local disk storage under storage/ for generated files;
- one application process.

Do not introduce unnecessary abstractions.

## Local dev server rule

For manual checks, always free stale local dev server ports first and run this project on port 3000:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Do not leave this project running on alternate ports unless the user explicitly asks for a temporary diagnostic port.

## UX rules

The interface language is Russian.
Address users formally with "Вы".
Free flow must not require registration.
Free PDF must not be blocked by payment.
Do not hide the price later in the flow.
Do not add fake timers, fake discounts or preselected marketing checkboxes.

## Resume data rules

Use docs/RESUME_DATA_CONTRACT.md as the source of truth.
The same data contract must power:
- form state;
- validation;
- live preview;
- PDF rendering;
- public resume page.

Do not invent a second resume data structure.

## PDF rules

PDF must support Cyrillic from the first implementation.
The browser preview and PDF should share the same resume template components as much as practical.
Use print CSS and A4 layout.
After generating PDF, verify that Russian text is visible.

## Security rules

For anonymous free resumes:
- publicToken is only for viewing;
- edit token must be separate;
- store only editTokenHash, never raw edit token;
- do not expose internal IDs in public URLs;
- do not expose server filesystem paths to the browser.

## Verification required before final response

Before reporting done, run all available checks:
- install dependencies if needed;
- generate Prisma client;
- apply or prepare migration;
- run lint;
- run typecheck;
- run build;
- run a local smoke test if possible;
- document any command that failed and fix it.

## Done means

Slice 1 is done only when:

- npm install completed;
- app starts locally;
- constructor opens;
- data entered in the form updates live preview;
- draft survives page reload through localStorage;
- anonymous resume can be created;
- PDF can be generated and downloaded;
- public resume URL opens;
- free public URL has 24-hour expiry logic;
- Russian text renders in UI and PDF;
- no payment/AI/DOCX/auth functionality was added.
