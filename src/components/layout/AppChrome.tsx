import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Primitives";

const navItems = [
  ["Шаблоны", "/shablony"],
  ["Образцы", "/primery"],
  ["База резюме", "/baza"],
  ["Статьи", "/stati"],
  ["FAQ", "/faq"],
  ["Поддержка", "/support"]
] as const;

const footerColumns = [
  {
    title: "Продукт",
    links: [
      ["Конструктор", "/constructor"],
      ["Образцы резюме", "/primery"],
      ["Шаблоны", "/shablony"]
    ]
  },
  {
    title: "Компания",
    links: [
      ["О сервисе", "/"],
      ["Блог", "/stati"],
      ["Контакты", "/support"]
    ]
  },
  {
    title: "Поддержка",
    links: [
      ["Частые вопросы", "/faq"],
      ["Помощь", "/support"],
      ["Политика данных", "/faq"]
    ]
  }
] as const;

export function AppHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner app-header__inner">
        <Link className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand__copy">
            <strong>Резюме Онлайн</strong>
            <small>Ваш опыт - наши возможности</small>
          </span>
        </Link>
        <nav className="site-nav app-nav" aria-label="Основная навигация">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="app-header__actions">
          <Link className="ghost-button" href="/login">
            Вход
          </Link>
          <Link className="button" href="/constructor">
            Создать резюме
          </Link>
        </div>
      </div>
    </header>
  );
}

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer__wave" aria-hidden="true" />
      <div className="app-footer__inner">
        <div>
          <strong>Резюме Онлайн</strong>
          <p>Ваш опыт — наши возможности. Красивое резюме бесплатно, AI-версия — 99 ₽ один раз.</p>
        </div>
        <nav className="app-footer__columns" aria-label="Нижняя навигация">
          {footerColumns.map((column) => (
            <div className="app-footer__column" key={column.title}>
              <span>{column.title}</span>
              {column.links.map(([label, href]) => (
                <Link key={`${column.title}-${label}-${href}`} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="app-footer__legal">
        © 2026 Резюме Онлайн · Сервис создания резюме, который работает
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="page-shell">
      <AppHeader />
      {children}
      <AppFooter />
    </main>
  );
}

export function Section({
  eyebrow,
  title,
  text,
  children,
  id
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section className="product-section" id={id}>
      {title ? (
        <div className="section-head">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function LockedFeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="locked-card">
      <Badge tone="locked">Закрыто в Slice 1</Badge>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="ghost-button" disabled type="button">
        Будет доступно позже
      </button>
    </div>
  );
}

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <PageShell>
      <section className="admin-layout">
        <aside className="admin-sidebar">
          <strong>Кабинет админа</strong>
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/promos">Промокоды</Link>
          <Link href="/admin/content">Контент</Link>
          <Link href="/admin/seo">SEO</Link>
        </aside>
        <div className="admin-main">
          <div className="section-head">
            <span className="eyebrow">Закрытый раздел</span>
            <h1>{title}</h1>
            <p>Визуальная зона управления контентом без авторизации, write-actions и опасных API.</p>
          </div>
          {children}
        </div>
      </section>
    </PageShell>
  );
}
