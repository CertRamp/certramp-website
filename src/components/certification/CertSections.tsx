import type { ReactNode } from "react";
import { TrackOnView } from "@/components/analytics/Tracked";
import { StatusBadge } from "@/components/marketing/CertificationCard";
import { RampChart } from "@/components/marketing/RampChart";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Val } from "@/components/ui/Placeholder";
import { Badge } from "@/components/ui/Section";
import { productPolicy } from "@/config/product";
import type { ResolvedCertification } from "@/lib/certifications";
import { cn } from "@/lib/cn";
import { formatDate, formatPrice } from "@/lib/format";
import { isPlaceholder, isVisible, placeholderLabel } from "@/lib/placeholder";
import { CertCta, OtherLanguageLinks, UdemyCta } from "./CertCta";

export function hasDirectOffer(cert: ResolvedCertification) {
  return Boolean(cert.cta.freeTest.href || cert.cta.simulator.href);
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────────────────── */
export function CertHero({ cert }: { cert: ResolvedCertification }) {
  const direct = hasDirectOffer(cert);
  return (
    <section className="relative overflow-hidden bg-navy-950" aria-labelledby="cert-title">
      <TrackOnView event="exam_page_viewed" eventProps={{ certification: cert.slug }} />
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -right-40 -top-24 size-[36rem] rounded-full bg-accent-500/20 blur-[110px]" aria-hidden="true" />
      <div className="container-page relative pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24">
        <Breadcrumbs
          invert
          items={[
            { name: "Practice Exams", path: "/practice-exams" },
            { name: cert.name, path: cert.path },
          ]}
        />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/75">
                {cert.vendorName} · {cert.categoryName}
              </span>
              <StatusBadge status={cert.status} />
            </div>
            <h1 id="cert-title" className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {cert.name} Practice Exams
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-accent-300 sm:text-2xl">
              Find out if you&apos;re really exam-ready.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {cert.description ??
                `Six progressive practice exams for the ${cert.fullName} exam — from a diagnostic that shows where you stand to a challenge set above exam level.`}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-start">
              {direct ? (
                <>
                  <CertCta cert={cert} kind="free" location="hero" />
                  <CertCta cert={cert} kind="simulator" variant="inverse-outline" location="hero" />
                </>
              ) : (
                <UdemyCta cert={cert} variant="primary" location="hero" />
              )}
            </div>
            {direct && cert.primaryCourse && (
              <div className="mt-4">
                <UdemyCta cert={cert} variant="inverse-ghost" size="md" location="hero" className="-ml-5" />
              </div>
            )}
            <OtherLanguageLinks cert={cert} location="hero" onDark className="mt-6" />
          </div>

          <aside className="lg:col-span-5" aria-label={`${cert.name} practice exam summary`}>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                <HeroStat label="Practice exams" value={cert.practiceExamCount} />
                {cert.questionCount ? <HeroStat label="Questions" value={cert.questionCount} /> : null}
                {cert.questionsPerTest ? <HeroStat label="Questions per test" value={cert.questionsPerTest} /> : null}
                {cert.price ? <HeroStat label="Simulator price" value={formatPrice(cert.price)} /> : null}
                <div>
                  <dt className="text-sm text-white/55">Provider</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-white">{cert.vendorName}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-sm text-white/55">Available languages</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {cert.languages.map((l) => (
                      <span key={l.code} lang={l.code} className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
                        {l.label}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Difficulty progression</p>
                <RampChart compact className="mt-5" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <dt className="text-sm text-white/55">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-semibold text-white">{value}</dd>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   OFFER — how to get the practice exams
   ───────────────────────────────────────────────────────────────────────── */
export function CertOffer({ cert }: { cert: ResolvedCertification }) {
  const direct = hasDirectOffer(cert);
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Left: free test when configured, otherwise Udemy */}
      {cert.cta.freeTest.href ? (
        <div id="free-test" className="flex flex-col rounded-[1.5rem] border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
          <p className="eyebrow">Step one · Free</p>
          <h3 className="mt-3 text-2xl font-semibold">Free {cert.name} practice test</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Find your starting point before you commit. Take the free test in your browser and see where you stand.
          </p>
          <ul className="mt-7 flex-1 space-y-3.5 text-[0.9375rem]">
            {isVisible(productPolicy.freeTestScope) && (
              <Bullet>
                <Val value={productPolicy.freeTestScope} />
              </Bullet>
            )}
            <Bullet>A score and readiness level that points to your next step</Bullet>
            <Bullet>No payment required</Bullet>
          </ul>
          <div className="mt-8">
            <CertCta cert={cert} kind="free" location="offer" className="w-full sm:w-auto" />
          </div>
        </div>
      ) : (
        <div id="udemy" className="flex flex-col rounded-[1.5rem] border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
          <p className="eyebrow">Available now</p>
          <h3 className="mt-3 text-2xl font-semibold">{cert.name} practice exams on Udemy</h3>
          <p className="mt-3 leading-relaxed text-muted">
            The complete CertRamp six-test ramp for {cert.name}, available as a Udemy course
            {cert.courses.length > 1 ? ` in ${cert.languages.length > 1 ? `${cert.languages.length} languages` : "several editions"}` : ""}.
          </p>
          <ul className="mt-7 flex-1 space-y-3">
            {cert.courses.map((c) => (
              <li key={c.id} className="flex items-start justify-between gap-4 rounded-2xl border border-line p-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted" lang={c.languageCode}>
                    {c.languageLabel}
                  </p>
                  <p className="mt-1 text-[0.9375rem] font-medium leading-snug text-ink" lang={c.languageCode}>
                    {c.title}
                  </p>
                  {c.udemyRating && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                      <svg viewBox="0 0 20 20" className="size-4 text-[#e59819]" fill="currentColor" aria-hidden="true">
                        <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
                      </svg>
                      <span>
                        <span className="font-semibold text-ink">{c.udemyRating.value.toLocaleString("en", { maximumFractionDigits: 2 })}</span>
                        <span className="sr-only"> out of 5</span> · {c.udemyRating.count} {c.udemyRating.count === 1 ? "rating" : "ratings"} on Udemy
                        <span className="text-muted/80"> (as of {formatDate(c.udemyRating.asOf)})</span>
                      </span>
                    </p>
                  )}
                </div>
                <UdemyCta
                  cert={cert}
                  course={c}
                  size="md"
                  variant="secondary"
                  location="offer"
                  label="Udemy"
                  className="shrink-0"
                />
              </li>
            ))}
          </ul>
          {cert.courses.some((c) => c.udemyRating) && (
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Ratings are collected by Udemy, where only students enrolled in a course can rate it. We show the figures as
              published on Udemy on the date given.
            </p>
          )}
        </div>
      )}

      {/* Right: the direct simulator */}
      <div
        id="exam-simulator"
        className="relative flex flex-col overflow-hidden rounded-[1.5rem] bg-navy-900 p-7 text-white/70 shadow-[var(--shadow-lift)] sm:p-9"
      >
        <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom_left,black,transparent_60%)]" aria-hidden="true" />
        <div className="relative flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-accent-300">The complete ramp</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{cert.name} Exam Simulator</h3>
            </div>
            {cert.price && cert.cta.simulator.href ? (
              <div className="text-right">
                <p className="font-display text-3xl font-semibold text-white">{formatPrice(cert.price)}</p>
                {cert.price.note && (
                  <p className="mt-1 text-xs text-white/55">
                    <Val value={cert.price.note} />
                  </p>
                )}
              </div>
            ) : !cert.cta.simulator.href ? (
              <Badge tone="dark">Coming soon</Badge>
            ) : null}
          </div>

          <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white/55">What&apos;s included</h4>
          <ul className="mt-4 flex-1 space-y-3.5 text-[0.9375rem]">
            {cert.features.filter(isVisible).map((f, i) => (
              <Bullet key={i} dark>
                {isPlaceholder(f) ? (
                  <span className="rounded-md border border-dashed border-amber-300/60 bg-amber-300/10 px-1.5 py-0.5 text-[0.8125rem] font-medium text-amber-200">
                    Placeholder: {placeholderLabel(f)}
                  </span>
                ) : (
                  f
                )}
              </Bullet>
            ))}
          </ul>
          <div className="mt-8">
            {cert.cta.simulator.href ? (
              <CertCta cert={cert} kind="simulator" variant="inverse" location="offer" className="w-full sm:w-auto" />
            ) : (
              <p className="text-sm leading-relaxed text-white/60">
                The CertRamp Exam Simulator is in preparation.{" "}
                {direct ? "" : "Until then, the same six-test ramp is available on Udemy."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bullet({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
          dark ? "bg-accent-500 text-white" : "bg-accent-50 text-accent-600",
        )}
      >
        <Icon name="check" className="size-3.5" />
      </span>
      <span className={dark ? "text-white/85" : "text-body"}>{children}</span>
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   QUESTION & EXAM METHODOLOGY
   ───────────────────────────────────────────────────────────────────────── */
export function QuestionMethodology({ cert }: { cert: ResolvedCertification }) {
  const items: { icon: IconName; title: string; body: ReactNode }[] = [
    {
      icon: "layers",
      title: "Graded by difficulty",
      body: "Questions are grouped into six tests of rising difficulty, not shuffled from one big pool. Each test has a clear job in your preparation.",
    },
    {
      icon: "target",
      title: "Calibrated to exam level",
      body: `Test 4 is written to reflect the style and difficulty of the real ${cert.name} exam — your clearest readiness check.`,
    },
    ...(
      [
        ["book", "Explanations", productPolicy.explanations],
        ["clock", "Exam conditions", productPolicy.timing],
        ["chart", "Results you can act on", productPolicy.resultsFeedback],
      ] as const
    )
      .filter(([, , value]) => isVisible(value))
      .map(([icon, title, value]) => ({ icon: icon as IconName, title, body: <Val value={value} /> })),
    {
      icon: "shield",
      title: "Independently written",
      body: `Practice questions written by CertRamp. Not official exam questions, and not affiliated with ${cert.vendorName}.`,
    },
  ];
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li key={it.title} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
          <Icon name={it.icon} className="size-6 text-accent-600" />
          <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
          <div className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{it.body}</div>
        </li>
      ))}
    </ul>
  );
}

export function LastReviewed({ cert }: { cert: ResolvedCertification }) {
  if (!cert.lastReviewed) return null;
  return (
    <p className="text-sm text-muted">
      Page last reviewed: <time dateTime={cert.lastReviewed}>{formatDate(cert.lastReviewed)}</time>
    </p>
  );
}

/** Keeps the primary action within reach on small screens. */
export function MobileStickyCta({ cert }: { cert: ResolvedCertification }) {
  const content = cert.cta.freeTest.href ? (
    <CertCta cert={cert} kind="free" size="md" location="mobile_sticky" className="w-full" />
  ) : cert.primaryCourse ? (
    <UdemyCta cert={cert} variant="primary" size="md" location="mobile_sticky" className="w-full" />
  ) : null;
  if (!content) return null;
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">{content}</div>
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}

