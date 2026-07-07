import React from 'react';

const fieldBase = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-base)',
  color: 'var(--ink)',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
  width: '100%',
  boxSizing: 'border-box',
  background: 'var(--bg)',
};

/** Input — labeled text field used across the resume constructor form. */
export function Input({ label, placeholder, value, onChange, type = 'text', helper }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--ink)' }}>{label}</span>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...fieldBase,
          borderColor: focused ? 'var(--brand-green)' : 'var(--line)',
          boxShadow: focused ? '0 0 0 3px var(--brand-green-tint)' : 'none',
        }}
      />
      {helper && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-secondary)' }}>{helper}</span>}
    </label>
  );
}
