import { PageShell, Section } from "@/components/layout/AppChrome";
import { faqItems } from "@/lib/product/mock";

export default function FaqPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">FAQ</span>
        <h1>Частые вопросы</h1>
        <p>Всё о сервисе, оплате, форматах и приватности. Не нашли ответ — напишите в поддержку.</p>
      </section>
      <Section>
        <div className="faq-list">
          {faqItems.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
