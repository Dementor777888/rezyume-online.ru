import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
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
        <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
          <div>
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
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "24px 20px 48px" }}>
        <div className="panel" style={{ marginBottom: 18 }}>
          Бесплатная ссылка активна до {result.resume.expiresAt?.toLocaleString("ru-RU")}.
        </div>
        <ResumeTemplate data={asResumeData(result.resume.data)} mode="public" />
      </section>
    </main>
  );
}
