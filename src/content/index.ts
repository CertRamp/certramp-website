/**
 * Content registry — exam guides and free practice-question sets.
 *
 * To add content for a certification:
 *   1. Make sure the certification has verified `exam` data in src/config/certifications.ts
 *      (a guide or question set is rejected at build time without it).
 *   2. Create src/content/guides/<slug>.ts and/or src/content/practice-questions/<slug>.ts.
 *   3. Register the export below.
 * Pages, sitemap entries, internal links and structured data follow automatically.
 */
import type { ExamGuide, PracticeQuestionSet } from "@/config/types";
import { ccspGuide } from "./guides/isc2-ccsp";
import { ccspQuestions } from "./practice-questions/isc2-ccsp";

export const guides: ExamGuide[] = [ccspGuide];

export const questionSets: PracticeQuestionSet[] = [ccspQuestions];
