/**
 * Certification exam changes tracker (/exam-changes/, /de/pruefungsaenderungen/).
 * Every entry must cite an official vendor source checked on `verified`.
 */
export type ExamChangeKind = "retired" | "retiring" | "replaced" | "new-version" | "new-exam" | "outline-update";

export interface ExamChangeDate {
  label: string;
  /** ISO date "2026-08-31", or "2026-07" when the vendor gives only the month. */
  date: string;
}

export interface ExamChange {
  id: string;
  vendor: string;
  exam: string;
  examName: string;
  change: ExamChangeKind;
  summary: string;
  dates: ExamChangeDate[];
  successor: string | null;
  successorName: string | null;
  /** CertRamp catalogue slugs this entry concerns. */
  certramp: string[];
  candidateAdvice: string;
  source: { label: string; url: string };
  verified: string;
  /** German edition of the prose fields (dates and names stay shared). */
  de: {
    summary: string;
    candidateAdvice: string;
    dateLabels: string[];
  };
}
