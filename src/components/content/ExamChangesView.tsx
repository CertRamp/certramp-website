import { ExamChangeCard } from "@/components/content/ExamChangeCard";
import { VendorFilter } from "@/components/content/VendorFilter";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/config/site";
import { deHubPath } from "@/lib/content-de";
import {
  deExamChangesPath,
  examChangesPath,
  formatChangeDate,
  getExamChanges,
  getRecentChanges,
  getUpcomingChanges,
  lastVerified,
} from "@/lib/exam-changes";

export const examChangesCopy = {
  en: {
    title: "IT Certification Exam Changes 2026–2027",
    seoTitle: "IT Certification Exam Changes 2026–2027: Retirements & New Versions",
    description:
      "Which IT certification exams retire, get replaced or get a new outline in 2026 and 2027 — Microsoft, AWS, CompTIA, Cisco, ISC2, ISACA and more, with official sources.",
    eyebrow: "Exam change tracker",
    intro:
      "Retirements, replacements, new exam versions and outline updates for Microsoft, AWS, CompTIA, Cisco, Google Cloud, ISC2, ISACA, IAPP, ISTQB and more. Every entry links to the official vendor source and says what the change means if you are studying now.",
    checked: "Last checked against official sources",
    upcoming: "Coming up",
    upcomingIntro: "Changes with a date still ahead, soonest first.",
    recent: "Recently changed",
    recentIntro: "Changes already in effect in 2026, most recent first.",
    filter: "Filter by vendor",
    all: "All vendors",
    note: "Vendors change dates and outlines at short notice. Always confirm the date on the official page before you book an exam. Spotted a change we missed? Email",
    other: "Auf Deutsch",
    otherPath: deExamChangesPath,
    home: { name: "Home", path: "/" },
    crumb: "Exam changes",
  },
  de: {
    title: "Prüfungsänderungen 2026–2027 bei IT-Zertifizierungen",
    seoTitle: "IT-Zertifizierungen: Prüfungsänderungen 2026–2027",
    description:
      "Welche IT-Zertifizierungsprüfungen 2026 und 2027 eingestellt, ersetzt oder überarbeitet werden – Microsoft, AWS, CompTIA, Cisco, ISC2, ISACA u. a., mit Quellen.",
    eyebrow: "Prüfungsänderungen im Überblick",
    intro:
      "Auslaufende Prüfungen, Nachfolger, neue Prüfungsversionen und überarbeitete Gliederungen bei Microsoft, AWS, CompTIA, Cisco, Google Cloud, ISC2, ISACA, IAPP, ISTQB und weiteren Anbietern. Jeder Eintrag verweist auf die offizielle Quelle des Anbieters und sagt, was die Änderung für Ihre Vorbereitung bedeutet.",
    checked: "Zuletzt mit den offiziellen Quellen abgeglichen",
    upcoming: "Demnächst",
    upcomingIntro: "Änderungen mit einem Datum in der Zukunft, das nächste zuerst.",
    recent: "Kürzlich geändert",
    recentIntro: "Änderungen, die 2026 bereits in Kraft getreten sind, die neueste zuerst.",
    filter: "Nach Anbieter filtern",
    all: "Alle Anbieter",
    note: "Anbieter ändern Termine und Gliederungen oft kurzfristig. Prüfen Sie das Datum vor der Buchung immer auf der offiziellen Seite. Haben wir eine Änderung übersehen? Schreiben Sie an",
    other: "In English",
    otherPath: examChangesPath,
    home: { name: "Auf Deutsch", path: deHubPath },
    crumb: "Prüfungsänderungen",
  },
} as const;

export function ExamChangesView({ locale }: { locale: "en" | "de" }) {
  const l = examChangesCopy[locale];
  const path = locale === "de" ? deExamChangesPath : examChangesPath;
  const upcoming = getUpcomingChanges();
  const recent = getRecentChanges();
  const vendors = [...new Set(getExamChanges().map((c) => c.vendor))].sort((a, b) => a.localeCompare(b));
  const verified = lastVerified();

  const group = (id: string, title: string, intro: string, items: typeof upcoming) =>
    items.length > 0 && (
      <section data-group aria-labelledby={id} className="mt-12 first:mt-0">
        <h2 id={id} className="text-2xl font-semibold sm:text-3xl">
          {title} <span className="text-lg font-medium text-muted">({items.length})</span>
        </h2>
        <p className="mt-2 text-muted">{intro}</p>
        <ol className="mt-6 grid gap-5 lg:grid-cols-2">
          {items.map((c) => (
            <ExamChangeCard key={c.id} c={c} locale={locale} />
          ))}
        </ol>
      </section>
    );

  return (
    <div lang={locale}>
      <PageHero home={l.home} crumbs={[{ name: l.crumb, path }]} eyebrow={l.eyebrow} title={l.title} intro={<p>{l.intro}</p>}>
        <p className="mt-6 text-sm text-white/60">
          {l.checked}: {formatChangeDate(verified, locale)} ·{" "}
          <Link href={l.otherPath} hrefLang={locale === "de" ? "en" : "de"} className="underline underline-offset-2 hover:text-white">
            {l.other}
          </Link>
        </p>
      </PageHero>

      <Section>
        <VendorFilter vendors={vendors} allLabel={l.all} label={l.filter} />
        <div id="exam-changes" className="mt-10">
          {group("upcoming", l.upcoming, l.upcomingIntro, upcoming)}
          {group("recent", l.recent, l.recentIntro, recent)}
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted">
          {l.note}{" "}
          <a className="underline underline-offset-2" href="mailto:hello@certramplearning.com">
            hello@certramplearning.com
          </a>
          .
        </p>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${absoluteUrl(path)}#article`,
          headline: l.title,
          description: l.description,
          url: absoluteUrl(path),
          dateModified: verified,
          inLanguage: locale,
          publisher: { "@id": `${absoluteUrl("/")}#organization` },
        }}
      />
    </div>
  );
}
