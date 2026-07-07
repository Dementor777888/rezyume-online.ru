# Design Handoff — «Резюме Онлайн»

Комплект передачи дизайна в разработку (Cloud Code). Дата: 06.07.2026.

## Состав пакета

```text
/design-handoff
  /tokens                     ← дизайн-токены в JSON (источник: /tokens/*.css)
    colors.json                 цвета + семантика + ui-kit-extras (литералы к кодификации)
    typography.json             семейства, шкала, межстрочные, фактические text-styles
    spacing.json                8px-сетка + layout-константы (контейнеры, сайдбары)
    radius.json
    shadows.json                + motion (easing, длительности)
    breakpoints.json
  /documentation
    README.md                   этот файл
    design-audit.md             полный аудит (этапы 1–4) + чек-лист P1/P2/P3
    component-spec.md           спецификация компонентов: props, состояния, варианты
    responsive-rules.md         правила адаптива между 390 и 1180
    accessibility-notes.md      контраст-пары, фокус, aria, тач-цели
    developer-notes.md          карта экранов, бизнес-правила, tech-notes, именование
```

## Где живёт сам дизайн (в этом проекте)

```text
/tokens/*.css                 ← CSS-токены (источник истины)
/components/{core,forms,data,navigation}/   ← 10 DS-компонентов (.jsx + .d.ts)
/assets/                      ← логотипы, фавикон, foliage-волна (SVG)
/guidelines/                  ← карточки-спецификации (Colors, Type, Spacing, Brand)
/ui_kits/resume-templates/    ← 7 шаблонов резюме (ядро продукта), ширина 620px
/ui_kits/website/index.html   ← 16 экранов сайта: переключатели экран/девайс/состояние
/readme.md                    ← брендбук и правила контента
/SKILL.md                     ← портируемый skill-файл для агентов
```

## Порядок работы для разработчика

1. Прочитать `developer-notes.md` (карта экранов + бизнес-правила).
2. Поднять токены из `/design-handoff/tokens/*.json` (или напрямую `tokens/*.css`).
3. Портировать DS-компоненты по `component-spec.md` (раздел A), затем паттерны UI-кита (раздел B).
4. Верстать экраны, открывая живой референс: `ui_kits/website/index.html` (каждый экран — десктоп/мобайл + состояния через тумблеры).
5. Сверяться с `responsive-rules.md` и `accessibility-notes.md`.

## Открытые вопросы к дизайнеру/заказчику (до старта)

1. **P1**: перевод зелёных текст-ссылок на `#3F6B22` (a11y) — подтвердить.
2. **P1**: конвенция кнопок yellow=платное/конверсия, green=бесплатное — зафиксировать в брендбуке.
3. Мобильный nav-drawer — спроектировать (спека-минимум в responsive-rules.md).
4. Реальные файлы брендовых шрифтов (сейчас Google Fonts substitutes).
5. Иллюстрации для обложек статей (сейчас паттерн-плейсхолдеры).
6. Подтвердить адрес Telegram-бота поддержки.
