/**
 * Builds the certification catalogue from:
 *   1. src/data/udemy-courses.json  (generated from data/udemy-courses.csv)
 *   2. src/config/certifications.ts (optional per-slug details)
 *   3. environment variables        (ClassMarker / Udemy URL overrides)
 *
 * Server-side only (reads non-public env vars).
 */
import courses from "@/data/udemy-courses.json";
import { categoryList, getCategoryByCsvName } from "@/config/categories";
import { certificationDetails } from "@/config/certifications";
import { getVendor } from "@/config/vendors";
import type {
  CertificationStatus,
  DeliveryMode,
  ExamFact,
  FaqItem,
  Price,
  Text,
  Topic,
  UdemyCourse,
} from "@/config/types";

/* ── Languages ─────────────────────────────────────────────────────────── */

const LANGUAGES: Record<string, { code: string; label: string; english: string }> = {
  English: { code: "en", label: "English", english: "English" },
  German: { code: "de", label: "Deutsch", english: "German" },
  French: { code: "fr", label: "Français", english: "French" },
  Spanish: { code: "es", label: "Español", english: "Spanish" },
  Portuguese: { code: "pt", label: "Português", english: "Portuguese" },
};

export function languageInfo(name: string) {
  return LANGUAGES[name] ?? { code: "und", label: name, english: name };
}

/* ── Types ─────────────────────────────────────────────────────────────── */

export interface ResolvedCourse {
  id: string;
  title: string;
  language: string;
  languageCode: string;
  languageLabel: string;
  questions: number | null;
  url: string;
}

export interface ResolvedCta {
  /** Where the button points. `null` = not configured. */
  href: string | null;
  external: boolean;
  mode: DeliveryMode;
  /** Raw ClassMarker URL (used by the embed page). */
  targetUrl: string | null;
}

export interface ResolvedCertification {
  slug: string;
  path: string;
  status: CertificationStatus;
  featured: boolean;
  name: string;
  fullName: string;
  vendorName: string;
  vendorKey: string;
  trademarkNotice: string | null;
  categoryId: string;
  categoryName: string;

  description: string | null;
  /** Editorial content present → indexable. */
  enriched: boolean;

  practiceExamCount: number;
  questionCount: number | null;
  questionsPerTest: number | null;
  price: Price | null;

  /** All Udemy courses for this certification, English first. */
  courses: ResolvedCourse[];
  /** The course the main Udemy button points to (English if available). */
  primaryCourse: ResolvedCourse | null;
  languages: { code: string; label: string }[];
  hasEnglishCourse: boolean;

  examOverview: ExamFact[];
  sources: { label: string; url: string }[];
  topics: Topic[];
  features: Text[];
  faq: FaqItem[];
  disclaimerNote: string | null;

  seo: { title: string; description: string };
  lastReviewed: string | null;

  cta: { freeTest: ResolvedCta; simulator: ResolvedCta };
}

/* ── Helpers ───────────────────────────────────────────────────────────── */

/** "az-900" → "AZ_900" */
export function envKeyForSlug(slug: string): string {
  return slug.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
}

function envUrl(prefix: string, slug: string): string | null {
  const value = process.env[`${prefix}__${envKeyForSlug(slug)}`]?.trim();
  return value ? value : null;
}

function safeUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch {
    return null;
  }
}

function resolveCta(url: string | null, mode: DeliveryMode, embedPath: string, disabled: boolean): ResolvedCta {
  if (!url || disabled) return { href: null, external: false, mode, targetUrl: null };
  if (mode === "embed") return { href: embedPath, external: false, mode, targetUrl: url };
  return { href: url, external: true, mode, targetUrl: url };
}

/** Standard bullets — true for every CertRamp product by design of the methodology. */
const STANDARD_FEATURES: Text[] = [
  "Six practice exams with progressively increasing difficulty",
  "A diagnostic first test to find your starting point",
  "An exam-level test to check real readiness",
  "A CertRamp Challenge test set above exam level",
];

/* ── Build ─────────────────────────────────────────────────────────────── */

function build(): ResolvedCertification[] {
  const groups = new Map<string, UdemyCourse[]>();
  for (const c of courses as UdemyCourse[]) {
    const list = groups.get(c.slug) ?? [];
    list.push(c);
    groups.set(c.slug, list);
  }

  for (const slug of Object.keys(certificationDetails)) {
    if (!groups.has(slug)) throw new Error(`src/config/certifications.ts: slug "${slug}" does not exist in data/udemy-courses.csv`);
  }

  const result: ResolvedCertification[] = [];
  for (const [slug, list] of groups) {
    const first = list[0];
    const d = certificationDetails[slug] ?? {};
    const category = getCategoryByCsvName(first.category);
    const vendor = getVendor(first.provider);
    const path = `/practice-exams/${slug}`;
    const status = d.status ?? "live";
    const comingSoon = status === "coming-soon";

    const envUdemy = safeUrl(envUrl("UDEMY_URL", slug));
    const resolvedCourses: ResolvedCourse[] = list
      .map((c) => {
        const lang = languageInfo(c.language);
        return {
          id: c.id,
          title: c.title,
          language: c.language,
          languageCode: lang.code,
          languageLabel: lang.label,
          questions: c.questions,
          url: safeUrl(c.udemyUrl) ?? "",
        };
      })
      .filter((c) => c.url)
      .sort((a, b) => Number(b.language === "English") - Number(a.language === "English") || a.languageLabel.localeCompare(b.languageLabel));

    let primaryCourse = resolvedCourses[0] ?? null;
    if (envUdemy && primaryCourse) primaryCourse = { ...primaryCourse, url: envUdemy };
    if (primaryCourse) resolvedCourses[0] = primaryCourse;

    const questionCount = d.questionCount ?? primaryCourse?.questions ?? resolvedCourses.find((c) => c.questions)?.questions ?? null;
    const fullName = d.fullName ?? first.descriptor ?? first.name;
    const languages = [...new Map(resolvedCourses.map((c) => [c.languageCode, { code: c.languageCode, label: c.languageLabel }])).values()];

    const free = safeUrl(envUrl("CLASSMARKER_FREE_TEST_URL", slug) ?? d.freeTestUrl);
    const premium = safeUrl(envUrl("CLASSMARKER_PREMIUM_TEST_URL", slug) ?? d.premiumUrl);

    result.push({
      slug,
      path,
      status,
      featured: Boolean(d.featured),
      name: first.name,
      fullName,
      vendorName: vendor.name,
      vendorKey: first.provider,
      trademarkNotice: vendor.trademarkNotice ?? null,
      categoryId: category.id,
      categoryName: category.name,
      description: d.description ?? null,
      enriched: Boolean(d.description),
      practiceExamCount: d.practiceExamCount ?? 6,
      questionCount,
      questionsPerTest: d.questionsPerTest ?? null,
      price: d.price ?? null,
      courses: resolvedCourses,
      primaryCourse,
      languages,
      hasEnglishCourse: resolvedCourses.some((c) => c.language === "English"),
      examOverview: d.examOverview ?? [],
      sources: d.sources ?? [],
      topics: d.topics ?? [],
      features: [...STANDARD_FEATURES, ...(d.features ?? [])],
      faq: d.faq ?? [],
      disclaimerNote: d.disclaimerNote ?? null,
      seo: {
        title: d.seo?.title ?? `${first.name} Practice Exams`,
        description:
          d.seo?.description ??
          `${first.name} practice exams by CertRamp: six progressive tests for the ${fullName} exam, from a diagnostic start to beyond exam level.`,
      },
      lastReviewed: d.lastReviewed ?? null,
      cta: {
        freeTest: resolveCta(free, d.delivery?.freeTest ?? "redirect", `${path}/free-test`, comingSoon),
        simulator: resolveCta(premium, d.delivery?.simulator ?? "redirect", `${path}/exam-simulator`, comingSoon),
      },
    });
  }

  // Stable order: category order, then name.
  const catIndex = new Map(categoryList.map((c, i) => [c.id, i]));
  return result.sort(
    (a, b) => (catIndex.get(a.categoryId) ?? 99) - (catIndex.get(b.categoryId) ?? 99) || a.name.localeCompare(b.name, "en", { numeric: true }),
  );
}

const resolved = build();

export function getAllCertifications(): ResolvedCertification[] {
  return resolved;
}

export function getCertification(slug: string): ResolvedCertification | undefined {
  return resolved.find((c) => c.slug === slug);
}

export function getFeaturedCertifications(): ResolvedCertification[] {
  return resolved.filter((c) => c.featured);
}

/** Indexed by search engines only when live and editorially enriched. */
export function isIndexable(cert: ResolvedCertification): boolean {
  return cert.status !== "placeholder" && cert.enriched;
}

export function getFirstFreeTest(): ResolvedCertification | undefined {
  return resolved.find((c) => c.cta.freeTest.href);
}

/** Real, derived catalogue numbers — safe to show because they come from your own data. */
export function getCatalogueStats() {
  const vendors = new Set(resolved.map((c) => c.vendorKey));
  const langs = new Set(resolved.flatMap((c) => c.languages.map((l) => l.code)));
  const courseCount = resolved.reduce((n, c) => n + c.courses.length, 0);
  return { certifications: resolved.length, providers: vendors.size, languages: langs.size, courses: courseCount };
}

/** Slim, serialisable card data for client components. */
export interface CertificationCardData {
  slug: string;
  path: string;
  name: string;
  fullName: string;
  vendorName: string;
  categoryId: string;
  status: CertificationStatus;
  practiceExamCount: number;
  questionCount: number | null;
  languages: { code: string; label: string }[];
}

export function toCardData(c: ResolvedCertification): CertificationCardData {
  return {
    slug: c.slug,
    path: c.path,
    name: c.name,
    fullName: c.fullName,
    vendorName: c.vendorName,
    categoryId: c.categoryId,
    status: c.status,
    practiceExamCount: c.practiceExamCount,
    questionCount: c.questionCount,
    languages: c.languages,
  };
}
