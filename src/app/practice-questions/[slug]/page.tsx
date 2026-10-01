import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CertCta, UdemyCta } from "@/components/certification/CertCta";
import { VendorDisclaimer } from "@/components/certification/VendorDisclaimer";
import { QuestionCard } from "@/components/content/QuestionCard";
import { SourceList } from "@/components/content/ExamFactsList";
import { StudyResources } from "@/components/content/StudyResources";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getAllQuestionSets, getQuestionSet, getResources, questionsPath } from "@/lib/content";
import { getCertification } from "@/lib/certifications";
import { formatDate } from "@/lib/format";
import { quizSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllQuestionSets().map(({ set }) => ({ slug: set.slug }));
}
export const dynamicParams = false;

function load(slug: string) {
  const set = getQuestionSet(slug);
  const cert = getCertification(slug);
  if (!set || !cert?.exam) return null;
  return { set, cert, exam: cert.exam };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const data = load((await params).slug);
  if (!data) return {};
  const { set, cert } = data;
  return buildMetadata({
    title: set.seo?.title ?? `${cert.name} Practice Questions`,
    description: set.seo?.description ?? set.intro,
    path: questionsPath(cert.slug),
  });
}

export default async function PracticeQuestionsPage({ params }: { params: Promise<Params> }) {
  const data = load((await params).slug);
  if (!data) notFound();
  const { set, cert, exam } = data;
  const path = questionsPath(cert.slug);
  const resources = getResources(cert.slug);
  const domains = (exam.domains ?? []).filter((d) => set.questions.some((q) => q.domain === d.id));
  let n = 0;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Practice Exams", path: "/practice-exams" },
          { name: cert.name, path: cert.path },
          { name: "Practice Questions", path },
        ]}
        eyebrow={`${cert.vendorName} · Free practice questions`}
        title={`${cert.name} Practice Questions`}
        intro={<p>{set.intro}</p>}
      >
        <p className="mt-6 text-sm text-white/60">
          Written for {exam.examVersion ? `the ${exam.examVersion.charAt(0).toLowerCase()}${exam.examVersion.slice(1)}` : `the current ${cert.name} exam`} ·
          Updated {formatDate(set.updated)}
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <nav aria-label="Domains" className="lg:sticky lg:top-24">
              <p className="eyebrow">Jump to domain</p>
              <ol className="mt-4 space-y-2 text-[0.9375rem]">
                {domains.map((d) => (
                  <li key={d.id}>
                    <a href={`#domain-${d.id}`} className="text-muted hover:text-ink hover:underline">
                      {d.name}
                    </a>
                  </li>
                ))}
              </ol>
              {resources.guide && (
                <p className="mt-8 text-sm text-muted">
                  New to the exam?{" "}
                  <Link href={resources.guide.path} className="font-semibold text-accent-600 hover:underline">
                    Read the {cert.name} exam guide
                  </Link>
                  .
                </p>
              )}
            </nav>
          </div>

          <div className="min-w-0 lg:col-span-9">
            <div className="flex items-start gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-5 text-sm leading-relaxed text-muted">
              <Icon name="info" className="mt-0.5 size-4 shrink-0" />
              <p>
                These are original practice questions written by CertRamp to the official {cert.vendorName} exam outline. They are not
                real exam questions and do not come from any exam. Try each question first, then open the answer to see the
                explanation for every option.
              </p>
            </div>

            {domains.map((d) => {
              const index = (exam.domains ?? []).findIndex((x) => x.id === d.id) + 1;
              return (
                <section key={d.id} id={`domain-${d.id}`} aria-labelledby={`domain-${d.id}-title`} className="mt-14 scroll-mt-24">
                  <p className="eyebrow">Domain {index}</p>
                  <h2 id={`domain-${d.id}-title`} className="mt-2 text-2xl font-semibold sm:text-3xl">
                    {d.name}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {set.questions
                      .filter((q) => q.domain === d.id)
                      .map((q) => (
                        <QuestionCard key={q.id} q={q} number={++n} domainName={d.name} />
                      ))}
                  </div>
                </section>
              );
            })}

            <SourceList sources={exam.sources} lastVerified={exam.lastVerified} className="mt-14" />
          </div>
        </div>
      </Section>

      <Section tone="navy" labelledBy="more-practice-title">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent-300">Want more practice?</p>
          <h2 id="more-practice-title" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {set.questions.length} questions are a sample. The exam is {exam.questionCount ? `${exam.questionCount} items` : "much longer"}.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            The full CertRamp {cert.name} practice exams
            {cert.questionCount ? ` have ${cert.questionCount} questions in ${cert.practiceExamCount} tests` : ` have ${cert.practiceExamCount} tests`} that
            grow with you — from a diagnostic start to an exam-level Test 4 and a challenge set beyond the exam, with an explanation
            for every option.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CertCta cert={cert} kind="simulator" location="questions" />
            {cert.cta.simulator.href ? (
              <UdemyCta cert={cert} variant="inverse-outline" location="questions" />
            ) : (
              <UdemyCta cert={cert} variant="primary" location="questions" label="Practise the full exam on Udemy" />
            )}
            <Link href={cert.path} className="inline-flex h-13 items-center justify-center rounded-full px-7 font-display font-semibold text-white ring-1 ring-inset ring-white/25 hover:bg-white/5 hover:ring-white/60">
              How the practice exams work
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="more-title">
        <SectionHeader id="more-title" eyebrow="Keep preparing" title={`More ${cert.name} preparation`} />
        <StudyResources cert={cert} current="questions" className="mt-10" />
      </Section>

      <section aria-label="Disclaimer" className="bg-white py-14">
        <div className="container-page">
          <VendorDisclaimer vendorName={cert.vendorName} trademarkNotice={cert.trademarkNotice} certificationName={cert.name} note={cert.disclaimerNote} />
        </div>
      </section>

      <JsonLd
        data={quizSchema({
          cert,
          path,
          name: `${cert.name} Practice Questions`,
          description: set.seo?.description ?? set.intro,
          updated: set.updated,
          questions: set.questions,
        })}
      />
    </>
  );
}
