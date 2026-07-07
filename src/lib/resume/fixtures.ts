import type { ResumeData } from "@/types/resume";
import { defaultPublicFieldsMask, CONSENT_VERSION } from "./defaults";

export const annaSokolovaFixture: ResumeData = {
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
        "Увеличила повторные продажи в своём сегменте на 28% за год.",
        "Подготовила базу типовых коммерческих предложений для 6 отраслей."
      ]
    },
    {
      id: "exp_sales_002",
      company: "АО «Профмаркет»",
      position: "Менеджер по работе с клиентами",
      city: "Москва",
      startDate: "2018-06",
      endDate: "2021-02",
      isCurrent: false,
      description: [
        "Обрабатывала входящие заявки и сопровождала клиентов после сделки.",
        "Поддерживала клиентскую базу из 140 активных компаний.",
        "Сократила среднее время ответа клиенту с 2 часов до 35 минут."
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
  courses: [
    {
      id: "course_001",
      title: "Переговоры в B2B-продажах",
      organization: "Нетология",
      year: "2023",
      description: "Работа с возражениями, структура коммерческого предложения, повторные продажи."
    }
  ],
  skills: [
    { id: "skill_001", name: "B2B-продажи", level: 5, category: "hard" },
    { id: "skill_002", name: "CRM Bitrix24", level: 4, category: "tool" },
    { id: "skill_003", name: "Переговоры", level: 5, category: "soft" }
  ],
  languages: [{ id: "lang_001", name: "Английский", level: "intermediate" }],
  about:
    "Менеджер по продажам с опытом в B2B-сегменте. Сильна в повторных продажах, работе с возражениями и сопровождении клиентов после сделки.",
  photo: null,
  preferences: {
    template: "start",
    accent: "blue",
    showPhoto: false,
    showSalary: true,
    showBirthDate: false
  },
  consent: {
    personalDataAccepted: false,
    personalDataAcceptedAt: "",
    publishToBaseRequested: false,
    distributionConsentAccepted: false,
    distributionConsentAcceptedAt: "",
    consentVersion: CONSENT_VERSION,
    publicFieldsMask: defaultPublicFieldsMask
  }
};
