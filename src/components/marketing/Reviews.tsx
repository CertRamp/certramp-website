import { proofPoints, reviews } from "@/config/reviews";
import { Icon } from "@/components/ui/Icon";

/**
 * Reviews / social proof. Renders genuine reviews from config/reviews.ts;
 * until there are any, shows clearly marked placeholders (never fake quotes).
 */
export function Reviews() {
  if (reviews.length === 0) {
    return (
      <div>
        <ul className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <li
              key={n}
              data-placeholder
              className="flex min-h-48 flex-col justify-between rounded-[var(--radius-card)] border-2 border-dashed border-warn-600/35 bg-warn-50/60 p-6"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-warn-600">
                <Icon name="alert" className="size-4" />
                Review placeholder {n}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-warn-600">
                Add a genuine, verifiable review in <code className="font-mono text-xs">src/config/reviews.ts</code>{" "}
                with the reviewer&apos;s permission and its source. Do not publish invented testimonials.
              </p>
            </li>
          ))}
        </ul>
        {proofPoints.length === 0 && (
          <p className="mt-4 text-sm text-muted">
            <span className="rounded-md border border-dashed border-warn-600/50 bg-warn-50 px-1.5 py-0.5 font-medium text-warn-600">
              Placeholder: verified proof points (e.g. Udemy students or rating, with source and date) — optional
            </span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      {proofPoints.length > 0 && (
        <dl className="mb-10 grid gap-6 sm:grid-cols-3">
          {proofPoints.map((p) => (
            <div key={p.label} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <dt className="text-sm text-muted">{p.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-ink">{p.value}</dd>
              <dd className="mt-2 text-xs text-muted">Source: {p.source}</dd>
            </div>
          ))}
        </dl>
      )}
      <ul className="grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.author + r.quote.slice(0, 20)} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
            <figure className="flex h-full flex-col">
              <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-body">“{r.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-semibold text-ink">{r.author}</span>
                {r.context && <span className="block text-muted">{r.context}</span>}
                <span className="mt-1 block text-xs text-muted">
                  {r.sourceUrl ? (
                    <a href={r.sourceUrl} className="underline underline-offset-2 hover:text-ink" rel="noopener nofollow" target="_blank">
                      {r.source}
                    </a>
                  ) : (
                    r.source
                  )}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
