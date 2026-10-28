import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import { UdemyCta } from "@/components/certification/CertCta";
import { VendorDisclaimer } from "@/components/certification/VendorDisclaimer";
import { SourceList } from "@/components/content/ExamFactsList";
import { QuestionCard } from "@/components/content/QuestionCard";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { deGuidePath, deHubPath, deQuestionsPath, getAllDe, getDe } from "@/lib/content-de";
import { questionsPath } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { quizSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };
const HOME = { name: "Auf Deutsch", path: deHubPath };

export function generateStaticParams(): Params[] {
  return getAllDe().map(({ de }) => ({ slug: de.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const r = getDe((await params).slug);
  if (!r) return {};
  const { de, name } = r;
  return buildMetadata({
    title: de.questions.seo?.title ?? `${name} Übungsfragen mit Lösungen`,
    description: de.questions.seo?.description ?? de.questions.intro,
    path: deQuestionsPath(de.slug),
    locale: "de",
    languages: { en: questionsPath(de.slug), de: deQuestionsPath(de.slug) },
  });
}

export default async function DeQuestionsPage({ params }: { params: Promise<Params> }) {
  const r = getDe((await params).slug);
  if (!r) notFound();
  const { de, cert, name, germanCourse } = r;
  const set = de.questions;
  const path = deQuestionsPath(de.slug);
  const domains = de.domains.filter((d) => set.questions.some((q) => q.domain === d.id));
  let n = 0;

  return (
    <div lang="de">
      <PageHero
        home={HOME}
        crumbs={[{ name: `${name}: Übungsfragen`, path }]}
        eyebrow={`${cert.vendorName} · Kostenlose Übungsfragen`}
        title={`${name}: Übungsfragen mit Lösungen`}
        intro={<p>{set.intro}</p>}
      >
        <p className="mt-6 text-sm text-white/60">
          Aktualisiert am {formatDate(set.updated, "de")} ·{" "}
          <Link href={questionsPath(de.slug)} hrefLang="en" className="underline underline-offset-2 hover:text-white">
            English version
          </Link>
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <nav aria-label="Bereiche" className="lg:sticky lg:top-24">
              <p className="eyebrow">Zu Bereich springen</p>
              <ol className="mt-4 space-y-2 text-[0.9375rem]">
                {domains.map((d) => (
                  <li key={d.id}>
                    <a href={`#bereich-${d.id}`} className="text-muted hover:text-ink hover:underline">
                      {d.name}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted">
                Neu in der Prüfung?{" "}
                <Link href={deGuidePath(de.slug)} className="font-semibold text-accent-600 hover:underline">
                  Zum {name}-Leitfaden
                </Link>
                .
              </p>
            </nav>
          </div>

          <div className="min-w-0 lg:col-span-9">
            <div className="flex items-start gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-5 text-sm leading-relaxed text-muted">
              <Icon name="info" className="mt-0.5 size-4 shrink-0" />
              <p>
                Dies sind eigene Übungsfragen von CertRamp, geschrieben nach der offiziellen Prüfungsgliederung von {cert.vendorName}.
                Es sind keine echten Prüfungsfragen und sie stammen aus keiner Prüfung. Beantworten Sie jede Frage zuerst selbst und
                öffnen Sie dann die Lösung mit der Erklärung zu jeder Option.
              </p>
            </div>

            {domains.map((d) => {
              const index = de.domains.findIndex((x) => x.id === d.id) + 1;
              return (
                <section key={d.id} id={`bereich-${d.id}`} aria-labelledby={`bereich-${d.id}-titel`} className="mt-14 scroll-mt-24">
                  <p className="eyebrow">Bereich {index}</p>
                  <h2 id={`bereich-${d.id}-titel`} className="mt-2 text-2xl font-semibold sm:text-3xl">
                    {d.name}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {set.questions
                      .filter((q) => q.domain === d.id)
                      .map((q) => (
                        <QuestionCard key={q.id} q={q} number={++n} domainName={d.name} locale="de" />
                      ))}
                  </div>
                </section>
              );
            })}

            <SourceList sources={cert.exam.sources} lastVerified={cert.exam.lastVerified} className="mt-14" locale="de" />
          </div>
        </div>
      </Section>

      <Section tone="navy" labelledBy="mehr-uebung-titel">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent-300">Mehr üben?</p>
          <h2 id="mehr-uebung-titel" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {set.questions.length} Fragen sind nur ein Ausschnitt.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Die vollständigen CertRamp-Übungsprüfungen zu {name} auf Deutsch umfassen sechs Tests mit steigendem Schwierigkeitsgrad –
            vom Einstufungstest über Prüfungsniveau bis darüber hinaus, mit einer Erklärung zu jeder Option.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <UdemyCta cert={cert} course={germanCourse} variant="primary" location="de-questions" label="Zum deutschen Kurs auf Udemy" />
            <Link
              href={deGuidePath(de.slug)}
              className="inline-flex h-13 items-center justify-center rounded-full px-7 font-display font-semibold text-white ring-1 ring-inset ring-white/25 hover:bg-white/5 hover:ring-white/60"
            >
              Zum Prüfungsleitfaden
            </Link>
          </div>
        </div>
      </Section>

      <section aria-label="Hinweis" className="bg-white py-14">
        <div className="container-page">
          <VendorDisclaimer vendorName={cert.vendorName} trademarkNotice={cert.trademarkNotice} certificationName={name} note={null} locale="de" />
        </div>
      </section>

      <JsonLd
        data={quizSchema({
          cert,
          path,
          name: `${name}: Übungsfragen`,
          description: set.seo?.description ?? set.intro,
          updated: set.updated,
          questions: set.questions,
          inLanguage: "de",
        })}
      />
    </div>
  );
}
