import React from 'react';

const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
  whiteSpace: 'nowrap',
};

const sizes = {
  sm: { fontSize: 'var(--text-sm)', padding: '8px 14px' },
  md: { fontSize: 'var(--text-base)', padding: '11px 20px' },
  lg: { fontSize: 'var(--text-md)', padding: '14px 28px' },
};

function variantStyle(variant, disabled) {
  if (disabled) {
    return { background: '#EDEFE9', color: '#A7AEA0', borderColor: '#EDEFE9' };
  }
  switch (variant) {
    case 'primary': // action = yellow
      return { background: 'var(--brand-yellow)', color: 'var(--action-text)', boxShadow: 'var(--shadow-sm)' };
    case 'secondary': // brand/nav = green
      return { background: 'var(--brand-green)', color: '#FFFFFF' };
    case 'outline':
      return { background: 'transparent', color: 'var(--brand-green)', borderColor: 'var(--brand-green)' };
    case 'ghost':
      return { background: 'transparent', color: 'var(--ink)', borderColor: 'transparent' };
    default:
      return {};
  }
}

/** Button — primary (yellow) is the only "do this now" action; secondary (green) is brand/nav-level. */
export function Button({ variant = 'primary', size = 'md', disabled = false, icon = null, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const vs = variantStyle(variant, disabled);
  let hoverBg;
  if (!disabled) {
    if (variant === 'primary') hoverBg = 'var(--brand-yellow-dark)';
    else if (variant === 'secondary') hoverBg = 'var(--brand-green-light)';
    else if (variant === 'outline') hoverBg = 'var(--brand-green-tint)';
    else if (variant === 'ghost') hoverBg = 'var(--surface-sunken)';
  }
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...base,
        ...sizes[size],
        ...vs,
        ...(hover && !disabled ? { background: hoverBg } : {}),
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
