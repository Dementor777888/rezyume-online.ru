import { notFound } from "next/navigation";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { prisma } from "@/lib/db/prisma";
import { asResumeData } from "@/lib/resume/repository";

export const dynamic = "force-dynamic";

export default async function PrintResumePage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ secret?: string }>;
}) {
  const { id } = await params;
  const { secret } = await searchParams;
  const expectedSecret = process.env.PRINT_ROUTE_SECRET ?? "local-print-secret";
  if (secret !== expectedSecret) notFound();

  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume) notFound();

  return <ResumeTemplate data={asResumeData(resume.data)} mode="print" />;
}
