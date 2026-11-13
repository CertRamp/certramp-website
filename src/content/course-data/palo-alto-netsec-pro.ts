import { netsecProPath } from "./paths-2026-11-13";
import type { CourseData } from "./types";

/**
 * Palo Alto Networks NetSec-Pro. Blueprint counts from the live Udemy course on 13 Nov 2026
 * (75 questions per test). Exam facts as verified on 4 Nov 2026 (datasheet June 2026).
 * Only blueprint, exam watch and readiness check for now; path and glossary need verified
 * Palo Alto portfolio information first.
 */
export const netsecPro: CourseData = {
  slug: "palo-alto-netsec-pro",

  examWatch: {
    lastChecked: "2026-11-04",
    examVersion: {
      en: "Exam datasheet dated June 2026; six domains",
      de: "Prüfungsdatenblatt vom Juni 2026; sechs Domains",
    },
    source: {
      label: "Palo Alto Networks: Network Security Professional",
      url: "https://www.paloaltonetworks.com/services/education/palo-alto-networks-netsec-professional",
    },
    entries: [],
  },

  blueprint: {
    rows: [
      { domain: "d1", perTest: [13, 13, 12, 13, 13, 13] },
      { domain: "d2", perTest: [10, 10, 9, 10, 10, 10] },
      { domain: "d3", perTest: [22, 23, 23, 22, 22, 23] },
      { domain: "d4", perTest: [8, 7, 8, 7, 8, 7] },
      { domain: "d5", perTest: [13, 12, 13, 13, 12, 14] },
      { domain: "d6", perTest: [9, 10, 10, 10, 10, 8] },
    ],
    examVersion: { en: "Exam datasheet dated June 2026", de: "Prüfungsdatenblatt vom Juni 2026" },
    counted: "2026-11-13",
  },

  path: netsecProPath,
  readiness: {},
};
