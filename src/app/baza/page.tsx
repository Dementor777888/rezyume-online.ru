import Link from "next/link";
import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";
import { baseResumeCards, catalogSections } from "@/lib/product/mock";

export default function ResumeBasePage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">База резюме</span>
        <h1>База резюме</h1>
        <p>Опубликованные резюме кандидатов. Контакты скрыты, публикация реальных данных возможна только по согласию.</p>
      </section>
      <Section title="Разделы базы" text="В Slice 1 это витрина на обезличенных данных без доступа работодателя и раскрытия контактов.">
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
                Показать контакты
              </button>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <LockedFeatureCard title="Доступ работодателя" text="Раскрытие контактов будет подключено отдельным модулем с согласием пользователя." />
      </Section>
    </PageShell>
  );
}
