import type { Placeholder } from "@/lib/placeholder";

/** A string that is either real content or a P("...") placeholder. */
export type Text = string | Placeholder;

export type CertificationStatus =
  /** Real product. Page is public; indexed once it has an editorial description. */
  | "live"
  /** Announced but not yet available. Page visible; CTAs show "coming soon". */
  | "coming-soon"
  /** Example / unconfirmed entry. Warning banner, noindex, excluded from the sitemap. */
  | "placeholder";

/**
 * How the ClassMarker tests are delivered.
 *  - "redirect": CTAs link straight to the ClassMarker URL (Option A)
 *  - "embed":    CTAs open a CertRamp page that embeds ClassMarker in an iframe (Option B)
 */
export type DeliveryMode = "redirect" | "embed";

export interface Price {
  amount: number;
  /** ISO 4217, e.g. "EUR" or "USD" */
  currency: string;
  /** Optional note shown under the price, e.g. "incl. VAT" — confirm with your tax advisor. */
  note?: Text;
}

export interface FaqItem {
  question: string;
  answer: Text;
}

export interface ExamFact {
  label: string;
  value: Text;
}

export interface Topic {
  title: Text;
  description?: Text;
}

/** One Udemy course, as imported from data/udemy-courses.csv. */
export interface UdemyCourse {
  id: string;
  title: string;
  certification: string;
  slug: string;
  name: string;
  descriptor: string;
  provider: string;
  category: string;
  language: string;
  questions: number | null;
  udemyUrl: string;
}

/**
 * Optional editorial / commercial details for one certification, keyed by slug
 * in src/config/certifications.ts. Everything is optional: a certification page
 * exists as soon as its courses are in the CSV. Details make it richer.
 */
export interface CertificationDetails {
  status?: CertificationStatus;
  /** Show on the home page "Featured practice exams" grid. */
  featured?: boolean;

  /**
   * Your own intro paragraph (2–3 sentences, written for candidates).
   * Pages WITHOUT a description are public but `noindex` — templated pages
   * would be thin content for search engines.
   */
  description?: string;
  /** Overrides the descriptor from the CSV (e.g. the full official certification name). */
  fullName?: string;

  practiceExamCount?: number;
  /** Overrides the question count derived from the CSV. */
  questionCount?: number;
  questionsPerTest?: number;

  /** Direct simulator price. Never shown unless set. */
  price?: Price;

  /** ClassMarker URLs. Env vars CLASSMARKER_FREE_TEST_URL__<SLUG> / CLASSMARKER_PREMIUM_TEST_URL__<SLUG> win. */
  freeTestUrl?: string;
  premiumUrl?: string;
  delivery?: { freeTest?: DeliveryMode; simulator?: DeliveryMode };

  /**
   * Structured, verified exam facts (preferred). When set, the exam overview,
   * topics, sources and lastReviewed are derived from it unless given explicitly.
   */
  exam?: ExamInfo;
  /** Official exam facts as free label/value pairs (legacy — prefer `exam`). */
  examOverview?: ExamFact[];
  /** Official sources for the exam facts (shown under the exam overview). */
  sources?: { label: string; url: string }[];
  /** "What you'll practice" — syllabus areas / domains. */
  topics?: Topic[];
  /** Extra "What's included" bullets (added to the standard six-test bullets). */
  features?: Text[];
  /** Certification-specific FAQ (added before the generic certification FAQs). */
  faq?: FaqItem[];
  /** Extra disclaimer text for this certification. */
  disclaimerNote?: string;

  seo?: { title?: string; description?: string };
  /** ISO date of the last content review. */
  lastReviewed?: string;
}

/* ── Structured exam data (single source for landing page, guide and schema) ── */

export interface SourceLink {
  label: string;
  /** Omit when only the document name can be cited. */
  url?: string;
}

export interface ExamDomain {
  /** Stable id used by practice questions, e.g. "d1". */
  id: string;
  /** Official domain name, e.g. "Cloud Data Security". */
  name: string;
  /** Official weighting, e.g. "17%". Leave out unless published by the provider. */
  weight?: string;
  /** Official objective headings, e.g. "2.3 Design and apply data security technologies and strategies". */
  objectives?: string[];
}

/**
 * Verified exam facts. Every field is optional except sources + lastVerified:
 * leave a field out rather than guessing. Values are display strings because
 * official facts are often ranges ("100–150") or carry conditions.
 */
export interface ExamInfo {
  /** Official certification name, e.g. "Certified Cloud Security Professional". */
  officialName?: string;
  examCode?: string;
  /** e.g. "Exam outline effective 1 August 2026". */
  examVersion?: string;
  questionCount?: string;
  duration?: string;
  format?: string;
  passingScore?: string;
  questionTypes?: string;
  languages?: string[];
  delivery?: string;
  prerequisites?: string;
  status?: "current" | "retiring" | "retired" | "upcoming";
  launchDate?: string;
  retirementDate?: string;
  officialCertificationUrl?: string;
  officialExamUrl?: string;
  domains?: ExamDomain[];
  sources: SourceLink[];
  /** ISO date the facts were last checked against the sources. */
  lastVerified: string;
}

/* ── Content: exam guides and practice questions (src/content/…) ─────────── */

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Numbered steps (rendered as an ordered list). */
  steps?: { title: string; body: string }[];
}

/** An exam guide at /guides/<slug>/. `slug` must match a certification slug. */
export interface ExamGuide {
  slug: string;
  /** Answer-first summary (2–3 sentences). Shown at the top and used as meta description fallback. */
  summary: string;
  whoFor?: string[];
  sections: GuideSection[];
  faq: FaqItem[];
  seo?: { title?: string; description?: string };
  published: string;
  updated: string;
}

export type QuestionDifficulty = "foundation" | "intermediate" | "advanced";

export interface QuestionOption {
  id: string;
  text: string;
  /** Why this option is right or wrong. */
  rationale: string;
}

/**
 * One ORIGINAL practice question. Never copy questions from paid courses,
 * never publish recalled or leaked exam content, never claim a question
 * appears on the real exam.
 */
export interface PracticeQuestion {
  /** Stable id — used as the HTML anchor. Never reuse an id for a different question. */
  id: string;
  /** ExamDomain.id */
  domain: string;
  /** Official objective, e.g. "2.7 Data retention, deletion and archiving". */
  objective: string;
  difficulty: QuestionDifficulty;
  question: string;
  options: QuestionOption[];
  /** QuestionOption.id of the correct answer. */
  answer: string;
  /** The key takeaway (2–3 sentences). */
  explanation: string;
  reference?: SourceLink;
}

/** Free question set at /practice-questions/<slug>/. */
export interface PracticeQuestionSet {
  slug: string;
  intro: string;
  questions: PracticeQuestion[];
  seo?: { title?: string; description?: string };
  published: string;
  updated: string;
}
