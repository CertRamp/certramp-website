import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "@/components/ui/Link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { deHubPath } from "@/lib/content-de";
import { questionsMadePath } from "@/lib/course-data";
import { examChangesPath, deExamChangesPath } from "@/lib/exam-changes";
import { faqSchema } from "@/lib/schema";
import { FaqList } from "@/components/ui/FaqList";

const reportHref = (locale: "en" | "de") => {
  const subject = locale === "de" ? "Fehler in einer Frage" : "Error in a question";
  const body =
    locale === "de"
      ? "Kurs / Zertifizierung: \nTest (1–6): \nFragennummer: \nWas ist falsch, und welche Quelle belegt es?\n\n"
      : "Course / certification: \nTest (1–6): \nQuestion number: \nWhat is wrong, and which source shows it?\n\n";
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const questionsMadeCopy = {
  en: {
    seoTitle: "How Our Practice Questions Are Made (No Exam Dumps)",
    description:
      "Every CertRamp practice question is written from the official exam objectives, never copied from exam dumps. Our quality process, our change log and how to report a mistake.",
    crumb: "How our questions are made",
    eyebrow: "Transparency",
    title: "How our questions are made",
    intro:
      "Every question in a CertRamp practice test is written for CertRamp from the official exam objectives. None comes from exam dumps, recalled exam content or other providers' question banks.",
    noDumpsTitle: "No exam dumps. Ever.",
    noDumps: [
      "We never use leaked, recalled or memorised content from real exams, and we never buy or copy question banks.",
      "We never claim that a question appears on the real exam. Dumps break the candidate agreements of every certification body and can cost you your certification.",
      "Our questions test whether you understand the topic, so they still work when the vendor rewrites its exam questions.",
    ],
    processTitle: "Our quality process",
    processIntro: "Each test goes through the same steps before it is published, and again after every change to the official exam.",
    steps: [
      { title: "Start from the official blueprint", body: "Each question is mapped to one official exam domain and objective. Every test follows the official domain weights." },
      { title: "Write a realistic scenario", body: "The question describes a situation a practitioner meets. Every answer option is a real concept or product that fits the situation and fails only on one specific detail." },
      { title: "Explain every option", body: "Each option gets its own explanation: why the correct answer is right and why each other option is wrong." },
      { title: "Check the facts", body: "Every statement is checked against the vendor's official documentation. Anything we cannot verify is rewritten or removed." },
      { title: "Blind review", body: "A separate review pass answers the questions without seeing the answer key. Questions that can be solved by wording alone, without subject knowledge, are rewritten." },
      { title: "Publish and log", body: "Changes are recorded in the public change log on each practice exam page: date, type of change and number of questions affected, never the question content." },
    ],
    correctTitle: "Found a mistake? Tell us.",
    correct:
      "Questions can contain errors, and vendors change their products. If you think an answer is wrong, send us the course, the test number, the question number and, if you have one, the official source. We check every report against the official documentation, correct the question if needed and record the correction in the course change log.",
    reportCta: "Report a mistake by email",
    reportAlt: "If you bought the course on Udemy, you can also use the course Q&A.",
    trackTitle: "When the exam changes",
    track: "We check the official exam pages regularly and record the result on each practice exam page, also when nothing has changed. Exam-wide changes across vendors are on the",
    trackLink: "exam changes page",
    faq: [
      { question: "Are CertRamp questions real exam questions?", answer: "No. They are original practice questions written for CertRamp from the official exam objectives. Real exam questions are confidential, and we never use them." },
      { question: "How do I know a course is up to date?", answer: "Each practice exam page shows when the course was last updated, what changed, and when we last checked the official exam sources." },
      { question: "What happens after I report a mistake?", answer: "We check the question against the official documentation. If it is wrong or unclear, we correct it and add the correction to the course change log." },
    ],
    other: "Auf Deutsch",
  },
  de: {
    seoTitle: "Wie unsere Übungsfragen entstehen (keine Prüfungs-Dumps)",
    description:
      "Jede CertRamp-Übungsfrage entsteht aus den offiziellen Prüfungszielen, nie aus Prüfungs-Dumps. Unser Qualitätsprozess, unser Änderungsprotokoll und wie du einen Fehler meldest.",
    crumb: "Wie unsere Fragen entstehen",
    eyebrow: "Transparenz",
    title: "Wie unsere Fragen entstehen",
    intro:
      "Jede Frage in einem CertRamp-Übungstest wird für CertRamp aus den offiziellen Prüfungszielen geschrieben. Keine stammt aus Prüfungs-Dumps, erinnerten Prüfungsinhalten oder Fragensammlungen anderer Anbieter.",
    noDumpsTitle: "Keine Prüfungs-Dumps. Niemals.",
    noDumps: [
      "Wir verwenden nie geleakte, erinnerte oder auswendig gelernte Inhalte echter Prüfungen und kaufen oder kopieren keine Fragensammlungen.",
      "Wir behaupten nie, dass eine Frage in der echten Prüfung vorkommt. Dumps verstoßen gegen die Prüfungsbedingungen aller Zertifizierungsstellen und können dich deine Zertifizierung kosten.",
      "Unsere Fragen prüfen, ob du das Thema verstanden hast. Deshalb funktionieren sie auch dann noch, wenn der Anbieter seine Prüfungsfragen austauscht.",
    ],
    processTitle: "Unser Qualitätsprozess",
    processIntro: "Jeder Test durchläuft vor der Veröffentlichung dieselben Schritte, und erneut nach jeder Änderung der offiziellen Prüfung.",
    steps: [
      { title: "Vom offiziellen Blueprint ausgehen", body: "Jede Frage ist einer offiziellen Prüfungsdomain und einem Lernziel zugeordnet. Jeder Test folgt der offiziellen Gewichtung der Domains." },
      { title: "Ein realistisches Szenario schreiben", body: "Die Frage beschreibt eine Situation aus der Praxis. Jede Antwortoption ist ein echtes Konzept oder Produkt, das zur Situation passt und nur an einem bestimmten Detail scheitert." },
      { title: "Jede Option erklären", body: "Jede Option bekommt eine eigene Erklärung: warum die richtige Antwort stimmt und warum jede andere Option falsch ist." },
      { title: "Fakten prüfen", body: "Jede Aussage wird mit der offiziellen Dokumentation des Anbieters abgeglichen. Was wir nicht belegen können, wird umgeschrieben oder gestrichen." },
      { title: "Blindprüfung", body: "In einem getrennten Prüfdurchgang werden die Fragen ohne Lösungsschlüssel beantwortet. Fragen, die sich allein über die Formulierung lösen lassen, ohne Fachwissen, werden neu geschrieben." },
      { title: "Veröffentlichen und protokollieren", body: "Änderungen stehen im öffentlichen Änderungsprotokoll auf jeder Seite der Übungsprüfungen: Datum, Art der Änderung und Zahl der betroffenen Fragen, nie der Inhalt der Fragen." },
    ],
    correctTitle: "Einen Fehler gefunden? Sag es uns.",
    correct:
      "Fragen können Fehler enthalten, und Anbieter ändern ihre Produkte. Wenn du eine Antwort für falsch hältst, schick uns den Kurs, die Testnummer, die Fragennummer und, falls vorhanden, die offizielle Quelle. Wir prüfen jede Meldung anhand der offiziellen Dokumentation, korrigieren die Frage bei Bedarf und tragen die Korrektur ins Änderungsprotokoll des Kurses ein.",
    reportCta: "Fehler per E-Mail melden",
    reportAlt: "Wenn du den Kurs bei Udemy gekauft hast, kannst du auch den Fragen-und-Antworten-Bereich des Kurses nutzen.",
    trackTitle: "Wenn sich die Prüfung ändert",
    track: "Wir prüfen die offiziellen Prüfungsseiten regelmäßig und halten das Ergebnis auf jeder Seite der Übungsprüfungen fest, auch wenn sich nichts geändert hat. Änderungen über alle Anbieter hinweg findest du auf der Seite",
    trackLink: "Prüfungsänderungen",
    faq: [
      { question: "Sind CertRamp-Fragen echte Prüfungsfragen?", answer: "Nein. Es sind eigene Übungsfragen, die für CertRamp aus den offiziellen Prüfungszielen geschrieben werden. Echte Prüfungsfragen sind vertraulich, und wir verwenden sie nie." },
      { question: "Woran erkenne ich, dass ein Kurs aktuell ist?", answer: "Jede Seite der Übungsprüfungen zeigt, wann der Kurs zuletzt aktualisiert wurde, was sich geändert hat und wann wir die offiziellen Quellen zuletzt geprüft haben." },
      { question: "Was passiert, nachdem ich einen Fehler gemeldet habe?", answer: "Wir prüfen die Frage anhand der offiziellen Dokumentation. Ist sie falsch oder unklar, korrigieren wir sie und tragen die Korrektur ins Änderungsprotokoll des Kurses ein." },
    ],
    other: "In English",
  },
} as const;

export function QuestionsMadeView({ locale }: { locale: "en" | "de" }) {
  const l = questionsMadeCopy[locale];
  const path = questionsMadePath(locale);
  return (
    <div lang={locale}>
      <PageHero
        home={locale === "de" ? { name: "Auf Deutsch", path: deHubPath } : undefined}
        crumbs={[{ name: l.crumb, path }]}
        eyebrow={l.eyebrow}
        title={l.title}
        intro={<p>{l.intro}</p>}
      >
        <p className="mt-6 text-sm text-white/60">
          <Link href={questionsMadePath(locale === "de" ? "en" : "de")} hrefLang={locale === "de" ? "en" : "de"} className="underline underline-offset-2 hover:text-white">
            {l.other}
          </Link>
        </p>
      </PageHero>

      <Section labelledBy="nodumps-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader id="nodumps-title" title={l.noDumpsTitle} className="lg:col-span-5" />
          <ul className="space-y-3 lg:col-span-7">
            {l.noDumps.map((x) => (
              <li key={x} className="rounded-2xl border border-line bg-white p-5 leading-relaxed text-body">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" labelledBy="process-title">
        <SectionHeader id="process-title" title={l.processTitle} intro={l.processIntro} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {l.steps.map((s, i) => (
            <li key={s.title} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <span className="font-display text-sm font-semibold text-accent-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="correct-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader id="correct-title" title={l.correctTitle} className="lg:col-span-5" />
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-body">{l.correct}</p>
            <a href={reportHref(locale)} className="mt-6 inline-flex rounded-full bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-800">
              {l.reportCta}
            </a>
            <p className="mt-3 text-sm text-muted">{l.reportAlt}</p>
            <h3 className="mt-10 text-lg font-semibold">{l.trackTitle}</h3>
            <p className="mt-2 leading-relaxed text-body">
              {l.track}{" "}
              <Link href={locale === "de" ? deExamChangesPath : examChangesPath} className="font-semibold text-accent-600 hover:underline">
                {l.trackLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="qm-faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader id="qm-faq-title" title="FAQ" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <FaqList items={[...l.faq]} />
          </div>
        </div>
      </Section>

      {(() => {
        const ld = faqSchema([...l.faq]);
        return ld ? <JsonLd data={ld} /> : null;
      })()}
    </div>
  );
}
