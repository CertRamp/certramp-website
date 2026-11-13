"use client";

import { useState } from "react";

export type PeriodId = "all" | "next-90" | "last-90" | "2027" | "2026";

const DAY = 86400000;
const nowMs = () => Date.now();

function inPeriod(keyDate: string, period: PeriodId, now: number): boolean {
  if (period === "all") return true;
  const t = Date.parse(keyDate.length === 7 ? `${keyDate}-01T00:00:00Z` : `${keyDate}T00:00:00Z`);
  if (period === "next-90") return t >= now - DAY && t <= now + 90 * DAY;
  if (period === "last-90") return t <= now && t >= now - 90 * DAY;
  return keyDate.startsWith(period);
}

/**
 * Filters the server-rendered change cards ([data-vendor][data-keydate]) inside
 * #exam-changes by vendor and by period of the key date. Without JavaScript all
 * cards stay visible.
 */
export function VendorFilter({
  vendors,
  allLabel,
  label,
  periodLabel,
  periods,
}: {
  vendors: string[];
  allLabel: string;
  label: string;
  periodLabel: string;
  periods: { id: PeriodId; label: string }[];
}) {
  const [vendor, setVendor] = useState<string | null>(null);
  const [period, setPeriod] = useState<PeriodId>("all");

  function apply(v: string | null, p: PeriodId) {
    setVendor(v);
    setPeriod(p);
    const root = document.getElementById("exam-changes");
    if (!root) return;
    const now = nowMs();
    root.querySelectorAll<HTMLElement>("[data-vendor]").forEach((el) => {
      el.hidden = (v !== null && el.dataset.vendor !== v) || !inPeriod(el.dataset.keydate ?? "", p, now);
    });
    root.querySelectorAll<HTMLElement>("[data-group]").forEach((g) => {
      g.hidden = !g.querySelector("[data-vendor]:not([hidden])");
    });
    const empty = document.getElementById("exam-changes-empty");
    if (empty) empty.hidden = Boolean(root.querySelector("[data-vendor]:not([hidden])"));
  }

  const btn = (on: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1 ring-inset transition ${
      on ? "bg-navy-900 text-white ring-navy-900" : "bg-white text-ink ring-line hover:ring-line-strong"
    }`;

  return (
    <div className="space-y-4">
      <div role="group" aria-label={periodLabel} className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-semibold text-muted">{periodLabel}:</span>
        {periods.map((p) => (
          <button key={p.id} type="button" aria-pressed={period === p.id} className={btn(period === p.id)} onClick={() => apply(vendor, p.id)}>
            {p.label}
          </button>
        ))}
      </div>
      <div role="group" aria-label={label} className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-semibold text-muted">{label}:</span>
        <button type="button" aria-pressed={vendor === null} className={btn(vendor === null)} onClick={() => apply(null, period)}>
          {allLabel}
        </button>
        {vendors.map((v) => (
          <button key={v} type="button" aria-pressed={vendor === v} className={btn(vendor === v)} onClick={() => apply(v, period)}>
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
