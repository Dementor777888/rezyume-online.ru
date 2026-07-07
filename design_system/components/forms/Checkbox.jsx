import React from 'react';

/** Checkbox — brand-green check, used for multi-select toggles (e.g. "есть дети"). */
export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--ink)', cursor: 'pointer' }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 20, height: 20, borderRadius: 6,
          border: checked ? 'none' : '1.5px solid var(--line)',
          background: checked ? 'var(--brand-green)' : 'var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
