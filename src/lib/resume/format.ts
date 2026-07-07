export function formatMonth(value: string) {
  if (!value) return "";
  const [year, month] = value.split("-");
  if (!year || !month) return value;
  return `${month}.${year}`;
}

export function formatPeriod(startDate: string, endDate: string, isCurrent = false) {
  const start = formatMonth(startDate);
  const end = isCurrent ? "по настоящее время" : formatMonth(endDate);
  if (start && end) return `${start} - ${end}`;
  return start || end;
}

export function languageLevelLabel(level: string) {
  const labels: Record<string, string> = {
    beginner: "начальный",
    elementary: "базовый",
    intermediate: "средний",
    upper_intermediate: "выше среднего",
    advanced: "продвинутый",
    native: "родной"
  };
  return labels[level] ?? level;
}
