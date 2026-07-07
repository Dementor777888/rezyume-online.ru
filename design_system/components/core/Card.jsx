import React from 'react';

/** Card — soft-shadow surface container, the base for template cards, review cards, feature blocks. */
export function Card({ padding = 'var(--space-4)', elevated = true, children, style }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-default)',
        boxShadow: elevated ? 'var(--shadow-md)' : 'none',
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
