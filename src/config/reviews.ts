/**
 * Social proof.
 *
 * Only add GENUINE reviews you can verify, with the reviewer's permission and
 * the source clearly stated. Check the platform's terms before quoting
 * reviews from third-party sites (e.g. Udemy). Never paraphrase a review into
 * something stronger than what the person wrote.
 *
 * While this array is empty, the site shows clearly marked placeholder cards.
 */
export interface Review {
  quote: string;
  author: string;
  /** e.g. "Passed PRINCE2 Foundation" — only if the reviewer said so. */
  context?: string;
  /** e.g. "Udemy review, March 2026" */
  source: string;
  /** Optional link to the original review. */
  sourceUrl?: string;
}

export const reviews: Review[] = [];

/**
 * Optional verified proof points (e.g. total Udemy students, average rating).
 * Add only numbers you can evidence today, and state the source and date.
 */
export interface ProofPoint {
  value: string;
  label: string;
  source: string;
}

export const proofPoints: ProofPoint[] = [];
