import Link from "next/link";
import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { EmptyState } from "@/components/ui/Primitives";

export default function AccountPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Личный кабинет</span>
        <h1>Мои резюме</h1>
        <p>Правки и повторные скачивания будут доступны после подключения AI-версии. Сейчас кабинет не создаётся.</p>
      </section>
      <Section>
        <div className="dashboard-grid">
          <EmptyState title="Кабинет пока пуст" text="После подключения платного контура здесь появятся сохранённые резюме, бессрочные ссылки и повторные скачивания." />
          <LockedFeatureCard title="Скачивание DOCX" text="Формат и повторные скачивания будут доступны после функционального подключения paid-модуля." />
        </div>
        <Link className="button" href="/constructor">
          Создать бесплатное резюме
        </Link>
      </Section>
    </PageShell>
  );
}
