import { prisma } from "@/lib/db/prisma";
import type { ResumeData } from "@/types/resume";

export function serializeResumeData(data: ResumeData) {
  return JSON.stringify(data);
}

export function asResumeData(value: string): ResumeData {
  return JSON.parse(value) as ResumeData;
}

export async function findPublicFreeResume(publicToken: string) {
  const resume = await prisma.resume.findUnique({ where: { publicToken } });
  if (!resume || resume.status !== "published" || resume.tier !== "free") return null;
  if (resume.expiresAt && resume.expiresAt.getTime() < Date.now()) return { expired: true as const, resume };
  return { expired: false as const, resume };
}
