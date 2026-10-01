import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CertHero,
  CertOffer,
  hasDirectOffer,
  LastReviewed,
  MobileStickyCta,
  QuestionMethodology,
} from "@/components/certification/CertSections";
import { VendorDisclaimer } from "@/components/certification/VendorDisclaimer";
import { StudyResources } from "@/components/content/StudyResources";
import { CertificationCard } from "@/components/marketing/CertificationCard";
import { MethodologyGrid } from "@/components/marketing/Methodology";
import { FinalCta } from "@/components/marketing/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderBanner, Val } from "@/components/ui/Placeholder";
import { Section, SectionHeader } from "@/components/ui/Section";
import { certificationFaqTemplate } from "@/config/faq";
import { getAllCertifications, getCertification, isIndexable, toCardData } from "@/lib/certifications";
import { fill, formatDate } from "@/lib/format";
import { getResources } from "@/lib/content";
import { certificationProductSchema, credentialSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

/** Pre-render one page per certification; unknown slugs return 404. */
export function generateStaticParams(): Params[] {
  return getAllCertifications().map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) return {};
  return buildMetadata({
    title: cert.seo.title,
    description: cert.seo.description,
    path: cert.path,
    noindex: !isIndexable(cert),
  });
}

export default async function CertificationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) notFound();

  const direct = hasDirectOffer(cert);
  const faq = [
    ...cert.faq,
    ...certificationFaqTemplate.map((f) => ({
      question: fill(f.question, { name: cert.name }),
      answer: fill(f.answer, { name: cert.name }),
    })),
  ];
  const faqLd = faqSchema(faq);
  const productLd = certificationProductSchema(cert);
  const credentialLd = credentialSchema(cert);
  const resources = getResources(cert.slug);
  const hasResources = Boolean(resources.guide || resources.questions);
  const related = getAllCertifications()
    .filter((c) => c.categoryId === cert.categoryId && c.slug !== cert.slug)
    .sort((a, b) => Number(b.vendorKey === cert.vendorKey) - Number(a.vendorKey === cert.vendorKey))
    .slice(0, 3);

  const facts =
    cert.examOverview.length > 0
      ? cert.examOverview
      : [
          { label: "Provider", value: cert.vendorName },
          { label: "Area", value: cert.categoryName },
          { label: "Practice exam languages", value: cert.languages.map((l) => l.label).join(", ") },
        ];

  return (
    <>
      {cert.status === "placeholder" && (
        <PlaceholderBanner title="Placeholder product page.">
          This page is hidden from search engines and the sitemap until its status is set to <code>live</code>.
        </PlaceholderBanner>
      )}

      <CertHero cert={cert} />

      {/* Exam overview */}
      <Section labelledBy="overview-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader id="overview-title" eyebrow="Exam overview" title={`About the ${cert.name} exam`} intro={cert.fullName} />
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-muted">
              <Icon name="info" className="mt-0.5 size-4 shrink-0" />
              <span>
                Exam format, length, pass mark and fees are set by {cert.vendorName} and can change. Always confirm the
                current details in the official exam guide before booking.
              </span>
            </p>
            {cert.sources.length > 0 && (
              <div className="mt-5 text-sm text-muted">
                <p className="font-semibold text-ink">
                  Official sources{cert.lastReviewed ? `, checked ${formatDate(cert.lastReviewed)}` : ""}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {cert.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} rel="noopener nofollow" target="_blank" className="underline decoration-line-strong underline-offset-2 hover:text-ink">
                        {s.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <dl className="grid self-start gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white p-6 sm:[&:last-child:nth-child(odd)]:col-span-2">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-ink">
                  <Val value={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Free study resources — only when a guide or question set exists */}
      {hasResources && (
        <Section tone="surface" labelledBy="resources-title" className="!py-16 sm:!py-20">
          <SectionHeader
            id="resources-title"
            eyebrow="Free study resources"
            title={`Free ${cert.name} exam prep`}
            intro="Start with the exam guide and free practice questions before you take the full practice exams."
          />
          <StudyResources cert={cert} current="exam" className="mt-10" />
        </Section>
      )}

      {/* What you'll practice — only when topics have been provided */}
      {cert.topics.length > 0 && (
        <Section tone="surface" labelledBy="topics-title">
          <SectionHeader
            id="topics-title"
            eyebrow="What you'll practice"
            title="Every area of the syllabus, tested"
            intro={`Questions across the ${cert.name} exam areas, so you find out where you are strong and where you are not.`}
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cert.topics.map((t, i) => (
              <li key={i} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
                <span className="font-display text-sm font-semibold text-accent-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">
                  <Val value={t.title} />
                </h3>
                {t.description && (
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    <Val value={t.description} />
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Six-test progression */}
      <Section tone={cert.topics.length > 0 ? "white" : "surface"} labelledBy="progression-title">
        <SectionHeader
          id="progression-title"
          eyebrow="Six tests that grow with you"
          title={`Your ${cert.name} ramp, test by test`}
          intro="Start with a diagnostic, reach real exam level at Test 4, then go beyond it. Take the tests in order and let each result guide your revision."
        />
        <div className="mt-12">
          <MethodologyGrid />
        </div>
      </Section>

      {/* How to get it */}
      <Section tone={cert.topics.length > 0 ? "surface" : "white"} labelledBy="offer-title">
        <SectionHeader
          id="offer-title"
          eyebrow={direct ? "Start free, then go all the way" : "Get the practice exams"}
          title={direct ? "Measure first. Then prepare properly." : `Start your ${cert.name} ramp`}
          align="center"
        />
        <div className="mt-12">
          <CertOffer cert={cert} />
        </div>
      </Section>

      {/* Methodology */}
      <Section tone={cert.topics.length > 0 ? "white" : "surface"} labelledBy="method-title">
        <SectionHeader id="method-title" eyebrow="Question & exam methodology" title="How the practice exams are built" />
        <div className="mt-12">
          <QuestionMethodology cert={cert} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone={cert.topics.length > 0 ? "surface" : "white"} labelledBy="cert-faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="cert-faq-title" eyebrow="FAQ" title={`${cert.name} practice exam questions`} />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faq} />
          </div>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section tone={cert.topics.length > 0 ? "white" : "surface"} labelledBy="related-title">
          <SectionHeader id="related-title" eyebrow={cert.categoryName} title="Related practice exams" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <CertificationCard cert={toCardData(r)} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Disclaimer */}
      <section aria-label="Disclaimer" className="bg-white pb-4 pt-16 sm:pt-20">
        <div className="container-page">
          <VendorDisclaimer
            vendorName={cert.vendorName}
            trademarkNotice={cert.trademarkNotice}
            certificationName={cert.name}
            note={cert.disclaimerNote}
          />
          <div className="mt-4">
            <LastReviewed cert={cert} />
          </div>
        </div>
      </section>

      <FinalCta
        title={`Are you ready for ${cert.name}?`}
        body={
          direct
            ? "Take the free practice test and find out where you stand today."
            : "Six tests, rising difficulty, one clear answer. Start with Test 1 and find out where you stand."
        }
        primary={
          cert.cta.freeTest.href && !cert.cta.freeTest.external
            ? { label: "Start Free Practice Test", href: cert.cta.freeTest.href }
            : direct
              ? { label: "Start Free Practice Test", href: `${cert.path}#free-test` }
              : { label: "Get the practice exams", href: `${cert.path}#udemy` }
        }
        secondary={{ label: "All practice exams", href: "/practice-exams" }}
      />

      <MobileStickyCta cert={cert} />

      {faqLd && <JsonLd data={faqLd} />}
      {credentialLd && <JsonLd data={{ "@context": "https://schema.org", ...credentialLd }} />}
      {productLd && <JsonLd data={productLd} />}
    </>
  );
}
