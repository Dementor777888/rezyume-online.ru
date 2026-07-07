import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { getSection } from "@/lib/product/mock";

export default async function ExampleSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section: slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Раздел примеров</span>
        <h1>{section.name}</h1>
        <p>{section.intro}</p>
      </section>
      <Section title="Профессии" text="Страницы профессий рендерят пример резюме и текстовые подсказки.">
        <div className="content-grid">
          {section.professions.map((profession) => (
            <Link className="ui-card content-card" href={`/primery/${section.slug}/${profession.slug}`} key={profession.slug}>
              <h3>{profession.name}</h3>
              <p>Образец резюме, навыки, опыт и CTA в конструктор.</p>
              <span>Открыть пример</span>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
