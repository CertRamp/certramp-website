import type { ReactNode } from "react";
import type { TestThreshold } from "@/content/course-data/types";
import { TESTS, type DomainInfo, type TestNo } from "@/lib/readiness";
import { readinessCopy } from "./readiness-copy";

export interface ToolDomain extends DomainInfo {
  weightLabel: string;
  /** Questions in this domain per test (index 0 = Test 1), when known. */
  perTest?: number[];
}

export interface ToolLink {
  label: string;
  href: string;
}

/** Settings read by the browser script from #rc-config. */
export interface ReadinessClientConfig {
  slug: string;
  certName: string;
  locale: "en" | "de";
  domains: ToolDomain[];
  thresholds: Record<TestNo, TestThreshold>;
}

export const fieldClass =
  "w-full rounded-lg border border-line-strong bg-white px-3 py-2 text-base outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20";

/**
 * Readiness check (Baustein 6). Server-rendered form; public/readiness.js
 * (built from src/client/readiness.ts) restores saved entries, validates them
 * and renders the assessment into #rc-out. No React hydration, so each tool page
 * stays small enough to publish for every certification.
 */
export function ReadinessTool({
  slug,
  certName,
  locale,
  domains,
  thresholds,
  links,
  alert,
  otherCerts,
}: {
  slug: string;
  certName: string;
  locale: "en" | "de";
  domains: ToolDomain[];
  thresholds: Record<TestNo, TestThreshold>;
  links: ToolLink[];
  alert?: ReactNode;
  otherCerts?: { slug: string; name: string; href: string }[];
}) {
  const l = readinessCopy[locale];
  const config: ReadinessClientConfig = { slug, certName, locale, domains, thresholds };
  const field = fieldClass;

  return (
    <div className="grid gap-12 lg:grid-cols-12" data-rc-root>
      <script type="application/json" id="rc-config" dangerouslySetInnerHTML={{ __html: JSON.stringify(config).replace(/</g, "\\u003c") }} />
      {/* ── Inputs ── */}
      <section aria-labelledby="rc-inputs" className="lg:col-span-6 print:hidden">
        <h2 id="rc-inputs" className="text-2xl font-semibold">{l.stepInputs}</h2>
        <p className="mt-2 text-muted">{l.inputsIntro}</p>
        {otherCerts && otherCerts.length > 1 && (
          <p className="mt-4">
            <label className="text-sm font-semibold text-ink">
              {locale === "de" ? "Zertifizierung" : "Certification"}{" "}
              <select className={`${field} mt-1`} defaultValue={otherCerts.find((c) => c.slug === slug)?.href} data-rc-nav>
                {otherCerts.map((c) => (
                  <option key={c.slug} value={c.href}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
          </p>
        )}

        <details className="mt-5 rounded-xl bg-surface p-4 text-sm">
          <summary className="cursor-pointer font-semibold text-ink">{l.udemyTitle}</summary>
          <p className="mt-2 leading-relaxed text-body">{l.udemy}</p>
        </details>

        <ol className="mt-6 space-y-4">
          {TESTS.map((n) => {
            const id = `rc-t${n}`;
            return (
              <li key={n} className="rounded-[var(--radius-card)] border border-line bg-white p-5">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <label htmlFor={id} className="font-semibold text-ink">
                    {l.test} {n}: <span className="font-normal text-muted">{l.testNames[n - 1]}</span>
                    <span className="mt-0.5 block text-sm font-normal text-muted">{l.overall}</span>
                  </label>
                  <input
                    id={id}
                    data-rc="score"
                    data-test={n}
                    inputMode="decimal"
                    autoComplete="off"
                    className={`${field} max-w-[8rem] text-right`}
                    placeholder={locale === "de" ? "z. B. 72" : "e.g. 72"}
                  />
                </div>
                <p id={`${id}-err`} hidden className="mt-2 text-sm text-warn-600" />
                <details className="mt-3" data-rc-domains={n}>
                  <summary className="cursor-pointer text-sm font-semibold text-accent-600">{l.domainToggle}</summary>
                  <p className="mt-2 text-sm text-muted">{l.domainHelp}</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {domains.map((d) => {
                      const did = `${id}-${d.id}`;
                      const total = d.perTest?.[n - 1];
                      return (
                        <div key={d.id}>
                          <label htmlFor={did} className="block text-sm text-body" lang="en">
                            {d.name}
                            {total ? <span className="text-muted"> (/{total})</span> : null}
                          </label>
                          <input
                            id={did}
                            data-rc="domain"
                            data-test={n}
                            data-domain={d.id}
                            autoComplete="off"
                            className={`${field} mt-1`}
                            placeholder={total ? `${Math.round(total * 0.75)}/${total}` : "15/20"}
                          />
                          <p id={`${did}-err`} hidden className="mt-1 text-xs text-warn-600" />
                        </div>
                      );
                    })}
                  </div>
                </details>
                <label htmlFor={`${id}-notes`} className="mt-4 block text-sm font-semibold text-ink">
                  {l.notes}
                </label>
                <textarea id={`${id}-notes`} data-rc="note" data-test={n} rows={3} placeholder={l.notesPh} className={`${field} mt-1`} />
              </li>
            );
          })}
        </ol>

        <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-5">
          <label htmlFor="rc-date" className="font-semibold text-ink">
            {l.examDate}
          </label>
          <input id="rc-date" data-rc="date" type="date" className={`${field} mt-2 max-w-[14rem]`} />
        </div>

        <p className="mt-4 text-sm text-muted" data-rc-storage>
          {l.saved}
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <button type="button" data-rc-reset className="rounded-full px-4 py-2 text-sm font-semibold text-ink ring-1 ring-inset ring-line hover:ring-line-strong">
            {l.reset}
          </button>
          <p className="self-center text-sm text-muted" aria-live="polite" data-rc-status />
        </div>
      </section>

      {/* ── Results (rendered by the browser script) ── */}
      <section aria-labelledby="rc-result" className="lg:col-span-6 print:col-span-12">
        <div className="lg:sticky lg:top-24">
          <h2 id="rc-result" className="text-2xl font-semibold">
            {l.stepResult}
            <span className="hidden print:inline">: {certName}</span>
          </h2>
          <p className="mt-3 rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-body" role="note">
            {l.disclaimer}
          </p>

          <div id="rc-out" aria-live="polite">
            <p className="mt-6 text-muted">{l.noData}</p>
            <noscript>
              <p className="mt-2 text-sm text-warn-600">
                {locale === "de" ? "Für die Auswertung wird JavaScript benötigt." : "The assessment needs JavaScript."}
              </p>
            </noscript>
          </div>

          {/* Links + alert */}
          <div className="mt-6 print:hidden">
            <h3 className="text-lg font-semibold">{l.linksTitle}</h3>
            <ul className="mt-2 space-y-1.5">
              {links.map((k) => (
                <li key={k.href}>
                  <a href={k.href} className="font-semibold text-accent-600 hover:underline">
                    {k.label}
                  </a>
                </li>
              ))}
            </ul>
            {alert}
            <button type="button" data-rc-print className="mt-6 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800">
              {l.print}
            </button>
          </div>
        </div>
      </section>
      <script src="/readiness.js" async />
    </div>
  );
}
