-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "tier" TEXT NOT NULL DEFAULT 'free',
    "status" TEXT NOT NULL DEFAULT 'draft',
    "title" TEXT NOT NULL DEFAULT 'Моё резюме',
    "publicToken" TEXT NOT NULL,
    "editTokenHash" TEXT,
    "expiresAt" DATETIME,
    "template" TEXT NOT NULL DEFAULT 'start',
    "accent" TEXT NOT NULL DEFAULT 'blue',
    "data" TEXT NOT NULL,
    "pdfPath" TEXT,
    "docxPath" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "consentDistribution" BOOLEAN NOT NULL DEFAULT false,
    "consentVersion" TEXT,
    "consentAt" DATETIME,
    "publicFieldsMask" TEXT,
    "publishToBaseRequested" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Resume_publicToken_key" ON "Resume"("publicToken");

-- CreateIndex
CREATE UNIQUE INDEX "Resume_editTokenHash_key" ON "Resume"("editTokenHash");

-- CreateIndex
CREATE INDEX "Resume_userId_idx" ON "Resume"("userId");

-- CreateIndex
CREATE INDEX "Resume_publicToken_idx" ON "Resume"("publicToken");

-- CreateIndex
CREATE INDEX "Resume_expiresAt_idx" ON "Resume"("expiresAt");

-- CreateIndex
CREATE INDEX "Resume_tier_status_idx" ON "Resume"("tier", "status");
