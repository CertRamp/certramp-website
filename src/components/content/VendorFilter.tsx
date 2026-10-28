"use client";

import { useState } from "react";

/** Filters the server-rendered change cards ([data-vendor]) inside #exam-changes. */
export function VendorFilter({ vendors, allLabel, label }: { vendors: string[]; allLabel: string; label: string }) {
  const [active, setActive] = useState<string | null>(null);

  function select(v: string | null) {
    setActive(v);
    const root = document.getElementById("exam-changes");
    if (!root) return;
    root.querySelectorAll<HTMLElement>("[data-vendor]").forEach((el) => {
      el.hidden = v !== null && el.dataset.vendor !== v;
    });
    root.querySelectorAll<HTMLElement>("[data-group]").forEach((g) => {
      g.hidden = !g.querySelector("[data-vendor]:not([hidden])");
    });
  }

  const btn = (on: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1 ring-inset transition ${
      on ? "bg-navy-900 text-white ring-navy-900" : "bg-white text-ink ring-line hover:ring-line-strong"
    }`;

  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      <button type="button" aria-pressed={active === null} className={btn(active === null)} onClick={() => select(null)}>
        {allLabel}
      </button>
      {vendors.map((v) => (
        <button key={v} type="button" aria-pressed={active === v} className={btn(active === v)} onClick={() => select(v)}>
          {v}
        </button>
      ))}
    </div>
  );
}
