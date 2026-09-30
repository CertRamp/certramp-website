import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DifficultyMeter } from "@/components/marketing/Methodology";
import { RampChart } from "@/components/marketing/RampChart";
import { FinalCta, HowItWorksSteps } from "@/components/marketing/Sections";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { methodology } from "@/config/methodology";
import { cn } from "@/lib/cn";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How It Works — Six Tests That Grow With You",
  description:
    "The CertRamp methodology: six practice tests of rising difficulty — Diagnostic, Foundation, Development, Exam Level, Advanced and the CertRamp Challenge.",
  path: "/how-it-works",
});

const loop: { icon: IconName; word: string; body: string }[] = [
  { icon: "play", word: "Practice", body: "Take the next test in the ramp under realistic conditions." },
  { icon: "chart", word: "Measure", body: "Look past the overall score: note which questions and topics you missed." },
  { icon: "book", word: "Improve", body: "Revise the areas you missed before moving on." },
  { icon: "repeat", word: "Repeat", body: "Retake or move up. Each test raises the bar a little further." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "How It Works", path: "/how-it-works" }]}
        eyebrow="The CertRamp methodology"
        title="Six tests that grow with you"
        intro="Most practice banks give you one big pile of questions. CertRamp gives you a ramp: six tests, each one harder than the last, so every result tells you something specific about your readiness."
      />

      {/* The ramp, visualised */}
      <Section labelledBy="ramp-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <SectionHeader
            id="ramp-title"
            eyebrow="Progressive difficulty"
            title="Difficulty rises with every test"
            intro={
              <>
                <p>
                  The first three tests take you from your starting point to solid knowledge. Test 4 is set at real exam
                  level. Tests 5 and 6 deliberately go further.
                </p>
                <p className="mt-4">
                  Preparing above exam level builds margin: if the hardest questions you have seen are behind you,
                  exam day is not the moment you meet them for the first time.
                </p>
              </>
            }
            className="lg:col-span-6"
          />
          <div className="rounded-[1.5rem] border border-line bg-surface p-6 sm:p-8 lg:col-span-6">
            <RampChart tone="light" />
          </div>
        </div>
      </Section>

      {/* Step-by-step */}
      <Section tone="surface" labelledBy="steps-title">
        <SectionHeader id="steps-title" eyebrow="Test by test" title="What each test is for" />
        <ol className="mt-14 space-y-4">
          {methodology.map((step, i) => {
            const exam = step.number === 4;
            const beyond = step.number === 6;
            return (
              <li
                key={step.number}
                className={cn(
                  "grid gap-6 rounded-[var(--radius-card)] border p-6 sm:grid-cols-12 sm:items-center sm:p-8",
                  beyond ? "border-navy-800 bg-navy-900" : exam ? "border-accent-200 bg-white ring-1 ring-accent-500/20" : "border-line bg-white",
                )}
              >
                <div className="flex items-center gap-4 sm:col-span-4">
                  <span
                    className={cn(
                      "grid size-14 shrink-0 place-items-center rounded-2xl font-display text-xl font-semibold",
                      beyond ? "bg-white text-navy-900" : exam ? "bg-accent-500 text-white" : "bg-accent-50 text-accent-700",
                    )}
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className={cn("text-sm font-semibold", beyond ? "text-accent-300" : "text-accent-600")}>
                      Test {step.number}
                    </p>
                    <h3 className={cn("text-xl font-semibold", beyond && "text-white")}>{step.name}</h3>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <p className={cn("font-display font-semibold", beyond ? "text-white" : "text-ink")}>{step.goal}</p>
                  <p className={cn("mt-1.5 leading-relaxed", beyond ? "text-white/65" : "text-muted")}>{step.description}</p>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2 sm:justify-end">
                  <span className={cn("text-xs font-medium", beyond ? "text-white/60" : "text-muted")}>Difficulty</span>
                  <DifficultyMeter level={step.level} tone={beyond ? "dark" : "light"} />
                </div>
                {i === 3 && (
                  <p className="text-sm font-semibold text-accent-700 sm:col-span-12">
                    ↑ Real exam level. A consistent result here is your clearest readiness signal.
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </Section>

      {/* The loop */}
      <Section labelledBy="loop-title">
        <SectionHeader
          id="loop-title"
          eyebrow="How to use it"
          title="Practice. Measure. Improve. Repeat."
          intro="The ramp works best as a loop. Don't rush through all six tests — use each result to decide what to revise next."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loop.map((l, i) => (
            <li key={l.word} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-50 text-accent-600">
                  <Icon name={l.icon} className="size-5" />
                </span>
                <span className="font-display text-sm font-semibold text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{l.word}</h3>
              <p className="mt-2 leading-relaxed text-muted">{l.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* From search to exam day */}
      <Section tone="navy" labelledBy="journey-title">
        <SectionHeader id="journey-title" invert eyebrow="Getting started" title="From first attempt to exam day" />
        <div className="mt-14">
          <HowItWorksSteps invert />
        </div>
      </Section>

      <FinalCta
        title="Find your starting point"
        body="Every ramp begins with a diagnostic. Choose your certification and start with Test 1."
        primary={{ label: "Explore Practice Exams", href: "/practice-exams" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
