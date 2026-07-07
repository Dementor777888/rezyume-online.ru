import { RESUME_DATA_SCHEMA_VERSION, type ResumeData } from "@/types/resume";

export const CONSENT_VERSION = "2026-07-01";

export const defaultPublicFieldsMask = {
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
};

export const defaultResumeData: ResumeData = {
  schemaVersion: RESUME_DATA_SCHEMA_VERSION,
  contacts: {
    fullName: "",
    position: "",
    phone: "",
    email: "",
    city: "",
    telegram: "",
    website: ""
  },
  personal: {
    birthDate: "",
    citizenship: "",
    relocation: "",
    businessTrips: "",
    salary: "",
    employment: "",
    schedule: ""
  },
  experience: [],
  education: [],
  courses: [],
  skills: [],
  languages: [],
  about: "",
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

export function createEmptyResumeData(): ResumeData {
  return structuredClone(defaultResumeData);
}

export function createId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}
