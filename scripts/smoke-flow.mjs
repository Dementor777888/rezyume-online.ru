import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import process from "node:process";
import { chromium } from "playwright";

const port = Number(process.env.SMOKE_PORT ?? 3100);
const baseUrl = `http://127.0.0.1:${port}`;
const localPlaywrightLibDir = "/tmp/rezyume-pw-deps/root/usr/lib/x86_64-linux-gnu";
const draftKey = "rezyume-online:draft:v1";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function request(path, options) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const contentType = response.headers.get("content-type") ?? "";
  const body = contentType.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) {
    throw new Error(`${options?.method ?? "GET"} ${path} failed with ${response.status}: ${JSON.stringify(body).slice(0, 500)}`);
  }
  return { response, body };
}

async function waitForServer() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 60_000) {
    if (serverExited) {
      throw new Error(`Dev server exited before becoming ready with code ${serverExitCode ?? "unknown"}.`);
    }
    try {
      const { body } = await request("/api/health");
      if (body?.ok && body?.data?.status === "ok") return;
    } catch {
      await wait(1000);
    }
  }
  throw new Error("Dev server did not become ready within 60 seconds.");
}

async function runConstructorBrowserSmoke() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const browserErrors = [];

  page.on("pageerror", (error) => {
    browserErrors.push(`pageerror: ${error.message}`);
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      browserErrors.push(`console error: ${message.text()}`);
    }
  });

  try {
    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    await page.locator(".hero").getByRole("link", { name: "Создать резюме бесплатно" }).click();
    await page.waitForURL(`${baseUrl}/constructor`);
    await page.waitForSelector("text=Конструктор резюме");

    await page.getByLabel("ФИО").fill("Иван Петров");
    await page.getByLabel("Должность").fill("Frontend-разработчик");
    await page.waitForFunction(() => document.querySelector("[data-testid='resume-preview']")?.textContent?.includes("Иван Петров"));

    await page.reload({ waitUntil: "networkidle" });
    await page.waitForSelector("text=Конструктор резюме");
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForSelector("text=Конструктор резюме");

    await page.evaluate(
      (key) => window.localStorage.setItem(key, JSON.stringify({ schemaVersion: 1, contacts: { fullName: "Старый черновик" } })),
      draftKey
    );
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForSelector("text=Конструктор резюме");
    await page.waitForTimeout(1000);

    if (browserErrors.length > 0) {
      throw new Error(`Browser runtime errors:\n${browserErrors.join("\n")}`);
    }
  } finally {
    await browser.close();
  }
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

const playwrightLibDir = await ensureLocalPlaywrightDeps();
if (playwrightLibDir) {
  process.env.LD_LIBRARY_PATH = [playwrightLibDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":");
}
const serverEnv = {
  ...process.env,
  APP_URL: baseUrl,
  NEXT_TELEMETRY_DISABLED: "1",
  ...(playwrightLibDir
    ? {
        LD_LIBRARY_PATH: [playwrightLibDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":")
      }
    : {})
};

const server = spawn(
  "npm",
  ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
  {
    cwd: process.cwd(),
    env: serverEnv,
    detached: true,
    stdio: ["ignore", "pipe", "pipe"]
  }
);

let serverExited = false;
let serverExitCode = null;

server.stdout.on("data", (chunk) => process.stdout.write(chunk));
server.stderr.on("data", (chunk) => process.stderr.write(chunk));
server.on("exit", (code) => {
  serverExited = true;
  serverExitCode = code;
});

async function stopServer() {
  if (serverExited || !server.pid) return;

  const waitForExit = new Promise((resolve) => {
    server.once("exit", resolve);
  });

  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    return;
  }

  const stopped = await Promise.race([
    waitForExit.then(() => true),
    wait(5000).then(() => false)
  ]);

  if (!stopped) {
    try {
      process.kill(-server.pid, "SIGKILL");
    } catch {
      // Process already exited.
    }
    await waitForExit.catch(() => undefined);
  }
}

try {
  await waitForServer();
  await request("/");
  await request("/constructor");
  await runConstructorBrowserSmoke();

  const created = await request("/api/resumes", {
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

  const result = created.body.data;
  if (!result?.resumeId || !result?.publicToken || !result?.editToken || !result?.publicUrl || !result?.expiresAt) {
    throw new Error("Create resume response does not contain expected fields.");
  }

  await request(`/rezume/${result.publicToken}`);

  const pdf = await fetch(`${baseUrl}/api/resumes/${result.resumeId}/export/pdf`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ editToken: result.editToken })
  });
  if (!pdf.ok) {
    throw new Error(`PDF export failed with ${pdf.status}: ${await pdf.text()}`);
  }
  if (!pdf.headers.get("content-type")?.includes("application/pdf")) {
    throw new Error("PDF export did not return application/pdf.");
  }
  const bytes = new Uint8Array(await pdf.arrayBuffer());
  const signature = String.fromCharCode(...bytes.slice(0, 4));
  if (signature !== "%PDF") {
    throw new Error("PDF export response is not a PDF file.");
  }

  console.log("Smoke flow passed.");
} finally {
  await stopServer();
}
