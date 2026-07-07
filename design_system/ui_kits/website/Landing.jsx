// Screen 1 — Лендинг. Hero (заголовок сверху по центру, CTA снизу), два пути,
// честная таблица Free/99₽, превью галереи (карусель на мобайле), киллер-фичи, FAQ (schema.org), футер.
function Landing({ device = 'desktop', go }) {
  const DS = window.DS;
  const { Header, Footer, SectionHead, PriceChip } = window.SITE;
  const isM = device === 'mobile';
  const pad = isM ? '0 18px' : '0 40px';
  const wrap = { maxWidth: 1180, margin: '0 auto', padding: pad, boxSizing: 'border-box' };

  const freeSteps = [
    { t: 'Заполните данные по шагам', d: 'Контакты, опыт, образование, навыки и дополнительная информация — всё в понятной форме с подсказками.' },
    { t: 'Используйте готовые формулировки', d: 'Сервис подскажет, как лучше описать обязанности, навыки и достижения без пустых шаблонных фраз.' },
    { t: 'Выберите бесплатный шаблон', d: 'Доступны два аккуратных варианта: с фото или без фото.' },
    { t: 'Скачайте PDF сразу', d: 'Готовое резюме можно скачать бесплатно. Ссылка на резюме будет активна 24 часа.' },
  ];
  const paidSteps = [
    { t: 'Надиктуйте данные или загрузите старое резюме', d: 'Не нужно переносить всё вручную: AI разберёт опыт, образование, навыки и соберёт структуру.' },
    { t: 'Улучшите фото для первого впечатления', d: 'Нейросеть аккуратно доработает фото: свет, резкость, кадрирование и общий профессиональный вид.' },
    { t: 'Усильте формулировки', d: 'AI поможет описать опыт, обязанности и достижения понятнее, конкретнее и убедительнее.' },
    { t: 'Подгоните резюме под вакансию', d: 'Вставьте текст вакансии — сервис выделит важные навыки, ключевые слова и релевантный опыт.' },
    { t: 'Получите письмо для отклика', d: 'AI подготовит сопроводительное письмо на основе Вашего резюме и требований вакансии.' },
  ];

  const rows = [
    ['Цена', '0 ₽', '99 ₽ один раз'],
    ['Шаблоны', '2 шаблона: с фото и без фото', 'Все шаблоны + настройки цвета и шрифта'],
    ['Заполнение вручную', true, 'галочка + AI-подсказки'],
    ['Готовые формулировки', 'базовые подсказки', 'AI-усиление текста'],
    ['Голосовой ввод', '—', true],
    ['Загрузка старого резюме', '—', 'PDF/DOCX импорт'],
    ['AI-улучшение фото', '—', true],
    ['Адаптация под вакансию', '—', 'навыки, опыт, ключевые слова'],
    ['Сопроводительное письмо', '—', 'под резюме и вакансию'],
    ['Формат файла', 'PDF', 'PDF и DOCX'],
    ['Ссылка на резюме', '24 часа', 'бессрочная'],
    ['Личный кабинет', '—', true],
    ['Правки и скачивания', 'в течение 24 часов', 'без доплат'],
    ['Регистрация', 'не нужна', 'кабинет создаётся автоматически'],
  ];

  const valueTool = [
    { vIcon: 'user', v: 'Профессиональное фото для резюме', vd: 'Фото выглядит аккуратнее: лучше свет, резкость, кадрирование и общее первое впечатление.', tIcon: 'wand', t: 'Нейросеть улучшает фото', td: 'AI показывает вариант «до → после».' },
    { vIcon: 'doc', v: 'Резюме без заполнения с нуля', vd: 'Не нужно заново переписывать опыт, образование и навыки вручную.', tIcon: 'fileup', t: 'Импорт старого файла', td: 'Сервис разбирает PDF/DOCX и раскладывает данные по разделам.' },
    { vIcon: 'clock', v: 'Заполнение за несколько минут', vd: 'Можно рассказать о себе обычными словами, без мучительного заполнения длинной анкеты.', tIcon: 'mic', t: 'Голосовой ввод', td: 'AI распознаёт речь и превращает её в блоки резюме.' },
    { vIcon: 'target', v: 'Приблизим резюме к требованиям вакансии', vd: 'Резюме выглядит не универсальным файлом для всех, а откликом под конкретную должность.', tIcon: 'search', t: 'Подгонка под вакансию', td: 'AI усиливает релевантные навыки, опыт и ключевые слова.' },
    { vIcon: 'mail', v: 'Готовое сопроводительное письмо', vd: 'Вместе с резюме вы получаете текст, с которого проще начать общение с работодателем.', tIcon: 'send', t: 'AI-письмо под отклик', td: 'Сервис формирует письмо на основе резюме и выбранной вакансии.' },
  ];

  const faqs = [
    ['Это правда бесплатно?', 'Да. Бесплатное резюме — полноценное, без урезаний и водяных знаков. PDF скачивается сразу, без оплаты и регистрации.'],
    ['Что такое «99 ₽ один раз»?', 'Разовый платёж, не подписка. Открываются голосовой ввод, загрузка старого резюме, AI-улучшение текста и фото, DOCX, библиотека шаблонов и личный кабинет с бессрочной ссылкой.'],
    ['Нужно ли вводить карту для бесплатной версии?', 'Нет. Оплата нужна только если вы сами захотите AI-версию за 99 ₽.'],
    ['Можно ли улучшить своё старое резюме?', 'Да. Загрузите файл PDF или DOCX — сервис распознает данные, а AI-версия улучшит формулировки и оформление.'],
    ['Как получить доступ к кабинету?', 'Кабинет создаётся автоматически при оплате: вы вводите email, пароль приходит на почту.'],
  ];
  const [openFaq, setOpenFaq] = React.useState(0);

  // Two section-padding tiers for consistent vertical rhythm on desktop.
  const padBig = isM ? '48px 18px' : '80px 40px';   // побольше — как в блоке «Шаблоны»
  const padSm = isM ? '36px 18px' : '56px 40px';    // поменьше — как в блоке «Как это помогает»
  const padSmX0 = isM ? '36px 0' : '56px 0';        // full-bleed tinted variant (small)

  return (
    <div style={{ background: '#fff', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Шаблоны" onCta={() => go('constructor')} onLogin={() => go('auth')} />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-tint) 0%, #fff 100%)' }}>
        <div style={{ ...wrap, paddingTop: isM ? 28 : 54, paddingBottom: isM ? 40 : 64, display: 'flex', flexDirection: isM ? 'column' : 'row', gap: isM ? 32 : 56, alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'inline-block', fontSize: 12.5, fontWeight: 700, color: '#3F6B22', background: 'var(--brand-green-tint)', padding: '6px 14px', borderRadius: 999 }}>Бесплатно · без регистрации · AI-версия 99 ₽ один раз</span>
            <h1 style={{ fontSize: isM ? 29 : 44, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '18px 0 0', textWrap: 'balance' }}>Создайте резюме, с которым проще пройти <span style={{ color: 'var(--brand-green)' }}>первый отбор</span></h1>
            <p style={{ fontSize: isM ? 15.5 : 17.5, color: 'var(--ink-secondary)', lineHeight: 1.55, margin: '16px 0 0', maxWidth: 540 }}><b style={{ color: 'var(--ink)' }}>Бесплатно:</b> заполните вручную данные и скачайте резюме в PDF формате.<br /><b style={{ color: 'var(--ink)' }}>Платно:</b> улучшим фото AI, заполним данные голосом, импортируем старое резюме, адаптируем резюме под вакансию и сделаем сопроводительное письмо.</p>
            <div style={{ marginTop: 26 }}><DS.Button variant="primary" size="lg" onClick={() => go('constructor')}>Создать резюме бесплатно</DS.Button></div>
            <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-secondary)' }}>PDF бесплатно · AI-версия 99 ₽ один раз · без подписки</div>
          </div>
          <div style={{ flex: isM ? 'none' : 1, width: isM ? '100%' : 'auto', display: 'flex', justifyContent: 'center' }}>
            <ResumePreviewHero isM={isM} />
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ → МЕХАНИЗМ */}
      <section style={{ ...wrap, padding: padSm }}>
        <SectionHead device={device} eyebrow="Как это помогает" title="Сервис помогает не просто оформить резюме, а подготовить сильный отклик" sub="Вы получаете понятный результат для поиска работы, а внутри работают AI-инструменты: улучшают фото, разбирают старое резюме, помогают заполнить данные и адаптируют отклик под вакансию." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 36, maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>
          {valueTool.map((r) => <ValueToolRow key={r.v} r={r} isM={isM} />)}
        </div>
      </section>

      {/* КАК ЭТО РАБОТАЕТ — два пути */}
      <section style={{ ...wrap, padding: padBig }}>
        <SectionHead device={device} eyebrow="Как это работает" title="Выберите свой путь к готовому резюме" sub="Можно спокойно заполнить резюме вручную и скачать PDF бесплатно. А можно подключить AI-версию: она ускорит заполнение, улучшит фото, поможет с формулировками и подготовит отклик под вакансию." />
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr', gap: 20, marginTop: 36, alignItems: 'stretch' }}>
          {/* FREE */}
          <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, boxShadow: 'var(--shadow-sm)', padding: isM ? 22 : 28, display: 'flex', flexDirection: 'column' }}>
            <PriceChip tone="free">Бесплатно · 0 ₽</PriceChip>
            <h3 style={{ fontSize: 21, fontWeight: 700, color: 'var(--ink)', margin: '14px 0 4px' }}>Заполнить вручную</h3>
            <div style={{ fontSize: 14, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>Для тех, кто хочет сам собрать аккуратное резюме без оплаты и регистрации.</div>
            <PathList steps={freeSteps} color="var(--brand-green)" />
            <div style={{ marginTop: 'auto', paddingTop: 20 }}>
              <div style={{ background: 'var(--bg-tint)', borderRadius: 12, padding: '13px 15px', fontSize: 13, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>Подходит, если нужно быстро получить нормальное резюме без оплаты и без регистрации.</div>
              <DS.Button variant="secondary" size="md" style={{ width: '100%', marginTop: 14 }} onClick={() => go('constructor')}>Заполнить вручную</DS.Button>
            </div>
          </div>
          {/* PAID */}
          <div style={{ background: 'var(--bg-tint)', border: '1.5px solid var(--brand-green)', borderRadius: 16, boxShadow: 'var(--shadow-brand)', padding: isM ? 22 : 28, display: 'flex', flexDirection: 'column' }}>
            <PriceChip tone="paid">AI-версия · 99 ₽ один раз</PriceChip>
            <h3 style={{ fontSize: 21, fontWeight: 700, color: 'var(--ink)', margin: '14px 0 4px' }}>Быстрее, сильнее, под вакансию</h3>
            <div style={{ fontSize: 14, color: 'var(--ink-secondary)', lineHeight: 1.5 }}>Для тех, кто хочет не просто оформить резюме, а подготовить более сильный отклик работодателю.</div>
            <PathList steps={paidSteps} color="var(--brand-yellow)" dark />
            <div style={{ marginTop: 'auto', paddingTop: 20 }}>
              <div style={{ background: 'var(--brand-green-tint)', borderRadius: 12, padding: '13px 15px', fontSize: 13, color: '#3F6B22', lineHeight: 1.5 }}><b>Входит в AI-версию:</b> все шаблоны · PDF и DOCX · бессрочная ссылка · личный кабинет · правки и скачивания без доплат</div>
              <DS.Button variant="primary" size="md" style={{ width: '100%', marginTop: 14 }} onClick={() => go('preview')}>Подключить AI-версию · 99 ₽</DS.Button>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 720, margin: '24px auto 0', textAlign: 'center', fontSize: 13.5, color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
          В бесплатной версии Вы всё равно получаете готовое резюме. Оплата нужна только для AI-усиления, DOCX, всех шаблонов и бессрочного хранения.
        </div>
      </section>

      {/* ТАБЛИЦА FREE / 99₽ */}
      <section style={{ background: 'var(--bg-tint)', padding: padSmX0 }}>
        <div style={wrap}>
          <SectionHead device={device} eyebrow="Честно о цене" title="Бесплатно — полноценное резюме. За 99 ₽ — AI-усиление" sub="Без скрытых платежей и подписок: бесплатная версия не урезана, а AI-версия помогает сделать отклик быстрее, сильнее и удобнее для отправки работодателю." />
          <PricingCompare rows={rows} isM={isM} DS={DS} />
          <div style={{ maxWidth: 720, margin: '22px auto 0', textAlign: 'center', fontSize: 13.5, color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
            В бесплатной версии Вы всё равно получаете готовое резюме и скачиваете PDF. Оплата нужна только для AI-усиления, DOCX, всех шаблонов и бессрочного хранения.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 22 }}>
            <DS.Button variant="primary" size="lg" onClick={() => go('constructor')}>Начать бесплатно</DS.Button>
            <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>Без регистрации · PDF бесплатно · AI-версия 99 ₽ один раз</div>
            <a href="#" onClick={(e) => { e.preventDefault(); go('templates'); }} style={{ fontSize: 14, color: 'var(--brand-green)', fontWeight: 600, textDecoration: 'none' }}>Посмотреть шаблоны →</a>
          </div>
        </div>
      </section>

      {/* ПРЕВЬЮ ГАЛЕРЕИ — карусель */}
      <section style={{ ...wrap, padding: isM ? '48px 0' : '80px 40px', minWidth: 0 }}>
        <div style={{ padding: isM ? '0 18px' : 0 }}>
          <SectionHead device={device} eyebrow="Шаблоны" title="Примерьте на своих данных" sub="Один бесплатный шаблон и большая библиотека в AI-версии." />
        </div>
        <TemplateCarousel isM={isM} DS={DS} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <DS.Button variant="outline" size="md" onClick={() => go('templates')}>Все шаблоны</DS.Button>
        </div>
      </section>

      {/* FAQ — микроразметка schema.org/FAQPage */}
      <section style={{ ...wrap, padding: padSm }}>
        <SectionHead device={device} eyebrow="Вопросы" title="Частые вопросы" />
        <div itemScope itemType="https://schema.org/FAQPage" style={{ maxWidth: 720, margin: '32px auto 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" style={{ border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
                <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '16px 18px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 15.5, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>
                  <span itemProp="name">{f[0]}</span>
                  <span style={{ color: 'var(--brand-green)', fontSize: 22, lineHeight: 1, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
                </button>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" style={{ maxHeight: open ? 320 : 0, overflow: 'hidden', transition: 'max-height .25s var(--ease-standard)' }}>
                  <div itemProp="text" style={{ padding: '0 18px 16px', fontSize: 14.5, color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{f[1]}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Не нашли ответ — Telegram CTA */}
        <div style={{ maxWidth: 720, margin: '28px auto 0', textAlign: 'center', background: 'var(--brand-blue-tint)', borderRadius: 16, padding: isM ? '26px 20px' : '32px 24px' }}>
          <div style={{ fontSize: isM ? 18 : 20, fontWeight: 700, color: 'var(--brand-blue-deep)' }}>Не нашли ответ на свой вопрос?</div>
          <div style={{ fontSize: 14.5, color: 'var(--ink-secondary)', marginTop: 6 }}>Пишите, мы ответим в ближайшее время</div>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginTop: 18, background: 'var(--brand-blue)', color: '#fff', fontSize: 15.5, fontWeight: 700, padding: '12px 24px', borderRadius: 12, textDecoration: 'none', boxShadow: 'var(--shadow-sm)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M21.9 4.3l-3.3 15.5c-.24 1.1-.9 1.36-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.01.5l.36-5.14L18 5.6c.4-.36-.09-.56-.62-.2L6.9 12.3l-4.96-1.55c-1.08-.34-1.1-1.08.23-1.6l19.4-7.48c.9-.33 1.68.2 1.34 1.63z"/></svg>
            Telegram
          </a>
        </div>
      </section>

      <Footer device={device} />
    </div>
  );
}

const TEMPLATE_CARDS = [
  { render: () => <window.TemplateStart />, tag: 'free' },
  { render: () => <window.TemplateClean accent="blue" />, tag: 'paid' },
  { render: () => <window.TemplateAccent accent="teal" />, tag: 'paid' },
  { render: () => <window.TemplateOneColumn accent="graphite" />, tag: 'paid' },
  { render: () => <window.TemplateCompact accent="blue" />, tag: 'paid' },
];

function TplCard({ t, DS }) {
  return (
    <div style={{ width: 186, height: 262, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)', position: 'relative', background: '#fff' }}>
      <div style={{ transform: 'scale(0.3)', transformOrigin: 'top left', width: 620, height: 876 }}>{t.render()}</div>
      <div style={{ position: 'absolute', top: 8, left: 8 }}>
        <DS.Badge tone={t.tag === 'free' ? 'brand' : 'paid'}>{t.tag === 'free' ? 'Бесплатно' : '99 ₽'}</DS.Badge>
      </div>
    </div>
  );
}

function Chevron({ dir }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'left' ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function TemplateCarousel({ isM, DS }) {
  const [idx, setIdx] = React.useState(0);
  const n = TEMPLATE_CARDS.length;

  if (!isM) {
    return (
      <div style={{ display: 'flex', gap: 16, marginTop: 32, overflowX: 'auto', padding: '0 0 10px', justifyContent: 'center' }}>
        {TEMPLATE_CARDS.map((t, i) => (
          <div key={i} style={{ flexShrink: 0 }}><TplCard t={t} DS={DS} /></div>
        ))}
      </div>
    );
  }

  const prev = () => setIdx((idx - 1 + n) % n);
  const next = () => setIdx((idx + 1) % n);
  const arrow = (onClick, dir) => (
    <button onClick={onClick} aria-label={dir === 'left' ? 'Назад' : 'Вперёд'} style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
      <Chevron dir={dir} />
    </button>
  );

  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {arrow(prev, 'left')}
        <TplCard t={TEMPLATE_CARDS[idx]} DS={DS} />
        {arrow(next, 'right')}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
        {TEMPLATE_CARDS.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={'Шаблон ' + (i + 1)} style={{ width: i === idx ? 20 : 7, height: 7, borderRadius: 999, background: i === idx ? 'var(--brand-green)' : 'var(--line)', border: 'none', padding: 0, cursor: 'pointer', transition: 'width .2s' }} />
        ))}
      </div>
    </div>
  );
}

function PathList({ steps, color, dark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
          <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: color, color: dark ? '#2B2B2B' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13.5 }}>{i + 1}</span>
          <div style={{ paddingTop: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>{s.t}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-secondary)', lineHeight: 1.45, marginTop: 3 }}>{s.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ResumePreviewHero({ isM }) {
  const scale = isM ? 0.44 : 0.52;
  return (
    <div style={{ position: 'relative', width: 620 * scale, height: 876 * scale }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ transform: 'scale(' + scale + ')', transformOrigin: 'top left', width: 620, height: 876 }}><window.TemplateStartPhoto photo="../../assets/hero-portrait.png" /></div>
      </div>
      <span style={{ position: 'absolute', top: 10, right: 10, fontSize: 11, fontWeight: 700, color: '#8A5A0E', background: '#FDF0DA', padding: '4px 10px', borderRadius: 999, boxShadow: 'var(--shadow-sm)' }}>Без подписки</span>
      <FloatPill style={{ bottom: 16, left: isM ? 6 : -8 }}>PDF готов</FloatPill>
    </div>
  );
}

function FloatPill({ children, style }) {
  return (
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: 6, background: '#fff', boxShadow: 'var(--shadow-md)', borderRadius: 999, padding: '6px 11px', fontSize: 12, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap', ...style }}>
      <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--brand-green)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="8" height="6" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      {children}
    </div>
  );
}

function AiToolPanel({ r, isM }) {
  return (
    <div style={{ background: '#EEF6E0', borderRadius: 16, padding: isM ? 16 : 18 }}>
      <span style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 700, color: '#4C7A2A', background: '#fff', padding: '5px 12px', borderRadius: 999 }}>AI-инструмент</span>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 13, marginTop: 12 }}>
        <span style={{ width: 46, height: 46, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }}><FIcon name={r.tIcon} color="var(--brand-green)" /></span>
        <div style={{ paddingTop: 1 }}>
          <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{r.t}</div>
          <p style={{ fontSize: 13, color: 'var(--ink-secondary)', margin: '4px 0 0', lineHeight: 1.45 }}>{r.td}</p>
        </div>
      </div>
    </div>
  );
}

function ValueToolRow({ r, isM }) {
  if (isM) {
    return (
      <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 20, boxShadow: 'var(--shadow-md)', padding: 20 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ width: 52, height: 52, borderRadius: 15, background: 'var(--brand-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FIcon name={r.vIcon} color="var(--brand-green)" big /></span>
          <div style={{ paddingTop: 2 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1.25 }}>{r.v}</h3>
            <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', margin: '6px 0 0', lineHeight: 1.5 }}>{r.vd}</p>
          </div>
        </div>
        <div style={{ marginTop: 16 }}><AiToolPanel r={r} isM /></div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 24, background: '#fff', border: '1px solid var(--line)', borderRadius: 20, boxShadow: 'var(--shadow-md)', padding: 24 }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
        <span style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--brand-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FIcon name={r.vIcon} color="var(--brand-green)" big /></span>
        <div style={{ paddingTop: 4 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1.2 }}>{r.v}</h3>
          <p style={{ fontSize: 14.5, color: 'var(--ink-secondary)', margin: '8px 0 0', lineHeight: 1.5 }}>{r.vd}</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: 'var(--brand-green)', flexShrink: 0 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </div>
      <div style={{ flex: '0 0 38%', display: 'flex' }}>
        <div style={{ width: '100%' }}><AiToolPanel r={r} /></div>
      </div>
    </div>
  );
}

function FIcon({ name, color, big }) {
  const s = big ? 26 : 22;
  const p = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'user': return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>;
    case 'wand': return <svg {...p}><path d="M15 4V2M15 10V8M20 7h2M18 7h-2" /><path d="M13 8l-9 9 3 3 9-9z" /></svg>;
    case 'doc': return <svg {...p}><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v4h4" /><path d="M9 13h6M9 17h6" /></svg>;
    case 'fileup': return <svg {...p}><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v4h4" /><path d="M12 18v-6M9.5 14.5L12 12l2.5 2.5" /></svg>;
    case 'mic': return <svg {...p}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg>;
    case 'clock': return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case 'target': return <window.SITE.FeatIcon name="target" color={color} size={s} />;
    case 'search': return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>;
    case 'mail': return <window.SITE.FeatIcon name="mail" color={color} size={s} />;
    case 'send': return <svg {...p}><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg>;
    default: return <svg {...p}><path d="M12 3l2.2 4.6L19 8l-3.5 3.4.8 4.9L12 14l-4.3 2.3.8-4.9L5 8l4.8-.4z" /></svg>;
  }
}

function Check() {
  return (
    <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--brand-green)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="10" height="8" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}
function Dash() { return <span style={{ color: 'var(--ink-secondary)', opacity: 0.55 }}>—</span>; }

function CellVal({ v }) {
  if (v === true) return <Check />;
  if (v === '—') return <Dash />;
  return <span>{v}</span>;
}

function PricingCompare({ rows, isM, DS }) {
  const PriceChip = window.SITE.PriceChip;
  const [plan, setPlan] = React.useState('ai'); // mobile toggle: 'free' | 'ai'

  if (!isM) {
    return (
      <div style={{ maxWidth: 820, margin: '32px auto 0', background: '#fff', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.25fr' }}>
          {/* header */}
          <div style={{ padding: '18px 18px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'flex-end' }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-secondary)' }}>Возможность</span>
          </div>
          <div style={{ padding: '18px 16px', borderBottom: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 16 }}>Бесплатно</span>
            <PriceChip tone="free">0 ₽</PriceChip>
            <span style={{ fontSize: 11.5, color: 'var(--ink-secondary)' }}>PDF без регистрации</span>
          </div>
          <div style={{ padding: '18px 16px', background: '#F7FAF2', borderBottom: '1px solid var(--brand-green)', borderLeft: '1px solid var(--brand-green)', borderRight: '1px solid var(--brand-green)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 16 }}>AI-версия</span>
            <PriceChip tone="paid">99 ₽ один раз</PriceChip>
            <span style={{ fontSize: 11.5, color: 'var(--ink-secondary)' }}>без подписки</span>
          </div>
          {/* rows */}
          {rows.map((r, i) => {
            const zebra = i % 2 ? '#F7FAF2' : '#fff';
            const last = i === rows.length - 1;
            return (
              <React.Fragment key={r[0]}>
                <div style={{ padding: '13px 18px', fontSize: 14, fontWeight: 600, color: 'var(--ink)', background: zebra, borderBottom: last ? 'none' : '1px solid var(--line)', display: 'flex', alignItems: 'center' }}>{r[0]}</div>
                <div style={{ padding: '13px 16px', fontSize: 13.5, color: 'var(--ink-secondary)', background: zebra, borderBottom: last ? 'none' : '1px solid var(--line)', display: 'flex', alignItems: 'center' }}><CellVal v={r[1]} /></div>
                <div style={{ padding: '13px 16px', fontSize: 13.5, color: 'var(--ink)', background: '#F1F7E8', borderLeft: '1px solid var(--brand-green)', borderRight: '1px solid var(--brand-green)', borderBottom: last ? '1px solid var(--brand-green)' : '1px solid #D6E5BE', display: 'flex', alignItems: 'center', fontWeight: 500 }}><CellVal v={r[2]} /></div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  // Mobile: toggle + feature list for the selected plan
  const col = plan === 'free' ? 1 : 2;
  return (
    <div style={{ maxWidth: 460, margin: '28px auto 0' }}>
      <div style={{ display: 'flex', background: '#fff', border: '1px solid var(--line)', borderRadius: 999, padding: 4, marginBottom: 16 }}>
        <button onClick={() => setPlan('free')} style={{ flex: 1, fontSize: 13.5, fontWeight: 700, color: plan === 'free' ? '#fff' : 'var(--ink-secondary)', background: plan === 'free' ? 'var(--brand-green)' : 'transparent', border: 'none', borderRadius: 999, padding: '9px 8px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Бесплатно · 0 ₽</button>
        <button onClick={() => setPlan('ai')} style={{ flex: 1, fontSize: 13.5, fontWeight: 700, color: plan === 'ai' ? '#fff' : 'var(--ink-secondary)', background: plan === 'ai' ? 'var(--brand-green)' : 'transparent', border: 'none', borderRadius: 999, padding: '9px 8px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>AI-версия · 99 ₽</button>
      </div>
      <div style={{ background: '#fff', border: plan === 'ai' ? '1.5px solid var(--brand-green)' : '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ padding: '14px 16px', background: plan === 'ai' ? '#F1F7E8' : 'var(--bg-tint)', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{plan === 'free' ? 'Бесплатно' : 'AI-версия'}</span>
          <PriceChip tone={plan === 'free' ? 'free' : 'paid'}>{plan === 'free' ? '0 ₽' : '99 ₽ один раз'}</PriceChip>
          <span style={{ fontSize: 11.5, color: 'var(--ink-secondary)', marginLeft: 'auto' }}>{plan === 'free' ? 'PDF без регистрации' : 'без подписки'}</span>
        </div>
        {rows.map((r, i) => (
          <div key={r[0]} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px', borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--line)', background: i % 2 ? '#FbFdF7' : '#fff' }}>
            <span style={{ flex: 1, fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{r[0]}</span>
            <span style={{ flex: '0 0 44%', fontSize: 13, color: r[col] === '—' ? 'var(--ink-secondary)' : 'var(--ink)', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}><CellVal v={r[col]} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.SITE.Landing = Landing;
