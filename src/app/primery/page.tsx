import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { catalogSections } from "@/lib/product/mock";

export default function ExamplesPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Образцы резюме</span>
        <h1>Образцы резюме</h1>
        <p>17 разделов · более 500 профессий. Выберите профессию и возьмите готовый пример за основу.</p>
      </section>
      <Section title="Разделы" text="Первые направления уже доступны в каркасе каталога и работают на вымышленных данных.">
        <div className="content-grid">
          {catalogSections.map((section) => (
            <Link className="ui-card content-card" href={`/primery/${section.slug}`} key={section.slug}>
              <h3>{section.name}</h3>
              <p>{section.intro}</p>
              <span>{section.professions.length} профессии</span>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
