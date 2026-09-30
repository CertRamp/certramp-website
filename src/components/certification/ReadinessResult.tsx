"use client";

import { useSearchParams } from "next/navigation";
import { readinessBands } from "@/config/product";
import { cn } from "@/lib/cn";

/**
 * Reads the score from the URL (e.g. ?score=72) and shows CertRamp's readiness
 * guidance. Configure your ClassMarker test to redirect here on completion and
 * append the percentage score. Accepted parameter names: score, percentage, pct.
 */
export function ReadinessResult({ certName }: { certName: string }) {
  const params = useSearchParams();
  const raw = params.get("score") ?? params.get("percentage") ?? params.get("pct");
  const parsed = raw !== null ? Number.parseFloat(raw) : Number.NaN;
  const score = Number.isFinite(parsed) ? Math.min(100, Math.max(0, Math.round(parsed))) : null;
  const band = score === null ? null : readinessBands.find((b) => score >= b.min && score <= b.max) ?? null;

  return (
    <div>
      {score !== null && band ? (
        <div className="rounded-[1.5rem] bg-navy-900 p-8 text-white sm:p-10" aria-live="polite">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-300">Your {certName} result</p>
          <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-2">
            <p className="font-display text-6xl font-semibold tracking-tight sm:text-7xl">{score}%</p>
            <p className="pb-2 font-display text-2xl font-semibold text-accent-300">{band.label}</p>
          </div>
          <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full rounded-full bg-accent-500" style={{ width: `${score}%` }} />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{band.summary}</p>
          <p className="mt-3 font-display font-semibold">{band.nextStep}</p>
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-line bg-white p-8 sm:p-10">
          <p className="font-display text-2xl font-semibold text-ink">Thanks for taking the free test.</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Your score is shown on the results screen of the test. Use the guide below to see what it means for your
            preparation.
          </p>
        </div>
      )}

      <h2 className="mt-12 text-xl font-semibold">How to read your score</h2>
      <p className="mt-2 text-sm text-muted">
        CertRamp study guidance only — this is not an official pass mark and does not predict your exam result.
      </p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {readinessBands.map((b) => (
          <li
            key={b.label}
            className={cn(
              "rounded-[var(--radius-card)] border bg-white p-5",
              band?.label === b.label ? "border-accent-500 ring-2 ring-accent-500/20" : "border-line",
            )}
          >
            <p className="text-sm font-semibold text-accent-600">
              {b.min}–{b.max}%
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">{b.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{b.nextStep}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
