Button for calls-to-action and secondary actions, styled per the "yellow = action, green = brand" rule.

```jsx
<Button variant="primary">Заказать резюме</Button>
<Button variant="secondary">Смотреть шаблоны</Button>
<Button variant="outline" size="sm">Отмена</Button>
```

Variants: `primary` (yellow fill — the only true CTA), `secondary` (brand green fill — nav/brand-level action), `outline` (green outline), `ghost` (text-only). Sizes: `sm` / `md` / `lg`. Pass `disabled` for the muted disabled state, `icon` for a leading icon node.
