import type { DeContent } from "@/config/types";

/**
 * German edition of the IREB CPRE Foundation Level guide and free practice
 * questions. Faithful translation of the verified English content in
 * src/content/guides/ireb-cpre-foundation-level.ts and
 * src/content/practice-questions/ireb-cpre-foundation-level.ts, using the
 * terminology of the official German IREB syllabus (Lehrplan).
 * ORIGINAL CertRamp questions — not real exam questions.
 */
const SYLLABUS = {
  label: "IREB: Lehrplan CPRE Foundation Level 3.3.0",
  url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/75982ed82f-1787039955/cpre_foundationlevel_syllabus_de_v.3.3.0.pdf",
};

export const irebCpreDe: DeContent = {
  slug: "ireb-cpre-foundation-level",
  name: "IREB CPRE Foundation Level",
  languageNote:
    "Die Prüfung wird laut IREB-Factsheet auch auf Deutsch angeboten; du legst sie bei einer IREB-lizenzierten Zertifizierungsstelle ab.",
  facts: [
    { label: "Prüfungsanbieter", value: "IREB" },
    { label: "Fragen", value: "Ca. 45" },
    { label: "Dauer", value: "75 Minuten (90 Minuten für Nicht-Muttersprachler auf schriftlichen Antrag)" },
    { label: "Bestehensgrenze", value: "Mindestens 70 % der Gesamtpunktzahl" },
    {
      label: "Fragetypen",
      value:
        "Multiple Choice: Einfachauswahl (A-Fragen), Mehrfachauswahl (P-Fragen) und Richtig/Falsch-Fragen (K-Fragen); 1–3 Punkte pro Frage",
    },
    {
      label: "Durchführung",
      value: "Über IREB-lizenzierte Zertifizierungsstellen, in Prüfungszentren oder, bei einigen Stellen, remote",
    },
    { label: "Voraussetzungen", value: "Keine" },
    { label: "Prüfungsversion", value: "Lehrplan 3.3.0 (1. April 2026)" },
  ],
  domains: [
    { id: "d1", name: "Einführung und Überblick zum Requirements Engineering" },
    { id: "d2", name: "Grundlegende Prinzipien des Requirements Engineering" },
    { id: "d3", name: "Arbeitsprodukte und Dokumentationspraktiken" },
    { id: "d4", name: "Praktiken für die Erarbeitung von Anforderungen" },
    { id: "d5", name: "Prozess und Arbeitsstruktur" },
    { id: "d6", name: "Praktiken für das Requirements Management" },
    { id: "d7", name: "Werkzeugunterstützung" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "ireb-cpre-foundation-level",
    summary:
      "Der IREB CPRE Foundation Level ist das internationale Einstiegszertifikat für Requirements Engineering. Die Prüfung umfasst ca. 45 Multiple-Choice-Fragen in 75 Minuten (90 Minuten für Nicht-Muttersprachler auf Antrag), und du bestehst mit mindestens 70 % der Punkte. Grundlage ist der Lehrplan 3.3.0 (Stand 1. April 2026) mit sieben Kapiteln.",
    whoFor: [
      "Business-Analysten, Product Owner und Requirements Engineers",
      "Entwickler, Tester und Architekten, die täglich mit Anforderungen arbeiten",
      "Projektleiter und Berater, die mit ihren Teams ein gemeinsames RE-Vokabular nutzen möchten",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung wird von IREB-lizenzierten Zertifizierungsstellen durchgeführt, entweder direkt im Anschluss an eine Schulung oder als eigenständige Prüfung in einem Prüfungszentrum; einige Stellen bieten auch Remote-Prüfungen an. Formale Voraussetzungen gibt es nicht, der Lehrplan setzt jedoch Grundkenntnisse in der Systementwicklung mit planbasierten und agilen Ansätzen voraus.",
          "Alle Fragen sind Multiple-Choice-Fragen, und zwar in drei Arten: Einfachauswahl (A-Fragen), Mehrfachauswahl (P-Fragen) und Richtig/Falsch-Fragen (K-Fragen). Eine Frage bringt ein bis drei Punkte; die Punktzahl steht im Fragenkopf. Da P- und K-Fragen aus mehreren Teilen bestehen, lies jede Aussage sorgfältig: lückenhaftes Wissen kostet hier schnell Punkte.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Der Lehrplan nennt keine Prüfungsgewichtung pro Kapitel, wohl aber Schulungszeiten, und diese zeigen, wo die Tiefe liegt. Kapitel 3 (Arbeitsprodukte und Dokumentationspraktiken) hat sieben Stunden und Kapitel 4 (Praktiken für die Erarbeitung von Anforderungen) viereinhalb: zusammen fast zwei Drittel der insgesamt 17 Std. 45 Min. Beide liegen auf der kognitiven Stufe K3 (Anwenden; im englischen Lehrplan L3). Du musst die Inhalte also anwenden können, zum Beispiel eine Anforderung mit einer Schablone formulieren oder Stakeholder identifizieren und eine Stakeholder-Liste erstellen.",
          "Vernachlässige die kurzen Kapitel nicht. Die neun Prinzipien aus Kapitel 2, die Facetten und Konfigurationen des RE-Prozesses aus Kapitel 5 sowie Verfolgbarkeit und Priorisierung aus Kapitel 6 liefern viele kompakte Fragen, bei denen du leicht punktest, wenn du die Begriffe genau kennst.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Lehrplan 3.3.0 vollständig lesen",
            body: "Lade den kostenlosen Lehrplan bei IREB herunter. Er legt genau fest, was geprüft werden kann, einschließlich aller Lernziele. Achte darauf, dass dein Buch oder Kurs der Version 3.3.0 folgt.",
          },
          {
            title: "Begriffe präzise lernen",
            body: "Lege dir ein eigenes Glossar an: Arten von Anforderungen, die neun Prinzipien, Qualitätskriterien, Konfliktarten, Arten von Sichten, Verfolgbarkeit. Viele Fragen hängen an der genauen Bedeutung eines Begriffs.",
          },
          {
            title: "Die K3-Fertigkeiten üben",
            body: "Formuliere Anforderungen mit Satzschablonen (z. B. EARS oder der Satzschablone nach Rupp), eine User Story im Format nach Cohn und einen Use Case mit einer Formularvorlage. Zeichne ein einfaches UML-Klassendiagramm und ein UML-Aktivitätsdiagramm, und übe das Lesen von Kontextdiagrammen und Zustandsmaschinen.",
          },
          {
            title: "Die Entscheidungstabellen lernen",
            body: "Welche Ermittlungstechnik in welcher Situation, welche Technik zur Konfliktlösung, welche Validierungstechnik, welche Prozesskonfiguration: Übe diese Entscheidungen, denn sie prüfen die Lernziele der Stufen K2 und K3.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen mit 45 Fragen in 75 Minuten, einschließlich der mehrteiligen Fragetypen P und K, und lies jede Erklärung.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Du brauchst 70 %. Buche die Prüfung, sobald du in mehreren Übungsprüfungen deutlich darüber liegst, damit am Prüfungstag nicht ein paar knifflige Fragen über das Ergebnis entscheiden.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Mit Material für ältere Lehrplanversionen lernen. Prüfe, ob deine Quellen den Lehrplan 3.3.0 abdecken.",
          "Aus der eigenen Projekterfahrung antworten statt nach dem Lehrplan. Die Prüfung folgt den Definitionen von IREB, die vom Sprachgebrauch in deinem Unternehmen abweichen können.",
          "Die Qualitätskriterien für einzelne Anforderungen mit denen für Arbeitsprodukte verwechseln.",
          "Systemgrenze und Kontextgrenze verwechseln oder Erhebungstechniken mit Entwurfs- und Ideenfindungstechniken.",
          "K- und P-Fragen zu schnell beantworten. Jede Aussage zählt, also bewerte jede Option für sich.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die Prüfung zum CPRE Foundation Level?",
        answer:
          "Laut IREB-Prüfungsordnung ca. 45 Multiple-Choice-Fragen. Jede Frage bringt ein bis drei Punkte, und du benötigst mindestens 70 % der Gesamtpunktzahl, um zu bestehen.",
      },
      {
        question: "Wie lange dauert die Prüfung?",
        answer:
          "75 Minuten. Wer die Prüfung nicht in seiner Muttersprache ablegt, kann schriftlich und mit Begründung 90 Minuten beantragen, idealerweise zusammen mit der Prüfungsanmeldung, spätestens vor Prüfungsbeginn.",
      },
      {
        question: "Welcher Lehrplan ist aktuell?",
        answer:
          "Der Lehrplan in Version 3.3.0 vom 1. April 2026. Er hat sieben Kapitel, von der Einführung in das Requirements Engineering bis zur Werkzeugunterstützung.",
      },
      {
        question: "Wo kann ich die Prüfung ablegen?",
        answer:
          "Bei einer der von IREB lizenzierten Zertifizierungsstellen, etwa iSQI, GASQ oder Certible. Einige bieten Remote-Prüfungen an. Die Preise legt jede Zertifizierungsstelle selbst fest.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Laut IREB-Factsheet wird die Prüfung unter anderem auf Deutsch angeboten. Welche Sprachen und Termine konkret verfügbar sind, erfährst du bei deiner Zertifizierungsstelle. Wenn du die Prüfung nicht in deiner Muttersprache ablegst, kannst du schriftlich und mit Begründung 90 statt 75 Minuten beantragen.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach dem veröffentlichten IREB-Lehrplan erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "IREB CPRE Foundation Level: Prüfungsvorbereitung (3.3.0)",
      description:
        "CPRE Foundation Level Prüfungsvorbereitung zum Lehrplan 3.3.0: ca. 45 Fragen, 75 Minuten, 70 % zum Bestehen, alle sieben Kapitel und ein Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "ireb-cpre-foundation-level",
    intro:
      "30 eigene Übungsfragen zum CPRE Foundation Level aus allen sieben Kapiteln des IREB-Lehrplans 3.3.0, mit mehr Fragen zu den umfangreicheren Kapiteln 3, 4 und 6. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-11-09",
    seo: {
      title: "CPRE Foundation Level Übungsfragen mit Lösungen (3.3.0)",
      description:
        "30 kostenlose IREB CPRE Foundation Level Übungsfragen (Lehrplan 3.3.0): Prinzipien, Schablonen, Ermittlung, Validierung, Verfolgbarkeit, mit Erklärung.",
    },
    questions: [
      /* ── Kapitel 1: Einführung und Überblick ──────────────────────────── */
      {
        id: "cpre-c1-requirement-types",
        domain: "d1",
        objective: "LZ 1.1.2 Die verschiedenen Arten von Anforderungen verstehen",
        difficulty: "foundation",
        question:
          "„Das System muss die Suchergebnisse bei 95 % aller Anfragen innerhalb von zwei Sekunden anzeigen.“ Um welche Art von Anforderung handelt es sich?",
        options: [
          { id: "A", text: "Qualitätsanforderung", rationale: "Richtig. Die Aussage beschreibt eine Qualität, hier die Performance, die das System haben soll." },
          { id: "B", text: "Funktionale Anforderung", rationale: "Eine funktionale Anforderung beschreibt ein Ergebnis oder Verhalten, das das System liefert, etwa die Suche selbst, nicht, wie schnell sie erfolgt." },
          { id: "C", text: "Randbedingung (Constraint)", rationale: "Eine Randbedingung begrenzt den Lösungsraum über das hinaus, was für funktionale Anforderungen und Qualitätsanforderungen nötig ist, zum Beispiel eine vorgeschriebene Technologie oder ein Gesetz." },
          { id: "D", text: "Glossareintrag", rationale: "Ein Glossar definiert Begriffe; hier handelt es sich um eine Anforderung." },
        ],
        answer: "A",
        explanation:
          "IREB unterscheidet funktionale Anforderungen, Qualitätsanforderungen und Randbedingungen. Antwortzeiten, Verfügbarkeit, Security (Informationssicherheit) und Benutzbarkeit sind typische Qualitätsanforderungen.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c1-tasks",
        domain: "d1",
        objective:
          "LZ 1.4.1 Die Hauptaufgaben des RE kennen und wissen, dass ein RE-Prozess auf die Durchführung dieser Aufgaben zugeschnitten sein muss",
        difficulty: "foundation",
        question: "Welche Aufzählung nennt die Hauptaufgaben des Requirements Engineering laut CPRE-Lehrplan?",
        options: [
          { id: "A", text: "Entwurf, Implementierung, Test, Inbetriebnahme", rationale: "Das sind Entwicklungstätigkeiten, nicht die Aufgaben des RE." },
          { id: "B", text: "Planung, Budgetierung, Personaleinsatz, Controlling", rationale: "Das sind Tätigkeiten des Projektmanagements." },
          { id: "C", text: "Programmierung, Review, Merge, Release", rationale: "Das sind Tätigkeiten der Softwareentwicklung." },
          { id: "D", text: "Ermittlung, Dokumentation, Validierung, Verwaltung", rationale: "Richtig. Das sind die vier Hauptaufgaben des RE; der RE-Prozess muss so zugeschnitten werden, dass er sie in der jeweiligen Situation erfüllt." },
        ],
        answer: "D",
        explanation:
          "Ermittlung, Dokumentation, Validierung und Verwaltung (Management) sind die Hauptaufgaben des RE. Der Lehrplan betont, dass es nicht den einen RE-Prozess gibt: Er muss auf den Kontext zugeschnitten werden.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c1-symptoms",
        domain: "d1",
        objective: "LZ 1.2.2 Aufzählung der Symptome für unzureichendes RE",
        difficulty: "foundation",
        question:
          "In einer Projektretrospektive sammelt das Team mehrere Beobachtungen. Welche davon ist laut CPRE-Lehrplan ein typisches Symptom für unzureichendes Requirements Engineering und keine Ursache?",
        options: [
          { id: "A", text: "Das Team hat sofort mit der Umsetzung begonnen, um den Termin zu halten.", rationale: "Die übereilte Umsetzung wird als Ursache für unzureichendes RE genannt, nicht als Symptom." },
          { id: "B", text: "Niemand im Team hatte eine RE-Schulung erhalten.", rationale: "Unzureichende RE-Ausbildung und -Fähigkeiten sind eine Ursache für schlechtes RE, kein Symptom." },
          { id: "C", text: "Nach der Implementierung zeigte sich, dass Anforderungen fehlten, unklar oder falsch waren.", rationale: "Richtig. Fehlende, unklare und falsche Anforderungen sind die typischen Symptome für unzureichendes RE." },
          { id: "D", text: "Alle gingen davon aus, dass die Anforderungen selbstverständlich seien.", rationale: "Die Annahme, Anforderungen seien selbstverständlich, ist eine Ursache für unzureichendes RE, kein Symptom." },
        ],
        answer: "C",
        explanation:
          "Der Lehrplan nennt fehlende, unklare und falsche Anforderungen als typische Symptome für unzureichendes RE. Typische Ursachen sind eine übereilte Umsetzung, Kommunikationsprobleme, die Annahme, die Anforderungen seien selbstverständlich, sowie unzureichende RE-Ausbildung und -Fähigkeiten.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 2: Grundlegende Prinzipien ───────────────────────────── */
      {
        id: "cpre-c2-principles",
        domain: "d2",
        objective: "LZ 2.1.1 Aufzählen der Prinzipien des RE",
        difficulty: "foundation",
        question: "Was gehört NICHT zu den neun Prinzipien des Requirements Engineering im CPRE-Lehrplan?",
        options: [
          { id: "A", text: "Wertorientierung", rationale: "Das ist Prinzip 1: Anforderungen sind Mittel zum Zweck, kein Selbstzweck." },
          { id: "B", text: "Gemeinsames Verständnis", rationale: "Das ist Prinzip 3." },
          { id: "C", text: "Vollständigkeit vor der Implementierung", rationale: "Richtig. Das ist kein Prinzip. Anforderungen entwickeln sich weiter (Prinzip 7), und eine vollständige Spezifikation vorab wird nicht verlangt." },
          { id: "D", text: "Systematische und disziplinierte Arbeit", rationale: "Das ist Prinzip 9." },
        ],
        answer: "C",
        explanation:
          "Die neun Prinzipien sind: Wertorientierung, Stakeholder, gemeinsames Verständnis, Kontext, Problem, Anforderung, Lösung, Validierung, Evolution, Innovation sowie systematische und disziplinierte Arbeit.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c2-context-boundary",
        domain: "d2",
        objective: "LZ 4.1.1 Die Grenzen des Systems festlegen um auf die relevanten Anforderungen zu fokussieren",
        difficulty: "intermediate",
        question:
          "In einem Projekt für einen Onlineshop wird das System des Zahlungsdienstleisters nicht verändert, stellt aber eine Schnittstelle bereit, die der Shop nutzt. Wie wird das System des Zahlungsdienstleisters eingeordnet?",
        options: [
          { id: "A", text: "Innerhalb der Systemgrenze", rationale: "Innerhalb der Systemgrenze liegen die Teile, die im Projekt verändert werden können; das Zahlungssystem gehört nicht dazu." },
          { id: "B", text: "Teil des Systemkontexts, zwischen Systemgrenze und Kontextgrenze", rationale: "Richtig. Es ist für das System relevant und interagiert mit ihm, liegt aber außerhalb des Systems und kann im Projekt nicht verändert werden." },
          { id: "C", text: "Außerhalb der Kontextgrenze (irrelevante Umgebung)", rationale: "Es ist relevant, weil der Shop mit ihm interagiert; daher gehört es zum Kontext." },
          { id: "D", text: "Ein Stakeholder", rationale: "Ein Stakeholder ist eine Person oder Organisation, die die Anforderungen beeinflusst oder vom System betroffen ist. Gefragt ist nach dem System des Dienstleisters, und das ist ein Kontextelement, kein Stakeholder." },
        ],
        answer: "B",
        explanation:
          "Die Systemgrenze trennt das System von seinem Kontext; die Kontextgrenze trennt den RE-relevanten Teil der Umgebung vom Rest der Welt. Externe Systeme, mit denen das System interagiert, liegen zwischen beiden Grenzen.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c2-problem-solution",
        domain: "d2",
        objective: "LZ 2.2.2 Erklären der Prinzipien und der Gründe, warum sie wichtig sind",
        difficulty: "intermediate",
        question:
          "Im ersten Termin sagt die Vertriebsleiterin: „Wir brauchen eine mobile App für unseren Außendienst.“ Was sollte der Requirements Engineer nach dem Prinzip, dass Problem, Anforderung und Lösung miteinander verflochten sind, als Erstes tun?",
        options: [
          { id: "A", text: "Herausfinden, welches Problem die App lösen soll, zum Beispiel, was der Außendienst heute nicht tun kann", rationale: "Richtig. Stakeholder formulieren ihre Wünsche oft als Lösungen. Wer das zugrunde liegende Problem und die eigentlichen Anforderungen aufdeckt, lässt außerdem Raum für bessere Lösungen." },
          { id: "B", text: "„Mobile App“ als Randbedingung dokumentieren und mit der Spezifikation der Bildschirme beginnen", rationale: "Damit wird die vorgeschlagene Lösung als gegeben hingenommen, ohne das Problem dahinter zu verstehen." },
          { id: "C", text: "Die Anfrage ablehnen, weil im RE niemals über Lösungen gesprochen werden darf", rationale: "Lösungen sind im RE nicht verboten. Das Prinzip besagt, dass sich Probleme, Anforderungen und Lösungen nicht vollständig trennen lassen." },
          { id: "D", text: "Die Entwickler fragen, welches App-Framework sie bevorzugen", rationale: "Die Wahl einer Technologie ist eine Entwurfsentscheidung und hilft nicht, das Problem zu verstehen." },
        ],
        answer: "A",
        explanation:
          "Prinzip 5 besagt, dass Problem, Anforderung und Lösung ein unausweichlich ineinandergreifendes Tripel bilden. Nennt ein Stakeholder eine Lösung, arbeitet sich der Requirements Engineer zum Problem und zu den Anforderungen dahinter zurück, bevor er sich auf diese Lösung festlegt.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c2-innovation",
        domain: "d2",
        objective: "LZ 2.2.2 Erklären der Prinzipien und der Gründe, warum sie wichtig sind",
        difficulty: "intermediate",
        question:
          "Eine Teamleiterin sagt: „Unsere Aufgabe im RE ist es, genau das aufzuschreiben, was die Stakeholder verlangen, und nicht mehr.“ Welches Prinzip des RE vernachlässigt diese Haltung am meisten?",
        options: [
          { id: "A", text: "Validierung", rationale: "Die Validierung prüft, ob Anforderungen die Bedürfnisse der Stakeholder erfüllen. Die Aussage spricht nicht gegen das Validieren." },
          { id: "B", text: "Systematische und disziplinierte Arbeit", rationale: "Dieses Prinzip betrifft den Einsatz geeigneter Prozesse und Praktiken. Die Aussage betrifft den Umfang dessen, was RE liefert, nicht die Methode." },
          { id: "C", text: "Kontext", rationale: "Das Kontextprinzip besagt, dass Anforderungen nicht isoliert verstanden werden können. Die Aussage bestreitet den Kontext nicht." },
          { id: "D", text: "Innovation", rationale: "Richtig. Das Innovationsprinzip besagt, dass mehr vom Gleichen nicht genügt: Gutes RE sucht auch nach neuen Ideen, die Stakeholder begeistern können, nicht nur nach ihren ausdrücklichen Wünschen." },
        ],
        answer: "D",
        explanation:
          "Prinzip 8 (Innovation) erinnert dich daran, dass Systeme selten herausragend werden, wenn Stakeholder nur bekommen, was sie verlangen. RE sollte auch nach innovativen Ideen streben; deshalb gehören Entwurfs- und Ideenfindungstechniken zum Werkzeugkasten der Ermittlung.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 3: Arbeitsprodukte und Dokumentation ─────────────────── */
      {
        id: "cpre-c3-user-story",
        domain: "d3",
        objective: "LZ 3.3.2 Spezifizieren einer individuellen Anforderung und einer User Story mit Hilfe einer Satzschablone",
        difficulty: "foundation",
        question: "Welche Aussage folgt der User-Story-Schablone nach Cohn?",
        options: [
          { id: "A", text: "Das System muss Berichte als PDF exportieren.", rationale: "Das ist eine klassische „muss“-Anforderung, keine User Story." },
          { id: "B", text: "Wenn der Benutzer auf Export klickt, muss das System ein PDF erzeugen.", rationale: "Das folgt einem EARS-ähnlichen, ereignisgesteuerten Muster, nicht der User-Story-Schablone." },
          { id: "C", text: "Als Vertriebsleiterin möchte ich Berichte als PDF exportieren, damit ich sie an Kunden senden kann.", rationale: "Richtig. Rolle, Ziel und Nutzen: Als <Rolle> möchte ich <Anforderung>, damit <Nutzen>." },
          { id: "D", text: "Export: PDF, Priorität hoch, Verantwortlich: Vertrieb.", rationale: "Das sind Attribute, keine User Story." },
        ],
        answer: "C",
        explanation:
          "Zu den Satzschablonen im Lehrplan gehören EARS und die Schablone nach Rupp für einzelne Anforderungen sowie die Schablone nach Cohn für User Stories. Für Use Cases werden Formularvorlagen verwendet.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c3-quality-criteria",
        domain: "d3",
        objective: "LZ 3.8.1 Qualitätskriterien für einzelne Anforderungen kennen",
        difficulty: "intermediate",
        question:
          "„Die App soll schnell und benutzerfreundlich sein.“ Gegen welches Qualitätskriterium für einzelne Anforderungen wird am deutlichsten verstoßen?",
        options: [
          { id: "A", text: "Prüfbar (und eindeutig)", rationale: "Richtig. „Schnell“ und „benutzerfreundlich“ lassen sich nicht objektiv prüfen und können von verschiedenen Lesern unterschiedlich verstanden werden." },
          { id: "B", text: "Verfolgbar", rationale: "Verfolgbarkeit ist ein Qualitätskriterium für Arbeitsprodukte als Ganzes, nicht das Hauptproblem dieses einzelnen Satzes." },
          { id: "C", text: "Nicht redundant", rationale: "Redundanz betrifft wiederholte Inhalte innerhalb eines Arbeitsprodukts; hier wird nichts wiederholt." },
          { id: "D", text: "Konform", rationale: "Konformität zu einer Struktur oder Vorlage ist ein Kriterium für Arbeitsprodukte; das Hauptproblem hier ist die vage Formulierung." },
        ],
        answer: "A",
        explanation:
          "Qualitätskriterien für einzelne Anforderungen: adäquat, notwendig, eindeutig, vollständig (in sich abgeschlossen), verständlich, prüfbar. Kriterien für Arbeitsprodukte: konsistent, nicht redundant, vollständig (keine bekannten relevanten Anforderungen fehlen), modifizierbar, verfolgbar, konform.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c3-model-choice",
        domain: "d3",
        objective:
          "LZ 3.4.4 Verstehen, wie man einen geeigneten Modelltyp zur Spezifizierung von Anforderungen in einer bestimmten Situation auswählt",
        difficulty: "intermediate",
        question:
          "Du möchtest die Schritte eines Geschäftsprozesses spezifizieren, einschließlich Entscheidungen und parallel ablaufender Schritte. Welcher Modelltyp ist am besten geeignet?",
        options: [
          { id: "A", text: "UML-Klassendiagramm", rationale: "Klassendiagramme spezifizieren Daten und die Objekte einer Domäne mit ihren Beziehungen, keine Prozessschritte." },
          { id: "B", text: "Kontextdiagramm", rationale: "Ein Kontextdiagramm zeigt das System in seiner Umgebung und die Schnittstellen, nicht den internen Prozessablauf." },
          { id: "C", text: "Glossar", rationale: "Ein Glossar definiert Begriffe; es ist kein Modell eines Prozesses." },
          { id: "D", text: "UML-Aktivitätsdiagramm", rationale: "Richtig. Aktivitätsdiagramme modellieren Funktionen und Geschäftsprozesse mit Aktionen, Entscheidungen und parallelen Abläufen." },
        ],
        answer: "D",
        explanation:
          "Wähle das Modell passend zum Aspekt: Struktur und Daten → Klassendiagramm; Funktion und Ablauf → Aktivitäts- oder Prozessmodell; Zustand und Verhalten → Zustandsmaschine; Kontext → Kontextdiagramm.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c3-nl-rules",
        domain: "d3",
        objective: "LZ 3.2.2 Regeln für das Schreiben guter natürlichsprachiger Anforderungen erklären",
        difficulty: "intermediate",
        question: "„Die Bestellung wird geprüft und freigegeben.“ Gegen welche Regel für natürlichsprachige Anforderungen verstößt diese Aussage hauptsächlich?",
        options: [
          { id: "A", text: "Universalquantoren wie „alle“ oder „nie“ mit Vorsicht verwenden", rationale: "Die Aussage enthält keinen Universalquantor." },
          { id: "B", text: "Passive Formulierungen mit Vorsicht verwenden", rationale: "Richtig. Die passive Formulierung verschleiert, wer die Handlung ausführt: Es bleibt offen, ob das System, ein Sachbearbeiter oder eine Vorgesetzte die Bestellung prüft und freigibt." },
          { id: "C", text: "Kurze Sätze schreiben", rationale: "Der Satz ist bereits kurz." },
          { id: "D", text: "Nominalisierungen mit Vorsicht verwenden", rationale: "Der Satz verwendet Verben, keine Nominalisierungen wie „die Prüfung“. Sein Hauptproblem ist der fehlende Akteur." },
        ],
        answer: "B",
        explanation:
          "Der Lehrplan verlangt kurze, gut strukturierte Sätze und definierte Begriffe, das Vermeiden vager Formulierungen und unvollständiger Beschreibungen sowie den vorsichtigen Einsatz von passiven Formulierungen, Universalquantoren und Nominalisierungen. Eine Umformulierung im Aktiv, etwa „Das System muss … prüfen“, macht den Akteur explizit.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c3-glossary",
        domain: "d3",
        objective: "LZ 3.5.1 Den Zweck von Glossaren und wie man ein Glossar erstellt erklären",
        difficulty: "intermediate",
        question:
          "In einem Projekt bedeutet „Kunde“ für den Vertrieb einen Vertragspartner, für die IT dagegen jeden registrierten App-Nutzer. Wie solltest du damit umgehen?",
        options: [
          { id: "A", text: "Den Begriff nicht ins Glossar aufnehmen, weil jeder das Wort kennt", rationale: "Alltagswörter mit kontextabhängiger Bedeutung sind genau das, was ein Glossar klären muss." },
          { id: "B", text: "Jedes Team führt ein eigenes Glossar mit eigener Definition", rationale: "Getrennte Glossare halten das Missverständnis am Leben. Ein Glossar sollte für das ganze Projekt zentral verwaltet werden." },
          { id: "C", text: "Die Definitionen mit den Stakeholdern abstimmen, das Homonym auflösen, zum Beispiel durch getrennte Begriffe, und das Glossar verbindlich machen", rationale: "Richtig. Das Glossar schafft ein gemeinsames Verständnis, wenn Begriffe mit den Stakeholdern abgestimmt, Homonyme vermieden oder gekennzeichnet werden und seine Nutzung verbindlich ist." },
          { id: "D", text: "Den Begriff nur in Kommentaren im Quellcode definieren", rationale: "Code-Kommentare sind nicht für alle Stakeholder zugänglich und kein Glossar." },
        ],
        answer: "C",
        explanation:
          "Ein Glossar definiert die Begriffe der Domäne, damit alle Stakeholder sie gleich verstehen. Verwalte es zentral mit klarer Zuständigkeit, stimme die Begriffe mit den Stakeholdern ab, mache es zugänglich und verbindlich, kennzeichne Synonyme und vermeide oder kennzeichne Homonyme.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c3-prototype",
        domain: "d3",
        objective: "LZ 3.7.1 Verschiedene Arten von Prototypen kennen und wissen, wozu sie dienen",
        difficulty: "foundation",
        question:
          "Früh im Projekt möchtest du das grobe Bildschirmlayout einer neuen App in einem Workshop mit Nutzern besprechen, anhand schneller Skizzen, die danach weggeworfen werden. Welche Art von Prototyp passt am besten?",
        options: [
          { id: "A", text: "Wireframe (explorativer Low-Fidelity-Prototyp)", rationale: "Richtig. Wireframes sind schnelle Low-Fidelity-Skizzen, mit denen Ideen erkundet und besprochen werden; nach Gebrauch werden sie verworfen." },
          { id: "B", text: "Nativer Prototyp", rationale: "Native Prototypen sind High-Fidelity-Prototypen auf der Zieltechnologie und für die Diskussion grober Layoutideen viel zu aufwendig." },
          { id: "C", text: "Evolutionärer Prototyp", rationale: "Ein evolutionärer Prototyp wird zum endgültigen System weiterentwickelt; er wird nicht weggeworfen." },
          { id: "D", text: "Pilotsystem", rationale: "Ein Pilotsystem ist ein evolutionärer Prototyp, der den Kern des echten Systems bildet, keine schnelle Skizze." },
        ],
        answer: "A",
        explanation:
          "Explorative Prototypen werden nach Gebrauch verworfen und kommen als Wireframes (Low Fidelity), Mock-Ups (Medium Fidelity) oder native Prototypen (High Fidelity) vor. Evolutionäre Prototypen, also Pilotsysteme, wachsen zum endgültigen System heran.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 4: Erarbeitung von Anforderungen ─────────────────────── */
      {
        id: "cpre-c4-kano",
        domain: "d4",
        objective: "LZ 4.2.1 Verstehen, wie das Kano-Modell helfen kann, die richtigen Anforderungen zu ermitteln",
        difficulty: "intermediate",
        question:
          "Für die Kunden einer Banking-App ist es selbstverständlich, dass sie ihren Kontostand sehen können. Sie würden das nie erwähnen, wären ohne diese Funktion aber sehr unzufrieden. Im Kano-Modell ist das ein …",
        options: [
          { id: "A", text: "Begeisterungsfaktor", rationale: "Begeisterungsfaktoren sind unerwartete Merkmale, die Begeisterung auslösen; ihr Fehlen führt nicht zu Unzufriedenheit." },
          { id: "B", text: "Basisfaktor", rationale: "Richtig. Basisfaktoren (Dissatisfiers, unterbewusste Anforderungen) werden als selbstverständlich vorausgesetzt, daher erwähnen Stakeholder sie selten; fehlen sie, entsteht starke Unzufriedenheit." },
          { id: "C", text: "Leistungsfaktor", rationale: "Leistungsfaktoren (Satisfiers, bewusste Anforderungen) werden ausdrücklich gefordert; je mehr davon erfüllt sind, desto höher die Zufriedenheit." },
          { id: "D", text: "Randbedingung", rationale: "Das ist eine Kategorie von Anforderungen, keine Kano-Kategorie." },
        ],
        answer: "B",
        explanation:
          "Das Kano-Modell hilft dir, Anforderungen zu finden, die Stakeholder nicht erwähnen: Erhebungstechniken helfen, Leistungs- und Basisfaktoren zu ermitteln, während Entwurfs- und Ideenfindungstechniken oft zu Begeisterungsfaktoren führen.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c4-elicitation",
        domain: "d4",
        objective: "LZ 4.2.3 Verstehen, wie eine geeignete Ermittlungstechnik für eine bestimmte Situation gewählt wird",
        difficulty: "intermediate",
        question:
          "Lagermitarbeiter führen ihren Kommissionierprozess seit Jahren durch. Es fällt ihnen schwer, die Details zu erklären, weil viele Schritte zur Routine geworden sind. Welches Vorgehen zur Ermittlung ist am besten geeignet?",
        options: [
          { id: "A", text: "Ein per E-Mail versandter Fragebogen", rationale: "Fragebögen erfassen, was Menschen in Worte fassen können; routiniertes, implizites Wissen geht dabei oft verloren." },
          { id: "B", text: "Brainstorming zu neuen Funktionen", rationale: "Brainstorming erzeugt neue Ideen; es zeigt nicht, wie der aktuelle Prozess tatsächlich abläuft." },
          { id: "C", text: "Beobachtung der Mitarbeiter bei der Arbeit", rationale: "Richtig. Beobachtungstechniken machen implizites, routiniertes Wissen sichtbar, das sich nur schwer in Worte fassen lässt." },
          { id: "D", text: "Lesen der Marketingbroschüre", rationale: "Broschüren beschreiben den tatsächlichen operativen Prozess selten." },
        ],
        answer: "C",
        explanation:
          "Der Lehrplan gliedert die Erhebungstechniken in Fragetechniken, Kollaborationstechniken, Beobachtungstechniken und artefaktbasierte Techniken. Beobachtung eignet sich gut, wenn Stakeholder routiniertes, implizites Wissen nicht ohne Weiteres in Worte fassen können.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c4-validation",
        domain: "d4",
        objective: "LZ 4.4.2 Sich an die vier wichtigen Aspekte für die Anforderungsvalidierung erinnern",
        difficulty: "advanced",
        question: "Welcher der folgenden Punkte ist einer der vier wichtigen Aspekte der Anforderungsvalidierung im CPRE-Lehrplan?",
        options: [
          { id: "A", text: "Trennung von Fehlererkennung und Fehlerkorrektur", rationale: "Richtig. Fehler finden und Fehler beheben sind getrennte Tätigkeiten, damit die Validierung fokussiert und gründlich bleibt." },
          { id: "B", text: "Nur einmal validieren, am Ende des Projekts", rationale: "Der Lehrplan fordert wiederholte Validierung, nicht eine einzige Prüfung am Ende." },
          { id: "C", text: "Der Autor validiert seine Anforderungen allein", rationale: "An der Validierung sollen die richtigen Stakeholder und unterschiedliche Sichten beteiligt sein, nicht nur der Autor." },
          { id: "D", text: "Nur aus Sicht der Entwickler validieren", rationale: "Die Validierung soll unterschiedliche Sichten berücksichtigen." },
        ],
        answer: "A",
        explanation:
          "Die vier Aspekte sind: Beteiligung der richtigen Stakeholder, Trennung von Fehlererkennung und Fehlerkorrektur, Validierung aus unterschiedlichen Sichten und wiederholte Validierung.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c4-sources",
        domain: "d4",
        objective: "LZ 4.1.2 Sich an die relevanten Quellen für das zu erstellende System erinnern",
        difficulty: "foundation",
        question:
          "Ein Team löst ein altes Schadensbearbeitungssystem ab. Welches Vorgehen nutzt alle drei Arten von Anforderungsquellen, die der CPRE-Lehrplan nennt?",
        options: [
          { id: "A", text: "Möglichst viele Schadensbearbeiter interviewen", rationale: "Das nutzt nur eine Art von Quelle: Stakeholder." },
          { id: "B", text: "Die relevanten Vorschriften und Prozessbeschreibungen lesen", rationale: "Das nutzt nur Dokumente als Quelle." },
          { id: "C", text: "Die Bildschirme und Funktionen des Altsystems analysieren", rationale: "Das nutzt nur Systeme als Quelle." },
          { id: "D", text: "Stakeholder, Dokumente wie Vorschriften und vorhandene Systeme wie das Altsystem kombinieren", rationale: "Richtig. Stakeholder, Dokumente und Systeme sind die drei Arten von Anforderungsquellen." },
        ],
        answer: "D",
        explanation:
          "Der Lehrplan nennt drei Arten von Anforderungsquellen: Stakeholder, Dokumente und Systeme. Gesetze, Normen und Prozessdokumente sowie bestehende oder Altsysteme fördern oft Anforderungen zutage, die Stakeholder zu erwähnen vergessen.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c4-design-techniques",
        domain: "d4",
        objective: "LZ 4.2.2 Den Unterschied zwischen Erhebungs-, Entwurfs- und Ideenfindungstechniken verstehen",
        difficulty: "intermediate",
        question:
          "Ein Produktteam sucht neue Ideen für Funktionen, die die Nutzer einer Fitness-App begeistern könnten. Welche dieser Techniken ist eine Entwurfs- und Ideenfindungstechnik und keine Erhebungstechnik?",
        options: [
          { id: "A", text: "Ein strukturiertes Interview mit bestehenden Nutzern", rationale: "Interviews sind Fragetechniken und gehören zu den Erhebungstechniken." },
          { id: "B", text: "Die Analogietechnik, die Ideen aus einer anderen Domäne wie Gaming überträgt", rationale: "Richtig. Analogien erzeugen neue Ideen, indem sie Konzepte aus einer anderen Domäne übertragen; das ist typisch für Entwurfs- und Ideenfindungstechniken." },
          { id: "C", text: "Feldbeobachtung der Nutzer im Fitnessstudio", rationale: "Feldbeobachtung ist eine Beobachtungstechnik und gehört zu den Erhebungstechniken." },
          { id: "D", text: "Analyse bestehender App-Store-Bewertungen", rationale: "Die Analyse vorhandener Dokumente ist eine artefaktbasierte Technik und gehört zu den Erhebungstechniken." },
        ],
        answer: "B",
        explanation:
          "Erhebungstechniken (Frage-, Kollaborations-, Beobachtungs- und artefaktbasierte Techniken) sammeln, was Stakeholder wissen oder tun. Entwurfs- und Ideenfindungstechniken wie Brainstorming, Analogien, Prototyping, Szenarien und Storyboards erzeugen neue Ideen und führen oft zu Begeisterungsfaktoren.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c4-conflict-type",
        domain: "d4",
        objective: "LZ 4.3.1 Sich an die verschiedenen Arten von Konflikten erinnern",
        difficulty: "intermediate",
        question:
          "Zwei Abteilungsleiter sind sich über die erforderliche Kapazität eines neuen Buchungssystems uneinig. Der eine nennt 2.000 Buchungen pro Tag aus dem Bericht des Vorjahres, der andere 5.000 aus einer Marktprognose. Um welche Art von Konflikt handelt es sich vor allem?",
        options: [
          { id: "A", text: "Wertekonflikt", rationale: "Wertekonflikte entstehen aus unterschiedlichen Überzeugungen oder Grundsätzen, etwa Datenschutz gegen Transparenz. Hier geht es um Zahlen." },
          { id: "B", text: "Beziehungskonflikt", rationale: "Beziehungskonflikte entstehen aus persönlichen Spannungen oder negativen Erfahrungen zwischen Menschen, die hier nicht beschrieben sind." },
          { id: "C", text: "Datenkonflikt", rationale: "Richtig. Die Beteiligten stützen sich auf unterschiedliche Informationen und Quellen; das ist typisch für einen Datenkonflikt." },
          { id: "D", text: "Strukturkonflikt", rationale: "Strukturkonflikte werden durch Strukturen verursacht, etwa Hierarchien, Zuständigkeiten oder die Verteilung von Ressourcen und Macht." },
        ],
        answer: "C",
        explanation:
          "Der Lehrplan unterscheidet Sach-, Daten-, Interessen-, Werte-, Beziehungs- und Strukturkonflikte. Die Art des Konflikts hilft dir bei der Wahl der Lösung: Datenkonflikte lassen sich oft lösen, indem die Fakten geklärt und eine verlässliche Quelle vereinbart wird.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c4-conflict-resolution",
        domain: "d4",
        objective: "LZ 4.3.3 Verstehen, wie geeignete Konfliktlösungstechniken angewendet werden",
        difficulty: "advanced",
        question:
          "Die Buchhaltung möchte, dass die Rechnungsmaske alle Details zeigt, der Außendienst dagegen eine minimale Ansicht auf dem Smartphone. Beide Bedürfnisse sind berechtigt, und das Budget erlaubt, beides umzusetzen. Welche Konfliktlösungstechnik passt am besten?",
        options: [
          { id: "A", text: "Variantenbildung", rationale: "Richtig. Beide Bedürfnisse können nebeneinander bestehen, zum Beispiel als rollenspezifische Ansichten, und der Aufwand ist vertretbar." },
          { id: "B", text: "Ober-sticht-Unter", rationale: "Eine Entscheidung durch eine höhere Instanz ist hier unnötig und würde eine Gruppe unzufrieden zurücklassen." },
          { id: "C", text: "Abstimmung", rationale: "Eine Abstimmung lässt die Minderheit unzufrieden zurück, obwohl beide Bedürfnisse erfüllt werden könnten." },
          { id: "D", text: "Kompromiss", rationale: "Eine Maske in der Mitte würde keine Gruppe ganz zufriedenstellen, obwohl beide vollständig zufriedengestellt werden können." },
        ],
        answer: "A",
        explanation:
          "Die wichtigsten Konfliktlösungstechniken sind Einigung, Kompromiss, Abstimmung, Ober-sticht-Unter und Variantenbildung, unterstützt durch Consider-All-Facts, Plus-Minus-Interesting und die Entscheidungsmatrix. Varianten eignen sich, wenn unterschiedliche Bedürfnisse zu vertretbaren Kosten nebeneinander bestehen können.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 5: Prozess und Arbeitsstruktur ───────────────────────── */
      {
        id: "cpre-c5-facets",
        domain: "d5",
        objective:
          "LZ 5.3.3 Wählen und anwenden einer geeigneten Konfiguration des RE-Prozesses für einfache System- und Entwicklungsgegebenheiten",
        difficulty: "advanced",
        question:
          "Ein Unternehmen entwickelt ein Produkt für einen anonymen Massenmarkt, arbeitet iterativ und erkundet die Anforderungen schrittweise. Welche Konfiguration des RE-Prozesses passt am besten?",
        options: [
          { id: "A", text: "Vertraglich regulierter RE-Prozess", rationale: "Vertraglich regulierte Konfigurationen passen zu kundenspezifischer Entwicklung, bei der eine Spezifikation die Grundlage eines Vertrags bildet." },
          { id: "B", text: "Partizipativer RE-Prozess", rationale: "Partizipative Konfigurationen passen zu kundenspezifischer Entwicklung mit enger, kontinuierlicher Zusammenarbeit mit bekannten Stakeholdern." },
          { id: "C", text: "Es wird kein RE-Prozess benötigt", rationale: "Jede Entwicklung braucht RE; nur seine Konfiguration unterscheidet sich." },
          { id: "D", text: "Produktorientierter RE-Prozess", rationale: "Richtig. Ein marktorientiertes, iteratives und exploratives Umfeld spricht für eine produktorientierte Konfiguration." },
        ],
        answer: "D",
        explanation:
          "Die Facetten Zeit (linear/iterativ), Zweck (präskriptiv/explorativ) und Ziel (kundenspezifisch/marktorientiert) führen zu typischen Konfigurationen: partizipativ, vertraglich reguliert und produktorientiert.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c5-factors",
        domain: "d5",
        objective: "LZ 5.1.2 Verstehen, wie und warum diese Faktoren Einfluss haben",
        difficulty: "intermediate",
        question:
          "Ein Team spezifiziert die Software für eine Infusionspumpe, ein sicherheitskritisches Medizinprodukt, das von einer Behörde zugelassen werden muss. Wie wirken sich diese Einflussfaktoren am ehesten auf den RE-Prozess aus?",
        options: [
          { id: "A", text: "RE kann entfallen, weil die Behörde alle Anforderungen vorgibt", rationale: "Vorschriften fügen Randbedingungen hinzu, legen aber nicht alle Anforderungen an das System fest." },
          { id: "B", text: "Anforderungen sollten nur mündlich besprochen werden, um flexibel zu bleiben", rationale: "Hohe Kritikalität und die Zulassung verlangen dokumentierte, prüfbare Anforderungen, nicht nur Gespräche." },
          { id: "C", text: "Die Kritikalität hat keinen Einfluss; nur Zeit und Budget zählen", rationale: "Kritikalität des Systems und Randbedingungen gehören zu den wichtigen Faktoren, die einen RE-Prozess beeinflussen." },
          { id: "D", text: "Anforderungen müssen expliziter formuliert und gründlicher dokumentiert und validiert werden", rationale: "Richtig. Hohe Kritikalität und regulatorische Randbedingungen erfordern einen stärker präskriptiven Prozess mit sorgfältig dokumentierten und validierten Anforderungen." },
        ],
        answer: "D",
        explanation:
          "Zu den Faktoren, die einen RE-Prozess beeinflussen, gehören der übergeordnete Entwicklungsprozess, der Entwicklungskontext, Fähigkeiten und Verfügbarkeit der Stakeholder, gemeinsames Verständnis, Komplexität und Kritikalität, Randbedingungen, Zeit und Budget, Volatilität und Erfahrung. Sicherheitskritische, regulierte Systeme lenken den Prozess in Richtung expliziter, präskriptiver Dokumentation.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c5-config-steps",
        domain: "d5",
        objective: "LZ 5.3.2 Verstehen der Schritte zur Konfiguration eines RE-Prozesses",
        difficulty: "foundation",
        question: "Du konfigurierst den RE-Prozess für ein neues Projekt. Was ist laut CPRE-Lehrplan der erste Schritt?",
        options: [
          { id: "A", text: "Geeignete Praktiken auswählen", rationale: "Die Auswahl der Praktiken ist der letzte Schritt, sobald Konfiguration und Arbeitsprodukte feststehen." },
          { id: "B", text: "Die Einflussfaktoren analysieren", rationale: "Richtig. Die Einflussfaktoren kommen zuerst, weil sie bestimmen, wie die Facetten bewertet werden." },
          { id: "C", text: "Die Arbeitsprodukte festlegen", rationale: "Die Arbeitsprodukte werden festgelegt, nachdem der Prozess konfiguriert wurde." },
          { id: "D", text: "Die Kriterien der Facetten bewerten", rationale: "Die Bewertung der Facetten ist der zweite Schritt und baut auf den Einflussfaktoren auf." },
        ],
        answer: "B",
        explanation:
          "Die Schritte sind: Einflussfaktoren analysieren, Kriterien der Facetten bewerten (Zeit, Zweck, Ziel), den Prozess konfigurieren, die Arbeitsprodukte festlegen und geeignete Praktiken auswählen.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 6: Requirements Management ───────────────────────────── */
      {
        id: "cpre-c6-traceability",
        domain: "d6",
        objective: "Lehrplan 3.3.0, Abschnitt 6.6 Verfolgbarkeit (LZ 6.6.1)",
        difficulty: "foundation",
        question:
          "Ein Gesetz ändert sich, und das Team muss schnell herausfinden, welche Anforderungen, Entwurfselemente und Testfälle betroffen sind. Welche Praktik macht das möglich?",
        options: [
          { id: "A", text: "Priorisierung", rationale: "Die Priorisierung bringt Anforderungen in eine Rangfolge; sie zeigt nicht, was von einer Änderung betroffen ist." },
          { id: "B", text: "Verfolgbarkeit (Traceability)", rationale: "Richtig. Verfolgbarkeit verknüpft Anforderungen mit ihrem Ursprung und mit nachgelagerten Arbeitsprodukten und ermöglicht so eine Auswirkungsanalyse." },
          { id: "C", text: "Nur Versionierung", rationale: "Versionen zeigen, wie sich eine Anforderung verändert hat, aber nicht, welche anderen Arbeitsprodukte von ihr abhängen." },
          { id: "D", text: "Ein Glossar", rationale: "Ein Glossar definiert Begriffe, keine Abhängigkeiten zwischen Arbeitsprodukten." },
        ],
        answer: "B",
        explanation:
          "Rückwärtsverfolgbarkeit zum Ursprung (hier das Gesetz) und Vorwärtsverfolgbarkeit zu Entwurf und Tests ermöglichen es, die Auswirkungen einer Änderung zu bewerten. Explizite Verfolgbarkeitsbeziehungen lassen sich als Links, Matrizen, Tabellen oder Graphen dokumentieren.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c6-baseline",
        domain: "d6",
        objective: "Lehrplan 3.3.0, Abschnitt 6.4 Konfigurationen und Basislinien (LZ 6.4.1)",
        difficulty: "intermediate",
        question:
          "Vor einem Release friert das Team einen stabilen, freigegebenen Satz von Anforderungen in bestimmten Versionen als Grundlage für Planung und Verträge ein. Wie nennt man das?",
        options: [
          { id: "A", text: "Eine Sicht", rationale: "Sichten zeigen ausgewählte oder aggregierte Teile der Anforderungen; sie frieren keinen freigegebenen Stand ein." },
          { id: "B", text: "Eine Basislinie (Baseline)", rationale: "Richtig. Eine Basislinie ist eine stabile, änderungskontrollierte Konfiguration von Arbeitsprodukten, die etwa für die Release-Planung oder andere Liefermeilensteine genutzt wird." },
          { id: "C", text: "Ein Attribut", rationale: "Attribute beschreiben Eigenschaften einzelner Anforderungen, zum Beispiel Status oder Priorität." },
          { id: "D", text: "Eine Persona", rationale: "Personas beschreiben fiktive Typen von Stakeholdern." },
        ],
        answer: "B",
        explanation:
          "Eine Anforderungskonfiguration ist eine konsistente Menge von Arbeitsprodukten, die Anforderungen enthalten; eine Basislinie ist eine stabile, änderungskontrollierte Konfiguration, die als Referenz dient, zum Beispiel für die Release-Planung.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c6-change-agile",
        domain: "d6",
        objective: "Lehrplan 3.3.0, Abschnitt 6.7 Umgang mit Änderungen (LZ 6.7.1)",
        difficulty: "intermediate",
        question: "Wer entscheidet in einem agilen Projekt typischerweise, wie mit einer beantragten Änderung der Anforderungen umgegangen wird?",
        options: [
          { id: "A", text: "Ein Change Control Board (Änderungsausschuss), das monatlich tagt", rationale: "Ein formales Change Control Board ist typisch für lineare, planbasierte Vorgehensweisen." },
          { id: "B", text: "Jeder Entwickler für sich", rationale: "Unkoordinierte Änderungen durch einzelne Entwickler sind kein Vorgehen zum Umgang mit Änderungen." },
          { id: "C", text: "Niemand, in agilen Projekten können sich Anforderungen nicht ändern", rationale: "Agile Vorgehensweisen begrüßen Änderungen ausdrücklich." },
          { id: "D", text: "Der Product Owner, indem er das Backlog aktualisiert und neu priorisiert", rationale: "Richtig. In agilen Vorgehensweisen werden Änderungen über das Backlog behandelt, das der Product Owner pflegt und priorisiert." },
        ],
        answer: "D",
        explanation:
          "Der Lehrplan stellt den Umgang mit Änderungen gegenüber: Change Control Boards mit festgelegten Verfahren in linearen Vorgehensweisen und Backlog-Management durch den Product Owner in agilen Vorgehensweisen.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c6-prioritization",
        domain: "d6",
        objective: "Lehrplan 3.3.0, Abschnitt 6.8 Priorisierung (LZ 6.8.2)",
        difficulty: "intermediate",
        question:
          "Ein Product Owner möchte 60 Backlog-Einträge für das nächste Release in eine Rangfolge bringen und lässt das Team sofort darüber abstimmen. Welcher Schritt der Priorisierung wurde übersprungen?",
        options: [
          { id: "A", text: "Alle Anforderungen mit niedriger Priorität archivieren", rationale: "Archivieren ist kein Schritt der Priorisierung." },
          { id: "B", text: "Eine Basislinie aller 60 Einträge erstellen", rationale: "Eine Basislinie ist eine stabile Konfiguration für die Planung, kein Schritt der Priorisierung." },
          { id: "C", text: "Die Bewertungskriterien festlegen, etwa Geschäftswert, Dringlichkeit, Aufwand oder Abhängigkeiten", rationale: "Richtig. Ohne abgestimmte Kriterien spiegelt die Rangfolge persönliche Vorlieben wider statt der Ziele des Projekts." },
          { id: "D", text: "Testfälle für alle Einträge schreiben", rationale: "Das Schreiben von Testfällen gehört nicht zur Priorisierung." },
        ],
        answer: "C",
        explanation:
          "Die Schritte sind: Ziele und Randbedingungen festlegen, Bewertungskriterien festlegen, die beteiligten Stakeholder und die zu priorisierenden Anforderungen bestimmen, eine Technik auswählen und die Priorisierung durchführen. Priorisierungstechniken lassen sich in Ad-hoc-Techniken und analytische Techniken einteilen.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c6-views",
        domain: "d6",
        objective: "Lehrplan 3.3.0, Abschnitt 6.5 Attribute und Sichten (LZ 6.5.3)",
        difficulty: "intermediate",
        question:
          "Ein Tester möchte nur die Anforderungen sehen, die dem Release 2.1 zugeordnet sind und den Status „freigegeben“ haben. Alle Attribute dürfen sichtbar bleiben. Um welche Art von Sicht handelt es sich?",
        options: [
          { id: "A", text: "Selektive Sicht", rationale: "Richtig. Eine selektive Sicht zeigt nur die Anforderungen, die bestimmte Kriterien erfüllen, hier Release und Status." },
          { id: "B", text: "Projektive Sicht", rationale: "Eine projektive Sicht zeigt nur bestimmte Attribute oder Informationen der Anforderungen; hier bleiben alle Attribute sichtbar." },
          { id: "C", text: "Aggregierende Sicht", rationale: "Eine aggregierende Sicht verdichtet Informationen, zum Beispiel die Anzahl der Anforderungen pro Status." },
          { id: "D", text: "Basislinie", rationale: "Eine Basislinie ist eine stabile, änderungskontrollierte Konfiguration, keine Sicht." },
        ],
        answer: "A",
        explanation:
          "Sichten zeigen die Teile der Anforderungen, die ein bestimmter Leser braucht. Selektive Sichten filtern Anforderungen, projektive Sichten zeigen nur ausgewählte Attribute, und aggregierende Sichten fassen zusammen; die meisten Berichte kombinieren diese Arten.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 7: Werkzeugunterstützung ─────────────────────────────── */
      {
        id: "cpre-c7-introduction",
        domain: "d7",
        objective: "Lehrplan 3.3.0, Abschnitt 7.2 Werkzeugeinführung (LZ 7.2.1)",
        difficulty: "foundation",
        question: "Welches Vorgehen ist bei der Einführung eines neuen Requirements-Management-Werkzeugs in einer Organisation am ehesten zu empfehlen?",
        options: [
          { id: "A", text: "Zuerst RE-Prozess und Bedarf klären, alle Kosten berücksichtigen und das Werkzeug vor der breiten Einführung in einem Pilotprojekt erproben", rationale: "Richtig. Ein Werkzeug soll einen definierten Prozess unterstützen; die Berücksichtigung der Kosten über die Lizenzen hinaus (Schulung, Administration) und ein Pilot verringern das Risiko einer schlechten Passung." },
          { id: "B", text: "Das Werkzeug mit den meisten Funktionen kaufen und es auf einen Schlag für alle einführen", rationale: "Viele Funktionen garantieren keine gute Passung, und eine Big-Bang-Einführung ohne Vorbereitung ist riskant." },
          { id: "C", text: "Jedes Team wählt ohne Abstimmung sein eigenes Werkzeug", rationale: "Das untergräbt gemeinsame Arbeitsprodukte, Verfolgbarkeit und Berichtswesen." },
          { id: "D", text: "Erst das Werkzeug einführen und den Prozess später festlegen", rationale: "Ein Werkzeug kann einen undefinierten Prozess nicht reparieren; der Prozess sollte zuerst kommen." },
        ],
        answer: "A",
        explanation:
          "Bei der Einführung von RE-Werkzeugen solltest du an den Prozess denken, den das Werkzeug unterstützen soll, an die Gesamtkosten, an Schulungen, an eine schrittweise Einführung und an die Erprobung des Werkzeugs in der Praxis.",
        reference: SYLLABUS,
      },
      {
        id: "cpre-c7-tool-types",
        domain: "d7",
        objective: "Lehrplan 3.3.0, Abschnitt 7.1 Werkzeuge im Requirements Engineering (LZ 7.1.1)",
        difficulty: "foundation",
        question:
          "Ein Team braucht ein Werkzeug, um Attribute, Versionen und Konfigurationen von Anforderungen, Verfolgbarkeitsbeziehungen und Änderungsanträge zu verwalten. Welche Art von RE-Werkzeug deckt diese Aufgaben ab?",
        options: [
          { id: "A", text: "Ein Werkzeug zur Steuerung des RE-Prozesses, etwa zum Messen und Berichten der Prozessqualität", rationale: "Werkzeuge für das Management des RE-Prozesses unterstützen Arbeitsabläufe und die Messung des Prozesses, nicht die Anforderungen selbst." },
          { id: "B", text: "Ein Requirements-Management-Werkzeug", rationale: "Richtig. Requirements-Management-Werkzeuge unterstützen Attribute, Priorisierung, Versionen und Konfigurationen, Verfolgbarkeit und Änderungsmanagement." },
          { id: "C", text: "Ein Framework für Testautomatisierung", rationale: "Testautomatisierung unterstützt das Testen, nicht die Verwaltung von Anforderungen." },
          { id: "D", text: "Ein Werkzeug zur Dokumentation von Anforderungswissen, etwa ein Modellierungs- oder Kollaborationswerkzeug", rationale: "Diese Werkzeuge unterstützen das Dokumentieren von Anforderungen und das gemeinsame Verständnis, nicht die Verwaltung von Attributen, Versionen und Verfolgbarkeitsbeziehungen." },
        ],
        answer: "B",
        explanation:
          "Der Lehrplan unterscheidet Werkzeuge für das Management von Anforderungen, für das Management des RE-Prozesses und für die Dokumentation von Wissen über Anforderungen. Werkzeuge unterstützen die RE-Arbeit, ersetzen aber keinen definierten Prozess.",
        reference: SYLLABUS,
      },
    ],
  },
};
