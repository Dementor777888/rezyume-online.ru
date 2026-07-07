import { PageShell, Section } from "@/components/layout/AppChrome";
import { TemplateCard } from "@/components/product/ProductBlocks";
import { templates } from "@/lib/product/mock";

export default function TemplatesPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Шаблоны</span>
        <h1>Шаблоны резюме</h1>
        <p>Выберите оформление. Два шаблона бесплатны, остальные — в AI-версии за 99 ₽ один раз.</p>
      </section>
      <Section title="Все шаблоны" text="Бесплатные варианты можно использовать сразу, закрытые пресеты доступны только как preview.">
        <div className="template-grid">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
