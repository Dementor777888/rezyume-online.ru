// Screen — Шаблоны. Витрина визуальных шаблонов резюме (только визуал, без заполнения).
// Сетка шаблонов + цветовые варианты (акценты) + детальная страница шаблона.
function Templates({ device = 'desktop', state = 'list', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const ACC = window.PAID_ACCENTS;
  const isM = device === 'mobile';

  const TPL = [
    { key: 'start',     n: '«Старт»',         tag: 'free', accents: null,                           make: () => <window.TemplateStart />,                            d: 'Лёгкий шаблон без фото: голубой сайдбар и жёлтые акценты.' },
    { key: 'startPhoto',n: '«Старт+фото»',    tag: 'free', accents: null,                           make: () => <window.TemplateStartPhoto photo="../../assets/hero-portrait.png" />, d: 'То же оформление, но с местом под фотографию.' },
    { key: 'clean',     n: '«Чистый»',        tag: 'paid', accents: ['blue', 'teal', 'graphite'],   make: (a) => <window.TemplateClean accent={a} />,                d: 'Широкая шапка, светлый сайдбар, сдержанный акцент.' },
    { key: 'compact',   n: '«Компакт»',       tag: 'paid', accents: ['teal', 'blue', 'graphite'],   make: (a) => <window.TemplateCompact accent={a} />,              d: 'Плотная вёрстка для длинного опыта работы.' },
    { key: 'onecol',    n: '«Одна колонка»',  tag: 'paid', accents: ['graphite', 'blue', 'teal'],   make: (a) => <window.TemplateOneColumn accent={a} />,            d: 'ATS-дружелюбный: одна колонка, читается роботами.' },
    { key: 'academic',  n: '«Академический»', tag: 'paid', accents: null,                           make: () => <window.TemplateAcademic />,                         d: 'PT Serif, монохром, формальный печатный вид.' },
    { key: 'accent',    n: '«Акцент»',        tag: 'paid', accents: ['blue', 'teal', 'graphite'],   make: (a) => <window.TemplateAccent accent={a} />,               d: 'Плотный цветной сайдбар, белый текст на контрастном фоне.' },
  ];

  const [view, setView] = React.useState(state === 'detail' ? 'detail' : 'list');
  const [curKey, setCurKey] = React.useState('clean');
  const [accent, setAccent] = React.useState('blue');
  const [filter, setFilter] = React.useState('all');
  React.useEffect(() => { setView(state === 'detail' ? 'detail' : 'list'); }, [state]);

  const cur = TPL.find((t) => t.key === curKey) || TPL[0];
  const open = (t) => { setCurKey(t.key); setAccent(t.accents ? t.accents[0] : 'blue'); setView('detail'); };

  const Swatch = ({ a, on, onClick }) => (
    <button onClick={onClick} title={ACC[a].label} style={{ width: 22, height: 22, borderRadius: '50%', background: ACC[a].solid, border: on ? '2px solid var(--ink)' : '2px solid #fff', boxShadow: '0 0 0 1px var(--line)', cursor: 'pointer', padding: 0 }} />
  );

  // ——— Card ———
  const Card = ({ t }) => (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => open(t)} style={{ background: 'var(--bg-tint)', border: 'none', borderBottom: '1px solid var(--line)', padding: 0, cursor: 'pointer', height: 236, overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 620, transform: 'scale(0.38)', transformOrigin: 'top center' }}>{t.make(t.accents ? t.accents[0] : undefined)}</div>
      </button>
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)' }}>{t.n}</span>
          {t.tag === 'free' ? <DS.Badge tone="brand">Бесплатно</DS.Badge> : <window.SITE.PriceChip tone="paid">99 ₽</window.SITE.PriceChip>}
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', lineHeight: 1.45, flex: 1 }}>{t.d}</div>
        {t.accents && (
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            {t.accents.map((a) => <span key={a} style={{ width: 16, height: 16, borderRadius: '50%', background: ACC[a].solid, boxShadow: '0 0 0 1px var(--line)' }} />)}
            <span style={{ fontSize: 11.5, color: 'var(--ink-secondary)' }}>{t.accents.length} цвета</span>
          </div>
        )}
        <button onClick={() => open(t)} style={{ alignSelf: 'flex-start', marginTop: 2, background: 'none', border: 'none', color: 'var(--brand-green)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)' }}>Смотреть шаблон →</button>
      </div>
    </div>
  );

  const filtered = filter === 'all' ? TPL : TPL.filter((t) => t.tag === filter);

  const listMain = (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {[['all', 'Все'], ['free', 'Бесплатные'], ['paid', 'AI-версия · 99 ₽']].map(([k, l]) => {
          const on = filter === k;
          return <button key={k} onClick={() => setFilter(k)} style={{ fontSize: 13, fontWeight: 700, color: on ? '#fff' : 'var(--ink-secondary)', background: on ? 'var(--brand-green)' : '#fff', border: '1px solid ' + (on ? 'var(--brand-green)' : 'var(--line)'), borderRadius: 999, padding: '8px 16px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{l}</button>;
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : 'repeat(auto-fill, minmax(250px, 1fr))', gap: isM ? 14 : 20 }}>
        {filtered.map((t) => <Card key={t.key} t={t} />)}
      </div>
    </div>
  );

  const detailMain = (
    <div>
      <button onClick={() => setView('list')} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', fontSize: 13, cursor: 'pointer', padding: 0, marginBottom: 14, fontFamily: 'var(--font-sans)' }}>← Все шаблоны</button>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 300px', gap: 24, alignItems: 'start' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 14 : 24, boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ width: 620 * (isM ? 0.52 : 0.72), height: 876 * (isM ? 0.52 : 0.72), overflow: 'hidden' }}>
            <div style={{ width: 620, transform: isM ? 'scale(0.52)' : 'scale(0.72)', transformOrigin: 'top left' }}>{cur.make(cur.accents ? accent : undefined)}</div>
          </div>
        </div>
        <div style={{ position: isM ? 'static' : 'sticky', top: 28, background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: 22, boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h1 style={{ fontSize: 21, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{cur.n}</h1>
            {cur.tag === 'free' ? <DS.Badge tone="brand">Бесплатно</DS.Badge> : <window.SITE.PriceChip tone="paid">99 ₽</window.SITE.PriceChip>}
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 8, lineHeight: 1.5 }}>{cur.d}</div>
          {cur.accents && (
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Цвет акцента</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {cur.accents.map((a) => <Swatch key={a} a={a} on={accent === a} onClick={() => setAccent(a)} />)}
              </div>
            </div>
          )}
          <DS.Button variant="primary" size="lg" style={{ width: '100%', marginTop: 18 }} onClick={() => go('constructor')}>Взять за основу</DS.Button>
          <DS.Button variant="outline" size="md" style={{ width: '100%', marginTop: 10 }} onClick={() => go('examples')}>Смотреть примеры</DS.Button>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: '0 0 14px' }}>Другие шаблоны</h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {TPL.filter((t) => t.key !== cur.key).map((t) => (
            <button key={t.key} onClick={() => open(t)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 999, padding: '9px 16px', fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{t.n} →</button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Шаблоны" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '28px 40px' }}>
        <div style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: isM ? 24 : 30, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Шаблоны резюме</h1>
          <div style={{ fontSize: 14, color: 'var(--ink-secondary)', marginTop: 6 }}>Выберите оформление. Два шаблона бесплатны, остальные — в AI-версии за 99 ₽ один раз.</div>
        </div>
        {view === 'detail' ? detailMain : listMain}
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Templates = Templates;
