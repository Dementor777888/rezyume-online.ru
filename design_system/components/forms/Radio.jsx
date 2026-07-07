import React from 'react';

/** Radio — single-select circular control, grouped by `name` (e.g. пол, семейное положение). */
export function Radio({ label, name, checked, onChange }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--ink)', cursor: 'pointer' }}>
      <span
        onClick={() => onChange && onChange()}
        style={{
          width: 20, height: 20, borderRadius: '50%',
          border: checked ? '6px solid var(--brand-green)' : '1.5px solid var(--line)',
          background: 'var(--bg)',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      />
      {label}
    </label>
  );
}
