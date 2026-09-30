import { methodology } from "@/config/methodology";
import { cn } from "@/lib/cn";

/**
 * The signature CertRamp visual: six rising bars with the real-exam line
 * crossing at Test 4. Built from an ordered list so it reads correctly
 * for screen readers and needs no chart library.
 */
function barColor(index: number, dark: boolean): string {
  if (index === 5) return dark ? "bg-white" : "bg-navy-900"; // CertRamp Challenge — beyond the exam
  if (index === 4) return "bg-accent-400"; // Advanced
  if (index === 3) return "bg-accent-500 shadow-[var(--shadow-glow)]"; // Exam level
  return dark ? "bg-accent-500/40" : "bg-accent-500/30";
}

export function RampChart({
  tone = "dark",
  className,
  compact,
  showNames = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
  /** Show test names under the bars (hidden automatically in compact mode). */
  showNames?: boolean;
}) {
  const dark = tone === "dark";
  // Heights as % of the plot area. Test 4 sits exactly on the exam line.
  const heights = [26, 40, 54, 68, 82, 100];
  const examLine = heights[3];

  return (
    <figure className={cn("relative", className)}>
      <div className={cn("relative", compact ? "h-44" : "h-56 sm:h-64")}>
        {/* Exam-level reference line */}
        <div
          className="pointer-events-none absolute inset-x-0 z-10 flex translate-y-1/2 items-center"
          style={{ bottom: `${examLine}%` }}
          aria-hidden="true"
        >
          <span
            className={cn(
              "mr-2 whitespace-nowrap rounded-full px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em]",
              dark ? "bg-white/10 text-white/80" : "bg-ink/5 text-ink/70",
            )}
          >
            Real exam level
          </span>
          <div className={cn("h-px flex-1 border-t border-dashed", dark ? "border-white/35" : "border-ink/30")} />
        </div>

        <ol className="absolute inset-0 grid grid-cols-6 items-end gap-2 sm:gap-3">
          {methodology.map((step, i) => {
            const at = i === 3;
            const above = i > 3;
            return (
              <li key={step.number} className="flex h-full flex-col justify-end">
                <span className="sr-only">
                  Test {step.number}: {step.name} — {step.goal}
                  {at ? " (real exam level)" : above ? " (above exam level)" : ""}
                </span>
                <div
                  aria-hidden="true"
                  className={cn("origin-bottom animate-rise rounded-t-lg rounded-b-sm", barColor(i, dark))}
                  style={{ height: `${heights[i]}%`, animationDelay: `${120 + i * 90}ms` }}
                />
              </li>
            );
          })}
        </ol>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-2 sm:gap-3" aria-hidden="true">
        {methodology.map((step) => (
          <div key={step.number} className="text-center">
            <div className={cn("font-display text-xs font-semibold", dark ? "text-white" : "text-ink")}>T{step.number}</div>
            {!compact && showNames && (
              <div className={cn("mt-0.5 hidden truncate text-[0.6875rem] sm:block", dark ? "text-white/50" : "text-muted")}>
                {step.name}
              </div>
            )}
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        Six practice tests of increasing difficulty. Test 4 matches real exam level; Tests 5 and 6 go beyond it.
      </figcaption>
    </figure>
  );
}
