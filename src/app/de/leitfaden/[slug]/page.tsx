import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import { UdemyCta } from "@/components/certification/CertCta";
import { VendorDisclaimer } from "@/components/certification/VendorDisclaimer";
import { ExamFactsList } from "@/components/content/ExamFactsList";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/FaqList";
import { Section } from "@/components/ui/Section";
import { deGuidePath, deHubPath, deQuestionsPath, getAllDe, getDe } from "@/lib/content-de";
import { guidePath } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { faqSchema, guideArticleSchema } from "@/lib/schema";
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
    title: de.guide.seo?.title ?? `${name} Prüfung: Leitfaden`,
    description: de.guide.seo?.description ?? de.guide.summary,
    path: deGuidePath(de.slug),
    ogType: "article",
    locale: "de",
    languages: { en: guidePath(de.slug), de: deGuidePath(de.slug) },
  });
}

export default async function DeGuidePage({ params }: { params: Promise<Params> }) {
  const r = getDe((await params).slug);
  if (!r) notFound();
  const { de, cert, name, germanCourse } = r;
  const { guide } = de;
  const path = deGuidePath(de.slug);
  const toc = [
    ...(guide.whoFor ? [{ id: "fuer-wen", heading: `Für wen ist ${name}?` }] : []),
    { id: "pruefungsfakten", heading: "Prüfungsfakten" },
    { id: "bereiche", heading: "Prüfungsbereiche" },
    ...guide.sections.map((s) => ({ id: s.id, heading: s.heading })),
    { id: "faq", heading: "Häufige Fragen" },
  ];
  const faqLd = faqSchema(guide.faq);

  return (
    <div lang="de">
      <PageHero
        home={HOME}
        crumbs={[{ name: `${name}: Leitfaden`, path }]}
        eyebrow={`${cert.vendorName} · Prüfungsleitfaden`}
        title={`${name}: Leitfaden zur Prüfung`}
        intro={<p>{guide.summary}</p>}
      >
        <p className="mt-6 max-w-2xl text-sm text-white/70">{de.languageNote}</p>
        <p className="mt-3 text-sm text-white/60">
          Aktualisiert am {formatDate(guide.updated, "de")} · Prüfungsangaben am {formatDate(cert.exam.lastVerified, "de")} anhand
          offizieller Quellen von {cert.vendorName} geprüft ·{" "}
          <Link href={guidePath(de.slug)} hrefLang="en" className="underline underline-offset-2 hover:text-white">
            English version
          </Link>
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <nav aria-label="Auf dieser Seite" className="lg:sticky lg:top-24">
              <p className="eyebrow">Auf dieser Seite</p>
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
              <section aria-labelledby="fuer-wen" className="scroll-mt-24">
                <h2 id="fuer-wen" className="text-2xl font-semibold sm:text-3xl">Für wen ist {name}?</h2>
                <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-body marker:text-accent-500">
                  {guide.whoFor.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="pruefungsfakten" className="scroll-mt-24">
              <h2 id="pruefungsfakten" className="text-2xl font-semibold sm:text-3xl">{name}: Prüfungsfakten</h2>
              {cert.exam.officialName && <p className="mt-3 text-muted">{cert.exam.officialName} ({cert.vendorName})</p>}
              <div className="mt-6">
                <ExamFactsList facts={de.facts} sources={cert.exam.sources} lastVerified={cert.exam.lastVerified} locale="de" />
              </div>
            </section>

            <section aria-labelledby="bereiche" className="scroll-mt-24">
              <h2 id="bereiche" className="text-2xl font-semibold sm:text-3xl">Die {de.domains.length} Prüfungsbereiche</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Bereiche nach der offiziellen Prüfungsgliederung von {cert.vendorName}
                {de.domains.some((d) => d.weight) ? ", mit offizieller Gewichtung" : ""}.
              </p>
              <ol className="mt-6 space-y-4">
                {de.domains.map((d, i) => (
                  <li key={d.id} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
                    <h3 className="flex flex-wrap items-baseline gap-x-3 text-lg font-semibold">
                      <span className="font-display text-sm text-accent-600">Bereich {i + 1}</span>
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

            {guide.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="scroll-mt-24">
                <h2 id={s.id} className="text-2xl font-semibold sm:text-3xl">{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-body">
                    {p}
                  </p>
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
                        <span className="font-display text-sm font-semibold text-accent-600">Schritt {i + 1}</span>
                        <h3 className="mt-2 text-lg font-semibold">{st.title}</h3>
                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{st.body}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            ))}

            <section aria-labelledby="jetzt-testen" className="rounded-[1.5rem] bg-navy-900 p-8 text-white sm:p-10">
              <h2 id="jetzt-testen" className="text-2xl font-semibold text-white sm:text-3xl">
                Jetzt testen
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {de.questions.questions.length} kostenlose, eigene Übungsfragen zu {name} – jede mit Lösung und einer Erklärung zu
                jeder Antwortoption.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={deQuestionsPath(de.slug)}
                  className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 font-display font-semibold text-navy-900 hover:bg-accent-50"
                >
                  Kostenlose Übungsfragen
                </Link>
                <UdemyCta cert={cert} course={germanCourse} variant="inverse-outline" location="de-guide" label="Komplette Übungsprüfungen auf Udemy" />
              </div>
            </section>

            <section aria-labelledby="faq" className="scroll-mt-24">
              <h2 id="faq" className="text-2xl font-semibold sm:text-3xl">Häufige Fragen zur {name}-Prüfung</h2>
              <div className="mt-6">
                <FaqList items={guide.faq} />
              </div>
            </section>
          </div>
        </div>
      </Section>

      <section aria-label="Hinweis" className="bg-white py-14">
        <div className="container-page">
          <VendorDisclaimer
            vendorName={cert.vendorName}
            trademarkNotice={cert.trademarkNotice}
            certificationName={name}
            note={null}
            locale="de"
          />
        </div>
      </section>

      <JsonLd
        data={guideArticleSchema({
          cert,
          path,
          headline: guide.seo?.title ?? `${name}: Leitfaden zur Prüfung`,
          description: guide.seo?.description ?? guide.summary,
          published: guide.published,
          updated: guide.updated,
          inLanguage: "de",
        })}
      />
      {faqLd && <JsonLd data={faqLd} />}
    </div>
  );
}
