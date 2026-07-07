import type { ResumeData, TemplateId } from "@/types/resume";
import { annaSokolovaFixture } from "@/lib/resume/fixtures";

export type TemplateMeta = {
  id: TemplateId;
  name: string;
  label: string;
  tier: "free" | "locked";
  description: string;
  bestFor: string;
};

export const templates: TemplateMeta[] = [
  {
    id: "start",
    name: "Старт",
    label: "Бесплатно",
    tier: "free",
    description: "Светло-голубой сайдбар, жёлтые акценты, аккуратная структура без фото.",
    bestFor: "Первое резюме, продажи, клиентский сервис"
  },
  {
    id: "start_photo",
    name: "Старт+фото",
    label: "Бесплатно",
    tier: "free",
    description: "Тот же бесплатный стиль, но с фото кандидата в сайдбаре.",
    bestFor: "Роли, где важна личная коммуникация"
  },
  {
    id: "clean",
    name: "Чистый",
    label: "99 ₽",
    tier: "locked",
    description: "Сдержанный пресет с широким хедером и светлым сайдбаром.",
    bestFor: "Офисные и управленческие позиции"
  },
  {
    id: "compact",
    name: "Компакт",
    label: "99 ₽",
    tier: "locked",
    description: "Плотная вёрстка для длинного опыта без визуального шума.",
    bestFor: "Специалисты с большим опытом"
  },
  {
    id: "one_column",
    name: "Одна колонка",
    label: "99 ₽",
    tier: "locked",
    description: "ATS-friendly структура: один столбец, минимум декора, максимум читаемости.",
    bestFor: "IT, аналитика, международные вакансии"
  },
  {
    id: "academic",
    name: "Академический",
    label: "99 ₽",
    tier: "locked",
    description: "Монохромный serif-пресет для формальной подачи и госсектора.",
    bestFor: "Наука, образование, государственные роли"
  },
  {
    id: "accent",
    name: "Акцент",
    label: "99 ₽",
    tier: "locked",
    description: "Контрастный сайдбар и строгая типографика.",
    bestFor: "Маркетинг, продукт, креативные роли"
  }
];

export const catalogSections = [
  {
    slug: "prodazhi",
    name: "Продажи и клиенты",
    intro: "Резюме для B2B, розницы, аккаунт-менеджмента и клиентского сервиса.",
    professions: [
      { slug: "menedzher-po-prodazham", name: "Менеджер по продажам" },
      { slug: "akkaunt-menedzher", name: "Аккаунт-менеджер" }
    ]
  },
  {
    slug: "it",
    name: "IT и digital",
    intro: "Образцы для разработки, аналитики, поддержки и digital-команд.",
    professions: [
      { slug: "frontend-razrabotchik", name: "Frontend-разработчик" },
      { slug: "biznes-analitik", name: "Бизнес-аналитик" }
    ]
  },
  {
    slug: "logistika",
    name: "Логистика",
    intro: "Резюме для складов, доставки, закупок и операционных ролей.",
    professions: [{ slug: "logist", name: "Логист" }]
  }
];

export const articles = [
  {
    slug: "kak-opisat-opyt-v-rezyume",
    title: "Как описать опыт в резюме без воды",
    category: "Составление резюме",
    excerpt: "Показываем, как превратить обязанности в понятные достижения и не перегрузить текст.",
    readMin: 5
  },
  {
    slug: "chto-pisat-o-sebe",
    title: "Что писать в блоке «О себе»",
    category: "Поиск работы",
    excerpt: "Короткая структура для самопрезентации: роль, сильные стороны, формат работы.",
    readMin: 4
  },
  {
    slug: "rezume-s-foto-ili-bez",
    title: "Резюме с фото или без: как выбрать",
    category: "Шаблоны",
    excerpt: "Когда фото помогает, когда лучше оставить строгий шаблон без изображения.",
    readMin: 3
  }
];

export const faqItems = [
  ["Можно ли скачать PDF бесплатно?", "Да. В бесплатном сценарии PDF доступен без регистрации и без оплаты."],
  ["Сколько живёт публичная ссылка?", "Бесплатная ссылка активна 24 часа с момента создания резюме."],
  ["Какие шаблоны доступны сейчас?", "В бесплатном конструкторе доступны «Старт» и «Старт+фото». Остальные относятся к AI-версии за 99 ₽."],
  ["Нужно ли заводить кабинет?", "Для бесплатного резюме кабинет не нужен: черновик хранится в браузере."],
  ["Что будет подключаться позже?", "Платёжный модуль, кабинет, дополнительные форматы и AI-функции подключаются отдельными этапами."]
];

export const baseResumeCards = [
  {
    id: "sales-1",
    section: "Продажи и клиенты",
    position: "Менеджер по продажам B2B",
    city: "Москва",
    experience: "5 лет",
    salary: "120 000 ₽",
    updatedAt: "обновлено сегодня"
  },
  {
    id: "it-1",
    section: "IT и digital",
    position: "Frontend-разработчик",
    city: "Санкт-Петербург",
    experience: "3 года",
    salary: "180 000 ₽",
    updatedAt: "обновлено вчера"
  },
  {
    id: "logistics-1",
    section: "Логистика",
    position: "Логист",
    city: "Казань",
    experience: "4 года",
    salary: "95 000 ₽",
    updatedAt: "обновлено 2 дня назад"
  }
];

export const adminMetrics = [
  ["Черновики", "128"],
  ["Публичные ссылки", "41"],
  ["SEO-страницы", "17"],
  ["Закрытые модули", "6"]
];

export function getTemplate(id: string) {
  return templates.find((template) => template.id === id);
}

export function getSection(slug: string) {
  return catalogSections.find((section) => section.slug === slug);
}

export function getProfession(sectionSlug: string, professionSlug: string) {
  return getSection(sectionSlug)?.professions.find((profession) => profession.slug === professionSlug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function resumeForTemplate(template: TemplateId): ResumeData {
  return {
    ...annaSokolovaFixture,
    preferences: {
      ...annaSokolovaFixture.preferences,
      template,
      showPhoto: template === "start_photo",
      accent: template === "academic" ? "graphite" : annaSokolovaFixture.preferences.accent
    }
  };
}
