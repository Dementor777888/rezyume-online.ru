# data-model.md — Резюме онлайн

> Модель данных. Источник истины — Prisma schema ниже. БД: MariaDB. Опирается на `PRD.md` (разд. 8, 9), `ARCHITECTURE.md`, `design_system/`.

---

## 1. Сущности

- **User** — только платящие (бесплатные аккаунта не имеют). Роль user/employer/admin.
- **Resume** — резюме. Может быть анонимным (free, живёт 24 ч + грейс) или привязанным к User (paid, бессрочно). Данные секций — в JSON.
- **Payment** — платёж YooKassa, идемпотентность по внешнему id.
- **Promo** — промокоды (модуль из SaaS).
- **PromoRedemption** — факт применения промокода.
- **Subscription** — email-подписка на новые резюме в Базе (double opt-in).
- **CatalogSection / CatalogProfession** — рубрикатор SEO-каталога и Базы резюме.
- **Article** — блог.
- **ContentPage** — служебные/SEO-страницы с редактируемыми мета-тегами.
- **Faq** — вопросы-ответы.

## 2. Prisma schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // MariaDB-совместимо
  url      = env("DATABASE_URL")
}

enum Role {
  user
  employer
  admin
}

enum ResumeStatus {
  draft
  published
}

enum ResumeTier {
  free
  paid
}

enum PaymentStatus {
  pending
  succeeded
  canceled
  refunded
}

enum PromoType {
  free_access   // открывает AI-версию бесплатно
  percent       // скидка %
  fixed         // фикс. скидка в ₽
}

enum SubStatus {
  pending   // ждёт подтверждения (double opt-in)
  active
  unsubscribed
}

model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  role         Role     @default(user)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  resumes  Resume[]
  payments Payment[]

  @@index([email])
}

model Resume {
  id        String       @id @default(cuid())
  // null для анонимных бесплатных резюме
  userId    String?
  user      User?        @relation(fields: [userId], references: [id], onDelete: Cascade)

  tier      ResumeTier   @default(free)
  status    ResumeStatus @default(draft)
  title     String       @default("Моё резюме")

  // публичная ссылка
  publicToken String     @unique @default(cuid())
  // для free: время протухания ссылки (24 ч). null = бессрочно (paid)
  expiresAt   DateTime?

  // шаблон и оформление
  template  String       @default("start") // start | start_photo | clean | compact | one_column | academic | accent
  accent    String?      // blue | teal | graphite (только paid-пресеты)

  // данные резюме одним JSON: contacts, personal, experience[], education[], courses[], skills[], languages[], about, photo
  data      Json

  photoOriginalPath String?
  photoEnhancedPath String?

  // экспорт-кэш (инвалидируется при изменении data/template)
  pdfPath   String?
  docxPath  String?

  // ——— каталог / 152-ФЗ ———
  isPublic            Boolean  @default(false)
  consentDistribution Boolean  @default(false) // отдельное согласие ст.10.1
  consentVersion      String?  // версия текста согласия
  consentAt           DateTime?
  // маска: какие поля публиковать в Базе (по умолчанию контакты скрыты)
  publicFieldsMask    Json?    // {name:false, city:true, salary:true, contacts:false, ...}

  // привязка к каталогу для публичной выдачи
  professionId String?
  profession   CatalogProfession? @relation(fields: [professionId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  payment  Payment?

  @@index([userId])
  @@index([publicToken])
  @@index([isPublic, professionId])
  @@index([expiresAt])
}

model Payment {
  id         String        @id @default(cuid())
  userId     String
  user       User          @relation(fields: [userId], references: [id])
  resumeId   String        @unique
  resume     Resume        @relation(fields: [resumeId], references: [id])

  amount     Int           @default(9900) // копейки: 99.00 ₽
  status     PaymentStatus @default(pending)

  provider       String     @default("yookassa")
  providerPaymentId String? @unique // идемпотентность вебхука
  promoId    String?
  promo      Promo?        @relation(fields: [promoId], references: [id])

  createdAt  DateTime      @default(now())
  paidAt     DateTime?

  @@index([status])
  @@index([providerPaymentId])
}

model Promo {
  id         String    @id @default(cuid())
  code       String    @unique
  type       PromoType
  value      Int       @default(0)   // percent: 1-100; fixed: копейки; free_access: 0
  maxUses    Int?      // null = безлимит
  usedCount  Int       @default(0)
  expiresAt  DateTime?
  active     Boolean   @default(true)
  createdAt  DateTime  @default(now())

  payments    Payment[]
  redemptions PromoRedemption[]

  @@index([code])
}

model PromoRedemption {
  id        String   @id @default(cuid())
  promoId   String
  promo     Promo    @relation(fields: [promoId], references: [id])
  email     String
  resumeId  String?
  createdAt DateTime @default(now())

  @@index([promoId])
}

model Subscription {
  id            String    @id @default(cuid())
  email         String
  status        SubStatus @default(pending)
  confirmToken  String    @unique @default(cuid()) // double opt-in
  // выбранные разделы каталога (id секций)
  sections      Json      // ["sales","it",...]
  confirmedAt   DateTime?
  createdAt     DateTime  @default(now())

  @@unique([email])
  @@index([status])
}

model CatalogSection {
  id       String   @id            // "sales", "it", ...
  name     String                  // «Продажи и клиенты»
  slug     String   @unique
  order    Int      @default(0)

  professions CatalogProfession[]
}

model CatalogProfession {
  id        String   @id @default(cuid())
  sectionId String
  section   CatalogSection @relation(fields: [sectionId], references: [id])
  name      String                 // «Менеджер по продажам»
  slug      String   @unique
  subgroup  String?                // «Менеджеры» / «Розница»

  // SEO
  metaTitle       String?
  metaDescription String?

  resumes   Resume[]

  @@index([sectionId])
}

model Article {
  id         String   @id @default(cuid())
  slug       String   @unique
  category   String   // Составление резюме | Поиск работы | Собеседование | Карьера
  title      String
  excerpt    String   @db.Text
  body       String   @db.LongText
  cover      String?
  readMin    Int      @default(5)
  published  Boolean  @default(false)
  publishedAt DateTime?

  metaTitle       String?
  metaDescription String?

  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([category])
  @@index([published, publishedAt])
}

model ContentPage {
  id     String @id @default(cuid())
  slug   String @unique   // "about", "offer", "privacy", ...
  title  String
  body   String @db.LongText

  metaTitle       String?
  metaDescription String?

  updatedAt DateTime @updatedAt
}

model Faq {
  id       String  @id @default(cuid())
  question String
  answer   String  @db.Text
  order    Int     @default(0)
  onLanding Boolean @default(false) // выводить на лендинге со schema.org
}
```

## 3. Заметки по решениям

- **Данные резюме в JSON.** Секции гибкие (опыт/образование — массивы переменной длины), реляционная нормализация избыточна. JSON в MariaDB + рендер шаблоном. Валидация — на уровне приложения (zod).
- **Анонимные резюме.** `userId = null`, `expiresAt = now + 24ч`. Крон чистит просроченные (+ грейс 7 дней на восстановление по ссылке).
- **Одно резюме — один платёж.** Оплата привязана к резюме (`Payment.resumeId @unique`), после успеха `tier = paid`, `expiresAt = null`. Правки и повторные скачивания бесплатны — новый Payment не создаётся.
- **Идемпотентность оплаты** — `providerPaymentId @unique`, вебхук защищён от повторов.
- **Каталог = обезличенные SEO-примеры + опциональная База реальных резюме.** Публичная выдача реального резюме только при `isPublic && consentDistribution`, поля — по `publicFieldsMask` (контакты по умолчанию скрыты). Контакты открываются роли `employer`. SEO-примеры по профессиям — отдельный обезличенный контент, ПДн не содержат (можно хранить как Resume с вымышленными data или в отдельной таблице; на MVP — вымышленные data + `professionId`).
- **Меты редактируются в админке** — `metaTitle`/`metaDescription` у профессий, статей, страниц (по design-handoff).
- **Промокоды** — тип определяет поведение: `free_access` открывает AI-версию без оплаты, `percent`/`fixed` — скидка на 99 ₽.

## 4. Крон-задачи (node-cron внутри приложения)

- Удаление просроченных анонимных резюме (`expiresAt < now - 7д`).
- Digest подписки «новые резюме» по разделам (active-подписки).
- Nightly `mysqldump` + tar storage.

---

Следующий файл: `reuse-map.md` — что берём из готового SaaS (оплата, промокоды, лимиты), что адаптируем, что не берём.
