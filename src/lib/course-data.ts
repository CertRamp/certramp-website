import { comparisons, type Comparison } from "@/content/compare";
import { courseData } from "@/content/course-data";
import type { CourseChange, CourseData, ExamWatchEntry, Localized } from "@/content/course-data/types";
import { getCertification, type ResolvedCertification } from "@/lib/certifications";
import { getExamChanges } from "@/lib/exam-changes";
import { formatIsoDate, toTime } from "@/lib/date";

export { formatIsoDate, toTime };

export type Locale = "en" | "de";

export const t = (l: Localized, locale: Locale) => l[locale] ?? l.en;

let validated = false;

function validate() {
  if (validated) return;
  const slugs = new Set<string>();
  for (const d of courseData) {
    if (slugs.has(d.slug)) throw new Error(`course-data: duplicate slug ${d.slug}`);
    slugs.add(d.slug);
    const cert = getCertification(d.slug);
    if (!cert) throw new Error(`course-data: unknown slug ${d.slug}`);
    const domains = cert.exam?.domains ?? [];
    if (d.blueprint) {
      for (const r of d.blueprint.rows) {
        if (!domains.some((x) => x.id === r.domain)) throw new Error(`course-data ${d.slug}: blueprint domain ${r.domain} not in exam.domains`);
        if (r.perTest.length !== 6) throw new Error(`course-data ${d.slug}: blueprint ${r.domain} needs six test counts`);
      }
    }
    for (const c of d.changelog ?? []) {
      if (Number.isNaN(toTime(c.date))) throw new Error(`course-data ${d.slug}: bad changelog date ${c.date}`);
      if (c.tests.some((n) => n < 1 || n > 6)) throw new Error(`course-data ${d.slug}: changelog test out of range`);
    }
    const ids = new Set<string>();
    for (const g of d.glossary?.terms ?? []) {
      if (ids.has(g.id)) throw new Error(`course-data ${d.slug}: duplicate glossary id ${g.id}`);
      ids.add(g.id);
    }
    for (const p of [...(d.path?.before ?? []), ...(d.path?.after ?? []), ...(d.path?.similar ?? [])]) {
      if (p.slug && !getCertification(p.slug)) throw new Error(`course-data ${d.slug}: path slug ${p.slug} not in catalogue`);
      if (!p.slug && !p.url) throw new Error(`course-data ${d.slug}: path item ${p.name} needs slug or url`);
    }
    for (const id of d.path?.compare ?? []) if (!comparisons.some((c) => c.id === id)) throw new Error(`course-data ${d.slug}: unknown comparison ${id}`);
  }
  for (const c of comparisons) for (const s of [c.a.slug, c.b.slug]) if (!getCertification(s)) throw new Error(`compare ${c.id}: unknown slug ${s}`);
  validated = true;
}

export function getCourseData(slug: string): CourseData | undefined {
  validate();
  return courseData.find((d) => d.slug === slug);
}

export function getAllCourseData(): CourseData[] {
  validate();
  return courseData;
}

/** Newest changelog entries first. */
export function sortedChangelog(d: CourseData): CourseChange[] {
  return [...(d.changelog ?? [])].sort((a, b) => toTime(b.date) - toTime(a.date));
}

/** Date of the latest course change ("Last updated"), or undefined. */
export function courseLastUpdated(slug: string): string | undefined {
  const d = getCourseData(slug);
  return d ? sortedChangelog(d)[0]?.date : undefined;
}

export interface WatchView {
  lastChecked?: string;
  examVersion?: Localized;
  source?: { label: string; url: string };
  entries: (ExamWatchEntry & { trackerId?: string })[];
}

/**
 * Exam watch for any certification: the course-data log when present, plus
 * entries from the exam-change tracker that concern the slug. Falls back to
 * the date the exam facts were last verified.
 */
export function getExamWatch(cert: ResolvedCertification): WatchView {
  const d = getCourseData(cert.slug)?.examWatch;
  const tracker: WatchView["entries"] = getExamChanges()
    .filter((c) => c.certramp.includes(cert.slug))
    .map((c) => ({
      date: c.keyDate,
      summary: { en: c.summary, de: c.de.summary },
      domains: [],
      source: c.source,
      trackerId: c.id,
    }));
  const entries = [...(d?.entries ?? []), ...tracker].sort((a, b) => toTime(b.date) - toTime(a.date));
  const lastChecked = [d?.lastChecked, cert.exam?.lastVerified].filter(Boolean).sort().at(-1);
  return { lastChecked, examVersion: d?.examVersion, source: d?.source ?? cert.sources[0], entries };
}

export function getComparison(id: string): Comparison | undefined {
  validate();
  return comparisons.find((c) => c.id === id);
}

export function getAllComparisons(): Comparison[] {
  validate();
  return comparisons;
}

/* ── Paths ── */
export const glossaryPath = (slug: string, locale: Locale = "en") => (locale === "de" ? `/de/glossar/${slug}` : `/glossary/${slug}`);
export const readinessPath = (slug: string, locale: Locale = "en") =>
  locale === "de" ? `/de/tools/readiness-check/${slug}` : `/tools/readiness-check/${slug}`;
export const questionsMadePath = (locale: Locale = "en") => (locale === "de" ? "/de/wie-unsere-fragen-entstehen" : "/how-our-questions-are-made");
