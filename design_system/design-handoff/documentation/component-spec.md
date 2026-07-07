# Component Spec — «Резюме Онлайн»

Спецификация reusable-компонентов для разработки. Исходники: `components/**` (design system, источник истины) + повторяющиеся паттерны UI-кита (`ui_kits/website/**`), которые нужно поднять до компонентов при верстке.

## A. Компоненты design system (готовы, портировать как есть)

### Button
- **Purpose:** все кнопки продукта.
- **Variants:** `primary` (жёлтый — конверсионные/платные действия), `secondary` (зелёный — бесплатные продолжения), `outline`, `ghost`.
- **Sizes:** `sm | md | lg`.
- **States:** default, hover (цветовой сдвиг: yellow→yellow-dark, green→green-light, outline/ghost→tint-заливка), focus-visible (2px ring `--brand-green` + 2px offset), active (~2% темнее, без scale), disabled (50% opacity, cursor default), loading (спиннер, ширина фиксируется).
- **Props:** `variant, size, disabled, loading, onClick, children, style`.
- **Responsive:** на мобайле полноширинные в формах (`width:100%`), в панелях — `flex:1`.

### Input / Select
- **States:** default, focus (green ring), error (`--error-text` бордер + подпись), disabled. **Textarea** в UI-ките стилизуется идентично Input — добавить как вариант `multiline`.
- **Props:** `label, placeholder, value, onChange, error?, hint?, disabled?`.

### Checkbox / Radio / Switch
- **States:** default, checked, focus-visible (добавить — в макетах не показан), disabled.
- **Props:** `label, checked, onChange, disabled?`.
- Checkbox используется для юридических согласий — label может содержать ссылки.

### Badge
- **Tones:** `brand` (зелёный), `action` (жёлтый), `neutral`, `paid` (тёплый янтарный).
- Не интерактивен; текст ≥12px.

### Card, Tabs, SkillBar — по исходникам, без вариаций.

## B. Паттерны UI-кита → поднять в компоненты

### PriceChip (`chrome.jsx`)
Ценовой бейдж «0 ₽» / «AI · 99 ₽ …». Tones: `free | paid`. Уже общий — портировать.

### FeatIcon (`chrome.jsx`)
Канонические иконки фич: `target` (прицел), `mail` (конверт). **Расширить до единого Icon-модуля** — сложить сюда sparkle, doc, mic, clock, user, check, ticket, grid, layout, users, help, file, edit, del, up, down, search, plus из локальных наборов FIcon/CIcon/PIcon/NIcon/ActIcon. Props: `name, size, color`. Стандарт: viewBox 24, stroke 2, round caps.

### SiteHeader / SiteFooter (`chrome.jsx`)
- Header: логотип, NAV (6 разделов), Вход, жёлтый CTA; mobile — гамбургер (**drawer предстоит спроектировать**). Props: `device, active, onCta, onLogin`.
- Footer: зелёная foliage-волна (`assets/footer-wave.svg`), 4 колонки ссылок, юр-строка.

### CatalogSidebar
Один паттерн в трёх местах (Образцы — с раскрывающимися подразделами; База, Админ — плоский список). Props: `sections[{id,label,count?,children?}], activeId, onSelect, collapsible?`. Active: зелёная левая полоса 3px + tint-фон + `#3F6B22` текст.

### CatalogCard
Карточка каталога (Образцы/База/Шаблоны): превью-зона фикс. высоты с масштабированным шаблоном (см. ResumeScaler), заголовок, мета, ссылка/цена. Props: `preview, title, meta, footer, onClick`.

### ResumeScaler
**Критичный утилитарный компонент.** Резюме-шаблоны свёрстаны на фикс. ширину 620px (высота ~876). Для любого превью: обёртка ровно `620*scale × 876*scale`, `overflow:hidden`, внутри `width:620; transform:scale(s); transform-origin:top left`. НЕ масштабировать без sized-обёртки — transform не сжимает layout-box и оставляет пустоту. Props: `scale, template, highlight?`.

### AiFeatureCard (`Constructor.jsx → aiSuggest`)
Карточка платного AI-предложения: янтарная палитра (#FDF9F0/#EBD9B4/#8A5A0E), иконка, заголовок + чип «AI · 99 ₽», описание, CTA; применённое состояние — зелёное с галочкой и «отменить». Props: `icon, title, description, cta, appliedLabel, applied, onToggle`.

### StepperHeader (`Constructor.jsx`)
Прогресс «Шаг N из 6» + бар + кликабельные чипы шагов (desktop). Props: `steps[], current, onStep`.

### Accordion (`Faq.jsx`)
Вопрос/ответ, «+»→«−» в зелёном круге. Props: `items[{q,a}], openKey, onToggle`. Один открытый за раз.

### DataTable (`AdminPanel.jsx`)
Админ-таблица: тулбар (поиск с иконкой, Импорт, Экспорт, +Добавить), шапка uppercase 12px, строки с RowActions (edit/delete), empty-строка поиска, счётчик записей. Props: `columns, rows, onEdit, onDelete, searchable, importExport`. Mobile: паддинги 8px, сокращённые шапки.

### SeoEditor (`AdminPanel.jsx`)
Блок `<title>` + meta description со счётчиками 70/180 и warning-цветом при превышении оптимума. Используется во всех контент-разделах админки и на служебных страницах.

### Toast (`AdminPanel.jsx`)
Зелёная плашка «Успешно! …» с ✕. Вынести в общий компонент (сейчас только в админке).

### SubscribeBar + SubscribeModal (`ResumeBase.jsx`)
Зелёная панель email-подписки; модалка выбора разделов (checkbox-список, disabled submit при пустом выборе).

## C. Данные (props из API)
Компоненты, зависящие от данных — контракты для бэкенда:
- `resumeData` — кандидат (общая заглушка `ui_kits/resume-templates/resumeData.js`);
- `SECTIONS/EXAMPLES` — рубрикатор образцов (сейчас захардкожен в 3 местах — унифицировать: один источник);
- `ARTS` — статьи; `codes` — промокоды; `PAGES` — служебные страницы (+ seoTitle/seoDesc).

## D. Дублирование к устранению
1. Иконки — 5 локальных наборов → один Icon-модуль (см. FeatIcon).
2. Рубрикатор разделов — 3 копии (Examples, ResumeBase, AdminPanel).
3. Карточки каталогов — 3 похожие реализации → CatalogCard.
4. Табличные Th/Td админки — оставить внутри DataTable.
