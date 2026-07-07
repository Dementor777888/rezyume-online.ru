import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.env.UI_BASE_URL ?? "http://127.0.0.1:3000";
const localPlaywrightLibDir = "/tmp/rezyume-pw-deps/root/usr/lib/x86_64-linux-gnu";

const resumeData = {
  schemaVersion: 1,
  contacts: {
    fullName: "Анна Викторовна Соколова",
    position: "Менеджер по продажам B2B",
    phone: "+7 900 123-45-67",
    email: "anna.sokolova@example.com",
    city: "Москва",
    telegram: "@anna_sales_demo",
    website: ""
  },
  personal: {
    birthDate: "1992-04-18",
    citizenship: "Россия",
    relocation: "не готова к переезду",
    businessTrips: "готова к редким командировкам",
    salary: "120 000 ₽",
    employment: "полная занятость",
    schedule: "полный день"
  },
  experience: [
    {
      id: "exp_sales_001",
      company: "ООО «Деловые решения»",
      position: "Ведущий менеджер по продажам",
      city: "Москва",
      startDate: "2021-03",
      endDate: "",
      isCurrent: true,
      description: [
        "Вела цикл B2B-продаж от первого контакта до повторных сделок.",
        "Увеличила повторные продажи в своём сегменте на 28% за год."
      ]
    }
  ],
  education: [
    {
      id: "edu_001",
      institution: "Российский экономический университет имени Г. В. Плеханова",
      faculty: "Менеджмент",
      specialty: "Маркетинг и продажи",
      degree: "Бакалавр",
      startYear: "2010",
      endYear: "2014"
    }
  ],
  courses: [],
  skills: [
    { id: "skill_001", name: "B2B-продажи", level: 5, category: "hard" },
    { id: "skill_002", name: "CRM Bitrix24", level: 4, category: "tool" }
  ],
  languages: [{ id: "lang_001", name: "Английский", level: "intermediate" }],
  about: "Менеджер по продажам с опытом в B2B-сегменте.",
  photo: null,
  preferences: {
    template: "start",
    accent: "blue",
    showPhoto: false,
    showSalary: true,
    showBirthDate: false
  },
  consent: {
    personalDataAccepted: true,
    personalDataAcceptedAt: new Date().toISOString(),
    publishToBaseRequested: false,
    distributionConsentAccepted: false,
    distributionConsentAcceptedAt: "",
    consentVersion: "2026-07-01",
    publicFieldsMask: {
      fullName: false,
      firstNameOnly: true,
      photo: false,
      city: true,
      salary: true,
      age: false,
      phone: false,
      email: false,
      telegram: false,
      website: false,
      experience: true,
      education: true,
      skills: true,
      languages: true,
      about: true
    }
  }
};

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

async function createPublicResumePath() {
  const response = await fetch(`${baseUrl}/api/resumes`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: "Резюме менеджера по продажам",
      data: resumeData,
      template: "start",
      accent: "blue",
      publishToBaseRequested: false
    })
  });
  const body = await response.json().catch(() => null);
  if (!response.ok || !body?.ok || !body?.data?.publicToken) {
    throw new Error(`Could not create public resume for screenshot: ${JSON.stringify(body).slice(0, 500)}`);
  }
  return `/rezume/${body.data.publicToken}`;
}

async function hideDevChrome(page) {
  await page.addStyleTag({
    content: `
      nextjs-portal,
      [data-nextjs-dev-tools-button],
      [data-nextjs-toast],
      .__nextjs-dev-tools,
      body > div[style*="position: fixed"][style*="bottom"][style*="left"] {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `
  });
}

const playwrightLibDir = await ensureLocalPlaywrightDeps();
if (playwrightLibDir) {
  process.env.LD_LIBRARY_PATH = [playwrightLibDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":");
}

await waitForServer();
await createPublicResumePath();

const shots = [
  { path: "/", file: "/tmp/rezyume-home.png", width: 1440, height: 1100 },
  { path: "/constructor", file: "/tmp/rezyume-constructor.png", width: 1440, height: 1100 },
  { path: "/shablony", file: "/tmp/rezyume-templates.png", width: 1440, height: 1100 },
  { path: "/primery", file: "/tmp/rezyume-examples.png", width: 1440, height: 1100 },
  { path: "/baza", file: "/tmp/rezyume-base.png", width: 1440, height: 1100 },
  { path: "/stati/kak-opisat-opyt-v-rezyume", file: "/tmp/rezyume-article.png", width: 1440, height: 1100 },
  { path: "/payment", file: "/tmp/rezyume-payment.png", width: 1440, height: 1100 },
  { path: "/account", file: "/tmp/rezyume-account.png", width: 1440, height: 1100 },
  { path: "/admin", file: "/tmp/rezyume-admin.png", width: 1440, height: 1100 },
  { path: "/", file: "/tmp/rezyume-mobile-home.png", width: 390, height: 900 },
  { path: "/constructor", file: "/tmp/rezyume-mobile-constructor.png", width: 390, height: 900 }
];

const auditPaths = ["/", "/constructor", "/shablony", "/primery", "/baza", "/payment", "/account", "/admin"];
const auditViewports = [
  { width: 1280, height: 900 },
  { width: 768, height: 900 }
];

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
    await hideDevChrome(page);
    if (shot.path === "/constructor") {
      await page.waitForSelector("text=Конструктор резюме");
      await page.reload({ waitUntil: "networkidle" });
      await hideDevChrome(page);
      await page.waitForSelector("text=Конструктор резюме");
    }

    const hasHorizontalScroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (hasHorizontalScroll) throw new Error(`${shot.path} has horizontal scroll at ${shot.width}px.`);
    if (errors.length > 0) throw new Error(`Browser errors on ${shot.path}:\n${errors.join("\n")}`);

    await page.screenshot({ path: shot.file, fullPage: true });
    await page.close();
  }

  for (const viewport of auditViewports) {
    for (const path of auditPaths) {
      const page = await browser.newPage({ viewport });
      const errors = [];
      page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(`console error: ${message.text()}`);
      });
      await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      await hideDevChrome(page);
      const hasHorizontalScroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (hasHorizontalScroll) throw new Error(`${path} has horizontal scroll at ${viewport.width}px.`);
      if (errors.length > 0) throw new Error(`Browser errors on ${path} at ${viewport.width}px:\n${errors.join("\n")}`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}

console.log("UI screenshots saved:");
for (const shot of shots) console.log(shot.file);
