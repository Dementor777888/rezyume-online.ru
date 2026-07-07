import React from 'react';

/** Select — native-backed dropdown styled to match Input (employment type, schedule, education level, etc). */
export function Select({ label, value, onChange, options = [], placeholder }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--ink)' }}>{label}</span>
      )}
      <select
        value={value}
        onChange={onChange}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: value ? 'var(--ink)' : 'var(--ink-secondary)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-sm)',
          padding: '11px 14px',
          background: 'var(--bg)',
          outline: 'none',
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
