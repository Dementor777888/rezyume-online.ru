# Developer Notes — передача в Cloud Code

## Что это за проект
Дизайн-система + hi-fi UI-кит сервиса «Резюме Онлайн» (онлайн-конструктор резюме, RU). Всё свёрстано в React (Babel-in-browser, инлайн-стили) — это **прототип-референс**, не production-код: переносите паттерны и значения, а не сами файлы.

## Источники истины (в порядке приоритета)
1. `tokens/*.css` — цвета/типографика/спейсинг (дублированы в `design-handoff/tokens/*.json`).
2. `components/**` — эталонные реализации + `.d.ts` контракты props.
3. `ui_kits/resume-templates/**` — 7 шаблонов резюме (ядро продукта). Ширина макета резюме 620px, экспорт в PDF — А4.
4. `ui_kits/website/**` — 16 экранов сайта; `index.html` — оболочка с переключателями экран/устройство/состояние.
5. `readme.md` — брендбук: правила цвета, тона, контента.

## Карта экранов (ui_kits/website/)
| # | id | Файл | Состояния |
|---|----|------|-----------|
| 1 | landing | Landing.jsx | — |
| 2 | constructor | Constructor.jsx | default / loading / error |
| 3 | photo | PhotoUpload.jsx | default / empty / loading |
| 4 | preview | PreviewExport.jsx | default / loading / error |
| 5 | payment | Payment.jsx | default / loading / error / success |
| 6 | cabinet | Cabinet.jsx | default / empty |
| 7 | auth | Auth.jsx | default / error / loading / recover |
| 8 | public | PublicResume.jsx | free / paid |
| 9 | examples | Examples.jsx | list / detail |
| 10 | templates | Templates.jsx | list / detail |
| 11 | base | ResumeBase.jsx | list / detail |
| 12 | articles | Articles.jsx | list / article |
| 13 | faq | Faq.jsx | — |
| 14 | support | Support.jsx | default / success |
| 15 | admin | AdminPanel.jsx | promo / content |
| 16 | error404 | Error404.jsx | — |

Общий chrome: `chrome.jsx` (Logo, Header, Footer, PriceChip, FeatIcon). Шаблоны резюме подключаются из `../resume-templates/`.

## Главный пользовательский сценарий
landing → constructor (6 шагов: Контакты→Опыт→Образование→Навыки→Фото→Шаблон) → photo → preview (free PDF | AI-версия 99 ₽) → payment → cabinet. Параллельные входы: examples/templates/base → constructor. Админ — отдельный вход.

## Бизнес-правила, влияющие на UI
- Монетизация: разовый платёж 99 ₽ за AI-версию резюме, БЕЗ подписки. Все платные фичи маркируются чипом «AI · 99 ₽» (янтарная палитра #FDF0DA/#8A5A0E).
- Платные фичи: улучшение фото, диктовка, усиление формулировок, подгонка под вакансию, сопроводительное письмо, импорт старого резюме, PDF+DOCX, бессрочная ссылка, платные шаблоны.
- Бесплатно: конструктор, 2 шаблона («Старт», «Старт+фото»), PDF, ссылка 24 ч.
- Кнопки: yellow = конверсионное/платное, green = бесплатное продолжение (см. design-audit 2.4 — зафиксировать).
- Последний шаг конструктора: чекбокс согласия ПД обязателен (блокирует继续), публикация в Базе — опциональна.
- Публичное резюме из Базы: контакты скрыты до входа работодателя.

## Технические заметки
1. **Масштабирование резюме-превью**: только через sized-wrapper (`width/height = 620/876 × scale`, inner `transform-origin: top left`) — иначе transform оставляет пустой layout-box. Реализовать один компонент ResumeScaler.
2. **Иконки**: консолидировать 5 локальных наборов в один модуль (`FeatIcon` в chrome.jsx — начало). Стандарт: 24 viewBox, stroke 2, round.
3. **Рубрикатор разделов** (Продажи, IT, …) захардкожен в Examples/ResumeBase/AdminPanel — сделать одним справочником из API.
4. **Шрифты** — Google Fonts substitutes (Golos Text, Playfair Display, PT Serif). Реальные файлы бренда не предоставлены — уточнить у заказчика до релиза.
5. **Данные-заглушки**: `resumeData.js` (кандидат Смирнова Е. И. — вымышленная), статьи, промокоды, резюме Базы — фикстуры, заменяются API.
6. `_ds_bundle.js`, `_ds_manifest.json` — артефакты компилятора среды, в production не переносятся.
7. Ассеты: `assets/logo-*.png`, `app-icon.png`, `favicon.png` — PNG-кропы из брендрефа; `footer-wave.svg` — вектор. Для production запросить исходные вектора логотипа.
8. SEO: у контент-разделов и служебных страниц редактируемые `<title>`/meta description (админка) — закладывать в модель данных. FAQ на лендинге размечен schema.org.
9. Ссылка Telegram-бота поддержки: `https://t.me/rezyume_online_bot` (плейсхолдер — подтвердить).

## Именование (принято в проекте)
- Экраны: PascalCase-файл = имя компонента (`ResumeBase.jsx`), id — kebab/короткий (`base`).
- Компоненты DS: PascalCase + `.d.ts` рядом.
- Токены: kebab-case с префиксом группы (`--brand-green-dark`, `--space-4`, `--text-lg`).
- Ассеты: kebab-case (`footer-wave.svg`, `logo-primary.png`).
- Данные/фикстуры: camelCase (`resumeData.js`).

## Чистота проекта
- Черновиков и скрытых слоёв нет; экран «Галерея» удалён (заменён «Шаблонами»), ссылки обновлены.
- Известный tech-debt прототипа: инпуты с зафиксированными значениями (`onChange={()=>{}}`) — намеренно, это статические макеты.
