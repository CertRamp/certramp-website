import { ExamAlertSignup } from "@/components/blocks/ExamAlertSignup";
import { ReadinessTool, type ToolDomain, type ToolLink } from "@/components/blocks/ReadinessTool";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/FaqList";
import Link from "@/components/ui/Link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import type { CourseData } from "@/content/course-data/types";
import type { ResolvedCertification } from "@/lib/certifications";
import { getResources } from "@/lib/content";
import { deHubPath, getDeLinks } from "@/lib/content-de";
import { getAllCourseData, glossaryPath, readinessPath, type Locale } from "@/lib/course-data";
import { getCertification } from "@/lib/certifications";
import { deExamChangesPath, examChangesPath } from "@/lib/exam-changes";
import { TESTS, thresholdsFor, weightFraction } from "@/lib/readiness";
import { faqSchema } from "@/lib/schema";

export const readinessCopy = {
  en: {
    eyebrow: "Free study tool",
    title: (n: string) => `${n} readiness check and study planner`,
    seoTitle: (n: string) => `${n} Readiness Check & Study Planner (Free)`,
    description: (n: string) =>
      `Enter your ${n} practice test results and get an assessment along the six-test ramp, your weakest exam domains, the next step and a study plan to exam day. Free, no sign-up.`,
    intro: (n: string) =>
      `Enter the results of your CertRamp ${n} practice tests. The check reads them along the six-test ramp, ranks your weakest domains by official exam weight and builds a simple plan to your exam date. No sign-up: everything stays in your browser.`,
    crumb: "Readiness check",
    other: "Auf Deutsch",
    howTitle: "How the check reads your results",
    how: [
      "Test 1 is a baseline: it shows where you start, not whether you are ready.",
      "Tests 2 and 3 build depth; the bar rises towards exam level.",
      "Test 4 is written at exam level and is the most telling result.",
      "Tests 5 and 6 are harder than the exam on purpose, so lower scores there are expected.",
    ],
    thresholdsTitle: "Thresholds used",
    thresholdsIntro: "Score at or above which a result reads as on track / developing for that stage:",
    faqTitle: "Questions about the readiness check",
    faq: (n: string) => [
      { question: "How does the readiness check work?", answer: `You enter the overall percentage of each ${n} practice test you have taken and, if you like, your result per domain. The check compares each result with the threshold for that stage of the six-test ramp, shows your progress, ranks your weakest domains by official exam weight and suggests the next step and a plan to your exam date.` },
      { question: "Why does Test 4 count most?", answer: "Test 4 is written at the level of the real exam. Earlier tests build up to it, and Tests 5 and 6 go beyond it, so Test 4 says the most about exam readiness." },
      { question: "Why are my scores lower in Tests 5 and 6?", answer: "Tests 5 and 6 are deliberately harder than the exam. A lower score than in Test 4 is normal; the check uses lower thresholds for them." },
      { question: "Does a good result mean I will pass?", answer: "No. The check is study guidance, not a prediction or a guarantee. Official exams are scored by the vendor, often with pass marks that are not published." },
      { question: "Are my results stored or sent anywhere?", answer: "Your entries and notes are saved only in your own browser (local storage) so they are still there next time. Nothing is sent to CertRamp, and there is no account. Use \"Clear my entries\" to delete them." },
      { question: "How were the thresholds chosen?", answer: "The Test 4 mark of 80% leaves a margin above typical vendor pass marks (often 65 to 75%, many vendors do not publish theirs) for exam-day nerves and unfamiliar wording. The marks for Tests 5 and 6 are lower because those tests are harder than the exam; the marks for Tests 1 to 3 rise step by step towards Test 4." },
    ],
    links: {
      exam: (n: string) => `${n} practice exams`,
      glossary: (n: string) => `${n} glossary`,
      guide: (n: string) => `Free ${n} exam guide`,
      questions: (n: string) => `Free ${n} practice questions`,
      changes: "Exam changes",
    },
  },
  de: {
    eyebrow: "Kostenlose Lernhilfe",
    title: (n: string) => `${n}: Readiness-Check und Lernplaner`,
    seoTitle: (n: string) => `${n} Readiness-Check & Lernplaner (kostenlos)`,
    description: (n: string) =>
      `Trag deine ${n}-Testergebnisse ein und erhalte eine Einordnung entlang der sechs Tests, deine schwächsten Prüfungsdomains, den nächsten Schritt und einen Lernplan bis zur Prüfung. Kostenlos, ohne Anmeldung.`,
    intro: (n: string) =>
      `Trag die Ergebnisse deiner CertRamp-Übungstests für ${n} ein. Der Check ordnet sie entlang der sechs Tests ein, sortiert deine schwächsten Domains nach offizieller Prüfungsgewichtung und erstellt einen einfachen Plan bis zu deinem Prüfungstermin. Ohne Anmeldung: Alles bleibt in deinem Browser.`,
    crumb: "Readiness-Check",
    other: "In English",
    howTitle: "So ordnet der Check deine Ergebnisse ein",
    how: [
      "Test 1 ist eine Standortbestimmung: Er zeigt, wo du startest, nicht ob du bereit bist.",
      "Test 2 und 3 vertiefen; die Messlatte steigt Richtung Prüfungsniveau.",
      "Test 4 entspricht dem Prüfungsniveau und ist am aussagekräftigsten.",
      "Test 5 und 6 sind bewusst schwerer als die Prüfung, niedrigere Ergebnisse sind dort zu erwarten.",
    ],
    thresholdsTitle: "Verwendete Schwellenwerte",
    thresholdsIntro: "Ergebnis, ab dem ein Test für seine Stufe als „auf Kurs“ / „auf dem Weg“ gilt:",
    faqTitle: "Fragen zum Readiness-Check",
    faq: (n: string) => [
      { question: "Wie funktioniert der Readiness-Check?", answer: `Du trägst das Gesamtergebnis jedes ${n}-Übungstests ein, den du gemacht hast, und auf Wunsch dein Ergebnis je Domain. Der Check vergleicht jedes Ergebnis mit dem Schwellenwert für diese Stufe der sechs Tests, zeigt deinen Verlauf, sortiert deine schwächsten Domains nach offizieller Gewichtung und schlägt den nächsten Schritt und einen Plan bis zur Prüfung vor.` },
      { question: "Warum zählt Test 4 am meisten?", answer: "Test 4 entspricht dem Niveau der echten Prüfung. Die Tests davor führen darauf hin, Test 5 und 6 gehen darüber hinaus. Deshalb sagt Test 4 am meisten über deine Prüfungsreife aus." },
      { question: "Warum sind meine Ergebnisse in Test 5 und 6 niedriger?", answer: "Test 5 und 6 sind bewusst schwerer als die Prüfung. Ein niedrigeres Ergebnis als in Test 4 ist normal; der Check verwendet dafür niedrigere Schwellenwerte." },
      { question: "Heißt ein gutes Ergebnis, dass ich bestehe?", answer: "Nein. Der Check ist eine Lernhilfe, keine Vorhersage und keine Garantie. Offizielle Prüfungen bewertet der Anbieter, oft mit unveröffentlichter Bestehensgrenze." },
      { question: "Werden meine Ergebnisse gespeichert oder übertragen?", answer: "Deine Eingaben und Notizen werden nur in deinem eigenen Browser gespeichert (lokaler Speicher), damit sie beim nächsten Besuch noch da sind. Nichts wird an CertRamp gesendet, und es gibt kein Konto. Mit „Meine Eingaben löschen“ entfernst du sie." },
      { question: "Wie wurden die Schwellenwerte gewählt?", answer: "Die Marke von 80 % in Test 4 lässt Reserve über den üblichen Bestehensgrenzen der Anbieter (oft 65 bis 75 %, viele veröffentlichen sie nicht) für Prüfungsnervosität und ungewohnte Formulierungen. Für Test 5 und 6 liegen die Marken niedriger, weil diese Tests schwerer als die Prüfung sind; für Test 1 bis 3 steigen sie schrittweise bis Test 4." },
    ],
    links: {
      exam: (n: string) => `${n} Übungsprüfungen`,
      glossary: (n: string) => `${n} Glossar auf Deutsch`,
      guide: (n: string) => `${n} Prüfungsleitfaden`,
      questions: (n: string) => `${n} kostenlose Übungsfragen`,
      changes: "Prüfungsänderungen",
    },
  },
} as const;

export function ReadinessView({ cert, data, locale }: { cert: ResolvedCertification; data: CourseData; locale: Locale }) {
  const l = readinessCopy[locale];
  const path = readinessPath(cert.slug, locale);
  const th = thresholdsFor(data.readiness?.thresholds);
  const domains: ToolDomain[] = (cert.exam?.domains ?? []).map((d) => ({
    id: d.id,
    name: d.name,
    weight: weightFraction(d.weight),
    weightLabel: d.weight ?? "–",
    perTest: data.blueprint?.rows.find((r) => r.domain === d.id)?.perTest,
  }));
  const res = getResources(cert.slug);
  const de = getDeLinks(cert.slug);
  const links: ToolLink[] = [
    { label: l.links.exam(cert.name), href: `${cert.path}/` },
    ...(data.glossary ? [{ label: l.links.glossary(cert.name), href: `${glossaryPath(cert.slug, locale)}/` }] : []),
    ...(locale === "de" && de ? [{ label: l.links.guide(cert.name), href: `${de.guide}/` }] : res.guide ? [{ label: l.links.guide(cert.name), href: `${res.guide.path}/` }] : []),
    ...(locale === "de" && de ? [{ label: l.links.questions(cert.name), href: `${de.questions}/` }] : res.questions ? [{ label: l.links.questions(cert.name), href: `${res.questions.path}/` }] : []),
    { label: l.links.changes, href: `${locale === "de" ? deExamChangesPath : examChangesPath}/` },
  ];
  const others = getAllCourseData()
    .filter((d) => d.readiness)
    .map((d) => getCertification(d.slug)!)
    .map((c) => ({ slug: c.slug, name: c.name, href: `${readinessPath(c.slug, locale)}/` }));
  const faq = l.faq(cert.name);
  const faqLd = faqSchema(faq);

  return (
    <div lang={locale}>
      <PageHero
        home={locale === "de" ? { name: "Auf Deutsch", path: deHubPath } : undefined}
        crumbs={[{ name: cert.name, path: cert.path }, { name: l.crumb, path }]}
        eyebrow={l.eyebrow}
        title={l.title(cert.name)}
        intro={<p>{l.intro(cert.name)}</p>}
      >
        <p className="mt-6 text-sm text-white/60 print:hidden">
          <Link href={readinessPath(cert.slug, locale === "de" ? "en" : "de")} hrefLang={locale === "de" ? "en" : "de"} className="underline underline-offset-2 hover:text-white">
            {l.other}
          </Link>
        </p>
      </PageHero>

      <Section className="!pt-12">
        <ReadinessTool
          slug={cert.slug}
          certName={cert.name}
          locale={locale}
          domains={domains}
          thresholds={th}
          links={links}
          otherCerts={others}
          alert={<ExamAlertSignup slug={cert.slug} exam={cert.name} locale={locale} className="mt-6 rounded-[var(--radius-card)] border border-line bg-white p-6" />}
        />
      </Section>

      <Section tone="surface" labelledBy="rc-how" className="print:hidden">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader id="rc-how" title={l.howTitle} />
            <ul className="mt-6 space-y-2 leading-relaxed text-body">
              {l.how.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h3 className="mt-8 font-semibold">{l.thresholdsTitle}</h3>
            <p className="mt-1 text-sm text-muted">{l.thresholdsIntro}</p>
            <table className="mt-3 w-full max-w-sm text-sm">
              <tbody>
                {TESTS.map((n) => (
                  <tr key={n} className="border-t border-line">
                    <th scope="row" className="py-1.5 text-left font-semibold">Test {n}</th>
                    <td className="py-1.5 text-right tabular-nums">
                      {th[n].onTrack} % / {th[n].developing} %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold">{l.faqTitle}</h2>
            <FaqList items={faq} className="mt-6" />
          </div>
        </div>
      </Section>

      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: l.title(cert.name),
          url: absoluteUrl(path),
          applicationCategory: "EducationalApplication",
          operatingSystem: "Any (web browser)",
          inLanguage: locale,
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
        }}
      />
    </div>
  );
}
