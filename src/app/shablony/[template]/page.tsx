import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/AppChrome";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { Badge } from "@/components/ui/Primitives";
import { getTemplate, resumeForTemplate, templates } from "@/lib/product/mock";

export function generateStaticParams() {
  return templates.map((template) => ({ template: template.id }));
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ template: string }> }) {
  const { template: templateId } = await params;
  const template = getTemplate(templateId);
  if (!template) notFound();

  return (
    <PageShell>
      <section className="template-detail">
        <div className="template-detail__preview">
          <ResumeTemplate data={resumeForTemplate(template.id)} mode="public" />
        </div>
        <aside className="template-detail__aside">
          <Badge tone={template.tier === "free" ? "free" : "locked"}>{template.label}</Badge>
          <h1>{template.name}</h1>
          <p>{template.description}</p>
          <dl>
            <dt>Лучше всего</dt>
            <dd>{template.bestFor}</dd>
            <dt>Статус</dt>
            <dd>{template.tier === "free" ? "Доступен в бесплатном конструкторе" : "Preview-only · функционально подключим позже"}</dd>
          </dl>
          <Link className={template.tier === "free" ? "button" : "ghost-button"} href={template.tier === "free" ? "/constructor" : "/payment"}>
            {template.tier === "free" ? "Создать с этим шаблоном" : "Открыть locked shell"}
          </Link>
          <Link className="secondary-button" href="/shablony">
            Все шаблоны
          </Link>
        </aside>
      </section>
    </PageShell>
  );
}
