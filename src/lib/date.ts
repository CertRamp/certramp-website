/** "2026-09" (month only) compares as the first of the month. */
export function toTime(date: string): number {
  return Date.parse(date.length === 7 ? `${date}-01T00:00:00Z` : `${date}T00:00:00Z`);
}

/** ISO date → "13 November 2026" / "13. November 2026"; month-only dates show month and year. */
export function formatIsoDate(date: string, locale: "en" | "de"): string {
  const opts: Intl.DateTimeFormatOptions =
    date.length === 7 ? { year: "numeric", month: "long", timeZone: "UTC" } : { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" };
  return new Intl.DateTimeFormat(locale, opts).format(new Date(toTime(date)));
}
