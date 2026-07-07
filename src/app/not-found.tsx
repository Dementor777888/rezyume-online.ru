import Link from "next/link";
import { PageShell } from "@/components/layout/AppChrome";

export default function NotFoundPage() {
  return (
    <PageShell>
      <section className="not-found">
        <span className="eyebrow">404</span>
        <h1>Такой страницы нет</h1>
        <p>Возможно, ссылка устарела или страница была перемещена. Но резюме создать никуда не делось.</p>
        <Link className="button" href="/constructor">
          Создать резюме бесплатно
        </Link>
        <Link className="secondary-button" href="/">
          На главную
        </Link>
      </section>
    </PageShell>
  );
}
