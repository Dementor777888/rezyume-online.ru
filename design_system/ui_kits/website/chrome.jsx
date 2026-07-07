// Резюме Онлайн — shared site chrome: Logo, Header, Footer (foliage wave), small helpers.
// Reads window.DS (design-system bundle). Registers onto window.SITE.

const NAV = ['Шаблоны', 'Образцы', 'База резюме', 'Статьи', 'FAQ', 'Поддержка'];
const NAV_GO = { 'Шаблоны': 'templates', 'Образцы': 'examples', 'База резюме': 'base', 'Статьи': 'articles', 'FAQ': 'faq', 'Поддержка': 'support' };
const navGo = (n) => { const id = NAV_GO[n]; if (id && window.SITE && window.SITE.__navGo) window.SITE.__navGo(id); };

function Logo({ size = 34, mark = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {mark && <img src="../../assets/logo-mark.png" alt="" style={{ height: size, width: 'auto', display: 'block' }} />}
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: size * 0.62, fontWeight: 700, color: 'var(--ink)' }}>Резюме&nbsp;Онлайн</div>
      </div>
    </div>
  );
}

function Header({ device = 'desktop', active = 'Услуги', onCta, onLogin }) {
  const DS = window.DS;
  const [open, setOpen] = React.useState(false);
  const login = () => (onLogin ? onLogin() : null);
  if (device === 'mobile') {
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px' }}>
          <Logo size={26} />
          <button onClick={() => setOpen(!open)} aria-label="Меню" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 22, height: 2, background: 'var(--ink)', borderRadius: 2 }} />)}
          </button>
        </div>
        {open && (
          <nav style={{ borderTop: '1px solid var(--line)', padding: '8px 16px 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV.map((n) => (
              <a key={n} href="#" onClick={(e) => { e.preventDefault(); navGo(n); }} style={{ padding: '9px 0', fontSize: 15, color: n === active ? 'var(--brand-green)' : 'var(--ink)', textDecoration: 'none', fontWeight: n === active ? 700 : 500 }}>{n}</a>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <DS.Button variant="ghost" size="md" onClick={login} style={{ flex: '0 0 auto' }}>Вход</DS.Button>
              <DS.Button variant="primary" size="md" onClick={onCta} style={{ flex: 1 }}>Создать резюме</DS.Button>
            </div>
          </nav>
        )}
      </header>
    );
  }
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '14px 40px', maxWidth: 1180, margin: '0 auto' }}>
        <Logo />
        <nav style={{ display: 'flex', gap: 20 }}>
          {NAV.map((n) => (
            <a key={n} href="#" onClick={(e) => { e.preventDefault(); navGo(n); }} style={{ fontSize: 14, color: n === active ? 'var(--brand-green)' : 'var(--ink)', textDecoration: 'none', fontWeight: n === active ? 700 : 500, whiteSpace: 'nowrap' }}>{n}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <DS.Button variant="ghost" size="md" onClick={login}>Вход</DS.Button>
          <DS.Button variant="primary" size="md" onClick={onCta}>Создать резюме</DS.Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ device = 'desktop' }) {
  const cols = [
    { h: 'Продукт', items: ['Конструктор', 'Примеры резюме', 'Шаблоны'] },
    { h: 'Компания', items: ['О сервисе', 'Блог', 'Контакты', 'Оферта'] },
    { h: 'Поддержка', items: ['Частые вопросы', 'Помощь', 'Реквизиты', 'Политика данных'] },
  ];
  return (
    <footer style={{ marginTop: 'auto' }}>
      <FooterWave device={device} />
      <div style={{ background: 'var(--brand-green)', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: device === 'mobile' ? '24px 20px' : '36px 40px', display: 'flex', flexWrap: 'wrap', gap: device === 'mobile' ? 24 : 48, justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 260 }}>
            <div style={{ fontFamily: 'var(--font-serif-display)', fontSize: 22, fontWeight: 700 }}>Резюме Онлайн</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 8, lineHeight: 1.5 }}>Ваш опыт — наши возможности. Красивое резюме бесплатно, AI-версия — 99 ₽ один раз.</div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.85, marginBottom: 10 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {c.items.map((i) => <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13.5, color: '#fff', opacity: 0.92, textDecoration: 'none' }}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: device === 'mobile' ? '12px 20px' : '14px 40px', fontSize: 12, opacity: 0.85, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between' }}>
            <span>© 2026 Резюме Онлайн · ИП Васильев А. М. · ИНН: 532116802715 · ОГРНИП: 31753210021901</span>
            <span>Сервис создания резюме, который работает</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Subtle footer decoration: a slim green strip with a shallow wavy top edge and a
// faint repeating «tiny resume» watermark (motif reworked from the leaf фирменный элемент).
function FooterWave({ device = 'desktop' }) {
  const h = device === 'mobile' ? 24 : 32;
  return (
    <div style={{ position: 'relative', height: h, background: 'var(--brand-green)', overflow: 'hidden' }}>
      <svg viewBox={'0 0 1200 ' + h} preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: h, display: 'block' }}>
        <path d="M0,9 C240,1 420,1 600,6 C820,12 980,12 1200,3 L1200,0 L0,0 Z" fill="#fff" />
      </svg>
    </div>
  );
}

// Small labelled section wrapper for landing blocks
function SectionHead({ eyebrow, title, sub, center = true, device = 'desktop' }) {
  const isM = device === 'mobile';
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: 640, margin: center ? '0 auto' : '0' }}>
      {eyebrow && <div style={{ fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-green)' }}>{eyebrow}</div>}
      <h2 style={{ fontSize: isM ? 23 : 30, fontWeight: 700, color: 'var(--ink)', margin: '8px 0 0', lineHeight: 1.15, letterSpacing: '-0.01em', textWrap: 'balance' }}>{title}</h2>
      {sub && <p style={{ fontSize: isM ? 14.5 : 15.5, color: 'var(--ink-secondary)', margin: '12px 0 0', lineHeight: 1.5 }}>{sub}</p>}
    </div>
  );
}

// Price chip used to keep pricing honest & visible
function PriceChip({ children, tone = 'paid' }) {
  const map = {
    free: { bg: 'var(--brand-green-tint)', fg: '#3F6B22' },
    paid: { bg: '#FDF0DA', fg: '#8A5A0E' },
  };
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: map[tone].bg, color: map[tone].fg, fontWeight: 700, fontSize: 13, padding: '5px 12px', borderRadius: 999 }}>{children}</span>;
}

// Единые иконки фич (по референсам): target — прицел с рисками и кольцом в центре,
// mail — конверт с клапаном. Используются на Лендинге, в Конструкторе и Превью+экспорте.
function FeatIcon({ name, color = 'var(--brand-green)', size = 20 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'target') return <svg {...p}><circle cx="12" cy="12" r="6.2" /><circle cx="12" cy="12" r="2.1" /><path d="M12 2.4v3.4M12 18.2v3.4M2.4 12h3.4M18.2 12h3.4" /></svg>;
  if (name === 'mail') return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2.2" /><path d="M4.6 7.6l7.4 5.4 7.4-5.4" /></svg>;
  return null;
}

Object.assign(window.SITE, { Logo, Header, Footer, FooterWave, SectionHead, PriceChip, FeatIcon, NAV });
