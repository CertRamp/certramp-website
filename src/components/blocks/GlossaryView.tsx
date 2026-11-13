import { GlossarySearch } from "@/components/blocks/GlossarySearch";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import type { CourseData, GlossaryTerm } from "@/content/course-data/types";
import type { ResolvedCertification } from "@/lib/certifications";
import { deHubPath } from "@/lib/content-de";
import { formatIsoDate, glossaryPath, readinessPath, t, type Locale } from "@/lib/course-data";
import { getResources } from "@/lib/content";

const LANG_NAMES: Record<string, { en: string; de: string }> = {
  de: { en: "German", de: "Deutsch" },
  pt: { en: "Portuguese", de: "Portugiesisch" },
  es: { en: "Spanish", de: "Spanisch" },
  fr: { en: "French", de: "Französisch" },
};

export const glossaryCopy = {
  en: {
    eyebrow: "Exam glossary",
    title: (n: string) => `${n} glossary`,
    seoTitle: (n: string) => `${n} Glossary: Key Exam Terms Explained`,
    description: (n: string, c: number) => `${c} key ${n} exam terms with short definitions and their German equivalents, for learners who study in their own language and take the exam in English.`,
    intro: (n: string) =>
      `The terms you meet in the ${n} exam, with a short definition. The exam is in English: the German equivalent helps if you study in German. Portuguese, Spanish and French will follow.`,
    search: "Search the glossary",
    placeholder: "e.g. InfiniBand, MIG, inference",
    empty: "No term matches your search.",
    count: "{n} terms match.",
    jump: "Jump to letter",
    term: "Term",
    domain: "Exam domain",
    reviewed: "Definitions checked against official documentation on",
    sources: "Sources",
    related: "Keep going",
    exam: (n: string) => `${n} practice exams`,
    tool: "Readiness check and study planner",
    guide: (n: string) => `${n} exam guide`,
    other: "Auf Deutsch",
    crumbs: "Glossary",
    home: undefined,
  },
  de: {
    eyebrow: "Prüfungsglossar",
    title: (n: string) => `${n}: Glossar`,
    seoTitle: (n: string) => `${n} Glossar: Prüfungsbegriffe auf Deutsch erklärt`,
    description: (n: string, c: number) => `${c} wichtige Begriffe der ${n}-Prüfung mit deutscher Erklärung und englischem Originalbegriff, für alle, die auf Deutsch lernen und die Prüfung auf Englisch ablegen.`,
    intro: (n: string) =>
      `Die Begriffe, die dir in der ${n}-Prüfung begegnen, mit kurzer Erklärung auf Deutsch. Die Prüfung findet auf Englisch statt: Lern den englischen Begriff mit, so wie er in der Prüfung steht.`,
    search: "Glossar durchsuchen",
    placeholder: "z. B. InfiniBand, MIG, Inferenz",
    empty: "Kein Begriff passt zu deiner Suche.",
    count: "{n} Begriffe gefunden.",
    jump: "Zum Buchstaben springen",
    term: "Begriff",
    domain: "Prüfungsdomain",
    reviewed: "Erklärungen mit der offiziellen Dokumentation abgeglichen am",
    sources: "Quellen",
    related: "Weiterlernen",
    exam: (n: string) => `${n} Übungsprüfungen (englisch)`,
    tool: "Readiness-Check und Lernplaner",
    guide: (n: string) => `${n} Prüfungsleitfaden (englisch)`,
    other: "In English",
    crumbs: "Glossar",
    home: { name: "Auf Deutsch", path: deHubPath },
  },
} as const;

/** Sort key and letter use the English exam term. */
const letterOf = (g: GlossaryTerm) => {
  const c = g.term[0].toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

export function GlossaryView({ cert, data, locale }: { cert: ResolvedCertification; data: CourseData; locale: Locale }) {
  const g = data.glossary!;
  const l = glossaryCopy[locale];
  const path = glossaryPath(cert.slug, locale);
  const terms = [...g.terms].sort((a, b) => a.term.localeCompare(b.term, "en"));
  const letters = [...new Set(terms.map(letterOf))];
  // Equivalents shown: every published language other than the page language that has data (German on the English page).
  const extra = (["de", "pt", "es", "fr"] as const).filter((code) => code !== locale && (code === "de" || terms.some((x) => x.translations[code])));
  const domains = cert.exam?.domains ?? [];
  const res = getResources(cert.slug);

  return (
    <div lang={locale}>
      <PageHero
        home={l.home}
        crumbs={[{ name: cert.name, path: cert.path }, { name: l.crumbs, path }]}
        eyebrow={l.eyebrow}
        title={l.title(cert.name)}
        intro={<p>{l.intro(cert.name)}</p>}
      >
        <p className="mt-6 text-sm text-white/60">
          {terms.length} {locale === "de" ? "Begriffe" : "terms"} · {l.reviewed} {formatIsoDate(g.reviewed, locale)} ·{" "}
          <Link href={glossaryPath(cert.slug, locale === "de" ? "en" : "de")} hrefLang={locale === "de" ? "en" : "de"} className="underline underline-offset-2 hover:text-white">
            {l.other}
          </Link>
        </p>
      </PageHero>

      <Section className="!pt-12">
        <GlossarySearch label={l.search} placeholder={l.placeholder} empty={l.empty} countLabel={l.count} />
        <nav aria-label={l.jump} className="mt-6 flex flex-wrap gap-1.5">
          {letters.map((c) => (
            <a key={c} href={`#letter-${c}`} className="grid size-9 place-items-center rounded-lg bg-surface font-semibold text-ink ring-1 ring-inset ring-line hover:ring-line-strong">
              {c}
            </a>
          ))}
        </nav>

        <div id="glossary-list" className="mt-10 space-y-10">
          {letters.map((c) => (
            <section key={c} data-letter-group aria-labelledby={`letter-${c}`}>
              <h2 id={`letter-${c}`} className="scroll-mt-24 border-b border-line pb-2 font-display text-2xl font-semibold">
                {c}
              </h2>
              <dl className="mt-4 grid gap-4 lg:grid-cols-2">
                {terms
                  .filter((x) => letterOf(x) === c)
                  .map((x) => {
                    const local = t(x.translations, locale);
                    const search = [x.term, x.abbr, ...Object.values(x.translations), t(x.definition, locale)].filter(Boolean).join(" ").toLowerCase();
                    const dom = domains.find((d) => d.id === x.domain);
                    return (
                      <div key={x.id} id={x.id} data-glossary-text={search} className="scroll-mt-24 rounded-[var(--radius-card)] border border-line bg-white p-5">
                        <dt>
                          <span className="font-display text-lg font-semibold text-ink" lang="en">
                            {x.term}
                          </span>
                          {x.abbr && <span className="ml-2 text-sm font-semibold text-muted" lang="en">({x.abbr})</span>}
                          <a href={`#${x.id}`} className="ml-2 text-sm text-muted hover:text-accent-600" aria-label={`${locale === "de" ? "Link zu" : "Link to"} ${x.term}`}>
                            #
                          </a>
                          {locale !== "en" && local !== x.term && <span className="mt-0.5 block text-sm text-body">{local}</span>}
                          {extra.map((code) =>
                            x.translations[code] ? (
                              <span key={code} className="mt-0.5 block text-sm text-body" lang={code}>
                                <span className="text-muted">{LANG_NAMES[code][locale]}: </span>
                                {x.translations[code]}
                              </span>
                            ) : null,
                          )}
                        </dt>
                        <dd className="mt-2 leading-relaxed text-body">{t(x.definition, locale)}</dd>
                        {dom && (
                          <dd className="mt-2 text-xs text-muted">
                            {l.domain}: <span lang="en">{dom.name}</span>
                          </dd>
                        )}
                      </div>
                    );
                  })}
              </dl>
            </section>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">{l.related}</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href={cert.path} className="font-semibold text-accent-600 hover:underline">
                  {l.exam(cert.name)}
                </Link>
              </li>
              {data.readiness && (
                <li>
                  <Link href={readinessPath(cert.slug, locale)} className="font-semibold text-accent-600 hover:underline">
                    {l.tool}
                  </Link>
                </li>
              )}
              {res.guide && (
                <li>
                  <Link href={res.guide.path} className="font-semibold text-accent-600 hover:underline">
                    {l.guide(cert.name)}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">{l.sources}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {g.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2 hover:text-ink">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": `${absoluteUrl(path)}#glossary`,
          name: l.title(cert.name),
          url: absoluteUrl(path),
          inLanguage: locale,
          dateModified: g.reviewed,
          hasDefinedTerm: terms.map((x) => ({
            "@type": "DefinedTerm",
            "@id": `${absoluteUrl(path)}#${x.id}`,
            name: locale === "en" ? x.term : t(x.translations, locale),
            ...(locale !== "en" ? { alternateName: x.term } : x.abbr ? { alternateName: x.abbr } : {}),
            ...(x.abbr ? { termCode: x.abbr } : {}),
            description: t(x.definition, locale),
            url: `${absoluteUrl(path)}#${x.id}`,
            inDefinedTermSet: `${absoluteUrl(path)}#glossary`,
          })),
        }}
      />
    </div>
  );
}
