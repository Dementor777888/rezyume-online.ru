// 0b. «Старт+фото» — same free character as «Старт», light blue sidebar, with a photo slot (user drops in their own, unedited).
function TemplateStartPhoto({ photoSlot, photo, photoShape = 'circle', highlight }) {
  const d = window.resumeData;
  const SkillBar = window.DS.SkillBar;
  const sec = (key) => {
    if (!highlight) return {};
    const on = highlight === key;
    return { opacity: on ? 1 : 0.32, outline: on ? '2px solid var(--brand-green)' : '2px solid transparent', outlineOffset: 5, borderRadius: 6, transition: 'opacity .3s ease, outline-color .3s ease' };
  };
  return (
    <div style={{ width: 620, minHeight: 876, display: 'flex', fontFamily: 'var(--font-sans)', background: '#fff', boxShadow: 'var(--shadow-lg)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ width: '36%', background: 'var(--brand-blue-tint)', color: 'var(--ink)', padding: '32px 22px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'center', ...sec('photo') }}>
        {photo ? (
          <img src={photo} alt="" style={{ width: 120, height: 120, borderRadius: photoShape === 'square' ? 14 : '50%', objectFit: 'cover', display: 'block', alignSelf: 'center', boxShadow: 'var(--shadow-sm)' }} />
        ) : photoSlot ? (
          <image-slot id="hero-portrait" shape="circle" fit="cover" placeholder="Фото" style={{ width: 96, height: 96, display: 'block', alignSelf: 'center' }}></image-slot>
        ) : (
          <div style={{
            width: 96, height: 96, borderRadius: '50%', border: '2px dashed var(--brand-blue-deep)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, textAlign: 'center', color: 'var(--brand-blue-deep)',
          }}>Ваше фото</div>
        )}
        </div>
        <div style={sec('contacts')}>
          <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 24, fontWeight: 600, lineHeight: 1.15, color: 'var(--ink)' }}>{d.name}</div>
          <div style={{
            display: 'inline-block', marginTop: 10, background: 'var(--brand-yellow)', color: '#2B2B2B',
            fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 999,
          }}>{d.role}</div>
        </div>
        <div>
          <window.TP_SectionTitle color="var(--brand-blue-deep)">Контакты</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.contacts.map((c) => (
              <div key={c.label} style={{ fontSize: 13 }}>
                <div style={{ color: 'var(--ink-secondary)', fontSize: 10.5 }}>{c.label}</div>
                <div style={{ color: 'var(--ink)', fontWeight: 600 }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={sec('skills')}>
          <window.TP_SectionTitle color="var(--brand-blue-deep)">Навыки</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {d.skills.slice(0, 3).map((s) => (
              <SkillBar key={s.label} label={s.label} level={s.level} color="var(--brand-blue-deep)" labelColor="var(--ink)" trackColor="rgba(45,102,133,0.18)" />
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: '64%', padding: '32px 26px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={sec('experience')}>
          <window.TP_SectionTitle accentBar accentColor="var(--brand-yellow)">Опыт работы</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {d.experience.map((e) => (
              <div key={e.company}>
                <div style={{ fontSize: 11.5, color: 'var(--ink-secondary)' }}>{e.period}</div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)' }}>{e.title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-secondary)', marginBottom: 4 }}>{e.company}</div>
                <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {e.points.map((p) => <li key={p} style={{ fontSize: 12.5, color: 'var(--ink)', lineHeight: 1.4 }}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div style={sec('education')}>
          <window.TP_SectionTitle accentBar accentColor="var(--brand-yellow)">Образование</window.TP_SectionTitle>
          {d.education.map((e) => (
            <div key={e.school} style={{ fontSize: 13 }}>
              <div style={{ color: 'var(--ink-secondary)', fontSize: 11.5 }}>{e.period}</div>
              <div style={{ fontWeight: 700 }}>{e.school}</div>
              <div style={{ color: 'var(--ink-secondary)' }}>{e.degree}</div>
            </div>
          ))}
        </div>
        <div style={sec('education')}>
          <window.TP_SectionTitle accentBar accentColor="var(--brand-yellow)">Курсы</window.TP_SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {d.courses.map((c) => (
              <div key={c.name} style={{ fontSize: 12.5 }}><b>{c.period}</b> — {c.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.TemplateStartPhoto = TemplateStartPhoto;
