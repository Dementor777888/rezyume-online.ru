import { SiteHeader } from "@/components/SiteHeader";
import { ResumeConstructor } from "@/features/constructor/ResumeConstructor";

export default function ConstructorPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <ResumeConstructor />
    </main>
  );
}
