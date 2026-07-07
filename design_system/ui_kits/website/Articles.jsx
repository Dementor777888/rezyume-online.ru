// Screen — Статьи. Раздел с блогом: лента статей + детальная страница статьи,
// демонстрирующая все форматы контента и способы выделения.
function Articles({ device = 'desktop', state = 'list', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';

  const CATS = ['Все', 'Составление резюме', 'Поиск работы', 'Собеседование', 'Карьера'];
  const ARTS = [
    { id: 0, cat: 'Составление резюме', t: 'Как описать опыт работы, чтобы вас позвали на собеседование', d: 'Разбираем формулу «действие → результат → цифра» и типичные ошибки в разделе «Опыт».', read: 7, date: '2 июля 2026', feat: true },
    { id: 1, cat: 'Поиск работы', t: '15 сайтов и каналов для поиска работы в 2026 году', d: 'Где действительно есть свежие вакансии и как не утонуть в откликах.', read: 9, date: '28 июня 2026' },
    { id: 2, cat: 'Собеседование', t: 'Вопросы на собеседовании: к чему готовиться и что отвечать', d: 'Список частых вопросов и структура сильного ответа.', read: 6, date: '24 июня 2026' },
    { id: 3, cat: 'Составление резюме', t: 'Сопроводительное письмо: шаблон и примеры', d: 'Из чего состоит письмо и как адаптировать его под вакансию.', read: 5, date: '19 июня 2026' },
    { id: 4, cat: 'Карьера', t: 'Как просить о повышении зарплаты', d: 'Аргументы, тайминг и подготовка к разговору с руководителем.', read: 8, date: '12 июня 2026' },
    { id: 5, cat: 'Поиск работы', t: 'Резюме без опыта работы: что писать студенту', d: 'Образование, стажировки, проекты и навыки вместо пустого раздела опыта.', read: 6, date: '5 июня 2026' },
  ];

  const [view, setView] = React.useState(state === 'article' ? 'article' : 'list');
  const [curId, setCurId] = React.useState(0);
  const [cat, setCat] = React.useState('Все');
  React.useEffect(() => { setView(state === 'article' ? 'article' : 'list'); }, [state]);

  const cur = ARTS.find((a) => a.id === curId) || ARTS[0];
  const openArt = (id) => { setCurId(id); setView('article'); };
  const catColor = { 'Составление резюме': 'brand', 'Поиск работы': 'action', 'Собеседование': 'paid', 'Карьера': 'neutral' };

  const Cover = ({ h, label }) => (
    <div style={{ height: h, borderRadius: 12, overflow: 'hidden', background: 'var(--brand-green-tint)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}><defs><pattern id="dg" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="14" stroke="#C6DF9E" strokeWidth="6" /></pattern></defs><rect width="100%" height="100%" fill="url(#dg)" /></svg>
      <span style={{ position: 'relative', fontFamily: 'var(--font-mono, monospace)', fontSize: 12, color: '#3F6B22', background: 'rgba(255,255,255,0.7)', padding: '4px 10px', borderRadius: 6 }}>{label}</span>
    </div>
  );

  // ——— List ———
  const catChip = (c) => <DS.Badge tone={catColor[c] || 'neutral'}>{c}</DS.Badge>;
  const filtered = cat === 'Все' ? ARTS : ARTS.filter((a) => a.cat === cat);
  const feat = ARTS.find((a) => a.feat);

  const ArtCard = ({ a }) => (
    <button onClick={() => openArt(a.id)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', overflow: 'hidden', cursor: 'pointer', textAlign: 'left', padding: 0, display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)' }}>
      <div style={{ padding: 12 }}><Cover h={130} label="обложка статьи" /></div>
      <div style={{ padding: '4px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div>{catChip(a.cat)}</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{a.t}</div>
        <div style={{ fontSize: 13, color: 'var(--ink-secondary)', lineHeight: 1.45, flex: 1 }}>{a.d}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 2 }}>{a.date} · {a.read} мин чтения</div>
      </div>
    </button>
  );

  const listMain = (
    <div>
      {feat && cat === 'Все' && (
        <button onClick={() => openArt(feat.id)} style={{ width: '100%', background: '#fff', border: '1px solid var(--line)', borderRadius: 16, boxShadow: 'var(--shadow-md)', overflow: 'hidden', cursor: 'pointer', textAlign: 'left', padding: 0, display: 'grid', gridTemplateColumns: isM ? '1fr' : '1.1fr 1fr', marginBottom: 24, fontFamily: 'var(--font-sans)' }}>
          <div style={{ padding: 16 }}><Cover h={isM ? 160 : 240} label="обложка · главная статья" /></div>
          <div style={{ padding: isM ? '0 20px 20px' : '32px 32px 32px 8px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{catChip(feat.cat)}<span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Главное</span></div>
            <div style={{ fontSize: isM ? 22 : 27, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>{feat.t}</div>
            <div style={{ fontSize: 14.5, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>{feat.d}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>{feat.date} · {feat.read} мин чтения</div>
          </div>
        </button>
      )}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {CATS.map((c) => {
          const on = cat === c;
          return <button key={c} onClick={() => setCat(c)} style={{ fontSize: 13, fontWeight: 700, color: on ? '#fff' : 'var(--ink-secondary)', background: on ? 'var(--brand-green)' : '#fff', border: '1px solid ' + (on ? 'var(--brand-green)' : 'var(--line)'), borderRadius: 999, padding: '8px 16px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{c}</button>;
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: isM ? 14 : 20 }}>
        {filtered.filter((a) => !(a.feat && cat === 'Все')).map((a) => <ArtCard key={a.id} a={a} />)}
      </div>
    </div>
  );

  // ——— Article detail — все форматы контента ———
  const H2 = ({ children }) => <h2 style={{ fontSize: isM ? 21 : 25, fontWeight: 700, color: 'var(--ink)', margin: '34px 0 12px', lineHeight: 1.2, scrollMarginTop: 20 }}>{children}</h2>;
  const H3 = ({ children }) => <h3 style={{ fontSize: 17.5, fontWeight: 700, color: 'var(--ink)', margin: '24px 0 8px' }}>{children}</h3>;
  const P = ({ children }) => <p style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.7, margin: '0 0 14px' }}>{children}</p>;
  const L = ({ children }) => <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--brand-green)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>{children}</a>;
  const Code = ({ children }) => <code style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 13.5, background: 'var(--surface-sunken)', border: '1px solid var(--line)', borderRadius: 5, padding: '1px 6px' }}>{children}</code>;
  const Mark = ({ children }) => <span style={{ background: 'var(--brand-yellow)', borderRadius: 3, padding: '0 3px', boxDecorationBreak: 'clone' }}>{children}</span>;

  const Callout = ({ tone, title, children }) => {
    const map = { info: { bg: 'var(--brand-green-tint)', bd: '#C6DF9E', fg: '#3F6B22', icon: 'i' }, warn: { bg: '#FDF0DA', bd: '#EBD9B4', fg: '#8A5A0E', icon: '!' }, tip: { bg: 'var(--brand-blue-tint)', bd: '#B7D3E3', fg: 'var(--brand-blue-deep)', icon: '★' } };
    const c = map[tone];
    return (
      <div style={{ display: 'flex', gap: 12, background: c.bg, border: '1px solid ' + c.bd, borderRadius: 12, padding: '14px 16px', margin: '18px 0' }}>
        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#fff', color: c.fg, fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: c.fg, marginBottom: 3 }}>{title}</div>
          <div style={{ fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.55 }}>{children}</div>
        </div>
      </div>
    );
  };

  const relatedList = ARTS.filter((a) => a.id !== cur.id && a.cat === cur.cat).concat(ARTS.filter((a) => a.cat !== cur.cat)).slice(0, 3);

  const articleMain = (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <button onClick={() => setView('list')} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', fontSize: 13, cursor: 'pointer', padding: 0, marginBottom: 14, fontFamily: 'var(--font-sans)' }}>← Все статьи</button>
      <div style={{ marginBottom: 10 }}>{catChip(cur.cat)}</div>
      <h1 style={{ fontSize: isM ? 27 : 36, fontWeight: 700, color: 'var(--ink)', margin: '0 0 12px', lineHeight: 1.15, letterSpacing: '-0.01em', textWrap: 'balance' }}>{cur.t}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-secondary)', marginBottom: 18 }}>
        <img src="../../assets/hero-portrait.png" alt="" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' }} />
        <span>Редакция «Резюме Онлайн»</span><span>·</span><span>{cur.date}</span><span>·</span><span>{cur.read} мин</span>
      </div>
      <Cover h={isM ? 180 : 300} label="иллюстрация к статье" />

      <div style={{ marginTop: 24 }}>
        <p style={{ fontSize: 18.5, color: 'var(--ink)', lineHeight: 1.6, fontWeight: 500, margin: '0 0 20px' }}>{cur.d} Ниже — пошаговый разбор с примерами формулировок, которые действительно работают.</p>

        <H2>С чего начать</H2>
        <P>Хорошее резюме отвечает на один вопрос работодателя: <Mark>«чем вы будете полезны»</Mark>. Поэтому вместо перечисления обязанностей показывайте результат. Формулу можно записать так: <Code>действие → результат → цифра</Code>.</P>
        <P>Если у вас нет точных цифр, используйте масштаб: размер команды, бюджет, частоту задач. Подробнее об этом — в статье <L>«Резюме без опыта работы»</L>.</P>

        <Callout tone="tip" title="Совет">Начните раздел «Опыт» с самого сильного достижения — его прочитают первым, даже если пролистают остальное.</Callout>

        <H2>Структура сильного пункта</H2>
        <H3>Что включить</H3>
        <ul style={{ margin: '0 0 14px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>Глагол действия: <i>запустил</i>, <i>сократил</i>, <i>внедрил</i>.</li>
          <li style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>Результат в понятных единицах.</li>
          <li style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>Контекст: за какой срок и какими силами.</li>
        </ul>
        <H3>В каком порядке</H3>
        <ol style={{ margin: '0 0 14px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>Сначала — результат, потом детали.</li>
          <li style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>От недавнего опыта к более раннему.</li>
          <li style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.6 }}>Не больше 4–6 пунктов на одно место работы.</li>
        </ol>

        <blockquote style={{ margin: '22px 0', padding: '4px 0 4px 20px', borderLeft: '4px solid var(--brand-green)', fontSize: isM ? 18 : 20, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.5 }}>
          «Рекрутер смотрит резюме в среднем 7 секунд. Всё важное должно попасть в первый экран».
          <cite style={{ display: 'block', fontStyle: 'normal', fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 8 }}>— из исследования рынка труда, 2025</cite>
        </blockquote>

        <H2>Сравнение формулировок</H2>
        <div style={{ overflowX: 'auto', margin: '0 0 16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5, minWidth: 460 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 12px', background: 'var(--surface-sunken)', borderBottom: '2px solid var(--line)', fontWeight: 700, color: 'var(--ink)' }}>Слабо</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', background: 'var(--brand-green-tint)', borderBottom: '2px solid var(--line)', fontWeight: 700, color: '#3F6B22' }}>Сильно</th>
              </tr>
            </thead>
            <tbody>
              {[['Занимался рекламой', 'Запустил кампании, снизил CPL на 27%'], ['Работал с клиентами', 'Вёл 40+ клиентов, удержание — 92%'], ['Отвечал за соцсети', 'Вырастил аудиторию с 2к до 18к за год']].map((r, i) => (
                <tr key={i}>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)', color: 'var(--ink-secondary)' }}>{r[0]}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line)', color: 'var(--ink)', fontWeight: 600 }}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout tone="warn" title="Частая ошибка">Не пишите обязанности из должностной инструкции — их и так все знают. Работодателю интересно, что изменилось благодаря вам.</Callout>

        <Callout tone="info" title="Коротко">Действие + результат + цифра. Сильное достижение — первым. Не больше 6 пунктов на место работы.</Callout>

        <P>Готовы применить? Сервис подскажет формулировки прямо во время заполнения — <L>откройте конструктор</L> и попробуйте.</P>
        <DS.Button variant="primary" size="lg" style={{ marginTop: 8 }} onClick={() => go('constructor')}>Создать резюме бесплатно</DS.Button>
      </div>

      <div style={{ marginTop: 40, borderTop: '1px solid var(--line)', paddingTop: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px' }}>Читайте также</h3>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr 1fr', gap: 16 }}>
          {relatedList.map((a) => (
            <button key={a.id} onClick={() => openArt(a.id)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 14, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div>{catChip(a.cat)}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{a.t}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-secondary)' }}>{a.read} мин</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Статьи" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '28px 40px' }}>
        {view === 'article' ? articleMain : (
          <div>
            <div style={{ marginBottom: 18 }}>
              <h1 style={{ fontSize: isM ? 24 : 30, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Статьи и советы</h1>
              <div style={{ fontSize: 14, color: 'var(--ink-secondary)', marginTop: 6 }}>Как составить резюме, пройти собеседование и найти работу — коротко и по делу.</div>
            </div>
            {listMain}
          </div>
        )}
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Articles = Articles;
