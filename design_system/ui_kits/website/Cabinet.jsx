// Screen 7 — Личный кабинет «Мои резюме» (только платные). Карточки: миниатюра, название,
// статус, бессрочная ссылка, редактировать/скачать/поделиться. Плашка «правки и скачивания бесплатны».
function Cabinet({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';

  const items = [
    { n: 'Маркетолог — основное', tpl: '«Чистый», синий', el: <window.TemplateClean accent="blue" />, status: 'Опубликовано', updated: 'сегодня' },
    { n: 'Резюме для стартапа', tpl: '«Акцент», бирюзовый', el: <window.TemplateAccent accent="teal" />, status: 'Черновик', updated: '2 дня назад' },
    { n: 'Академическая версия', tpl: '«Академический»', el: <window.TemplateAcademic />, status: 'Опубликовано', updated: 'неделю назад' },
  ];

  const header = (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Мои резюме</h2>
        <p style={{ fontSize: 14, color: 'var(--ink-secondary)', margin: '6px 0 0' }}>e.smirnova@mail.ru · AI-версия активна</p>
      </div>
      <DS.Button variant="primary" size="md" onClick={() => go('constructor')}>+ Новое резюме</DS.Button>
    </div>
  );

  const banner = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--brand-green-tint)', border: '1px solid #C6DF9E', borderRadius: 12, padding: '12px 16px', margin: '18px 0 24px' }}>
      <MiniCheck /><span style={{ fontSize: 14, color: '#3F6B22' }}>Правки и повторные скачивания — бесплатны. Ссылки на ваши резюме бессрочные.</span>
    </div>
  );

  if (state === 'empty') {
    return (
      <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header device={device} active="Услуги" onCta={() => go('constructor')} />
        <div style={{ maxWidth: 1080, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '20px 16px' : '32px 40px' }}>
          {header}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '56px 24px', textAlign: 'center', marginTop: 20, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>Пока нет сохранённых резюме</div>
            <div style={{ fontSize: 14, color: 'var(--ink-secondary)', margin: '8px 0 20px' }}>Создайте первое — оно сохранится здесь навсегда.</div>
            <DS.Button variant="primary" size="md" onClick={() => go('constructor')}>Создать резюме</DS.Button>
          </div>
        </div>
        <Footer device={device} />
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Услуги" onCta={() => go('constructor')} />
      <div style={{ maxWidth: 1080, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '20px 16px' : '32px 40px' }}>
        {header}{banner}
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {items.map((it) => (
            <div key={it.n} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: 14, padding: 16 }}>
                <div style={{ width: 84, height: 118, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--line)', flexShrink: 0, background: '#fff' }}>
                  <div style={{ transform: 'scale(0.1355)', transformOrigin: 'top left', width: 620, height: 876 }}>{it.el}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: it.status === 'Опубликовано' ? 'var(--brand-green)' : 'var(--brand-yellow)' }} />
                    <span style={{ fontSize: 11.5, color: 'var(--ink-secondary)' }}>{it.status}</span>
                  </div>
                  <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)', marginTop: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.n}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', marginTop: 2 }}>{it.tpl}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 8 }}>Обновлено {it.updated}</div>
                  {it.status === 'Опубликовано' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, background: 'var(--bg-tint)', border: '1px solid var(--line)', borderRadius: 8, padding: '5px 8px' }}>
                      <span style={{ fontSize: 11, color: 'var(--ink-secondary)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>rezyume-online.ru/r/{it.n.length}k2</span>
                      <span style={{ fontSize: 10.5, fontWeight: 700, color: '#3F6B22', background: 'var(--brand-green-tint)', padding: '2px 7px', borderRadius: 999 }}>бессрочно</span>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', borderTop: '1px solid var(--line)', marginTop: 'auto' }}>
                {['Редактировать', 'Скачать', 'Поделиться'].map((a, i) => (
                  <button key={a} onClick={() => a === 'Поделиться' ? go('public') : a === 'Редактировать' ? go('constructor') : null} style={{ flex: 1, background: 'none', border: 'none', borderLeft: i ? '1px solid var(--line)' : 'none', padding: '11px 6px', fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{a}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Cabinet = Cabinet;
