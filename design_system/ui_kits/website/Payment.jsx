// Screen 6 — Оплата. Шаг 1: email (создаём кабинет, пароль на почту). Шаг 2: сводка 99 ₽,
// что входит, промокод (свёрнут), способы оплаты YooKassa. Экран успеха: файлы + пароль на почте.
function Payment({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, PriceChip, Footer } = window.SITE;
  const isM = device === 'mobile';
  const [stage, setStage] = React.useState(state === 'success' ? 'success' : 1);
  const [promoOpen, setPromoOpen] = React.useState(false);
  const [method, setMethod] = React.useState('card');

  const card = { background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: isM ? 22 : 30, boxShadow: 'var(--shadow-sm)' };

  const summary = (
    <div style={{ ...card, background: 'var(--bg-tint)' }}>
      <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-secondary)' }}>Заказ</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12 }}>
        <span style={{ fontSize: 15, color: 'var(--ink)' }}>AI-версия резюме</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>99 ₽</span>
      </div>
      <div style={{ marginTop: 6 }}><PriceChip tone="paid">Разовый платёж · без подписки</PriceChip></div>
      <div style={{ borderTop: '1px solid var(--line)', margin: '16px 0', height: 1 }} />
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['5 строгих пресетов', 'AI-улучшение фото', 'PDF и DOCX', 'Бессрочная ссылка', 'Личный кабинет'].map((t) => (
          <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: 'var(--ink)' }}><MiniCheck /> {t}</li>
        ))}
      </ul>
    </div>
  );

  if (stage === 'success') {
    return (
      <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header device={device} active="Услуги" onCta={() => go('constructor')} />
        <div style={{ maxWidth: 560, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '28px 16px' : '48px 40px' }}>
          <div style={{ ...card, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brand-green-tint)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="30" height="24" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: '18px 0 6px' }}>Оплата прошла</h2>
            <p style={{ fontSize: 15, color: 'var(--ink-secondary)', margin: 0, lineHeight: 1.5 }}>AI-версия открыта. Пароль от личного кабинета отправлен на <b style={{ color: 'var(--ink)' }}>e.smirnova@mail.ru</b>.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22 }}>
              {[['Резюме.pdf', 'PDF'], ['Резюме.docx', 'DOCX']].map(([f, ext]) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--line)', borderRadius: 10, padding: '12px 14px' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', background: 'var(--brand-green)', padding: '4px 8px', borderRadius: 6 }}>{ext}</span>
                  <span style={{ fontSize: 14, color: 'var(--ink)', flex: 1, textAlign: 'left' }}>{f}</span>
                  <DS.Button variant="outline" size="sm">Скачать</DS.Button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <DS.Button variant="ghost" size="md" style={{ flex: 1 }} onClick={() => go('auth')}>Войти в кабинет</DS.Button>
              <DS.Button variant="primary" size="md" style={{ flex: 1 }} onClick={() => go('cabinet')}>Мои резюме</DS.Button>
            </div>
          </div>
        </div>
        <Footer device={device} />
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Услуги" onCta={() => go('constructor')} />
      <div style={{ maxWidth: 940, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '20px 16px' : '32px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <StageDot n={1} active={stage === 1} done={stage > 1} label="Email" />
          <div style={{ flex: 'none', width: 28, height: 2, background: 'var(--line)' }} />
          <StageDot n={2} active={stage === 2} done={false} label="Оплата" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1.2fr 0.8fr', gap: 24, alignItems: 'start' }}>
          <div style={card}>
            {stage === 1 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Куда прислать доступ</h2>
                  <p style={{ fontSize: 14, color: 'var(--ink-secondary)', margin: '6px 0 0', lineHeight: 1.5 }}>Создадим кабинет и пришлём пароль на почту — резюме сохранится навсегда.</p>
                </div>
                <DS.Input label="Email" placeholder="you@mail.ru" value="e.smirnova@mail.ru" onChange={() => {}} />
                <DS.Button variant="secondary" size="lg" style={{ width: '100%' }} onClick={() => setStage(2)}>Продолжить к оплате</DS.Button>
                <div style={{ fontSize: 12, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>Нажимая «Продолжить», вы принимаете <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--brand-green)' }}>оферту</a> и <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--brand-green)' }}>политику данных</a>.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Оплата один раз. Без подписки.</h2>
                  <p style={{ fontSize: 14, color: 'var(--ink-secondary)', margin: '6px 0 0' }}>Спишется ровно <b style={{ color: 'var(--ink)' }}>99 ₽</b>. Повторных платежей не будет.</p>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Способ оплаты · YooKassa</div>
                  <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr 1fr' : 'repeat(4,1fr)', gap: 8 }}>
                    {[['card', 'Карта'], ['sber', 'SberPay'], ['yoo', 'ЮMoney'], ['tpay', 'T-Pay']].map(([k, l]) => (
                      <button key={k} onClick={() => setMethod(k)} style={{ fontSize: 13, fontWeight: method === k ? 700 : 500, color: method === k ? 'var(--brand-green)' : 'var(--ink)', background: method === k ? 'var(--brand-green-tint)' : '#fff', border: method === k ? '1.5px solid var(--brand-green)' : '1px solid var(--line)', borderRadius: 10, padding: '11px 8px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{l}</button>
                    ))}
                  </div>
                </div>
                {method === 'card' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <DS.Input label="Номер карты" placeholder="0000 0000 0000 0000" onChange={() => {}} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <DS.Input label="Срок" placeholder="ММ/ГГ" onChange={() => {}} />
                      <DS.Input label="CVC" placeholder="•••" onChange={() => {}} />
                    </div>
                  </div>
                )}
                {!promoOpen
                  ? <button onClick={() => setPromoOpen(true)} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: 'var(--brand-green)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)' }}>У меня есть промокод</button>
                  : <DS.Input label="Промокод" placeholder="Введите код" onChange={() => {}} />}
                {state === 'error' && <div style={{ background: '#FBEDE7', border: '1px solid #F0C8B8', borderRadius: 10, padding: 12, fontSize: 13.5, color: '#B4451E' }}>Платёж отклонён банком. Попробуйте другой способ.</div>}
                <DS.Button variant="primary" size="lg" style={{ width: '100%' }} disabled={state === 'loading'} onClick={() => setStage('success')}>{state === 'loading' ? 'Обработка…' : 'Оплатить 99 ₽'}</DS.Button>
                <button onClick={() => setStage(1)} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>← Изменить email</button>
              </div>
            )}
          </div>
          {summary}
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

function StageDot({ n, active, done, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 26, height: 26, borderRadius: '50%', background: done || active ? 'var(--brand-green)' : 'var(--line)', color: done || active ? '#fff' : 'var(--ink-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>{done ? '✓' : n}</span>
      <span style={{ fontSize: 14, fontWeight: active ? 700 : 500, color: active ? 'var(--ink)' : 'var(--ink-secondary)' }}>{label}</span>
    </div>
  );
}

window.SITE.Payment = Payment;
