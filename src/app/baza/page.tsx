import Link from "next/link";
import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";
import { baseResumeCards, catalogSections } from "@/lib/product/mock";

export default function ResumeBasePage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">База резюме</span>
        <h1>Витрина резюме с закрытыми контактами</h1>
        <p>UI-раздел подготовлен на mock data. Работодательский доступ и раскрытие контактов не реализованы.</p>
      </section>
      <Section title="Разделы базы" text="Контакты скрыты. Публикация реальных резюме будет только по отдельному согласию.">
        <div className="chip-row">
          {catalogSections.map((section) => (
            <Link className="secondary-button" href={`/baza/${section.slug}`} key={section.slug}>
              {section.name}
            </Link>
          ))}
        </div>
        <div className="resume-base-grid">
          {baseResumeCards.map((resume) => (
            <article className="ui-card base-card" key={resume.id}>
              <Badge tone="neutral">{resume.section}</Badge>
              <h3>{resume.position}</h3>
              <p>{resume.city} · опыт {resume.experience} · {resume.salary}</p>
              <span>{resume.updatedAt}</span>
              <button className="ghost-button" disabled type="button">
                Показать контакты · locked
              </button>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <LockedFeatureCard title="Доступ работодателя" text="Форма входа и раскрытие контактов будут подключены отдельным модулем с согласием пользователя." />
      </Section>
    </PageShell>
  );
}
