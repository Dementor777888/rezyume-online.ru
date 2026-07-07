// Резюме Онлайн — small shared layout helpers reused across the 7 resume templates.
// Assumes window.resumeData is loaded, and window.DS = design-system bundle namespace.

function TP_SectionTitle({ children, color = 'var(--ink)', accentBar = false, accentColor = 'var(--brand-green)' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
      color, marginBottom: 10,
    }}>
      {accentBar && <span style={{ width: 16, height: 2, background: accentColor, display: 'inline-block' }} />}
      {children}
    </div>
  );
}

function TP_Avatar({ size = 96, bg = 'var(--brand-green-tint)', fg = '#4C7A2A' }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.32, fontWeight: 700, fontFamily: 'var(--font-sans)', flexShrink: 0,
    }}>
      {window.resumeData.photoInitials}
    </div>
  );
}

function TP_ContactList({ color = 'var(--ink)', dim = 'var(--ink-secondary)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {window.resumeData.contacts.map((c) => (
        <div key={c.label} style={{ fontSize: 13.5, lineHeight: 1.4 }}>
          <div style={{ color: dim, fontSize: 11 }}>{c.label}</div>
          <div style={{ color, fontWeight: 500 }}>{c.value}</div>
        </div>
      ))}
    </div>
  );
}

window.TP_SectionTitle = TP_SectionTitle;
window.TP_Avatar = TP_Avatar;
window.TP_ContactList = TP_ContactList;

// Contrast-verified accent sets for the 5 premium templates.
// text/solid values hold >=4.5:1 against white; fill is decorative (bars, rules).
window.PAID_ACCENTS = {
  blue:     { key: 'blue',     label: 'Синий',     text: 'var(--paid-blue)',      fill: 'var(--paid-blue)',     solid: 'var(--paid-blue)' },
  teal:     { key: 'teal',     label: 'Бирюзовый', text: 'var(--paid-teal-deep)', fill: 'var(--paid-teal)',     solid: 'var(--paid-teal-deep)' },
  graphite: { key: 'graphite', label: 'Графит',    text: 'var(--paid-graphite)',  fill: 'var(--paid-graphite)', solid: 'var(--paid-graphite)' },
};

// Right-aligned period + bold title row used by premium templates.
function TP_ExpRow({ e, accentText }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>{e.title}</div>
        <div style={{ fontSize: 11, color: 'var(--ink-secondary)', whiteSpace: 'nowrap' }}>{e.period}</div>
      </div>
      <div style={{ fontSize: 12, color: accentText || 'var(--ink-secondary)', fontWeight: 600, margin: '1px 0 5px' }}>{e.company}</div>
      <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {e.points.map((p) => <li key={p} style={{ fontSize: 12, color: 'var(--ink)', lineHeight: 1.45 }}>{p}</li>)}
      </ul>
    </div>
  );
}
window.TP_ExpRow = TP_ExpRow;
