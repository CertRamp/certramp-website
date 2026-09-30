import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/Tracked";
import { MethodologyGrid } from "@/components/marketing/Methodology";
import { CategoryGrid } from "@/components/marketing/CategoryGrid";
import { CertificationCard } from "@/components/marketing/CertificationCard";
import { RampChart } from "@/components/marketing/RampChart";
import { Reviews } from "@/components/marketing/Reviews";
import { reviews } from "@/config/reviews";
import { SHOW_PLACEHOLDERS } from "@/lib/placeholder";
import { CoreLoop, FinalCta, HowItWorksSteps, WhyCertRamp } from "@/components/marketing/Sections";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { allGlobalFaqItems, homeFaqQuestions } from "@/config/faq";
import { siteConfig } from "@/config/site";
import { getAllCertifications, getCatalogueStats, getFeaturedCertifications, getFirstFreeTest, toCardData } from "@/lib/certifications";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CertRamp Learning — Progressive Certification Practice Exams",
  absoluteTitle: true,
  description:
    "Six practice tests that grow with you — from diagnostic to beyond exam level. Independent practice exams for Microsoft, AWS, ISACA, CompTIA, ISTQB, PMI and more.",
  path: "/",
});

export default function HomePage() {
  const stats = getCatalogueStats();
  // Genuine reviews only; the placeholder cards are never shown in production.
  const showReviews = reviews.length > 0 || SHOW_PLACEHOLDERS;
  const all = getAllCertifications();
  const featured = getFeaturedCertifications();
  const freeTestCert = getFirstFreeTest();
  const faqItems = allGlobalFaqItems().filter((i) => homeFaqQuestions.includes(i.question));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950" aria-label="Introduction">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />
        <div className="absolute -right-32 top-0 size-[40rem] rounded-full bg-accent-500/25 blur-[120px]" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-14 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.8125rem] font-medium text-white/80">
              <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
              {siteConfig.philosophy}
            </p>
            <h1
              id="hero-title"
              className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
            >
              Practice harder.
              <br />
              <span className="text-accent-400">Enter confident.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Progressive practice exams built to help you understand where you stand, strengthen your knowledge and
              walk into certification day with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/practice-exams" size="lg" icon="arrow-right">
                Explore Practice Exams
              </ButtonLink>
              {freeTestCert?.cta.freeTest.href ? (
                <TrackedLink
                  href={freeTestCert.cta.freeTest.href}
                  external={freeTestCert.cta.freeTest.external}
                  event="free_test_clicked"
                  eventProps={{ certification: freeTestCert.slug, location: "home_hero" }}
                  className={buttonClasses("inverse-outline", "lg")}
                >
                  Try a Free Practice Test
                </TrackedLink>
              ) : (
                // No free test configured yet → don't promise one; point to the method instead.
                <Link href="/how-it-works" className={buttonClasses("inverse-outline", "lg")}>
                  How CertRamp Works
                </Link>
              )}
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
              {[
                "Six tests, rising difficulty",
                `${stats.certifications} certifications`,
                `${stats.providers} providers`,
                `${stats.languages} languages`,
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-accent-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">The CertRamp method</p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-white">Six tests that grow with you</p>
                </div>
                <span className="shrink-0 whitespace-nowrap rounded-full bg-white/10 px-2.5 py-1 text-[0.6875rem] font-semibold text-white/80">
                  Test 1 → 6
                </span>
              </div>
              <RampChart className="mt-8" showNames={false} />
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center text-[0.75rem] leading-tight text-white/60">
                <div>
                  <span className="block font-display text-sm font-semibold text-white">Start</span>
                  Find your level
                </div>
                <div>
                  <span className="block font-display text-sm font-semibold text-white">Test 4</span>
                  Real exam level
                </div>
                <div>
                  <span className="block font-display text-sm font-semibold text-white">Test 6</span>
                  Beyond the exam
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────────────── */}
      <Section labelledBy="categories-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            id="categories-title"
            eyebrow="Certification areas"
            title="Practice exams for the certifications professionals pursue"
          />
          <Link href="/practice-exams" className="inline-flex shrink-0 items-center gap-1.5 font-display font-semibold text-accent-600 hover:text-accent-700">
            All practice exams <Icon name="arrow-right" className="size-4" />
          </Link>
        </div>
        <div className="mt-12">
          <CategoryGrid certs={all} />
        </div>
      </Section>

      {/* ── Featured ─────────────────────────────────────────────────────── */}
      <Section tone="surface" labelledBy="featured-title">
        <SectionHeader
          id="featured-title"
          eyebrow="Featured practice exams"
          title="Pick your exam. Find your starting point."
          intro="Every CertRamp product follows the same six-test progression, so you always know what comes next."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <li key={c.slug}>
              <CertificationCard cert={toCardData(c)} />
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Methodology ──────────────────────────────────────────────────── */}
      <Section labelledBy="method-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            id="method-title"
            eyebrow="The CertRamp methodology"
            title="Six tests that grow with you"
            intro="Difficulty rises with every test. You start by finding your level, reach real exam level at Test 4, then go beyond it — so exam day is not the hardest test you take."
            className="lg:col-span-7"
          />
          <div className="lg:col-span-5 lg:justify-self-end">
            <ButtonLink href="/how-it-works" variant="secondary" icon="arrow-right">
              See the full methodology
            </ButtonLink>
          </div>
        </div>
        <div className="mt-12">
          <MethodologyGrid />
        </div>
      </Section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <Section tone="navy" labelledBy="how-title" className="relative overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            id="how-title"
            invert
            eyebrow="How it works"
            title="From first attempt to exam day"
            className="lg:col-span-7"
          />
          <div className="lg:col-span-5 lg:justify-self-end">
            <CoreLoop invert />
          </div>
        </div>
        <div className="mt-14">
          <HowItWorksSteps invert />
        </div>
      </Section>

      {/* ── Why CertRamp ─────────────────────────────────────────────────── */}
      <Section labelledBy="why-title">
        <SectionHeader
          id="why-title"
          eyebrow="Why CertRamp"
          title="Practice that tells you something"
          intro="Random question banks tell you how many answers you got right. A structured ramp tells you whether you are ready."
        />
        <div className="mt-14">
          <WhyCertRamp />
        </div>
      </Section>

      {/* ── Reviews ──────────────────────────────────────────────────────── */}
      {showReviews && (
        <Section tone="surface" labelledBy="reviews-title">
          <SectionHeader id="reviews-title" eyebrow="From candidates" title="What candidates say" />
          <div className="mt-12">
            <Reviews />
          </div>
        </Section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section tone={showReviews ? "white" : "surface"} labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="faq-title" eyebrow="FAQ" title="Questions, answered" />
            <Link href="/faq" className="mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-accent-600 hover:text-accent-700">
              All questions <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqItems} />
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
