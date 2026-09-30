import { cn } from "@/lib/cn";

/**
 * CertRamp mark: six rising bars — the six tests that grow with you.
 * The final bar is set apart to represent "beyond the exam".
 */
export function LogoMark({ className, invert }: { className?: string; invert?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" className={invert ? "fill-white" : "fill-navy-900"} />
      <g className="fill-accent-500">
        <rect x="6" y="20" width="2.6" height="5" rx="1.3" opacity="0.45" />
        <rect x="9.6" y="17.5" width="2.6" height="7.5" rx="1.3" opacity="0.55" />
        <rect x="13.2" y="15" width="2.6" height="10" rx="1.3" opacity="0.7" />
        <rect x="16.8" y="12.5" width="2.6" height="12.5" rx="1.3" opacity="0.85" />
        <rect x="20.4" y="10" width="2.6" height="15" rx="1.3" />
      </g>
      <rect x="24" y="6.5" width="2.6" height="18.5" rx="1.3" className={invert ? "fill-navy-900" : "fill-white"} />
    </svg>
  );
}

export function Logo({ invert, className }: { invert?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark invert={invert} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.1875rem] font-bold tracking-[-0.03em]", invert ? "text-white" : "text-ink")}>
          CertRamp
        </span>
        <span
          className={cn(
            "mt-0.5 font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em]",
            invert ? "text-white/55" : "text-muted",
          )}
        >
          Learning
        </span>
      </span>
    </span>
  );
}
