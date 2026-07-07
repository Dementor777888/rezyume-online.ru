import path from "path";

export function storageRoot() {
  return process.env.STORAGE_ROOT ? path.resolve(process.env.STORAGE_ROOT) : path.join(process.cwd(), "storage");
}

export function pdfStorageDir() {
  return process.env.PDF_STORAGE_DIR ? path.resolve(process.env.PDF_STORAGE_DIR) : path.join(storageRoot(), "pdf");
}

export function pdfFilePath(resumeId: string) {
  return path.join(pdfStorageDir(), `${resumeId}.pdf`);
}
