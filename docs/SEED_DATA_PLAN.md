# SEED_DATA_PLAN.md — seed-данные для разработки

## 1. Зачем нужны seed-данные

Seed-данные нужны, чтобы Codex и разработчик не собирали интерфейсы на пустых экранах.

Они должны покрывать:

- разные профессии;
- разные длины опыта;
- резюме с фото и без фото;
- free и paid;
- SEO-каталог;
- статьи;
- FAQ;
- промокоды;
- служебные страницы.

Все данные должны быть вымышленными.

## 2. CatalogSection seed

```json
[
  {
    "id": "sales",
    "name": "Продажи и клиенты",
    "slug": "prodazhi",
    "order": 10
  },
  {
    "id": "it",
    "name": "IT и разработка",
    "slug": "it",
    "order": 20
  },
  {
    "id": "logistics",
    "name": "Логистика и транспорт",
    "slug": "logistika",
    "order": 30
  },
  {
    "id": "finance",
    "name": "Бухгалтерия и финансы",
    "slug": "buhgalteriya-finansy",
    "order": 40
  },
  {
    "id": "admin",
    "name": "Административный персонал",
    "slug": "administrativnyj-personal",
    "order": 50
  }
]
```

## 3. CatalogProfession seed

```json
[
  {
    "sectionId": "sales",
    "name": "Менеджер по продажам",
    "slug": "menedzher-po-prodazham",
    "subgroup": "Менеджеры",
    "metaTitle": "Резюме менеджера по продажам — образец 2026",
    "metaDescription": "Готовый пример резюме менеджера по продажам: опыт, навыки, достижения и структура для отклика работодателю."
  },
  {
    "sectionId": "sales",
    "name": "Менеджер по работе с клиентами",
    "slug": "menedzher-po-rabote-s-klientami",
    "subgroup": "Клиентский сервис",
    "metaTitle": "Резюме менеджера по работе с клиентами — образец 2026",
    "metaDescription": "Пример резюме менеджера по работе с клиентами с готовыми формулировками для опыта и навыков."
  },
  {
    "sectionId": "it",
    "name": "Frontend-разработчик",
    "slug": "frontend-razrabotchik",
    "subgroup": "Разработка",
    "metaTitle": "Резюме frontend-разработчика — образец 2026",
    "metaDescription": "Готовый пример резюме frontend-разработчика: стек, проекты, опыт и навыки для отклика."
  },
  {
    "sectionId": "it",
    "name": "Тестировщик ПО",
    "slug": "testirovshchik-po",
    "subgroup": "QA",
    "metaTitle": "Резюме тестировщика ПО — образец 2026",
    "metaDescription": "Образец резюме QA-инженера: тест-кейсы, баг-репорты, инструменты и опыт."
  },
  {
    "sectionId": "logistics",
    "name": "Логист",
    "slug": "logist",
    "subgroup": "Логистика",
    "metaTitle": "Резюме логиста — образец 2026",
    "metaDescription": "Пример резюме логиста: маршруты, документы, перевозчики, склад и оптимизация затрат."
  },
  {
    "sectionId": "finance",
    "name": "Бухгалтер",
    "slug": "buhgalter",
    "subgroup": "Бухгалтерия",
    "metaTitle": "Резюме бухгалтера — образец 2026",
    "metaDescription": "Готовый пример резюме бухгалтера с описанием опыта, программ, отчётности и навыков."
  },
  {
    "sectionId": "admin",
    "name": "Администратор офиса",
    "slug": "administrator-ofisa",
    "subgroup": "Офис",
    "metaTitle": "Резюме администратора офиса — образец 2026",
    "metaDescription": "Пример резюме администратора офиса: документы, коммуникации, организация встреч и поддержка сотрудников."
  }
]
```

## 4. Resume fixtures

### 4.1 Менеджер по продажам

Использовать заполненный пример из `RESUME_DATA_CONTRACT.md`.

### 4.2 Frontend-разработчик

```json
{
  "schemaVersion": 1,
  "contacts": {
    "fullName": "Илья Андреевич Морозов",
    "position": "Frontend-разработчик",
    "phone": "+7 901 234-56-78",
    "email": "ilya.morozov@example.com",
    "city": "Санкт-Петербург",
    "telegram": "@ilya_frontend_demo",
    "website": "https://example.com/ilya-portfolio"
  },
  "personal": {
    "birthDate": "1995-09-12",
    "citizenship": "Россия",
    "relocation": "готов к удалённой работе",
    "businessTrips": "не готов к командировкам",
    "salary": "180 000 ₽",
    "employment": "полная занятость",
    "schedule": "удалённо или гибрид"
  },
  "experience": [
    {
      "id": "exp_front_001",
      "company": "ООО «Веб-платформа»",
      "position": "Frontend-разработчик",
      "city": "Санкт-Петербург",
      "startDate": "2022-02",
      "endDate": "",
      "isCurrent": true,
      "description": [
        "Разрабатывал интерфейсы личного кабинета на React и TypeScript.",
        "Перевёл 18 legacy-компонентов на единый UI-kit.",
        "Сократил время загрузки ключевой страницы с 4,2 до 1,8 секунды."
      ]
    },
    {
      "id": "exp_front_002",
      "company": "Студия «Новый интерфейс»",
      "position": "Junior frontend-разработчик",
      "city": "Санкт-Петербург",
      "startDate": "2020-07",
      "endDate": "2022-01",
      "isCurrent": false,
      "description": [
        "Верстал адаптивные страницы для интернет-магазинов и сервисных сайтов.",
        "Поддерживал компоненты на Vue и React.",
        "Настроил Storybook для 35 компонентов проекта."
      ]
    }
  ],
  "education": [
    {
      "id": "edu_front_001",
      "institution": "Санкт-Петербургский политехнический университет Петра Великого",
      "faculty": "Институт компьютерных наук",
      "specialty": "Прикладная информатика",
      "degree": "Бакалавр",
      "startYear": "2013",
      "endYear": "2017"
    }
  ],
  "courses": [
    {
      "id": "course_front_001",
      "title": "Продвинутый React и TypeScript",
      "organization": "Hexlet",
      "year": "2023",
      "description": "Архитектура компонентов, типизация props, оптимизация рендера."
    }
  ],
  "skills": [
    { "id": "skill_front_001", "name": "React", "level": 5, "category": "hard" },
    { "id": "skill_front_002", "name": "TypeScript", "level": 5, "category": "hard" },
    { "id": "skill_front_003", "name": "Next.js", "level": 4, "category": "hard" },
    { "id": "skill_front_004", "name": "Figma", "level": 4, "category": "tool" }
  ],
  "languages": [
    { "id": "lang_front_001", "name": "Английский", "level": "upper_intermediate" }
  ],
  "about": "Frontend-разработчик с опытом создания личных кабинетов, UI-kit и адаптивных интерфейсов. Люблю аккуратную типизацию, понятные компоненты и быстрые страницы.",
  "photo": null,
  "preferences": {
    "template": "clean",
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

### 4.3 Логист

```json
{
  "schemaVersion": 1,
  "contacts": {
    "fullName": "Дмитрий Павлович Орлов",
    "position": "Логист",
    "phone": "+7 902 345-67-89",
    "email": "dmitry.orlov@example.com",
    "city": "Казань",
    "telegram": "@orlov_logistics_demo",
    "website": ""
  },
  "personal": {
    "birthDate": "1989-01-30",
    "citizenship": "Россия",
    "relocation": "не готов к переезду",
    "businessTrips": "готов к командировкам",
    "salary": "110 000 ₽",
    "employment": "полная занятость",
    "schedule": "полный день"
  },
  "experience": [
    {
      "id": "exp_log_001",
      "company": "ТК «Региональная доставка»",
      "position": "Логист",
      "city": "Казань",
      "startDate": "2020-05",
      "endDate": "",
      "isCurrent": true,
      "description": [
        "Планировал автомобильные перевозки по России и контролировал сроки доставки.",
        "Снизил долю просрочек с 9% до 3% за счёт пересмотра маршрутов.",
        "Вёл переговоры с перевозчиками и согласовывал ставки на регулярные рейсы."
      ]
    }
  ],
  "education": [
    {
      "id": "edu_log_001",
      "institution": "Казанский национальный исследовательский технологический университет",
      "faculty": "Управление и автоматизация",
      "specialty": "Логистика",
      "degree": "Специалист",
      "startYear": "2006",
      "endYear": "2011"
    }
  ],
  "courses": [],
  "skills": [
    { "id": "skill_log_001", "name": "Маршрутизация", "level": 5, "category": "hard" },
    { "id": "skill_log_002", "name": "Транспортные документы", "level": 5, "category": "hard" },
    { "id": "skill_log_003", "name": "Excel", "level": 4, "category": "tool" }
  ],
  "languages": [],
  "about": "Логист с опытом автомобильных перевозок, работы с перевозчиками и оптимизации маршрутов. Внимателен к документам, срокам и экономике рейсов.",
  "photo": null,
  "preferences": {
    "template": "compact",
    "accent": "teal",
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

## 5. Promo seed

```json
[
  {
    "code": "START99",
    "type": "percent",
    "value": 50,
    "maxUses": 100,
    "active": true
  },
  {
    "code": "FREEDEMO",
    "type": "free_access",
    "value": 0,
    "maxUses": 20,
    "active": true
  },
  {
    "code": "MINUS50",
    "type": "fixed",
    "value": 5000,
    "maxUses": 100,
    "active": true
  }
]
```

## 6. FAQ seed

```json
[
  {
    "question": "Можно ли скачать резюме бесплатно?",
    "answer": "Да. Бесплатно доступны два шаблона, PDF-файл и публичная ссылка на 24 часа.",
    "order": 10,
    "onLanding": true
  },
  {
    "question": "У вас есть подписка?",
    "answer": "Нет. Платная AI-версия оплачивается один раз — 99 ₽, без подписки и скрытых списаний.",
    "order": 20,
    "onLanding": true
  },
  {
    "question": "Что входит в AI-версию?",
    "answer": "В AI-версию входят дополнительные шаблоны, DOCX, бессрочная ссылка, личный кабинет, AI-улучшение фото и будущие AI-функции сервиса.",
    "order": 30,
    "onLanding": true
  },
  {
    "question": "Нужно ли регистрироваться?",
    "answer": "Для бесплатного резюме регистрация не нужна. Личный кабинет создаётся только после оплаты, чтобы резюме сохранилось навсегда.",
    "order": 40,
    "onLanding": true
  },
  {
    "question": "Можно ли редактировать резюме после оплаты?",
    "answer": "Да. В личном кабинете можно исправлять резюме и скачивать файлы повторно без новой оплаты.",
    "order": 50,
    "onLanding": true
  }
]
```

## 7. Article seed

```json
[
  {
    "slug": "kak-sostavit-rezyume-v-2026",
    "category": "Составление резюме",
    "title": "Как составить резюме в 2026 году",
    "excerpt": "Разбираем структуру современного резюме: что писать в опыте, навыках, образовании и блоке о себе.",
    "body": "Современное резюме должно быстро отвечать на главный вопрос работодателя: почему именно этот кандидат подходит на вакансию. Начните с должности, контактов и короткого профессионального описания. В опыте делайте акцент не только на обязанностях, но и на результатах: цифрах, сроках, экономии, росте продаж, снижении ошибок. Навыки разделяйте на профессиональные инструменты и личные качества. Не перегружайте резюме лишними деталями: одна-две страницы обычно достаточно.",
    "readMin": 5,
    "published": true
  },
  {
    "slug": "chto-pisat-v-opyte-raboty",
    "category": "Составление резюме",
    "title": "Что писать в опыте работы",
    "excerpt": "Примеры сильных формулировок для опыта работы и частые ошибки соискателей.",
    "body": "В блоке опыта важно показать не список задач, а пользу, которую вы приносили компании. Вместо фразы «работал с клиентами» лучше написать «сопровождал клиентскую базу из 120 компаний и увеличил повторные продажи на 18%». Если точных цифр нет, используйте масштаб: количество проектов, клиентов, документов, заявок или сотрудников. Каждый пункт должен помогать работодателю понять ваш уровень.",
    "readMin": 4,
    "published": true
  },
  {
    "slug": "kakie-navyki-ukazat-v-rezyume",
    "category": "Поиск работы",
    "title": "Какие навыки указать в резюме",
    "excerpt": "Как выбрать навыки под вакансию и не превратить резюме в случайный список качеств.",
    "body": "Навыки в резюме должны соответствовать вакансии. Разделите их на инструменты, профессиональные компетенции и soft skills. Для бухгалтера важны 1С, отчётность и внимательность к документам. Для frontend-разработчика — React, TypeScript, Next.js и работа с макетами. Не пишите слишком общие качества без подтверждения опытом.",
    "readMin": 4,
    "published": true
  }
]
```

## 8. ContentPage seed

```json
[
  {
    "slug": "privacy",
    "title": "Политика конфиденциальности",
    "body": "Текст политики конфиденциальности готовится перед публичным запуском и согласуется с юристом."
  },
  {
    "slug": "offer",
    "title": "Оферта",
    "body": "Текст оферты готовится перед публичным запуском и должен явно фиксировать разовую оплату без подписки."
  },
  {
    "slug": "personal-data-consent",
    "title": "Согласие на обработку персональных данных",
    "body": "Текст согласия на обработку персональных данных готовится перед публичным запуском."
  },
  {
    "slug": "distribution-consent",
    "title": "Согласие на распространение персональных данных",
    "body": "Отдельное согласие для публикации резюме в Базе резюме. Не объединять с общим согласием на обработку."
  },
  {
    "slug": "refund",
    "title": "Возврат оплаты",
    "body": "Возврат оплаты — без вопросов в течение 7 дней. Точный текст согласуется перед запуском."
  }
]
```
