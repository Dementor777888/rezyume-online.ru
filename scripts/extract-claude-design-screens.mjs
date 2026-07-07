import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const sourcePath = path.resolve("design_handoff/claude_design/source/claude-design-standalone.html");
const screensDir = path.resolve("design_handoff/claude_design/screens");
const extractedDir = path.resolve("design_handoff/claude_design/extracted");
const localPlaywrightLibDir = "/tmp/rezyume-pw-deps/root/usr/lib/x86_64-linux-gnu";

const screens = [
  { name: "1 · Лендинг", file: "01-landing-desktop.png" },
  { name: "2 · Конструктор", file: "02-constructor-desktop.png" },
  { name: "3 · Загрузка фото", file: "03-photo-upload-desktop.png" },
  { name: "4 · Превью + экспорт", file: "04-preview-export-desktop.png" },
  { name: "5 · Оплата", file: "05-payment-desktop.png" },
  { name: "6 · Мои резюме", file: "06-account-desktop.png" },
  { name: "7 · Вход", file: "07-login-desktop.png" },
  { name: "8 · Публичная ссылка", file: "08-public-resume-desktop.png" },
  { name: "9 · Образцы резюме", file: "09-examples-desktop.png" },
  { name: "10 · Шаблоны", file: "10-templates-desktop.png" },
  { name: "11 · База резюме", file: "11-resume-base-desktop.png" },
  { name: "12 · Статьи", file: "12-articles-desktop.png" },
  { name: "13 · FAQ", file: "13-faq-desktop.png" },
  { name: "14 · Поддержка", file: "14-support-desktop.png" },
  { name: "15 · Кабинет админа", file: "15-admin-desktop.png" },
  { name: "16 · 404", file: "16-404-desktop.png" }
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function ensureLocalPlaywrightDeps() {
  if (await pathExists(localPlaywrightLibDir)) return localPlaywrightLibDir;

  const workdir = "/tmp/rezyume-pw-deps";
  await fs.rm(workdir, { recursive: true, force: true });
  await fs.mkdir(workdir, { recursive: true });

  const download = spawnSync("apt-get", ["download", "libnspr4", "libnss3", "libasound2t64"], {
    cwd: workdir,
    stdio: "ignore"
  });
  if (download.status !== 0) return "";

  const root = `${workdir}/root`;
  await fs.mkdir(root, { recursive: true });
  const files = await fs.readdir(workdir);
  for (const file of files.filter((item) => item.endsWith(".deb"))) {
    const unpack = spawnSync("dpkg-deb", ["-x", file, root], { cwd: workdir, stdio: "ignore" });
    if (unpack.status !== 0) return "";
  }

  return (await pathExists(localPlaywrightLibDir)) ? localPlaywrightLibDir : "";
}

function normalizeVisibleText(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

await fs.mkdir(screensDir, { recursive: true });
await fs.mkdir(extractedDir, { recursive: true });

if (!(await pathExists(sourcePath))) {
  throw new Error(`Claude design source not found: ${sourcePath}`);
}

const playwrightLibDir = await ensureLocalPlaywrightDeps();
if (playwrightLibDir) {
  process.env.LD_LIBRARY_PATH = [playwrightLibDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":");
}

const browser = await chromium.launch({ headless: true });
const extractedText = [];

try {
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(sourcePath).toString(), { waitUntil: "networkidle" });
  await page.waitForSelector("text=UI Kit", { timeout: 30_000 });

  for (const screen of screens) {
    await page.getByRole("button", { name: screen.name, exact: true }).click();
    await wait(450);
    await page.screenshot({ path: path.join(screensDir, screen.file), fullPage: false });

    const text = normalizeVisibleText(await page.locator("body").innerText());
    extractedText.push(`## ${screen.name}\n\n${text.slice(0, 6000)}`);
  }
} catch (error) {
  const page = browser.contexts()[0]?.pages()[0];
  if (page) {
    await page.screenshot({ path: path.join(screensDir, "full-standalone-page.png"), fullPage: true });
  }
  throw error;
} finally {
  await browser.close();
}

await fs.writeFile(path.join(extractedDir, "SCREEN_TEXT_RAW.md"), `${extractedText.join("\n\n---\n\n")}\n`, "utf8");

console.log("Claude design screenshots saved:");
for (const screen of screens) console.log(path.join("design_handoff/claude_design/screens", screen.file));
console.log("Extracted text saved: design_handoff/claude_design/extracted/SCREEN_TEXT_RAW.md");
