import type { PracticeQuestion } from "@/config/types";
import { cn } from "@/lib/cn";

const t = {
  en: {
    difficulty: {
      foundation: "Foundation",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    domain: "Domain",
    question: "Question",
    options: "Answer options",
    option: "Option",
    show: "Show answer and explanation",
    correctAnswer: "Correct answer",
    correct: "correct",
    incorrect: "incorrect",
    reference: "Reference",
    newTab: "opens in a new tab",
  },
  de: {
    difficulty: {
      foundation: "Grundlagen",
      intermediate: "Mittel",
      advanced: "Fortgeschritten",
    },
    domain: "Bereich",
    question: "Frage",
    options: "Antwortoptionen",
    option: "Option",
    show: "Lösung und Erklärung anzeigen",
    correctAnswer: "Richtige Antwort",
    correct: "richtig",
    incorrect: "falsch",
    reference: "Quelle",
    newTab: "öffnet in neuem Tab",
  },
} as const;

/**
 * One practice question. Options are always visible; the answer and every
 * rationale sit in a native <details> element — readable without JavaScript
 * and fully present in the HTML for search engines.
 */
export function QuestionCard({
  q,
  number,
  domainName,
  locale = "en",
}: {
  q: PracticeQuestion;
  number: number;
  domainName: string;
  locale?: "en" | "de";
}) {
  const l = t[locale];
  const correct = q.options.find((o) => o.id === q.answer)!;
  return (
    <article
      id={q.id}
      aria-labelledby={`${q.id}-title`}
      className="scroll-mt-24 rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className="rounded-full bg-surface px-2.5 py-1 text-body ring-1 ring-inset ring-line">
          {q.objective}
        </span>
        <span className="rounded-full bg-accent-50 px-2.5 py-1 text-accent-700 ring-1 ring-inset ring-accent-100">
          {l.difficulty[q.difficulty]}
        </span>
        <span className="sr-only">
          {l.domain}: {domainName}
        </span>
      </div>
      <h3
        id={`${q.id}-title`}
        className="mt-4 text-lg font-semibold leading-snug sm:text-xl"
      >
        <span className="text-muted">
          {l.question} {number}.{" "}
        </span>
        {q.question}
      </h3>
      <ol className="mt-5 space-y-2.5" aria-label={l.options}>
        {q.options.map((o) => (
          <li
            key={o.id}
            className="flex gap-3 rounded-xl border border-line px-4 py-3 text-[0.9375rem] leading-relaxed"
          >
            <span
              className="font-display font-semibold text-ink"
              aria-hidden="true"
            >
              {o.id}
            </span>
            <span>
              <span className="sr-only">
                {l.option} {o.id}:{" "}
              </span>
              {o.text}
            </span>
          </li>
        ))}
      </ol>
      <details className="group mt-5 rounded-xl bg-surface [&[open]_.chev]:rotate-180">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3 font-display font-semibold text-accent-700 hover:bg-accent-50 [&::-webkit-details-marker]:hidden">
          {l.show}
          <svg
            viewBox="0 0 24 24"
            className="chev size-4 shrink-0 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <div className="px-4 pb-5 pt-1">
          <p className="font-semibold text-ink">
            {l.correctAnswer}: {correct.id}. {correct.text}
          </p>
          <p className="mt-2 leading-relaxed text-body">{q.explanation}</p>
          <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed">
            {q.options.map((o) => (
              <li key={o.id} className="flex gap-2">
                <span
                  className={cn(
                    "font-semibold",
                    o.id === q.answer ? "text-success-500" : "text-muted",
                  )}
                >
                  {o.id}
                  <span className="sr-only">
                    {o.id === q.answer
                      ? ` (${l.correct})`
                      : ` (${l.incorrect})`}
                  </span>
                </span>
                <span className="text-body">{o.rationale}</span>
              </li>
            ))}
          </ul>
          {q.reference && (
            <p className="mt-4 text-sm text-muted">
              {l.reference}:{" "}
              {q.reference.url ? (
                <a
                  href={q.reference.url}
                  rel="noopener"
                  target="_blank"
                  className="underline decoration-line-strong underline-offset-2 hover:text-ink"
                >
                  {q.reference.label}
                  <span className="sr-only"> ({l.newTab})</span>
                </a>
              ) : (
                q.reference.label
              )}
            </p>
          )}
        </div>
      </details>
    </article>
  );
}
