import { UdemyCta } from "@/components/certification/CertCta";
import type { ResolvedCertification, ResolvedCourse } from "@/lib/certifications";
import { cn } from "@/lib/cn";

/**
 * Compact in-content pointer to the full practice exams on Udemy.
 *
 * Added Nov 2026 after Umami showed that the free-question pages (the main
 * entry pages from Google) had a single Udemy link at ~90 % of the page height,
 * and most visitors left before reaching it. Used between question domains and
 * on exam-change cards. Every click fires `udemy_clicked` with its own location.
 */
export function CourseNudge({
  cert,
  course = cert.primaryCourse,
  locale = "en",
  location,
  className,
}: {
  cert: ResolvedCertification;
  course?: ResolvedCourse | null;
  locale?: "en" | "de";
  location: string;
  className?: string;
}) {
  if (!course) return null;
  const questions = course.questions ?? cert.questionCount;
  const tests = cert.practiceExamCount;
  const text =
    locale === "de"
      ? `Wie sicher warst du? Die vollständigen Übungsprüfungen haben ${questions ? `${questions} Fragen in ` : ""}${tests} Tests: vom Einstufungstest über Prüfungsniveau (Test 4) bis darüber hinaus.`
      : `How did you do? The full practice exams have ${questions ? `${questions} questions in ` : ""}${tests} tests: from a diagnostic start to real exam level (Test 4) and beyond.`;
  return (
    <aside
      aria-label={locale === "de" ? "Vollständige Übungsprüfungen" : "Full practice exams"}
      className={cn(
        "flex flex-col gap-4 rounded-[var(--radius-card)] border border-accent-100 bg-accent-50 p-5 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <p className="text-[0.9375rem] leading-relaxed text-ink">{text}</p>
      <UdemyCta
        cert={cert}
        course={course}
        variant="primary"
        size="md"
        location={location}
        className="shrink-0"
        label={locale === "de" ? "Zum Kurs auf Udemy" : "View on Udemy"}
      />
    </aside>
  );
}
