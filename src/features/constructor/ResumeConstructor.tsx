"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Download, Eye, Plus, Save, Trash2 } from "lucide-react";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { createEmptyResumeData, createId } from "@/lib/resume/defaults";
import { annaSokolovaFixture } from "@/lib/resume/fixtures";
import { parseResumeDraft, resumeDataSchema } from "@/lib/validation/resume";
import type { ResumeData, ResumeEducationItem, ResumeExperienceItem, ResumeSkillItem } from "@/types/resume";

const DRAFT_KEY = "rezyume-online:draft:v1";

const steps = ["Контакты", "Опыт", "Образование", "Навыки", "Фото", "Шаблон"];

interface CreateResult {
  resumeId: string;
  publicToken: string;
  publicUrl: string;
  editToken: string;
  expiresAt: string;
}

function updateById<T extends { id: string }>(items: T[], id: string, patch: Partial<T>) {
  return items.map((item) => (item.id === id ? { ...item, ...patch } : item));
}

export function ResumeConstructor() {
  const [data, setData] = useState<ResumeData>(() => createEmptyResumeData());
  const [activeStep, setActiveStep] = useState(0);
  const [draftState, setDraftState] = useState("Черновик готов");
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [result, setResult] = useState<CreateResult | null>(null);
  const [editToken, setEditToken] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraftReady, setIsDraftReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (!raw) {
        setIsDraftReady(true);
        return;
      }

      const draft = parseResumeDraft(JSON.parse(raw));
      if (!draft) {
        window.localStorage.removeItem(DRAFT_KEY);
        setDraftState("Черновик сброшен");
        setIsDraftReady(true);
        return;
      }

      setData(draft);
      setDraftState("Черновик восстановлен");
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
      setDraftState("Черновик сброшен");
    } finally {
      setIsDraftReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isDraftReady) return;
    setDraftState("Сохраняем...");
    const timer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
        setDraftState(`Сохранено ${new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}`);
      } catch {
        setDraftState("Черновик не сохранён");
      }
    }, 700);
    return () => window.clearTimeout(timer);
  }, [data, isDraftReady]);

  const previewData = useMemo(() => data, [data]);

  function patchData(patch: Partial<ResumeData>) {
    setData((current) => ({ ...current, ...patch }));
  }

  function patchContacts(key: keyof ResumeData["contacts"], value: string) {
    setData((current) => ({ ...current, contacts: { ...current.contacts, [key]: value } }));
  }

  function patchPersonal(key: keyof ResumeData["personal"], value: string) {
    setData((current) => ({ ...current, personal: { ...current.personal, [key]: value } }));
  }

  function resetDraft() {
    const empty = createEmptyResumeData();
    setData(empty);
    setResult(null);
    setEditToken("");
    window.localStorage.removeItem(DRAFT_KEY);
    setDraftState("Черновик очищен");
  }

  function loadFixture() {
    setData(structuredClone(annaSokolovaFixture));
    setResult(null);
    setEditToken("");
  }

  async function createResume() {
    setError("");
    setValidationErrors({});
    setIsSubmitting(true);
    const acceptedAt = data.consent.personalDataAcceptedAt || new Date().toISOString();
    const payloadData: ResumeData = {
      ...data,
      consent: {
        ...data.consent,
        personalDataAcceptedAt: acceptedAt,
        publishToBaseRequested: false,
        distributionConsentAccepted: false,
        distributionConsentAcceptedAt: ""
      }
    };

    const parsed = resumeDataSchema.safeParse(payloadData);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path.join(".");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setValidationErrors(nextErrors);
      setError("Проверьте заполненные поля.");
      setIsSubmitting(false);
      const firstPath = parsed.error.issues[0]?.path.join(".") ?? "";
      if (firstPath.startsWith("contacts") || firstPath.startsWith("personal") || firstPath === "about") setActiveStep(0);
      if (firstPath.startsWith("experience")) setActiveStep(1);
      if (firstPath.startsWith("education")) setActiveStep(2);
      if (firstPath.startsWith("skills")) setActiveStep(3);
      if (firstPath.startsWith("photo")) setActiveStep(4);
      if (firstPath.startsWith("preferences") || firstPath.startsWith("consent")) setActiveStep(5);
      return;
    }

    try {
      const response = await fetch("/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: payloadData.contacts.position || "Моё резюме",
          data: payloadData,
          template: payloadData.preferences.template,
          accent: payloadData.preferences.accent,
          publishToBaseRequested: false
        })
      });
      const json = await response.json();
      if (!json.ok) throw new Error(json.error?.message ?? "Не удалось создать резюме");
      setResult(json.data);
      setEditToken(json.data.editToken);
      window.localStorage.setItem("rezyume-online:last-result:v1", JSON.stringify(json.data));
    } catch (exception) {
      setError(exception instanceof Error ? exception.message : "Не удалось создать резюме");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function downloadPdf() {
    if (!result) return;
    setError("");
    const response = await fetch(`/api/resumes/${result.resumeId}/export/pdf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ editToken })
    });
    if (!response.ok) {
      const json = await response.json().catch(() => null);
      setError(json?.error?.message ?? "Не удалось скачать PDF");
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "resume.pdf";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="constructor-layout">
        <section className="panel">
          <div className="constructor-head">
            <div>
              <h1>Конструктор резюме</h1>
              <div className="draft-pill">
                <Save size={15} /> {draftState}
              </div>
            </div>
            <button className="ghost-button" type="button" onClick={loadFixture}>
              Демо-данные
            </button>
          </div>

          <nav className="stepper" aria-label="Шаги конструктора">
            {steps.map((step, index) => (
              <button
                className={activeStep === index ? "active" : ""}
                key={step}
                type="button"
                onClick={() => setActiveStep(index)}
              >
                {index + 1}. {step}
              </button>
            ))}
          </nav>

          {activeStep === 0 ? (
            <ContactsStep
              data={data}
              errors={validationErrors}
              setData={setData}
              patchContacts={patchContacts}
              patchPersonal={patchPersonal}
            />
          ) : null}
          {activeStep === 1 ? <ExperienceStep data={data} errors={validationErrors} patchData={patchData} /> : null}
          {activeStep === 2 ? <EducationStep data={data} errors={validationErrors} patchData={patchData} /> : null}
          {activeStep === 3 ? <SkillsStep data={data} errors={validationErrors} patchData={patchData} /> : null}
          {activeStep === 4 ? <PhotoStep setData={setData} /> : null}
          {activeStep === 5 ? <TemplateStep data={data} setData={setData} /> : null}

          <div className="constructor-actions">
            <button className="ghost-button" type="button" onClick={() => setActiveStep(Math.max(0, activeStep - 1))}>
              Назад
            </button>
            {activeStep < steps.length - 1 ? (
              <button className="secondary-button" type="button" onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}>
                Далее
              </button>
            ) : (
              <button className="button" type="button" disabled={!data.consent.personalDataAccepted || isSubmitting} onClick={createResume}>
                Создать бесплатное резюме
              </button>
            )}
            <button className="ghost-button" type="button" onClick={resetDraft}>
              Сбросить
            </button>
          </div>

          {error ? <p className="error-text">{error}</p> : null}

          {result ? (
            <div className="result-box">
              <strong>Резюме создано. Ссылка активна до {new Date(result.expiresAt).toLocaleString("ru-RU")}.</strong>
              <a className="secondary-button" href={result.publicUrl} target="_blank">
                Открыть публичную ссылку
              </a>
              <button className="button" type="button" onClick={downloadPdf}>
                <Download size={18} /> Скачать PDF бесплатно
              </button>
            </div>
          ) : null}
        </section>

        <aside className="preview-sticky panel" aria-label="Предпросмотр резюме">
          <ResumeTemplate data={previewData} mode="preview" />
        </aside>
      </div>

      <div className="preview-toolbar">
        <button className="button" type="button" onClick={() => setShowMobilePreview(true)} style={{ width: "100%" }}>
          <Eye size={18} /> Посмотреть резюме
        </button>
      </div>

      {showMobilePreview ? (
        <div className="mobile-preview" role="dialog" aria-modal="true">
          <div className="mobile-preview__sheet">
            <button className="ghost-button" type="button" onClick={() => setShowMobilePreview(false)} style={{ marginBottom: 12 }}>
              Закрыть
            </button>
            <ResumeTemplate data={previewData} mode="preview" />
          </div>
        </div>
      ) : null}
    </>
  );
}

function ContactsStep({
  data,
  errors,
  setData,
  patchContacts,
  patchPersonal
}: {
  data: ResumeData;
  errors: Record<string, string>;
  setData: Dispatch<SetStateAction<ResumeData>>;
  patchContacts: (key: keyof ResumeData["contacts"], value: string) => void;
  patchPersonal: (key: keyof ResumeData["personal"], value: string) => void;
}) {
  return (
    <div className="form-grid">
      <Field error={errors["contacts.fullName"]} label="ФИО" value={data.contacts.fullName} onChange={(value) => patchContacts("fullName", value)} />
      <Field error={errors["contacts.position"]} label="Должность" value={data.contacts.position} onChange={(value) => patchContacts("position", value)} />
      <Field error={errors["contacts.phone"]} label="Телефон" value={data.contacts.phone} onChange={(value) => patchContacts("phone", value)} />
      <Field error={errors["contacts.email"]} label="Email" value={data.contacts.email} onChange={(value) => patchContacts("email", value)} />
      <Field label="Город" value={data.contacts.city} onChange={(value) => patchContacts("city", value)} />
      <Field label="Telegram" value={data.contacts.telegram} onChange={(value) => patchContacts("telegram", value)} />
      <Field error={errors["contacts.website"]} label="Сайт или портфолио" value={data.contacts.website} onChange={(value) => patchContacts("website", value)} />
      <Field label="Желаемая зарплата" value={data.personal.salary} onChange={(value) => patchPersonal("salary", value)} />
      <Field error={errors.about} full label="О себе" textarea value={data.about} onChange={(value) => setData((current) => ({ ...current, about: value }))} />
    </div>
  );
}

function ExperienceStep({
  data,
  errors,
  patchData
}: {
  data: ResumeData;
  errors: Record<string, string>;
  patchData: (patch: Partial<ResumeData>) => void;
}) {
  function addItem() {
    const item: ResumeExperienceItem = {
      id: createId("exp"),
      company: "",
      position: "",
      city: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: []
    };
    patchData({ experience: [...data.experience, item] });
  }

  return (
    <div>
      {data.experience.map((item, index) => (
        <div className="item-box" key={item.id}>
          <div className="item-head">
            <strong>Место работы {index + 1}</strong>
            <button className="ghost-button" type="button" onClick={() => patchData({ experience: data.experience.filter((entry) => entry.id !== item.id) })}>
              <Trash2 size={16} />
            </button>
          </div>
          <div className="form-grid">
            <Field error={errors[`experience.${index}.company`]} label="Компания" value={item.company} onChange={(value) => patchData({ experience: updateById(data.experience, item.id, { company: value }) })} />
            <Field error={errors[`experience.${index}.position`]} label="Должность" value={item.position} onChange={(value) => patchData({ experience: updateById(data.experience, item.id, { position: value }) })} />
            <Field label="Город" value={item.city} onChange={(value) => patchData({ experience: updateById(data.experience, item.id, { city: value }) })} />
            <Field error={errors[`experience.${index}.startDate`]} label="Начало, ГГГГ-ММ" value={item.startDate} onChange={(value) => patchData({ experience: updateById(data.experience, item.id, { startDate: value }) })} />
            <Field error={errors[`experience.${index}.endDate`]} label="Окончание, ГГГГ-ММ" value={item.endDate} onChange={(value) => patchData({ experience: updateById(data.experience, item.id, { endDate: value }) })} />
            <label className="field">
              <span>Работаю сейчас</span>
              <input
                checked={item.isCurrent}
                type="checkbox"
                onChange={(event) => patchData({ experience: updateById(data.experience, item.id, { isCurrent: event.target.checked }) })}
              />
            </label>
            <Field
              full
              label="Описание по пунктам"
              textarea
              value={item.description.join("\n")}
              onChange={(value) =>
                patchData({ experience: updateById(data.experience, item.id, { description: value.split("\n").filter(Boolean) }) })
              }
            />
          </div>
        </div>
      ))}
      <button className="secondary-button" type="button" onClick={addItem}>
        <Plus size={16} /> Добавить опыт
      </button>
    </div>
  );
}

function EducationStep({
  data,
  errors,
  patchData
}: {
  data: ResumeData;
  errors: Record<string, string>;
  patchData: (patch: Partial<ResumeData>) => void;
}) {
  function addItem() {
    const item: ResumeEducationItem = {
      id: createId("edu"),
      institution: "",
      faculty: "",
      specialty: "",
      degree: "",
      startYear: "",
      endYear: ""
    };
    patchData({ education: [...data.education, item] });
  }

  return (
    <div>
      {data.education.map((item, index) => (
        <div className="item-box" key={item.id}>
          <div className="item-head">
            <strong>Образование {index + 1}</strong>
            <button className="ghost-button" type="button" onClick={() => patchData({ education: data.education.filter((entry) => entry.id !== item.id) })}>
              <Trash2 size={16} />
            </button>
          </div>
          <div className="form-grid">
            <Field error={errors[`education.${index}.institution`]} label="Учебное заведение" value={item.institution} onChange={(value) => patchData({ education: updateById(data.education, item.id, { institution: value }) })} />
            <Field label="Факультет" value={item.faculty} onChange={(value) => patchData({ education: updateById(data.education, item.id, { faculty: value }) })} />
            <Field label="Специальность" value={item.specialty} onChange={(value) => patchData({ education: updateById(data.education, item.id, { specialty: value }) })} />
            <Field label="Степень" value={item.degree} onChange={(value) => patchData({ education: updateById(data.education, item.id, { degree: value }) })} />
            <Field error={errors[`education.${index}.startYear`]} label="Год начала" value={item.startYear} onChange={(value) => patchData({ education: updateById(data.education, item.id, { startYear: value }) })} />
            <Field error={errors[`education.${index}.endYear`]} label="Год окончания" value={item.endYear} onChange={(value) => patchData({ education: updateById(data.education, item.id, { endYear: value }) })} />
          </div>
        </div>
      ))}
      <button className="secondary-button" type="button" onClick={addItem}>
        <Plus size={16} /> Добавить образование
      </button>
    </div>
  );
}

function SkillsStep({
  data,
  errors,
  patchData
}: {
  data: ResumeData;
  errors: Record<string, string>;
  patchData: (patch: Partial<ResumeData>) => void;
}) {
  function addItem() {
    const item: ResumeSkillItem = { id: createId("skill"), name: "", level: 3, category: "hard" };
    patchData({ skills: [...data.skills, item] });
  }

  return (
    <div>
      {data.skills.map((item, index) => (
        <div className="item-box" key={item.id}>
          <div className="form-grid">
            <Field error={errors[`skills.${index}.name`]} label="Навык" value={item.name} onChange={(value) => patchData({ skills: updateById(data.skills, item.id, { name: value }) })} />
            <label className="field">
              <span>Уровень</span>
              <select value={item.level} onChange={(event) => patchData({ skills: updateById(data.skills, item.id, { level: Number(event.target.value) as ResumeSkillItem["level"] }) })}>
                {[1, 2, 3, 4, 5].map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      ))}
      <button className="secondary-button" type="button" onClick={addItem}>
        <Plus size={16} /> Добавить навык
      </button>
    </div>
  );
}

function PhotoStep({ setData }: { setData: Dispatch<SetStateAction<ResumeData>> }) {
  function onPhoto(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const selectedPath = String(reader.result);
      setData((current) => ({
        ...current,
        photo: {
          originalPath: selectedPath,
          enhancedPath: "",
          selectedPath,
          crop: { x: 0, y: 0, width: 1, height: 1, shape: "circle" }
        },
        preferences: { ...current.preferences, template: "start_photo", showPhoto: true }
      }));
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="form-grid upload-card">
      <label className="field full">
        <span>Фото для шаблона «Старт+фото»</span>
        <input accept="image/png,image/jpeg,image/webp" type="file" onChange={(event) => onPhoto(event.target.files?.[0])} />
      </label>
      <p className="resume-muted">Фото хранится в черновике браузера и используется только в бесплатном резюме.</p>
    </div>
  );
}

function TemplateStep({ data, setData }: { data: ResumeData; setData: Dispatch<SetStateAction<ResumeData>> }) {
  const lockedTemplates = [
    ["clean", "Чистый"],
    ["compact", "Компакт"],
    ["one_column", "Одна колонка"],
    ["academic", "Академический"],
    ["accent", "Акцент"]
  ];

  return (
    <div className="form-grid">
      <label className="field full">
        <span>Шаблон</span>
        <select
          value={data.preferences.template}
          onChange={(event) =>
            setData((current) => ({
              ...current,
              preferences: {
                ...current.preferences,
                template: event.target.value as ResumeData["preferences"]["template"],
                showPhoto: event.target.value === "start_photo"
              }
            }))
          }
        >
          <option value="start">Старт - без фото</option>
          <option value="start_photo">Старт+фото</option>
        </select>
      </label>
      <div className="template-lock-grid full">
        {lockedTemplates.map(([id, name]) => (
          <div className="template-lock-card" key={id}>
            <strong>{name}</strong>
            <span>Будет доступно в AI-версии за 99 ₽ один раз.</span>
          </div>
        ))}
      </div>
      <label className="consent-card full">
        <span>
          <input
            checked={data.consent.personalDataAccepted}
            type="checkbox"
            onChange={(event) =>
              setData((current) => ({
                ...current,
                consent: {
                  ...current.consent,
                  personalDataAccepted: event.target.checked,
                  personalDataAcceptedAt: event.target.checked ? new Date().toISOString() : ""
                }
              }))
            }
          />{" "}
          Я даю согласие на обработку персональных данных для создания резюме и PDF.
        </span>
      </label>
    </div>
  );
}

function Field({
  label,
  error,
  value,
  onChange,
  textarea = false,
  full = false
}: {
  label: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`field ${full ? "full" : ""}`}>
      <span>{label}</span>
      {textarea ? <textarea value={value} onChange={(event) => onChange(event.target.value)} /> : <input value={value} onChange={(event) => onChange(event.target.value)} />}
      {error ? <span className="error-text">{error}</span> : null}
    </label>
  );
}
