import React from 'react';

/** SkillBar — dosed skill-level meter used in resume sidebars (навыки, языки). Intentional addition (see readme). */
export function SkillBar({ label, level = 3, max = 5, color = 'var(--brand-green)', labelColor = 'var(--ink)', trackColor = 'var(--line)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-sans)' }}>
      <span style={{ fontSize: 'var(--text-sm)', color: labelColor }}>{label}</span>
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: 5,
              borderRadius: 'var(--radius-pill)',
              background: i < level ? color : trackColor,
            }}
          />
        ))}
      </div>
    </div>
  );
}
