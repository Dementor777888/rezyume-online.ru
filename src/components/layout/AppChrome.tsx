import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Primitives";

const navItems = [
  ["Шаблоны", "/shablony"],
  ["Примеры", "/primery"],
  ["База резюме", "/baza"],
  ["Статьи", "/stati"],
  ["FAQ", "/faq"],
  ["Поддержка", "/support"]
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
            Создать резюме бесплатно
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
          <p>Бесплатный конструктор резюме и будущий SaaS-каркас без скрытых подписок.</p>
        </div>
        <nav aria-label="Нижняя навигация">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link href="/payment">AI-версия · UI-only</Link>
          <Link href="/admin">Admin shell</Link>
        </nav>
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
      <Badge tone="locked">Скоро будет</Badge>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="ghost-button" disabled type="button">
        Подключим позже
      </button>
    </div>
  );
}

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <PageShell>
      <section className="admin-layout">
        <aside className="admin-sidebar">
          <strong>Admin shell</strong>
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/promos">Промокоды mock</Link>
          <Link href="/admin/content">Контент mock</Link>
          <Link href="/admin/seo">SEO mock</Link>
        </aside>
        <div className="admin-main">
          <div className="section-head">
            <span className="eyebrow">UI-only</span>
            <h1>{title}</h1>
            <p>Каркас админки без авторизации, write-actions и опасных API.</p>
          </div>
          {children}
        </div>
      </section>
    </PageShell>
  );
}
