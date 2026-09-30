import { P } from "@/lib/placeholder";

/**
 * Product conditions that apply to the CertRamp Exam Simulator in general.
 * These power the FAQ and "What is included" sections.
 *
 * DO NOT fill these with guesses — every answer here is a promise to customers.
 * Per-certification overrides live in certifications.ts.
 */
export const productPolicy = {
  /** e.g. "Unlimited attempts during your access period" */
  attempts: P("How many attempts per test in the Exam Simulator"),

  /** e.g. "12 months from purchase" */
  accessPeriod: P("How long simulator access lasts"),

  /** e.g. "Yes — every question includes an explanation of the correct answer and why the other options are wrong." */
  explanations:
    "Yes. Every question comes with an explanation for each answer option — why the correct answer is right and why each of the other options is wrong.",

  /** e.g. "Yes — tests run in any modern mobile browser." Confirm in ClassMarker on real devices first. */
  mobileAccess: P("Whether the exam simulator works on phones and tablets"),

  /** e.g. "Your score, pass/fail against the practice pass mark and a breakdown by topic." */
  resultsFeedback: P("What the candidate sees after finishing a test"),

  /** e.g. "Timed, like the real exam" */
  timing: P("Whether tests are timed, and how"),

  /** Refund / withdrawal conditions — must match your Terms. */
  refunds: P("Refund and withdrawal policy (must match Terms)"),

  /** How the free practice test differs from the full simulator. */
  freeTestScope: P("What the free practice test contains (e.g. number of questions)"),

  /** Payment is handled by the exam platform checkout. Describe accepted methods once confirmed. */
  paymentMethods: P("Accepted payment methods at checkout"),

  /** How the customer receives access after purchase. */
  accessDelivery: P("How customers receive access after purchase (e.g. email with login link)"),

  /** Explain the difference between Udemy and the direct simulator in your own words. */
  udemyVsSimulator: P("Difference between the Udemy course and the CertRamp Exam Simulator"),
} as const;

/**
 * Readiness guidance shown on the free-test result page.
 * These bands are CertRamp's own study guidance — they are NOT official pass marks
 * and must never be presented as such. Adjust thresholds to your methodology.
 */
export const readinessBands = [
  {
    min: 0,
    max: 49,
    label: "Building",
    summary: "You have gaps to close before exam level. Start with the foundation tests and review every explanation.",
    nextStep: "Begin with Test 2 — Foundation.",
  },
  {
    min: 50,
    max: 69,
    label: "Developing",
    summary: "You have a working base. Focus on the areas you missed and progress through the development tests.",
    nextStep: "Work through Test 3 — Development.",
  },
  {
    min: 70,
    max: 84,
    label: "Approaching exam level",
    summary: "You are close. Test yourself under exam-level conditions and target your weak areas.",
    nextStep: "Take Test 4 — Exam Level.",
  },
  {
    min: 85,
    max: 100,
    label: "Strong",
    summary: "A strong result. Push beyond exam level so certification day feels routine.",
    nextStep: "Challenge yourself with Tests 5 and 6.",
  },
] as const;
