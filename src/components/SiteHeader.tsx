import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand__copy">
            <strong>Резюме Онлайн</strong>
            <small>Ваш опыт - наши возможности</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Основная навигация">
          <Link href="/#how">Как это работает</Link>
          <Link href="/#free">Бесплатно</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <Link className="button" href="/constructor">
          Создать резюме бесплатно
        </Link>
      </div>
    </header>
  );
}
