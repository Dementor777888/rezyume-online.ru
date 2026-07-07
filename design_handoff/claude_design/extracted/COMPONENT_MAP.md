# Component Map

| Standalone element | App component / area |
|---|---|
| Header and global nav | `src/components/layout/AppChrome.tsx`, `src/components/SiteHeader.tsx` |
| Footer with green wave and product columns | `src/components/layout/AppChrome.tsx` |
| Landing hero | `src/app/page.tsx` |
| Resume preview document | `src/components/resume/ResumeTemplate.tsx`, `src/components/product/ProductBlocks.tsx` |
| Button styles | `src/app/globals.css`, `src/components/ui/Primitives.tsx` |
| Cards, badges, chips, form controls | `src/components/ui/Primitives.tsx` |
| Constructor wizard | `src/features/constructor/ResumeConstructor.tsx` |
| Template cards | `src/components/product/ProductBlocks.tsx` |
| Public resume view | `src/app/rezume/[publicToken]/page.tsx`, `src/components/product/ProductBlocks.tsx` |
| Payment UI shell | `src/app/payment/page.tsx` |
| Account UI shell | `src/app/account/page.tsx` |
| Login UI shell | `src/app/login/page.tsx` |
| Admin UI shell | `src/components/layout/AppChrome.tsx`, `src/app/admin/*` |

## Implementation Notes

- `ResumeTemplate` remains the shared visual component for preview, PDF, examples, templates and public pages.
- Constructor state, validation, localStorage draft, create-resume API and PDF export are not replaced.
- Future features use disabled buttons and locked cards only.
