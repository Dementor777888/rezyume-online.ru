import crypto from "crypto";

export function createPublicToken() {
  return `rzo_${crypto.randomBytes(18).toString("base64url")}`;
}

export function createEditToken() {
  return `rzo_edit_${crypto.randomBytes(24).toString("hex")}`;
}

export function hashEditToken(editToken: string) {
  return crypto.createHash("sha256").update(editToken).digest("hex");
}
