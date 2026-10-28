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
  label: "IREB – Lehrplan CPRE Foundation Level 3.3.0 (englische Fassung)",
  url: "https://hub.ireb.org/media/pages/resources/cpre-foundation-level-syllabus/9c084b1cfd-1787039954/cpre_foundationlevel_syllabus_en_v.3.3.0.pdf",
};

export const irebCpreDe: DeContent = {
  slug: "ireb-cpre-foundation-level",
  name: "IREB CPRE Foundation Level",
  languageNote:
    "Die Prüfung wird laut IREB-Factsheet auch auf Deutsch angeboten; Sie legen sie bei einer IREB-lizenzierten Zertifizierungsstelle ab.",
  facts: [
    { label: "Prüfungsanbieter", value: "IREB" },
    { label: "Fragen", value: "Ca. 45" },
    { label: "Dauer", value: "75 Minuten (90 Minuten für Nicht-Muttersprachler auf schriftlichen Antrag)" },
    { label: "Bestehensgrenze", value: "Mindestens 70 % der Gesamtpunktzahl" },
    {
      label: "Fragetypen",
      value:
        "Multiple Choice: Einfachauswahl (A), Auswahl mehrerer Antworten (P) und Richtig/Falsch-Sets (K); 1–3 Punkte pro Frage",
    },
    {
      label: "Durchführung",
      value: "Über IREB-lizenzierte Zertifizierungsstellen, in Prüfungszentren oder – bei einigen Stellen – remote",
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
      "Der IREB CPRE Foundation Level ist das internationale Einstiegszertifikat für Requirements Engineering. Die Prüfung umfasst ca. 45 Multiple-Choice-Fragen in 75 Minuten (90 Minuten für Nicht-Muttersprachler auf Antrag), und Sie bestehen mit mindestens 70 % der Punkte. Grundlage ist der Lehrplan 3.3.0 (Stand 1. April 2026) mit sieben Kapiteln.",
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
          "Die Prüfung wird von IREB-lizenzierten Zertifizierungsstellen durchgeführt, entweder direkt im Anschluss an eine Schulung oder als eigenständige Prüfung in einem Prüfungszentrum; einige Stellen bieten auch Remote-Prüfungen an. Formale Voraussetzungen gibt es nicht, der Lehrplan setzt jedoch Grundkenntnisse in plangetriebener und agiler Systementwicklung voraus.",
          "Alle Fragen sind Multiple-Choice-Fragen, und zwar in drei Arten: Einfachauswahl (A), Fragen, bei denen Sie mehrere Antworten wählen (P), und Richtig/Falsch-Sets (K). Eine Frage bringt ein bis drei Punkte; die Punktzahl steht im Fragenkopf. Da P- und K-Fragen aus mehreren Teilen bestehen, lesen Sie jede Aussage sorgfältig – lückenhaftes Wissen kostet hier schnell Punkte.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf Sie sich konzentrieren sollten",
        paragraphs: [
          "Der Lehrplan nennt keine Prüfungsgewichtung pro Kapitel, wohl aber Schulungszeiten, und diese zeigen, wo die Tiefe liegt. Kapitel 3 (Arbeitsprodukte und Dokumentationspraktiken) hat sieben Stunden und Kapitel 4 (Praktiken für die Erarbeitung von Anforderungen) viereinhalb – zusammen fast zwei Drittel der insgesamt 17 Std. 45 Min. Beide liegen auf der kognitiven Stufe K3 (Anwenden; im englischen Lehrplan L3). Sie müssen die Inhalte also anwenden können, zum Beispiel eine Anforderung mit einer Schablone formulieren oder Stakeholder identifizieren und eine Stakeholder-Liste erstellen.",
          "Vernachlässigen Sie die kurzen Kapitel nicht. Die neun Prinzipien aus Kapitel 2, die Facetten und Konfigurationen des RE-Prozesses aus Kapitel 5 sowie Verfolgbarkeit und Priorisierung aus Kapitel 6 liefern viele kompakte Fragen, bei denen Sie leicht punkten, wenn Sie die Begriffe genau kennen.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Lehrplan 3.3.0 vollständig lesen",
            body: "Laden Sie den kostenlosen Lehrplan bei IREB herunter. Er legt genau fest, was geprüft werden kann, einschließlich aller Lernziele. Achten Sie darauf, dass Ihr Buch oder Kurs der Version 3.3.0 folgt.",
          },
          {
            title: "Begriffe präzise lernen",
            body: "Legen Sie sich ein eigenes Glossar an: Arten von Anforderungen, die neun Prinzipien, Qualitätskriterien, Konfliktarten, Arten von Sichten, Verfolgbarkeit. Viele Fragen hängen an der genauen Bedeutung eines Begriffs.",
          },
          {
            title: "Die K3-Fertigkeiten üben",
            body: "Formulieren Sie Anforderungen mit Satzschablonen (z. B. EARS oder der Satzschablone nach Rupp), eine User Story im Format nach Cohn und einen Use Case mit einer Formularvorlage. Zeichnen Sie ein einfaches UML-Klassendiagramm und ein UML-Aktivitätsdiagramm, und üben Sie das Lesen von Kontextdiagrammen und Zustandsmaschinen.",
          },
          {
            title: "Die Entscheidungstabellen lernen",
            body: "Welche Ermittlungstechnik in welcher Situation, welche Technik zur Konfliktlösung, welche Validierungstechnik, welche Prozesskonfiguration: Üben Sie diese Entscheidungen, denn sie prüfen die Lernziele der Stufen K2 und K3.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeiten Sie vollständige Übungsprüfungen mit 45 Fragen in 75 Minuten, einschließlich der mehrteiligen Fragetypen P und K, und lesen Sie jede Erklärung.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Sie brauchen 70 %. Buchen Sie die Prüfung, sobald Sie in mehreren Übungsprüfungen deutlich darüber liegen, damit am Prüfungstag nicht ein paar knifflige Fragen über das Ergebnis entscheiden.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Mit Material für ältere Lehrplanversionen lernen. Prüfen Sie, ob Ihre Quellen den Lehrplan 3.3.0 abdecken.",
          "Aus der eigenen Projekterfahrung antworten statt nach dem Lehrplan. Die Prüfung folgt den Definitionen von IREB, die vom Sprachgebrauch in Ihrem Unternehmen abweichen können.",
          "Die Qualitätskriterien für einzelne Anforderungen mit denen für Arbeitsprodukte verwechseln.",
          "Systemgrenze und Kontextgrenze verwechseln oder Erhebungstechniken mit Entwurfs- und Ideenfindungstechniken.",
          "K- und P-Fragen zu schnell beantworten. Jede Aussage zählt, also bewerten Sie jede Option für sich.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die Prüfung zum CPRE Foundation Level?",
        answer:
          "Laut IREB-Prüfungsordnung ca. 45 Multiple-Choice-Fragen. Jede Frage bringt ein bis drei Punkte, und Sie benötigen mindestens 70 % der Gesamtpunktzahl, um zu bestehen.",
      },
      {
        question: "Wie lange dauert die Prüfung?",
        answer:
          "75 Minuten. Wer die Prüfung nicht in seiner Muttersprache ablegt, kann schriftlich und mit Begründung 90 Minuten beantragen – idealerweise zusammen mit der Prüfungsanmeldung, spätestens vor Prüfungsbeginn.",
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
          "Ja. Laut IREB-Factsheet wird die Prüfung unter anderem auf Deutsch angeboten. Welche Sprachen und Termine konkret verfügbar sind, erfahren Sie bei Ihrer Zertifizierungsstelle. Wenn Sie die Prüfung nicht in Ihrer Muttersprache ablegen, können Sie 90 statt 75 Minuten beantragen.",
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
        "CPRE Foundation Level Prüfungsvorbereitung zum Lehrplan 3.3.0: ca. 45 Fragen, 75 Minuten, 70 % zum Bestehen, alle sieben Kapitel und ein 6-Schritte-Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "ireb-cpre-foundation-level",
    intro:
      "15 eigene Übungsfragen zum CPRE Foundation Level aus allen sieben Kapiteln des IREB-Lehrplans 3.3.0, mit mehr Fragen zu den umfangreicheren Kapiteln 3, 4 und 6. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "CPRE Foundation Level Übungsfragen mit Lösungen (3.3.0)",
      description:
        "15 kostenlose IREB CPRE Foundation Level Übungsfragen zum Lehrplan 3.3.0 – Prinzipien, Schablonen, Ermittlung, Validierung, Verfolgbarkeit – mit Erklärungen.",
    },
    questions: [
      /* ── Kapitel 1: Einführung und Überblick ──────────────────────────── */
      {
        id: "cpre-c1-requirement-types",
        domain: "d1",
        objective: "LZ 1.1.2 Die verschiedenen Arten von Anforderungen verstehen",
        difficulty: "foundation",
        question:
          "„Das System soll die Suchergebnisse bei 95 % aller Anfragen innerhalb von zwei Sekunden anzeigen.“ Um welche Art von Anforderung handelt es sich?",
        options: [
          { id: "A", text: "Qualitätsanforderung", rationale: "Richtig. Die Aussage beschreibt eine Qualität – hier die Performance –, die das System haben soll." },
          { id: "B", text: "Funktionale Anforderung", rationale: "Eine funktionale Anforderung beschreibt ein Ergebnis oder Verhalten, das das System liefert, etwa die Suche selbst – nicht, wie schnell sie erfolgt." },
          { id: "C", text: "Randbedingung (Constraint)", rationale: "Eine Randbedingung begrenzt den Lösungsraum über das hinaus, was für funktionale Anforderungen und Qualitätsanforderungen nötig ist, zum Beispiel eine vorgeschriebene Technologie oder ein Gesetz." },
          { id: "D", text: "Glossareintrag", rationale: "Ein Glossar definiert Begriffe; hier handelt es sich um eine Anforderung." },
        ],
        answer: "A",
        explanation:
          "IREB unterscheidet funktionale Anforderungen, Qualitätsanforderungen und Randbedingungen. Antwortzeiten, Verfügbarkeit, Sicherheit und Benutzbarkeit sind typische Qualitätsanforderungen.",
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

      /* ── Kapitel 2: Grundlegende Prinzipien ───────────────────────────── */
      {
        id: "cpre-c2-principles",
        domain: "d2",
        objective: "LZ 2.1.1 Aufzählen der Prinzipien des RE",
        difficulty: "foundation",
        question: "Welche der folgenden Aussagen ist KEINES der neun Prinzipien des Requirements Engineering im CPRE-Lehrplan?",
        options: [
          { id: "A", text: "Wertorientierung", rationale: "Das ist Prinzip 1: Anforderungen sind Mittel zum Zweck, kein Selbstzweck." },
          { id: "B", text: "Gemeinsames Verständnis", rationale: "Das ist Prinzip 3." },
          { id: "C", text: "Vollständigkeit vor der Implementierung", rationale: "Richtig. Das ist kein Prinzip. Anforderungen entwickeln sich weiter (Prinzip 7), und eine vollständige Spezifikation vorab wird nicht verlangt." },
          { id: "D", text: "Systematische und disziplinierte Arbeit", rationale: "Das ist Prinzip 9." },
        ],
        answer: "C",
        explanation:
          "Die neun Prinzipien sind: Wertorientierung, Stakeholder, gemeinsames Verständnis, Kontext, Problem – Anforderung – Lösung, Validierung, Evolution, Innovation sowie systematische und disziplinierte Arbeit.",
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

      /* ── Kapitel 3: Arbeitsprodukte und Dokumentation ─────────────────── */
      {
        id: "cpre-c3-user-story",
        domain: "d3",
        objective: "LZ 3.3.2 Spezifizieren einer individuellen Anforderung und einer User Story mit Hilfe einer Satzschablone",
        difficulty: "foundation",
        question: "Welche Aussage folgt der User-Story-Schablone nach Cohn?",
        options: [
          { id: "A", text: "Das System soll Berichte als PDF exportieren.", rationale: "Das ist eine klassische „soll“-Anforderung, keine User Story." },
          { id: "B", text: "Wenn der Benutzer auf Export klickt, soll das System ein PDF erzeugen.", rationale: "Das folgt einem EARS-ähnlichen, ereignisgesteuerten Muster, nicht der User-Story-Schablone." },
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
          "Sie möchten die Schritte eines Geschäftsprozesses spezifizieren, einschließlich Entscheidungen und parallel ablaufender Schritte. Welcher Modelltyp ist am besten geeignet?",
        options: [
          { id: "A", text: "UML-Klassendiagramm", rationale: "Klassendiagramme spezifizieren Daten und die Objekte einer Domäne mit ihren Beziehungen, keine Prozessschritte." },
          { id: "B", text: "Kontextdiagramm", rationale: "Ein Kontextdiagramm zeigt das System in seiner Umgebung und die Schnittstellen, nicht den internen Prozessablauf." },
          { id: "C", text: "Glossar", rationale: "Ein Glossar definiert Begriffe; es ist kein Modell eines Prozesses." },
          { id: "D", text: "UML-Aktivitätsdiagramm", rationale: "Richtig. Aktivitätsdiagramme modellieren Funktionen und Geschäftsprozesse mit Aktionen, Entscheidungen und parallelen Abläufen." },
        ],
        answer: "D",
        explanation:
          "Wählen Sie das Modell passend zum Aspekt: Struktur und Daten → Klassendiagramm; Funktion und Ablauf → Aktivitäts- oder Prozessmodell; Zustand und Verhalten → Zustandsmaschine; Kontext → Kontextdiagramm.",
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
          "Das Kano-Modell hilft Ihnen, Anforderungen zu finden, die Stakeholder nicht erwähnen: Erhebungstechniken helfen, Leistungs- und Basisfaktoren zu ermitteln, während Entwurfs- und Ideenfindungstechniken oft zu Begeisterungsfaktoren führen.",
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
        question: "Welche der folgenden Aussagen ist einer der vier wichtigen Aspekte der Anforderungsvalidierung im CPRE-Lehrplan?",
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

      /* ── Kapitel 6: Requirements Management ───────────────────────────── */
      {
        id: "cpre-c6-traceability",
        domain: "d6",
        objective: "EO 6.6.1 Name reasons for requirements traceability",
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
        objective: "EO 6.4.1 Know the use of requirements configurations and baselines",
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
        objective: "EO 6.7.1 Know how to handle changes in linear and agile approaches",
        difficulty: "intermediate",
        question: "Wer entscheidet in einem agilen Projekt typischerweise, wie mit einer beantragten Änderung der Anforderungen umgegangen wird?",
        options: [
          { id: "A", text: "Ein Change Control Board, das monatlich tagt", rationale: "Ein formales Change Control Board ist typisch für lineare, plangetriebene Vorgehensweisen." },
          { id: "B", text: "Jeder Entwickler für sich", rationale: "Unkoordinierte Änderungen durch einzelne Entwickler sind kein Vorgehen zum Umgang mit Änderungen." },
          { id: "C", text: "Niemand – in agilen Projekten können sich Anforderungen nicht ändern", rationale: "Agile Vorgehensweisen begrüßen Änderungen ausdrücklich." },
          { id: "D", text: "Der Product Owner, indem er das Backlog aktualisiert und neu priorisiert", rationale: "Richtig. In agilen Vorgehensweisen werden Änderungen über das Backlog behandelt, das der Product Owner pflegt und priorisiert." },
        ],
        answer: "D",
        explanation:
          "Der Lehrplan stellt den Umgang mit Änderungen gegenüber: Change Control Boards mit festgelegten Verfahren in linearen Vorgehensweisen und Backlog-Management durch den Product Owner in agilen Vorgehensweisen.",
        reference: SYLLABUS,
      },

      /* ── Kapitel 7: Werkzeugunterstützung ─────────────────────────────── */
      {
        id: "cpre-c7-introduction",
        domain: "d7",
        objective: "EO 7.2.1 Explain what to consider when introducing RE tools",
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
          "Bei der Einführung von RE-Werkzeugen sollten Sie an den Prozess denken, den das Werkzeug unterstützen soll, an die Gesamtkosten, an Schulungen, an eine schrittweise Einführung und an die Erprobung des Werkzeugs in der Praxis.",
        reference: SYLLABUS,
      },
    ],
  },
};
