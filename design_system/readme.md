# Резюме Онлайн — Design System

**«Резюме Онлайн» (rezyume-online.ru)** — русскоязычный бесплатный онлайн-конструктор резюме. Пользователь заполняет форму (личные данные, опыт работы, образование, навыки) и получает готовое резюме в PDF, оформленное по одному из шаблонов.

Слоган: **«Ваш опыт — наши возможности»**. Характер бренда — эко/природный: зелёная листва, жёлтая галочка на документе, серифный логотип.

## Sources

- Логотип и айдентика: `uploads/1rezume_refer.png` (референс-лист бренда, предоставлен пользователем) — 6 сегментов: основной логотип, иконка приложения, фавикон, монохромная версия, версия на фирменном фоне, пример шапки сайта.
- Живой сайт: **https://rezyume-online.ru/** — прочитан напрямую (текст, структура формы, разделы «Почему мы», отзывы) 2026-07-04. Это WordPress-сайт; исходный код/тема не прикреплены — если понадобится точное 1:1 воспроизведение верстки, приложите тему или скриншоты страниц.
- Фирменные токены (цвета, типографика, сетка, 7 шаблонов резюме) — присланы пользователем в виде текстового брифа (2026-07-04), это **источник истины** для всех значений в `tokens/`.
- Никакой Figma-ссылки или кодовой базы приложения не предоставлено — компоненты в этом наборе (Button, Input, Card, …) написаны с нуля по стандартному минимальному набору, см. «Intentional additions» ниже.

## Index

- `styles.css` — root stylesheet, imports everything in `tokens/`.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens.
- `assets/` — logo lockups, app icon, favicon, header reference (cropped from the provided reference sheet).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `components/core/` — Button, Badge, Card.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/data/` — SkillBar (intentional addition).
- `components/navigation/` — Tabs.
- `ui_kits/resume-templates/` — the 7 resume templates (2 free + 5 paid) as an interactive gallery: `index.html`, `resumeData.js` (shared fake candidate), `templateParts.jsx` (shared layout bits), `Template*.jsx` × 7.
- `ui_kits/website/` — the product site/app UI kit (9 screens, десктоп+мобайл, состояния empty/loading/error): `index.html` shell with screen-picker + device/state toggles, `chrome.jsx` (Header/Footer/Logo), and one file per screen — `Landing`, `Constructor`, `PhotoUpload`, `Gallery`, `PreviewExport`, `Payment`, `Cabinet`, `Auth`, `PublicResume`.
- `SKILL.md` — portable skill file for Claude Code / other agents.

## Components

Standard minimal set (no codebase/Figma component library was supplied, so this is authored from scratch per brand needs — see "Intentional additions"):

- **Button** — primary (yellow CTA) / secondary (green) / outline / ghost, sizes sm/md/lg.
- **Badge** — status pill: brand / action / neutral / paid tones.
- **Card** — soft-shadow surface container.
- **Input** — labeled text field with brand-green focus ring.
- **Select** — dropdown matching Input.
- **Checkbox**, **Radio**, **Switch** — form controls used across the resume-constructor form (занятость, пол, "работаю по настоящее время", etc).
- **SkillBar** — dosed skill/language level meter used inside resume templates.
- **Tabs** — underline nav tabs, matches the site header pattern (Услуги / Как это работает / Отзывы …).

### Intentional additions

- **SkillBar** — not shown on the brand reference sheet, but every resume template needs a skill/language meter; added because it's structurally required, not decorative.

## Resume templates (the core product)

See `ui_kits/resume-templates/index.html` for the full interactive gallery. 2 free + 5 paid, per the brief:

**Free (light blue sidebar per stakeholder direction + yellow accents):**
- **0a «Старт»** — no photo, 2-column, light blue (--brand-blue-tint) sidebar, dark ink text, yellow role pill. Used when no photo is uploaded.
- **0b «Старт+фото»** — same, with an (unedited) photo slot. Used when a photo is uploaded.

**Premium (calm, restrained accents — contrast-verified: blue #2E5FE8, teal-deep #0B7A6C for text, graphite #374151; never brand green):**
- **1 «Чистый»** (default) — full-width header + light sidebar + main column; switchable accent (blue/teal/graphite).
- **2 «Компакт»** — dense header-strip layout, main column left + narrow info column right, for long work histories.
- **3 «Одна колонка»** (ATS-friendly) — single column, machine-readable, minimal decoration.
- **4 «Академический»** — single column, PT Serif, monochrome, no photo, no accent color.
- **5 «Акцент»** — solid accent sidebar (white text on contrast-safe deep accents only).

The gallery has a per-template accent switcher. Text-on-accent pairs are contrast-verified (≥4.5:1): raw --paid-teal is fills-only; use --paid-teal-deep for teal text.

Free vs. paid are deliberately styled worlds apart (warm/organic vs. calm/corporate) so upgrading feels like a real step up.

## CONTENT FUNDAMENTALS

- **Language & register:** Russian throughout, informal-polite «Вы» (formal you, capitalized): *"Загрузите фото, и максимально подробно заполните подходящие для Вас поля формы."* Direct, instructional imperative for CTAs and form copy — "Заполните", "Скачайте", "Начать".
- **Tone:** helpful and reassuring, not salesy or hype-driven. Benefit-led headlines stated plainly: *"Составление резюме онлайн"*, "Просто заполните поля нашей формы своими данными и скачайте готовое и оформленное резюме."
- **Slogan:** «Ваш опыт — наши возможности» — pairs the user's own asset (experience) with the service's role (opportunity), sets an encouraging, partnership tone rather than a corporate one.
- **Structure:** short benefit blurbs in threes (see "Почему мы?": выбор оформления, быстрое получение результата, просто скачайте) — scannable, no long paragraphs on marketing surfaces. Longer educational prose (SEO article content, "Об онлайн-конструкторе резюме") is more discursive/informational, written for search intent, not brand voice.
- **Numbers as proof, used sparingly:** "394 оценок", "5/5", "за 10 минут" — concrete, human-scale, never big vague stats.
- **CTAs:** short verb phrases — "Начать", "Заполнить резюме", "Заказать резюме" — always the yellow action button.
- **Emoji:** none observed anywhere on the source site or reference sheet. Do not introduce them.
- **Casing:** sentence case throughout (no ALL CAPS headlines, no title case). Section eyebrows in the reference sheet use small caps-style overline labels ("Резюме Онлайн", "Отзывы") as quiet category tags above a headline — reuse that pattern instead of decorative uppercase blocks.

## VISUAL FOUNDATIONS

- **Colors:** brand green (`#7CB342` / `#8BC34A` light) = brand, navigation, success — never a CTA. Yellow (`#F5A623`) = the *only* action color: buttons, the logo's checkmark, "Заказать/Оплатить". Blue (`#4A9FD4`) appears only inside illustrations/avatars (the little document-avatar figure) — it must never appear on a UI button. Paid resume templates use a second, separate accent set (blue `#2E5FE8` / teal `#0E9C8A` / graphite `#374151`) deliberately distinct from brand green, to visually separate "paid, restrained" from "free, warm brand".
- **Type:** logo wordmark is a classic bracketed-serif display face; interface type is a humanist sans (Golos Text) chosen for full, natural Cyrillic rendering. The one exception is the "Академический" resume template, which switches to PT Serif for a formal, printed-CV feel — monochrome, no accent color, to read as understated and credential-forward.
- **Spacing:** strict 8px grid (4px half-step allowed for tight icon/text gaps). Generous whitespace — sections breathe, nothing feels crowded (an "airy, natural" character per brief).
- **Radii:** 8–12px on cards/inputs/buttons — soft but not pill-shaped by default (pills reserved for badges/switches). Never sharp 0px corners; never an exaggerated 24px+ "bubbly" radius either.
- **Shadows:** soft and diffuse only (`--shadow-sm/md/lg`, low-opacity warm-black, large blur, small offset) — no hard drop shadows, no dark/high-contrast shadows. A dedicated `--shadow-brand` (soft green-tinted glow) marks the active/selected state, e.g. the selected resume template thumbnail.
- **Backgrounds:** flat brand-green or off-white/near-white (`--bg`, `--bg-tint`) fills, no gradients, no photographic full-bleed backgrounds observed. The one recurring illustrative motif is hand-drawn-style organic leaves/foliage (see `assets/header-example.png`) used as a decorative footer/wave under the site header — never as a full-bleed hero photo.
- **Illustration style:** warm, hand-drawn line-art with flat color fills (the document-with-checkmark mark, leaves) — warm and approachable, not corporate-flat, not photographic. No photography of people found in the source material; do not introduce stock photography without asking.
- **Animation:** no animation specified or observed in source material. Recommend restrained, standard-easing micro-transitions only (hover/focus color shifts, ~120–200ms) — nothing bouncy, nothing looping/decorative, consistent with the calm/reassuring tone.
- **Hover states:** color-shift only — primary (yellow) darkens to `--brand-yellow-dark`; secondary (green) lightens to `--brand-green-light`; outline/ghost fill with a faint tint (`--brand-green-tint` / `--surface-sunken`). No scale/shadow-pop hover effects.
- **Press/active states:** not specified in source; recommend a very slight (~2%) darken with no shrink/scale, to stay consistent with the calm hover language above.
- **Borders:** thin 1px hairlines (`--line`, `#E4E7EC`) for input borders, dividers and card outlines — never a colored/thick border-as-decoration (e.g. no colored left-border accent cards).
- **Transparency/blur:** none observed; not part of this brand's visual language. Avoid glassmorphism/backdrop-blur.
- **Layout rules:** simple centered single-column marketing sections with a sticky/fixed header nav (see `assets/header-example.png`); resume templates themselves are the one place with a strict 2-column (sidebar + main) or single-column print-page layout.
- **Cards:** white surface, thin `--line` border, soft `--shadow-sm`/`--shadow-md`, 12px radius — no colored left-border accent stripe.

## ICONOGRAPHY

- No icon font, SVG icon set, or icon library was found in the provided materials — the only iconography in the source is the hand-drawn document/checkmark/leaf logo mark itself and simple contact-style bullets.
- **No emoji used anywhere in source material.**
- **No unicode-character icons observed.**
- This design system does not bundle a generic icon set (Lucide/Heroicons etc.) because none was specified by the brand and none was visible in use — introducing one would be an invention. If a consuming project needs interface icons (e.g. contact-method glyphs in a resume header), ask the user for the brand's real icon source first; a plain-text label (as used in the templates here) is the safe placeholder until then.
- Logo assets copied into `assets/`: `logo-primary.png`, `logo-monochrome.png`, `logo-on-brand-bg.png`, `app-icon.png`, `favicon.png`, `header-example.png` — all cropped directly from the user-provided reference sheet, not redrawn.
- `assets/footer-wave.svg` — the signature foliage wave («фирменный элемент»), a crisp **vector** extracted from the user's CorelDRAW source `uploads/3_tree/…/fir_element.cdr` (exported to SVG by the user, then cropped to a wide top band). Used as the decorative footer wave in the website UI kit. Note: the `.cdr` brand sources (CorelDRAW 9) only embed 96×96 preview bitmaps — the usable vector came from the user's SVG export.

## Font substitution — please confirm

No webfont files were supplied. `tokens/typography.css` loads **Golos Text**, **Playfair Display** and **PT Serif** from Google Fonts as the closest available matches to the logo's bracketed serif and the interface sans seen in the reference sheet. If you have the real brand font files, please share them (`.woff2`/`.ttf`) and I'll swap in real `@font-face` rules.

## Caveats & open questions

- No Figma file or app/website codebase was attached — only one static reference image and the public site's rendered text. If a real component library or design file exists, attach it and this system can be tightened to match exactly (spacing/сolor values, real icon set, page layouts).
- The marketing site (rezyume-online.ru) itself was not rebuilt as a UI kit here — the brief's explicit ask was the 7 resume templates, so effort went there. Say the word and I'll add a homepage UI kit from the fetched site content.
- Fonts are Google Fonts substitutes (see above) — please confirm or supply real files.
- Photo slots in resume templates use initials/placeholder circles since no real headshot was provided (per instructions, never invent a person's photo).
