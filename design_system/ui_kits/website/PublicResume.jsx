// Screen 9 — Публичная страница резюме по ссылке. Чистый просмотр.
// Для бесплатных — плашка «ссылка активна 24 часа».
function PublicResume({ device = 'desktop', state = 'free', go }) {
  const { Logo } = window.SITE;
  const DS = window.DS;
  const isM = device === 'mobile';
  const isFree = state !== 'paid';

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* minimal public top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--line)', padding: isM ? '10px 16px' : '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo size={26} />
        <DS.Button variant="outline" size="sm" onClick={() => go('landing')}>Создать своё резюме</DS.Button>
      </div>

      {isFree && (
        <div style={{ background: '#FDF0DA', borderBottom: '1px solid #F0D9A8' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: isM ? '9px 16px' : '10px 40px', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A5A0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <span style={{ fontSize: 13, color: '#8A5A0E', fontWeight: 600, textAlign: 'center' }}>Эта ссылка активна 24 часа. Бессрочная ссылка — в AI-версии за 99 ₽.</span>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 820, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '20px 16px' : '36px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <div style={{ boxShadow: 'var(--shadow-lg)', borderRadius: 12, overflow: 'hidden', transform: isM ? 'scale(0.56)' : 'scale(0.98)', transformOrigin: 'top center' }}>
          {isFree ? <window.TemplateStart /> : <window.TemplateClean accent="blue" />}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: isM ? -300 : 8 }}>
          <DS.Button variant="primary" size="md">Скачать PDF</DS.Button>
          {!isFree && <DS.Button variant="outline" size="md">Скачать DOCX</DS.Button>}
        </div>
        {isFree && (
          <div style={{ fontSize: 13, color: 'var(--ink-secondary)', textAlign: 'center', maxWidth: 420, lineHeight: 1.5 }}>
            Хотите, чтобы ссылка не пропадала и появился личный кабинет? <a href="#" onClick={(e) => { e.preventDefault(); go('preview'); }} style={{ color: 'var(--brand-green)', fontWeight: 600 }}>Откройте AI-версию за 99 ₽</a>.
          </div>
        )}
      </div>
    </div>
  );
}

window.SITE.PublicResume = PublicResume;
