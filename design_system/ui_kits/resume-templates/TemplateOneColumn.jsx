// 3. «Одна колонка» — ATS-friendly premium template. Single column, no sidebar, machine-readable.
function TemplateOneColumn({ accent = 'graphite' }) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  return (
    <div style={{ width: 620, minHeight: 876, fontFamily: 'var(--font-sans)', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: 12, padding: '36px 44px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ paddingBottom: 16, borderBottom: `2px solid ${a.fill}` }}>
        <div style={{ fontSize: 27, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{d.name}</div>
        <div style={{ fontSize: 13, color: a.text, fontWeight: 700, marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{d.role}</div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 10, fontSize: 12, color: 'var(--ink-secondary)' }}>
          {d.contacts.map((c) => <span key={c.label}>{c.value}</span>)}
        </div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{d.summary}</div>
      <div>
        <window.TP_SectionTitle color={a.text}>Опыт работы</window.TP_SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {d.experience.map((e) => <window.TP_ExpRow key={e.company} e={e} accentText={a.text} />)}
        </div>
      </div>
      <div>
        <window.TP_SectionTitle color={a.text}>Образование</window.TP_SectionTitle>
        {d.education.map((e) => (
          <div key={e.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 12.5 }}>
            <span><b>{e.school}</b>, {e.degree}</span>
            <span style={{ color: 'var(--ink-secondary)', fontSize: 11 }}>{e.period}</span>
          </div>
        ))}
      </div>
      <div>
        <window.TP_SectionTitle color={a.text}>Курсы</window.TP_SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {d.courses.map((c) => (
            <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 12 }}>
              <span>{c.name}</span>
              <span style={{ color: 'var(--ink-secondary)', fontSize: 11 }}>{c.period}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <window.TP_SectionTitle color={a.text}>Навыки</window.TP_SectionTitle>
        <div style={{ fontSize: 12.5, color: 'var(--ink)', lineHeight: 1.6 }}>
          {d.skills.map((s) => s.label).join(' · ')}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 4 }}>
          Языки: {d.languages.map((s) => s.label).join(', ')}
        </div>
      </div>
    </div>
  );
}
window.TemplateOneColumn = TemplateOneColumn;
