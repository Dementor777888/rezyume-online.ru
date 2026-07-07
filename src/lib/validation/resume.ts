import { z } from "zod";
import type { ResumeData } from "@/types/resume";
import { defaultResumeData } from "@/lib/resume/defaults";

const emptyToUndefined = (value: unknown) => (value === "" ? undefined : value);
const optionalEmail = z.preprocess(emptyToUndefined, z.string().email("Укажите корректный email").max(120).optional()).default("");
const optionalUrl = z.preprocess(emptyToUndefined, z.string().url("Укажите корректную ссылку").max(240).optional()).default("");
const ym = /^$|^\d{4}-\d{2}$/;
const ymd = /^$|^\d{4}-\d{2}-\d{2}$/;
const year = /^$|^\d{4}$/;

const boundedString = (max: number) => z.string().trim().max(max);

export const resumeContactsSchema = z.object({
  fullName: z.string().trim().min(2, "Укажите имя").max(120),
  position: z.string().trim().min(2, "Укажите должность").max(120),
  phone: boundedString(40),
  email: optionalEmail.transform((value) => value ?? ""),
  city: boundedString(80),
  telegram: boundedString(80),
  website: optionalUrl.transform((value) => value ?? "")
});

export const resumeDataSchema = z.object({
  schemaVersion: z.literal(1),
  contacts: resumeContactsSchema,
  personal: z.object({
    birthDate: z.string().regex(ymd, "Дата должна быть в формате ГГГГ-ММ-ДД"),
    citizenship: boundedString(80),
    relocation: boundedString(120),
    businessTrips: boundedString(120),
    salary: boundedString(80),
    employment: boundedString(80),
    schedule: boundedString(80)
  }),
  experience: z
    .array(
      z.object({
        id: z.string().min(1),
        company: z.string().trim().min(1, "Укажите компанию").max(120),
        position: z.string().trim().min(1, "Укажите должность").max(120),
        city: boundedString(80),
        startDate: z.string().regex(ym, "Дата должна быть в формате ГГГГ-ММ"),
        endDate: z.string().regex(ym, "Дата должна быть в формате ГГГГ-ММ"),
        isCurrent: z.boolean(),
        description: z.array(z.string().trim().min(1).max(300)).max(8)
      })
    )
    .max(15),
  education: z
    .array(
      z.object({
        id: z.string().min(1),
        institution: boundedString(160),
        faculty: boundedString(160),
        specialty: boundedString(160),
        degree: boundedString(160),
        startYear: z.string().regex(year, "Год должен быть в формате ГГГГ"),
        endYear: z.string().regex(year, "Год должен быть в формате ГГГГ")
      })
    )
    .max(10),
  courses: z
    .array(
      z.object({
        id: z.string().min(1),
        title: boundedString(160),
        organization: boundedString(120),
        year: z.string().regex(year, "Год должен быть в формате ГГГГ"),
        description: boundedString(300)
      })
    )
    .max(10),
  skills: z
    .array(
      z.object({
        id: z.string().min(1),
        name: z.string().trim().min(1, "Укажите навык").max(80),
        level: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
        category: z.enum(["hard", "soft", "tool", "other"])
      })
    )
    .max(40),
  languages: z
    .array(
      z.object({
        id: z.string().min(1),
        name: z.string().trim().min(1).max(80),
        level: z.enum(["beginner", "elementary", "intermediate", "upper_intermediate", "advanced", "native"])
      })
    )
    .max(10),
  about: boundedString(1200),
  photo: z
    .object({
      originalPath: z.string().max(3_000_000),
      enhancedPath: z.string().max(3_000_000),
      selectedPath: z.string().max(3_000_000),
      crop: z.object({
        x: z.number(),
        y: z.number(),
        width: z.number(),
        height: z.number(),
        shape: z.enum(["circle", "square"])
      })
    })
    .nullable(),
  preferences: z.object({
    template: z.enum(["start", "start_photo", "clean", "compact", "one_column", "academic", "accent"]),
    accent: z.enum(["blue", "teal", "graphite"]),
    showPhoto: z.boolean(),
    showSalary: z.boolean(),
    showBirthDate: z.boolean()
  }),
  consent: z.object({
    personalDataAccepted: z.boolean(),
    personalDataAcceptedAt: z.string(),
    publishToBaseRequested: z.boolean(),
    distributionConsentAccepted: z.boolean(),
    distributionConsentAcceptedAt: z.string(),
    consentVersion: z.string(),
    publicFieldsMask: z.object({
      fullName: z.boolean(),
      firstNameOnly: z.boolean(),
      photo: z.boolean(),
      city: z.boolean(),
      salary: z.boolean(),
      age: z.boolean(),
      phone: z.boolean(),
      email: z.boolean(),
      telegram: z.boolean(),
      website: z.boolean(),
      experience: z.boolean(),
      education: z.boolean(),
      skills: z.boolean(),
      languages: z.boolean(),
      about: z.boolean()
    })
  })
});

export const createResumeRequestSchema = z.object({
  title: z.string().trim().max(160).optional(),
  data: resumeDataSchema,
  template: z.enum(["start", "start_photo"]).optional(),
  accent: z.enum(["blue", "teal", "graphite"]).optional(),
  publishToBaseRequested: z.literal(false).optional()
});

export function normalizeResumeData(input: unknown): ResumeData {
  return resumeDataSchema.parse({ ...defaultResumeData, ...(input as object) });
}

const stringDraft = z.string().catch("");
const booleanDraft = z.boolean().catch(false);
const defaultConstructorPreferences = {
  template: "start" as const,
  accent: defaultResumeData.preferences.accent,
  showPhoto: defaultResumeData.preferences.showPhoto,
  showSalary: defaultResumeData.preferences.showSalary,
  showBirthDate: defaultResumeData.preferences.showBirthDate
};
const defaultConstructorConsent = {
  ...defaultResumeData.consent,
  publishToBaseRequested: false as const
};

const draftExperienceItemSchema = z.object({
  id: stringDraft,
  company: stringDraft,
  position: stringDraft,
  city: stringDraft,
  startDate: stringDraft,
  endDate: stringDraft,
  isCurrent: booleanDraft,
  description: z.array(z.string()).catch([])
});

const draftEducationItemSchema = z.object({
  id: stringDraft,
  institution: stringDraft,
  faculty: stringDraft,
  specialty: stringDraft,
  degree: stringDraft,
  startYear: stringDraft,
  endYear: stringDraft
});

const draftSkillItemSchema = z.object({
  id: stringDraft,
  name: stringDraft,
  level: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).catch(3),
  category: z.enum(["hard", "soft", "tool", "other"]).catch("hard")
});

const draftLanguageItemSchema = z.object({
  id: stringDraft,
  name: stringDraft,
  level: z.enum(["beginner", "elementary", "intermediate", "upper_intermediate", "advanced", "native"]).catch("intermediate")
});

const draftCourseItemSchema = z.object({
  id: stringDraft,
  title: stringDraft,
  organization: stringDraft,
  year: stringDraft,
  description: stringDraft
});

const resumeDraftSchema = z.object({
  schemaVersion: z.literal(1),
  contacts: z
    .object({
      fullName: stringDraft,
      position: stringDraft,
      phone: stringDraft,
      email: stringDraft,
      city: stringDraft,
      telegram: stringDraft,
      website: stringDraft
    })
    .catch(defaultResumeData.contacts),
  personal: z
    .object({
      birthDate: stringDraft,
      citizenship: stringDraft,
      relocation: stringDraft,
      businessTrips: stringDraft,
      salary: stringDraft,
      employment: stringDraft,
      schedule: stringDraft
    })
    .catch(defaultResumeData.personal),
  experience: z.array(draftExperienceItemSchema).catch([]),
  education: z.array(draftEducationItemSchema).catch([]),
  courses: z.array(draftCourseItemSchema).catch([]),
  skills: z.array(draftSkillItemSchema).catch([]),
  languages: z.array(draftLanguageItemSchema).catch([]),
  about: stringDraft,
  photo: z
    .object({
      originalPath: stringDraft,
      enhancedPath: stringDraft,
      selectedPath: stringDraft,
      crop: z
        .object({
          x: z.number().catch(0),
          y: z.number().catch(0),
          width: z.number().catch(1),
          height: z.number().catch(1),
          shape: z.enum(["circle", "square"]).catch("circle")
        })
        .catch(defaultResumeData.photo?.crop ?? { x: 0, y: 0, width: 1, height: 1, shape: "circle" as const })
    })
    .nullable()
    .catch(null),
  preferences: z
    .object({
      template: z.enum(["start", "start_photo"]).catch(defaultConstructorPreferences.template),
      accent: z.enum(["blue", "teal", "graphite"]).catch(defaultResumeData.preferences.accent),
      showPhoto: z.boolean().catch(defaultResumeData.preferences.showPhoto),
      showSalary: z.boolean().catch(defaultResumeData.preferences.showSalary),
      showBirthDate: z.boolean().catch(defaultResumeData.preferences.showBirthDate)
    })
    .catch(defaultConstructorPreferences),
  consent: z
    .object({
      personalDataAccepted: booleanDraft,
      personalDataAcceptedAt: stringDraft,
      publishToBaseRequested: z.literal(false).catch(false),
      distributionConsentAccepted: booleanDraft,
      distributionConsentAcceptedAt: stringDraft,
      consentVersion: stringDraft,
      publicFieldsMask: z
        .object({
          fullName: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.fullName),
          firstNameOnly: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.firstNameOnly),
          photo: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.photo),
          city: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.city),
          salary: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.salary),
          age: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.age),
          phone: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.phone),
          email: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.email),
          telegram: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.telegram),
          website: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.website),
          experience: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.experience),
          education: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.education),
          skills: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.skills),
          languages: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.languages),
          about: z.boolean().catch(defaultResumeData.consent.publicFieldsMask.about)
        })
        .catch(defaultResumeData.consent.publicFieldsMask)
    })
    .catch(defaultConstructorConsent)
});

export function parseResumeDraft(input: unknown): ResumeData | null {
  const parsed = resumeDraftSchema.safeParse(input);
  return parsed.success ? parsed.data : null;
}
