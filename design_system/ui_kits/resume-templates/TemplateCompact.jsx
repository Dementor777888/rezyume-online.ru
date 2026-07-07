// 2. «Компакт» — dense premium template for long work histories. Header strip + two columns.
function TemplateCompact({ accent = 'teal' }) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  const SkillBar = window.DS.SkillBar;
  return (
    <div style={{ width: 620, minHeight: 876, fontFamily: 'var(--font-sans)', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: `2px solid ${a.fill}` }}>
        <div style={{ width: 56, height: 56, borderRadius: 8, background: 'var(--bg-tint)', color: a.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 19, flexShrink: 0 }}>
          {d.photoInitials}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 21, fontWeight: 700, color: 'var(--ink)' }}>{d.name}</div>
          <div style={{ fontSize: 12, color: a.text, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: 2 }}>{d.role}</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>
          {d.contacts.slice(0, 3).map((c) => <div key={c.label}>{c.value}</div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '66%', padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 14, borderRight: '1px solid var(--line)' }}>
          <div>
            <window.TP_SectionTitle color={a.text}>Опыт работы</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {d.experience.map((e) => <window.TP_ExpRow key={e.company} e={e} accentText={a.text} />)}
            </div>
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Образование</window.TP_SectionTitle>
            {d.education.map((e) => (
              <div key={e.school} style={{ fontSize: 12 }}><b>{e.school}</b>, {e.degree} <span style={{ color: 'var(--ink-secondary)' }}>({e.period})</span></div>
            ))}
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Курсы</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {d.courses.map((c) => (
                <div key={c.name} style={{ fontSize: 11.5, color: 'var(--ink)' }}>{c.name} <span style={{ color: 'var(--ink-secondary)' }}>({c.period})</span></div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: '34%', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <window.TP_SectionTitle color={a.text}>О себе</window.TP_SectionTitle>
            <div style={{ fontSize: 11.5, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>{d.summary}</div>
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Навыки</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {d.skills.map((s) => <SkillBar key={s.label} label={s.label} level={s.level} color={a.fill} />)}
            </div>
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Языки</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {d.languages.map((s) => <SkillBar key={s.label} label={s.label} level={s.level} color={a.fill} />)}
            </div>
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Личное</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {Object.entries(d.personal).map(([k, v]) => (
                <div key={k} style={{ fontSize: 11.5 }}><span style={{ color: 'var(--ink-secondary)' }}>{k}:</span> {v}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.TemplateCompact = TemplateCompact;
