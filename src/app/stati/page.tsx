import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";
import { articles } from "@/lib/product/mock";

export default function ArticlesPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Статьи</span>
        <h1>Блог о резюме и поиске работы</h1>
        <p>Mock-контент для будущего редакторского раздела и SEO.</p>
      </section>
      <Section>
        <div className="content-grid">
          {articles.map((article) => (
            <Link className="ui-card content-card" href={`/stati/${article.slug}`} key={article.slug}>
              <Badge tone="neutral">{article.category}</Badge>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span>{article.readMin} мин чтения</span>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
