/**
 * Joins guides and question sets with their certification and validates them
 * at build time, so broken content can never be published.
 */
import { guides, questionSets } from "@/content";
import type { ExamDomain, ExamGuide, PracticeQuestionSet } from "@/config/types";
import { getCertification, type ResolvedCertification } from "./certifications";

export const guidePath = (slug: string) => `/guides/${slug}`;
export const questionsPath = (slug: string) => `/practice-questions/${slug}`;

function certFor(slug: string, kind: string): ResolvedCertification & { exam: NonNullable<ResolvedCertification["exam"]> } {
  const cert = getCertification(slug);
  if (!cert) throw new Error(`${kind} "${slug}": no certification with this slug in data/udemy-courses.csv`);
  if (!cert.exam) throw new Error(`${kind} "${slug}": add verified \`exam\` data in src/config/certifications.ts first`);
  return cert as ResolvedCertification & { exam: NonNullable<ResolvedCertification["exam"]> };
}

function validateQuestions(set: PracticeQuestionSet, domains: ExamDomain[]) {
  const ids = new Set<string>();
  for (const q of set.questions) {
    const where = `Question "${q.id}" (${set.slug})`;
    if (ids.has(q.id)) throw new Error(`${where}: duplicate id`);
    ids.add(q.id);
    if (!domains.some((d) => d.id === q.domain)) throw new Error(`${where}: unknown domain "${q.domain}"`);
    if (!q.options.some((o) => o.id === q.answer)) throw new Error(`${where}: answer "${q.answer}" is not an option`);
    if (q.options.length < 3) throw new Error(`${where}: needs at least 3 options`);
  }
}

for (const set of questionSets) validateQuestions(set, certFor(set.slug, "Question set").exam.domains ?? []);
for (const g of guides) certFor(g.slug, "Guide");

export function getGuide(slug: string): ExamGuide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getQuestionSet(slug: string): PracticeQuestionSet | undefined {
  return questionSets.find((s) => s.slug === slug);
}

export function getAllGuides() {
  return guides.map((g) => ({ guide: g, cert: certFor(g.slug, "Guide") }));
}

export function getAllQuestionSets() {
  return questionSets.map((s) => ({ set: s, cert: certFor(s.slug, "Question set") }));
}

/** Free resources available for a certification (for internal linking). */
export function getResources(slug: string) {
  const guide = getGuide(slug);
  const set = getQuestionSet(slug);
  return {
    guide: guide ? { path: guidePath(slug), updated: guide.updated } : null,
    questions: set ? { path: questionsPath(slug), count: set.questions.length, updated: set.updated } : null,
  };
}
