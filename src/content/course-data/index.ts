import { ncaAiio } from "./nvidia-nca-aiio";
import type { CourseData } from "./types";

/** Register every certification's course data here (pilot: NCA-AIIO). */
export const courseData: CourseData[] = [ncaAiio];

const time = (d: string) => Date.parse(d.length === 7 ? `${d}-01T00:00:00Z` : `${d}T00:00:00Z`);

/** Latest course changelog date for a slug (no validation; safe to import anywhere). */
export function lastUpdatedFor(slug: string): string | null {
  const log = courseData.find((d) => d.slug === slug)?.changelog ?? [];
  return [...log].sort((a, b) => time(b.date) - time(a.date))[0]?.date ?? null;
}
