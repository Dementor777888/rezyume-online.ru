import fs from "fs/promises";
import { apiError } from "@/lib/api";
import { prisma } from "@/lib/db/prisma";
import { ensureResumePdf } from "@/lib/export/pdf";
import { hashEditToken } from "@/lib/resume/tokens";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { resumeId, editToken } = (await request.json()) as { resumeId?: string; editToken?: string };
    if (!resumeId || !editToken) return apiError("VALIDATION_ERROR", "Передайте resumeId и editToken.", 400);

    const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
    if (!resume) return apiError("NOT_FOUND", "Резюме не найдено.", 404);
    if (resume.editTokenHash !== hashEditToken(editToken)) return apiError("FORBIDDEN", "Нет доступа к резюме.", 403);

    const { filePath } = await ensureResumePdf(resume.id);
    const bytes = await fs.readFile(filePath);

    return new Response(bytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="resume-${resume.publicToken}.pdf"`
      }
    });
  } catch {
    return apiError("INTERNAL_ERROR", "Не удалось сгенерировать PDF.", 500);
  }
}
