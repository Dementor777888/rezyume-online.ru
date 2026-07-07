import { notFound } from "next/navigation";
import { PublicResumeView } from "@/components/product/ProductBlocks";
import { SiteHeader } from "@/components/SiteHeader";
import { asResumeData, findPublicFreeResume } from "@/lib/resume/repository";

export const dynamic = "force-dynamic";

export default async function PublicResumePage({ params }: { params: Promise<{ publicToken: string }> }) {
  const { publicToken } = await params;
  const result = await findPublicFreeResume(publicToken);
  if (!result) notFound();

  if (result.expired) {
    return (
      <main className="page-shell">
        <SiteHeader />
        <section className="public-page">
          <div className="expired-card">
            <span className="eyebrow">Публичная ссылка</span>
            <h1>Ссылка на резюме истекла</h1>
            <p>Бесплатная публичная ссылка действует 24 часа с момента создания резюме.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="public-page">
        <div className="public-status">
          <span className="eyebrow">Публичное резюме</span>
          <strong>Бесплатная ссылка активна до {result.resume.expiresAt?.toLocaleString("ru-RU")}.</strong>
        </div>
        <PublicResumeView data={asResumeData(result.resume.data)} />
      </section>
    </main>
  );
}
