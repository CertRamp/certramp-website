import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { ResolvedCertification } from "@/lib/certifications";
import { getResources } from "@/lib/content";
import { cn } from "@/lib/cn";

type Current = "exam" | "guide" | "questions";

/**
 * Links between the three pages of a certification cluster:
 * practice exams ↔ exam guide ↔ practice questions. Renders nothing when the
 * certification has no free resources yet.
 */
export function StudyResources({ cert, current, className }: { cert: ResolvedCertification; current: Current; className?: string }) {
  const r = getResources(cert.slug);
  if (!r.guide && !r.questions) return null;
  const items: { key: Current; href: string; icon: IconName; title: string; body: string }[] = [];
  if (r.guide)
    items.push({
      key: "guide",
      href: r.guide.path,
      icon: "book",
      title: `${cert.name} exam guide`,
      body: "Exam format, official domains, a six-step study plan and common mistakes.",
    });
  if (r.questions)
    items.push({
      key: "questions",
      href: r.questions.path,
      icon: "list",
      title: `${r.questions.count} free ${cert.name} practice questions`,
      body: "Original questions across every domain, each with the answer and an explanation for every option.",
    });
  items.push({
    key: "exam",
    href: cert.path,
    icon: "layers",
    title: `${cert.name} practice exams`,
    body: `${cert.practiceExamCount} full practice exams with rising difficulty, from a diagnostic to beyond exam level.`,
  });

  return (
    <ul className={cn("grid gap-4 md:grid-cols-3", className)}>
      {items
        .filter((i) => i.key !== current)
        .map((i) => (
          <li key={i.key}>
            <Link
              href={i.href}
              className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-shadow hover:shadow-[var(--shadow-card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={i.icon} className="size-5" />
              </span>
              <span className="mt-4 font-display text-lg font-semibold text-ink">{i.title}</span>
              <span className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{i.body}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent-600">
                Open
                <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
    </ul>
  );
}
