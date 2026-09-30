import { TrackedLink } from "@/components/analytics/Tracked";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { ResolvedCertification, ResolvedCourse } from "@/lib/certifications";
import { cn } from "@/lib/cn";

type Kind = "free" | "simulator";

const config: Record<Kind, { label: string; event: "free_test_clicked" | "premium_exam_clicked" }> = {
  free: { label: "Start Free Practice Test", event: "free_test_clicked" },
  simulator: { label: "Get Full Exam Simulator", event: "premium_exam_clicked" },
};

/**
 * Free test / simulator call-to-action. Renders nothing when the URL is not
 * configured — pages then fall back to the Udemy CTA. Never a fake link.
 */
export function CertCta({
  cert,
  kind,
  variant = "primary",
  size = "lg",
  location,
  className,
  label,
}: {
  cert: ResolvedCertification;
  kind: Kind;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Where on the page the button sits — sent with the analytics event. */
  location: string;
  className?: string;
  label?: string;
}) {
  const target = kind === "free" ? cert.cta.freeTest : cert.cta.simulator;
  if (!target.href) return null;
  return (
    <TrackedLink
      href={target.href}
      external={target.external}
      event={config[kind].event}
      eventProps={{ certification: cert.slug, location }}
      className={buttonClasses(variant, size, className)}
    >
      <span>{label ?? config[kind].label}</span>
      <Icon
        name={target.external ? "arrow-up-right" : "arrow-right"}
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </TrackedLink>
  );
}

/** "View on Udemy" — the primary course (English when available). */
export function UdemyCta({
  cert,
  course = cert.primaryCourse,
  variant = "secondary",
  size = "lg",
  location,
  className,
  label,
}: {
  cert: ResolvedCertification;
  course?: ResolvedCourse | null;
  variant?: ButtonVariant;
  size?: ButtonSize;
  location: string;
  className?: string;
  label?: string;
}) {
  if (!course) return null;
  const text = label ?? (course.language === "English" ? "View on Udemy" : `View on Udemy (${course.languageLabel})`);
  return (
    <TrackedLink
      href={course.url}
      external
      hrefLang={course.languageCode}
      ariaLabel={label ? `${label}: ${course.title} (${course.languageLabel})` : undefined}
      event="udemy_clicked"
      eventProps={{ certification: cert.slug, location, language: course.languageCode }}
      className={buttonClasses(variant, size, className)}
    >
      <span>{text}</span>
      <Icon name="arrow-up-right" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </TrackedLink>
  );
}

/** Compact links to the other-language Udemy courses. */
export function OtherLanguageLinks({
  cert,
  location,
  onDark,
  className,
}: {
  cert: ResolvedCertification;
  location: string;
  onDark?: boolean;
  className?: string;
}) {
  const others = cert.courses.slice(1);
  if (!others.length) return null;
  const seen = new Map<string, number>();
  const labelled = others.map((c) => {
    const n = (seen.get(c.languageCode) ?? 0) + 1;
    seen.set(c.languageCode, n);
    const dup = cert.courses.filter((x) => x.languageCode === c.languageCode).length > 1;
    const offset = cert.courses[0].languageCode === c.languageCode ? 1 : 0;
    return { ...c, display: dup ? `${c.languageLabel} ${n + offset}` : c.languageLabel };
  });
  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 text-sm", onDark ? "text-white/60" : "text-muted", className)}>
      <span>Also on Udemy in:</span>
      {labelled.map((c) => (
        <TrackedLink
          key={c.id}
          href={c.url}
          external
          hrefLang={c.languageCode}
          event="udemy_clicked"
          eventProps={{ certification: cert.slug, location, language: c.languageCode }}
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-3 py-1 font-medium ring-1 ring-inset transition-colors",
            onDark ? "text-white ring-white/20 hover:ring-white/50" : "text-ink ring-line-strong hover:ring-ink/40",
          )}
        >
          <span lang={c.languageCode} title={c.title}>
            {c.display}
          </span>
          <Icon name="arrow-up-right" className="size-3.5" />
        </TrackedLink>
      ))}
    </p>
  );
}
