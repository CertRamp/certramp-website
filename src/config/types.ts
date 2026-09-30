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

  /** Official exam facts — verify against the vendor's current exam guide; note source + date in `lastReviewed`. */
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
