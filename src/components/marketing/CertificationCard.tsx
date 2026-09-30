import Link from "next/link";
import type { CertificationStatus } from "@/config/types";
import type { CertificationCardData } from "@/lib/certifications";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Section";

/** Six mini bars — the difficulty progression of a certification's tests. */
function ProgressionBars({ count }: { count: number }) {
  return (
    <span className="flex items-end gap-1" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={cn("w-2 rounded-sm", i === count - 1 ? "bg-navy-900" : i === 3 ? "bg-accent-500" : "bg-accent-500/35")}
          style={{ height: `${8 + i * 4}px` }}
        />
      ))}
    </span>
  );
}

export function StatusBadge({ status }: { status: CertificationStatus }) {
  if (status === "placeholder")
    return (
      <span className="rounded-full border border-dashed border-warn-600/50 bg-warn-50 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-warn-600">
        Placeholder
      </span>
    );
  if (status === "coming-soon") return <Badge tone="neutral">Coming soon</Badge>;
  return null;
}

export function LanguageList({ languages, className }: { languages: { code: string; label: string }[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Available languages">
      {languages.map((l) => (
        <li key={l.code}>
          <abbr
            title={l.label}
            className="rounded-md bg-surface px-1.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-body no-underline ring-1 ring-inset ring-line"
          >
            {l.code}
          </abbr>
        </li>
      ))}
    </ul>
  );
}

export function CertificationCard({ cert, headingLevel = "h3" }: { cert: CertificationCardData; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{cert.vendorName}</p>
        <StatusBadge status={cert.status} />
      </div>

      <Heading className="mt-3 text-xl font-semibold leading-tight">
        <Link
          href={cert.path}
          className="rounded-sm after:absolute after:inset-0 after:rounded-[var(--radius-card)] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent-500"
        >
          {cert.name} Practice Exams
        </Link>
      </Heading>
      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{cert.fullName}</p>

      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
        <div>
          <dt className="text-muted">Practice exams</dt>
          <dd className="mt-0.5 font-display text-lg font-semibold text-ink">
            {cert.practiceExamCount}
            {cert.questionCount ? (
              <span className="ml-1.5 font-sans text-xs font-medium text-muted">· {cert.questionCount} questions</span>
            ) : null}
          </dd>
        </div>
        <div>
          <dt className="text-muted">Languages</dt>
          <dd className="mt-1.5">
            <LanguageList languages={cert.languages} />
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="sr-only">Difficulty progression</dt>
          <dd className="flex items-center gap-3">
            <ProgressionBars count={cert.practiceExamCount} />
            <span className="text-xs font-medium text-body">Diagnostic → Beyond exam level</span>
          </dd>
        </div>
      </dl>

      <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[0.9375rem] font-semibold text-accent-600" aria-hidden="true">
        View Practice Exams
        <Icon name="arrow-right" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
