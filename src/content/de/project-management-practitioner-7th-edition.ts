import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for the Project Management Practitioner exam (7th edition).
 * Exam facts follow the verified record in src/config/certifications.ts (PeopleCert exam page,
 * checked 2026-11-26). No weights are published; domains group the learning areas listed there.
 * Naming stays neutral: no method trademark in names or text.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const EXAM = {
  label: "PeopleCert: Practitioner (7. Auflage), Prüfungsseite",
  url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-practitioner-3581",
};

export const pmPractitioner7De: DeContent = {
  slug: "project-management-practitioner-7th-edition",
  name: "Projektmanagement Practitioner (7. Auflage)",
  languageNote:
    "PeopleCert bietet die Practitioner-Prüfung der 7. Auflage auch auf Deutsch an, neben Englisch und zwölf weiteren Sprachen.",
  facts: [
    { label: "Prüfungsanbieter", value: "PeopleCert" },
    { label: "Auflage", value: "7. Auflage" },
    { label: "Umfang", value: "56 Fragen und Teilfragen mit zusammen 70 Punkten" },
    { label: "Format", value: "Szenariobasierte Objective-Testing-Prüfung" },
    { label: "Dauer", value: "150 Minuten" },
    { label: "Bestehensgrenze", value: "60 %" },
    { label: "Hilfsmittel", value: "Open Book" },
    { label: "Prüfungssprachen", value: "14, darunter Deutsch und Englisch" },
    {
      label: "Voraussetzung",
      value: "Foundation der 7. Auflage oder eine andere anerkannte Projektmanagement-Zertifizierung (Liste bei PeopleCert)",
    },
    { label: "Erneuerung", value: "Mit 60 CPD-Punkten oder einer weiteren Prüfung derselben Produktreihe" },
  ],
  domains: [
    { id: "d1", name: "Grundprinzipien" },
    { id: "d2", name: "Menschen: Rollen, Personalführung und Kommunikation" },
    { id: "d3", name: "Themen (Practices)" },
    { id: "d4", name: "Prozesse" },
    { id: "d5", name: "Anpassung und Projektkontext" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "project-management-practitioner-7th-edition",
    summary:
      "Die Practitioner-Prüfung der 7. Auflage prüft, ob du die Projektmanagementmethode auf ein konkretes Projektszenario anwenden kannst. Sie besteht aus 56 Fragen und Teilfragen mit 70 Punkten in 150 Minuten; bestanden ist ab 60 %, also 42 Punkten. Das offizielle Handbuch darfst du als Open-Book-Hilfsmittel nutzen. Voraussetzung ist die Foundation oder eine andere anerkannte Zertifizierung.",
    whoFor: [
      "Projektleiterinnen und Projektleiter mit Foundation-Zertifikat, die die Methode in der Praxis anwenden",
      "Mitglieder von Projektbüros, die Projekte methodisch steuern und anpassen",
      "Inhaber anerkannter Projektmanagement-Zertifikate, die direkt auf Practitioner-Niveau einsteigen wollen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung besteht aus 56 Fragen und Teilfragen mit zusammen 70 Punkten. Sie bezieht sich auf ein Projektszenario mit Zusatzinformationen; du wendest die Methode also auf eine konkrete Situation an, statt Definitionen abzufragen. Du hast 150 Minuten, bestanden ist ab 60 %, also ab 42 Punkten.",
          "Die Prüfung ist Open Book: Du darfst das offizielle Handbuch nutzen. Voraussetzung ist die Foundation der 7. Auflage oder eine andere anerkannte Zertifizierung, etwa eine frühere Auflage der Methode, PMP, CAPM oder IPMA Level A bis D. Die vollständige Liste steht bei PeopleCert. Die Prüfung gibt es in 14 Sprachen, darunter Deutsch.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "PeopleCert nennt als Lernbereiche die sieben Grundprinzipien, die sieben Themen (Practices) und die sieben Prozesse, Rollen und Verantwortlichkeiten, Personalführung und Zusammenarbeit, Nachhaltigkeit und ESG, digitales und Datenmanagement, Kommunikation sowie die Anpassung der Methode an Größe, Kontext und Komplexität des Projekts. Eine Gewichtung wird nicht veröffentlicht.",
          "Im Unterschied zur Foundation geht es um Anwendung: Welche Rolle entscheidet in dieser Situation? Welcher Prozess ist gerade aktiv? Was muss der Projektmanager tun, wenn eine Toleranz voraussichtlich überschritten wird? Wie wird das Risikomanagement für ein kleines, agiles Projekt angepasst? Übe deshalb vor allem mit Szenariofragen und lerne, im Handbuch schnell die richtige Stelle zu finden.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Foundation-Wissen sichern",
            body: "Wiederhole Grundprinzipien, Themen, Prozesse und Rollen, bis du sie sicher zuordnen kannst. Practitioner-Fragen setzen dieses Wissen voraus.",
          },
          {
            title: "Das Handbuch als Werkzeug vorbereiten",
            body: "Markiere wichtige Tabellen und Abschnitte, etwa zu Rollen, Toleranzen, Managementprodukten und Prozessaktivitäten. Prüfe vorher, welche Markierungen deine Prüfungsstelle erlaubt.",
          },
          {
            title: "Eskalationswege verinnerlichen",
            body: "Lerne, wer bei welcher Abweichung wen informiert: Teammanager an Projektmanager, Projektmanager an Lenkungsausschuss, Lenkungsausschuss an die Unternehmensebene.",
          },
          {
            title: "Anpassung üben",
            body: "Überlege für unterschiedliche Projekte, etwa klein, groß, agil oder mit externen Lieferanten, wie Rollen, Managementprodukte und Vorgehen angepasst werden, ohne die Grundprinzipien aufzugeben.",
          },
          {
            title: "Unter Prüfungsbedingungen üben",
            body: "Bearbeite vollständige Übungsprüfungen in 150 Minuten mit Handbuch. Achte darauf, das Handbuch nur gezielt zu nutzen, sonst reicht die Zeit nicht.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 70 % liegst, also deutlich über der Bestehensgrenze von 60 %.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Nur Definitionen lernen. Die Practitioner-Prüfung fragt nach Anwendung im Szenario.",
          "Sich zu sehr auf das Handbuch verlassen. Wer jede Antwort nachschlägt, schafft die 150 Minuten nicht.",
          "Rollen verwechseln: Der Auftraggeber verantwortet den Business Case, nicht der Projektmanager.",
          "Anpassung mit Weglassen verwechseln. Grundprinzipien werden immer angewendet; angepasst werden Themen, Prozesse, Rollen und Managementprodukte.",
          "Die neuen Schwerpunkte der 7. Auflage übersehen, etwa Personalführung, Nachhaltigkeit sowie digitales und Datenmanagement.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie ist die Practitioner-Prüfung aufgebaut?",
        answer: "56 Fragen und Teilfragen mit zusammen 70 Punkten zu einem Projektszenario, in 150 Minuten.",
      },
      {
        question: "Wie viele Punkte brauche ich zum Bestehen?",
        answer: "60 %, also 42 von 70 Punkten.",
      },
      {
        question: "Darf ich das Handbuch benutzen?",
        answer: "Ja. Die Prüfung ist Open Book; du darfst das offizielle Handbuch verwenden.",
      },
      {
        question: "Welche Voraussetzung brauche ich?",
        answer:
          "Die Foundation der 7. Auflage oder eine andere anerkannte Zertifizierung, etwa eine frühere Auflage der Methode, PMP, CAPM oder IPMA Level A bis D. Die vollständige Liste steht bei PeopleCert.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer: "Ja. PeopleCert bietet sie in 14 Sprachen an, darunter Deutsch.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den von PeopleCert genannten Lernbereichen erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "Projektmanagement Practitioner (7. Auflage): Prüfung & Lernplan",
      description:
        "Practitioner-Prüfung der 7. Auflage auf Deutsch vorbereiten: 70 Punkte, 150 Minuten, 60 % zum Bestehen, Open Book, Szenariofragen zu Rollen, Themen, Prozessen und Anpassung.",
    },
    published: "2026-11-26",
    updated: "2026-11-26",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "project-management-practitioner-7th-edition",
    intro:
      "30 eigene szenariobasierte Übungsfragen zur Practitioner-Prüfung der 7. Auflage aus allen Lernbereichen. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-26",
    updated: "2026-11-26",
    seo: {
      title: "Projektmanagement Practitioner Übungsfragen (7. Auflage, Deutsch)",
      description:
        "30 kostenlose szenariobasierte Practitioner-Übungsfragen auf Deutsch: Toleranzen und Eskalation, Rollen, Risiken, Änderungen, Phasen und Anpassung, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Grundprinzipien ───────────────────────────────────────────────── */
      {
        id: "pmp7-d1-justification",
        domain: "d1",
        objective: "Grundprinzipien anwenden",
        difficulty: "intermediate",
        question:
          "Mitten im Projekt zur Einführung einer neuen Lagersoftware zeigt sich, dass die erwarteten Einsparungen viel geringer ausfallen als geplant. Die Kosten liegen im Rahmen. Welches Grundprinzip verlangt, dass der Lenkungsausschuss jetzt über die Fortführung entscheidet?",
        options: [
          { id: "A", text: "Produktorientierung", rationale: "Dieses Prinzip betrifft die Definition und Lieferung der Produkte, nicht die Rechtfertigung des Projekts." },
          { id: "B", text: "Fortlaufende geschäftliche Rechtfertigung", rationale: "Richtig. Das Projekt muss über die gesamte Laufzeit gerechtfertigt bleiben; sinkende Nutzen stellen das infrage." },
          { id: "C", text: "Lernen aus Erfahrung", rationale: "Lernen ist wichtig, verlangt aber keine Entscheidung über die Fortführung." },
          { id: "D", text: "Anpassen an die Projektumgebung", rationale: "Anpassung betrifft die Gestaltung der Methode, nicht die Wirtschaftlichkeit." },
        ],
        answer: "B",
        explanation: "Wenn der Business Case nicht mehr trägt, muss das Projekt geändert oder vorzeitig beendet werden, auch wenn Termine und Kosten eingehalten werden.",
        reference: EXAM,
      },
      {
        id: "pmp7-d1-exception",
        domain: "d1",
        objective: "Grundprinzipien anwenden",
        difficulty: "intermediate",
        question:
          "Der Lenkungsausschuss möchte nicht jede Woche über Details entscheiden, sondern nur eingreifen, wenn Termine oder Kosten deutlich abweichen. Welches Grundprinzip unterstützt das?",
        options: [
          { id: "A", text: "Steuern nach dem Ausnahmeprinzip", rationale: "Richtig. Für jede Ebene werden Toleranzen festgelegt; erst bei voraussichtlicher Überschreitung wird eskaliert." },
          { id: "B", text: "Definierte Rollen, Verantwortlichkeiten und Beziehungen", rationale: "Dieses Prinzip klärt Zuständigkeiten, nicht die Eskalationsschwellen." },
          { id: "C", text: "Steuern über Managementphasen", rationale: "Phasen strukturieren das Projekt, legen aber nicht die Eingriffsschwellen fest." },
          { id: "D", text: "Lernen aus Erfahrung", rationale: "Dieses Prinzip betrifft das Nutzen von Erfahrungen." },
        ],
        answer: "A",
        explanation: "Toleranzen gibt es unter anderem für Zeit, Kosten, Umfang, Qualität, Nutzen, Risiko und Nachhaltigkeit.",
        reference: EXAM,
      },
      {
        id: "pmp7-d1-lessons",
        domain: "d1",
        objective: "Grundprinzipien anwenden",
        difficulty: "foundation",
        question:
          "Zu Beginn eines neuen Projekts sucht die Projektmanagerin nach Erkenntnissen aus einem ähnlichen Vorgängerprojekt, das Probleme mit einem Lieferanten hatte. Welches Grundprinzip wendet sie an?",
        options: [
          { id: "A", text: "Produktorientierung", rationale: "Dieses Prinzip betrifft die Produkte des Projekts." },
          { id: "B", text: "Steuern über Managementphasen", rationale: "Dieses Prinzip betrifft die Gliederung in Phasen." },
          { id: "C", text: "Lernen aus Erfahrung", rationale: "Richtig. Erfahrungen werden zu Beginn gesucht, während des Projekts erfasst und am Ende weitergegeben." },
          { id: "D", text: "Fortlaufende geschäftliche Rechtfertigung", rationale: "Dieses Prinzip betrifft die Wirtschaftlichkeit." },
        ],
        answer: "C",
        explanation: "Erkenntnisse werden während des gesamten Projekts erfasst, etwa in einem Erfahrungsprotokoll, und in Berichten an spätere Projekte weitergegeben.",
        reference: EXAM,
      },
      {
        id: "pmp7-d1-stages",
        domain: "d1",
        objective: "Grundprinzipien anwenden",
        difficulty: "intermediate",
        question:
          "Ein zweijähriges Bauprojekt soll so geplant werden, dass der Lenkungsausschuss in regelmäßigen Abständen bewusst über die nächste Etappe entscheiden kann. Welches Grundprinzip steht dahinter?",
        options: [
          { id: "A", text: "Steuern nach dem Ausnahmeprinzip", rationale: "Das Ausnahmeprinzip regelt Eskalationen bei Abweichungen." },
          { id: "B", text: "Anpassen an die Projektumgebung", rationale: "Anpassung betrifft die Gestaltung der Methode." },
          { id: "C", text: "Produktorientierung", rationale: "Produktorientierung betrifft die Ergebnisse, nicht die Entscheidungspunkte." },
          { id: "D", text: "Steuern über Managementphasen", rationale: "Richtig. Das Projekt wird in Phasen geplant, überwacht und gesteuert; am Phasenende wird über die Fortführung entschieden." },
        ],
        answer: "D",
        explanation: "Kurze Phasen bedeuten mehr Kontrolle, aber mehr Managementaufwand. Die Phasenlänge wird nach Risiko und Planbarkeit gewählt.",
        reference: EXAM,
      },
      {
        id: "pmp7-d1-tailor-principles",
        domain: "d1",
        objective: "Grundprinzipien anwenden",
        difficulty: "intermediate",
        question:
          "Ein Team führt ein kleines internes Projekt durch und verzichtet auf mehrere Managementprodukte. Wann wird das Projekt trotzdem noch nach der Methode geführt?",
        options: [
          { id: "A", text: "Wenn alle sieben Grundprinzipien angewendet werden", rationale: "Richtig. Die Grundprinzipien sind verbindlich; Themen, Prozesse und Managementprodukte dürfen angepasst werden." },
          { id: "B", text: "Wenn mindestens alle Managementprodukte erstellt werden", rationale: "Managementprodukte dürfen angepasst und zusammengefasst werden." },
          { id: "C", text: "Nur wenn es einen hauptberuflichen Projektmanager gibt", rationale: "Rollen können zusammengelegt werden." },
          { id: "D", text: "Nie, kleine Projekte können die Methode nicht nutzen", rationale: "Die Methode ist für Projekte jeder Größe anpassbar." },
        ],
        answer: "A",
        explanation: "Fehlt ein Grundprinzip, handelt es sich nicht mehr um ein Projekt nach der Methode, egal wie viele Dokumente erstellt werden.",
        reference: EXAM,
      },

      /* ── Menschen ──────────────────────────────────────────────────────── */
      {
        id: "pmp7-d2-executive",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten zuordnen",
        difficulty: "foundation",
        question: "Wer ist im Lenkungsausschuss letztlich für das Projekt verantwortlich und Eigentümer des Business Case?",
        options: [
          { id: "A", text: "Der Projektmanager", rationale: "Der Projektmanager führt das Projekt im Tagesgeschäft, ist aber nicht Eigentümer des Business Case." },
          { id: "B", text: "Der Benutzervertreter (Senior User)", rationale: "Er vertritt die Nutzer und ihre Anforderungen sowie die Nutzenrealisierung." },
          { id: "C", text: "Der Auftraggeber (Executive)", rationale: "Richtig. Der Auftraggeber trägt die Gesamtverantwortung und ist Eigentümer des Business Case." },
          { id: "D", text: "Die Projektunterstützung", rationale: "Die Projektunterstützung übernimmt administrative Aufgaben." },
        ],
        answer: "C",
        explanation: "Der Lenkungsausschuss besteht aus Auftraggeber, Benutzervertreter und Lieferantenvertreter. Entscheidungen trifft letztlich der Auftraggeber.",
        reference: EXAM,
      },
      {
        id: "pmp7-d2-senior-supplier",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten zuordnen",
        difficulty: "intermediate",
        question:
          "Im Projekt soll ein externer Softwaredienstleister die Lösung entwickeln. Welche Rolle im Lenkungsausschuss vertritt die Interessen derjenigen, die die Produkte entwerfen und erstellen?",
        options: [
          { id: "A", text: "Der Lieferantenvertreter (Senior Supplier)", rationale: "Richtig. Er stellt Ressourcen und Fachwissen bereit und verantwortet die technische Machbarkeit." },
          { id: "B", text: "Der Benutzervertreter (Senior User)", rationale: "Er vertritt die Nutzer, nicht die Lieferanten." },
          { id: "C", text: "Der Teammanager", rationale: "Er führt ein Team, ist aber nicht Mitglied des Lenkungsausschusses." },
          { id: "D", text: "Die Änderungsinstanz", rationale: "Sie entscheidet über Änderungen im delegierten Rahmen." },
        ],
        answer: "A",
        explanation: "Der Lieferantenvertreter kann aus der eigenen Organisation oder von externen Lieferanten kommen; bei mehreren Lieferanten kann es mehrere geben.",
        reference: EXAM,
      },
      {
        id: "pmp7-d2-assurance",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten zuordnen",
        difficulty: "intermediate",
        question:
          "Der Auftraggeber möchte unabhängig vom Projektmanager prüfen lassen, ob das Projekt aus geschäftlicher Sicht richtig läuft. Wem überträgt er diese Aufgabe?",
        options: [
          { id: "A", text: "Der Projektunterstützung", rationale: "Die Projektunterstützung arbeitet dem Projektmanager zu und ist nicht unabhängig von ihm." },
          { id: "B", text: "Dem Teammanager", rationale: "Der Teammanager berichtet an den Projektmanager." },
          { id: "C", text: "Dem Projektmanager selbst", rationale: "Eine Selbstprüfung ist keine unabhängige Sicherung." },
          { id: "D", text: "Der Projektsicherung (Project Assurance)", rationale: "Richtig. Die Projektsicherung prüft im Auftrag des Lenkungsausschusses unabhängig vom Projektmanager." },
        ],
        answer: "D",
        explanation: "Projektsicherung und Projektunterstützung dürfen nicht von derselben Person wahrgenommen werden, weil sonst die Unabhängigkeit fehlt.",
        reference: EXAM,
      },
      {
        id: "pmp7-d2-change-authority",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten zuordnen",
        difficulty: "intermediate",
        question:
          "Der Lenkungsausschuss erhält zu viele kleine Änderungsanträge und möchte entlastet werden. Was kann er tun?",
        options: [
          { id: "A", text: "Änderungsanträge grundsätzlich ablehnen", rationale: "Sinnvolle Änderungen würden dann verhindert." },
          { id: "B", text: "Eine Änderungsinstanz (Change Authority) einsetzen und ihr ein Änderungsbudget mit klaren Grenzen übertragen", rationale: "Richtig. So werden kleinere Änderungen im delegierten Rahmen entschieden." },
          { id: "C", text: "Den Teammanagern alle Entscheidungen überlassen", rationale: "Teammanager haben keine Befugnis über den Projektumfang." },
          { id: "D", text: "Die Änderungen ohne Bewertung umsetzen lassen", rationale: "Jede Änderung muss bewertet werden." },
        ],
        answer: "B",
        explanation: "Größere Änderungen außerhalb der delegierten Befugnis gehen weiterhin an den Lenkungsausschuss.",
        reference: EXAM,
      },
      {
        id: "pmp7-d2-people",
        domain: "d2",
        objective: "Personalführung und Zusammenarbeit",
        difficulty: "intermediate",
        question:
          "In einem Projekt arbeiten Mitarbeitende aus drei Abteilungen und einem externen Dienstleister zusammen. Es kommt immer wieder zu Konflikten über Zuständigkeiten. Was ist im Sinne der 7. Auflage der beste erste Schritt?",
        options: [
          { id: "A", text: "Die Konflikte ignorieren, solange Termine gehalten werden", rationale: "Ungelöste Konflikte gefährden Zusammenarbeit und Ergebnisse." },
          { id: "B", text: "Den Dienstleister sofort austauschen", rationale: "Das ist unverhältnismäßig und löst die Ursache nicht." },
          { id: "C", text: "Rollen und Verantwortlichkeiten klären und gemeinsam vereinbaren, wie das Team zusammenarbeitet", rationale: "Richtig. Die 7. Auflage betont Personalführung, Zusammenarbeit und klare Beziehungen zwischen den Beteiligten." },
          { id: "D", text: "Alle Entscheidungen an den Auftraggeber delegieren", rationale: "Das überlastet den Auftraggeber und klärt die Zusammenarbeit nicht." },
        ],
        answer: "C",
        explanation: "Die 7. Auflage stellt Menschen stärker in den Mittelpunkt: Führung, Teamkultur, Zusammenarbeit über Organisationsgrenzen und Umgang mit Veränderung.",
        reference: EXAM,
      },
      {
        id: "pmp7-d2-communication",
        domain: "d2",
        objective: "Wirksame Kommunikation",
        difficulty: "intermediate",
        question:
          "Wichtige Stakeholder in einem Werk fühlen sich über das Projekt schlecht informiert und lehnen die Änderungen zunehmend ab. Was sollte der Projektmanager prüfen und anpassen?",
        options: [
          { id: "A", text: "Den Kommunikationsmanagementansatz: wer welche Informationen wann, wie und von wem erhält", rationale: "Richtig. Er legt die Kommunikation mit den Stakeholdern fest und muss bei Bedarf angepasst werden." },
          { id: "B", text: "Den Qualitätsmanagementansatz", rationale: "Er regelt Qualitätsanforderungen und Prüfungen, nicht die Kommunikation." },
          { id: "C", text: "Die Produktbeschreibung des Projektendprodukts", rationale: "Sie beschreibt das Endprodukt, nicht die Kommunikation." },
          { id: "D", text: "Das Arbeitspaket eines Teams", rationale: "Arbeitspakete steuern die Arbeit der Teams." },
        ],
        answer: "A",
        explanation: "Kommunikation sollte auf die Bedürfnisse der Stakeholder abgestimmt sein. Eine Stakeholderanalyse hilft, die richtigen Kanäle und Botschaften zu wählen.",
        reference: EXAM,
      },

      /* ── Themen ────────────────────────────────────────────────────────── */
      {
        id: "pmp7-d3-business-case",
        domain: "d3",
        objective: "Thema Business Case anwenden",
        difficulty: "intermediate",
        question: "Wann wird der Business Case im Projekt überprüft und aktualisiert?",
        options: [
          { id: "A", text: "Nur einmal zu Beginn des Projekts", rationale: "Der Business Case muss laufend gültig bleiben." },
          { id: "B", text: "Nur nach Projektende", rationale: "Dann ist es für Steuerungsentscheidungen zu spät." },
          { id: "C", text: "Ausschließlich bei Änderungen am Budget", rationale: "Auch Nutzen, Risiken oder Termine können ihn beeinflussen." },
          { id: "D", text: "Er wird in der Initiierung ausgearbeitet und insbesondere an Phasenübergängen sowie bei Ausnahmen überprüft und aktualisiert", rationale: "Richtig. So bleibt die Entscheidungsgrundlage aktuell." },
        ],
        answer: "D",
        explanation: "Ein erster Entwurf entsteht oft schon vor der Initiierung. Die Nutzen werden zum Teil erst nach Projektende realisiert und gemessen.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-quality",
        domain: "d3",
        objective: "Thema Qualität anwenden",
        difficulty: "intermediate",
        question:
          "Eine Teammanagerin meldet, dass ein Produkt fertig ist. Wo kann der Projektmanager nachvollziehen, welche Qualitätsprüfungen geplant und durchgeführt wurden und mit welchem Ergebnis?",
        options: [
          { id: "A", text: "Im Risikoregister", rationale: "Dort werden Risiken erfasst, keine Qualitätsprüfungen." },
          { id: "B", text: "Im Qualitätsregister", rationale: "Richtig. Es dokumentiert geplante und durchgeführte Qualitätsaktivitäten und ihre Ergebnisse." },
          { id: "C", text: "Im Tagebuch des Auftraggebers", rationale: "Ein solches Managementprodukt gibt es nicht." },
          { id: "D", text: "Im Business Case", rationale: "Der Business Case begründet das Projekt, er dokumentiert keine Prüfungen." },
        ],
        answer: "B",
        explanation: "Qualitätsplanung legt Anforderungen und Prüfmethoden fest, Qualitätssteuerung führt die Prüfungen durch und dokumentiert sie. Grundlage sind die Produktbeschreibungen.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-risk-response",
        domain: "d3",
        objective: "Thema Risiko anwenden",
        difficulty: "intermediate",
        question:
          "Es besteht die Gefahr, dass ein Lieferant ein wichtiges Bauteil zu spät liefert. Das Projektteam bestellt vorsorglich bei einem zweiten Lieferanten einen kleinen Vorrat. Welche Risikomaßnahme ist das?",
        options: [
          { id: "A", text: "Akzeptieren", rationale: "Beim Akzeptieren wird bewusst nichts unternommen." },
          { id: "B", text: "Vermeiden", rationale: "Vermeiden würde die Bedrohung ganz ausschließen, etwa durch Verzicht auf das Bauteil." },
          { id: "C", text: "Reduzieren", rationale: "Richtig. Die Maßnahme verringert die Auswirkung der Bedrohung, falls sie eintritt." },
          { id: "D", text: "Ausnutzen", rationale: "Ausnutzen ist eine Maßnahme für Chancen, nicht für Bedrohungen." },
        ],
        answer: "C",
        explanation: "Maßnahmen für Bedrohungen sind etwa Vermeiden, Reduzieren, Rückfallplan, Übertragen, Teilen und Akzeptieren; für Chancen etwa Ausnutzen, Verstärken, Teilen und Ablehnen.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-issue-types",
        domain: "d3",
        objective: "Thema Offene Punkte (Issues) anwenden",
        difficulty: "intermediate",
        question:
          "Bei einer Qualitätsprüfung zeigt sich, dass ein geliefertes Modul eine vereinbarte Anforderung nicht erfüllt. Wie wird dieser offene Punkt eingeordnet?",
        options: [
          { id: "A", text: "Als Spezifikationsabweichung (Off-Specification)", rationale: "Richtig. Ein Produkt erfüllt seine Spezifikation nicht oder wird sie voraussichtlich nicht erfüllen." },
          { id: "B", text: "Als Änderungsantrag", rationale: "Ein Änderungsantrag will die vereinbarte Spezifikation ändern." },
          { id: "C", text: "Als Chance", rationale: "Eine Chance ist ein unsicheres Ereignis mit positiver Wirkung." },
          { id: "D", text: "Als Erfahrung", rationale: "Erfahrungen werden zwar festgehalten, die Abweichung ist aber ein offener Punkt." },
        ],
        answer: "A",
        explanation: "Offene Punkte werden eingeteilt in Änderungsanträge, Spezifikationsabweichungen sowie Probleme und Bedenken.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-change-control",
        domain: "d3",
        objective: "Thema Offene Punkte (Issues) anwenden",
        difficulty: "intermediate",
        question:
          "Ein Fachbereich möchte eine zusätzliche Berichtsfunktion, die nicht in der vereinbarten Produktbeschreibung steht. Welcher Ablauf ist richtig?",
        options: [
          { id: "A", text: "Das Team baut die Funktion sofort ein, weil der Fachbereich sie wünscht", rationale: "Ohne Bewertung und Entscheidung entsteht unkontrollierte Ausweitung des Umfangs." },
          { id: "B", text: "Der Wunsch wird ignoriert", rationale: "Änderungswünsche müssen erfasst und bewertet werden." },
          { id: "C", text: "Der Teammanager entscheidet allein", rationale: "Er hat keine Befugnis, den vereinbarten Umfang zu ändern." },
          { id: "D", text: "Der Änderungsantrag wird erfasst, auf Auswirkungen auf Business Case, Pläne und Risiken bewertet und von der zuständigen Instanz entschieden", rationale: "Richtig. So bleibt der Umfang unter Kontrolle." },
        ],
        answer: "D",
        explanation: "Zuständig ist je nach Größe der Änderung die Änderungsinstanz, der Projektmanager im delegierten Rahmen oder der Lenkungsausschuss.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-tolerance-pm",
        domain: "d3",
        objective: "Thema Fortschritt anwenden",
        difficulty: "intermediate",
        question:
          "Der Projektmanager stellt fest, dass die aktuelle Phase voraussichtlich die vereinbarte Kostentoleranz überschreiten wird. Was muss er tun?",
        options: [
          { id: "A", text: "Einen Ausnahmebericht (Exception Report) an den Lenkungsausschuss senden", rationale: "Richtig. Bei voraussichtlicher Überschreitung der Phasentoleranz eskaliert der Projektmanager an den Lenkungsausschuss." },
          { id: "B", text: "Die Überschreitung abwarten und im Abschlussbericht erwähnen", rationale: "Eskaliert wird, sobald eine Überschreitung absehbar ist." },
          { id: "C", text: "Die Toleranz eigenständig erhöhen", rationale: "Toleranzen setzt die übergeordnete Ebene fest." },
          { id: "D", text: "Die Unternehmensebene direkt informieren", rationale: "Phasentoleranzen werden vom Lenkungsausschuss gesteuert." },
        ],
        answer: "A",
        explanation: "Der Lenkungsausschuss kann daraufhin etwa einen Ausnahmeplan anfordern, die Toleranz anpassen oder das Projekt vorzeitig beenden.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-reports",
        domain: "d3",
        objective: "Thema Fortschritt anwenden",
        difficulty: "foundation",
        question:
          "Der Lenkungsausschuss möchte regelmäßig über den Stand der aktuellen Phase informiert werden, ohne an Besprechungen teilzunehmen. Welches Managementprodukt dient dazu?",
        options: [
          { id: "A", text: "Der Statusbericht des Teams (Checkpoint Report)", rationale: "Er geht vom Teammanager an den Projektmanager." },
          { id: "B", text: "Der Phasenabschlussbericht", rationale: "Er wird nur am Ende einer Phase erstellt." },
          { id: "C", text: "Der Projektstatusbericht (Highlight Report)", rationale: "Richtig. Der Projektmanager berichtet damit in vereinbarten Abständen an den Lenkungsausschuss." },
          { id: "D", text: "Das Erfahrungsprotokoll", rationale: "Es sammelt Erfahrungen, keinen regelmäßigen Status." },
        ],
        answer: "C",
        explanation: "Häufigkeit und Inhalt der Berichte werden in der Projektinitiierungsdokumentation festgelegt und können angepasst werden.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-plans",
        domain: "d3",
        objective: "Thema Pläne anwenden",
        difficulty: "intermediate",
        question: "Womit beginnt die produktorientierte Planung?",
        options: [
          { id: "A", text: "Mit der Festlegung der Urlaubszeiten des Teams", rationale: "Ressourcenverfügbarkeit kommt später in der Planung." },
          { id: "B", text: "Mit der Beschreibung des Projektendprodukts und der Zerlegung in Teilprodukte", rationale: "Richtig. Erst werden die Produkte definiert, dann Aktivitäten, Abhängigkeiten und Termine abgeleitet." },
          { id: "C", text: "Mit dem Kauf eines Planungswerkzeugs", rationale: "Werkzeuge unterstützen, sind aber kein Planungsschritt." },
          { id: "D", text: "Mit der Festlegung der Phasentoleranzen", rationale: "Toleranzen werden für Pläne festgelegt, sind aber nicht der Ausgangspunkt der Produktplanung." },
        ],
        answer: "B",
        explanation: "Typische Schritte sind Projektproduktbeschreibung, Produktstrukturplan, Produktbeschreibungen und Produktflussdiagramm.",
        reference: EXAM,
      },
      {
        id: "pmp7-d3-organizing",
        domain: "d3",
        objective: "Thema Organisation anwenden",
        difficulty: "intermediate",
        question: "Welche drei Interessen müssen im Lenkungsausschuss immer vertreten sein?",
        options: [
          { id: "A", text: "Geschäftliche Interessen, Nutzerinteressen und Lieferanteninteressen", rationale: "Richtig. Sie werden durch Auftraggeber, Benutzervertreter und Lieferantenvertreter vertreten." },
          { id: "B", text: "Finanzen, Personal und Marketing", rationale: "Das sind Unternehmensbereiche, nicht die drei Projektinteressen." },
          { id: "C", text: "Projektmanager, Teammanager und Projektunterstützung", rationale: "Diese Rollen gehören zur Managementebene und Lieferebene, nicht zum Lenkungsausschuss." },
          { id: "D", text: "Kunde, Lieferant und Wettbewerber", rationale: "Wettbewerber sind keine Projektbeteiligten." },
        ],
        answer: "A",
        explanation: "Ein Projekt ist nur erfolgreich, wenn es geschäftlich sinnvoll ist, die Nutzerbedürfnisse erfüllt und von den Lieferanten realistisch umgesetzt werden kann.",
        reference: EXAM,
      },

      {
        id: "pmp7-d3-risk-approach",
        domain: "d3",
        objective: "Thema Risiko anwenden",
        difficulty: "intermediate",
        question:
          "Der Lenkungsausschuss will wissen, wie im Projekt mit Risiken umgegangen wird: welche Verfahren gelten, wer welche Rolle hat, wie Risiken bewertet werden und wann berichtet wird. Wo ist das festgelegt?",
        options: [
          { id: "A", text: "Im Risikoregister", rationale: "Das Register erfasst die einzelnen Risiken, nicht das Vorgehen." },
          { id: "B", text: "Im Projektstatusbericht", rationale: "Er berichtet über den Stand, legt aber kein Vorgehen fest." },
          { id: "C", text: "In der Projektproduktbeschreibung", rationale: "Sie beschreibt das Endprodukt des Projekts." },
          { id: "D", text: "Im Risikomanagementansatz", rationale: "Richtig. Er beschreibt Verfahren, Rollen, Bewertungsskalen, Risikobereitschaft und Berichtswege für das Projekt." },
        ],
        answer: "D",
        explanation: "Der Risikomanagementansatz wird in der Initiierung erstellt und richtet sich nach der Risikobereitschaft der Organisation.",
        reference: EXAM,
      },

      /* ── Prozesse ──────────────────────────────────────────────────────── */
      {
        id: "pmp7-d4-starting-up",
        domain: "d4",
        objective: "Prozesse anwenden",
        difficulty: "intermediate",
        question:
          "Das Projektmandat liegt vor. Bevor Zeit und Geld in eine detaillierte Planung fließen, soll geklärt werden, ob das Projekt lohnend und machbar ist, und das Projektmanagementteam soll benannt werden. In welchem Prozess geschieht das?",
        options: [
          { id: "A", text: "Initiieren eines Projekts", rationale: "Die Initiierung erstellt die detaillierte Projektgrundlage, nachdem der Lenkungsausschuss sie genehmigt hat." },
          { id: "B", text: "Steuern einer Phase", rationale: "Dieser Prozess läuft während der Lieferphasen." },
          { id: "C", text: "Managen eines Phasenübergangs", rationale: "Dieser Prozess bereitet den Übergang zur nächsten Phase vor." },
          { id: "D", text: "Vorbereiten eines Projekts", rationale: "Richtig. Hier wird geprüft, ob das Projekt lohnend und machbar ist, und das Team benannt." },
        ],
        answer: "D",
        explanation: "Ergebnis ist unter anderem die Projektbeschreibung und der Plan für die Initiierungsphase, über die der Lenkungsausschuss entscheidet.",
        reference: EXAM,
      },
      {
        id: "pmp7-d4-directing",
        domain: "d4",
        objective: "Prozesse anwenden",
        difficulty: "foundation",
        question: "In welchem Prozess trifft der Lenkungsausschuss seine Entscheidungen über das gesamte Projekt?",
        options: [
          { id: "A", text: "Managen der Produktlieferung", rationale: "Dieser Prozess betrifft die Arbeit der Teammanager." },
          { id: "B", text: "Lenken eines Projekts", rationale: "Richtig. Er läuft vom Ende der Vorbereitung bis zum Projektabschluss." },
          { id: "C", text: "Steuern einer Phase", rationale: "Dieser Prozess ist Aufgabe des Projektmanagers." },
          { id: "D", text: "Abschließen eines Projekts", rationale: "Hier bereitet der Projektmanager den Abschluss vor; entschieden wird im Lenkungsprozess." },
        ],
        answer: "B",
        explanation: "Der Lenkungsausschuss autorisiert Initiierung, Projekt, Phasen und Abschluss und gibt laufend Ad-hoc-Weisungen.",
        reference: EXAM,
      },
      {
        id: "pmp7-d4-work-package",
        domain: "d4",
        objective: "Prozesse anwenden",
        difficulty: "intermediate",
        question:
          "Ein Teammanager stellt fest, dass sein Arbeitspaket die vereinbarte Zeittoleranz voraussichtlich überschreiten wird. Was tut er?",
        options: [
          { id: "A", text: "Er sendet einen Ausnahmebericht direkt an den Lenkungsausschuss", rationale: "Teammanager eskalieren an den Projektmanager, nicht an den Lenkungsausschuss." },
          { id: "B", text: "Er verlängert eigenmächtig die Frist", rationale: "Er hat keine Befugnis, die Toleranz zu ändern." },
          { id: "C", text: "Er meldet die drohende Überschreitung als offenen Punkt an den Projektmanager", rationale: "Richtig. Der Projektmanager bewertet die Lage im Prozess „Steuern einer Phase“." },
          { id: "D", text: "Er bricht das Arbeitspaket ab", rationale: "Das ist nicht seine Entscheidung." },
        ],
        answer: "C",
        explanation: "Bleibt die Überschreitung innerhalb der Phasentoleranz, kann der Projektmanager selbst Maßnahmen ergreifen; sonst eskaliert er an den Lenkungsausschuss.",
        reference: EXAM,
      },
      {
        id: "pmp7-d4-stage-boundary",
        domain: "d4",
        objective: "Prozesse anwenden",
        difficulty: "intermediate",
        question:
          "Die aktuelle Phase nähert sich dem Ende. Was erstellt der Projektmanager im Prozess „Managen eines Phasenübergangs“ für die Entscheidung des Lenkungsausschusses?",
        options: [
          { id: "A", text: "Einen Phasenabschlussbericht und den Phasenplan für die nächste Phase sowie aktualisierte Projektplan- und Business-Case-Informationen", rationale: "Richtig. Damit kann der Lenkungsausschuss über die Fortführung entscheiden." },
          { id: "B", text: "Nur eine Rechnung für die abgeschlossene Phase", rationale: "Das reicht als Entscheidungsgrundlage nicht." },
          { id: "C", text: "Den Projektabschlussbericht", rationale: "Er wird erst beim Abschluss des Projekts erstellt." },
          { id: "D", text: "Neue Arbeitspakete für die Teams", rationale: "Arbeitspakete werden erst nach Freigabe der Phase im Prozess „Steuern einer Phase“ vergeben." },
        ],
        answer: "A",
        explanation: "Bei einer Ausnahme wird in diesem Prozess statt des nächsten Phasenplans ein Ausnahmeplan erstellt.",
        reference: EXAM,
      },
      {
        id: "pmp7-d4-closing",
        domain: "d4",
        objective: "Prozesse anwenden",
        difficulty: "intermediate",
        question:
          "Der Lenkungsausschuss beschließt wegen geänderter Marktbedingungen, das Projekt vorzeitig zu beenden. Was gilt für den Prozess „Abschließen eines Projekts“?",
        options: [
          { id: "A", text: "Er entfällt bei vorzeitiger Beendigung", rationale: "Auch ein vorzeitig beendetes Projekt wird geordnet abgeschlossen." },
          { id: "B", text: "Er wird erst nach Ablauf der ursprünglich geplanten Laufzeit durchgeführt", rationale: "Der Abschluss erfolgt nach der Entscheidung, nicht nach dem ursprünglichen Termin." },
          { id: "C", text: "Er wird geordnet durchgeführt: Ergebnisse sichern, offene Punkte übergeben, Erfahrungen festhalten und den Abschluss empfehlen", rationale: "Richtig. Auch bei vorzeitiger Beendigung soll so viel Wert wie möglich gesichert werden." },
          { id: "D", text: "Er wird allein von den Teammanagern durchgeführt", rationale: "Den Abschluss bereitet der Projektmanager vor." },
        ],
        answer: "C",
        explanation: "Bei vorzeitiger Beendigung ist besonders wichtig, bereits erstellte Produkte nutzbar zu machen und die Gründe zu dokumentieren.",
        reference: EXAM,
      },

      /* ── Anpassung ─────────────────────────────────────────────────────── */
      {
        id: "pmp7-d5-agile",
        domain: "d5",
        objective: "Methode an Projektgröße, Kontext und Komplexität anpassen",
        difficulty: "intermediate",
        question:
          "Ein Softwareprojekt soll mit agilen Teams in zweiwöchigen Sprints arbeiten. Wie passt man die Methode am sinnvollsten an?",
        options: [
          { id: "A", text: "Die Methode gar nicht nutzen, weil sie nicht agil ist", rationale: "Die Methode lässt sich mit agilen Arbeitsweisen kombinieren." },
          { id: "B", text: "Die Teams arbeiten agil im Rahmen von Arbeitspaketen; Lenkungsausschuss, Phasen und Toleranzen steuern das Projekt, wobei etwa Umfang flexibel und Zeit fest sein kann", rationale: "Richtig. Die Lieferung erfolgt agil, die Projektsteuerung bleibt erhalten." },
          { id: "C", text: "Alle Sprints müssen einzeln vom Lenkungsausschuss genehmigt werden", rationale: "Das wäre übermäßige Kontrolle und widerspricht dem Ausnahmeprinzip." },
          { id: "D", text: "Auf alle Rollen verzichten", rationale: "Rollen werden angepasst, nicht abgeschafft." },
        ],
        answer: "B",
        explanation: "Anpassung betrifft Themen, Prozesse, Rollen und Managementprodukte. Die Grundprinzipien bleiben immer bestehen.",
        reference: EXAM,
      },
      {
        id: "pmp7-d5-small-project",
        domain: "d5",
        objective: "Methode an Projektgröße, Kontext und Komplexität anpassen",
        difficulty: "intermediate",
        question:
          "Für ein kleines Projekt mit drei Beteiligten soll die Methode angepasst werden. Welche Anpassung ist zulässig?",
        options: [
          { id: "A", text: "Rollen zusammenlegen, etwa Auftraggeber und Benutzervertreter durch eine Person, und Managementprodukte kombinieren", rationale: "Richtig. Rollen und Produkte dürfen kombiniert werden, solange die Verantwortlichkeiten klar bleiben." },
          { id: "B", text: "Auf den Business Case verzichten, weil das Projekt klein ist", rationale: "Die fortlaufende geschäftliche Rechtfertigung ist ein Grundprinzip." },
          { id: "C", text: "Projektmanager und Projektsicherung durch dieselbe Person besetzen", rationale: "Projektsicherung muss unabhängig vom Projektmanager sein." },
          { id: "D", text: "Toleranzen abschaffen", rationale: "Ohne Toleranzen gibt es kein Steuern nach dem Ausnahmeprinzip." },
        ],
        answer: "A",
        explanation: "Bei der Kombination von Rollen ist auf Interessenkonflikte zu achten. Einige Kombinationen sind nicht zulässig.",
        reference: EXAM,
      },
      {
        id: "pmp7-d5-sustainability",
        domain: "d5",
        objective: "Nachhaltigkeit und ESG berücksichtigen",
        difficulty: "intermediate",
        question:
          "Das Unternehmen hat verbindliche Klimaziele. Das Projekt soll den CO₂-Ausstoß bei der Produktion begrenzen. Wie wird das in der 7. Auflage am besten gesteuert?",
        options: [
          { id: "A", text: "Gar nicht, Nachhaltigkeit ist kein Projektthema", rationale: "Die 7. Auflage nimmt Nachhaltigkeit ausdrücklich auf." },
          { id: "B", text: "Nur im Abschlussbericht erwähnen", rationale: "Dann lässt sich während des Projekts nicht steuern." },
          { id: "C", text: "Den Teams überlassen, ohne Vorgaben", rationale: "Ohne Ziele und Toleranzen fehlt die Steuerung." },
          { id: "D", text: "Nachhaltigkeitsziele festlegen, mit Toleranzen versehen und den Fortschritt wie Zeit und Kosten überwachen und berichten", rationale: "Richtig. Nachhaltigkeit ist ein eigener Toleranzbereich und wird wie andere Ziele gesteuert." },
        ],
        answer: "D",
        explanation: "Nachhaltigkeit und ESG beeinflussen Business Case, Qualitätsanforderungen und Beschaffung und sollten in den Managementansätzen berücksichtigt werden.",
        reference: EXAM,
      },
      {
        id: "pmp7-d5-digital-data",
        domain: "d5",
        objective: "Digitales und Datenmanagement",
        difficulty: "intermediate",
        question:
          "Ein Projekt verarbeitet personenbezogene Kundendaten und nutzt mehrere digitale Werkzeuge zur Zusammenarbeit. Was sollte in der Initiierung festgelegt werden?",
        options: [
          { id: "A", text: "Nichts, Datenschutz ist ausschließlich Sache der IT", rationale: "Das Projekt trägt Verantwortung für die Daten, die es verarbeitet." },
          { id: "B", text: "Ein Ansatz für digitales und Datenmanagement, der etwa Datenschutz, Datenqualität, Zugriffe und Werkzeuge regelt", rationale: "Richtig. Die 7. Auflage behandelt digitales und Datenmanagement als eigenes Thema der Projektsteuerung." },
          { id: "C", text: "Nur die Farbe der Projektvorlagen", rationale: "Das ist irrelevant." },
          { id: "D", text: "Die Daten erst nach Projektende sichten", rationale: "Dann sind Risiken bereits eingetreten." },
        ],
        answer: "B",
        explanation: "Der Ansatz wird Teil der Projektinitiierungsdokumentation und kann sich auf Unternehmensrichtlinien stützen.",
        reference: EXAM,
      },
    ],
  },
};
