Dosed segment meter for skill/language proficiency, used inside resume-template sidebars. Not part of the original brand sheet — an intentional addition because every resume template needs it (see readme.md "Intentional additions").

```jsx
<SkillBar label="Английский язык" level={3} max={5} />
```

Pass a `color` (e.g. `var(--paid-teal)`) to match a paid template's restrained accent instead of brand green. **On a dark or saturated background, always pass `labelColor="#fff"`** (or another contrast-safe value) — the default `var(--ink)` is a dark gray that only reads on light surfaces.
