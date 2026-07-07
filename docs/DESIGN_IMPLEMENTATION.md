# DESIGN_IMPLEMENTATION.md — перенос дизайн-системы в production

## 1. Источник истины

Дизайн-система в папке `design_system/` является источником истины для UI.

`docs/design-brief.md` — исторический бриф. Если бриф расходится с финальным дизайном, использовать дизайн-систему.

## 2. Подготовка дизайн-системы

Перед разработкой:

1. Распаковать архив дизайн-системы.
2. Переименовать папку в `design_system`.
3. Убедиться, что внутри есть:
   - `tokens/`;
   - `styles.css`;
   - `assets/`;
   - `screenshots/`;
   - `guidelines/`;
   - `readme.md`;
   - `_ds_manifest.json`;
   - `_ds_bundle.js`.
4. Не импортировать `_ds_bundle.js` напрямую в production без ревью.
5. Использовать дизайн-систему как reference и источник токенов, а не как готовую production-архитектуру.

## 3. Токены

### Цвета сайта

```css
:root {
  --brand-green: #7CB342;
  --brand-green-light: #8BC34A;
  --brand-green-dark: #3F6B22;
  --brand-yellow: #F5A623;
  --brand-green-tint: #DCEDB9;
  --brand-blue: #4A9FD4;
  --brand-blue-tint: #E4F1F9;
  --text-primary: #2B2B2B;
  --text-secondary: #5B6472;
  --line: #E4E7EC;
  --background: #FFFFFF;
  --background-warm: #F7FAF2;
  --success: #12A150;
  --error: #E5484D;
  --warning: #F5A524;
}
```

### Цвета paid-шаблонов

```css
:root {
  --resume-accent-blue: #2E5FE8;
  --resume-accent-teal: #0E9C8A;
  --resume-accent-graphite: #374151;
}
```

### Правило акцентов

- Жёлтый — конверсионное действие, оплата, главный CTA.
- Зелёный — бренд, бесплатное продолжение, навигация, успех.
- Голубой tint `#E4F1F9` — бесплатные шаблоны `start` и `start_photo`.
- Синий/teal/графит — paid-пресеты резюме.

## 4. Шрифты

UI:

- основной вариант: Golos Text;
- запасной вариант: Inter;
- обязательна полная кириллица.

Резюме:

- paid sans: Inter или Manrope;
- academic: PT Serif или Lora;
- PDF должен использовать те же шрифты, что preview.

## 5. Базовые компоненты

Переносить в таком порядке:

```text
components/ui/Button.tsx
components/ui/Input.tsx
components/ui/Textarea.tsx
components/ui/Select.tsx
components/ui/Checkbox.tsx
components/ui/Badge.tsx
components/ui/Card.tsx
components/ui/Alert.tsx
components/ui/Stepper.tsx
components/ui/Tabs.tsx
components/ui/Modal.tsx
components/ui/Drawer.tsx
components/ui/Toast.tsx
components/layout/Header.tsx
components/layout/Footer.tsx
components/layout/PublicLayout.tsx
components/layout/AppLayout.tsx
```

## 6. Компоненты резюме

Все шаблоны должны принимать один prop:

```ts
interface ResumeTemplateProps {
  data: ResumeData
  template: TemplateId
  accent: AccentId
  mode: 'preview' | 'print' | 'public'
}
```

Рекомендуемая структура:

```text
components/resume/
  ResumePreview.tsx
  ResumeScaler.tsx
  ResumeTemplate.tsx
  templates/
    StartTemplate.tsx
    StartPhotoTemplate.tsx
    CleanTemplate.tsx
    CompactTemplate.tsx
    OneColumnTemplate.tsx
    AcademicTemplate.tsx
    AccentTemplate.tsx
  parts/
    ResumeHeader.tsx
    ResumeContacts.tsx
    ResumeSection.tsx
    ResumeExperience.tsx
    ResumeEducation.tsx
    ResumeSkills.tsx
    ResumeLanguages.tsx
    ResumePhoto.tsx
```

## 7. Правила рендера резюме

- Один код шаблона используется для preview, print и public page.
- PDF route не должен собирать отдельный HTML вручную.
- Шаблоны не должны читать localStorage.
- Шаблоны не должны вызывать API.
- Шаблоны не должны форматировать данные, требующие бизнес-логики; форматирование вынести в `lib/resume/format.ts`.
- Длинные блоки опыта должны переноситься без наложений.
- Фото опционально во всех шаблонах, кроме `academic`, где по умолчанию фото не показывается.

## 8. Шаблоны резюме

### Free

| ID | Название | Правила |
|---|---|---|
| `start` | Старт | без фото, голубой сайдбар `#E4F1F9`, жёлтые акценты |
| `start_photo` | Старт+фото | с фото, тот же стиль |

### Paid

| ID | Название | Правила |
|---|---|---|
| `clean` | Чистый | дефолт paid, 2 колонки, светлый сайдбар |
| `compact` | Компакт | плотный вариант для большого опыта |
| `one_column` | Одна колонка | ATS-friendly, минимум декора |
| `academic` | Академический | serif, монохром, без фото по умолчанию |
| `accent` | Акцент | залитый сайдбар, белый текст в сайдбаре |

## 9. Экраны MVP

Переносить в таком порядке:

1. Лендинг.
2. Конструктор.
3. Загрузка фото.
4. Галерея шаблонов.
5. Preview + export.
6. Оплата.
7. Success после оплаты.
8. Auth.
9. Личный кабинет.
10. Публичная страница резюме.
11. SEO-каталог примеров.
12. Шаблоны.
13. База резюме.
14. Статьи.
15. FAQ.
16. Поддержка.
17. Админка.
18. 404.

Первый кодовый срез должен содержать только:

- Лендинг минимальный;
- Конструктор;
- Preview;
- 2 free-шаблона;
- Export screen;
- Публичная страница.

## 10. Мобильные правила

- Header получает drawer-меню.
- Конструктор на мобайле — одна колонка.
- Preview открывается в нижней модалке или отдельном drawer.
- Таблицы админки на мобайле превращаются в карточки.
- Главная CTA всегда видна без перегруза экрана.

## 11. Состояния

Для каждого сложного экрана нужны:

- loading;
- empty;
- error;
- validation error;
- success;
- disabled paid state;
- expired free link.

## 12. Чего не делать в UI

Нельзя:

- показывать таймеры срочности;
- использовать текст «скидка только сегодня»;
- заранее ставить галочки согласий;
- прятать цену до финала;
- блокировать бесплатный PDF;
- добавлять регистрацию перед первым preview;
- показывать AI-фичи без реализации backend;
- делать paid-пресеты слишком декоративными;
- использовать синий `#4A9FD4` как цвет кнопок.

## 13. UI оплаты

Экран оплаты обязан содержать:

- email;
- заголовок «Оплата один раз. Без подписки. 99 ₽»;
- список того, что входит;
- промокод в свернутом блоке;
- способы оплаты YooKassa;
- отсутствие подписки и рекуррента;
- экран успеха с файлами, ссылкой и сообщением о пароле на почте.

## 14. Design debt перед production

Закрыть до релиза:

- мобильный drawer header;
- финальные webfont-файлы или стабильные CDN-подключения;
- исходные вектора логотипа;
- подтверждение Telegram-бота поддержки;
- focus-visible состояния;
- keyboard navigation;
- alt-тексты для ключевых изображений;
- проверка контраста CTA и текстовых ссылок;
- печатная CSS-версия A4;
- визуальный тест PDF для 7 шаблонов.
