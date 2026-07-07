import { apiError, ok } from "@/lib/api";
import { asResumeData, findPublicFreeResume } from "@/lib/resume/repository";

export const runtime = "nodejs";

export async function GET(_request: Request, context: { params: Promise<{ publicToken: string }> }) {
  const { publicToken } = await context.params;
  const result = await findPublicFreeResume(publicToken);
  if (!result) return apiError("NOT_FOUND", "Резюме не найдено.", 404);
  if (result.expired) return apiError("EXPIRED", "Ссылка на резюме истекла.", 410);

  return ok({
    publicToken: result.resume.publicToken,
    title: result.resume.title,
    template: result.resume.template,
    accent: result.resume.accent,
    expiresAt: result.resume.expiresAt?.toISOString(),
    data: asResumeData(result.resume.data)
  });
}
