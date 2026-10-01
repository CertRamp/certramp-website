import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExamFactsList } from "@/components/content/ExamFactsList";
import { StudyResources } from "@/components/content/StudyResources";
import { UdemyCta, CertCta } from "@/components/certification/CertCta";
import { VendorDisclaimer } from "@/components/certification/VendorDisclaimer";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/FaqList";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getAllGuides, getGuide, getResources, guidePath } from "@/lib/content";
import { getCertification } from "@/lib/certifications";
import { formatDate } from "@/lib/format";
import { faqSchema, guideArticleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllGuides().map(({ guide }) => ({ slug: guide.slug }));
}
export const dynamicParams = false;

function load(slug: string) {
  const guide = getGuide(slug);
  const cert = getCertification(slug);
  if (!guide || !cert?.exam) return null;
  return { guide, cert, exam: cert.exam };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const data = load((await params).slug);
  if (!data) return {};
  const { guide, cert } = data;
  return buildMetadata({
    title: guide.seo?.title ?? `${cert.name} Exam Guide`,
    description: guide.seo?.description ?? guide.summary,
    path: guidePath(cert.slug),
    ogType: "article",
  });
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const data = load((await params).slug);
  if (!data) notFound();
  const { guide, cert, exam } = data;
  const path = guidePath(cert.slug);
  const resources = getResources(cert.slug);
  const toc = [
    ...(guide.whoFor ? [{ id: "who-for", heading: `Who the ${cert.name} is for` }] : []),
    { id: "exam-facts", heading: "Exam facts" },
    ...(exam.domains?.length ? [{ id: "domains", heading: "Exam domains" }] : []),
    ...guide.sections.map((s) => ({ id: s.id, heading: s.heading })),
    { id: "faq", heading: "FAQ" },
  ];
  const faqLd = faqSchema(guide.faq);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Practice Exams", path: "/practice-exams" },
          { name: cert.name, path: cert.path },
          { name: "Exam Guide", path },
        ]}
        eyebrow={`${cert.vendorName} · Exam guide`}
        title={`${cert.name} Exam Guide`}
        intro={<p>{guide.summary}</p>}
      >
        <p className="mt-6 text-sm text-white/60">
          Updated {formatDate(guide.updated)} · Exam information verified {formatDate(exam.lastVerified)} against official {cert.vendorName} sources
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <nav aria-label="On this page" className="lg:sticky lg:top-24">
              <p className="eyebrow">On this page</p>
              <ol className="mt-4 space-y-2 text-[0.9375rem]">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-muted hover:text-ink hover:underline">
                      {t.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="min-w-0 space-y-16 lg:col-span-9">
            {guide.whoFor && (
              <section aria-labelledby="who-for" className="scroll-mt-24">
                <h2 id="who-for" className="text-2xl font-semibold sm:text-3xl">Who the {cert.name} is for</h2>
                <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-body marker:text-accent-500">
                  {guide.whoFor.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="exam-facts" className="scroll-mt-24">
              <h2 id="exam-facts" className="text-2xl font-semibold sm:text-3xl">{cert.name} exam facts</h2>
              {exam.officialName && <p className="mt-3 text-muted">{exam.officialName} ({cert.vendorName})</p>}
              <div className="mt-6">
                <ExamFactsList facts={cert.examOverview} sources={exam.sources} lastVerified={exam.lastVerified} />
              </div>
            </section>

            {exam.domains && exam.domains.length > 0 && (
              <section aria-labelledby="domains" className="scroll-mt-24">
                <h2 id="domains" className="text-2xl font-semibold sm:text-3xl">The {exam.domains.length} exam domains</h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Domains and objectives as published in the official {cert.vendorName} exam outline
                  {exam.domains.some((d) => d.weight) ? ", with their official weighting" : ""}.
                  {exam.domains.every((d) => !d.weight) && " Check the official outline for the current domain weighting."}
                </p>
                <ol className="mt-6 space-y-4">
                  {exam.domains.map((d, i) => (
                    <li key={d.id} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
                      <h3 className="flex flex-wrap items-baseline gap-x-3 text-lg font-semibold">
                        <span className="font-display text-sm text-accent-600">Domain {i + 1}</span>
                        {d.name}
                        {d.weight && <span className="text-sm font-medium text-muted">{d.weight}</span>}
                      </h3>
                      {d.objectives && (
                        <ul className="mt-3 grid gap-1.5 text-[0.9375rem] leading-relaxed text-body">
                          {d.objectives.map((o) => (
                            <li key={o}>{o}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {guide.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="scroll-mt-24">
                <h2 id={s.id} className="text-2xl font-semibold sm:text-3xl">{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-body">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-5 list-disc space-y-2.5 pl-5 leading-relaxed text-body marker:text-accent-500">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {s.steps && (
                  <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                    {s.steps.map((st, i) => (
                      <li key={st.title} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
                        <span className="font-display text-sm font-semibold text-accent-600">Step {i + 1}</span>
                        <h3 className="mt-2 text-lg font-semibold">{st.title}</h3>
                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{st.body}</p>
                      </li>
                    ))}
                  </ol>
                )}
                {s.id === "study-plan" && (
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                    The CertRamp {cert.name} practice exams follow the same idea: six tests whose difficulty rises from a diagnostic to
                    beyond exam level. <Link href={cert.path} className="font-semibold text-accent-600 underline-offset-2 hover:underline">See how the {cert.name} practice exams work</Link>.
                  </p>
                )}
              </section>
            ))}

            {resources.questions && (
              <section aria-labelledby="try-questions" className="rounded-[1.5rem] bg-navy-900 p-8 text-white sm:p-10">
                <h2 id="try-questions" className="text-2xl font-semibold text-white sm:text-3xl">Test yourself now</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                  Try {resources.questions.count} free, original {cert.name} practice questions — every one with the answer and an
                  explanation for each option.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={resources.questions.path} className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 font-display font-semibold text-navy-900 hover:bg-accent-50">
                    Try free {cert.name} questions
                  </Link>
                  <CertCta cert={cert} kind="simulator" variant="inverse-outline" location="guide" />
                  {!cert.cta.simulator.href && <UdemyCta cert={cert} variant="inverse-outline" location="guide" label="Full practice exams on Udemy" />}
                </div>
              </section>
            )}

            <section aria-labelledby="faq" className="scroll-mt-24">
              <h2 id="faq" className="text-2xl font-semibold sm:text-3xl">{cert.name} exam FAQ</h2>
              <div className="mt-6">
                <FaqList items={guide.faq} />
              </div>
            </section>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="more-title">
        <SectionHeader id="more-title" eyebrow="Keep preparing" title={`More ${cert.name} preparation`} />
        <StudyResources cert={cert} current="guide" className="mt-10" />
      </Section>

      <section aria-label="Disclaimer" className="bg-white py-14">
        <div className="container-page">
          <VendorDisclaimer vendorName={cert.vendorName} trademarkNotice={cert.trademarkNotice} certificationName={cert.name} note={cert.disclaimerNote} />
        </div>
      </section>

      <JsonLd
        data={guideArticleSchema({
          cert,
          path,
          headline: guide.seo?.title ?? `${cert.name} Exam Guide`,
          description: guide.seo?.description ?? guide.summary,
          published: guide.published,
          updated: guide.updated,
        })}
      />
      {faqLd && <JsonLd data={faqLd} />}
    </>
  );
}
