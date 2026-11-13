/**
 * Readiness check logic (Baustein 6). Pure functions, shared by the tool page
 * and unit-style checks. All results are study guidance, never a prediction.
 */
import type { TestThreshold } from "@/content/course-data/types";

export type TestNo = 1 | 2 | 3 | 4 | 5 | 6;
export const TESTS: TestNo[] = [1, 2, 3, 4, 5, 6];

/**
 * Default thresholds per test (percent), overridable per certification in course data.
 *
 * Why these values:
 *  - Test 1 (baseline) has deliberately low bars: it is a starting-point reading.
 *    Around 60% after no preparation already shows a solid base.
 *  - Tests 2 and 3 build depth; the bars rise towards exam level.
 *  - Test 4 is written at exam level and is the most telling result. 80% leaves a
 *    margin above typical vendor pass marks (often 65–75%, many vendors do not
 *    publish theirs) for exam-day nerves and unfamiliar wording.
 *  - Tests 5 and 6 are harder than the exam on purpose, so lower scores there are
 *    expected; 70% and 65% on them indicate the same readiness as 80% on Test 4.
 */
export const DEFAULT_THRESHOLDS: Record<TestNo, TestThreshold> = {
  1: { onTrack: 60, developing: 40 },
  2: { onTrack: 70, developing: 55 },
  3: { onTrack: 75, developing: 60 },
  4: { onTrack: 80, developing: 65 },
  5: { onTrack: 70, developing: 55 },
  6: { onTrack: 65, developing: 50 },
};

export function thresholdsFor(over?: Partial<Record<TestNo, TestThreshold>>): Record<TestNo, TestThreshold> {
  return { ...DEFAULT_THRESHOLDS, ...(over ?? {}) };
}

/* ── Tolerant input parsing ─────────────────────────────────────────────── */

export type Parsed<T> = { ok: true; value: T | null } | { ok: false; error: "format" | "range" | "total" };

/** "72", "72%", " 72,5 % ", "72.5" → 72.5. Empty → null. */
export function parsePercent(raw: string): Parsed<number> {
  const s = raw.replace(/\s+/g, "").replace(/%$/, "").replace(",", ".");
  if (s === "") return { ok: true, value: null };
  if (!/^\d{1,3}(\.\d+)?$/.test(s)) return { ok: false, error: "format" };
  const n = Number(s);
  if (n < 0 || n > 100) return { ok: false, error: "range" };
  return { ok: true, value: n };
}

/**
 * Domain result: "15/20", "15 / 20", "15 von 20", "15 of 20", "75%", or "15"
 * (count, needs the domain's question total). Returns correct/total.
 */
export function parseDomain(raw: string, expectedTotal?: number): Parsed<{ correct: number; total: number }> {
  const s = raw.trim().toLowerCase().replace(/\s+/g, " ");
  if (s === "") return { ok: true, value: null };
  const frac = /^(\d{1,3}) ?(?:\/|von|of|de|sur) ?(\d{1,3})$/.exec(s);
  if (frac) {
    const correct = Number(frac[1]);
    const total = Number(frac[2]);
    if (total === 0 || correct > total) return { ok: false, error: "range" };
    return { ok: true, value: { correct, total } };
  }
  if (/%$/.test(s) || /[.,]/.test(s)) {
    const p = parsePercent(s);
    if (!p.ok) return p;
    if (p.value === null) return { ok: true, value: null };
    if (!expectedTotal) return { ok: false, error: "total" };
    return { ok: true, value: { correct: Math.round((p.value / 100) * expectedTotal), total: expectedTotal } };
  }
  if (/^\d{1,3}$/.test(s)) {
    if (!expectedTotal) return { ok: false, error: "total" };
    const correct = Number(s);
    if (correct > expectedTotal) return { ok: false, error: "range" };
    return { ok: true, value: { correct, total: expectedTotal } };
  }
  return { ok: false, error: "format" };
}

/** ISO date from <input type="date">; must be today or later to plan. */
export function daysUntil(iso: string, today = new Date()): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const d = Date.parse(`${iso}T00:00:00Z`);
  const t = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  return Number.isNaN(d) ? null : Math.round((d - t) / 86400000);
}

/* ── Evaluation ─────────────────────────────────────────────────────────── */

export type Band = "on-track" | "developing" | "building";

export function bandFor(test: TestNo, score: number, th: Record<TestNo, TestThreshold>): Band {
  const x = th[test];
  return score >= x.onTrack ? "on-track" : score >= x.developing ? "developing" : "building";
}

export interface DomainInfo {
  id: string;
  name: string;
  /** Official weight as a fraction (0.38), or null when not published. */
  weight: number | null;
}

/** "38%" → 0.38; "40–45%" → 0.425 (midpoint); unknown → null. */
export function weightFraction(w?: string): number | null {
  if (!w) return null;
  const nums = w.match(/\d+(?:[.,]\d+)?/g)?.map((n) => Number(n.replace(",", ".")));
  if (!nums?.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length / 100;
}

export interface DomainResult {
  id: string;
  name: string;
  weight: number | null;
  correct: number;
  total: number;
  accuracy: number;
  /** (1 − accuracy) × weight: how many exam points the gap is worth. */
  priority: number;
}

export function weakestDomains(
  domains: DomainInfo[],
  entries: Partial<Record<TestNo, Record<string, { correct: number; total: number } | null>>>,
): DomainResult[] {
  const known = domains.filter((d) => d.weight !== null);
  const fallback = known.length === domains.length ? null : 1 / domains.length;
  const out: DomainResult[] = [];
  for (const d of domains) {
    let correct = 0;
    let total = 0;
    for (const t of TESTS) {
      const v = entries[t]?.[d.id];
      if (v) {
        correct += v.correct;
        total += v.total;
      }
    }
    if (total === 0) continue;
    const accuracy = correct / total;
    const w = d.weight ?? fallback ?? 1 / domains.length;
    out.push({ id: d.id, name: d.name, weight: d.weight, correct, total, accuracy, priority: (1 - accuracy) * w });
  }
  return out.sort((a, b) => b.priority - a.priority);
}

export interface Overall {
  /** Test the reading is based on. */
  basis: TestNo | null;
  band: Band | null;
  /** True when Test 4 is the basis (most telling result). */
  examLevel: boolean;
}

/** Test 4 is the reference; otherwise the latest test taken, with a caveat. */
export function overallReading(scores: Partial<Record<TestNo, number>>, th: Record<TestNo, TestThreshold>): Overall {
  if (scores[4] !== undefined) return { basis: 4, band: bandFor(4, scores[4], th), examLevel: true };
  const taken = TESTS.filter((t) => scores[t] !== undefined);
  const last = taken.at(-1);
  if (!last) return { basis: null, band: null, examLevel: false };
  return { basis: last, band: bandFor(last, scores[last]!, th), examLevel: false };
}

export interface NextStep {
  /** Test to take next, or null when all six are done. */
  test: TestNo | null;
  /** Review the explanations of this test before moving on. */
  reviewFirst: TestNo | null;
}

export function nextStep(scores: Partial<Record<TestNo, number>>, th: Record<TestNo, TestThreshold>): NextStep {
  const taken = TESTS.filter((t) => scores[t] !== undefined);
  const last = taken.at(-1);
  const next = TESTS.find((t) => scores[t] === undefined && (last === undefined || t > last)) ?? TESTS.find((t) => scores[t] === undefined) ?? null;
  const reviewFirst = last !== undefined && bandFor(last, scores[last]!, th) === "building" ? last : null;
  return { test: next, reviewFirst };
}

export interface PlanBlock {
  /** 1-based index of the block (week or day). */
  index: number;
  unit: "week" | "day";
  tests: TestNo[];
  focus: string[];
  final: boolean;
}

/**
 * Spread the remaining tests over the days to the exam, keeping the last block
 * for review. Domains rotate in priority order. Returns [] when no plan fits.
 */
export function buildPlan(days: number, remaining: TestNo[], focus: string[]): PlanBlock[] {
  if (days < 1) return [];
  const unit: "week" | "day" = days > 21 ? "week" : "day";
  const blocks = unit === "week" ? Math.ceil(days / 7) : days;
  if (blocks < 1) return [];
  const work = Math.max(1, blocks - 1);
  const plan: PlanBlock[] = [];
  for (let i = 0; i < blocks; i++) {
    const final = blocks > 1 && i === blocks - 1;
    plan.push({ index: i + 1, unit, tests: [], focus: focus.length ? [focus[i % focus.length]] : [], final });
  }
  remaining.forEach((t, k) => {
    const slot = Math.min(work - 1, Math.floor((k * work) / remaining.length));
    plan[slot].tests.push(t);
  });
  return plan;
}
