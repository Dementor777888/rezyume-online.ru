// Screen 10 — 404. Дружелюбная страница ошибки в фирменном стиле, с волной-листвой.
function Error404({ device = 'desktop', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';

  const links = [
    ['Создать резюме', 'constructor'],
    ['Шаблоны', 'templates'],
    ['Частые вопросы', 'landing'],
  ];

  const FEATURES = [
    'Бесплатное создание резюме и PDF без регистрации',
    'Готовые шаблоны и образцы по 500+ профессиям',
    'Импорт данных из старого резюме',
    'Заполнение голосом — диктовка текста',
    'Улучшение фото для резюме (AI)',
    'Усиление формулировок опыта (AI)',
    'Подгонка резюме под вакансию',
    'Готовое сопроводительное письмо',
    'Экспорт в PDF и DOCX, бессрочная ссылка',
    'Публикация в Базе резюме для работодателей',
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Шаблоны" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, var(--bg-tint) 0%, #fff 100%)', padding: isM ? '40px 18px' : '64px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{ fontSize: isM ? 96 : 140, fontWeight: 700, lineHeight: 1, color: 'var(--brand-green)', letterSpacing: '-0.03em', fontFamily: 'var(--font-serif-display)' }}>404</div>
          <h1 style={{ fontSize: isM ? 22 : 28, fontWeight: 700, color: 'var(--ink)', margin: '14px 0 0' }}>Такой страницы нет</h1>
          <p style={{ fontSize: isM ? 15 : 16.5, color: 'var(--ink-secondary)', lineHeight: 1.55, margin: '12px auto 0', maxWidth: 420 }}>
            Возможно, ссылка устарела или страница была перемещена. Но резюме создать никуда не делось — начните прямо сейчас.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 26 }}>
            <DS.Button variant="primary" size="lg" onClick={() => go('constructor')}>Создать резюме</DS.Button>
            <DS.Button variant="outline" size="lg" onClick={() => go('landing')}>На главную</DS.Button>
          </div>

          <div style={{ marginTop: 30, paddingTop: 22, borderTop: '1px solid var(--line)', textAlign: 'left' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', textAlign: 'center', marginBottom: 16 }}>Возможности сервиса</div>
            <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr', gap: '10px 22px' }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--ink)', lineHeight: 1.4 }}>
                  <span style={{ flexShrink: 0, marginTop: 1, width: 20, height: 20, borderRadius: '50%', background: 'var(--brand-green)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="9" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
            <div style={{ fontSize: 13, color: 'var(--ink-secondary)', marginBottom: 10 }}>Популярные разделы</div>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              {links.map(([label, dest]) => (
                <a key={label} href="#" onClick={(e) => { e.preventDefault(); go(dest); }} style={{ fontSize: 14.5, color: 'var(--brand-green)', fontWeight: 600, textDecoration: 'none' }}>{label} →</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Error404 = Error404;
