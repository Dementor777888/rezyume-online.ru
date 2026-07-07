import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { catalogSections } from "@/lib/product/mock";

export default function ExamplesPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Примеры резюме</span>
        <h1>SEO-каталог на вымышленных данных</h1>
        <p>Структура разделов и профессий готова для наполнения, без публикации реальных персональных данных.</p>
      </section>
      <Section title="Разделы каталога" text="Пока добавлены демонстрационные направления, дальше можно расширять до полного SEO-ядра.">
        <div className="content-grid">
          {catalogSections.map((section) => (
            <Link className="ui-card content-card" href={`/primery/${section.slug}`} key={section.slug}>
              <h3>{section.name}</h3>
              <p>{section.intro}</p>
              <span>{section.professions.length} demo-профессии</span>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
