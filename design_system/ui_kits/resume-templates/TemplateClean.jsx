// 1. «Чистый» — main premium template. Full-width header, light sidebar, restrained accent.
// accent: 'blue' | 'teal' | 'graphite' (see window.PAID_ACCENTS)
function TemplateClean({ accent = 'blue' }) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  const SkillBar = window.DS.SkillBar;
  return (
    <div style={{ width: 620, minHeight: 876, fontFamily: 'var(--font-sans)', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '28px 32px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, borderBottom: '1px solid var(--line)' }}>
        <div>
          <div style={{ fontSize: 27, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{d.name}</div>
          <div style={{ fontSize: 12.5, color: a.text, fontWeight: 700, marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{d.role}</div>
        </div>
        <window.TP_Avatar size={72} bg="var(--bg-tint)" fg={a.text} />
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '33%', background: 'var(--bg-tint)', padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <window.TP_SectionTitle color={a.text}>Контакты</window.TP_SectionTitle>
            <window.TP_ContactList />
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Навыки</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {d.skills.map((s) => <SkillBar key={s.label} label={s.label} level={s.level} color={a.fill} />)}
            </div>
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>Языки</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {d.languages.map((s) => <SkillBar key={s.label} label={s.label} level={s.level} color={a.fill} />)}
            </div>
          </div>
          <div>
            <window.TP_SectionTitle color={a.text}>О себе</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {Object.entries(d.personal).map(([k, v]) => (
                <div key={k} style={{ fontSize: 12 }}>
                  <div style={{ color: 'var(--ink-secondary)', fontSize: 10.5 }}>{k}</div>
                  <div style={{ color: 'var(--ink)', fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: '67%', padding: '22px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', lineHeight: 1.55, borderLeft: `2px solid ${a.fill}`, paddingLeft: 12 }}>{d.summary}</div>
          <div>
            <window.TP_SectionTitle color="var(--ink)" accentBar accentColor={a.fill}>Опыт работы</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {d.experience.map((e) => <window.TP_ExpRow key={e.company} e={e} accentText={a.text} />)}
            </div>
          </div>
          <div>
            <window.TP_SectionTitle color="var(--ink)" accentBar accentColor={a.fill}>Образование</window.TP_SectionTitle>
            {d.education.map((e) => (
              <div key={e.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 12.5 }}>
                <span><b>{e.school}</b> — {e.degree}</span>
                <span style={{ color: 'var(--ink-secondary)', fontSize: 11 }}>{e.period}</span>
              </div>
            ))}
          </div>
          <div>
            <window.TP_SectionTitle color="var(--ink)" accentBar accentColor={a.fill}>Курсы</window.TP_SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {d.courses.map((c) => (
                <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 12 }}>
                  <span>{c.name}</span>
                  <span style={{ color: 'var(--ink-secondary)', fontSize: 11 }}>{c.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.TemplateClean = TemplateClean;
