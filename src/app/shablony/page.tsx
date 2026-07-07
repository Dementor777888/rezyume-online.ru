import { PageShell, Section } from "@/components/layout/AppChrome";
import { TemplateCard } from "@/components/product/ProductBlocks";
import { templates } from "@/lib/product/mock";

export default function TemplatesPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Шаблоны</span>
        <h1>7 визуальных шаблонов резюме</h1>
        <p>Два бесплатных работают в Slice 1. Пять paid-пресетов показаны как locked preview без подключения оплаты.</p>
      </section>
      <Section title="Галерея" text="Каждый шаблон рендерится на едином Resume.data и ведёт на свою страницу.">
        <div className="template-grid">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
