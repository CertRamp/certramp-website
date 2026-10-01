import type { ExamFact, SourceLink } from "@/config/types";
import { Val } from "@/components/ui/Placeholder";
import { formatDate } from "@/lib/format";

/** Key exam facts as a definition list, with the official sources and verification date. */
export function ExamFactsList({ facts, sources, lastVerified }: { facts: ExamFact[]; sources: SourceLink[]; lastVerified: string }) {
  return (
    <div>
      <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
        {facts.map((f) => (
          <div key={f.label} className="bg-white p-5 sm:[&:last-child:nth-child(odd)]:col-span-2">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="mt-1 font-display font-semibold text-ink">
              <Val value={f.value} />
            </dd>
          </div>
        ))}
      </dl>
      <SourceList sources={sources} lastVerified={lastVerified} className="mt-5" />
    </div>
  );
}

export function SourceList({ sources, lastVerified, className }: { sources: SourceLink[]; lastVerified: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold text-ink">Exam information last verified: {formatDate(lastVerified)}</p>
      <ul className="mt-2 space-y-1.5 text-sm text-muted">
        {sources.map((s) => (
          <li key={s.label}>
            {s.url ? (
              <a href={s.url} rel="noopener" target="_blank" className="underline decoration-line-strong underline-offset-2 hover:text-ink">
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">Exam details can change. Always confirm them with the official provider before you book.</p>
    </div>
  );
}
