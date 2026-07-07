import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";
import { baseResumeCards, getSection } from "@/lib/product/mock";

export default async function ResumeBaseSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section: slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">База резюме</span>
        <h1>{section.name}</h1>
        <p>{section.intro}. Контакты скрыты, действия работодателя disabled.</p>
      </section>
      <Section>
        <div className="resume-base-grid">
          {baseResumeCards.map((resume) => (
            <article className="ui-card base-card" key={resume.id}>
              <Badge tone="neutral">{section.name}</Badge>
              <h3>{resume.position}</h3>
              <p>{resume.city} · опыт {resume.experience} · {resume.salary}</p>
              <button className="ghost-button" disabled type="button">
                Показать контакты · locked
              </button>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
