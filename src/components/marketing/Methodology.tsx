import { methodology } from "@/config/methodology";
import { cn } from "@/lib/cn";

/** Six-segment difficulty indicator. */
export function DifficultyMeter({ level, tone = "light", className }: { level: number; tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={cn("inline-flex items-end gap-[3px]", className)} role="img" aria-label={`Difficulty ${level} of 6`}>
      {Array.from({ length: 6 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "w-1.5 rounded-full",
            i < level
              ? i === 5
                ? tone === "dark"
                  ? "bg-white"
                  : "bg-navy-900"
                : "bg-accent-500"
              : tone === "dark"
                ? "bg-white/15"
                : "bg-line-strong/70",
          )}
          style={{ height: `${6 + i * 2.5}px` }}
        />
      ))}
    </span>
  );
}

/**
 * The six-test methodology as cards. Test 4 (exam level) and Test 6
 * (beyond the exam) are visually distinct so the progression is scannable.
 */
export function MethodologyGrid({ headingLevel = "h3" }: { headingLevel?: "h3" | "h2" }) {
  const Heading = headingLevel;
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {methodology.map((step) => {
        const examLevel = step.number === 4;
        const beyond = step.number === 6;
        return (
          <li
            key={step.number}
            className={cn(
              "relative flex flex-col rounded-[var(--radius-card)] border p-6 transition-shadow sm:p-7",
              beyond
                ? "border-navy-800 bg-navy-900 text-white/70"
                : examLevel
                  ? "border-accent-200 bg-white shadow-[var(--shadow-lift)] ring-1 ring-accent-500/20"
                  : "border-line bg-white shadow-[var(--shadow-card)]",
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "font-display text-sm font-semibold",
                  beyond ? "text-accent-300" : "text-accent-600",
                )}
              >
                Test {step.number}
              </span>
              <DifficultyMeter level={step.level} tone={beyond ? "dark" : "light"} />
            </div>
            <Heading className={cn("mt-4 text-xl font-semibold", beyond && "text-white")}>{step.name}</Heading>
            <p className={cn("mt-1 font-display text-[0.9375rem] font-medium", beyond ? "text-white/85" : "text-ink/80")}>
              {step.goal}
            </p>
            <p className={cn("mt-4 text-[0.9375rem] leading-relaxed", beyond ? "text-white/65" : "text-muted")}>
              {step.description}
            </p>
            {examLevel && (
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                <span className="size-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                Real exam level
              </span>
            )}
            {beyond && (
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
                Beyond exam level
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
