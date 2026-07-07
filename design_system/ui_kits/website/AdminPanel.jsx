// Screen — Кабинет администратора. Слева навигация по разделам, справа рабочая область.
// Разделы: Промокоды (генерация + таблица), управление контентом страниц
// (Образцы, Шаблоны, База резюме, Статьи, FAQ) с поиском, CRUD, импортом/экспортом,
// и Служебные страницы (редактор статичного контента).
function AdminPanel({ device = 'desktop', state = 'promo', go }) {
  const DS = window.DS;
  const isM = device === 'mobile';

  const NAV = [
    { id: 'promo', label: 'Промокоды', icon: 'ticket' },
    { id: 'examples', label: 'Образцы', icon: 'grid', kind: 'data' },
    { id: 'templates', label: 'Шаблоны', icon: 'layout', kind: 'data' },
    { id: 'base', label: 'База резюме', icon: 'users', kind: 'data' },
    { id: 'articles', label: 'Статьи', icon: 'doc', kind: 'data' },
    { id: 'faq', label: 'FAQ', icon: 'help', kind: 'data' },
    { id: 'pages', label: 'Служебные страницы', icon: 'file', kind: 'pages' },
  ];

  const [section, setSection] = React.useState(state === 'content' ? 'examples' : 'promo');
  React.useEffect(() => { setSection(state === 'content' ? 'examples' : 'promo'); }, [state]);

  const cur = NAV.find((n) => n.id === section) || NAV[0];

  // ——— icons ———
  const NIcon = ({ name, color }) => {
    const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    switch (name) {
      case 'ticket': return <svg {...p}><path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z" /><path d="M13 6v12" strokeDasharray="2 2" /></svg>;
      case 'grid': return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
      case 'layout': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
      case 'users': return <svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5" /><path d="M17 8.2a3.3 3.3 0 010 6.3M21.5 20c0-2.5-1.3-4.2-3.5-5" /></svg>;
      case 'doc': return <svg {...p}><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v4h4M9 13h6M9 17h6" /></svg>;
      case 'help': return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 013.9-2c1 .6 1.3 1.9.6 2.9-.4.6-1 .9-1.5 1.3-.5.4-.5.9-.5 1.3" /><circle cx="12" cy="16.5" r="0.6" fill={color} stroke="none" /></svg>;
      case 'file': return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>;
      default: return null;
    }
  };
  const ActIcon = ({ name }) => {
    const p = { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (name === 'edit') return <svg {...p}><path d="M4 20h4L18.5 9.5a2.1 2.1 0 00-3-3L5 17v3z" /><path d="M13.5 6.5l3 3" /></svg>;
    if (name === 'del') return <svg {...p}><path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13" /></svg>;
    if (name === 'up') return <svg {...p}><path d="M12 15V4M7 9l5-5 5 5M5 20h14" /></svg>;
    if (name === 'down') return <svg {...p}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>;
    if (name === 'search') return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>;
    if (name === 'plus') return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
    return null;
  };

  // ——— shared sub-components ———
  const [toast, setToast] = React.useState('');
  const fire = (msg) => { setToast(msg); };
  const Toast = () => toast ? (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--brand-green-tint)', border: '1px solid #C6DF9E', borderRadius: 10, padding: '12px 16px', marginBottom: 20 }}>
      <span style={{ fontSize: 18 }}>👍</span>
      <span style={{ flex: 1, fontSize: 14.5, color: '#3F6B22' }}><b>Успешно!</b> {toast}</span>
      <button onClick={() => setToast('')} style={{ background: 'none', border: 'none', color: '#3F6B22', fontSize: 18, cursor: 'pointer', lineHeight: 1 }}>✕</button>
    </div>
  ) : null;

  const Th = ({ children, w }) => <th style={{ textAlign: 'left', padding: isM ? '10px 8px' : '11px 14px', fontSize: isM ? 11 : 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--ink-secondary)', borderBottom: '1px solid var(--line)', width: w }}>{children}</th>;
  const Td = ({ children, muted }) => <td style={{ padding: isM ? '11px 8px' : '12px 14px', fontSize: isM ? 13 : 14, color: muted ? 'var(--ink-secondary)' : 'var(--ink)', borderBottom: '1px solid var(--line)', verticalAlign: 'middle' }}>{children}</td>;
  const RowActions = ({ onEdit, onDel }) => (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
      <button onClick={onEdit} title="Редактировать" style={{ width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid var(--line)', background: '#fff', color: 'var(--ink-secondary)', cursor: 'pointer' }}><ActIcon name="edit" /></button>
      <button onClick={onDel} title="Удалить" style={{ width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid #F0C8B8', background: '#fff', color: '#B4451E', cursor: 'pointer' }}><ActIcon name="del" /></button>
    </div>
  );

  // ===================== ПРОМОКОДЫ =====================
  const [codes, setCodes] = React.useState([
    { code: 'Free1', left: 1, until: '2026-12-31' },
    { code: 'START50', left: 120, until: '2026-09-30' },
    { code: 'SUMMER', left: 0, until: '2026-06-30' },
  ]);
  const [pForm, setPForm] = React.useState({ uses: '', until: '', code: '' });
  const genCode = () => Math.random().toString(36).slice(2, 8).toUpperCase();
  const addCode = () => {
    const c = { code: pForm.code || genCode(), left: parseInt(pForm.uses || '1', 10), until: pForm.until || '2026-12-31' };
    setCodes([c, ...codes]);
    setPForm({ uses: '', until: '', code: '' });
    fire('Промокод добавлен!');
  };

  const promoSection = (
    <div>
      <Toast />
      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: isM ? 16 : 22, boxShadow: 'var(--shadow-sm)', marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 14 }}>Создать промокод</div>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr 1fr auto', gap: 12, alignItems: 'end' }}>
          <div><label style={lbl}>Кол-во использований</label><input type="number" value={pForm.uses} onChange={(e) => setPForm({ ...pForm, uses: e.target.value })} placeholder="напр. 100" style={inp} /></div>
          <div><label style={lbl}>Дата окончания</label><input value={pForm.until} onChange={(e) => setPForm({ ...pForm, until: e.target.value })} placeholder="ДД.ММ.ГГГГ" style={inp} /></div>
          <div><label style={lbl}>Код (пусто — сгенерируется)</label><input value={pForm.code} onChange={(e) => setPForm({ ...pForm, code: e.target.value })} placeholder="Код" style={inp} /></div>
          <button onClick={addCode} style={{ ...primaryBtn, background: 'var(--brand-blue-deep, #2C7BB6)' }}>Сгенерировать</button>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Активные промокоды</span>
          <span style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>{codes.length} шт.</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: isM ? 0 : 440 }}>
            <thead><tr><Th>{isM ? 'Код' : 'Code'}</Th><Th>{isM ? 'Осталось' : 'Осталось использований'}</Th><Th>{isM ? 'До' : 'Годен до'}</Th><Th w={isM ? '68px' : '90px'}> </Th></tr></thead>
            <tbody>
              {codes.map((c, i) => (
                <tr key={i}>
                  <Td><span style={{ fontFamily: 'var(--font-mono, monospace)', fontWeight: 700 }}>{c.code}</span></Td>
                  <Td><span style={{ color: c.left === 0 ? '#B4451E' : 'var(--ink)', fontWeight: 600 }}>{c.left}</span>{c.left === 0 && !isM && <span style={{ fontSize: 11.5, color: '#B4451E', marginLeft: 8 }}>исчерпан</span>}</Td>
                  <Td muted>{isM ? c.until : c.until + ' 00:00:00'}</Td>
                  <Td><RowActions onEdit={() => fire('Открыто редактирование ' + c.code)} onDel={() => { setCodes(codes.filter((_, j) => j !== i)); fire('Промокод удалён'); }} /></Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // ===================== ГЕНЕРИЧЕСКИЙ РАЗДЕЛ КОНТЕНТА =====================
  const DATASETS = {
    examples: { title: 'Образцы резюме', unit: 'образец', cols: ['Профессия', 'Раздел', 'Подраздел', 'Шаблон'], rows: [
      ['Менеджер по продажам', 'Продажи и клиенты', 'Менеджеры', '«Чистый»'],
      ['Frontend-разработчик', 'IT и разработка', 'Разработка', '«Компакт»'],
      ['Повар', 'Общественное питание', 'Кухня', '«Одна колонка»'],
      ['Интернет-маркетолог', 'Маркетинг и реклама', 'Digital', '«Акцент»'],
      ['Офис-менеджер', 'Административный персонал', 'Офис', '«Академический»'],
    ] },
    templates: { title: 'Шаблоны резюме', unit: 'шаблон', cols: ['Название', 'Тип', 'Цвета акцента', 'Статус'], rows: [
      ['«Старт»', 'Бесплатный', '—', 'Опубликован'],
      ['«Старт+фото»', 'Бесплатный', '—', 'Опубликован'],
      ['«Чистый»', 'AI · 99 ₽', 'Синий, Бирюза, Графит', 'Опубликован'],
      ['«Компакт»', 'AI · 99 ₽', 'Бирюза, Синий, Графит', 'Опубликован'],
      ['«Академический»', 'AI · 99 ₽', '—', 'Черновик'],
    ] },
    base: { title: 'База резюме', unit: 'резюме', cols: ['Профессия', 'Раздел', 'Город', 'Опубликовано'], rows: [
      ['Менеджер по продажам', 'Продажи и клиенты', 'Москва', 'да'],
      ['Frontend-разработчик', 'IT и разработка', 'Санкт-Петербург', 'да'],
      ['Аналитик данных', 'IT и разработка', 'Казань', 'да'],
      ['SMM-специалист', 'Маркетинг и реклама', 'Новосибирск', 'на модерации'],
      ['Водитель категории C', 'Транспорт и логистика', 'Екатеринбург', 'скрыто'],
    ] },
    articles: { title: 'Статьи', unit: 'статья', cols: ['Заголовок', 'Категория', 'Дата', 'Статус'], rows: [
      ['Как описать опыт работы', 'Составление резюме', '02.07.2026', 'Опубликована'],
      ['15 сайтов для поиска работы', 'Поиск работы', '28.06.2026', 'Опубликована'],
      ['Вопросы на собеседовании', 'Собеседование', '24.06.2026', 'Опубликована'],
      ['Сопроводительное письмо', 'Составление резюме', '19.06.2026', 'Черновик'],
      ['Как просить о повышении', 'Карьера', '12.06.2026', 'Опубликована'],
    ] },
    faq: { title: 'FAQ', unit: 'вопрос', cols: ['Вопрос', 'Категория', 'Порядок'], rows: [
      ['Резюме можно сделать бесплатно?', 'О сервисе', '1'],
      ['Нужно ли регистрироваться?', 'О сервисе', '2'],
      ['За что платить 99 ₽?', 'Оплата и AI-версия', '3'],
      ['В каком формате скачивается?', 'Форматы', '4'],
      ['Что такое База резюме?', 'Публикация', '5'],
    ] },
  };

  const [store, setStore] = React.useState(() => {
    const o = {}; Object.keys(DATASETS).forEach((k) => o[k] = DATASETS[k].rows.map((r, i) => ({ id: i, cells: r }))); return o;
  });

  // SEO мета-данные страниц разделов
  const SEO_DEFAULTS = {
    examples: { title: 'Образцы резюме — 500+ профессий | Резюме Онлайн', desc: 'Готовые образцы резюме по 500+ профессиям. Выберите свою и создайте резюме бесплатно за 10 минут.' },
    templates: { title: 'Шаблоны резюме | Резюме Онлайн', desc: 'Современные шаблоны резюме: бесплатные и премиальные. Выберите оформление и цвет акцента.' },
    base: { title: 'База резюме — кандидаты | Резюме Онлайн', desc: 'Открытая база резюме кандидатов. Найдите сотрудника или подпишитесь на новые резюме по разделам.' },
    articles: { title: 'Статьи и советы | Резюме Онлайн', desc: 'Как составить резюме, пройти собеседование и найти работу — коротко и по делу.' },
    faq: { title: 'Частые вопросы (FAQ) | Резюме Онлайн', desc: 'Ответы на частые вопросы о сервисе, оплате, форматах и приватности.' },
  };
  const [seo, setSeo] = React.useState(() => ({ ...JSON.parse(JSON.stringify(SEO_DEFAULTS)) }));
  const setSeoField = (id, k, v) => setSeo((s) => ({ ...s, [id]: { ...s[id], [k]: v } }));

  const SeoEditor = ({ id }) => {
    const v = seo[id] || { title: '', desc: '' };
    return (
      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', padding: isM ? 16 : 20, marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--brand-green)', background: 'var(--brand-green-tint)', padding: '3px 9px', borderRadius: 6, letterSpacing: '0.03em' }}>SEO</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Мета-данные страницы раздела</span>
        </div>
        <label style={lbl}>&lt;title&gt; — заголовок вкладки</label>
        <input value={v.title} onChange={(e) => setSeoField(id, 'title', e.target.value)} maxLength={70} style={{ ...inp, marginBottom: 4 }} />
        <div style={{ fontSize: 11.5, color: v.title.length > 60 ? '#8A5A0E' : 'var(--ink-secondary)', marginBottom: 12 }}>{v.title.length}/70 символов · оптимально до 60</div>
        <label style={lbl}>meta description</label>
        <textarea value={v.desc} onChange={(e) => setSeoField(id, 'desc', e.target.value)} maxLength={180} style={{ ...inp, minHeight: 68, resize: 'vertical', marginBottom: 4 }} />
        <div style={{ fontSize: 11.5, color: v.desc.length > 160 ? '#8A5A0E' : 'var(--ink-secondary)' }}>{v.desc.length}/180 символов · оптимально 150–160</div>
        <div style={{ marginTop: 14 }}><button onClick={() => fire('SEO-метаданные раздела сохранены')} style={primaryBtn}>Сохранить SEO</button></div>
      </div>
    );
  };
  const [q, setQ] = React.useState('');
  React.useEffect(() => { setQ(''); setToast(''); }, [section]);

  const DataSection = ({ id }) => {
    const meta = DATASETS[id];
    const rows = store[id] || [];
    const ql = q.trim().toLowerCase();
    const shown = ql ? rows.filter((r) => r.cells.join(' ').toLowerCase().includes(ql)) : rows;
    const del = (rid) => { setStore({ ...store, [id]: rows.filter((r) => r.id !== rid) }); fire(cap(meta.unit) + ' удалён'); };
    return (
      <div>
        <Toast />
        <SeoEditor id={id} />
        {/* Toolbar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 16 }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-secondary)', display: 'flex' }}><ActIcon name="search" /></span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={'Быстрый поиск по «' + meta.title + '»…'} style={{ ...inp, paddingLeft: 36 }} />
          </div>
          <button onClick={() => fire('Импорт: выберите CSV/XLSX-файл для массовой загрузки')} style={ghostBtn}><ActIcon name="up" /> Импорт</button>
          <button onClick={() => fire('Экспорт: выгружено ' + rows.length + ' записей в CSV')} style={ghostBtn}><ActIcon name="down" /> Экспорт</button>
          <button onClick={() => { const nid = Math.max(0, ...rows.map((r) => r.id)) + 1; setStore({ ...store, [id]: [{ id: nid, cells: meta.cols.map(() => '—') }, ...rows] }); fire('Добавлена новая запись — заполните поля'); }} style={primaryBtn}><ActIcon name="plus" /> Добавить</button>
        </div>

        {/* Bulk hint */}
        <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', marginBottom: 14 }}>Массовая загрузка: «Импорт» принимает CSV/XLSX, «Экспорт» выгружает текущий список для правок и обратной загрузки.</div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 18px', borderBottom: '1px solid var(--line)' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{meta.title}</span>
            <span style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>{ql ? shown.length + ' из ' + rows.length : rows.length + ' записей'}</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead><tr>{meta.cols.map((c) => <Th key={c}>{c}</Th>)}<Th w="90px"> </Th></tr></thead>
              <tbody>
                {shown.map((r) => (
                  <tr key={r.id}>
                    {r.cells.map((cell, ci) => <Td key={ci} muted={ci > 0}>{ci === 0 ? <b style={{ fontWeight: 600 }}>{cell}</b> : renderCell(cell)}</Td>)}
                    <Td><RowActions onEdit={() => fire('Открыто редактирование записи')} onDel={() => del(r.id)} /></Td>
                  </tr>
                ))}
                {shown.length === 0 && <tr><td colSpan={meta.cols.length + 1} style={{ padding: '28px 14px', textAlign: 'center', fontSize: 14, color: 'var(--ink-secondary)' }}>Ничего не найдено по запросу «{q}».</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // ===================== СЛУЖЕБНЫЕ СТРАНИЦЫ =====================
  const PAGES = [
    { t: 'О сервисе', slug: '/about', upd: '01.07.2026', seoTitle: 'О сервисе Резюме Онлайн | Как мы работаем', seoDesc: 'Конструктор резюме Резюме Онлайн: бесплатное создание резюме и AI-улучшения за 99 ₽.' },
    { t: 'Политика конфиденциальности', slug: '/privacy', upd: '15.05.2026', seoTitle: 'Политика конфиденциальности | Резюме Онлайн', seoDesc: 'Как мы обрабатываем и защищаем ваши персональные данные.' },
    { t: 'Пользовательское соглашение', slug: '/terms', upd: '15.05.2026', seoTitle: 'Пользовательское соглашение | Резюме Онлайн', seoDesc: 'Условия использования сервиса Резюме Онлайн.' },
    { t: 'Оплата и возврат', slug: '/payment-info', upd: '20.06.2026', seoTitle: 'Оплата и возврат | Резюме Онлайн', seoDesc: 'Способы оплаты, стоимость AI-версии и условия возврата средств.' },
    { t: 'Контакты', slug: '/contacts', upd: '02.07.2026', seoTitle: 'Контакты и поддержка | Резюме Онлайн', seoDesc: 'Свяжитесь с нами: почта, Telegram-бот и форма обратной связи.' },
  ];
  const [curPage, setCurPage] = React.useState(0);
  const pagesSection = (
    <div>
      <Toast />
      <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '260px 1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          {PAGES.map((p, i) => {
            const on = curPage === i;
            return (
              <button key={i} onClick={() => setCurPage(i)} style={{ width: '100%', textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid var(--line)', borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent', background: on ? 'var(--brand-green-tint)' : '#fff', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
                <div style={{ fontSize: 14, fontWeight: on ? 700 : 500, color: on ? '#3F6B22' : 'var(--ink)' }}>{p.t}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 2 }}>{p.slug} · изм. {p.upd}</div>
              </button>
            );
          })}
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: isM ? 16 : 22, boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{PAGES[curPage].t}</div>
            <span style={{ fontSize: 12, fontFamily: 'var(--font-mono, monospace)', color: 'var(--ink-secondary)', background: 'var(--surface-sunken)', padding: '3px 8px', borderRadius: 6 }}>{PAGES[curPage].slug}</span>
          </div>
          <label style={lbl}>Заголовок страницы (H1)</label>
          <input defaultValue={PAGES[curPage].t} key={'t' + curPage} style={{ ...inp, marginBottom: 18 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingTop: 4, borderTop: '1px solid var(--line)' }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--brand-green)', background: 'var(--brand-green-tint)', padding: '3px 9px', borderRadius: 6, letterSpacing: '0.03em', marginTop: 12 }}>SEO</span>
            <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', marginTop: 12 }}>Мета-данные</span>
          </div>
          <label style={lbl}>&lt;title&gt; — заголовок вкладки</label>
          <input defaultValue={PAGES[curPage].seoTitle} key={'st' + curPage} maxLength={70} style={{ ...inp, marginBottom: 14 }} />
          <label style={lbl}>meta description</label>
          <textarea defaultValue={PAGES[curPage].seoDesc} key={'sd' + curPage} maxLength={180} style={{ ...inp, minHeight: 64, resize: 'vertical', marginBottom: 18 }} />

          <label style={lbl}>Содержимое (HTML)</label>
          <textarea key={'b' + curPage} defaultValue={'<h2>' + PAGES[curPage].t + '</h2>\n<p>Отредактируйте текст этой служебной страницы. Поддерживается разметка HTML.</p>'} style={{ ...inp, minHeight: 200, resize: 'vertical', fontFamily: 'var(--font-mono, monospace)', fontSize: 13.5, lineHeight: 1.5 }} />
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <button onClick={() => fire('Страница «' + PAGES[curPage].t + '» сохранена')} style={primaryBtn}>Сохранить</button>
            <button style={ghostBtn}>Предпросмотр</button>
          </div>
        </div>
      </div>
    </div>
  );

  // ——— layout ———
  const sideNav = (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--line)', fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-secondary)' }}>Управление</div>
      {NAV.map((n) => {
        const on = section === n.id;
        return (
          <button key={n.id} onClick={() => setSection(n.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 11, padding: '11px 16px', background: on ? 'var(--brand-green-tint)' : 'transparent', border: 'none', borderLeft: on ? '3px solid var(--brand-green)' : '3px solid transparent', borderBottom: '1px solid var(--line)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)' }}>
            <span style={{ color: on ? 'var(--brand-green)' : 'var(--ink-secondary)', display: 'flex' }}><NIcon name={n.icon} color={on ? 'var(--brand-green)' : 'var(--ink-secondary)'} /></span>
            <span style={{ fontSize: 14, fontWeight: on ? 700 : 500, color: on ? '#3F6B22' : 'var(--ink)' }}>{n.label}</span>
          </button>
        );
      })}
    </div>
  );

  const body = section === 'promo' ? promoSection
    : section === 'pages' ? pagesSection
    : <DataSection id={section} />;

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Admin top bar */}
      <div style={{ background: 'var(--ink)', color: '#fff', padding: isM ? '12px 16px' : '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: 18, fontWeight: 700 }}>Резюме Онлайн</span>
          <span style={{ fontSize: 12, fontWeight: 700, background: 'var(--brand-green)', color: '#fff', padding: '3px 10px', borderRadius: 999 }}>ADMIN</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {!isM && <span style={{ fontSize: 13, opacity: 0.8 }}>admin@rezyume-online.ru</span>}
          <button onClick={() => go('landing')} style={{ background: 'rgba(255,255,255,0.14)', border: 'none', color: '#fff', fontSize: 13, fontWeight: 600, padding: '7px 14px', borderRadius: 8, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Выйти</button>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '26px 32px' }}>
        <div style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: isM ? 22 : 28, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Кабинет администратора</h1>
          <div style={{ fontSize: 14, color: 'var(--ink-secondary)', marginTop: 6 }}>Промокоды и управление контентом всех разделов сайта.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '240px 1fr', gap: 24, alignItems: 'start' }}>
          {sideNav}
          <div style={{ minWidth: 0 }}>
            <h2 style={{ fontSize: isM ? 20 : 23, fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px' }}>{cur.label}</h2>
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}

// shared styles
const lbl = { display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-secondary)', marginBottom: 5 };
const inp = { width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink)', border: '1px solid var(--line)', borderRadius: 8, padding: '10px 13px', outline: 'none', background: '#fff' };
const primaryBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--brand-green)', border: 'none', color: '#fff', fontSize: 13.5, fontWeight: 700, padding: '10px 16px', borderRadius: 9, cursor: 'pointer', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' };
const ghostBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: 13.5, fontWeight: 600, padding: '10px 14px', borderRadius: 9, cursor: 'pointer', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' };

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function renderCell(v) {
  const tone = { 'Опубликован': 'ok', 'Опубликована': 'ok', 'да': 'ok', 'Черновик': 'warn', 'на модерации': 'warn', 'скрыто': 'muted' }[v];
  if (tone) {
    const c = { ok: ['#3F6B22', 'var(--brand-green-tint)'], warn: ['#8A5A0E', '#FDF0DA'], muted: ['var(--ink-secondary)', 'var(--surface-sunken)'] }[tone];
    return <span style={{ fontSize: 12.5, fontWeight: 700, color: c[0], background: c[1], padding: '3px 10px', borderRadius: 999 }}>{v}</span>;
  }
  return v;
}

window.SITE.AdminPanel = AdminPanel;
