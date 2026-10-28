import Link from "@/components/ui/Link";
import { formatChangeDate, type ResolvedExamChange } from "@/lib/exam-changes";

const t = {
  en: {
    kinds: {
      retired: "Retired",
      retiring: "Retiring",
      replaced: "Replaced",
      "new-version": "New version",
      "new-exam": "New exam",
      "outline-update": "Outline update",
    },
    successor: "Successor",
    meaning: "What it means for you",
    source: "Official source",
    checked: "checked",
    newTab: "opens in a new tab",
  },
  de: {
    kinds: {
      retired: "Eingestellt",
      retiring: "Läuft aus",
      replaced: "Ersetzt",
      "new-version": "Neue Version",
      "new-exam": "Neue Prüfung",
      "outline-update": "Neue Gliederung",
    },
    successor: "Nachfolger",
    meaning: "Was das für Sie bedeutet",
    source: "Offizielle Quelle",
    checked: "geprüft am",
    newTab: "öffnet in neuem Tab",
  },
} as const;

const kindTone: Record<ResolvedExamChange["change"], string> = {
  retired: "bg-line text-ink",
  retiring: "bg-warn-100 text-warn-600",
  replaced: "bg-warn-100 text-warn-600",
  "new-version": "bg-accent-50 text-accent-700",
  "new-exam": "bg-accent-50 text-accent-700",
  "outline-update": "bg-surface text-ink ring-1 ring-inset ring-line",
};

export function ExamChangeCard({ c, locale = "en" }: { c: ResolvedExamChange; locale?: "en" | "de" }) {
  const l = t[locale];
  const summary = locale === "de" ? c.de.summary : c.summary;
  const advice = locale === "de" ? c.de.candidateAdvice : c.candidateAdvice;
  return (
    <li id={`change-${c.id}`} data-vendor={c.vendor} className="scroll-mt-24 rounded-[var(--radius-card)] border border-line bg-white p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-sm text-muted">{c.vendor}</span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${kindTone[c.change]}`}>{l.kinds[c.change]}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">
        {c.exam}
        <span className="font-normal text-muted"> · {c.examName}</span>
      </h3>
      <p className="mt-2 leading-relaxed text-body">{summary}</p>
      <dl className="mt-4 grid gap-1.5 text-[0.9375rem]">
        {c.dates.map((d, i) => (
          <div key={`${d.label}-${d.date}`} className="flex flex-wrap gap-x-2">
            <dt className="text-muted">{locale === "de" ? c.de.dateLabels[i] : d.label}:</dt>
            <dd className="font-semibold text-ink">
              <time dateTime={d.date}>{formatChangeDate(d.date, locale)}</time>
            </dd>
          </div>
        ))}
        {c.successor && (
          <div className="flex flex-wrap gap-x-2">
            <dt className="text-muted">{l.successor}:</dt>
            <dd className="font-semibold text-ink">
              {c.successor}
              {c.successorName && <span className="font-normal text-muted"> · {c.successorName}</span>}
            </dd>
          </div>
        )}
      </dl>
      <p className="mt-4 rounded-xl bg-surface p-4 text-[0.9375rem] leading-relaxed text-body">
        <span className="font-semibold text-ink">{l.meaning}: </span>
        {advice}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {c.links.map((k) => (
          <Link key={k.href} href={k.href} className="font-semibold text-accent-600 hover:underline">
            {k.label[locale]}
          </Link>
        ))}
        <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="text-muted underline underline-offset-2 hover:text-ink">
          {l.source}: {c.source.label}
          <span className="sr-only"> ({l.newTab})</span>
        </a>
      </div>
      <p className="mt-2 text-xs text-muted">
        {l.checked} {formatChangeDate(c.verified, locale)}
      </p>
    </li>
  );
}
