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
import { ai103Guide } from "./guides/ai-103";
import { irebCpreGuide } from "./guides/ireb-cpre-foundation-level";
import { ccspGuide } from "./guides/isc2-ccsp";
import { md102Guide } from "./guides/md-102";
import { pl900Guide } from "./guides/pl-900";
import { sc200Guide } from "./guides/sc-200";
import { ai103Questions } from "./practice-questions/ai-103";
import { irebCpreQuestions } from "./practice-questions/ireb-cpre-foundation-level";
import { ccspQuestions } from "./practice-questions/isc2-ccsp";
import { md102Questions } from "./practice-questions/md-102";
import { pl900Questions } from "./practice-questions/pl-900";
import { sc200Questions } from "./practice-questions/sc-200";

export const guides: ExamGuide[] = [ccspGuide, sc200Guide, irebCpreGuide, pl900Guide, md102Guide, ai103Guide];

export const questionSets: PracticeQuestionSet[] = [
  ccspQuestions,
  sc200Questions,
  irebCpreQuestions,
  pl900Questions,
  md102Questions,
  ai103Questions,
];
