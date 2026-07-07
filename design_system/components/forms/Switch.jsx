import React from 'react';

/** Switch — on/off toggle (e.g. "работаю по настоящее время"). */
export function Switch({ checked, onChange, label }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--ink)', cursor: 'pointer' }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 40, height: 24, borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--brand-green)' : '#DADFD3',
          position: 'relative',
          transition: 'background var(--duration-standard) var(--ease-standard)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: 'absolute', top: 3, left: checked ? 19 : 3,
            width: 18, height: 18, borderRadius: '50%', background: '#fff',
            boxShadow: 'var(--shadow-sm)',
            transition: 'left var(--duration-standard) var(--ease-standard)',
          }}
        />
      </span>
      {label}
    </label>
  );
}
