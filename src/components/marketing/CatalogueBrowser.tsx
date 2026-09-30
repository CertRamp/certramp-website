"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { Category } from "@/config/categories";
import type { CertificationCardData } from "@/lib/certifications";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { CertificationCard } from "./CertificationCard";

interface Props {
  certs: CertificationCardData[];
  categories: Pick<Category, "id" | "name" | "description" | "icon">[];
  languages: { code: string; label: string }[];
}

function normalise(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9+]+/g, " ").trim();
}

/**
 * Catalogue with search and language filter. All cards are rendered in the
 * server HTML (crawlable, works without JavaScript); filtering only hides them.
 */
export function CatalogueBrowser({ certs, categories, languages }: Props) {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("all");
  const q = normalise(useDeferredValue(query));

  const visible = useMemo(() => {
    const words = q.split(" ").filter(Boolean);
    return new Set(
      certs
        .filter((c) => lang === "all" || c.languages.some((l) => l.code === lang))
        .filter((c) => {
          if (!words.length) return true;
          const hay = normalise(`${c.name} ${c.fullName} ${c.vendorName} ${c.slug}`);
          return words.every((w) => hay.includes(w));
        })
        .map((c) => c.slug),
    );
  }, [certs, q, lang]);

  const total = visible.size;

  return (
    <div>
      <div className="sticky top-[4.25rem] z-30 -mx-5 border-b border-line bg-white/90 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search certifications</span>
            <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by exam code, name or provider — e.g. AZ-900, CISA, PRINCE2"
              className="h-12 w-full rounded-full border border-line-strong bg-white pl-12 pr-4 text-[0.9375rem] text-ink placeholder:text-muted/80 focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/15"
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="shrink-0 font-medium text-body">Udemy language</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="h-12 rounded-full border border-line-strong bg-white px-4 text-[0.9375rem] text-ink focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/15"
            >
              <option value="all">All languages</option>
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-2 text-sm text-muted" aria-live="polite">
          {total === certs.length ? `${total} certifications` : `${total} of ${certs.length} certifications`}
        </p>
      </div>

      {categories.map((cat, idx) => {
        const items = certs.filter((c) => c.categoryId === cat.id);
        const shown = items.filter((c) => visible.has(c.slug)).length;
        if (!items.length) return null;
        return (
          <section
            key={cat.id}
            id={cat.id}
            aria-labelledby={`${cat.id}-title`}
            className={cn("scroll-mt-44 pt-14", shown === 0 && "hidden", idx === 0 && "pt-10")}
          >
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={cat.icon} className="size-5" />
              </span>
              <div>
                <h2 id={`${cat.id}-title`} className="text-2xl font-semibold">
                  {cat.name} <span className="font-sans text-base font-medium text-muted">({shown})</span>
                </h2>
                <p className="mt-0.5 text-muted">{cat.description}</p>
              </div>
            </div>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <li key={c.slug} className={visible.has(c.slug) ? undefined : "hidden"}>
                  <CertificationCard cert={c} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      {total === 0 && (
        <div className="mt-12 rounded-[var(--radius-card)] border border-dashed border-line-strong p-10 text-center">
          <p className="font-display text-lg font-semibold text-ink">No certification matches “{query}”.</p>
          <p className="mt-2 text-muted">Try an exam code like “SC-200” or a provider like “ISACA”.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setLang("all");
            }}
            className="mt-5 font-display font-semibold text-accent-600 hover:text-accent-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
