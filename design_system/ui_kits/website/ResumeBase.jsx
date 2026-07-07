// Screen — База резюме. Каталог опубликованных резюме (как «Примеры», но с подпиской):
// поле email + «Подписаться на новые резюме» → выбор интересных разделов/специальностей.
// + детальная карточка страницы резюме.
function ResumeBase({ device = 'desktop', state = 'list', go }) {
  const DS = window.DS;
  const { Header, Footer, PriceChip } = window.SITE;
  const isM = device === 'mobile';

  const POOL = [
    () => <window.TemplateStart />, () => <window.TemplateClean accent="blue" />, () => <window.TemplateCompact accent="teal" />,
    () => <window.TemplateOneColumn accent="graphite" />, () => <window.TemplateAccent accent="teal" />, () => <window.TemplateStartPhoto photo="../../assets/hero-portrait.png" />,
  ];
  const tplFor = (id) => POOL[id % POOL.length];

  const SECTIONS = ['Продажи и клиенты', 'IT и разработка', 'Маркетинг и реклама', 'Транспорт и логистика', 'Общественное питание', 'Административный персонал'];
  const CITIES = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Екатеринбург'];
  const RESUMES = [
    { prof: 'Менеджер по продажам', sec: 'Продажи и клиенты', exp: '6 лет', sal: 'от 120 000 ₽' },
    { prof: 'Frontend-разработчик', sec: 'IT и разработка', exp: '4 года', sal: 'от 220 000 ₽' },
    { prof: 'Интернет-маркетолог', sec: 'Маркетинг и реклама', exp: '5 лет', sal: 'от 150 000 ₽' },
    { prof: 'Водитель категории C', sec: 'Транспорт и логистика', exp: '9 лет', sal: 'от 90 000 ₽' },
    { prof: 'Повар', sec: 'Общественное питание', exp: '7 лет', sal: 'от 80 000 ₽' },
    { prof: 'Офис-менеджер', sec: 'Административный персонал', exp: '3 года', sal: 'от 70 000 ₽' },
    { prof: 'Аккаунт-менеджер', sec: 'Продажи и клиенты', exp: '5 лет', sal: 'от 110 000 ₽' },
    { prof: 'Аналитик данных', sec: 'IT и разработка', exp: '4 года', sal: 'от 200 000 ₽' },
    { prof: 'SMM-специалист', sec: 'Маркетинг и реклама', exp: '3 года', sal: 'от 90 000 ₽' },
  ].map((r, i) => ({ ...r, id: i, city: CITIES[i % CITIES.length], updated: ['сегодня', 'вчера', '2 дня назад', '3 дня назад'][i % 4] }));

  const [view, setView] = React.useState(state === 'detail' ? 'detail' : 'list');
  const [curId, setCurId] = React.useState(1);
  const [secFilter, setSecFilter] = React.useState('Все');
  const [modal, setModal] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);
  const [picks, setPicks] = React.useState({ [SECTIONS[0]]: true });
  React.useEffect(() => { setView(state === 'detail' ? 'detail' : 'list'); }, [state]);

  const cur = RESUMES.find((r) => r.id === curId) || RESUMES[0];
  const open = (id) => { setCurId(id); setView('detail'); };
  const filtered = secFilter === 'Все' ? RESUMES : RESUMES.filter((r) => r.sec === secFilter);
  const picked = Object.keys(picks).filter((k) => picks[k]);

  // ——— Subscribe bar ———
  const subscribeBar = (
    <div style={{ background: 'var(--brand-green)', color: '#fff', borderRadius: 16, padding: isM ? '20px' : '22px 28px', display: 'flex', flexDirection: isM ? 'column' : 'row', alignItems: isM ? 'stretch' : 'center', gap: 16, marginBottom: 24 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: isM ? 18 : 20, fontWeight: 700 }}>{subscribed ? 'Вы подписаны на новые резюме' : 'Новые резюме — на вашу почту'}</div>
        <div style={{ fontSize: 13.5, opacity: 0.92, marginTop: 4 }}>{subscribed ? `Разделы: ${picked.join(', ') || 'все'}. Изменить можно в письме.` : 'Присылаем свежие резюме по интересным вам разделам и специальностям, по мере пополнения базы.'}</div>
      </div>
      {subscribed ? (
        <DS.Button variant="outline" size="md" onClick={() => setModal(true)} style={{ background: '#fff' }}>Изменить разделы</DS.Button>
      ) : (
        <div style={{ display: 'flex', gap: 10, flexDirection: isM ? 'column' : 'row', minWidth: isM ? 'auto' : 420 }}>
          <div style={{ flex: 1 }}><DS.Input placeholder="you@mail.ru" value="" onChange={() => {}} /></div>
          <DS.Button variant="primary" size="md" onClick={() => setModal(true)}>Подписаться на новые резюме</DS.Button>
        </div>
      )}
    </div>
  );

  // ——— Subscribe modal ———
  const subModal = modal && (
    <div onClick={() => setModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(43,43,43,0.5)', zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, padding: isM ? 22 : 30, width: '100%', maxWidth: 520, maxHeight: '86%', overflow: 'auto', boxShadow: 'var(--shadow-lg)' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px' }}>Что вам интересно?</h2>
        <p style={{ fontSize: 14, color: 'var(--ink-secondary)', margin: '0 0 18px', lineHeight: 1.5 }}>Отметьте разделы или специальности — будем присылать новые резюме только по ним.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
          {SECTIONS.map((s) => (
            <DS.Checkbox key={s} checked={!!picks[s]} onChange={(v) => setPicks({ ...picks, [s]: v })} label={s} />
          ))}
        </div>
        <DS.Input label="Email для уведомлений" placeholder="you@mail.ru" value="" onChange={() => {}} />
        <div style={{ fontSize: 12, color: 'var(--ink-secondary)', margin: '12px 0 16px', lineHeight: 1.45 }}>Нажимая «Подписаться», вы соглашаетесь на обработку данных и получение писем. Отписаться можно в один клик.</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <DS.Button variant="ghost" size="md" onClick={() => setModal(false)}>Отмена</DS.Button>
          <DS.Button variant="primary" size="md" disabled={picked.length === 0} onClick={() => { setSubscribed(true); setModal(false); }}>Подписаться</DS.Button>
        </div>
      </div>
    </div>
  );

  // ——— Resume card ———
  const Card = ({ r }) => (
    <button onClick={() => open(r.id)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', padding: 0, cursor: 'pointer', textAlign: 'left', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)' }}>
      <div style={{ height: 150, overflow: 'hidden', background: 'var(--bg-tint)', display: 'flex', justifyContent: 'center', borderBottom: '1px solid var(--line)' }}>
        <div style={{ width: 620, transform: 'scale(0.27)', transformOrigin: 'top center' }}>{tplFor(r.id)()}</div>
      </div>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)' }}>{r.prof}</div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>{r.city} · опыт {r.exp}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{r.sal}</span>
          <span style={{ fontSize: 11.5, color: 'var(--ink-secondary)' }}>обновлено {r.updated}</span>
        </div>
      </div>
    </button>
  );

  const listMain = (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(auto-fill, minmax(220px, 1fr))', gap: isM ? 12 : 18 }}>
        {filtered.map((r) => <Card key={r.id} r={r} />)}
      </div>
    </div>
  );

  // ——— Sidebar (как в Образцах) ———
  const sidebar = (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-secondary)' }}>Разделы</div>
      <div style={{ maxHeight: isM ? 240 : 560, overflowY: 'auto' }}>
        {['Все', ...SECTIONS].map((s) => {
          const on = secFilter === s;
          const count = s === 'Все' ? RESUMES.length : RESUMES.filter((r) => r.sec === s).length;
          return (
            <button key={s} onClick={() => { setSecFilter(s); setView('list'); }} style={{ width: '100%', textAlign: 'left', padding: '11px 16px', background: on ? 'var(--brand-green-tint)' : 'transparent', border: 'none', borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent', borderBottom: '1px solid var(--line)', cursor: 'pointer', fontSize: 14, fontWeight: on ? 700 : 500, color: on ? '#3F6B22' : 'var(--ink)', fontFamily: 'var(--font-sans)', display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
              <span>{s}</span>
              <span style={{ fontSize: 12, opacity: 0.7 }}>{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ——— Detail resume card ———
  const neighbours = RESUMES.filter((r) => r.sec === cur.sec && r.id !== cur.id).concat(RESUMES.filter((r) => r.sec !== cur.sec)).slice(0, 4);
  const detailMain = (
    <div>
      <button onClick={() => setView('list')} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', fontSize: 13, cursor: 'pointer', padding: 0, marginBottom: 14, fontFamily: 'var(--font-sans)' }}>← {cur.sec}</button>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 320px', gap: 24, alignItems: 'start' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 14 : 24, boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ width: 620 * (isM ? 0.52 : 0.72), height: 876 * (isM ? 0.52 : 0.72), overflow: 'hidden' }}>
            <div style={{ width: 620, transform: isM ? 'scale(0.52)' : 'scale(0.72)', transformOrigin: 'top left' }}>{tplFor(cur.id)()}</div>
          </div>
        </div>
        <div style={{ position: isM ? 'static' : 'sticky', top: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: 22, boxShadow: 'var(--shadow-md)' }}>
            <h1 style={{ fontSize: 21, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{cur.prof}</h1>
            <div style={{ fontSize: 13, color: 'var(--ink-secondary)', marginTop: 4 }}>{cur.sec}</div>
            {[['Город', cur.city], ['Опыт работы', cur.exp], ['Зарплатные ожидания', cur.sal], ['Обновлено', cur.updated]].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '8px 0', fontSize: 13.5, borderTop: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>{k}</span><span style={{ color: 'var(--ink)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
            <DS.Button variant="primary" size="lg" style={{ width: '100%', marginTop: 14 }} onClick={() => go('auth')}>Связаться с кандидатом</DS.Button>
            <div style={{ fontSize: 11.5, color: 'var(--ink-secondary)', textAlign: 'center', marginTop: 8 }}>Контакты откроются после входа работодателя.</div>
          </div>
          <div style={{ background: 'var(--brand-green-tint)', border: '1px solid #C6DF9E', borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: '#3F6B22' }}>Похожие резюме — на почту</div>
            <div style={{ fontSize: 13, color: '#3F6B22', lineHeight: 1.5, margin: '6px 0 12px' }}>Подпишитесь на раздел «{cur.sec}», чтобы получать новые резюме.</div>
            <DS.Button variant="secondary" size="md" onClick={() => { setPicks({ [cur.sec]: true }); setModal(true); }}>Подписаться на раздел</DS.Button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: '0 0 14px' }}>Похожие резюме</h3>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 14 }}>
          {neighbours.map((r) => (
            <button key={r.id} onClick={() => open(r.id)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 14, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{r.prof}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 3 }}>{r.city} · {r.exp}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--brand-green)', marginTop: 8 }}>Смотреть →</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="База резюме" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '28px 40px' }}>
        <div style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: isM ? 24 : 30, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>База резюме</h1>
          <div style={{ fontSize: 14, color: 'var(--ink-secondary)', marginTop: 6 }}>Опубликованные резюме кандидатов. Подпишитесь — и новые резюме будут приходить на почту.</div>
        </div>
        {view === 'list' && subscribeBar}
        {view === 'detail' ? detailMain : (
          <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '260px 1fr', gap: 24, alignItems: 'start' }}>
            {sidebar}
            <div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', marginBottom: 6 }}>{secFilter === 'Все' ? 'Все разделы' : secFilter}</div>
              <h2 style={{ fontSize: isM ? 20 : 24, fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px' }}>{secFilter === 'Все' ? 'Все резюме' : secFilter}</h2>
              <div style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 20 }}>{filtered.length} опубликованных резюме.</div>
              {listMain}
            </div>
          </div>
        )}
      </div>
      {subModal}
      <Footer device={device} />
    </div>
  );
}

window.SITE.ResumeBase = ResumeBase;
