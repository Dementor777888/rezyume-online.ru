import { ZodError } from "zod";
import { apiError, ok } from "@/lib/api";
import { prisma } from "@/lib/db/prisma";
import { serializeResumeData } from "@/lib/resume/repository";
import { createEditToken, createPublicToken, hashEditToken } from "@/lib/resume/tokens";
import { createResumeRequestSchema } from "@/lib/validation/resume";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = createResumeRequestSchema.parse(await request.json());

    if (!body.data.consent.personalDataAccepted) {
      return apiError("VALIDATION_ERROR", "Примите согласие на обработку персональных данных.", 400);
    }

    const acceptedAt = body.data.consent.personalDataAcceptedAt || new Date().toISOString();
    const template = body.data.preferences.showPhoto ? "start_photo" : body.data.preferences.template;
    if (template !== "start" && template !== "start_photo") {
      return apiError("VALIDATION_ERROR", "В бесплатной версии доступны только шаблоны start и start_photo.", 400);
    }

    const dataForStorage = {
      ...body.data,
      preferences: { ...body.data.preferences, template },
      consent: {
        ...body.data.consent,
        personalDataAcceptedAt: acceptedAt,
        publishToBaseRequested: false,
        distributionConsentAccepted: false,
        distributionConsentAcceptedAt: ""
      }
    };

    const publicToken = createPublicToken();
    const editToken = createEditToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const origin = new URL(request.url).origin;

    const resume = await prisma.resume.create({
      data: {
        title: body.title || body.data.contacts.position || "Моё резюме",
        tier: "free",
        status: "published",
        publicToken,
        editTokenHash: hashEditToken(editToken),
        expiresAt,
        template,
        accent: dataForStorage.preferences.accent,
        data: serializeResumeData(dataForStorage),
        publishToBaseRequested: false,
        consentDistribution: false,
        consentVersion: dataForStorage.consent.consentVersion,
        consentAt: new Date(acceptedAt),
        publicFieldsMask: JSON.stringify(dataForStorage.consent.publicFieldsMask)
      }
    });

    return ok({
      resumeId: resume.id,
      publicToken: resume.publicToken,
      publicUrl: `${origin}/rezume/${resume.publicToken}`,
      editToken,
      expiresAt: resume.expiresAt?.toISOString()
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return apiError("VALIDATION_ERROR", "Проверьте заполненные поля.", 400, error.issues);
    }
    return apiError("INTERNAL_ERROR", "Не удалось создать резюме.", 500);
  }
}
