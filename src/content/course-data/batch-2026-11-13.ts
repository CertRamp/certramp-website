import type { CourseData } from "./types";

/**
 * Blueprint coverage and readiness check for further courses, counted from the live
 * Udemy courses on 13 Nov 2026. Exam watch falls back to the verified exam facts and
 * the exam change tracker. Glossary, path and changelog follow per course.
 */
const counted = "2026-11-13";

export const securityPlus701: CourseData = {
  slug: "comptia-security-plus-sy0-701",
  blueprint: {
    rows: [
      { domain: "d1", perTest: [11, 10, 11, 11, 11, 11] },
      { domain: "d2", perTest: [20, 20, 20, 20, 20, 19] },
      { domain: "d3", perTest: [16, 17, 16, 16, 16, 16] },
      { domain: "d4", perTest: [25, 25, 25, 25, 25, 26] },
      { domain: "d5", perTest: [18, 18, 18, 18, 18, 18] },
    ],
    examVersion: { en: "Security+ V7 (SY0-701) exam objectives", de: "Prüfungsziele Security+ V7 (SY0-701)" },
    counted,
    courseNote: { en: "German edition; the French and Spanish editions follow the same objectives", de: "deutsche Ausgabe; die französische und spanische Ausgabe folgen denselben Prüfungszielen" },
  },
  readiness: {},
};

export const securityPlus801: CourseData = {
  slug: "comptia-security-plus-sy0-801",
  blueprint: {
    rows: [
      { domain: "d1", perTest: [14, 14, 14, 14, 14, 14] },
      { domain: "d2", perTest: [22, 22, 22, 22, 22, 22] },
      { domain: "d3", perTest: [17, 17, 17, 17, 17, 17] },
      { domain: "d4", perTest: [24, 24, 24, 24, 24, 24] },
      { domain: "d5", perTest: [13, 13, 13, 13, 13, 13] },
    ],
    examVersion: { en: "Security+ V8 (SY0-801) exam objectives, version 2.0", de: "Prüfungsziele Security+ V8 (SY0-801), Version 2.0" },
    counted,
  },
  readiness: {},
};

export const ccdvF: CourseData = {
  slug: "claude-certified-developer-ccdv-f",
  blueprint: {
    rows: [
      { domain: "d1", perTest: [8, 8, 8, 8, 8, 8] },
      { domain: "d2", perTest: [18, 18, 18, 17, 17, 17] },
      { domain: "d3", perTest: [1, 2, 2, 2, 2, 2] },
      { domain: "d4", perTest: [1, 1, 1, 1, 1, 1] },
      { domain: "d5", perTest: [9, 9, 8, 9, 9, 9] },
      { domain: "d6", perTest: [6, 6, 6, 6, 6, 6] },
      { domain: "d7", perTest: [4, 4, 4, 4, 4, 4] },
      { domain: "d8", perTest: [6, 5, 6, 6, 6, 6] },
    ],
    examVersion: { en: "Exam guide version 1.0 (effective July 2026)", de: "Prüfungsleitfaden Version 1.0 (gültig ab Juli 2026)" },
    counted,
  },
  readiness: {},
};

export const ccaoF: CourseData = {
  slug: "claude-certified-associate-ccao-f",
  blueprint: {
    rows: [
      { domain: "d1", perTest: [8, 9, 8, 8, 9, 8] },
      { domain: "d2", perTest: [13, 12, 13, 13, 12, 13] },
      { domain: "d3", perTest: [7, 7, 8, 7, 7, 7] },
      { domain: "d4", perTest: [10, 10, 9, 10, 9, 10] },
      { domain: "d5", perTest: [7, 7, 7, 7, 8, 7] },
      { domain: "d6", perTest: [9, 9, 9, 9, 9, 9] },
      { domain: "d7", perTest: [6, 6, 6, 6, 6, 6] },
    ],
    examVersion: { en: "Exam guide version 1.0 (effective July 2026)", de: "Prüfungsleitfaden Version 1.0 (gültig ab Juli 2026)" },
    counted,
  },
  readiness: {},
};

export const aair: CourseData = {
  slug: "isaca-aair",
  blueprint: {
    rows: [
      { domain: "d1", perTest: [33, 33, 33, 33, 33, 33] },
      { domain: "d2", perTest: [19, 19, 19, 19, 19, 19] },
      { domain: "d3", perTest: [38, 38, 38, 38, 38, 38] },
    ],
    examVersion: { en: "ISACA AAIR exam content outline", de: "ISACA-AAIR-Prüfungsgliederung" },
    counted,
  },
  readiness: {},
};

export const aaism: CourseData = {
  slug: "isaca-aaism",
  blueprint: {
    rows: [
      { domain: "d1", perTest: [28, 28, 28, 28, 28, 28] },
      { domain: "d2", perTest: [28, 28, 28, 28, 28, 28] },
      { domain: "d3", perTest: [34, 34, 34, 34, 34, 34] },
    ],
    examVersion: { en: "ISACA AAISM exam content outline", de: "ISACA-AAISM-Prüfungsgliederung" },
    counted,
    courseNote: { en: "English edition", de: "englische Ausgabe" },
  },
  readiness: {},
};
