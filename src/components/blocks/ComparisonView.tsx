import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import { comparePath, type Comparison } from "@/content/compare";
import { deHubPath } from "@/lib/content-de";
import type { ResolvedCertification } from "@/lib/certifications";
import { formatIsoDate, t } from "@/lib/course-data";

const copy = {
  en: {
    crumb: "Practice Exams",
    eyebrow: "Certification comparison",
    checked: (d: string) => `Facts checked against the official exam pages on ${d}.`,
    caption: (x: string) => `${x}: exam facts side by side`,
    fact: "Fact",
    official: "See the official page",
    labels: ["Vendor", "Official name", "Exam code", "Level", "Who it is for", "What it covers", "Exam domains (official weight)", "Questions", "Duration", "Format", "Passing score", "Exam languages", "Delivery", "Prerequisites"],
    fits: "fits if",
    practice: (n: string) => `${n} practice exams`,
    neutral:
      "This comparison describes the exams as the vendor publishes them; it does not rank vendors or certifications. Exam details can change: confirm them on the official pages before you book.",
    other: "Auf Deutsch",
    factsLang: null as string | null,
  },
  de: {
    crumb: "Auf Deutsch",
    eyebrow: "Zertifizierungen im Vergleich",
    checked: (d: string) => `Angaben am ${d} mit den offiziellen Prüfungsseiten abgeglichen.`,
    caption: (x: string) => `${x}: Prüfungsdaten im Vergleich`,
    fact: "Angabe",
    official: "Siehe offizielle Seite",
    labels: ["Anbieter", "Offizieller Name", "Prüfungscode", "Niveau", "Für wen", "Inhalt", "Prüfungsdomains (offizielle Gewichtung)", "Fragen", "Dauer", "Format", "Bestehensgrenze", "Prüfungssprachen", "Durchführung", "Voraussetzungen"],
    fits: "passt, wenn",
    practice: (n: string) => `${n} Übungsprüfungen`,
    neutral:
      "Dieser Vergleich beschreibt die Prüfungen so, wie der Anbieter sie veröffentlicht; er bewertet weder Anbieter noch Zertifizierungen. Prüfungsdetails können sich ändern: Prüf sie vor der Buchung auf den offiziellen Seiten.",
    other: "In English",
    factsLang: "en" as string | null,
  },
};

export const comparePathFor = (id: string, locale: "en" | "de") => (locale === "de" ? `/de/vergleich/${id}` : comparePath(id));

const domains = (x: ResolvedCertification) => x.exam?.domains?.map((d) => `${d.name}${d.weight ? ` (${d.weight})` : ""}`).join("; ");

/**
 * Comparison page body in English or German. Written rows (level, audience,
 * focus, summary, choose) are localized; exam facts come from the verified
 * English records in certifications.ts and are marked lang="en" on the German page.
 */
export function ComparisonView({ c, a, b, locale }: { c: Comparison; a: ResolvedCertification; b: ResolvedCertification; locale: "en" | "de" }) {
  const l = copy[locale];
  const ea = a.exam;
  const eb = b.exam;
  const L = l.labels;
  // [label, a, b, written-in-page-language]
  const rows: [string, string | undefined, string | undefined, boolean][] = [
    [L[0], a.vendorName, b.vendorName, true],
    [L[1], ea?.officialName ?? a.fullName, eb?.officialName ?? b.fullName, true],
    [L[2], ea?.examCode, eb?.examCode, true],
    [L[3], t(c.a.level, locale), t(c.b.level, locale), true],
    [L[4], t(c.a.audience, locale), t(c.b.audience, locale), true],
    [L[5], t(c.a.focus, locale), t(c.b.focus, locale), true],
    [L[6], domains(a), domains(b), false],
    [L[7], ea?.questionCount, eb?.questionCount, false],
    [L[8], ea?.duration, eb?.duration, false],
    [L[9], ea?.format ?? ea?.questionTypes, eb?.format ?? eb?.questionTypes, false],
    [L[10], ea?.passingScore, eb?.passingScore, false],
    [L[11], ea?.languages?.join(", "), eb?.languages?.join(", "), false],
    [L[12], ea?.delivery, eb?.delivery, false],
    [L[13], ea?.prerequisites, eb?.prerequisites, false],
  ];
  const sources = [...(ea?.sources ?? []), ...(eb?.sources ?? [])].filter((s) => s.url);
  const title = `${a.name} vs ${b.name}`;
  const path = comparePathFor(c.id, locale);
  const factLang = (local: boolean) => (local || !l.factsLang ? undefined : l.factsLang);

  return (
    <div lang={locale}>
      <PageHero
        home={locale === "de" ? { name: "Auf Deutsch", path: deHubPath } : undefined}
        crumbs={locale === "de" ? [{ name: title, path }] : [{ name: l.crumb, path: "/practice-exams" }, { name: title, path }]}
        eyebrow={l.eyebrow}
        title={title}
        intro={<p>{t(c.summary, locale)}</p>}
      >
        <p className="mt-6 text-sm text-white/60">{l.checked(formatIsoDate(c.checked, locale))}</p>
        <p className="mt-2 text-sm text-white/60">
          <Link href={comparePathFor(c.id, locale === "de" ? "en" : "de")} hrefLang={locale === "de" ? "en" : "de"} className="underline underline-offset-2 hover:text-white">
            {l.other}
          </Link>
        </p>
      </PageHero>

      <Section className="!pt-12">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-[0.9375rem]">
            <caption className="sr-only">{l.caption(title)}</caption>
            <thead>
              <tr className="border-b border-line-strong">
                <th scope="col" className="w-1/5 py-3 pr-4 text-sm font-semibold text-muted">
                  <span className="sr-only">{l.fact}</span>
                </th>
                <th scope="col" className="py-3 pr-4 font-display text-lg font-semibold text-ink">{a.name}</th>
                <th scope="col" className="py-3 font-display text-lg font-semibold text-ink">{b.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, va, vb, local]) => (
                <tr key={label} className="border-b border-line align-top">
                  <th scope="row" className="py-3 pr-4 text-sm font-semibold text-muted">{label}</th>
                  <td className="py-3 pr-4 leading-relaxed text-body" lang={va ? factLang(local) : undefined}>{va ?? l.official}</td>
                  <td className="py-3 leading-relaxed text-body" lang={vb ? factLang(local) : undefined}>{vb ?? l.official}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            { cert: a, text: t(c.choose.a, locale) },
            { cert: b, text: t(c.choose.b, locale) },
          ].map(({ cert, text }) => (
            <div key={cert.slug} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <p className="leading-relaxed text-body">
                <span className="font-semibold text-ink">{cert.name}</span> {l.fits} {text}
              </p>
              <Link href={cert.path} className="mt-4 inline-block font-semibold text-accent-600 hover:underline">
                {l.practice(cert.name)}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">{l.neutral}</p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2 hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description: t(c.summary, locale),
          url: absoluteUrl(path),
          dateModified: c.checked,
          inLanguage: locale,
          publisher: { "@id": `${absoluteUrl("/")}#organization` },
        }}
      />
    </div>
  );
}
