/**
 * Per-course data for the certification "building blocks":
 * blueprint coverage, course changelog, exam watch log, certification path,
 * glossary and readiness-check settings. One file per certification slug,
 * registered in ./index.ts. Every block is optional: a page only shows the
 * blocks whose data exists.
 *
 * Rules: dates are ISO ("2026-11-11", or "2026-09" when only the month is known).
 * The changelog never describes question content.
 */

/** Text in every page language. pt, es and fr are prepared but not yet published. */
export interface Localized {
  en: string;
  de: string;
  pt?: string;
  es?: string;
  fr?: string;
}

/* ── Baustein 1: exam watch ──────────────────────────────────────────────── */

export interface ExamWatchEntry {
  /** Date the vendor change was published or takes effect. */
  date: string;
  summary: Localized;
  /** ExamDomain ids affected (empty = whole exam). */
  domains: string[];
  /** Exam version the change refers to, e.g. "Study guide dated January 2026". */
  examVersion?: Localized;
  source: { label: string; url: string };
}

export interface ExamWatch {
  /** Last date the official sources were checked, also when nothing changed. */
  lastChecked: string;
  /** Exam version currently in force, as the vendor states it. */
  examVersion: Localized;
  /** Main official source used for the check. */
  source: { label: string; url: string };
  /** Changes found for this certification, newest first. Exam-wide tracker entries are merged in automatically. */
  entries: ExamWatchEntry[];
}

/* ── Baustein 2: blueprint coverage ──────────────────────────────────────── */

export interface BlueprintRow {
  /** ExamDomain.id in certifications.ts; weight and name come from there. */
  domain: string;
  /** Number of questions in this domain in Test 1 … Test 6. */
  perTest: number[];
}

export interface Blueprint {
  rows: BlueprintRow[];
  /** Exam version the tests are aligned to. */
  examVersion: Localized;
  /** Date the counts were taken from the live course. */
  counted: string;
  /** Which course edition was counted, when the certification has several (e.g. "the German course"). */
  courseNote?: Localized;
}

/* ── Baustein 3: course changelog ────────────────────────────────────────── */

export type CourseChangeKind = "launch" | "new-questions" | "revision" | "correction" | "exam-version";

export interface CourseChange {
  date: string;
  kind: CourseChangeKind;
  /** Practice tests affected (1–6). */
  tests: number[];
  /** Number of questions affected. */
  questions: number;
  /** Optional one-line note. Never quote or describe a question. */
  note?: Localized;
}

/* ── Baustein 4: glossary ────────────────────────────────────────────────── */

export interface GlossaryTerm {
  /** Stable anchor id, e.g. "infiniband". */
  id: string;
  /** English term as it appears in the exam. */
  term: string;
  /** Common abbreviation, if any. */
  abbr?: string;
  /** The term in each page language (often the English term is also used). */
  translations: Localized;
  /** Short definition in each page language. */
  definition: Localized;
  /** ExamDomain id the term belongs to. */
  domain?: string;
}

export interface Glossary {
  terms: GlossaryTerm[];
  /** Date the definitions were last checked against official documentation. */
  reviewed: string;
  sources: { label: string; url: string }[];
}

/* ── Baustein 5: certification path ──────────────────────────────────────── */

export interface PathItem {
  /** Name as the vendor writes it. */
  name: string;
  code?: string;
  /** CertRamp catalogue slug (internal link) … */
  slug?: string;
  /** … or the official page when there is no CertRamp course. */
  url?: string;
  /** Factual one-liner on how it relates, in each page language. */
  relation: Localized;
}

export interface CertPath {
  before: PathItem[];
  after: PathItem[];
  similar: PathItem[];
  /** Comparison pages this certification takes part in (ids from content/compare). */
  compare?: string[];
  /** One-line note on the vendor's own guidance (e.g. "NVIDIA names no required order"). */
  note?: Localized;
  source: { label: string; url: string };
  checked: string;
}

/* ── Baustein 6: readiness check ─────────────────────────────────────────── */

/**
 * Per-test thresholds in percent. At or above `onTrack` the result is read as
 * on track for that stage; at or above `developing` as developing; below as
 * building. Defaults live in src/lib/readiness.ts (with the reasoning); a
 * certification can override single tests here.
 */
export interface TestThreshold {
  onTrack: number;
  developing: number;
}

export interface ReadinessConfig {
  thresholds?: Partial<Record<1 | 2 | 3 | 4 | 5 | 6, TestThreshold>>;
}

/* ── One certification ───────────────────────────────────────────────────── */

export interface CourseData {
  slug: string;
  examWatch?: ExamWatch;
  blueprint?: Blueprint;
  changelog?: CourseChange[];
  glossary?: Glossary;
  path?: CertPath;
  /** Present = the readiness-check tool page is published for this certification. */
  readiness?: ReadinessConfig;
}
