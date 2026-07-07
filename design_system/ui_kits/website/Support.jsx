// Screen — Поддержка. Форма обратной связи + быстрый канал в Telegram-бот поддержки.
function Support({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';

  const [sent, setSent] = React.useState(state === 'success');
  const [topic, setTopic] = React.useState('Оплата и AI-версия');
  const [msg, setMsg] = React.useState('');
  React.useEffect(() => { setSent(state === 'success'); }, [state]);

  const TOPICS = ['Оплата и AI-версия', 'Проблема со скачиванием', 'Вопрос по резюме', 'Публикация в Базе резюме', 'Удаление данных', 'Другое'];

  const TgIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M21.9 4.3l-3.3 15.5c-.24 1.1-.9 1.36-1.82.85l-5.03-3.7-2.43 2.34c-.27.27-.5.5-1 .5l.36-5.13 9.32-8.42c.4-.36-.09-.56-.63-.2L4.14 13.2l-4.96-1.56C-.09 11.34-.1 10.53 1.4 9.99l19.13-7.37c.9-.33 1.69.2 1.37 1.68z" transform="translate(1 1)"/></svg>
  );

  const feedbackForm = (
    <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: isM ? 20 : 28, boxShadow: 'var(--shadow-sm)' }}>
      {sent ? (
        <div style={{ textAlign: 'center', padding: '20px 8px' }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--brand-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Обращение отправлено</h2>
          <p style={{ fontSize: 15, color: 'var(--ink-secondary)', lineHeight: 1.55, margin: '10px auto 0', maxWidth: 380 }}>Мы ответим на вашу почту в течение рабочего дня. Копия обращения продублирована на указанный email.</p>
          <DS.Button variant="outline" size="md" style={{ marginTop: 18 }} onClick={() => { setSent(false); setMsg(''); }}>Написать ещё</DS.Button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Форма обратной связи</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr', gap: 14 }}>
            <DS.Input label="Имя" placeholder="Как к вам обращаться" value="" onChange={() => {}} />
            <DS.Input label="Email для ответа" placeholder="you@mail.ru" value="" onChange={() => {}} />
          </div>
          <DS.Select label="Тема обращения" value={topic} onChange={(e) => setTopic(e.target.value)} options={TOPICS} />
          <div>
            <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>Сообщение</label>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Опишите вопрос как можно подробнее. Если проблема с оплатой — укажите дату и последние 4 цифры карты." style={{ width: '100%', marginTop: 4, minHeight: 120, resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink)', border: '1px solid var(--line)', borderRadius: 8, padding: '11px 14px', boxSizing: 'border-box', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-secondary)', border: '1px dashed var(--line)', borderRadius: 10, padding: '10px 12px', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95L9.13 18.07" /></svg>
            Прикрепить скриншот (до 5 МБ)
          </div>
          <DS.Checkbox checked={true} onChange={() => {}} label="Согласен(а) на обработку персональных данных для ответа на обращение" />
          <DS.Button variant="primary" size="lg" disabled={!msg.trim()} onClick={() => setSent(true)}>Отправить обращение</DS.Button>
        </div>
      )}
    </div>
  );

  const side = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ background: '#229ED9', color: '#fff', borderRadius: 16, padding: 22, boxShadow: 'var(--shadow-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TgIcon /></div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>Telegram-бот поддержки</div>
            <div style={{ fontSize: 13, opacity: 0.92 }}>Отвечаем быстрее всего</div>
          </div>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.95, margin: '14px 0 16px' }}>Задайте вопрос боту — простые вопросы решаются мгновенно, сложные передаются оператору.</p>
        <a href="https://t.me/rezyume_online_bot" target="_blank" rel="noopener" style={{ display: 'block', textAlign: 'center', background: '#fff', color: '#229ED9', fontWeight: 700, fontSize: 15, textDecoration: 'none', borderRadius: 10, padding: '12px 16px' }}>Открыть @rezyume_online_bot →</a>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: 20, boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>Время ответа</div>
        {[['Telegram-бот', 'сразу — 5 минут'], ['Почта / форма', 'в течение рабочего дня'], ['Часы работы', 'пн–пт, 9:00–19:00 МСК']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13.5, borderTop: '1px solid var(--line)' }}>
            <span style={{ color: 'var(--ink-secondary)' }}>{k}</span><span style={{ color: 'var(--ink)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--brand-green-tint)', border: '1px solid #C6DF9E', borderRadius: 16, padding: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#3F6B22', marginBottom: 6 }}>Быстрые ответы</div>
        <div style={{ fontSize: 13.5, color: '#3F6B22', lineHeight: 1.5, marginBottom: 12 }}>Возможно, ответ уже есть в разделе частых вопросов.</div>
        <button onClick={() => go('faq')} style={{ background: 'none', border: 'none', color: 'var(--brand-green)', fontWeight: 700, fontSize: 14, cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)' }}>Открыть FAQ →</button>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Поддержка" onCta={() => go('constructor')} onLogin={() => go('auth')} />
      <div style={{ maxWidth: 1060, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px' : '32px 40px' }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: isM ? 26 : 32, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Поддержка</h1>
          <div style={{ fontSize: 15, color: 'var(--ink-secondary)', marginTop: 8 }}>Поможем с оплатой, скачиванием, публикацией и любыми вопросами по сервису.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 330px', gap: 24, alignItems: 'start' }}>
          {feedbackForm}
          {side}
        </div>
      </div>
      <Footer device={device} />
    </div>
  );
}

window.SITE.Support = Support;
