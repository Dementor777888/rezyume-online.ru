export const RESUME_DATA_SCHEMA_VERSION = 1 as const;

export type ResumeSchemaVersion = typeof RESUME_DATA_SCHEMA_VERSION;

export type TemplateId =
  | "start"
  | "start_photo"
  | "clean"
  | "compact"
  | "one_column"
  | "academic"
  | "accent";

export type FreeTemplateId = "start" | "start_photo";
export type AccentId = "blue" | "teal" | "graphite";
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type LanguageLevel =
  | "beginner"
  | "elementary"
  | "intermediate"
  | "upper_intermediate"
  | "advanced"
  | "native";

export interface ResumeData {
  schemaVersion: ResumeSchemaVersion;
  contacts: ResumeContacts;
  personal: ResumePersonal;
  experience: ResumeExperienceItem[];
  education: ResumeEducationItem[];
  courses: ResumeCourseItem[];
  skills: ResumeSkillItem[];
  languages: ResumeLanguageItem[];
  about: string;
  photo: ResumePhoto | null;
  preferences: ResumePreferences;
  consent: ResumeConsentState;
}

export interface ResumeContacts {
  fullName: string;
  position: string;
  phone: string;
  email: string;
  city: string;
  telegram: string;
  website: string;
}

export interface ResumePersonal {
  birthDate: string;
  citizenship: string;
  relocation: string;
  businessTrips: string;
  salary: string;
  employment: string;
  schedule: string;
}

export interface ResumeExperienceItem {
  id: string;
  company: string;
  position: string;
  city: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string[];
}

export interface ResumeEducationItem {
  id: string;
  institution: string;
  faculty: string;
  specialty: string;
  degree: string;
  startYear: string;
  endYear: string;
}

export interface ResumeCourseItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface ResumeSkillItem {
  id: string;
  name: string;
  level: SkillLevel;
  category: "hard" | "soft" | "tool" | "other";
}

export interface ResumeLanguageItem {
  id: string;
  name: string;
  level: LanguageLevel;
}

export interface ResumePhoto {
  originalPath: string;
  enhancedPath: string;
  selectedPath: string;
  crop: ResumePhotoCrop;
}

export interface ResumePhotoCrop {
  x: number;
  y: number;
  width: number;
  height: number;
  shape: "circle" | "square";
}

export interface ResumePreferences {
  template: TemplateId;
  accent: AccentId;
  showPhoto: boolean;
  showSalary: boolean;
  showBirthDate: boolean;
}

export interface ResumeConsentState {
  personalDataAccepted: boolean;
  personalDataAcceptedAt: string;
  publishToBaseRequested: boolean;
  distributionConsentAccepted: boolean;
  distributionConsentAcceptedAt: string;
  consentVersion: string;
  publicFieldsMask: PublicFieldsMask;
}

export interface PublicFieldsMask {
  fullName: boolean;
  firstNameOnly: boolean;
  photo: boolean;
  city: boolean;
  salary: boolean;
  age: boolean;
  phone: boolean;
  email: boolean;
  telegram: boolean;
  website: boolean;
  experience: boolean;
  education: boolean;
  skills: boolean;
  languages: boolean;
  about: boolean;
}
