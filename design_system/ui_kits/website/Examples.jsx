// Screen 10 — Примеры резюме. Каталог готовых примеров: сайдбар разделов/подразделов,
// карточки примеров и детальная страница примера с перелинковкой на соседние примеры.
function Examples({ device = 'desktop', state = 'list', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';

  const POOL = [
    () => <window.TemplateStart />,
    () => <window.TemplateClean accent="blue" />,
    () => <window.TemplateCompact accent="teal" />,
    () => <window.TemplateOneColumn accent="graphite" />,
    () => <window.TemplateAccent accent="teal" />,
    () => <window.TemplateClean accent="graphite" />,
    () => <window.TemplateAcademic />,
    () => <window.TemplateAccent accent="blue" />,
  ];

  // Демонстрационный срез каталога (полный — 17 разделов · 500+ профессий).
  const SECTIONS = [
    { id: 'sales', name: 'Продажи и клиенты', subs: [
      { name: 'Менеджеры', items: ['Менеджер по продажам', 'Менеджер по работе с клиентами', 'Аккаунт-менеджер'] },
      { name: 'Розница', items: ['Продавец-консультант', 'Кассир', 'Администратор магазина'] },
    ] },
    { id: 'logistics', name: 'Транспорт и логистика', subs: [
      { name: 'Водители', items: ['Водитель категории B', 'Водитель категории C', 'Водитель-экспедитор'] },
      { name: 'Склад', items: ['Кладовщик', 'Комплектовщик'] },
    ] },
    { id: 'food', name: 'Общественное питание', subs: [
      { name: 'Кухня', items: ['Повар', 'Су-шеф', 'Кондитер'] },
      { name: 'Зал', items: ['Официант', 'Бариста', 'Хостес'] },
    ] },
    { id: 'it', name: 'IT и разработка', subs: [
      { name: 'Разработка', items: ['Frontend-разработчик', 'Backend-разработчик'] },
      { name: 'Данные', items: ['Аналитик данных', 'Data Scientist'] },
    ] },
    { id: 'marketing', name: 'Маркетинг и реклама', subs: [
      { name: 'Digital', items: ['Интернет-маркетолог', 'SMM-специалист', 'Таргетолог'] },
      { name: 'Контент', items: ['Копирайтер', 'Контент-менеджер'] },
    ] },
    { id: 'office', name: 'Административный персонал', subs: [
      { name: 'Офис', items: ['Секретарь', 'Офис-менеджер', 'Персональный ассистент'] },
    ] },
  ];

  // плоский список примеров
  const EXAMPLES = [];
  SECTIONS.forEach((sec) => sec.subs.forEach((sub) => sub.items.forEach((prof) => {
    EXAMPLES.push({ id: EXAMPLES.length, prof, secId: sec.id, secName: sec.name, sub: sub.name });
  })));
  const tplFor = (id) => POOL[id % POOL.length];

  const firstSub = SECTIONS[0].subs[0].name;
  const [expanded, setExpanded] = React.useState({ [SECTIONS[0].id]: true });
  const [active, setActive] = React.useState({ secId: SECTIONS[0].id, sub: firstSub });
  const [view, setView] = React.useState(state === 'detail' ? 'detail' : 'list');
  const [curId, setCurId] = React.useState(2);

  React.useEffect(() => { setView(state === 'detail' ? 'detail' : 'list'); }, [state]);

  const inSub = (secId, sub) => EXAMPLES.filter((e) => e.secId === secId && e.sub === sub);
  const listed = inSub(active.secId, active.sub);
  const cur = EXAMPLES.find((e) => e.id === curId) || EXAMPLES[0];

  const openExample = (id) => { setCurId(id); setView('detail'); };

  // ——— Sidebar ———
  const sidebar = (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-secondary)' }}>Разделы</div>
      <div style={{ maxHeight: isM ? 260 : 560, overflowY: 'auto' }}>
        {SECTIONS.map((sec) => {
          const open = expanded[sec.id];
          return (
            <div key={sec.id} style={{ borderBottom: '1px solid var(--line)' }}>
              <button onClick={() => setExpanded({ ...expanded, [sec.id]: !open })} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '11px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 14, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>
                {sec.name}
                <span style={{ color: 'var(--brand-green)', fontSize: 18, lineHeight: 1, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }}>›</span>
              </button>
              {open && (
                <div style={{ paddingBottom: 6 }}>
                  {sec.subs.map((sub) => {
                    const on = active.secId === sec.id && active.sub === sub.name;
                    return (
                      <button key={sub.name} onClick={() => { setActive({ secId: sec.id, sub: sub.name }); setView('list'); }} style={{ width: '100%', textAlign: 'left', padding: '8px 16px 8px 26px', background: on ? 'var(--brand-green-tint)' : 'transparent', border: 'none', borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent', cursor: 'pointer', fontSize: 13.5, fontWeight: on ? 700 : 500, color: on ? '#3F6B22' : 'var(--ink-secondary)', fontFamily: 'var(--font-sans)', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                        <span>{sub.name}</span>
                        <span style={{ fontSize: 12, opacity: 0.7 }}>{inSub(sec.id, sub.name).length}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  // ——— Example card ———
  const Card = ({ e }) => (
    <button onClick={() => openExample(e.id)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', padding: 0, cursor: 'pointer', textAlign: 'left', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)' }}>
      <div style={{ height: 168, overflow: 'hidden', background: 'var(--bg-tint)', display: 'flex', justifyContent: 'center', borderBottom: '1px solid var(--line)' }}>
        <div style={{ width: 620, transform: 'scale(0.29)', transformOrigin: 'top center' }}>{tplFor(e.id)()}</div>
      </div>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)' }}>{e.prof}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 2 }}>{e.secName} · {e.sub}</div>
        <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, color: 'var(--brand-green)' }}>Взять за основу →</div>
      </div>
    </button>
  );

  // ——— List view main ———
  const listMain = (
    <div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', marginBottom: 6 }}>{SECTIONS.find((s) => s.id === active.secId).name} / {active.sub}</div>
      <h2 style={{ fontSize: isM ? 20 : 24, fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px' }}>{active.sub}</h2>
      <div style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 20 }}>{listed.length} готовых образцов — возьмите за основу и исправьте под себя.</div>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(auto-fill, minmax(210px, 1fr))', gap: isM ? 12 : 18 }}>
        {listed.map((e) => <Card key={e.id} e={e} />)}
      </div>
    </div>
  );

  // ——— Detail view main ———
  const neighbours = inSub(cur.secId, cur.sub).filter((e) => e.id !== cur.id);
  const detailMain = (
    <div>
      <button onClick={() => setView('list')} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', fontSize: 13, cursor: 'pointer', padding: 0, marginBottom: 12, fontFamily: 'var(--font-sans)' }}>← {cur.secName} · {cur.sub}</button>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 300px', gap: 24, alignItems: 'start' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 14 : 24, boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ width: 620 * (isM ? 0.52 : 0.72), height: 876 * (isM ? 0.52 : 0.72), overflow: 'hidden' }}>
            <div style={{ width: 620, transform: isM ? 'scale(0.52)' : 'scale(0.72)', transformOrigin: 'top left' }}>{tplFor(cur.id)()}</div>
          </div>
        </div>
        <div style={{ position: isM ? 'static' : 'sticky', top: 28, background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: 22, boxShadow: 'var(--shadow-md)' }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{cur.prof}</h1>
          <div style={{ fontSize: 13, color: 'var(--ink-secondary)', marginTop: 4 }}>Образец резюме · {cur.secName}</div>
          <DS.Button variant="primary" size="lg" style={{ width: '100%', marginTop: 16 }} onClick={() => go('constructor')}>Взять за основу</DS.Button>
          <DS.Button variant="outline" size="md" style={{ width: '100%', marginTop: 10 }} onClick={() => go('preview')}>Скачать PDF</DS.Button>
          <div style={{ fontSize: 11.5, color: 'var(--ink-secondary)', textAlign: 'center', marginTop: 10 }}>Отредактируйте данные под себя — бесплатно.</div>
        </div>
      </div>

      {/* Перелинковка на соседние примеры */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: '0 0 14px' }}>Другие образцы в подразделе «{cur.sub}»</h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {neighbours.map((e) => (
            <button key={e.id} onClick={() => openExample(e.id)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 999, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{e.prof} →</button>
          ))}
        </div>
        <div style={{ marginTop: 18, fontSize: 13.5, color: 'var(--ink-secondary)' }}>Смотрите также другие разделы:
          <span style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', marginLeft: 8 }}>
            {SECTIONS.filter((s) => s.id !== cur.secId).slice(0, 4).map((s) => (
              <a key={s.id} href="#" onClick={(ev) => { ev.preventDefault(); setExpanded({ [s.id]: true }); setActive({ secId: s.id, sub: s.subs[0].name }); setView('list'); }} style={{ color: 'var(--brand-green)', fontWeight: 600, textDecoration: 'none' }}>{s.name}</a>
            ))}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Образцы" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '28px 40px' }}>
        <div style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: isM ? 24 : 30, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Образцы резюме</h1>
          <div style={{ fontSize: 14, color: 'var(--ink-secondary)', marginTop: 6 }}>17 разделов · более 500 профессий. Выберите профессию и возьмите готовый пример за основу.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '260px 1fr', gap: 24, alignItems: 'start' }}>
          {sidebar}
          <div>{view === 'detail' ? detailMain : listMain}</div>
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Examples = Examples;
