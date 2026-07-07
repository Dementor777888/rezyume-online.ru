// 4. «Академический» — PT Serif, monochrome, centered header, formal printed-CV feel. No accent color, no photo.
function TemplateAcademic() {
  const d = window.resumeData;
  const ink = 'var(--ink)';
  const Rule = () => <div style={{ borderBottom: '1px solid var(--ink)', margin: '2px 0 8px' }}></div>;
  return (
    <div style={{ width: 620, minHeight: 876, fontFamily: 'var(--font-serif-academic)', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: 12, padding: '40px 48px', color: ink, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ textAlign: 'center', paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '0.01em' }}>{d.name}</div>
        <div style={{ fontSize: 15, fontStyle: 'italic', marginTop: 3 }}>{d.role}</div>
        <div style={{ fontSize: 11.5, marginTop: 9, color: 'var(--ink-secondary)', fontFamily: 'var(--font-sans)', display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          {d.contacts.map((c) => <span key={c.label}>{c.value}</span>)}
        </div>
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.65, textAlign: 'justify' }}>{d.summary}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.02em' }}>Опыт работы</div>
        <Rule />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {d.experience.map((e) => (
            <div key={e.company}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{e.title}, {e.company}</div>
                <div style={{ fontSize: 12, fontStyle: 'italic', whiteSpace: 'nowrap' }}>{e.period}</div>
              </div>
              <ul style={{ margin: '4px 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {e.points.map((p) => <li key={p} style={{ fontSize: 13, lineHeight: 1.55 }}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.02em' }}>Образование</div>
        <Rule />
        {d.education.map((e) => (
          <div key={e.school} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 13.5 }}>
            <span>{e.school}, {e.degree}</span>
            <span style={{ fontStyle: 'italic', fontSize: 12 }}>{e.period}</span>
          </div>
        ))}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.02em' }}>Дополнительное образование</div>
        <Rule />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {d.courses.map((c) => (
            <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 13 }}>
              <span>{c.name}</span>
              <span style={{ fontStyle: 'italic', fontSize: 12 }}>{c.period}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.02em' }}>Навыки и языки</div>
        <Rule />
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          {d.skills.map((s) => s.label).join(', ')}. Языки: {d.languages.map((s) => s.label).join(', ')}.
        </div>
      </div>
    </div>
  );
}
window.TemplateAcademic = TemplateAcademic;
