/**
 * German content: paths, lookups and build-time validation.
 * A German page is only published when the certification has verified exam
 * data and a German Udemy course; numbers must match the English source of truth.
 */
import { deContents } from "@/content/de";
import type { DeContent } from "@/config/types";
import { getCertification, type ResolvedCertification, type ResolvedCourse } from "./certifications";

export const deHubPath = "/de";
export const deGuidePath = (slug: string) => `/de/leitfaden/${slug}`;
export const deQuestionsPath = (slug: string) => `/de/uebungsfragen/${slug}`;

export type ResolvedDe = {
  de: DeContent;
  cert: ResolvedCertification & { exam: NonNullable<ResolvedCertification["exam"]> };
  name: string;
  germanCourse: ResolvedCourse;
};

function resolve(de: DeContent): ResolvedDe {
  const where = `German content "${de.slug}"`;
  const cert = getCertification(de.slug);
  if (!cert) throw new Error(`${where}: no certification with this slug`);
  if (!cert.exam) throw new Error(`${where}: certification has no verified exam data`);
  const germanCourse = cert.courses.find((c) => c.language === "German");
  if (!germanCourse) throw new Error(`${where}: no German Udemy course in the CSV`);
  if (de.guide.slug !== de.slug || de.questions.slug !== de.slug) throw new Error(`${where}: guide/questions slug mismatch`);

  const official = cert.exam.domains ?? [];
  if (official.length !== de.domains.length) throw new Error(`${where}: ${de.domains.length} domains, English has ${official.length}`);
  for (const d of de.domains) {
    const en = official.find((x) => x.id === d.id);
    if (!en) throw new Error(`${where}: unknown domain id "${d.id}"`);
    const norm = (w?: string) => (w ?? "").replace(/[^0-9%–\-~]/g, "");
    if (norm(en.weight) && norm(en.weight).slice(0, 5) !== norm(d.weight).slice(0, 5))
      throw new Error(`${where}: weight of ${d.id} ("${d.weight}") differs from English ("${en.weight}")`);
  }
  const ids = new Set<string>();
  for (const q of de.questions.questions) {
    const w = `${where}, question "${q.id}"`;
    if (ids.has(q.id)) throw new Error(`${w}: duplicate id`);
    ids.add(q.id);
    if (!de.domains.some((d) => d.id === q.domain)) throw new Error(`${w}: unknown domain "${q.domain}"`);
    if (!q.options.some((o) => o.id === q.answer)) throw new Error(`${w}: answer is not an option`);
  }
  return { de, cert: cert as ResolvedDe["cert"], name: de.name ?? cert.name, germanCourse };
}

const resolved = deContents.map(resolve);

export function getAllDe(): ResolvedDe[] {
  return resolved;
}

export function getDe(slug: string): ResolvedDe | undefined {
  return resolved.find((r) => r.de.slug === slug);
}

/** German pages for a certification, if any (for hreflang and cross-links from English pages). */
export function getDeLinks(slug: string) {
  const r = getDe(slug);
  return r ? { guide: deGuidePath(slug), questions: deQuestionsPath(slug) } : null;
}
