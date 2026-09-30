import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CatalogueBrowser } from "@/components/marketing/CatalogueBrowser";
import { FinalCta } from "@/components/marketing/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge, Section } from "@/components/ui/Section";
import { Val } from "@/components/ui/Placeholder";
import { categoryList } from "@/config/categories";
import { productPolicy } from "@/config/product";
import { absoluteUrl } from "@/config/site";
import { getAllCertifications, getCatalogueStats, isIndexable, toCardData } from "@/lib/certifications";
import { buildMetadata } from "@/lib/seo";

const stats = getCatalogueStats();

export const metadata: Metadata = buildMetadata({
  title: "Practice Exams for IT, Security, Cloud & Project Management",
  description: `Browse CertRamp practice exams for ${stats.certifications} certifications — Microsoft, AWS, ISACA, PRINCE2, CompTIA, ISTQB and more. Six progressive tests per exam.`,
  path: "/practice-exams",
});

export default function PracticeExamsPage() {
  const certs = getAllCertifications();
  const indexable = certs.filter(isIndexable);
  const simulatorLive = certs.some((c) => c.cta.simulator.href);
  const languages = [...new Map(certs.flatMap((c) => c.languages).map((l) => [l.code, l])).values()].sort(
    (a, b) => Number(b.code === "en") - Number(a.code === "en") || a.label.localeCompare(b.label),
  );
  const usedCategories = categoryList.filter((cat) => certs.some((c) => c.categoryId === cat.id));

  return (
    <>
      <PageHero
        crumbs={[{ name: "Practice Exams", path: "/practice-exams" }]}
        eyebrow="Practice exams"
        title="Find your certification. Find your level."
        intro={`${stats.certifications} certifications from ${stats.providers} providers. Every one follows the same six-test ramp — from a diagnostic starting point to a challenge beyond exam level.`}
      >
        <nav aria-label="Categories" className="mt-8 flex flex-wrap gap-2">
          {usedCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
            >
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div id="choose" className="bg-white pb-20 sm:pb-24">
        <div className="container-page">
          <CatalogueBrowser
            certs={certs.map(toCardData)}
            categories={usedCategories.map(({ id, name, description, icon }) => ({ id, name, description, icon }))}
            languages={languages}
          />
        </div>
      </div>

      {/* Two ways to practise */}
      <Section tone="surface" labelledBy="channels-title">
        <div className="max-w-2xl">
          <p className="eyebrow">Two ways to practise</p>
          <h2 id="channels-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
            On Udemy today. Direct from CertRamp next.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-7">
            <p className="font-display text-lg font-semibold text-ink">CertRamp on Udemy</p>
            <p className="mt-2 leading-relaxed text-muted">
              Every certification above is available as a CertRamp practice exam course on Udemy — {stats.courses} courses
              in {stats.languages} languages. The link is on each certification page.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-accent-200 bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-accent-500/10">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-lg font-semibold text-ink">CertRamp Exam Simulator</p>
              {!simulatorLive && <Badge tone="neutral">Coming soon</Badge>}
            </div>
            <p className="mt-2 leading-relaxed text-muted">
              The full six-test ramp, taken online directly with CertRamp — starting with a free practice test that shows
              where you stand.
            </p>
          </div>
        </div>
        <div className="mt-6 text-sm text-muted">
          <span className="font-semibold text-ink">What&apos;s the difference? </span>
          <Val value={productPolicy.udemyVsSimulator} />
        </div>
      </Section>

      <FinalCta
        title="Not sure where to start?"
        body="Every certification begins with Test 1, a diagnostic. Take it, see your baseline, and let the ramp do the planning."
        primary={{ label: "How CertRamp Works", href: "/how-it-works" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />

      {indexable.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: indexable.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(c.path),
              name: `${c.name} Practice Exams`,
            })),
          }}
        />
      )}
    </>
  );
}
