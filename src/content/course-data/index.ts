import { aair, aaism, ccaoF, ccdvF, securityPlus701, securityPlus801 } from "./batch-2026-11-13";
import { ciaPart1 } from "./cia-part-1";
import { giacGaips } from "./giac-gaips";
import { paa } from "./google-cloud-agentic-architect";
import { ncaAiio } from "./nvidia-nca-aiio";
import { netsecPro } from "./palo-alto-netsec-pro";
import type { CourseData } from "./types";

/** Register every certification's course data here (pilot NCA-AIIO, then the best-selling niche exams). */
export const courseData: CourseData[] = [
  ncaAiio,
  giacGaips,
  ciaPart1,
  paa,
  netsecPro,
  securityPlus701,
  securityPlus801,
  ccdvF,
  ccaoF,
  aair,
  aaism,
];

const time = (d: string) => Date.parse(d.length === 7 ? `${d}-01T00:00:00Z` : `${d}T00:00:00Z`);

/** Latest course changelog date for a slug (no validation; safe to import anywhere). */
export function lastUpdatedFor(slug: string): string | null {
  const log = courseData.find((d) => d.slug === slug)?.changelog ?? [];
  return [...log].sort((a, b) => time(b.date) - time(a.date))[0]?.date ?? null;
}
