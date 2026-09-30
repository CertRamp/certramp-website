import type { ReactNode } from "react";
import { coreLoop } from "@/config/methodology";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

const reasons: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Structure, not question dumps",
    body: "Six tests in a deliberate order, each harder than the last. You always know what to take next and why.",
  },
  {
    icon: "target",
    title: "Know where you stand",
    body: "A diagnostic to start and an exam-level test to confirm. Two clear signals instead of guesswork.",
  },
  {
    icon: "chart",
    title: "Built to be harder",
    body: "The final CertRamp Challenge goes beyond exam level, so the real thing feels familiar rather than frightening.",
  },
  {
    icon: "search",
    title: "Weak areas, exposed early",
    body: "Test 5 focuses on nuanced and easily confused topics — the gaps that are easy to miss in your own revision.",
  },
  {
    icon: "shield",
    title: "Independent and honest",
    body: "We make practice exams, not certifications. No borrowed logos, no implied endorsements, no pass guarantees.",
  },
  {
    icon: "play",
    title: "Try before you commit",
    body: "Start with a free practice test. Move to the full exam simulator only when you want the complete ramp.",
  },
];

export function WhyCertRamp() {
  return (
    <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((r) => (
        <li key={r.title}>
          <span className="grid size-11 place-items-center rounded-xl bg-accent-50 text-accent-600">
            <Icon name={r.icon} className="size-5" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

const steps: { title: string; body: string }[] = [
  { title: "Choose your certification", body: "Find the practice exams for the certification you are preparing for." },
  { title: "Take the free practice test", body: "No commitment. Answer exam-style questions in your browser." },
  { title: "See where you stand", body: "Get your score and a readiness level that points to your next step." },
  { title: "Work through all six tests", body: "Move to the full CertRamp Exam Simulator and climb the ramp at your own pace." },
];

export function HowItWorksSteps({ invert }: { invert?: boolean }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <div className="flex items-center gap-3">
            <span
              className={
                invert
                  ? "grid size-9 place-items-center rounded-full bg-white/10 font-display text-sm font-semibold text-white ring-1 ring-white/20"
                  : "grid size-9 place-items-center rounded-full bg-navy-900 font-display text-sm font-semibold text-white"
              }
            >
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className={`hidden h-px flex-1 lg:block ${invert ? "bg-white/15" : "bg-line-strong"}`}
              />
            )}
          </div>
          <h3 className={`mt-5 text-lg font-semibold ${invert ? "text-white" : ""}`}>{s.title}</h3>
          <p className={`mt-2 leading-relaxed ${invert ? "text-white/65" : "text-muted"}`}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CoreLoop({ invert }: { invert?: boolean }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-semibold ${invert ? "text-white" : "text-ink"}`}>
      {coreLoop.map((word, i) => (
        <span key={word} className="inline-flex items-center gap-3">
          {word}.
          {i < coreLoop.length - 1 && <Icon name="arrow-right" className={`size-4 ${invert ? "text-accent-300" : "text-accent-500"}`} />}
        </span>
      ))}
    </p>
  );
}

export function FinalCta({
  title = (
    <>
      Practice harder.
      <br />
      Enter confident.
    </>
  ),
  body = "Find your starting point with a free practice test, then climb the full six-test ramp to exam day.",
  primary = { label: "Explore Practice Exams", href: "/practice-exams" },
  secondary = { label: "How CertRamp Works", href: "/how-it-works" },
}: {
  title?: ReactNode;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="final-cta" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-navy-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />
          <div className="relative">
            <h2 id="final-cta" className="text-3xl font-semibold leading-[1.1] text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={primary.href} size="lg" icon="arrow-right">
                {primary.label}
              </ButtonLink>
              <ButtonLink href={secondary.href} size="lg" variant="inverse-outline">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
