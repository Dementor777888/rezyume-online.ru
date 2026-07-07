// Screen 8 — Auth. Вход email + пароль (пришёл при оплате) + восстановление. Только для платящих.
function Auth({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, Logo, Footer } = window.SITE;
  const isM = device === 'mobile';
  const [mode, setMode] = React.useState(state === 'recover' ? 'recover' : 'login');

  const card = { background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 24 : 34, boxShadow: 'var(--shadow-md)', width: '100%', maxWidth: 400, boxSizing: 'border-box' };

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Услуги" onCta={() => go('constructor')} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isM ? '32px 16px' : '48px 40px' }}>
        <div style={card}>
          {mode === 'login' ? (
            <>
              <h2 style={{ fontSize: 21, fontWeight: 700, textAlign: 'center', margin: '0 0 4px' }}>Вход в кабинет</h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', textAlign: 'center', margin: '0 0 22px', lineHeight: 1.5 }}>Пароль вы получили на почту при оплате AI-версии.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <DS.Input label="Email" placeholder="you@mail.ru" value="e.smirnova@mail.ru" onChange={() => {}} />
                <div>
                  <DS.Input label="Пароль" type="password" placeholder="••••••••" value="secret12" onChange={() => {}} />
                  {state === 'error' && <div style={{ fontSize: 12.5, color: '#B4451E', marginTop: 6 }}>Неверный email или пароль.</div>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setMode('recover')} style={{ background: 'none', border: 'none', color: 'var(--brand-green)', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)' }}>Забыли пароль?</button>
                </div>
                <DS.Button variant="primary" size="lg" style={{ width: '100%' }} disabled={state === 'loading'} onClick={() => go('cabinet')}>{state === 'loading' ? 'Вход…' : 'Войти'}</DS.Button>
              </div>
              <div style={{ borderTop: '1px solid var(--line)', margin: '22px 0 0', paddingTop: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>Ещё нет кабинета?</div>
                <div style={{ fontSize: 13, color: 'var(--ink-secondary)', marginTop: 4 }}>Кабинет создаётся при оплате AI-версии за 99 ₽. <a href="#" onClick={(e) => { e.preventDefault(); go('preview'); }} style={{ color: 'var(--brand-green)', fontWeight: 600 }}>Оформить</a></div>
              </div>
            </>
          ) : mode === 'recover' ? (
            <>
              <h2 style={{ fontSize: 21, fontWeight: 700, textAlign: 'center', margin: '0 0 4px' }}>Восстановление пароля</h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', textAlign: 'center', margin: '0 0 22px', lineHeight: 1.5 }}>Укажите email — пришлём ссылку для смены пароля.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <DS.Input label="Email" placeholder="you@mail.ru" onChange={() => {}} />
                <DS.Button variant="primary" size="lg" style={{ width: '100%' }} onClick={() => setMode('sent')}>Отправить ссылку</DS.Button>
                <button onClick={() => setMode('login')} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>← Назад ко входу</button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--brand-green-tint)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><path d="M2 6h20v12H2z"/></svg>
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 6px' }}>Письмо отправлено</h2>
              <p style={{ fontSize: 14, color: 'var(--ink-secondary)', margin: '0 0 22px', lineHeight: 1.5 }}>Проверьте почту и перейдите по ссылке, чтобы задать новый пароль.</p>
              <DS.Button variant="outline" size="md" style={{ width: '100%' }} onClick={() => setMode('login')}>Вернуться ко входу</DS.Button>
            </div>
          )}
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Auth = Auth;
