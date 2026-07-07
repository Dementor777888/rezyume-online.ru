// Screen 3 — Загрузка фото. Free: вставка как есть (кроп круг/квадрат).
// Paid: AI-улучшение «до → после» с кнопкой «Применить», как платная фича с превью-тизером.
function PhotoUpload({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, PriceChip, Footer } = window.SITE;
  const isM = device === 'mobile';
  const [shape, setShape] = React.useState('circle');
  const [applied, setApplied] = React.useState(false);

  const photo = (extra) => (
    <div style={{ width: 180, height: 180, borderRadius: shape === 'circle' ? '50%' : 16, overflow: 'hidden', background: 'var(--brand-blue-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue-deep)', fontSize: 54, fontWeight: 700, fontFamily: 'var(--font-sans)', border: '1px solid var(--line)', ...extra }}>ЕС</div>
  );

  const emptyState = (
    <div style={{ border: '2px dashed var(--line)', borderRadius: 16, padding: isM ? '32px 20px' : '48px 32px', textAlign: 'center', background: 'var(--bg-tint)' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#fff', border: '1px solid var(--line)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginTop: 14 }}>Перетащите фото сюда</div>
      <div style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 6 }}>JPG или PNG, до 10 МБ. Фото вставляется как есть — без обязательной обработки.</div>
      <div style={{ marginTop: 18 }}><DS.Button variant="secondary" size="md">Выбрать файл</DS.Button></div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Услуги" onCta={() => go('constructor')} />
      <div style={{ maxWidth: 900, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '20px 16px' : '32px 40px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Фото для резюме</h2>
        <p style={{ fontSize: 14.5, color: 'var(--ink-secondary)', margin: '6px 0 0' }}>Фото необязательно. В бесплатной версии оно вставляется как есть.</p>

        {state === 'empty' ? (
          <div style={{ marginTop: 24 }}>{emptyState}</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: isM ? 'column' : 'row', gap: 24, marginTop: 24 }}>
            {/* FREE crop */}
            <div style={{ flex: 1, background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 22, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>Обрезка</span>
                <DS.Badge tone="brand">Бесплатно</DS.Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '22px 0' }}>{photo()}</div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                <ShapeBtn active={shape === 'circle'} onClick={() => setShape('circle')} label="Круг" />
                <ShapeBtn active={shape === 'square'} onClick={() => setShape('square')} label="Квадрат" />
              </div>
              <div style={{ marginTop: 18 }}><DS.Button variant="secondary" size="md" style={{ width: '100%' }}>Сохранить фото</DS.Button></div>
            </div>

            {/* PAID AI enhance */}
            <div style={{ flex: 1, background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 22, boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>AI-улучшение</span>
                <PriceChip tone="paid">99 ₽ · разово</PriceChip>
              </div>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
                <div style={{ textAlign: 'center' }}>
                  {photo({ width: 116, height: 116, fontSize: 34, filter: 'saturate(0.7) brightness(0.96)' })}
                  <div style={{ fontSize: 12, color: 'var(--ink-secondary)', marginTop: 6 }}>До</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                <div style={{ textAlign: 'center', position: 'relative' }}>
                  {photo({ width: 116, height: 116, fontSize: 34, filter: applied ? 'none' : 'blur(4px)', background: 'var(--brand-blue-tint)' })}
                  <div style={{ fontSize: 12, color: applied ? 'var(--brand-green)' : 'var(--ink-secondary)', marginTop: 6, fontWeight: applied ? 700 : 400 }}>После</div>
                </div>
              </div>
              {applied ? (
                <div style={{ fontSize: 13, color: '#3F6B22', textAlign: 'center', marginBottom: 12 }}>Готово: выровнен свет, убран фон, повышена резкость.</div>
              ) : (
                <div style={{ fontSize: 13, color: 'var(--ink-secondary)', textAlign: 'center', marginBottom: 12, lineHeight: 1.5 }}>Ровный свет, аккуратный фон и деловой вид. Доступно в AI-версии.</div>
              )}
              {state === 'loading' ? (
                <DS.Button variant="secondary" size="md" disabled style={{ width: '100%' }}>Обработка…</DS.Button>
              ) : applied ? (
                <DS.Button variant="secondary" size="md" style={{ width: '100%' }} onClick={() => setApplied(false)}>Вернуть оригинал</DS.Button>
              ) : (
                <DS.Button variant="primary" size="md" style={{ width: '100%' }} onClick={() => setApplied(true)}>Применить · 99 ₽</DS.Button>
              )}
              <div style={{ fontSize: 11.5, color: 'var(--ink-secondary)', textAlign: 'center', marginTop: 8 }}>Оплата один раз, без подписки</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 26 }}>
          <DS.Button variant="ghost" size="md" onClick={() => go('constructor')}>← К конструктору</DS.Button>
          <DS.Button variant="secondary" size="md" onClick={() => go('preview')}>Далее →</DS.Button>
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

function ShapeBtn({ active, onClick, label }) {
  return <button onClick={onClick} style={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? 'var(--brand-green)' : 'var(--ink-secondary)', background: active ? 'var(--brand-green-tint)' : 'var(--bg-tint)', border: active ? '1px solid var(--brand-green)' : '1px solid var(--line)', borderRadius: 8, padding: '7px 16px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{label}</button>;
}

window.SITE.PhotoUpload = PhotoUpload;
