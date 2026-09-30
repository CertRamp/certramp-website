import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "white" | "surface" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  navy: "bg-navy-900 text-white/75",
};

export function Section({
  id,
  tone = "white",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(tones[tone], "py-20 sm:py-24 lg:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  invert,
  as: Heading = "h2",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow", invert && "text-accent-300")}>{eyebrow}</p>}
      <Heading
        id={id}
        className={cn(
          "mt-3 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          invert && "text-white",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <div className={cn("mt-5 text-lg leading-relaxed", invert ? "text-white/70" : "text-muted")}>{intro}</div>
      )}
    </div>
  );
}

export function Badge({ children, tone = "accent", className }: { children: ReactNode; tone?: "accent" | "neutral" | "dark" | "success"; className?: string }) {
  const tones = {
    accent: "bg-accent-50 text-accent-700 ring-accent-100",
    neutral: "bg-surface text-body ring-line",
    dark: "bg-white/10 text-white ring-white/15",
    success: "bg-success-50 text-success-500 ring-success-500/20",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
