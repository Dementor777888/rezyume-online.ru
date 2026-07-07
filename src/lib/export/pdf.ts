import fs from "fs/promises";
import { existsSync } from "fs";
import { chromium } from "playwright";
import { prisma } from "@/lib/db/prisma";
import { pdfFilePath, pdfStorageDir } from "@/lib/storage/paths";

const localPlaywrightLibDir = "/tmp/rezyume-pw-deps/root/usr/lib/x86_64-linux-gnu";

function chromiumLaunchEnv() {
  if (!existsSync(localPlaywrightLibDir)) return process.env;
  return {
    ...process.env,
    LD_LIBRARY_PATH: [localPlaywrightLibDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":")
  };
}

export async function ensureResumePdf(resumeId: string) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
  if (!resume) throw new Error("RESUME_NOT_FOUND");

  const filePath = pdfFilePath(resume.id);
  if (resume.pdfPath && existsSync(filePath)) {
    return { filePath, cached: true };
  }

  await fs.mkdir(pdfStorageDir(), { recursive: true });

  const appUrl = process.env.APP_URL ?? "http://localhost:3000";
  const secret = process.env.PRINT_ROUTE_SECRET ?? "local-print-secret";
  const browser = await chromium.launch({ headless: true, env: chromiumLaunchEnv() });
  try {
    const page = await browser.newPage({ locale: "ru-RU" });
    await page.goto(`${appUrl}/print/resume/${resume.id}?secret=${encodeURIComponent(secret)}`, {
      waitUntil: "networkidle",
      timeout: 30000
    });
    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" }
    });
  } finally {
    await browser.close();
  }

  await prisma.resume.update({ where: { id: resume.id }, data: { pdfPath: filePath } });
  return { filePath, cached: false };
}
