import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Link as LinkIcon,
  MonitorSmartphone,
  PencilLine,
  ShieldCheck
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { annaSokolovaFixture } from "@/lib/resume/fixtures";

const freeBenefits = ["PDF бесплатно", "Без регистрации", "Ссылка на 24 часа", "2 шаблона", "Черновик в браузере"];

const faqItems = [
  {
    question: "Нужно ли регистрироваться?",
    answer: "Нет. В Slice 1 Вы заполняете резюме, создаёте публичную ссылку и скачиваете PDF без аккаунта."
  },
  {
    question: "PDF правда бесплатный?",
    answer: "Да. Базовый PDF скачивается бесплатно, без водяного знака и без привязки карты."
  },
  {
    question: "Что будет с черновиком?",
    answer: "Черновик сохраняется в localStorage Вашего браузера и восстанавливается после перезагрузки страницы."
  },
  {
    question: "Сколько живёт публичная ссылка?",
    answer: "Бесплатная публичная ссылка действует 24 часа с момента создания резюме."
  },
  {
    question: "Можно ли добавить фото?",
    answer: "Да. В бесплатном шаблоне «Старт+фото» Вы можете загрузить фото как есть."
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">Резюме Онлайн</span>
          <h1>Красивое резюме — бесплатно</h1>
          <p>
            Заполните резюме по шагам, сразу смотрите результат и скачайте PDF без регистрации. Бесплатная ссылка
            активна 24 часа.
          </p>
          <div className="hero__actions">
            <Link className="button button--large" href="/constructor">
              Создать резюме бесплатно
            </Link>
            <span>6 шагов · PDF · публичная ссылка</span>
          </div>
        </div>
        <div className="hero-card" aria-label="Пример резюме">
          <ResumeTemplate data={annaSokolovaFixture} mode="preview" />
        </div>
      </section>

      <section className="info-band" id="how" aria-label="Как это работает">
        <div className="info-item">
          <span className="info-icon">
            <PencilLine size={22} />
          </span>
          <strong>1. Заполните данные</strong>
          <span>Контакты, опыт, образование, навыки, фото и шаблон в понятном визарде.</span>
        </div>
        <div className="info-item">
          <span className="info-icon">
            <MonitorSmartphone size={22} />
          </span>
          <strong>2. Посмотрите результат</strong>
          <span>Live preview обновляется рядом с формой, чтобы Вы сразу видели резюме.</span>
        </div>
        <div className="info-item">
          <span className="info-icon">
            <Download size={22} />
          </span>
          <strong>3. Скачайте PDF</strong>
          <span>Создайте бесплатное резюме, скачайте PDF и получите ссылку на 24 часа.</span>
        </div>
      </section>

      <section className="landing-section" id="free" aria-label="Что входит бесплатно">
        <div className="section-head">
          <span className="eyebrow">Бесплатная версия</span>
          <h2>Всё для первого результата</h2>
          <p>
            Конструктор сохраняет черновик в браузере, показывает резюме рядом с формой и создаёт публичную ссылку без
            регистрации.
          </p>
        </div>
        <div className="benefit-panel">
          <div className="benefit-list">
            {freeBenefits.map((benefit) => (
              <span key={benefit}>
                <CheckCircle2 size={18} /> {benefit}
              </span>
            ))}
          </div>
          <Link className="secondary-button" href="/constructor">
            Заполнить резюме
          </Link>
        </div>
      </section>

      <section className="trust-band" aria-label="Честные условия">
        <div className="trust-card">
          <ShieldCheck size={24} />
          <strong>Без подписки</strong>
          <span>Никаких регулярных списаний в бесплатном сценарии.</span>
        </div>
        <div className="trust-card">
          <FileText size={24} />
          <strong>Без скрытых списаний</strong>
          <span>Для PDF не нужна карта и не нужен аккаунт.</span>
        </div>
        <div className="trust-card">
          <Download size={24} />
          <strong>PDF бесплатно</strong>
          <span>Файл доступен сразу после создания резюме.</span>
        </div>
        <div className="trust-card">
          <Clock3 size={24} />
          <strong>Регистрация не нужна</strong>
          <span>Черновик живёт в браузере, ссылка действует 24 часа.</span>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-label="Частые вопросы">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Коротко о бесплатном резюме</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Резюме Онлайн</strong>
          <span>Бесплатный конструктор резюме для Slice 1</span>
        </div>
        <nav aria-label="Ссылки MVP">
          <a href="#how">Как это работает</a>
          <a href="#free">Бесплатно</a>
          <a href="#faq">FAQ</a>
          <Link href="/constructor">Конструктор</Link>
        </nav>
        <div className="footer-note">
          <LinkIcon size={16} /> Публичная ссылка на бесплатное резюме активна 24 часа.
        </div>
      </footer>
    </main>
  );
}
