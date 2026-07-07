import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";
import { articles, getArticle } from "@/lib/product/mock";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <PageShell>
      <article className="article-page">
        <Badge tone="neutral">{article.category}</Badge>
        <h1>{article.title}</h1>
        <p className="lead">{article.excerpt}</p>
        <div className="ui-card article-body">
          <p>
            Это демонстрационная статья. В production сюда подключится редакторский контент из CMS/админки, а сейчас
            страница показывает финальный layout, типографику и состояния.
          </p>
          <h2>Практическая структура</h2>
          <p>
            Начните с роли и результата, затем покажите релевантный опыт, навыки и конкретные достижения. Короткие
            формулировки читаются лучше длинных абзацев.
          </p>
          <Link className="button" href="/constructor">
            Создать резюме бесплатно
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
