// Screen — FAQ. Общие вопросы и ответы по сервису (помимо тех, что встроены в отдельные страницы).
// Категории + аккордеон + поиск + переход в Поддержку.
function Faq({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';

  const GROUPS = [
    { id: 'service', name: 'О сервисе', qa: [
      { q: 'Резюме действительно можно сделать бесплатно?', a: 'Да. Заполнение по шагам, два шаблона («Старт» и «Старт+фото») и скачивание в PDF — бесплатно и без ограничений по количеству резюме.' },
      { q: 'Нужно ли регистрироваться?', a: 'Чтобы начать — нет. Кабинет с сохранением резюме создаётся автоматически при первом сохранении: пароль придёт на указанную почту.' },
      { q: 'Сколько времени занимает составление?', a: 'Обычно 10–15 минут. Можно рассказывать о себе обычными словами — сервис подскажет формулировки на каждом шаге.' },
    ] },
    { id: 'pay', name: 'Оплата и AI-версия', qa: [
      { q: 'За что платить 99 ₽?', a: 'AI-версия открывает: улучшение фото, усиление формулировок, адаптацию под вакансию, сопроводительное письмо, все платные шаблоны, а также форматы PDF + DOCX и бессрочную ссылку.' },
      { q: 'Это подписка?', a: 'Нет. 99 ₽ — разовый платёж за конкретное резюме. Никаких автосписаний.' },
      { q: 'Какие способы оплаты?', a: 'Оплата через YooKassa: банковские карты и СБП. После оплаты файлы доступны сразу, пароль от кабинета — на почте.' },
      { q: 'Можно вернуть деньги?', a: 'Да, если функции AI-версии не сработали по нашей вине. Напишите в поддержку — разберёмся индивидуально.' },
    ] },
    { id: 'files', name: 'Форматы и скачивание', qa: [
      { q: 'В каком формате скачивается резюме?', a: 'Бесплатно — PDF. В AI-версии дополнительно доступен DOCX для правок в Word и бессрочная ссылка на онлайн-версию.' },
      { q: 'Резюме подойдёт для загрузки на сайты вакансий?', a: 'Да. Шаблон «Одна колонка» специально сделан ATS-дружелюбным — его корректно читают роботы-парсеры.' },
      { q: 'Сколько хранится ссылка на резюме?', a: 'В бесплатной версии — 24 часа. В AI-версии ссылка бессрочная, пока вы сами её не отключите.' },
    ] },
    { id: 'privacy', name: 'Данные и приватность', qa: [
      { q: 'Что происходит с моими данными?', a: 'Данные используются только для формирования резюме и хранятся в вашем кабинете. Мы не передаём их третьим лицам без вашего согласия.' },
      { q: 'Можно удалить резюме и аккаунт?', a: 'Да, в любой момент из кабинета. Вместе с резюме удаляются загруженные фото и связанные данные.' },
    ] },
    { id: 'base', name: 'Публикация в Базе резюме', qa: [
      { q: 'Что такое База резюме?', a: 'Это открытый каталог, где работодатели ищут кандидатов. Публикация — по желанию: на последнем шаге конструктора стоит отдельная галочка.' },
      { q: 'Можно скрыть контакты в публичном резюме?', a: 'Да. В публичной версии телефон и почта скрыты — работодатель отправляет отклик через сервис, а вы решаете, отвечать ли.' },
      { q: 'Как убрать резюме из Базы?', a: 'Снимите галочку публикации в конструкторе или отключите публикацию в кабинете — резюме пропадёт из каталога.' },
    ] },
  ];

  const [active, setActive] = React.useState('service');
  const [openKey, setOpenKey] = React.useState('service-0');
  const [query, setQuery] = React.useState('');

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const allQA = GROUPS.flatMap((g) => g.qa.map((item, i) => ({ ...item, gid: g.id, gname: g.name, key: g.id + '-' + i })));
  const results = searching ? allQA.filter((x) => (x.q + ' ' + x.a).toLowerCase().includes(q)) : [];
  const group = GROUPS.find((g) => g.id === active);

  const Item = ({ item, showGroup }) => {
    const on = openKey === item.key;
    return (
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <button onClick={() => setOpenKey(on ? '' : item.key)} style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, padding: '16px 4px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)' }}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {showGroup && <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--brand-green)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.gname}</span>}
            <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>{item.q}</span>
          </span>
          <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: on ? 'var(--brand-green)' : 'var(--brand-green-tint)', color: on ? '#fff' : 'var(--brand-green)', fontSize: 17, lineHeight: '22px', textAlign: 'center', transition: 'all .2s' }}>{on ? '−' : '+'}</span>
        </button>
        {on && <div style={{ fontSize: 15, color: 'var(--ink-secondary)', lineHeight: 1.6, padding: '0 34px 18px 4px' }}>{item.a}</div>}
      </div>
    );
  };

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="FAQ" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 900, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '32px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: isM ? 26 : 34, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Частые вопросы</h1>
          <div style={{ fontSize: 15, color: 'var(--ink-secondary)', marginTop: 8 }}>Всё о сервисе, оплате, форматах и приватности. Не нашли ответ — напишите в поддержку.</div>
          <div style={{ maxWidth: 440, margin: '18px auto 0' }}>
            <DS.Input placeholder="Поиск по вопросам…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>

        {searching ? (
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? '4px 16px' : '8px 28px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 13, color: 'var(--ink-secondary)', padding: '14px 4px 4px' }}>{results.length ? `Найдено: ${results.length}` : 'Ничего не найдено — попробуйте другой запрос или напишите в поддержку.'}</div>
            {results.map((item) => <Item key={item.key} item={item} showGroup />)}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '220px 1fr', gap: isM ? 16 : 28, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: isM ? 'row' : 'column', gap: 4, flexWrap: isM ? 'wrap' : 'nowrap', position: isM ? 'static' : 'sticky', top: 28 }}>
              {GROUPS.map((g) => {
                const on = active === g.id;
                return <button key={g.id} onClick={() => { setActive(g.id); setOpenKey(g.id + '-0'); }} style={{ textAlign: 'left', background: on ? 'var(--brand-green-tint)' : 'transparent', color: on ? '#3F6B22' : 'var(--ink)', border: 'none', borderRadius: 8, padding: '10px 12px', fontSize: 14, fontWeight: on ? 700 : 500, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{g.name}</button>;
              })}
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? '4px 16px' : '8px 28px', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: 19, fontWeight: 700, color: 'var(--ink)', margin: '18px 4px 4px' }}>{group.name}</h2>
              {group.qa.map((item, i) => <Item key={i} item={{ ...item, key: group.id + '-' + i }} />)}
            </div>
          </div>
        )}

        <div style={{ marginTop: 28, background: 'var(--brand-green)', color: '#fff', borderRadius: 16, padding: isM ? '22px 20px' : '28px 32px', display: 'flex', flexDirection: isM ? 'column' : 'row', alignItems: isM ? 'flex-start' : 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 700 }}>Остались вопросы?</div>
            <div style={{ fontSize: 14, opacity: 0.92, marginTop: 4 }}>Напишите нам — ответим в течение рабочего дня.</div>
          </div>
          <DS.Button variant="primary" size="lg" onClick={() => go('support')}>Написать в поддержку</DS.Button>
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Faq = Faq;
