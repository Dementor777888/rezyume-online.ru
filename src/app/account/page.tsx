import Link from "next/link";
import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { EmptyState } from "@/components/ui/Primitives";

export default function AccountPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Account shell</span>
        <h1>Мои резюме</h1>
        <p>Визуальный каркас кабинета для будущего paid flow. Реальный кабинет и сессии не реализованы.</p>
      </section>
      <Section>
        <div className="dashboard-grid">
          <EmptyState title="Кабинет пока пуст" text="После подключения paid flow здесь появятся оплаченные резюме, бессрочные ссылки и повторные скачивания." />
          <LockedFeatureCard title="Скачивание DOCX" text="Формат и повторные скачивания будут доступны после функционального подключения paid-модуля." />
        </div>
        <Link className="button" href="/constructor">
          Создать бесплатное резюме
        </Link>
      </Section>
    </PageShell>
  );
}
