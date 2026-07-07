# Route Map

| Standalone screen | App route | Implementation status |
|---|---|---|
| Лендинг | `/` | Real Slice 1 landing, CTA to `/constructor` |
| Конструктор | `/constructor` via rewrite to `/konstruktor` | Real free constructor |
| Загрузка фото | `/constructor` photo step | Real free upload-as-is UI inside constructor |
| Превью + экспорт | `/constructor` result state, `/print/resume/[id]` | Real free PDF and public link flow |
| Оплата | `/payment`, `/payment/success` | Locked UI only, no payment backend |
| Мои резюме | `/account` | Locked UI only, no sessions |
| Вход | `/login` | Locked UI only, no auth |
| Публичная ссылка | `/rezume/[publicToken]` | Real public resume page, 24-hour free expiry |
| Образцы резюме | `/primery`, `/primery/[section]`, `/primery/[section]/[profession]` | Static/mock SEO shell |
| Шаблоны | `/shablony`, `/shablony/[template]` | Static gallery, two free templates real |
| База резюме | `/baza`, `/baza/[section]` | Locked/mock public catalog shell |
| Статьи | `/stati`, `/stati/[slug]` | Static/mock article shell |
| FAQ | `/faq` | Static FAQ |
| Поддержка | `/support` | Disabled form UI, no email/backend send |
| Кабинет админа | `/admin`, `/admin/promos`, `/admin/content`, `/admin/seo` | Locked/mock admin shell |
| 404 | `src/app/not-found.tsx` | Custom not-found route |

Canonical navigation labels from standalone: `Шаблоны`, `Образцы`, `База резюме`, `Статьи`, `FAQ`, `Поддержка`, `Вход`, `Создать резюме`.
