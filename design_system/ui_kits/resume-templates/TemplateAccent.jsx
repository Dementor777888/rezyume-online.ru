// 5. «Акцент» — premium template with a solid accent sidebar. White text on contrast-verified deep accents only.
function TemplateAccent({ accent = 'blue' }) {
  const d = window.resumeData;
  const a = window.PAID_ACCENTS[accent];
  const SkillBar = window.DS.SkillBar;
  return (
    <div style={{ width: 620, minHeight: 876, display: 'flex', fontFamily: 'var(--font-sans)', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ width: '36%', background: a.solid, color: '#fff', padding: '30px 22px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <window.TP_Avatar size={84} bg="rgba(255,255,255,0.16)" fg="#fff" />
        <div>
          <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.25 }}>{d.name}</div>
          <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6, color: 'rgba(255,255,255,0.95)' }}>{d.role}</div>
        </div>
        <div>
          <window.TP_SectionTitle color="#fff">Контакты</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {d.contacts.map((c) => (
              <div key={c.label} style={{ fontSize: 12.5 }}>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 10.5 }}>{c.label}</div>
                <div style={{ fontWeight: 600, color: '#fff' }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <window.TP_SectionTitle color="#fff">Навыки</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.skills.map((s) => <SkillBar key={s.label} label={s.label} level={s.level} color="#fff" labelColor="#fff" trackColor="rgba(255,255,255,0.3)" />)}
          </div>
        </div>
        <div>
          <window.TP_SectionTitle color="#fff">Языки</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.languages.map((s) => <SkillBar key={s.label} label={s.label} level={s.level} color="#fff" labelColor="#fff" trackColor="rgba(255,255,255,0.3)" />)}
          </div>
        </div>
      </div>
      <div style={{ width: '64%', padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: 18 }}>
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
  );
}
window.TemplateAccent = TemplateAccent;
