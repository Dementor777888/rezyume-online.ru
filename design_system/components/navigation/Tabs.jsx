import React from 'react';

/** Tabs — underline tab navigation (site header nav style: Услуги / Как это работает / ...). */
export function Tabs({ items = [], active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-5)', fontFamily: 'var(--font-sans)', borderBottom: '1px solid var(--line)' }}>
      {items.map((item) => {
        const isActive = item === active;
        return (
          <button
            key={item}
            onClick={() => onChange && onChange(item)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-base)',
              fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-regular)',
              color: isActive ? 'var(--brand-green)' : 'var(--ink)',
              padding: '12px 0',
              marginBottom: -1,
              borderBottom: isActive ? '2px solid var(--brand-green)' : '2px solid transparent',
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
