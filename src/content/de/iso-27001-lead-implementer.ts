import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for PECB Certified ISO/IEC 27001
 * Lead Implementer. Exam facts and weights follow the verified record in
 * src/config/certifications.ts (PECB course page, Candidate Handbook v1.5,
 * certification scheme v4.7, checked 2026-11-04). Like the real exam, each
 * question has three options. Clause numbers refer to ISO/IEC 27001:2022.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const HANDBOOK = {
  label: "PECB: Candidate Handbook ISO/IEC 27001 Lead Implementer (PDF, Englisch)",
  url: "https://pecb.com/pdf/candidate-handbooks/pecb-candidate-handbook-iso-27001-lead-implementer-mc.pdf",
};

export const iso27001LeadImplementerDe: DeContent = {
  slug: "iso-27001-lead-implementer",
  name: "PECB ISO/IEC 27001 Lead Implementer",
  languageNote:
    "Auf den geprüften PECB-Seiten sind die Prüfungssprachen nicht angegeben. Frag bei deinem Schulungsanbieter nach, ob du die Prüfung auf Deutsch ablegen kannst; die Inhalte lernst du hier auf Deutsch.",
  facts: [
    { label: "Zertifizierungsstelle", value: "PECB" },
    { label: "Fragen", value: "80 Multiple-Choice-Fragen mit je drei Antwortoptionen" },
    { label: "Dauer", value: "3 Stunden" },
    { label: "Bestehensgrenze", value: "70 %" },
    {
      label: "Fragetypen",
      value: "Einzelfragen und szenariobasierte Fragen (fünf Fragen pro Szenario)",
    },
    {
      label: "Hilfsmittel",
      value: "Open Book: gedruckte ISO/IEC 27001, Schulungsunterlagen und eigene Notizen sind erlaubt",
    },
    {
      label: "Durchführung",
      value: "Online über die PECB-Exams-Anwendung mit Fernaufsicht oder auf Papier bei einer Sitzung mit PECB-zugelassener Aufsicht",
    },
    {
      label: "Voraussetzungen für den Titel",
      value:
        "Für die Prüfung keine. Für den Titel Lead Implementer: 5 Jahre Berufserfahrung (davon 2 im Informationssicherheitsmanagement), 300 Stunden ISMS-Projekttätigkeit und Unterzeichnung des PECB-Ethikkodex",
    },
    { label: "Norm", value: "ISO/IEC 27001:2022" },
  ],
  domains: [
    { id: "d1", name: "Grundprinzipien und Konzepte eines Informationssicherheits-Managementsystems", weight: "18,75 %" },
    { id: "d2", name: "Anforderungen an ein Informationssicherheits-Managementsystem", weight: "15 %" },
    { id: "d3", name: "Planung einer ISMS-Implementierung nach ISO/IEC 27001", weight: "22,5 %" },
    { id: "d4", name: "Implementierung eines ISMS nach ISO/IEC 27001", weight: "17,5 %" },
    { id: "d5", name: "Überwachung und Messung eines ISMS nach ISO/IEC 27001", weight: "12,5 %" },
    { id: "d6", name: "Fortlaufende Verbesserung eines ISMS nach ISO/IEC 27001", weight: "7,5 %" },
    { id: "d7", name: "Vorbereitung auf ein ISMS-Zertifizierungsaudit", weight: "6,25 %" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "iso-27001-lead-implementer",
    summary:
      "Die PECB-Prüfung zum ISO/IEC 27001 Lead Implementer hat 80 Multiple-Choice-Fragen mit je drei Antwortoptionen, dauert 3 Stunden und ist ein Open-Book-Test: Die gedruckte Norm, Schulungsunterlagen und eigene Notizen sind erlaubt. Bestanden ist ab 70 %. Am stärksten gewichtet sind die Planung einer ISMS-Implementierung (22,5 %) und die Grundprinzipien eines ISMS (18,75 %).",
    whoFor: [
      "Informationssicherheitsbeauftragte und ISMS-Verantwortliche, die ein ISMS nach ISO/IEC 27001 aufbauen",
      "Berater und Projektleiter, die Unternehmen zur ISO-27001-Zertifizierung führen",
      "IT-Leiter und Compliance-Verantwortliche, etwa im Umfeld von NIS2 oder TISAX",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst 80 Multiple-Choice-Fragen mit jeweils drei Antwortoptionen, darunter Einzelfragen und Szenarien mit je fünf Fragen. Du hast 3 Stunden Zeit und bestehst mit 70 %. Die Prüfung ist Open Book: Du darfst eine gedruckte Fassung der ISO/IEC 27001, die Schulungsunterlagen und eigene Notizen verwenden. Die Herausforderung liegt also weniger im Auswendiglernen als im sicheren Anwenden der Norm auf Szenarien.",
          "Du legst die Prüfung online über die PECB-Exams-Anwendung mit Fernaufsicht ab oder auf Papier bei einer Sitzung mit PECB-zugelassener Aufsicht. Die Prüfung selbst hat keine Voraussetzungen. Für den Titel Lead Implementer verlangt PECB zusätzlich fünf Jahre Berufserfahrung, davon zwei im Informationssicherheitsmanagement, 300 Stunden ISMS-Projekttätigkeit und die Unterzeichnung des Ethikkodex. Mit weniger Erfahrung erhältst du zunächst den Titel Provisional Implementer oder Implementer.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Die Planung (22,5 %) ist der größte Bereich: Kontext der Organisation, interessierte Parteien, Anwendungsbereich, Führung und Informationssicherheitspolitik, Risikobeurteilung und Risikobehandlung, Erklärung zur Anwendbarkeit (SoA) und Informationssicherheitsziele. Dazu kommen die Grundprinzipien (18,75 %) mit Begriffen wie Informationssicherheit, Risiko, Kontrolle und dem Aufbau der Normenfamilie ISO/IEC 27000 sowie die Anforderungen der Norm (15 %), also die Abschnitte 4 bis 10 und Anhang A.",
          "Implementierung (17,5 %) umfasst dokumentierte Information, Kompetenz und Bewusstsein, Kommunikation, die Umsetzung der Maßnahmen aus Anhang A und den Umgang mit Vorfällen. Überwachung und Messung (12,5 %) behandelt Kennzahlen, interne Audits und die Managementbewertung. Kleinere Bereiche sind die fortlaufende Verbesserung (7,5 %) mit Nichtkonformitäten und Korrekturmaßnahmen sowie die Vorbereitung auf das Zertifizierungsaudit (6,25 %) mit Stufe 1 und Stufe 2.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Die Norm beschaffen und markieren",
            body: "Besorge eine gedruckte ISO/IEC 27001:2022 und markiere die Abschnitte 4 bis 10 sowie die vier Themen des Anhangs A. Weil die Prüfung Open Book ist, sparst du mit gut gekennzeichneten Seiten viel Zeit.",
          },
          {
            title: "Den PDCA-Zyklus verinnerlichen",
            body: "Ordne jeden Normabschnitt dem Plan-Do-Check-Act-Zyklus zu: Abschnitte 4 bis 7 planen, 8 setzt um, 9 bewertet, 10 verbessert. Diese Struktur hilft bei vielen Szenariofragen.",
          },
          {
            title: "Risikobeurteilung durchspielen",
            body: "Führe für ein Beispielunternehmen eine Risikobeurteilung durch: Risiken identifizieren, analysieren, bewerten, Behandlungsoptionen wählen, Maßnahmen aus Anhang A zuordnen und eine Erklärung zur Anwendbarkeit erstellen.",
          },
          {
            title: "Eine eigene Übersicht anlegen",
            body: "Erstelle eine kompakte Übersicht der Pflichtdokumente, der wichtigsten Begriffe und der Unterschiede zwischen interner Auditierung, Managementbewertung und Zertifizierungsaudit. Diese Notizen darfst du mitnehmen.",
          },
          {
            title: "Szenarien üben",
            body: "Bearbeite Übungsfragen mit Fallbeispielen. Achte darauf, was die Norm verlangt („muss“) und was nur empfohlen wird, und lies jede Frage genau: Mit nur drei Optionen ist die Unterscheidung oft fein.",
          },
          {
            title: "Unter Prüfungsbedingungen testen",
            body: "Bearbeite eine vollständige Übungsprüfung mit 80 Fragen in 3 Stunden, mit denselben Hilfsmitteln, die du auch in der echten Prüfung nutzen wirst.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Sich auf das Open-Book-Format verlassen. Wer in der Prüfung erst suchen muss, verliert Zeit; die Norm sollte vorher gut bekannt und markiert sein.",
          "Mit der alten Fassung von 2013 lernen. Seit ISO/IEC 27001:2022 hat Anhang A 93 Maßnahmen in vier Themen statt 114 in 14 Abschnitten.",
          "Die Erklärung zur Anwendbarkeit mit dem Risikobehandlungsplan verwechseln. Die SoA listet alle Maßnahmen mit Begründung für Aufnahme oder Ausschluss, der Plan beschreibt die Umsetzung.",
          "Korrektur und Korrekturmaßnahme gleichsetzen: Die Korrektur beseitigt die Auswirkung, die Korrekturmaßnahme beseitigt die Ursache.",
          "Die Rolle der obersten Leitung unterschätzen. Viele Anforderungen in Abschnitt 5 und 9.3 richten sich ausdrücklich an sie.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die Prüfung?",
        answer: "80 Multiple-Choice-Fragen mit je drei Antwortoptionen. Du hast 3 Stunden Zeit und bestehst mit 70 %.",
      },
      {
        question: "Darf ich die Norm in der Prüfung verwenden?",
        answer:
          "Ja. Die Prüfung ist Open Book: Eine gedruckte ISO/IEC 27001, die Schulungsunterlagen und eigene Notizen sind erlaubt.",
      },
      {
        question: "Welcher Bereich ist am wichtigsten?",
        answer:
          "Die Planung einer ISMS-Implementierung mit 22,5 %, gefolgt von den Grundprinzipien mit 18,75 % und der Implementierung mit 17,5 %.",
      },
      {
        question: "Brauche ich Berufserfahrung?",
        answer:
          "Für die Prüfung nicht. Für den Titel Lead Implementer verlangt PECB fünf Jahre Berufserfahrung, davon zwei im Informationssicherheitsmanagement, sowie 300 Stunden ISMS-Projekttätigkeit.",
      },
      {
        question: "Auf welche Fassung der Norm bezieht sich die Prüfung?",
        answer: "Auf ISO/IEC 27001:2022 mit 93 Maßnahmen in Anhang A.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den PECB-Kompetenzbereichen und der Norm erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "ISO 27001 Lead Implementer (PECB) auf Deutsch: Prüfung & Lernplan",
      description:
        "PECB ISO/IEC 27001 Lead Implementer auf Deutsch vorbereiten: 80 Fragen, 3 Stunden, Open Book, 70 % zum Bestehen, alle sieben Kompetenzbereiche mit Gewichtung.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "iso-27001-lead-implementer",
    intro:
      "30 eigene Übungsfragen zum PECB ISO/IEC 27001 Lead Implementer aus allen sieben Kompetenzbereichen, gewichtet wie in der Prüfung und wie dort mit drei Antwortoptionen. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "ISO 27001 Lead Implementer Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose Übungsfragen zum PECB ISO 27001 Lead Implementer auf Deutsch: Kontext, Risikobeurteilung, SoA, Anhang A, Audit, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Grundprinzipien ────────────────────────────────────── */
      {
        id: "li-d1-cia",
        domain: "d1",
        objective: "Kompetenzbereich 1: Grundprinzipien und Konzepte eines ISMS",
        difficulty: "foundation",
        question: "Welche drei Eigenschaften von Information soll Informationssicherheit laut ISO/IEC 27000 erhalten?",
        options: [
          { id: "A", text: "Vertraulichkeit, Integrität und Verfügbarkeit", rationale: "Richtig. Diese drei Eigenschaften bilden die Definition von Informationssicherheit." },
          { id: "B", text: "Verfügbarkeit, Wirtschaftlichkeit und Nachvollziehbarkeit", rationale: "Wirtschaftlichkeit ist kein Schutzziel der Informationssicherheit." },
          { id: "C", text: "Authentizität, Aktualität und Vollständigkeit", rationale: "Authentizität kann zusätzlich relevant sein, gehört aber nicht zu den drei Kerneigenschaften der Definition." },
        ],
        answer: "A",
        explanation:
          "ISO/IEC 27000 definiert Informationssicherheit als Erhaltung der Vertraulichkeit, Integrität und Verfügbarkeit von Information. Weitere Eigenschaften wie Authentizität oder Nichtabstreitbarkeit können hinzukommen.",
        reference: HANDBOOK,
      },
      {
        id: "li-d1-27000-family",
        domain: "d1",
        objective: "Kompetenzbereich 1: Grundprinzipien und Konzepte eines ISMS",
        difficulty: "intermediate",
        question: "Welche Norm der ISO/IEC-27000-Familie enthält die zertifizierbaren Anforderungen an ein ISMS?",
        options: [
          { id: "A", text: "ISO/IEC 27002", rationale: "ISO/IEC 27002 ist ein Leitfaden mit Hinweisen zur Umsetzung der Maßnahmen und nicht zertifizierbar." },
          { id: "B", text: "ISO/IEC 27001", rationale: "Richtig. ISO/IEC 27001 enthält die Anforderungen, gegen die eine Organisation zertifiziert werden kann." },
          { id: "C", text: "ISO/IEC 27005", rationale: "ISO/IEC 27005 gibt Leitlinien zum Informationssicherheits-Risikomanagement." },
        ],
        answer: "B",
        explanation:
          "Wichtige Normen: 27000 (Überblick und Begriffe), 27001 (Anforderungen), 27002 (Maßnahmen-Leitfaden), 27003 (Leitfaden zur ISMS-Umsetzung), 27004 (Überwachung und Messung), 27005 (Risikomanagement).",
        reference: HANDBOOK,
      },
      {
        id: "li-d1-risk-definition",
        domain: "d1",
        objective: "Kompetenzbereich 1: Grundprinzipien und Konzepte eines ISMS",
        difficulty: "intermediate",
        question: "Wie definiert die ISO/IEC-27000-Familie den Begriff Risiko?",
        options: [
          { id: "A", text: "Als jede Schwachstelle in einem IT-System", rationale: "Eine Schwachstelle ist ein Teil der Risikobetrachtung, aber nicht das Risiko selbst." },
          { id: "B", text: "Als jeden erfolgreichen Angriff", rationale: "Ein erfolgreicher Angriff ist ein Vorfall, kein Risiko." },
          { id: "C", text: "Als Auswirkung von Unsicherheit auf Ziele", rationale: "Richtig. Risiko ist die Auswirkung von Unsicherheit auf Ziele und wird oft über Folgen und Wahrscheinlichkeit beschrieben." },
        ],
        answer: "C",
        explanation:
          "Bedrohungen nutzen Schwachstellen aus und können Folgen für Werte haben. Das Risiko ergibt sich aus der Kombination von Wahrscheinlichkeit und Auswirkung.",
        reference: HANDBOOK,
      },
      {
        id: "li-d1-annex-a-themes",
        domain: "d1",
        objective: "Kompetenzbereich 1: Grundprinzipien und Konzepte eines ISMS",
        difficulty: "intermediate",
        question: "Wie ist Anhang A der ISO/IEC 27001:2022 gegliedert?",
        options: [
          { id: "A", text: "93 Maßnahmen in vier Themen: organisatorisch, personenbezogen, physisch und technologisch", rationale: "Richtig. Die Fassung 2022 fasst die Maßnahmen in diese vier Themen zusammen." },
          { id: "B", text: "114 Maßnahmen in 14 Abschnitten", rationale: "Das war die Gliederung der Fassung von 2013." },
          { id: "C", text: "50 Maßnahmen in drei Themen", rationale: "Weder Anzahl noch Gliederung entsprechen der Norm." },
        ],
        answer: "A",
        explanation:
          "Anhang A 2022: 37 organisatorische, 8 personenbezogene, 14 physische und 34 technologische Maßnahmen. Neu sind unter anderem Threat Intelligence, Cloud-Dienste und Datenmaskierung.",
        reference: HANDBOOK,
      },
      {
        id: "li-d1-control-preventive",
        domain: "d1",
        objective: "Kompetenzbereich 1: Grundprinzipien und Konzepte eines ISMS",
        difficulty: "foundation",
        question: "Eine Organisation führt eine Multi-Faktor-Authentifizierung für den Fernzugriff ein. Welche Art von Maßnahme ist das in erster Linie?",
        options: [
          { id: "A", text: "Detektiv", rationale: "Detektive Maßnahmen erkennen Vorfälle, etwa durch Protokollauswertung." },
          { id: "B", text: "Präventiv", rationale: "Richtig. MFA soll unbefugte Anmeldungen von vornherein verhindern." },
          { id: "C", text: "Korrektiv", rationale: "Korrektive Maßnahmen begrenzen oder beheben die Folgen eines bereits eingetretenen Vorfalls." },
        ],
        answer: "B",
        explanation:
          "Maßnahmen lassen sich nach ihrer Funktion einteilen: präventiv (verhindern), detektiv (erkennen), korrektiv (beheben). ISO/IEC 27002 nutzt diese Einteilung als Attribut.",
        reference: HANDBOOK,
      },
      {
        id: "li-d1-asset",
        domain: "d1",
        objective: "Kompetenzbereich 1: Grundprinzipien und Konzepte eines ISMS",
        difficulty: "foundation",
        question: "Was zählt im Sinne der Informationssicherheit zu den schützenswerten Werten (Assets) einer Organisation?",
        options: [
          { id: "A", text: "Nur Server und Netzwerkgeräte", rationale: "Hardware gehört dazu, ist aber nur ein Teil der Werte." },
          { id: "B", text: "Nur Daten in Datenbanken", rationale: "Auch Informationen auf Papier, in Köpfen oder in Anwendungen sind Werte." },
          { id: "C", text: "Informationen und alle damit verbundenen Werte, etwa Systeme, Software, Personen und Dienstleistungen", rationale: "Richtig. Werte umfassen Information in jeder Form und alles, was sie verarbeitet, speichert oder überträgt." },
        ],
        answer: "C",
        explanation:
          "Anhang A verlangt ein Inventar der Informationen und anderen zugehörigen Werte, einschließlich Eigentümern (Maßnahme 5.9).",
        reference: HANDBOOK,
      },

      /* ── Bereich 2: Anforderungen an ein ISMS ──────────────────────────── */
      {
        id: "li-d2-exclusion",
        domain: "d2",
        objective: "Kompetenzbereich 2: Anforderungen an ein ISMS",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte zertifiziert werden, aber Abschnitt 9.2 (internes Audit) weglassen, weil es „zu klein“ sei. Ist das zulässig?",
        options: [
          { id: "A", text: "Ja, kleine Organisationen dürfen beliebige Abschnitte ausschließen", rationale: "Die Abschnitte 4 bis 10 gelten für alle Organisationen unabhängig von der Größe." },
          { id: "B", text: "Ja, wenn die Begründung in der Erklärung zur Anwendbarkeit steht", rationale: "In der SoA können nur Maßnahmen aus Anhang A begründet ausgeschlossen werden, keine Anforderungen der Abschnitte 4 bis 10." },
          { id: "C", text: "Nein, die Anforderungen der Abschnitte 4 bis 10 dürfen für eine Konformität nicht ausgeschlossen werden", rationale: "Richtig. Die Norm stellt klar, dass ein Ausschluss dieser Anforderungen keine Konformität zulässt." },
        ],
        answer: "C",
        explanation:
          "Flexibel ist die Organisation beim Umfang der Umsetzung und bei der Auswahl der Maßnahmen aus Anhang A, nicht aber bei den Anforderungen der Abschnitte 4 bis 10.",
        reference: HANDBOOK,
      },
      {
        id: "li-d2-top-management",
        domain: "d2",
        objective: "Kompetenzbereich 2: Anforderungen an ein ISMS",
        difficulty: "foundation",
        question: "Wer muss laut ISO/IEC 27001 Abschnitt 5.2 die Informationssicherheitspolitik festlegen?",
        options: [
          { id: "A", text: "Die oberste Leitung", rationale: "Richtig. Die oberste Leitung legt die Informationssicherheitspolitik fest und zeigt damit ihre Führung und Verpflichtung." },
          { id: "B", text: "Der externe Zertifizierungsauditor", rationale: "Auditoren bewerten, sie legen keine Politik der Organisation fest." },
          { id: "C", text: "Jede Abteilung für sich", rationale: "Es gibt eine übergeordnete Politik; Abteilungen können ergänzende themenspezifische Richtlinien haben." },
        ],
        answer: "A",
        explanation:
          "Die Politik muss zum Zweck der Organisation passen, einen Rahmen für Ziele bieten, Verpflichtungen zur Erfüllung von Anforderungen und zur fortlaufenden Verbesserung enthalten, dokumentiert und kommuniziert sein.",
        reference: HANDBOOK,
      },
      {
        id: "li-d2-documented-info",
        domain: "d2",
        objective: "Kompetenzbereich 2: Anforderungen an ein ISMS",
        difficulty: "intermediate",
        question: "Welches der folgenden Dokumente verlangt ISO/IEC 27001 ausdrücklich als dokumentierte Information?",
        options: [
          { id: "A", text: "Ein Organigramm der gesamten Konzernstruktur", rationale: "Ein Organigramm kann hilfreich sein, wird von der Norm aber nicht ausdrücklich gefordert." },
          { id: "B", text: "Die Erklärung zur Anwendbarkeit", rationale: "Richtig. Abschnitt 6.1.3 verlangt die Erklärung zur Anwendbarkeit als dokumentierte Information." },
          { id: "C", text: "Ein Handbuch für jedes einzelne IT-System", rationale: "Systemhandbücher können sinnvoll sein, sind aber keine ausdrückliche Normforderung." },
        ],
        answer: "B",
        explanation:
          "Ausdrücklich gefordert sind unter anderem Anwendungsbereich, Politik, Prozess der Risikobeurteilung und -behandlung, SoA, Ziele, Ergebnisse von Risikobeurteilungen, Nachweise über Überwachung, Audits, Managementbewertung und Nichtkonformitäten.",
        reference: HANDBOOK,
      },
      {
        id: "li-d2-planning-changes",
        domain: "d2",
        objective: "Kompetenzbereich 2: Anforderungen an ein ISMS",
        difficulty: "intermediate",
        question: "Welche Anforderung wurde mit ISO/IEC 27001:2022 als eigener Abschnitt 6.3 neu aufgenommen?",
        options: [
          { id: "A", text: "Die Bestimmung des Anwendungsbereichs", rationale: "Der Anwendungsbereich wird in Abschnitt 4.3 behandelt und ist nicht neu." },
          { id: "B", text: "Die Managementbewertung", rationale: "Die Managementbewertung steht in Abschnitt 9.3." },
          { id: "C", text: "Die Planung von Änderungen am ISMS", rationale: "Richtig. Änderungen am ISMS müssen geplant durchgeführt werden." },
        ],
        answer: "C",
        explanation:
          "Weitere Neuerungen der Fassung 2022: Prozesse und ihre Wechselwirkungen in 4.4, Überwachung von Zielen in 6.2 und Planung und Steuerung von Prozessen und extern bereitgestellten Prozessen in 8.1.",
        reference: HANDBOOK,
      },

      /* ── Bereich 3: Planung ────────────────────────────────────────────── */
      {
        id: "li-d3-context",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "intermediate",
        question:
          "Ein Projektteam beginnt mit der ISMS-Einführung. Welcher Schritt sollte vor der Festlegung des Anwendungsbereichs stehen?",
        options: [
          { id: "A", text: "Die externen und internen Themen sowie die Anforderungen interessierter Parteien bestimmen", rationale: "Richtig. Der Kontext (4.1) und die interessierten Parteien (4.2) sind Grundlage für den Anwendungsbereich (4.3)." },
          { id: "B", text: "Die Maßnahmen aus Anhang A umsetzen", rationale: "Maßnahmen werden erst nach der Risikobeurteilung ausgewählt." },
          { id: "C", text: "Das Zertifizierungsaudit beauftragen", rationale: "Das Audit steht am Ende, nicht am Anfang der Einführung." },
        ],
        answer: "A",
        explanation:
          "Abschnitt 4.3 verlangt ausdrücklich, dass bei der Festlegung des Anwendungsbereichs die Themen aus 4.1, die Anforderungen aus 4.2 sowie Schnittstellen und Abhängigkeiten berücksichtigt werden.",
        reference: HANDBOOK,
      },
      {
        id: "li-d3-risk-criteria",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "intermediate",
        question: "Was muss laut Abschnitt 6.1.2 festgelegt sein, bevor Risiken beurteilt werden?",
        options: [
          { id: "A", text: "Eine Liste aller Mitarbeiter mit Kennwörtern", rationale: "Kennwörter haben in einer Risikobeurteilung nichts zu suchen." },
          { id: "B", text: "Kriterien für die Risikoakzeptanz und für die Durchführung von Risikobeurteilungen", rationale: "Richtig. Diese Kriterien sorgen dafür, dass wiederholte Beurteilungen konsistente, gültige und vergleichbare Ergebnisse liefern." },
          { id: "C", text: "Die endgültige Erklärung zur Anwendbarkeit", rationale: "Die SoA ist ein Ergebnis der Risikobehandlung und entsteht danach." },
        ],
        answer: "B",
        explanation:
          "Der Prozess der Risikobeurteilung umfasst Risikoidentifikation, Risikoanalyse und Risikobewertung, jeweils anhand vorher festgelegter Kriterien.",
        reference: HANDBOOK,
      },
      {
        id: "li-d3-risk-owner",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "intermediate",
        question: "Wer muss laut ISO/IEC 27001 den Risikobehandlungsplan genehmigen und die verbleibenden Restrisiken akzeptieren?",
        options: [
          { id: "A", text: "Der externe Auditor", rationale: "Der Auditor prüft, entscheidet aber nicht über Risiken der Organisation." },
          { id: "B", text: "Jeder betroffene Mitarbeiter", rationale: "Die Entscheidung liegt nicht bei allen Mitarbeitenden, sondern bei den verantwortlichen Personen." },
          { id: "C", text: "Die Risikoeigentümer", rationale: "Richtig. Abschnitt 6.1.3 verlangt die Genehmigung durch die Risikoeigentümer und deren Akzeptanz der Restrisiken." },
        ],
        answer: "C",
        explanation:
          "Risikoeigentümer sind Personen mit der Verantwortung und Befugnis, ein Risiko zu steuern. Sie werden bei der Risikoidentifikation bestimmt.",
        reference: HANDBOOK,
      },
      {
        id: "li-d3-soa",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "intermediate",
        question: "Was muss die Erklärung zur Anwendbarkeit (SoA) enthalten?",
        options: [
          { id: "A", text: "Die notwendigen Maßnahmen, die Begründung für ihre Aufnahme, ob sie umgesetzt sind, und die Begründung für den Ausschluss von Maßnahmen aus Anhang A", rationale: "Richtig. Das sind die Inhalte, die Abschnitt 6.1.3 d) für die SoA verlangt." },
          { id: "B", text: "Nur die Maßnahmen, die bereits umgesetzt sind", rationale: "Die SoA enthält alle notwendigen Maßnahmen, auch geplante, und begründet Ausschlüsse." },
          { id: "C", text: "Eine Liste aller IT-Geräte mit Seriennummern", rationale: "Das ist ein Inventar, keine Erklärung zur Anwendbarkeit." },
        ],
        answer: "A",
        explanation:
          "Die SoA verbindet die Risikobehandlung mit Anhang A. Anhang A dient dabei als Abgleich, damit keine notwendige Maßnahme übersehen wird; auch eigene Maßnahmen außerhalb von Anhang A sind möglich.",
        reference: HANDBOOK,
      },
      {
        id: "li-d3-objectives",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "foundation",
        question: "Welche Eigenschaft müssen Informationssicherheitsziele nach Abschnitt 6.2 unter anderem haben?",
        options: [
          { id: "A", text: "Sie müssen geheim gehalten werden", rationale: "Die Norm verlangt im Gegenteil, dass die Ziele kommuniziert werden." },
          { id: "B", text: "Sie müssen messbar sein, sofern praktikabel, und mit der Informationssicherheitspolitik im Einklang stehen", rationale: "Richtig. Ziele müssen zur Politik passen, messbar sein (sofern praktikabel), überwacht, kommuniziert und aktualisiert werden." },
          { id: "C", text: "Sie dürfen nur einmal bei der Einführung festgelegt werden", rationale: "Ziele müssen bei Bedarf aktualisiert werden." },
        ],
        answer: "B",
        explanation:
          "Zur Planung der Ziele gehört auch, was getan wird, welche Ressourcen benötigt werden, wer verantwortlich ist, bis wann es erledigt ist und wie Ergebnisse bewertet werden.",
        reference: HANDBOOK,
      },
      {
        id: "li-d3-scope-case",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "intermediate",
        question:
          "Ein Softwarehaus will das ISMS zunächst nur auf seine Cloud-Plattform beschränken. Die Plattform nutzt aber den zentralen Kundensupport und ein externes Rechenzentrum. Was ist bei der Festlegung des Anwendungsbereichs zu beachten?",
        options: [
          { id: "A", text: "Support und Rechenzentrum spielen keine Rolle, weil sie außerhalb liegen", rationale: "Schnittstellen und Abhängigkeiten müssen berücksichtigt werden, auch wenn sie außerhalb des Anwendungsbereichs liegen." },
          { id: "B", text: "Die gesamte Organisation muss zwingend einbezogen werden", rationale: "Ein begrenzter Anwendungsbereich ist zulässig, wenn er sauber begründet und abgegrenzt ist." },
          { id: "C", text: "Schnittstellen und Abhängigkeiten zu Support und Rechenzentrum müssen bestimmt und berücksichtigt werden", rationale: "Richtig. Abschnitt 4.3 c) verlangt die Berücksichtigung von Schnittstellen und Abhängigkeiten, etwa über Vereinbarungen und Lieferantenmaßnahmen." },
        ],
        answer: "C",
        explanation:
          "Externe Dienstleister bleiben in der Verantwortung der Organisation, soweit sie Prozesse im Anwendungsbereich unterstützen. Anhang A enthält dazu Maßnahmen für Lieferantenbeziehungen und Cloud-Dienste.",
        reference: HANDBOOK,
      },
      {
        id: "li-d3-risk-treatment-option",
        domain: "d3",
        objective: "Kompetenzbereich 3: Planung einer ISMS-Implementierung",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen stellt einen veralteten Online-Dienst ein, weil seine Absicherung teurer wäre als sein Nutzen. Welche Option der Risikobehandlung wurde gewählt?",
        options: [
          { id: "A", text: "Risikovermeidung", rationale: "Richtig. Durch die Einstellung der risikobehafteten Tätigkeit wird das Risiko vermieden." },
          { id: "B", text: "Risikoteilung", rationale: "Bei der Risikoteilung wird ein Teil des Risikos auf Dritte übertragen, etwa durch Versicherung oder Outsourcing." },
          { id: "C", text: "Risikoakzeptanz", rationale: "Bei der Akzeptanz würde der Dienst bewusst ohne weitere Maßnahmen weiterbetrieben." },
        ],
        answer: "A",
        explanation:
          "Behandlungsoptionen nach ISO/IEC 27005: Risiko modifizieren (Maßnahmen umsetzen), beibehalten (akzeptieren), vermeiden oder teilen.",
        reference: HANDBOOK,
      },

      /* ── Bereich 4: Implementierung ────────────────────────────────────── */
      {
        id: "li-d4-awareness",
        domain: "d4",
        objective: "Kompetenzbereich 4: Implementierung eines ISMS",
        difficulty: "foundation",
        question: "Was müssen Personen, die unter der Aufsicht der Organisation arbeiten, laut Abschnitt 7.3 kennen?",
        options: [
          { id: "A", text: "Die Informationssicherheitspolitik, ihren Beitrag zur Wirksamkeit des ISMS und die Folgen der Nichteinhaltung", rationale: "Richtig. Genau diese drei Punkte nennt Abschnitt 7.3 zum Bewusstsein." },
          { id: "B", text: "Alle technischen Details der Firewall-Konfiguration", rationale: "Das ist Fachwissen für bestimmte Rollen, keine Bewusstseinsanforderung für alle." },
          { id: "C", text: "Die Ergebnisse aller internen Audits", rationale: "Auditergebnisse gehen an die Verantwortlichen, nicht zwingend an alle Personen." },
        ],
        answer: "A",
        explanation:
          "Abschnitt 7.2 regelt die Kompetenz bestimmter Rollen, 7.3 das Bewusstsein aller. Anhang A ergänzt dies mit der Maßnahme 6.3 zu Sensibilisierung, Ausbildung und Schulung.",
        reference: HANDBOOK,
      },
      {
        id: "li-d4-doc-control",
        domain: "d4",
        objective: "Kompetenzbereich 4: Implementierung eines ISMS",
        difficulty: "intermediate",
        question:
          "Im Intranet liegen drei verschiedene Versionen der Kennwortrichtlinie, und niemand weiß, welche gilt. Gegen welche Anforderung wird verstoßen?",
        options: [
          { id: "A", text: "Gegen die Anforderung an die Managementbewertung", rationale: "Die Managementbewertung betrifft die Bewertung des ISMS durch die oberste Leitung." },
          { id: "B", text: "Gegen die Lenkung dokumentierter Information", rationale: "Richtig. Abschnitt 7.5.3 verlangt unter anderem Versionskontrolle und dass dokumentierte Information verfügbar und geeignet ist, wo sie benötigt wird." },
          { id: "C", text: "Gegen die Anforderung an die Risikobeurteilung", rationale: "Die Risikobeurteilung ist nicht betroffen, sondern die Verwaltung der Dokumente." },
        ],
        answer: "B",
        explanation:
          "Zur Lenkung gehören Verteilung, Zugriff, Ablage, Erhalt der Lesbarkeit, Überwachung von Änderungen (Versionskontrolle), Aufbewahrung und Verfügung.",
        reference: HANDBOOK,
      },
      {
        id: "li-d4-supplier",
        domain: "d4",
        objective: "Kompetenzbereich 4: Implementierung eines ISMS",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen lagert die Lohnabrechnung an einen externen Dienstleister aus. Wie wird sichergestellt, dass die Informationssicherheit gewahrt bleibt?",
        options: [
          { id: "A", text: "Durch Vertrauen in den guten Ruf des Dienstleisters", rationale: "Vertrauen ersetzt keine vertraglich vereinbarten und überprüften Anforderungen." },
          { id: "B", text: "Durch die Übertragung der gesamten Verantwortung auf den Dienstleister", rationale: "Die Verantwortung für die Informationen bleibt bei der Organisation." },
          { id: "C", text: "Durch vertraglich vereinbarte Sicherheitsanforderungen und deren regelmäßige Überwachung", rationale: "Richtig. Anhang A verlangt Sicherheitsanforderungen in Lieferantenvereinbarungen und die Überwachung der Leistungen." },
        ],
        answer: "C",
        explanation:
          "Abschnitt 8.1 verlangt die Steuerung extern bereitgestellter Prozesse. Anhang A enthält dazu die Maßnahmen 5.19 bis 5.23 zu Lieferantenbeziehungen und Cloud-Diensten.",
        reference: HANDBOOK,
      },
      {
        id: "li-d4-incident",
        domain: "d4",
        objective: "Kompetenzbereich 4: Implementierung eines ISMS",
        difficulty: "intermediate",
        question:
          "Ein Mitarbeiter bemerkt, dass sein Notebook mit unverschlüsselten Kundendaten im Zug gestohlen wurde. Was sollte nach einem gut umgesetzten ISMS als Erstes passieren?",
        options: [
          { id: "A", text: "Er meldet das Informationssicherheitsereignis umgehend über den festgelegten Meldeweg", rationale: "Richtig. Anhang A verlangt, dass Ereignisse zeitnah über geeignete Kanäle gemeldet werden." },
          { id: "B", text: "Er wartet ab, ob das Notebook wieder auftaucht", rationale: "Abwarten verzögert die Reaktion, etwa das Sperren von Zugängen oder Meldepflichten." },
          { id: "C", text: "Er kauft privat ein Ersatzgerät und informiert niemanden", rationale: "Das verhindert jede Bewertung und Reaktion durch die Organisation." },
        ],
        answer: "A",
        explanation:
          "Der Umgang mit Vorfällen umfasst Melden, Beurteilen, Reagieren, Lernen und das Sammeln von Beweisen (Maßnahmen 5.24 bis 5.28 und 6.8). Bei personenbezogenen Daten können zusätzlich gesetzliche Meldepflichten gelten.",
        reference: HANDBOOK,
      },
      {
        id: "li-d4-communication",
        domain: "d4",
        objective: "Kompetenzbereich 4: Implementierung eines ISMS",
        difficulty: "foundation",
        question: "Was muss eine Organisation laut Abschnitt 7.4 für die interne und externe Kommunikation zum ISMS festlegen?",
        options: [
          { id: "A", text: "Nur die Uhrzeit der wöchentlichen Teambesprechung", rationale: "Die Norm verlangt deutlich mehr als einen Termin." },
          { id: "B", text: "Worüber, wann, mit wem und wie kommuniziert wird", rationale: "Richtig. Abschnitt 7.4 nennt diese Punkte für die Kommunikation zum ISMS." },
          { id: "C", text: "Dass alle Informationen öffentlich gemacht werden", rationale: "Kommunikation muss geplant sein, nicht vollständig öffentlich." },
        ],
        answer: "B",
        explanation:
          "Ein Kommunikationsplan legt Themen, Zeitpunkte, Zielgruppen und Kanäle fest, etwa für die Verbreitung der Politik oder die Berichterstattung an die Leitung.",
        reference: HANDBOOK,
      },

      /* ── Bereich 5: Überwachung und Messung ────────────────────────────── */
      {
        id: "li-d5-internal-audit",
        domain: "d5",
        objective: "Kompetenzbereich 5: Überwachung und Messung eines ISMS",
        difficulty: "intermediate",
        question: "Welche Anforderung gilt laut Abschnitt 9.2 für die Auswahl interner Auditoren?",
        options: [
          { id: "A", text: "Sie müssen extern beauftragt werden", rationale: "Interne Audits können durch eigene Mitarbeitende oder Externe durchgeführt werden." },
          { id: "B", text: "Sie müssen dem ISMS-Projektteam angehören", rationale: "Wer eigene Arbeit auditiert, gefährdet die Unparteilichkeit." },
          { id: "C", text: "Auswahl und Durchführung müssen Objektivität und Unparteilichkeit des Auditprozesses sicherstellen", rationale: "Richtig. Die Norm verlangt objektive und unparteiische Audits; Auditoren sollen ihre eigene Arbeit nicht prüfen." },
        ],
        answer: "C",
        explanation:
          "Interne Audits finden in geplanten Abständen statt und prüfen, ob das ISMS die eigenen Anforderungen und die der Norm erfüllt und wirksam umgesetzt ist. Ein Auditprogramm legt Häufigkeit, Methoden und Verantwortlichkeiten fest.",
        reference: HANDBOOK,
      },
      {
        id: "li-d5-management-review",
        domain: "d5",
        objective: "Kompetenzbereich 5: Überwachung und Messung eines ISMS",
        difficulty: "intermediate",
        question: "Was gehört zu den Eingaben der Managementbewertung nach Abschnitt 9.3?",
        options: [
          { id: "A", text: "Ergebnisse von Audits, Rückmeldungen interessierter Parteien, Ergebnisse der Risikobeurteilung und der Stand von Maßnahmen aus früheren Bewertungen", rationale: "Richtig. Diese Punkte gehören zu den in 9.3.2 genannten Eingaben." },
          { id: "B", text: "Ausschließlich die Umsatzzahlen des letzten Quartals", rationale: "Umsatzzahlen sind keine geforderte Eingabe der Managementbewertung." },
          { id: "C", text: "Nur die Liste der neu eingestellten Mitarbeitenden", rationale: "Personaländerungen können relevant sein, sind aber nicht die geforderte Eingabe." },
        ],
        answer: "A",
        explanation:
          "Ergebnisse der Managementbewertung sind Entscheidungen zu Verbesserungsmöglichkeiten und zu notwendigen Änderungen am ISMS; sie werden als dokumentierte Information aufbewahrt.",
        reference: HANDBOOK,
      },
      {
        id: "li-d5-metrics",
        domain: "d5",
        objective: "Kompetenzbereich 5: Überwachung und Messung eines ISMS",
        difficulty: "intermediate",
        question: "Was muss eine Organisation laut Abschnitt 9.1 für die Überwachung und Messung festlegen?",
        options: [
          { id: "A", text: "Nur, dass überwacht wird, nicht wie", rationale: "Die Norm verlangt konkrete Festlegungen auch zu den Methoden." },
          { id: "B", text: "Was überwacht und gemessen wird, mit welchen Methoden, wann, von wem und wann und von wem die Ergebnisse analysiert und bewertet werden", rationale: "Richtig. Diese Festlegungen verlangt Abschnitt 9.1." },
          { id: "C", text: "Dass ausschließlich externe Dienstleister messen dürfen", rationale: "Die Norm schreibt nicht vor, wer misst, sondern dass es festgelegt wird." },
        ],
        answer: "B",
        explanation:
          "Methoden müssen vergleichbare und reproduzierbare Ergebnisse liefern. ISO/IEC 27004 gibt Hinweise zur Entwicklung geeigneter Kennzahlen.",
        reference: HANDBOOK,
      },
      {
        id: "li-d5-kpi-case",
        domain: "d5",
        objective: "Kompetenzbereich 5: Überwachung und Messung eines ISMS",
        difficulty: "intermediate",
        question:
          "Ein Ziel lautet „Alle Mitarbeitenden schließen jährlich die Sicherheitsschulung ab“. Welche Kennzahl misst die Erreichung am direktesten?",
        options: [
          { id: "A", text: "Anzahl der Firewall-Regeln", rationale: "Firewall-Regeln haben keinen Bezug zum Schulungsziel." },
          { id: "B", text: "Budget der IT-Abteilung", rationale: "Das Budget sagt nichts über die abgeschlossenen Schulungen aus." },
          { id: "C", text: "Anteil der Mitarbeitenden mit abgeschlossener Schulung im laufenden Jahr", rationale: "Richtig. Diese Kennzahl misst das Ziel direkt und lässt sich regelmäßig überwachen." },
        ],
        answer: "C",
        explanation:
          "Gute Kennzahlen sind direkt mit einem Ziel verknüpft, messbar, wiederholbar und für die Entscheidungsträger aussagekräftig.",
        reference: HANDBOOK,
      },

      /* ── Bereich 6: Fortlaufende Verbesserung ──────────────────────────── */
      {
        id: "li-d6-corrective-action",
        domain: "d6",
        objective: "Kompetenzbereich 6: Fortlaufende Verbesserung eines ISMS",
        difficulty: "intermediate",
        question:
          "Bei einem internen Audit fällt auf, dass ausgeschiedene Mitarbeitende noch aktive Konten haben. Die Konten werden sofort gesperrt. Was verlangt Abschnitt 10.2 darüber hinaus?",
        options: [
          { id: "A", text: "Nichts weiter, da die Konten gesperrt sind", rationale: "Die Sperrung ist nur eine Korrektur; die Ursache bleibt bestehen." },
          { id: "B", text: "Die Ursache bewerten und Korrekturmaßnahmen ergreifen, damit die Nichtkonformität nicht erneut auftritt", rationale: "Richtig. Neben der Korrektur muss die Ursache ermittelt und beseitigt und die Wirksamkeit der Maßnahme überprüft werden." },
          { id: "C", text: "Den internen Auditor austauschen", rationale: "Der Auditor hat das Problem aufgedeckt; ein Austausch löst es nicht." },
        ],
        answer: "B",
        explanation:
          "Korrektur beseitigt die erkannte Nichtkonformität, Korrekturmaßnahme beseitigt ihre Ursache. Beides und die Ergebnisse werden dokumentiert.",
        reference: HANDBOOK,
      },
      {
        id: "li-d6-continual-improvement",
        domain: "d6",
        objective: "Kompetenzbereich 6: Fortlaufende Verbesserung eines ISMS",
        difficulty: "foundation",
        question: "Was verlangt ISO/IEC 27001 in Abschnitt 10.1 zur fortlaufenden Verbesserung?",
        options: [
          { id: "A", text: "Die Eignung, Angemessenheit und Wirksamkeit des ISMS fortlaufend zu verbessern", rationale: "Richtig. Das ist die Anforderung des Abschnitts 10.1." },
          { id: "B", text: "Das ISMS jedes Jahr vollständig neu aufzubauen", rationale: "Verbesserung heißt schrittweise Weiterentwicklung, nicht jährlicher Neuaufbau." },
          { id: "C", text: "Verbesserungen nur nach einem Sicherheitsvorfall vorzunehmen", rationale: "Verbesserung ist fortlaufend, nicht nur reaktiv." },
        ],
        answer: "A",
        explanation:
          "Quellen für Verbesserungen sind unter anderem Audits, Managementbewertungen, Kennzahlen, Vorfälle und Rückmeldungen interessierter Parteien.",
        reference: HANDBOOK,
      },

      /* ── Bereich 7: Vorbereitung auf das Zertifizierungsaudit ──────────── */
      {
        id: "li-d7-stage1",
        domain: "d7",
        objective: "Kompetenzbereich 7: Vorbereitung auf ein ISMS-Zertifizierungsaudit",
        difficulty: "intermediate",
        question: "Was ist der Hauptzweck des Audits der Stufe 1 bei einer Erstzertifizierung?",
        options: [
          { id: "A", text: "Die Ausstellung des Zertifikats", rationale: "Das Zertifikat wird erst nach erfolgreicher Stufe 2 und Entscheidung der Zertifizierungsstelle erteilt." },
          { id: "B", text: "Die Prüfung der Wirksamkeit aller Maßnahmen vor Ort im Detail", rationale: "Die detaillierte Wirksamkeitsprüfung ist Gegenstand der Stufe 2." },
          { id: "C", text: "Die Prüfung der Dokumentation und der Bereitschaft der Organisation für das Audit der Stufe 2", rationale: "Richtig. In Stufe 1 bewertet der Auditor unter anderem Dokumentation, Anwendungsbereich und Bereitschaft." },
        ],
        answer: "C",
        explanation:
          "Stufe 1 klärt, ob die Organisation bereit ist, und plant Stufe 2. In Stufe 2 wird die Umsetzung und Wirksamkeit des ISMS geprüft. Danach folgen jährliche Überwachungsaudits und alle drei Jahre eine Rezertifizierung.",
        reference: HANDBOOK,
      },
      {
        id: "li-d7-readiness",
        domain: "d7",
        objective: "Kompetenzbereich 7: Vorbereitung auf ein ISMS-Zertifizierungsaudit",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte nächsten Monat das Zertifizierungsaudit durchführen lassen, hat aber noch kein internes Audit und keine Managementbewertung durchgeführt. Wie ist das zu bewerten?",
        options: [
          { id: "A", text: "Unproblematisch, weil der externe Auditor beides übernimmt", rationale: "Das Zertifizierungsaudit ersetzt weder internes Audit noch Managementbewertung." },
          { id: "B", text: "Kritisch, weil internes Audit und Managementbewertung Anforderungen der Norm sind und vor dem Zertifizierungsaudit mindestens einmal stattgefunden haben sollten", rationale: "Richtig. Ohne Nachweise zu 9.2 und 9.3 fehlen dem Auditor wesentliche Belege für ein funktionierendes ISMS." },
          { id: "C", text: "Unproblematisch, weil diese Anforderungen nur für große Unternehmen gelten", rationale: "Die Anforderungen gelten für alle Organisationen." },
        ],
        answer: "B",
        explanation:
          "Vor dem Zertifizierungsaudit sollte das ISMS einen vollständigen Zyklus durchlaufen haben: Planung, Umsetzung, Überwachung, internes Audit, Managementbewertung und gegebenenfalls Korrekturmaßnahmen.",
        reference: HANDBOOK,
      },
    ],
  },
};
