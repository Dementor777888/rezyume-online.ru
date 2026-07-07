# Implementation Plan

## Completed In This Pass

1. Move the approved standalone HTML into `design_handoff/claude_design/source/`.
2. Add `npm run design:extract`.
3. Generate all 16 source screenshots into `design_handoff/claude_design/screens/`.
4. Extract visible standalone copy into `SCREEN_TEXT_RAW.md`.
5. Align global navigation labels, landing copy, footer copy and locked shell language with the standalone.
6. Keep Slice 1 constructor, public resume, PDF export and smoke flow working.

## Guardrails

- `/constructor` remains the working free resume builder.
- `/rezume/[publicToken]` remains the working public page.
- `/payment`, `/account`, `/login`, `/admin`, `/support` remain disabled or mock UI only.
- No payment provider, YooKassa, promo logic, AI backend, DOCX export, account sessions, email sending or admin write actions are introduced.

## Verification

Run after UI alignment:

```bash
rm -rf .next
npm run lint
npm run typecheck
npm run build
npm run smoke-flow
npm run design:extract
npm run ui:screenshots
```
