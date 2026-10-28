import type { ExamFact, SourceLink } from "@/config/types";
import { Val } from "@/components/ui/Placeholder";
import { formatDate } from "@/lib/format";

/** Key exam facts as a definition list, with the official sources and verification date. */
export function ExamFactsList({
  facts,
  sources,
  lastVerified,
  locale = "en",
}: {
  facts: ExamFact[];
  sources: SourceLink[];
  lastVerified: string;
  locale?: "en" | "de";
}) {
  return (
    <div>
      <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
        {facts.map((f) => (
          <div
            key={f.label}
            className="bg-white p-5 sm:[&:last-child:nth-child(odd)]:col-span-2"
          >
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="mt-1 font-display font-semibold text-ink">
              <Val value={f.value} />
            </dd>
          </div>
        ))}
      </dl>
      <SourceList
        sources={sources}
        lastVerified={lastVerified}
        className="mt-5"
        locale={locale}
      />
    </div>
  );
}

const t = {
  en: {
    verified: "Exam information last verified",
    newTab: "opens in a new tab",
    note: "Exam details can change. Always confirm them with the official provider before you book.",
  },
  de: {
    verified: "Prüfungsangaben zuletzt geprüft am",
    newTab: "öffnet in neuem Tab",
    note: "Prüfungsdetails können sich ändern. Prüfen Sie sie vor der Buchung immer beim offiziellen Anbieter.",
  },
} as const;

export function SourceList({
  sources,
  lastVerified,
  className,
  locale = "en",
}: {
  sources: SourceLink[];
  lastVerified: string;
  className?: string;
  locale?: "en" | "de";
}) {
  const l = t[locale];
  return (
    <div className={className}>
      <p className="text-sm font-semibold text-ink">
        {l.verified}: {formatDate(lastVerified, locale)}
      </p>
      <ul className="mt-2 space-y-1.5 text-sm text-muted">
        {sources.map((s) => (
          <li key={s.label}>
            {s.url ? (
              <a
                href={s.url}
                rel="noopener"
                target="_blank"
                className="underline decoration-line-strong underline-offset-2 hover:text-ink"
              >
                {s.label}
                <span className="sr-only"> ({l.newTab})</span>
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">{l.note}</p>
    </div>
  );
}
