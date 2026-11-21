/**
 * Dedicated pages for single exam changes (pilot, 2026-11-21).
 * Each page targets searches like "CS0-003 retirement" and reuses the facts of
 * the matching exam-changes entry; only the framing text lives here.
 * Add a page only when CertRamp has a course for the successor exam.
 */
export interface ExamChangeDetailPage {
  /** URL slug under /exam-changes/. */
  slug: string;
  /** id of the entry in exam-changes/index.ts. */
  changeId: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  faq: { q: string; a: string }[];
}

export const examChangeDetailPages: ExamChangeDetailPage[] = [
  {
    slug: "cs0-003-retirement",
    changeId: "comptia-cs0-003",
    title: "CompTIA CySA+ CS0-003 Retirement: Dates and What to Take Next",
    seoTitle: "CS0-003 Retirement Date 2026: CySA+ CS0-004 Next",
    description:
      "CompTIA CySA+ CS0-003 retires on 22 December 2026 (English). CS0-004 (V4) launched on 23 June 2026. Key dates, the new exam format and which version to take.",
    intro:
      "CompTIA replaces CySA+ V3 (CS0-003) with CySA+ V4 (CS0-004). Here are the official retirement dates, what the new exam looks like and which version to prepare for if you are studying now.",
    faq: [
      {
        q: "When does CS0-003 retire?",
        a: "The English CS0-003 exam retires on 22 December 2026. The Japanese, Portuguese and Spanish versions retire on 23 March 2027.",
      },
      {
        q: "What replaces CS0-003?",
        a: "CySA+ V4 with the exam code CS0-004. CompTIA launched it on 23 June 2026. It has a maximum of 85 questions, 165 minutes and a passing score of 750 on a scale of 100 to 900.",
      },
      {
        q: "Should I still take CS0-003 or switch to CS0-004?",
        a: "If your CS0-003 exam is booked before 22 December 2026 and you are well prepared, you can still take it in English. If you are starting now, prepare for CS0-004, because CS0-003 study material does not cover the V4 objectives.",
      },
    ],
  },
];

export const examChangeDetailBase = "/exam-changes";

export function examChangeDetailPath(slug: string): string {
  return `${examChangeDetailBase}/${slug}`;
}

export function getDetailPageForChange(changeId: string): ExamChangeDetailPage | undefined {
  return examChangeDetailPages.find((p) => p.changeId === changeId);
}
