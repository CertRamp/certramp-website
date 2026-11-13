"use client";

import { useState } from "react";

/**
 * Filters the server-rendered glossary entries ([data-glossary-text]) inside
 * #glossary-list. Without JavaScript the full list stays visible.
 */
export function GlossarySearch({ label, placeholder, empty, countLabel }: { label: string; placeholder: string; empty: string; countLabel: string }) {
  const [q, setQ] = useState("");
  const [count, setCount] = useState<number | null>(null);

  function filter(value: string) {
    setQ(value);
    const needle = value.trim().toLowerCase();
    const root = document.getElementById("glossary-list");
    if (!root) return;
    let shown = 0;
    root.querySelectorAll<HTMLElement>("[data-glossary-text]").forEach((el) => {
      const hit = !needle || (el.dataset.glossaryText ?? "").includes(needle);
      el.hidden = !hit;
      if (hit) shown++;
    });
    root.querySelectorAll<HTMLElement>("[data-letter-group]").forEach((g) => {
      g.hidden = !g.querySelector("[data-glossary-text]:not([hidden])");
    });
    setCount(needle ? shown : null);
  }

  return (
    <div>
      <label htmlFor="glossary-q" className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id="glossary-q"
        type="search"
        value={q}
        onChange={(e) => filter(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full max-w-md rounded-full border border-line-strong bg-white px-5 py-3 text-base outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
      />
      <p className="mt-2 text-sm text-muted" aria-live="polite">
        {count === null ? "" : count === 0 ? empty : countLabel.replace("{n}", String(count))}
      </p>
    </div>
  );
}
