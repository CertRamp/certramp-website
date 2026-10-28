import { examChanges } from "@/content/exam-changes";
import type { ExamChange } from "@/content/exam-changes/types";
import { getCertification } from "@/lib/certifications";
import { getDeLinks } from "@/lib/content-de";
import { getResources } from "@/lib/content";

export const examChangesPath = "/exam-changes";
export const deExamChangesPath = "/de/pruefungsaenderungen";

/** "2026-07" (month only) compares as the first day of that month. */
function toTime(date: string): number {
  return Date.parse(date.length === 7 ? `${date}-01T00:00:00Z` : `${date}T00:00:00Z`);
}

export function formatChangeDate(date: string, locale: "en" | "de"): string {
  const opts: Intl.DateTimeFormatOptions =
    date.length === 7 ? { year: "numeric", month: "long", timeZone: "UTC" } : { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" };
  return new Intl.DateTimeFormat(locale, opts).format(new Date(toTime(date)));
}

export interface ChangeLink {
  label: { en: string; de: string };
  href: string;
}

export interface ResolvedExamChange extends ExamChange {
  /** Soonest date today or later (upcoming), else the latest past date. */
  keyDate: string;
  upcoming: boolean;
  links: ChangeLink[];
}

function linksFor(slugs: string[]): ChangeLink[] {
  const links: ChangeLink[] = [];
  for (const slug of slugs) {
    const cert = getCertification(slug);
    if (!cert) continue;
    const res = getResources(slug);
    const de = getDeLinks(slug);
    if (res.questions) links.push({ label: { en: `Free ${cert.name} questions`, de: `${cert.name}: kostenlose Übungsfragen` }, href: res.questions.path });
    if (de) links.push({ label: { en: `${cert.name} questions in German`, de: `${cert.name}: Übungsfragen auf Deutsch` }, href: de.questions });
    if (res.guide) links.push({ label: { en: `${cert.name} exam guide`, de: `${cert.name}: Prüfungsleitfaden (englisch)` }, href: res.guide.path });
    links.push({ label: { en: `${cert.name} practice exams`, de: `${cert.name}: Übungsprüfungen` }, href: cert.path });
  }
  return links;
}

let cache: ResolvedExamChange[] | null = null;

/** Resolved at build time; "upcoming" is relative to the build date. */
export function getExamChanges(): ResolvedExamChange[] {
  if (cache) return cache;
  const now = Date.now() - 24 * 3600 * 1000;
  const ids = new Set<string>();
  cache = examChanges.map((c) => {
    if (ids.has(c.id)) throw new Error(`exam-changes: duplicate id ${c.id}`);
    ids.add(c.id);
    if (!c.dates.length) throw new Error(`exam-changes: ${c.id} has no dates`);
    if (c.de.dateLabels.length !== c.dates.length) throw new Error(`exam-changes: ${c.id} German date labels do not match`);
    if (!/^https:\/\//.test(c.source.url)) throw new Error(`exam-changes: ${c.id} needs an https source`);
    for (const d of c.dates) if (Number.isNaN(toTime(d.date))) throw new Error(`exam-changes: ${c.id} bad date ${d.date}`);
    for (const s of c.certramp) if (!getCertification(s)) throw new Error(`exam-changes: ${c.id} unknown slug ${s}`);
    const sorted = [...c.dates].map((d) => d.date).sort((a, b) => toTime(a) - toTime(b));
    const next = sorted.find((d) => toTime(d) >= now);
    return { ...c, keyDate: next ?? sorted[sorted.length - 1], upcoming: Boolean(next), links: linksFor(c.certramp) };
  });
  return cache;
}

export function getUpcomingChanges() {
  return getExamChanges()
    .filter((c) => c.upcoming)
    .sort((a, b) => toTime(a.keyDate) - toTime(b.keyDate) || a.vendor.localeCompare(b.vendor));
}

export function getRecentChanges() {
  return getExamChanges()
    .filter((c) => !c.upcoming)
    .sort((a, b) => toTime(b.keyDate) - toTime(a.keyDate) || a.vendor.localeCompare(b.vendor));
}

export function lastVerified(): string {
  return getExamChanges()
    .map((c) => c.verified)
    .sort()
    .at(-1)!;
}
