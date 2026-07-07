// Screen 2 — Конструктор (ЯДРО). Пошаговый визард с трекером, поля+подсказки слева,
// sticky live-превью справа. Секции опыта/образования с +/−. Индикатор автосохранения.
// Мобайл: превью в нижней модалке.
function Constructor({ device = 'desktop', state = 'default', go }) {
  const DS = window.DS;
  const { Header, Footer } = window.SITE;
  const isM = device === 'mobile';
  const STEPS = ['Контакты', 'Опыт', 'Образование', 'Навыки', 'Фото', 'Шаблон'];
  const [step, setStep] = React.useState(1);
  const [showPreview, setShowPreview] = React.useState(false);
  const [exp, setExp] = React.useState([0, 1]);
  const [edu, setEdu] = React.useState([0]);
  const [photoShape, setPhotoShape] = React.useState('circle');
  const [aiApplied, setAiApplied] = React.useState(false);
  const [aiFeat, setAiFeat] = React.useState({});
  const [tpl, setTpl] = React.useState('start');
  const [consent, setConsent] = React.useState({ pd: false, publish: false });

  // Актуальная AI-фича для каждого шага. Шаг 5 (Фото) уже имеет AI-улучшение внутри полей.
  const AI_SUGGEST = {
    1: { icon: 'mic', t: 'Диктовка «О себе»', d: 'Не хотите печатать? Расскажите о себе голосом — AI распознает речь и оформит аккуратный текст.', cta: 'Надиктовать', on: 'Диктовка включена' },
    2: { icon: 'sparkle', t: 'Усилить формулировки', d: 'AI перепишет обязанности как достижения с цифрами — опыт зазвучит убедительнее.', cta: 'Усилить с AI', on: 'Формулировки усилены' },
    3: { icon: 'mic', t: 'Диктовка образования', d: 'Продиктуйте учебные заведения, курсы и достижения голосом — AI разложит их по полям.', cta: 'Надиктовать', on: 'Диктовка включена' },
    4: { icon: 'target', t: 'Подогнать под вакансию', d: 'Вставьте текст вакансии — AI выделит ключевые навыки и подскажет, чего не хватает.', cta: 'Подобрать навыки', on: 'Навыки подобраны' },
    6: { icon: 'mail', t: 'Сопроводительное письмо', d: 'В финале AI подготовит письмо для отклика на основе вашего резюме и вакансии — останется отправить.', cta: 'Создать письмо', on: 'Письмо готово' },
  };

  const aiSuggest = () => {
    const f = AI_SUGGEST[step];
    if (!f) return null;
    const done = !!aiFeat[step];
    return (
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'flex-start', gap: 13, background: done ? 'var(--brand-green-tint)' : '#FDF9F0', border: done ? '1px solid #C6DF9E' : '1px solid #EBD9B4', borderRadius: 12, padding: 14 }}>
        <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: done ? '#fff' : '#FDF0DA', color: done ? 'var(--brand-green)' : '#8A5A0E' }}><CIcon name={done ? 'check' : f.icon} color={done ? 'var(--brand-green)' : '#8A5A0E'} /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{f.t}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#8A5A0E', background: '#FDF0DA', padding: '2px 8px', borderRadius: 999 }}>AI · 99 ₽</span>
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', lineHeight: 1.45, marginTop: 3 }}>{f.d}</div>
          <div style={{ marginTop: 10 }}>
            {done
              ? <button onClick={() => setAiFeat({ ...aiFeat, [step]: false })} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'var(--brand-green)', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-sans)', padding: 0 }}>{f.on} · отменить</button>
              : <button onClick={() => setAiFeat({ ...aiFeat, [step]: true })} style={{ background: '#fff', border: '1px solid #EBD9B4', color: '#8A5A0E', fontWeight: 700, fontSize: 13, padding: '8px 15px', borderRadius: 9, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{f.cta} →</button>}
          </div>
        </div>
      </div>
    );
  };

  const Hint = ({ children }) => (
    <div style={{ display: 'flex', gap: 8, background: 'var(--brand-green-tint)', border: '1px solid #C6DF9E', borderRadius: 10, padding: '10px 12px', fontSize: 12.5, color: '#3F6B22', lineHeight: 1.45, alignItems: 'flex-start' }}>
      <span style={{ fontWeight: 700 }}>Подсказка</span>
      <span>{children}</span>
    </div>
  );

  const HILITE = { 1: 'contacts', 2: 'experience', 3: 'education', 4: 'skills', 5: null, 6: null };
  const PW = 620, PH = 876, pscale = isM ? 0.5 : 0.5;
  const preview = (
    <div style={{ width: PW * pscale, height: PH * pscale, margin: '0 auto', overflow: 'hidden' }}>
      <div style={{ transform: `scale(${pscale})`, transformOrigin: 'top left', width: PW }}>
        {step === 5
          ? <window.TemplateStartPhoto photo="../../assets/hero-portrait.png" photoShape={photoShape} highlight="photo" />
          : step === 6 && tpl === 'startPhoto'
            ? <window.TemplateStartPhoto photo="../../assets/hero-portrait.png" photoShape={photoShape} />
            : <window.TemplateStart highlight={HILITE[step]} />}
      </div>
    </div>
  );

  const fields = () => {
    if (step === 1) return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 13, background: '#FDF9F0', border: '1px solid #EBD9B4', borderRadius: 12, padding: 14 }}>
          <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FDF0DA', color: '#8A5A0E' }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#8A5A0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M8 8l4-4 4 4" /><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" /></svg>
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Загрузить старое резюме</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#8A5A0E', background: '#FDF0DA', padding: '2px 8px', borderRadius: 999 }}>AI · 99 ₽</span>
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-secondary)', lineHeight: 1.45, marginTop: 3 }}>Загрузите файл PDF или DOCX — AI распознает его и заполнит поля автоматически. Платная функция — 99 ₽.</div>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10, background: '#fff', border: '1.5px dashed #EBD9B4', color: '#8A5A0E', fontWeight: 700, fontSize: 13, padding: '11px 15px', borderRadius: 9, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A5A0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95L9.13 18.07" /></svg>
              Выбрать файл (PDF, DOCX) — 99 ₽
              <input type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={() => {}} />
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>или заполните вручную бесплатно</span>
          <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr', gap: 14 }}>
          <DS.Input label="Имя и фамилия" placeholder="Екатерина Смирнова" value="Екатерина Смирнова" onChange={() => {}} />
          <DS.Input label="Желаемая должность" placeholder="Менеджер по маркетингу" value="Менеджер по маркетингу" onChange={() => {}} />
          <DS.Input label="Телефон" placeholder="+7 (___) ___-__-__" value="+7 (900) 000-00-00" onChange={() => {}} />
          <DS.Input label="Email" placeholder="you@mail.ru" value="e.smirnova@mail.ru" onChange={() => {}} />
          <DS.Input label="Город" placeholder="Москва" value="Москва" onChange={() => {}} />
          <DS.Input label="Дата рождения" placeholder="дд.мм.гггг" value="14.03.1994" onChange={() => {}} />
        </div>
        <div>
          <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>О себе</label>
          <textarea defaultValue="Маркетолог с опытом более 6 лет: performance-реклама, контент-стратегия, аналитика." style={{ width: '100%', marginTop: 4, minHeight: 72, resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink)', border: '1px solid var(--line)', borderRadius: 8, padding: '11px 14px', boxSizing: 'border-box', outline: 'none' }} />
        </div>
        <Hint>Начните с сильного факта: сколько лет опыта и ключевой результат в цифрах. Например: «выросла ROMI на 38%».</Hint>
      </div>
    );
    if (step === 2) return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {exp.map((id, idx) => (
          <div key={id} style={{ border: '1px solid var(--line)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-secondary)' }}>Место работы {idx + 1}</span>
              {exp.length > 1 && <button onClick={() => setExp(exp.filter((x) => x !== id))} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', cursor: 'pointer', fontSize: 13 }}>− Удалить</button>}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr', gap: 12 }}>
              <DS.Input label="Должность" value={idx === 0 ? 'Ведущий маркетолог' : 'Маркетолог'} onChange={() => {}} />
              <DS.Input label="Компания" value={idx === 0 ? 'ООО «Технопарк Медиа»' : 'Сеть кофеен «Бодрость»'} onChange={() => {}} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <DS.Input label="Период" value={idx === 0 ? 'Июнь 2021 — н.в.' : 'Март 2019 — Май 2021'} onChange={() => {}} />
              {idx === 0 && <div style={{ paddingTop: 18 }}><DS.Switch label="По настоящее время" checked onChange={() => {}} /></div>}
            </div>
          </div>
        ))}
        <button onClick={() => setExp([...exp, Math.max(...exp) + 1])} style={{ alignSelf: 'flex-start', background: 'none', border: '1.5px dashed var(--brand-green)', color: 'var(--brand-green)', fontWeight: 600, fontSize: 14, padding: '9px 16px', borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>+ Добавить место работы</button>
        <Hint>Формулируйте достижениями, а не обязанностями: «запустила кампании, снизила CPL на 27%» вместо «занималась рекламой».</Hint>
      </div>
    );
    if (step === 3) return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {edu.map((id, idx) => (
          <div key={id} style={{ border: '1px solid var(--line)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-secondary)' }}>Образование {idx + 1}</span>
              {edu.length > 1 && <button onClick={() => setEdu(edu.filter((x) => x !== id))} style={{ background: 'none', border: 'none', color: 'var(--ink-secondary)', cursor: 'pointer', fontSize: 13 }}>− Удалить</button>}
            </div>
            <DS.Input label="Учебное заведение" value="РЭУ им. Г. В. Плеханова" onChange={() => {}} />
            <div style={{ display: 'grid', gridTemplateColumns: isM ? '1fr' : '1fr 1fr', gap: 12 }}>
              <DS.Input label="Специальность" value="Маркетинг" onChange={() => {}} />
              <DS.Input label="Годы" value="2012 — 2017" onChange={() => {}} />
            </div>
          </div>
        ))}
        <button onClick={() => setEdu([...edu, Math.max(...edu) + 1])} style={{ alignSelf: 'flex-start', background: 'none', border: '1.5px dashed var(--brand-green)', color: 'var(--brand-green)', fontWeight: 600, fontSize: 14, padding: '9px 16px', borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>+ Добавить образование</button>
      </div>
    );
    if (step === 4) return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Профессиональные навыки (hard skills)</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Яндекс Директ', 'VK Реклама', 'Google Analytics', 'Контент-стратегия', 'Excel'].map((s) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--brand-green-tint)', color: '#3F6B22', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 999 }}>{s} <span style={{ cursor: 'pointer', opacity: 0.6 }}>×</span></span>
            ))}
            <span style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px dashed var(--brand-green)', color: 'var(--brand-green)', fontSize: 13, fontWeight: 600, padding: '5px 12px', borderRadius: 999, cursor: 'pointer' }}>+ навык</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Личные качества (soft skills)</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Коммуникабельность', 'Аналитическое мышление', 'Ответственность'].map((s) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--surface-sunken)', color: 'var(--ink-secondary)', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 999 }}>{s} <span style={{ cursor: 'pointer', opacity: 0.6 }}>×</span></span>
            ))}
          </div>
        </div>
        <Hint>Готовые формулировки: нажмите на подсказанный навык, чтобы добавить его. 5–8 навыков достаточно.</Hint>
      </div>
    );
    if (step === 5) return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 14, color: 'var(--ink-secondary)' }}>Фото необязательно. В бесплатной версии оно вставляется как есть.</div>
        <div style={{ display: 'flex', flexDirection: isM ? 'column' : 'row', gap: 16 }}>
          {/* Free crop */}
          <div style={{ flex: 1, border: '1px solid var(--line)', borderRadius: 12, padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Обрезка</span>
              <DS.Badge tone="brand">Бесплатно</DS.Badge>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 14px' }}>
              <img src="../../assets/hero-portrait.png" alt="" style={{ width: 128, height: 128, borderRadius: photoShape === 'circle' ? '50%' : 14, objectFit: 'cover', border: '1px solid var(--line)' }} />
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              {[['circle', 'Круг'], ['square', 'Квадрат']].map(([k, l]) => (
                <button key={k} onClick={() => setPhotoShape(k)} style={{ fontSize: 13, fontWeight: photoShape === k ? 700 : 500, color: photoShape === k ? 'var(--brand-green)' : 'var(--ink-secondary)', background: photoShape === k ? 'var(--brand-green-tint)' : 'var(--bg-tint)', border: photoShape === k ? '1px solid var(--brand-green)' : '1px solid var(--line)', borderRadius: 8, padding: '7px 16px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{l}</button>
              ))}
            </div>
          </div>
          {/* Paid AI enhance */}
          <div style={{ flex: 1, border: '1px solid var(--line)', borderRadius: 12, padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>AI-улучшение</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#8A5A0E', background: '#FDF0DA', padding: '3px 9px', borderRadius: 999 }}>99 ₽</span>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', padding: '8px 0 12px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="../../assets/hero-portrait.png" alt="" style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover', filter: 'saturate(0.7) brightness(0.97)' }} />
                <div style={{ fontSize: 11.5, color: 'var(--ink-secondary)', marginTop: 5 }}>До</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              <div style={{ textAlign: 'center' }}>
                <img src="../../assets/hero-portrait.png" alt="" style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover', filter: aiApplied ? 'none' : 'blur(3px)' }} />
                <div style={{ fontSize: 11.5, color: aiApplied ? 'var(--brand-green)' : 'var(--ink-secondary)', marginTop: 5, fontWeight: aiApplied ? 700 : 400 }}>После</div>
              </div>
            </div>
            {aiApplied
              ? <DS.Button variant="secondary" size="md" style={{ width: '100%' }} onClick={() => setAiApplied(false)}>Вернуть оригинал</DS.Button>
              : <DS.Button variant="primary" size="md" style={{ width: '100%' }} onClick={() => setAiApplied(true)}>Применить · 99 ₽</DS.Button>}
          </div>
        </div>
        <Hint>Хорошее фото повышает отклик. AI выровняет свет, уберёт фон и сделает вид деловым — доступно в AI-версии.</Hint>
      </div>
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 14, color: 'var(--ink-secondary)' }}>Выберите бесплатный шаблон. Строгие пресеты доступны в AI-версии за 99 ₽.</div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {[{ key: 'start', el: <window.TemplateStart />, n: '«Старт»', d: 'без фото' }, { key: 'startPhoto', el: <window.TemplateStartPhoto photo="../../assets/hero-portrait.png" photoShape={photoShape} />, n: '«Старт+фото»', d: 'с фото' }].map((t) => {
            const on = tpl === t.key;
            return (
              <button key={t.key} onClick={() => setTpl(t.key)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
                <div style={{ width: 150, height: 211, borderRadius: 10, overflow: 'hidden', border: on ? '2px solid var(--brand-green)' : '1px solid var(--line)', boxShadow: on ? 'var(--shadow-brand)' : 'var(--shadow-sm)', background: '#fff' }}>
                  <div style={{ transform: 'scale(0.242)', transformOrigin: 'top left', width: 620, height: 876 }}>{t.el}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: on ? 700 : 600, marginTop: 8, color: on ? 'var(--brand-green)' : 'var(--ink)' }}>{t.n}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-secondary)' }}>{t.d}</div>
              </button>
            );
          })}
        </div>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Перед сохранением</div>
          <DS.Checkbox checked={consent.pd} onChange={(v) => setConsent({ ...consent, pd: v })} label="Я согласен(а) на обработку персональных данных согласно Политике конфиденциальности" />
          <DS.Checkbox checked={consent.publish} onChange={(v) => setConsent({ ...consent, publish: v })} label="Опубликовать моё резюме в Базе резюме — так работодатели смогут найти вас сами (по желанию)" />
          {!consent.pd && <div style={{ fontSize: 12, color: '#B4451E' }}>Чтобы продолжить, отметьте согласие на обработку данных.</div>}
        </div>
      </div>
    );
  };

  const autosave = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--ink-secondary)' }}>
      {state === 'loading'
        ? <><Spinner /> Сохранение…</>
        : state === 'error'
          ? <span style={{ color: '#B4451E', display: 'flex', alignItems: 'center', gap: 6 }}>⚠ Не удалось сохранить — <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#B4451E', fontWeight: 700 }}>повторить</a></span>
          : <><SavedDot /> Все изменения сохранены</>}
    </div>
  );

  const formPane = (
    <div style={{ flex: 1, minWidth: 0 }}>
      {/* Stepper */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isM ? 6 : 10, marginBottom: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-green)' }}>Шаг {step} из {STEPS.length}</span>
        <div style={{ flex: 1, height: 6, background: 'var(--line)', borderRadius: 999, overflow: 'hidden', minWidth: 80 }}>
          <div style={{ width: `${(step / STEPS.length) * 100}%`, height: '100%', background: 'var(--brand-green)', transition: 'width .3s' }} />
        </div>
      </div>
      {!isM && (
        <div style={{ display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
          {STEPS.map((s, i) => (
            <button key={s} onClick={() => setStep(i + 1)} style={{ fontSize: 13, fontWeight: i + 1 === step ? 700 : 500, color: i + 1 === step ? 'var(--ink)' : 'var(--ink-secondary)', background: i + 1 === step ? 'var(--brand-green-tint)' : 'transparent', border: 'none', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>{i + 1}. {s}</button>
          ))}
        </div>
      )}
      <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', margin: '4px 0 4px' }}>{STEPS[step - 1]}</h2>
      <div style={{ marginBottom: 18 }}>{autosave}</div>
      {fields()}
      {aiSuggest()}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 26 }}>
        <DS.Button variant="ghost" size="md" disabled={step === 1} onClick={() => setStep(Math.max(1, step - 1))}>← Назад</DS.Button>
        {step < STEPS.length
          ? <DS.Button variant="secondary" size="md" onClick={() => setStep(step + 1)}>Далее →</DS.Button>
          : <DS.Button variant="primary" size="md" disabled={!consent.pd} onClick={() => go('preview')}>Перейти к резюме</DS.Button>}
      </div>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-tint)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header device={device} active="Услуги" onCta={() => go('constructor')} />
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: isM ? '18px 16px 90px' : '28px 40px', display: 'flex', gap: 28 }}>
        <div style={{ flex: 1, minWidth: 0, background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: isM ? 18 : 28, boxShadow: 'var(--shadow-sm)' }}>{formPane}</div>
        {!isM && (
          <div style={{ width: 360, flexShrink: 0 }}>
            <div style={{ position: 'sticky', top: 90 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-secondary)', marginBottom: 10 }}>Предпросмотр</div>
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: 16, height: 520, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>{preview}</div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile preview button + modal */}
      {isM && (
        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', borderTop: '1px solid var(--line)', padding: '10px 16px', display: 'flex', gap: 10, zIndex: 30 }}>
          <DS.Button variant="outline" size="md" onClick={() => setShowPreview(true)} style={{ flex: 1 }}>Предпросмотр</DS.Button>
          <DS.Button variant="primary" size="md" disabled={step === STEPS.length && !consent.pd} onClick={() => step < STEPS.length ? setStep(step + 1) : go('preview')} style={{ flex: 1 }}>{step < STEPS.length ? 'Далее' : 'К резюме'}</DS.Button>
        </div>
      )}
      {isM && showPreview && (
        <div onClick={() => setShowPreview(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(43,43,43,0.5)', zIndex: 40, display: 'flex', alignItems: 'flex-end' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: '16px 16px 0 0', padding: 16, width: '100%', maxHeight: '82%', overflow: 'auto' }}>
            <div style={{ width: 40, height: 4, background: 'var(--line)', borderRadius: 999, margin: '0 auto 14px' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>{preview}</div>
          </div>
        </div>
      )}
      {!isM && <Footer device={device} />}
    </div>
  );
}

function Spinner() {
  return <span style={{ width: 13, height: 13, border: '2px solid var(--line)', borderTopColor: 'var(--brand-green)', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />;
}
function SavedDot() { return <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-green)', display: 'inline-block' }} />; }
function CIcon({ name, color }) {
  const p = { width: 19, height: 19, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'mic': return <svg {...p}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg>;
    case 'sparkle': return <svg {...p}><path d="M12 3l1.8 4.9L18.5 9l-4.7 1.1L12 15l-1.8-4.9L5.5 9l4.7-1.1z" /><path d="M18 15l.7 1.8L20.5 17.5l-1.8.7L18 20l-.7-1.8L15.5 17.5l1.8-.7z" /></svg>;
    case 'target': return <window.SITE.FeatIcon name="target" color={color} size={19} />;
    case 'mail': return <window.SITE.FeatIcon name="mail" color={color} size={19} />;
    case 'check': return <svg {...p}><path d="M20 6L9 17l-5-5" /></svg>;
    default: return null;
  }
}

window.SITE.Constructor = Constructor;
