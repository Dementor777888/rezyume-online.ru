import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.env.UI_BASE_URL ?? "http://127.0.0.1:3000";
const localPlaywrightLibDir = "/tmp/rezyume-pw-deps/root/usr/lib/x86_64-linux-gnu";

const shots = [
  { path: "/", file: "/tmp/rezyume-ui-home.png", width: 1440, height: 1100 },
  { path: "/constructor", file: "/tmp/rezyume-ui-constructor.png", width: 1440, height: 1100 },
  { path: "/", file: "/tmp/rezyume-ui-mobile-home.png", width: 390, height: 900 },
  { path: "/constructor", file: "/tmp/rezyume-ui-mobile-constructor.png", width: 390, height: 900 }
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function pathExists(path) {
  try {
    await fs.access(path);
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

async function waitForServer() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 60_000) {
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      const body = await response.json();
      if (response.ok && body?.ok && body?.data?.status === "ok") return;
    } catch {
      await wait(1000);
    }
  }
  throw new Error(`Dev server did not become ready at ${baseUrl}.`);
}

const playwrightLibDir = await ensureLocalPlaywrightDeps();
if (playwrightLibDir) {
  process.env.LD_LIBRARY_PATH = [playwrightLibDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":");
}

await waitForServer();

const browser = await chromium.launch({ headless: true });
try {
  for (const shot of shots) {
    const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height } });
    const errors = [];
    page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console error: ${message.text()}`);
    });

    await page.goto(`${baseUrl}${shot.path}`, { waitUntil: "networkidle" });
    await page.addStyleTag({
      content: "nextjs-portal, [data-nextjs-dev-tools-button] { display: none !important; }"
    });
    if (shot.path === "/constructor") {
      await page.waitForSelector("text=Конструктор резюме");
      await page.reload({ waitUntil: "networkidle" });
      await page.waitForSelector("text=Конструктор резюме");
    }

    const hasHorizontalScroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (hasHorizontalScroll) throw new Error(`${shot.path} has horizontal scroll at ${shot.width}px.`);
    if (errors.length > 0) throw new Error(`Browser errors on ${shot.path}:\n${errors.join("\n")}`);

    await page.screenshot({ path: shot.file, fullPage: true });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log("UI screenshots saved:");
for (const shot of shots) console.log(shot.file);
