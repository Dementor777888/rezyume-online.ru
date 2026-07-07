import React from 'react';

const tones = {
  brand: { background: 'var(--brand-green-tint)', color: '#4C7A2A' },
  action: { background: '#FDF0DA', color: '#8A5A0E' },
  neutral: { background: 'var(--surface-sunken)', color: 'var(--ink-secondary)' },
  paid: { background: '#EAF0FE', color: 'var(--paid-blue)' },
};

/** Badge — small status/label pill (e.g. "Бесплатно", "PRO", "Новое"). */
export function Badge({ tone = 'brand', children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.02em',
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        ...tones[tone],
      }}
    >
      {children}
    </span>
  );
}
