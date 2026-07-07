// Screen 5 — Превью + экспорт. Слева фичи-чипы + превью резюме. Справа два оффера:
// «Скачать как есть» (0 ₽) и «Усилить перед отправкой» (AI-версия · 99 ₽).
function PreviewExport({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { PriceChip, Header, Footer } = window.SITE;
  const isM = device === 'mobile';
  const [tab, setTab] = React.useState('free'); // free | paid — управляет превью

  const previewEl = tab === 'free'
    ? <window.TemplateStartPhoto photo="../../assets/hero-portrait.png" />
    : <window.TemplateClean accent="blue" />;

  const chips = tab === 'free'
    ? [
        { icon: 'doc', label: 'PDF' },
        { icon: 'clock', label: 'Хранение 24 часа' },
      ]
    : [
        { icon: 'sparkle', label: 'Фото улучшено' },
        { icon: 'target', label: 'Под вакансию' },
        { icon: 'doc', label: 'PDF + DOCX' },
        { icon: 'clock', label: 'Хранение бессрочно' },
      ];

  const chipCol = (
    <div style={{ display: 'flex', flexDirection: isM ? 'row' : 'column', gap: 12, flexShrink: 0 }}>
      {chips.map((c) => (
        <div key={c.label} style={{ width: isM ? 'auto' : 78, flex: isM ? 1 : 'none', background: '#fff', border: '1px solid var(--line)', borderRadius: 14, boxShadow: 'var(--shadow-sm)', padding: isM ? '10px 8px' : '12px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
          <span style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--brand-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PIcon name={c.icon} color="var(--brand-green)" /></span>
          <span style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.25 }}>{c.label}</span>
        </div>
      ))}
    </div>
  );

  const PW = 620, ps = isM ? 0.5 : 0.64;
  const previewPane = (
    <div style={{ flex: 1, minWidth: 0, background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 12 : 20, boxShadow: 'var(--shadow-md)', display: 'flex', justifyContent: 'center', maxHeight: isM ? 460 : 640, overflow: 'hidden' }}>
      {state === 'loading'
        ? <div style={{ height: 440, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, color: 'var(--ink-secondary)' }}><Spinner /> Готовим файл…</div>
        : <div style={{ width: PW * ps, maxWidth: '100%', overflow: 'hidden' }}>
            <div style={{ width: PW, transform: `scale(${ps})`, transformOrigin: 'top left' }}>{previewEl}</div>
          </div>}
    </div>
  );

  // ——— Оффер 1: скачать как есть ———
  const freeCard = (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 18 : 20, boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 19, fontWeight: 700, color: 'var(--ink)', flex: 1 }}>Скачать как есть</span>
        <PriceChip tone="free">0 ₽</PriceChip>
      </div>
      <div style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 4 }}>Готовое резюме без регистрации</div>
      <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['Фирменный шаблон', 'Формат PDF', 'Без водяных знаков', 'Ссылка активна 24 часа'].map((t) => (
          <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--ink)' }}><MiniCheck /> {t}</li>
        ))}
      </ul>
      {state === 'error' ? (
        <div style={{ marginTop: 16, background: '#FBEDE7', border: '1px solid #F0C8B8', borderRadius: 10, padding: 14, fontSize: 13.5, color: '#B4451E' }}>
          Не удалось сформировать PDF. <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#B4451E', fontWeight: 700 }}>Попробовать снова</a>
        </div>
      ) : (
        <DS.Button variant="primary" size="lg" style={{ width: '100%', marginTop: 16 }}>Скачать PDF — бесплатно</DS.Button>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, background: 'var(--bg-tint)', border: '1px solid var(--line)', borderRadius: 10, padding: '10px 12px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-secondary)" strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"/><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>
        <span style={{ fontSize: 12.5, color: 'var(--ink-secondary)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>rezyume-online.ru/r/8fk2a1</span>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: '#8A5A0E', background: '#FDF0DA', padding: '3px 8px', borderRadius: 999 }}>24 ч</span>
      </div>
    </div>
  );

  // ——— Оффер 2: усилить перед отправкой ———
  const upsell = [
    { icon: 'user', t: 'Улучшить фото', d: 'более деловой и аккуратный вид' },
    { icon: 'sparkle', t: 'Усилить формулировки', d: 'опыт звучит убедительнее' },
    { icon: 'target', t: 'Подогнать под вакансию', d: 'релевантные навыки и ключевые слова' },
    { icon: 'mail', t: 'Сопроводительное письмо', d: 'готовый текст для отклика' },
    { icon: 'doc', t: 'PDF + DOCX и бессрочная ссылка', d: 'удобно отправлять и хранить' },
  ];
  const paidCard = (
    <div style={{ background: '#fff', border: '1.5px solid var(--brand-green)', borderRadius: 16, padding: isM ? 18 : 20, boxShadow: 'var(--shadow-brand)' }}>
      <PriceChip tone="paid">AI-версия · 99 ₽ один раз</PriceChip>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--ink)', margin: '10px 0 2px' }}>Усилить перед отправкой</h3>
      <div style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>Сделайте резюме сильнее для работодателя</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: '12px 0 0' }}>
        {upsell.map((u) => (
          <div key={u.t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0' }}>
            <span style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--brand-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><PIcon name={u.icon} color="var(--brand-green)" /></span>
            <div style={{ display: 'flex', flexDirection: isM ? 'column' : 'row', alignItems: isM ? 'flex-start' : 'baseline', gap: isM ? 0 : 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{u.t}</span>
              <span style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>{u.d}</span>
            </div>
          </div>
        ))}
      </div>
      <DS.Button variant="primary" size="lg" style={{ width: '100%', marginTop: 14 }} onClick={() => go('payment')}>Усилить резюме за 99 ₽</DS.Button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10, fontSize: 12.5, color: 'var(--ink-secondary)' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/></svg>
        Без подписки · один платёж · правки без доплат
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Услуги" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '20px 16px' : '32px 40px' }}>
        <h2 style={{ fontSize: isM ? 24 : 30, fontWeight: 700, color: 'var(--ink)', margin: '0 0 6px' }}>Ваше резюме готово</h2>
        <p style={{ fontSize: 15, color: 'var(--ink-secondary)', margin: '0 0 20px' }}>Скачайте PDF бесплатно или усильте резюме перед отправкой работодателю.</p>

        <div style={{ display: 'inline-flex', background: '#fff', border: '1px solid var(--line)', borderRadius: 999, padding: 4, marginBottom: 18 }}>
          {[['free', 'Бесплатно'], ['paid', 'AI-версия · 99 ₽']].map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} style={{ fontSize: 13.5, fontWeight: 700, color: tab === k ? '#fff' : 'var(--ink-secondary)', background: tab === k ? 'var(--brand-green)' : 'transparent', border: 'none', borderRadius: 999, padding: '8px 18px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{l}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1.15fr 0.85fr', gap: isM ? 20 : 28, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: isM ? 'column' : 'row', gap: isM ? 12 : 16 }}>
            {chipCol}
            {previewPane}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {freeCard}
            {paidCard}
          </div>
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

function PIcon({ name, color }) {
  const p = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'user': return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>;
    case 'sparkle': return <svg {...p}><path d="M12 3l1.8 4.9L18.5 9l-4.7 1.1L12 15l-1.8-4.9L5.5 9l4.7-1.1z" /><path d="M18 15l.7 1.8L20.5 17.5l-1.8.7L18 20l-.7-1.8L15.5 17.5l1.8-.7z" /></svg>;
    case 'target': return <window.SITE.FeatIcon name="target" color={color} size={20} />;
    case 'mail': return <window.SITE.FeatIcon name="mail" color={color} size={20} />;
    case 'doc': return <svg {...p}><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v4h4" /><path d="M9 13h6M9 17h6" /></svg>;
    case 'clock': return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    default: return null;
  }
}

function MiniCheck() {
  return <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--brand-green)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="10" height="8" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
}

window.SITE.PreviewExport = PreviewExport;
