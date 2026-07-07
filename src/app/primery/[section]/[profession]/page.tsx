import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/AppChrome";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { getProfession, getSection, resumeForTemplate } from "@/lib/product/mock";

export default async function ProfessionExamplePage({ params }: { params: Promise<{ section: string; profession: string }> }) {
  const { section: sectionSlug, profession: professionSlug } = await params;
  const section = getSection(sectionSlug);
  const profession = getProfession(sectionSlug, professionSlug);
  if (!section || !profession) notFound();

  const data = {
    ...resumeForTemplate("start"),
    contacts: { ...resumeForTemplate("start").contacts, position: profession.name }
  };

  return (
    <PageShell>
      <section className="seo-example">
        <div>
          <span className="eyebrow">{section.name}</span>
          <h1>Резюме {profession.name.toLowerCase()} — образец 2026</h1>
          <p>
            Демонстрационный пример без реальных персональных данных. Используйте структуру как ориентир и создайте своё
            резюме в конструкторе.
          </p>
          <Link className="button" href="/constructor">
            Создать своё резюме
          </Link>
        </div>
        <div className="seo-example__preview">
          <ResumeTemplate data={data} mode="preview" />
        </div>
      </section>
      <section className="product-section">
        <div className="ui-card article-body">
          <h2>Что важно показать в резюме</h2>
          <p>
            Для роли «{profession.name}» особенно важны измеримые результаты, понятная зона ответственности и навыки,
            которые работодатель сможет быстро сопоставить с вакансией.
          </p>
          <p>
            В опыте лучше писать не только обязанности, но и результат: рост повторных продаж, скорость обработки заявок,
            качество коммуникации, вклад в процессы команды.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
