# RESUME_DATA_CONTRACT.md — контракт `Resume.data`

## 1. Назначение

`Resume.data` хранится в MariaDB как JSON. Это единый источник данных для:

- формы конструктора;
- live preview;
- PDF;
- DOCX;
- публичной страницы резюме;
- SEO-примеров;
- будущего AI-разбора.

Нельзя делать отдельные структуры данных для preview, PDF и DOCX. Все рендереры должны читать один контракт.

## 2. Версионирование

Каждый JSON должен иметь `schemaVersion`.

Текущая версия:

```ts
export const RESUME_DATA_SCHEMA_VERSION = 1 as const
```

При изменении структуры добавляется миграционная функция:

```text
migrateResumeData(input) → ResumeData
```

## 3. TypeScript-типы

```ts
export type ResumeSchemaVersion = 1

export type TemplateId =
  | 'start'
  | 'start_photo'
  | 'clean'
  | 'compact'
  | 'one_column'
  | 'academic'
  | 'accent'

export type AccentId = 'blue' | 'teal' | 'graphite'

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export type LanguageLevel =
  | 'beginner'
  | 'elementary'
  | 'intermediate'
  | 'upper_intermediate'
  | 'advanced'
  | 'native'

export interface ResumeData {
  schemaVersion: ResumeSchemaVersion
  contacts: ResumeContacts
  personal: ResumePersonal
  experience: ResumeExperienceItem[]
  education: ResumeEducationItem[]
  courses: ResumeCourseItem[]
  skills: ResumeSkillItem[]
  languages: ResumeLanguageItem[]
  about: string
  photo: ResumePhoto | null
  preferences: ResumePreferences
  consent: ResumeConsentState
}

export interface ResumeContacts {
  fullName: string
  position: string
  phone: string
  email: string
  city: string
  telegram: string
  website: string
}

export interface ResumePersonal {
  birthDate: string
  citizenship: string
  relocation: string
  businessTrips: string
  salary: string
  employment: string
  schedule: string
}

export interface ResumeExperienceItem {
  id: string
  company: string
  position: string
  city: string
  startDate: string
  endDate: string
  isCurrent: boolean
  description: string[]
}

export interface ResumeEducationItem {
  id: string
  institution: string
  faculty: string
  specialty: string
  degree: string
  startYear: string
  endYear: string
}

export interface ResumeCourseItem {
  id: string
  title: string
  organization: string
  year: string
  description: string
}

export interface ResumeSkillItem {
  id: string
  name: string
  level: SkillLevel
  category: 'hard' | 'soft' | 'tool' | 'other'
}

export interface ResumeLanguageItem {
  id: string
  name: string
  level: LanguageLevel
}

export interface ResumePhoto {
  originalPath: string
  enhancedPath: string
  selectedPath: string
  crop: ResumePhotoCrop
}

export interface ResumePhotoCrop {
  x: number
  y: number
  width: number
  height: number
  shape: 'circle' | 'square'
}

export interface ResumePreferences {
  template: TemplateId
  accent: AccentId
  showPhoto: boolean
  showSalary: boolean
  showBirthDate: boolean
}

export interface ResumeConsentState {
  personalDataAccepted: boolean
  personalDataAcceptedAt: string
  publishToBaseRequested: boolean
  distributionConsentAccepted: boolean
  distributionConsentAcceptedAt: string
  consentVersion: string
  publicFieldsMask: PublicFieldsMask
}

export interface PublicFieldsMask {
  fullName: boolean
  firstNameOnly: boolean
  photo: boolean
  city: boolean
  salary: boolean
  age: boolean
  phone: boolean
  email: boolean
  telegram: boolean
  website: boolean
  experience: boolean
  education: boolean
  skills: boolean
  languages: boolean
  about: boolean
}
```

## 4. Дефолтный объект

```json
{
  "schemaVersion": 1,
  "contacts": {
    "fullName": "",
    "position": "",
    "phone": "",
    "email": "",
    "city": "",
    "telegram": "",
    "website": ""
  },
  "personal": {
    "birthDate": "",
    "citizenship": "",
    "relocation": "",
    "businessTrips": "",
    "salary": "",
    "employment": "",
    "schedule": ""
  },
  "experience": [],
  "education": [],
  "courses": [],
  "skills": [],
  "languages": [],
  "about": "",
  "photo": null,
  "preferences": {
    "template": "start",
    "accent": "blue",
    "showPhoto": false,
    "showSalary": true,
    "showBirthDate": false
  },
  "consent": {
    "personalDataAccepted": false,
    "personalDataAcceptedAt": "",
    "publishToBaseRequested": false,
    "distributionConsentAccepted": false,
    "distributionConsentAcceptedAt": "",
    "consentVersion": "2026-07-01",
    "publicFieldsMask": {
      "fullName": false,
      "firstNameOnly": true,
      "photo": false,
      "city": true,
      "salary": true,
      "age": false,
      "phone": false,
      "email": false,
      "telegram": false,
      "website": false,
      "experience": true,
      "education": true,
      "skills": true,
      "languages": true,
      "about": true
    }
  }
}
```

## 5. Пример заполненного резюме

```json
{
  "schemaVersion": 1,
  "contacts": {
    "fullName": "Анна Викторовна Соколова",
    "position": "Менеджер по продажам B2B",
    "phone": "+7 900 123-45-67",
    "email": "anna.sokolova@example.com",
    "city": "Москва",
    "telegram": "@anna_sales_demo",
    "website": ""
  },
  "personal": {
    "birthDate": "1992-04-18",
    "citizenship": "Россия",
    "relocation": "не готова к переезду",
    "businessTrips": "готова к редким командировкам",
    "salary": "120 000 ₽",
    "employment": "полная занятость",
    "schedule": "полный день"
  },
  "experience": [
    {
      "id": "exp_sales_001",
      "company": "ООО «Деловые решения»",
      "position": "Ведущий менеджер по продажам",
      "city": "Москва",
      "startDate": "2021-03",
      "endDate": "",
      "isCurrent": true,
      "description": [
        "Вела цикл B2B-продаж от первого контакта до повторных сделок.",
        "Увеличила повторные продажи в своём сегменте на 28% за год.",
        "Подготовила базу типовых коммерческих предложений для 6 отраслей."
      ]
    },
    {
      "id": "exp_sales_002",
      "company": "АО «Профмаркет»",
      "position": "Менеджер по работе с клиентами",
      "city": "Москва",
      "startDate": "2018-06",
      "endDate": "2021-02",
      "isCurrent": false,
      "description": [
        "Обрабатывала входящие заявки и сопровождала клиентов после сделки.",
        "Поддерживала клиентскую базу из 140 активных компаний.",
        "Сократила среднее время ответа клиенту с 2 часов до 35 минут."
      ]
    }
  ],
  "education": [
    {
      "id": "edu_001",
      "institution": "Российский экономический университет имени Г. В. Плеханова",
      "faculty": "Менеджмент",
      "specialty": "Маркетинг и продажи",
      "degree": "Бакалавр",
      "startYear": "2010",
      "endYear": "2014"
    }
  ],
  "courses": [
    {
      "id": "course_001",
      "title": "Переговоры в B2B-продажах",
      "organization": "Нетология",
      "year": "2023",
      "description": "Работа с возражениями, структура коммерческого предложения, повторные продажи."
    }
  ],
  "skills": [
    {
      "id": "skill_001",
      "name": "B2B-продажи",
      "level": 5,
      "category": "hard"
    },
    {
      "id": "skill_002",
      "name": "CRM Bitrix24",
      "level": 4,
      "category": "tool"
    },
    {
      "id": "skill_003",
      "name": "Переговоры",
      "level": 5,
      "category": "soft"
    }
  ],
  "languages": [
    {
      "id": "lang_001",
      "name": "Английский",
      "level": "intermediate"
    }
  ],
  "about": "Менеджер по продажам с опытом в B2B-сегменте. Сильна в повторных продажах, работе с возражениями и сопровождении клиентов после сделки.",
  "photo": null,
  "preferences": {
    "template": "start",
    "accent": "blue",
    "showPhoto": false,
    "showSalary": true,
    "showBirthDate": false
  },
  "consent": {
    "personalDataAccepted": true,
    "personalDataAcceptedAt": "2026-07-06T12:00:00.000Z",
    "publishToBaseRequested": false,
    "distributionConsentAccepted": false,
    "distributionConsentAcceptedAt": "",
    "consentVersion": "2026-07-01",
    "publicFieldsMask": {
      "fullName": false,
      "firstNameOnly": true,
      "photo": false,
      "city": true,
      "salary": true,
      "age": false,
      "phone": false,
      "email": false,
      "telegram": false,
      "website": false,
      "experience": true,
      "education": true,
      "skills": true,
      "languages": true,
      "about": true
    }
  }
}
```

## 6. Правила валидации

### `contacts`

| Поле | Правило |
|---|---|
| `fullName` | обязательно перед экспортом, 2–120 символов |
| `position` | обязательно перед экспортом, 2–120 символов |
| `phone` | опционально, 5–40 символов |
| `email` | опционально, валидный email, до 120 символов |
| `city` | опционально, до 80 символов |
| `telegram` | опционально, до 80 символов |
| `website` | опционально, URL или пустая строка |

### `personal`

| Поле | Правило |
|---|---|
| `birthDate` | `YYYY-MM-DD` или пустая строка |
| `citizenship` | до 80 символов |
| `relocation` | до 120 символов |
| `businessTrips` | до 120 символов |
| `salary` | до 80 символов |
| `employment` | до 80 символов |
| `schedule` | до 80 символов |

### `experience`

- Максимум 15 мест работы.
- `company`: 1–120 символов.
- `position`: 1–120 символов.
- `city`: до 80 символов.
- `startDate`: `YYYY-MM` или пустая строка.
- `endDate`: `YYYY-MM` или пустая строка.
- `description`: максимум 8 пунктов.
- Один пункт description: 1–300 символов.

### `education`

- Максимум 10 записей.
- Каждое текстовое поле до 160 символов.
- `startYear`, `endYear`: 4 цифры или пустая строка.

### `courses`

- Максимум 10 записей.
- `title`: до 160 символов.
- `organization`: до 120 символов.
- `year`: 4 цифры или пустая строка.
- `description`: до 300 символов.

### `skills`

- Максимум 40 навыков.
- `name`: 1–80 символов.
- `level`: 1–5.

### `languages`

- Максимум 10 языков.
- `name`: 1–80 символов.
- `level`: одно из значений `LanguageLevel`.

### `about`

- До 1200 символов.
- Переводы строк разрешены.

### `photo`

- `originalPath`, `enhancedPath`, `selectedPath` не принимаются напрямую от клиента как filesystem-путь.
- Клиент получает только file id или публичный безопасный URL.
- Реальные пути формирует backend.

## 7. Связь с Prisma `Resume`

Поля из Prisma:

```text
Resume.template ← ResumeData.preferences.template
Resume.accent   ← ResumeData.preferences.accent
Resume.data     ← ResumeData целиком
```

При сохранении нужно синхронизировать верхнеуровневые поля `template` и `accent`, чтобы можно было быстро фильтровать и рендерить без парсинга JSON.

## 8. Безопасность анонимного редактирования

В текущую Prisma-модель нужно добавить поле:

```prisma
editTokenHash String? @unique
```

Причина: `publicToken` предназначен для просмотра публичной ссылки. Для редактирования анонимного free-резюме нужен отдельный секретный токен, который хранится у пользователя в localStorage и не раскрывается в публичной ссылке.

Правило:

- backend возвращает `editToken` только при создании резюме;
- в БД хранится только hash;
- `PATCH /api/resumes/[id]` для anonymous resume требует `editToken`;
- paid resume редактируется только владельцем через session.
