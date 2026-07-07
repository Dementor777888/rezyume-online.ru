import Link from "next/link";
import type { ReactNode } from "react";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { Badge, Card } from "@/components/ui/Primitives";
import { resumeForTemplate, type TemplateMeta } from "@/lib/product/mock";
import type { ResumeData } from "@/types/resume";

export function ResumePreviewFrame({ children }: { children: ReactNode }) {
  return <div className="product-preview-frame">{children}</div>;
}

export function TemplateCard({ template }: { template: TemplateMeta }) {
  return (
    <Card className="template-card">
      <Link className="template-card__preview" href={`/shablony/${template.id}`}>
        <ResumeTemplate data={resumeForTemplate(template.id)} mode="preview" />
      </Link>
      <div className="template-card__body">
        <div className="template-card__head">
          <h3>{template.name}</h3>
          <Badge tone={template.tier === "free" ? "free" : "locked"}>{template.label}</Badge>
        </div>
        <p>{template.description}</p>
        <span>{template.bestFor}</span>
        {template.tier === "free" ? (
          <Link className="secondary-button" href="/constructor">
            Использовать бесплатно
          </Link>
        ) : (
          <Link className="ghost-button" href="/payment" aria-disabled="true">
            Смотреть шаблон
          </Link>
        )}
      </div>
    </Card>
  );
}

export function PublicResumeView({ data }: { data: ResumeData }) {
  return (
    <div className="public-resume-frame">
      <ResumeTemplate data={data} mode="public" />
    </div>
  );
}

export function MarketingGrid({ items }: { items: Array<[string, string]> }) {
  return (
    <div className="marketing-grid">
      {items.map(([title, text]) => (
        <Card key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
        </Card>
      ))}
    </div>
  );
}
