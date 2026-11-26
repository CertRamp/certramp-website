import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExamChangeCard } from "@/components/content/ExamChangeCard";
import { ExamAlertSignup } from "@/components/blocks/ExamAlertSignup";
import { alertFormFor } from "@/config/alerts";
import { getCertification } from "@/lib/certifications";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import { examChangeDetailPages, examChangeDetailPath } from "@/content/exam-changes/detail-pages";
import { examChangesPath, getExamChanges } from "@/lib/exam-changes";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return examChangeDetailPages.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

function load(slug: string) {
  const page = examChangeDetailPages.find((p) => p.slug === slug);
  if (!page) return null;
  const change = getExamChanges().find((c) => c.id === page.changeId);
  if (!change) throw new Error(`exam-change detail page ${slug}: unknown change ${page.changeId}`);
  return { page, change };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const data = load((await params).slug);
  if (!data) return {};
  return buildMetadata({
    title: data.page.seoTitle,
    description: data.page.description,
    path: examChangeDetailPath(data.page.slug),
    ogType: "article",
  });
}

export default async function ExamChangeDetail({ params }: { params: Promise<Params> }) {
  const data = load((await params).slug);
  if (!data) notFound();
  const { page, change } = data;
  const path = examChangeDetailPath(page.slug);
  // Alert sign-up for the exam candidates should study now: the last linked course with a live form (the successor comes last).
  const alertSlug = [...change.certramp].reverse().find((s) => alertFormFor(s));
  const alertCert = alertSlug ? getCertification(alertSlug) : undefined;
  return (
    <div lang="en">
      <PageHero
        crumbs={[
          { name: "Exam changes", path: examChangesPath },
          { name: change.exam, path },
        ]}
        eyebrow={`${change.vendor} exam change`}
        title={page.title}
        intro={<p>{page.intro}</p>}
      />
      <Section>
        <div className="max-w-3xl">
          <ol>
            <ExamChangeCard c={change} locale="en" showDetailLink={false} />
          </ol>
          <h2 className="mt-12 text-2xl font-semibold sm:text-3xl">Questions and answers</h2>
          <dl className="mt-6 grid gap-6">
            {page.faq.map((f) => (
              <div key={f.q}>
                <dt className="text-lg font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-body">{f.a}</dd>
              </div>
            ))}
          </dl>
          {alertCert && <ExamAlertSignup slug={alertCert.slug} exam={alertCert.name} className="mt-12 rounded-[var(--radius-card)] border border-line bg-white p-6" />}
          <p className="mt-12 text-sm text-muted">
            More retirements and new exam versions:{" "}
            <Link href={examChangesPath} className="font-semibold text-accent-600 hover:underline">
              all exam changes 2026 to 2027
            </Link>
            .
          </p>
        </div>
      </Section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${absoluteUrl(path)}#article`,
              headline: page.title,
              description: page.description,
              url: absoluteUrl(path),
              dateModified: change.verified,
              inLanguage: "en",
              publisher: { "@id": `${absoluteUrl("/")}#organization` },
            },
            {
              "@type": "FAQPage",
              mainEntity: page.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />
    </div>
  );
}
