import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for PRINCE2® 7 Foundation.
 * Exam facts follow the verified record in src/config/certifications.ts
 * (PeopleCert PRINCE2 Project Management Foundation (Version 7) page, checked 2026-11-24).
 * PeopleCert publishes no domain weights; the five domains group the learning areas
 * listed by PeopleCert. German method terms follow common German PRINCE2 usage, with the
 * English term in brackets where helpful.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const EXAM = {
  label: "PeopleCert: PRINCE2 Project Management Foundation (Version 7)",
  url: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-2/PRINCE2-7-foundation-3579",
};

export const prince27FoundationDe: DeContent = {
  slug: "prince2-7-foundation",
  name: "PRINCE2® 7 Foundation",
  languageNote:
    "PeopleCert bietet die Prüfung PRINCE2 7 Foundation in 14 Sprachen an, darunter Deutsch. Lerne die englischen Fachbegriffe wie Business Case, Exception Report oder Work Package trotzdem mit, weil sie auch im deutschsprachigen Projektalltag üblich sind.",
  facts: [
    { label: "Prüfungsanbieter", value: "PeopleCert" },
    { label: "Fragen", value: "60 Multiple-Choice-Fragen" },
    { label: "Dauer", value: "60 Minuten" },
    { label: "Bestehensgrenze", value: "60 %" },
    { label: "Hilfsmittel", value: "Keine (Closed Book)" },
    {
      label: "Prüfungssprachen",
      value: "14, darunter Deutsch, Englisch, Französisch, Niederländisch, Polnisch und Spanisch",
    },
    { label: "Voraussetzungen", value: "Keine" },
    { label: "Gültigkeit", value: "3 Jahre; Verlängerung mit 60 CPD-Punkten über PeopleCert Plus oder durch eine weitere Prüfung" },
    { label: "Version", value: "PRINCE2 Project Management, Version 7" },
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
    slug: "prince2-7-foundation",
    summary:
      "PRINCE2 7 Foundation ist die Einstiegsprüfung zur Projektmanagementmethode PRINCE2 in der 7. Version. Die Prüfung hat 60 Multiple-Choice-Fragen in 60 Minuten, ist Closed Book, und du bestehst mit 60 %, also 36 richtigen Antworten. Geprüft werden die sieben Grundprinzipien, sieben Themen, sieben Prozesse, die Rollen und die Anpassung der Methode. Die Prüfung gibt es auch auf Deutsch.",
    whoFor: [
      "Projektleiter und Projektmitarbeitende, die eine anerkannte Methode lernen wollen",
      "Mitarbeitende im PMO, in der Projektunterstützung oder im Lenkungsausschuss",
      "Alle, die später die Practitioner-Prüfung ablegen möchten",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst 60 Multiple-Choice-Fragen mit je einer richtigen Antwort, für die du 60 Minuten Zeit hast. Hilfsmittel sind nicht erlaubt; anders als bei der Practitioner-Prüfung darfst du das Handbuch nicht verwenden. Bestanden ist ab 60 %, also mit mindestens 36 richtigen Antworten. Das offizielle Ergebnis liegt laut PeopleCert innerhalb von zwei Werktagen vor.",
          "Formale Voraussetzungen gibt es nicht. Die Prüfung wird in 14 Sprachen angeboten, darunter Deutsch. Das Zertifikat bleibt drei Jahre gültig; verlängern kannst du es mit 60 CPD-Punkten über die PeopleCert-Plus-Mitgliedschaft oder durch eine weitere Prüfung aus derselben Produktfamilie.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "PRINCE2 7 besteht aus fünf integrierten Elementen: Grundprinzipien, Menschen, Themen (Practices), Prozesse und Projektkontext. Die sieben Grundprinzipien sind fortlaufende geschäftliche Rechtfertigung, Lernen aus Erfahrung, definierte Rollen, Verantwortlichkeiten und Beziehungen, Steuern über Managementphasen, Steuern nach dem Ausnahmeprinzip, Produktorientierung und Anpassung an das Projekt. Ein Projekt gilt nur dann als PRINCE2-Projekt, wenn alle sieben angewendet werden.",
          "Die sieben Themen sind Business Case, Organisation, Pläne, Qualität, Risiko, Issues und Fortschritt. Die sieben Prozesse führen vom Vorbereiten eines Projekts über Lenken, Initiieren, Steuern einer Phase, Managen der Produktlieferung und Managen eines Phasenübergangs bis zum Abschließen. Neu in Version 7 sind unter anderem das Element Menschen mit Personalführung und Kommunikation, Nachhaltigkeit als Leistungsziel sowie ein Ansatz für das digitale und Datenmanagement.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Die Struktur der Methode verstehen",
            body: "Lerne zuerst die fünf integrierten Elemente und die drei Siebener-Listen: Grundprinzipien, Themen und Prozesse. Jede Frage lässt sich einem dieser Bausteine zuordnen.",
          },
          {
            title: "Rollen genau lernen",
            body: "Präge dir ein, wer was tut: Auftraggeber (Executive), Benutzervertreter (Senior User), Lieferantenvertreter (Senior Supplier), Projektmanager, Teammanager, Projektsicherung, Projektunterstützung und Änderungsinstanz. Viele Fragen drehen sich um Zuständigkeiten.",
          },
          {
            title: "Die Prozesse als Ablauf zeichnen",
            body: "Skizziere den Lebensweg eines Projekts vom Projektmandat bis zum Abschluss: wer welchen Prozess ausführt, welche Entscheidungen der Lenkungsausschuss trifft und welche Managementprodukte entstehen.",
          },
          {
            title: "Toleranzen und Ausnahmen üben",
            body: "Verstehe, wer welche Toleranzen festlegt und was passiert, wenn eine Überschreitung droht. Das Ausnahmeprinzip ist eines der häufigsten Prüfungsthemen.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen mit 60 Fragen in 60 Minuten. Achte auf Formulierungen wie „welche Aussage ist NICHT“ und auf Unterschiede zwischen ähnlichen Managementprodukten.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 75 % liegst. Das gibt dir Reserve gegenüber der Grenze von 60 %.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Mit Material zur 6. Auflage lernen. Version 7 hat neue Begriffe, das Element Menschen und Nachhaltigkeit als Leistungsziel.",
          "Annehmen, Grundprinzipien ließen sich weglassen. Angepasst werden Themen, Prozesse und Managementprodukte, die Grundprinzipien gelten immer alle.",
          "Den Projektmanager für den Business Case verantwortlich halten. Verantwortlich ist der Auftraggeber (Executive); der Projektmanager erstellt und pflegt ihn in dessen Auftrag.",
          "Managementphasen und Spezialistenphasen verwechseln. Managementphasen sind Entscheidungsabschnitte des Lenkungsausschusses, Spezialistenphasen gliedern die fachliche Arbeit.",
          "Toleranzebenen durcheinanderbringen: Die Unternehmens- oder Programmebene legt Projekttoleranzen fest, der Lenkungsausschuss Phasentoleranzen, der Projektmanager Arbeitspakettoleranzen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die PRINCE2 7 Foundation-Prüfung?",
        answer: "60 Multiple-Choice-Fragen in 60 Minuten. Du bestehst mit 60 %, also 36 richtigen Antworten.",
      },
      {
        question: "Darf ich das PRINCE2-Handbuch in der Prüfung verwenden?",
        answer: "Nein. Die Foundation-Prüfung ist Closed Book. Das Handbuch ist erst in der Practitioner-Prüfung erlaubt.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer: "Ja. PeopleCert bietet PRINCE2 7 Foundation in 14 Sprachen an, darunter Deutsch.",
      },
      {
        question: "Welche Voraussetzungen gibt es?",
        answer: "Keine. Die Foundation-Prüfung kann jeder ablegen.",
      },
      {
        question: "Wie lange ist das Zertifikat gültig?",
        answer:
          "Drei Jahre. Verlängern kannst du es mit 60 CPD-Punkten über PeopleCert Plus oder durch eine weitere Prüfung aus derselben Produktfamilie.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen zur Methode in Version 7. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "PRINCE2 7 Foundation auf Deutsch: Prüfung & Lernplan",
      description:
        "PRINCE2 7 Foundation auf Deutsch vorbereiten: 60 Fragen, 60 Minuten, Closed Book, 60 % zum Bestehen, Grundprinzipien, Themen, Prozesse und Rollen erklärt.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "prince2-7-foundation",
    intro:
      "30 eigene Übungsfragen zu PRINCE2 7 Foundation zu Grundprinzipien, Rollen, Themen, Prozessen und Anpassung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "PRINCE2 7 Foundation Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose PRINCE2 7 Foundation Übungsfragen auf Deutsch: Grundprinzipien, Rollen, Business Case, Risiko, Toleranzen und Prozesse, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Grundprinzipien ────────────────────────────────────── */
      {
        id: "p2-d1-business-justification",
        domain: "d1",
        objective: "Grundprinzip: fortlaufende geschäftliche Rechtfertigung",
        difficulty: "foundation",
        question:
          "Während der dritten Managementphase zeigt sich, dass der erwartete Nutzen eines Projekts weggefallen ist. Welches Grundprinzip verlangt, die Fortführung jetzt zu überprüfen?",
        options: [
          { id: "A", text: "Produktorientierung", rationale: "Produktorientierung betrifft die Definition und Lieferung von Produkten, nicht die Rechtfertigung des Projekts." },
          { id: "B", text: "Fortlaufende geschäftliche Rechtfertigung", rationale: "Richtig. Ein Projekt muss während seiner gesamten Dauer gerechtfertigt bleiben; fällt der Nutzen weg, ist die Fortführung zu hinterfragen." },
          { id: "C", text: "Lernen aus Erfahrung", rationale: "Lernen aus Erfahrung betrifft das Nutzen von Erkenntnissen, nicht die Rechtfertigung." },
          { id: "D", text: "Definierte Rollen, Verantwortlichkeiten und Beziehungen", rationale: "Dieses Prinzip regelt Zuständigkeiten, nicht die Wirtschaftlichkeit." },
        ],
        answer: "B",
        explanation:
          "Die geschäftliche Rechtfertigung wird im Business Case dokumentiert und an jedem Phasenübergang überprüft. Ist das Projekt nicht mehr gerechtfertigt, sollte der Lenkungsausschuss es vorzeitig beenden.",
        reference: EXAM,
      },
      {
        id: "p2-d1-manage-by-exception",
        domain: "d1",
        objective: "Grundprinzip: Steuern nach dem Ausnahmeprinzip",
        difficulty: "foundation",
        question: "Was ist der Kern des Grundprinzips „Steuern nach dem Ausnahmeprinzip“?",
        options: [
          { id: "A", text: "Für jede Ebene werden Toleranzen festgelegt; nur wenn eine Überschreitung droht, wird an die nächsthöhere Ebene eskaliert", rationale: "Richtig. So kann jede Ebene innerhalb ihrer Toleranzen selbstständig arbeiten, ohne ständige Abstimmung." },
          { id: "B", text: "Der Lenkungsausschuss trifft jede Entscheidung selbst", rationale: "Das widerspricht dem Prinzip; der Lenkungsausschuss soll nur bei Ausnahmen eingreifen." },
          { id: "C", text: "Ausnahmen werden grundsätzlich nicht dokumentiert", rationale: "Ausnahmen werden im Gegenteil formal berichtet, etwa mit einem Ausnahmebericht." },
          { id: "D", text: "Nur der Projektmanager darf Toleranzen festlegen", rationale: "Toleranzen werden auf mehreren Ebenen festgelegt, vom Unternehmen über den Lenkungsausschuss bis zum Projektmanager." },
        ],
        answer: "A",
        explanation:
          "Toleranzen gibt es für Zeit, Kosten, Umfang, Qualität, Nutzen, Risiko und Nachhaltigkeit. Das Ausnahmeprinzip ermöglicht effiziente Nutzung der Zeit der Führungskräfte.",
        reference: EXAM,
      },
      {
        id: "p2-d1-learn-experience",
        domain: "d1",
        objective: "Grundprinzip: Lernen aus Erfahrung",
        difficulty: "foundation",
        question: "Wann sollen Erfahrungen laut PRINCE2 gesucht, festgehalten und genutzt werden?",
        options: [
          { id: "A", text: "Nur beim Projektabschluss", rationale: "Erfahrungen werden nicht nur am Ende, sondern während des gesamten Projekts genutzt." },
          { id: "B", text: "Nur wenn ein Fehler passiert ist", rationale: "Auch positive Erfahrungen sind wertvoll und werden festgehalten." },
          { id: "C", text: "Während des gesamten Projekts, vom Start bis zum Abschluss", rationale: "Richtig. Schon beim Vorbereiten werden frühere Erfahrungen gesucht, laufend neue gesammelt und am Ende weitergegeben." },
          { id: "D", text: "Nur in Projekten mit mehr als einem Jahr Laufzeit", rationale: "Das Prinzip gilt unabhängig von der Projektgröße." },
        ],
        answer: "C",
        explanation:
          "Erfahrungen werden in einem Erfahrungsprotokoll festgehalten und in Erfahrungsberichten weitergegeben, etwa am Ende einer Phase oder des Projekts.",
        reference: EXAM,
      },
      {
        id: "p2-d1-focus-products",
        domain: "d1",
        objective: "Grundprinzip: Produktorientierung",
        difficulty: "intermediate",
        question: "Wie setzt ein Projekt das Grundprinzip der Produktorientierung um?",
        options: [
          { id: "A", text: "Es plant zuerst die Aktivitäten und leitet daraus die Produkte ab", rationale: "PRINCE2 geht umgekehrt vor: erst die Produkte, dann die Aktivitäten." },
          { id: "B", text: "Es verzichtet auf Qualitätskriterien, um flexibler zu sein", rationale: "Qualitätskriterien sind gerade Teil der Produktbeschreibungen." },
          { id: "C", text: "Es beschreibt nur das Endprodukt und keine Zwischenprodukte", rationale: "Auch Zwischenprodukte werden identifiziert und beschrieben." },
          { id: "D", text: "Es definiert und vereinbart Produkte mit ihren Qualitätsanforderungen, bevor die Arbeit geplant wird", rationale: "Richtig. Produktbeschreibungen mit Zweck, Zusammensetzung und Qualitätskriterien bilden die Grundlage für Planung und Lieferung." },
        ],
        answer: "D",
        explanation:
          "Produktorientierung hilft, Erwartungen zu klären, Umfang zu steuern und Akzeptanzkriterien festzulegen. Die Projektproduktbeschreibung beschreibt das Hauptergebnis des Projekts.",
        reference: EXAM,
      },
      {
        id: "p2-d1-all-principles",
        domain: "d1",
        objective: "Grundprinzipien: Anwendung",
        difficulty: "intermediate",
        question: "Welche Aussage zu den sieben Grundprinzipien ist richtig?",
        options: [
          { id: "A", text: "Bei kleinen Projekten genügt es, drei der sieben Grundprinzipien anzuwenden", rationale: "Ein Projekt ist nur dann ein PRINCE2-Projekt, wenn alle sieben Grundprinzipien angewendet werden." },
          { id: "B", text: "Alle sieben Grundprinzipien müssen angewendet werden, damit ein Projekt als PRINCE2-Projekt gilt", rationale: "Richtig. Die Grundprinzipien sind verbindlich; angepasst wird die Art, wie Themen, Prozesse und Produkte genutzt werden." },
          { id: "C", text: "Die Grundprinzipien gelten nur für die Initiierungsphase", rationale: "Die Grundprinzipien gelten während des gesamten Projekts." },
          { id: "D", text: "Die Grundprinzipien werden vom Projektmanager pro Projekt neu formuliert", rationale: "Die Grundprinzipien sind fest vorgegeben und universell gültig." },
        ],
        answer: "B",
        explanation:
          "Die Grundprinzipien sind universell, selbstbestätigend und befähigend. Das Prinzip „Anpassung an das Projekt“ verlangt gerade, die Methode sinnvoll an Größe, Komplexität und Umfeld anzupassen.",
        reference: EXAM,
      },

      /* ── Bereich 2: Menschen und Rollen ────────────────────────────────── */
      {
        id: "p2-d2-executive",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten: Auftraggeber",
        difficulty: "foundation",
        question: "Welche Rolle trägt die alleinige Verantwortung (Accountability) für den Projekterfolg und den Business Case?",
        options: [
          { id: "A", text: "Der Projektmanager", rationale: "Der Projektmanager steuert das Projekt im Tagesgeschäft, trägt aber nicht die letztliche Verantwortung für den Business Case." },
          { id: "B", text: "Der Benutzervertreter (Senior User)", rationale: "Der Benutzervertreter vertritt die Interessen der Nutzer und verantwortet die Spezifikation des Nutzens." },
          { id: "C", text: "Der Auftraggeber (Executive)", rationale: "Richtig. Der Auftraggeber ist der alleinige Verantwortliche im Lenkungsausschuss und Eigentümer des Business Case." },
          { id: "D", text: "Die Projektunterstützung", rationale: "Die Projektunterstützung erbringt administrative Dienste." },
        ],
        answer: "C",
        explanation:
          "Der Lenkungsausschuss besteht aus Auftraggeber, Benutzervertreter und Lieferantenvertreter. Er ist keine Demokratie: Die Entscheidung liegt beim Auftraggeber, unterstützt von den anderen beiden Rollen.",
        reference: EXAM,
      },
      {
        id: "p2-d2-senior-supplier",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten: Lieferantenvertreter",
        difficulty: "intermediate",
        question: "Wofür ist der Lieferantenvertreter (Senior Supplier) im Lenkungsausschuss verantwortlich?",
        options: [
          { id: "A", text: "Für die Interessen derjenigen, die die Projektprodukte entwerfen, entwickeln und liefern, und für die Bereitstellung der Ressourcen", rationale: "Richtig. Der Lieferantenvertreter vertritt die Lieferantenseite und verantwortet die fachliche Integrität der Produkte." },
          { id: "B", text: "Für die Festlegung des erwarteten Nutzens", rationale: "Den Nutzen spezifiziert der Benutzervertreter." },
          { id: "C", text: "Für die tägliche Führung der Teams", rationale: "Die tägliche Teamführung übernimmt der Teammanager." },
          { id: "D", text: "Für die Genehmigung des Business Case", rationale: "Der Business Case gehört dem Auftraggeber." },
        ],
        answer: "A",
        explanation:
          "Die drei Interessen im Projekt: Geschäft (Auftraggeber), Benutzer (Benutzervertreter) und Lieferanten (Lieferantenvertreter). Alle drei müssen im Lenkungsausschuss vertreten sein.",
        reference: EXAM,
      },
      {
        id: "p2-d2-project-assurance",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten: Projektsicherung",
        difficulty: "intermediate",
        question: "Welche Aussage zur Projektsicherung (Project Assurance) ist richtig?",
        options: [
          { id: "A", text: "Sie ist Teil der Rolle des Projektmanagers", rationale: "Die Projektsicherung muss unabhängig vom Projektmanager sein." },
          { id: "B", text: "Sie ist dasselbe wie die Projektunterstützung", rationale: "Die Projektunterstützung erbringt Verwaltungsleistungen; die Projektsicherung überwacht unabhängig." },
          { id: "C", text: "Sie wird ausschließlich von externen Auditoren wahrgenommen", rationale: "Die Projektsicherung kann auch von internen Personen wahrgenommen werden, solange sie unabhängig vom Projektmanager sind." },
          { id: "D", text: "Sie überwacht im Auftrag der Mitglieder des Lenkungsausschusses alle Aspekte des Projekts unabhängig vom Projektmanager", rationale: "Richtig. Jedes Mitglied des Lenkungsausschusses ist für die Projektsicherung seines Interessenbereichs verantwortlich und kann sie delegieren." },
        ],
        answer: "D",
        explanation:
          "Projektsicherung ist nicht mit Qualitätssicherung zu verwechseln: Qualitätssicherung ist eine unternehmensweite Funktion unabhängig vom Projekt.",
        reference: EXAM,
      },
      {
        id: "p2-d2-change-authority",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten: Änderungsinstanz",
        difficulty: "intermediate",
        question:
          "Der Lenkungsausschuss möchte nicht über jede kleine Änderung selbst entscheiden. Was kann er tun?",
        options: [
          { id: "A", text: "Alle Änderungen grundsätzlich ablehnen", rationale: "Das wäre unflexibel und nicht im Sinne der Methode." },
          { id: "B", text: "Eine Änderungsinstanz (Change Authority) mit einem Änderungsbudget und klaren Grenzen benennen", rationale: "Richtig. Der Lenkungsausschuss kann die Entscheidung über Änderungsanträge innerhalb festgelegter Grenzen delegieren." },
          { id: "C", text: "Die Entscheidung den Teammitgliedern überlassen, ohne Grenzen festzulegen", rationale: "Delegation erfolgt an eine benannte Instanz mit klaren Grenzen." },
          { id: "D", text: "Änderungen erst nach Projektende bearbeiten", rationale: "Änderungen müssen während des Projekts bewertet werden." },
        ],
        answer: "B",
        explanation:
          "Die Änderungsinstanz kann je nach Größe der Änderung der Projektmanager, eine Person aus dem Lenkungsausschuss oder ein eigenes Gremium sein.",
        reference: EXAM,
      },
      {
        id: "p2-d2-people-communication",
        domain: "d2",
        objective: "Menschen: Kommunikation",
        difficulty: "foundation",
        question:
          "Ein neues Projekt betrifft mehrere Abteilungen, die Veränderungen skeptisch gegenüberstehen. Was hilft laut PRINCE2 7 am meisten, Akzeptanz zu schaffen?",
        options: [
          { id: "A", text: "Informationen nur auf Nachfrage weitergeben", rationale: "Zurückhaltende Kommunikation verstärkt eher Unsicherheit und Widerstand." },
          { id: "B", text: "Die Betroffenen erst nach Projektende informieren", rationale: "Zu späte Information verhindert, dass Betroffene einbezogen werden." },
          { id: "C", text: "Stakeholder früh identifizieren und gezielt, regelmäßig und passend zu ihren Bedürfnissen einbinden", rationale: "Richtig. Version 7 betont das Element Menschen: Beziehungen, Engagement und Kommunikation mit Stakeholdern sind zentral für den Projekterfolg." },
          { id: "D", text: "Kommunikation vollständig dem Lenkungsausschuss überlassen", rationale: "Kommunikation ist eine gemeinsame Aufgabe und wird im Projekt geplant." },
        ],
        answer: "C",
        explanation:
          "Das Element Menschen umfasst Führung, Teamarbeit, Kommunikation, Stakeholder-Engagement und den Umgang mit organisatorischer Veränderung.",
        reference: EXAM,
      },
      {
        id: "p2-d2-team-manager",
        domain: "d2",
        objective: "Rollen und Verantwortlichkeiten: Teammanager",
        difficulty: "foundation",
        question: "Welche Rolle ist dafür verantwortlich, dass ein Team die vereinbarten Produkte eines Arbeitspakets in der geforderten Qualität liefert?",
        options: [
          { id: "A", text: "Der Teammanager", rationale: "Richtig. Der Teammanager übernimmt Arbeitspakete vom Projektmanager und sorgt für die Lieferung der Produkte." },
          { id: "B", text: "Der Auftraggeber", rationale: "Der Auftraggeber verantwortet das Projekt insgesamt, nicht einzelne Arbeitspakete." },
          { id: "C", text: "Die Änderungsinstanz", rationale: "Die Änderungsinstanz entscheidet über Änderungsanträge." },
          { id: "D", text: "Der Benutzervertreter", rationale: "Der Benutzervertreter vertritt die Nutzer im Lenkungsausschuss." },
        ],
        answer: "A",
        explanation:
          "In kleinen Projekten kann der Projektmanager die Rolle des Teammanagers mit übernehmen. Die Rolle ist optional, die Aufgaben bleiben aber bestehen.",
        reference: EXAM,
      },

      /* ── Bereich 3: Themen (Practices) ─────────────────────────────────── */
      {
        id: "p2-d3-business-case",
        domain: "d3",
        objective: "Thema Business Case",
        difficulty: "intermediate",
        question: "Wann wird der Business Case in einem PRINCE2-Projekt überprüft und aktualisiert?",
        options: [
          { id: "A", text: "Nur einmal bei der Projektinitiierung", rationale: "Der Business Case wird während des gesamten Projekts gepflegt." },
          { id: "B", text: "Nur nach Projektende bei der Nutzenbewertung", rationale: "Nach Projektende wird der Nutzen bewertet, der Business Case wird aber schon während des Projekts aktualisiert." },
          { id: "C", text: "Ausschließlich, wenn ein Ausnahmebericht erstellt wird", rationale: "Auch bei Ausnahmen wird er geprüft, aber nicht ausschließlich dann." },
          { id: "D", text: "Er wird beim Vorbereiten skizziert, beim Initiieren ausgearbeitet und vor allem an den Phasenübergängen überprüft und aktualisiert", rationale: "Richtig. So bleibt die geschäftliche Rechtfertigung während des gesamten Projekts nachvollziehbar." },
        ],
        answer: "D",
        explanation:
          "Der Business Case enthält unter anderem Gründe, Optionen, erwarteten Nutzen und unerwünschte Nebenwirkungen, Kosten, Zeitrahmen, Investitionsbewertung und Hauptrisiken.",
        reference: EXAM,
      },
      {
        id: "p2-d3-output-outcome-benefit",
        domain: "d3",
        objective: "Thema Business Case: Ergebnis, Wirkung, Nutzen",
        difficulty: "intermediate",
        question:
          "Ein Projekt liefert ein neues Buchungssystem. Mitarbeitende buchen dadurch schneller, und die Kosten pro Buchung sinken um 20 %. Was ist in diesem Beispiel der Nutzen (Benefit)?",
        options: [
          { id: "A", text: "Das neue Buchungssystem", rationale: "Das System ist das Projektergebnis (Output)." },
          { id: "B", text: "Die Senkung der Kosten pro Buchung um 20 %", rationale: "Richtig. Der Nutzen ist die messbare Verbesserung, die eine Stakeholdergruppe als vorteilhaft ansieht." },
          { id: "C", text: "Dass Mitarbeitende schneller buchen", rationale: "Das schnellere Buchen ist die Wirkung (Outcome), die aus der Nutzung des Ergebnisses entsteht." },
          { id: "D", text: "Die Schulung der Mitarbeitenden", rationale: "Die Schulung ist eine Aktivität oder ein Teilprodukt, kein Nutzen." },
        ],
        answer: "B",
        explanation:
          "Output: das gelieferte Produkt. Outcome: die Veränderung durch dessen Nutzung. Benefit: die messbare Verbesserung durch die Veränderung. Ein negativer Effekt heißt unerwünschte Nebenwirkung (Dis-benefit).",
        reference: EXAM,
      },
      {
        id: "p2-d3-plans-levels",
        domain: "d3",
        objective: "Thema Pläne",
        difficulty: "intermediate",
        question: "Welcher Plan wird erstellt, wenn eine Phasen- oder Projekttoleranz voraussichtlich überschritten wird und der Lenkungsausschuss einen neuen Plan verlangt?",
        options: [
          { id: "A", text: "Ein Ausnahmeplan", rationale: "Richtig. Der Ausnahmeplan ersetzt den Plan, dessen Toleranzen überschritten werden, und zeigt den Weg ab der aktuellen Situation." },
          { id: "B", text: "Ein Teamplan", rationale: "Teampläne sind optional und betreffen die Arbeit eines Teams in einem Arbeitspaket." },
          { id: "C", text: "Ein Nutzenmanagementansatz", rationale: "Dieser Ansatz beschreibt, wie Nutzen gemessen und geprüft wird, nicht wie eine Ausnahme behoben wird." },
          { id: "D", text: "Ein Projektmandat", rationale: "Das Projektmandat steht am Anfang des Projekts und ist kein Plan." },
        ],
        answer: "A",
        explanation:
          "Planebenen: Projektplan, Phasenplan, optional Teampläne. Ein Ausnahmeplan wird auf Projekt- oder Phasenebene erstellt; auf Arbeitspaketebene gibt es keine Ausnahmepläne.",
        reference: EXAM,
      },
      {
        id: "p2-d3-quality-acceptance",
        domain: "d3",
        objective: "Thema Qualität",
        difficulty: "intermediate",
        question: "Wo werden die Akzeptanzkriterien für das Endprodukt des Projekts dokumentiert?",
        options: [
          { id: "A", text: "Im Tagesprotokoll", rationale: "Das Tagesprotokoll ist ein informelles Arbeitsdokument des Projektmanagers." },
          { id: "B", text: "Im Risikoregister", rationale: "Das Risikoregister enthält Risiken, keine Akzeptanzkriterien." },
          { id: "C", text: "In der Projektproduktbeschreibung", rationale: "Richtig. Die Projektproduktbeschreibung enthält unter anderem die Qualitätserwartungen des Kunden und die Akzeptanzkriterien." },
          { id: "D", text: "Im Phasenabschlussbericht", rationale: "Der Phasenabschlussbericht berichtet über eine abgeschlossene Phase." },
        ],
        answer: "C",
        explanation:
          "Die Qualitätserwartungen des Kunden und die Akzeptanzkriterien werden beim Vorbereiten des Projekts erfasst. Das Qualitätsregister dokumentiert später die geplanten und durchgeführten Qualitätsaktivitäten.",
        reference: EXAM,
      },
      {
        id: "p2-d3-risk-proximity",
        domain: "d3",
        objective: "Thema Risiko",
        difficulty: "intermediate",
        question: "Was beschreibt die Nähe (Proximity) eines Risikos?",
        options: [
          { id: "A", text: "Wie hoch der finanzielle Schaden wäre", rationale: "Das beschreibt die Auswirkung (Impact)." },
          { id: "B", text: "Wie wahrscheinlich das Risiko eintritt", rationale: "Das beschreibt die Wahrscheinlichkeit (Probability)." },
          { id: "C", text: "Wer für das Risiko verantwortlich ist", rationale: "Das ist der Risikoeigentümer." },
          { id: "D", text: "Wann das Risiko voraussichtlich eintreten könnte", rationale: "Richtig. Die Nähe gibt an, wann ein Risiko eintreten könnte, und hilft bei der Priorisierung." },
        ],
        answer: "D",
        explanation:
          "Risiken werden nach Wahrscheinlichkeit, Auswirkung und Nähe bewertet. Risikoeigentümer steuern ein Risiko, Risikoverantwortliche setzen eine Maßnahme um.",
        reference: EXAM,
      },
      {
        id: "p2-d3-risk-response",
        domain: "d3",
        objective: "Thema Risiko: Maßnahmen",
        difficulty: "intermediate",
        question:
          "Ein Projekt schließt eine Versicherung ab, damit ein Dritter die finanziellen Folgen eines möglichen Lieferausfalls trägt. Welche Risikomaßnahme ist das?",
        options: [
          { id: "A", text: "Vermeiden", rationale: "Beim Vermeiden wird die Ursache beseitigt, sodass die Bedrohung nicht mehr eintreten oder wirken kann." },
          { id: "B", text: "Übertragen", rationale: "Richtig. Ein Dritter übernimmt die finanziellen Folgen der Bedrohung, etwa über eine Versicherung oder einen Vertrag." },
          { id: "C", text: "Akzeptieren", rationale: "Beim Akzeptieren wird die Bedrohung bewusst ohne Maßnahme hingenommen." },
          { id: "D", text: "Verstärken", rationale: "Verstärken ist eine Maßnahme für Chancen, nicht für Bedrohungen." },
        ],
        answer: "B",
        explanation:
          "Maßnahmen für Bedrohungen sind zum Beispiel vermeiden, reduzieren, übertragen, teilen, akzeptieren oder einen Rückfallplan vorbereiten; für Chancen etwa nutzen, verstärken, teilen oder ablehnen.",
        reference: EXAM,
      },
      {
        id: "p2-d3-issue-types",
        domain: "d3",
        objective: "Thema Issues",
        difficulty: "intermediate",
        question:
          "Ein Lieferant meldet, dass ein bereits fertiggestelltes Teilprodukt eine Anforderung aus der Produktbeschreibung nicht erfüllt. Um welche Art von Issue handelt es sich?",
        options: [
          { id: "A", text: "Einen Änderungsantrag", rationale: "Ein Änderungsantrag schlägt eine Änderung an einer vereinbarten Baseline vor; hier wird eine bestehende Anforderung nicht erfüllt." },
          { id: "B", text: "Ein Risiko", rationale: "Ein Risiko ist ein unsicheres zukünftiges Ereignis; der Mangel ist bereits eingetreten." },
          { id: "C", text: "Eine Spezifikationsabweichung (Off-Specification)", rationale: "Richtig. Ein Produkt erfüllt seine Spezifikation nicht oder wird sie voraussichtlich nicht erfüllen." },
          { id: "D", text: "Einen Erfahrungsbericht", rationale: "Ein Erfahrungsbericht gibt Erkenntnisse weiter und ist kein Issue." },
        ],
        answer: "C",
        explanation:
          "Arten von Issues: Änderungsantrag, Spezifikationsabweichung sowie Problem oder Anliegen. Issues werden im Issue-Register erfasst oder informell im Tagesprotokoll behandelt.",
        reference: EXAM,
      },
      {
        id: "p2-d3-progress-exception-report",
        domain: "d3",
        objective: "Thema Fortschritt",
        difficulty: "intermediate",
        question:
          "Der Projektmanager stellt fest, dass die aktuelle Managementphase die vereinbarte Kostentoleranz voraussichtlich überschreiten wird. Was tut er?",
        options: [
          { id: "A", text: "Er erhöht die Toleranz selbst, um weiterarbeiten zu können", rationale: "Phasentoleranzen legt der Lenkungsausschuss fest; der Projektmanager darf sie nicht selbst ändern." },
          { id: "B", text: "Er beendet das Projekt sofort", rationale: "Über eine vorzeitige Beendigung entscheidet der Lenkungsausschuss." },
          { id: "C", text: "Er wartet bis zum Phasenende und berichtet dann", rationale: "Eine drohende Überschreitung wird sofort eskaliert, nicht erst am Phasenende." },
          { id: "D", text: "Er eskaliert an den Lenkungsausschuss mit einem Ausnahmebericht", rationale: "Richtig. Der Ausnahmebericht beschreibt Ursache, Folgen, Optionen und eine Empfehlung." },
        ],
        answer: "D",
        explanation:
          "Fortschrittskontrollen sind ereignisgesteuert (etwa Phasenübergänge, Ausnahmen) oder zeitgesteuert (etwa regelmäßige Statusberichte des Projektmanagers und Checkpoint-Berichte der Teammanager).",
        reference: EXAM,
      },
      {
        id: "p2-d3-organizing",
        domain: "d3",
        objective: "Thema Organisation",
        difficulty: "foundation",
        question: "Welche drei Interessen müssen in der Projektmanagementstruktur von PRINCE2 vertreten sein?",
        options: [
          { id: "A", text: "Geschäft, Benutzer und Lieferanten", rationale: "Richtig. Diese drei Interessen sind im Lenkungsausschuss durch Auftraggeber, Benutzervertreter und Lieferantenvertreter vertreten." },
          { id: "B", text: "Vertrieb, Marketing und Einkauf", rationale: "Das sind Unternehmensbereiche, keine Projektinteressen nach PRINCE2." },
          { id: "C", text: "Management, Betriebsrat und Aufsichtsrat", rationale: "Das sind Gremien eines Unternehmens, nicht die drei Projektinteressen." },
          { id: "D", text: "Projektmanager, Teammanager und Projektunterstützung", rationale: "Das sind Projektrollen, nicht die drei Interessen." },
        ],
        answer: "A",
        explanation:
          "Die Projektmanagementstruktur hat vier Ebenen: Unternehmen oder Programm, Lenkung (Lenkungsausschuss), Management (Projektmanager) und Lieferung (Teammanager und Teams).",
        reference: EXAM,
      },

      /* ── Bereich 4: Prozesse ───────────────────────────────────────────── */
      {
        id: "p2-d4-starting-up",
        domain: "d4",
        objective: "Prozess: Vorbereiten eines Projekts",
        difficulty: "foundation",
        question: "Welches Ziel hat der Prozess „Vorbereiten eines Projekts“ (Starting up a Project)?",
        options: [
          { id: "A", text: "Die Produkte im Detail zu entwickeln", rationale: "Die Produktentwicklung erfolgt im Prozess „Managen der Produktlieferung“." },
          { id: "B", text: "Sicherzustellen, dass die Voraussetzungen für die Initiierung erfüllt sind, und die Frage zu beantworten, ob das Projekt lohnend und machbar ist", rationale: "Richtig. Der Prozess verhindert, dass schlecht durchdachte Projekte initiiert werden." },
          { id: "C", text: "Das Projekt formal abzuschließen", rationale: "Das ist Aufgabe des Prozesses „Abschließen eines Projekts“." },
          { id: "D", text: "Arbeitspakete an Teams zu vergeben", rationale: "Arbeitspakete werden im Prozess „Steuern einer Phase“ freigegeben." },
        ],
        answer: "B",
        explanation:
          "Auslöser ist das Projektmandat. Ergebnisse sind unter anderem die Ernennung des Projektmanagementteams, die Projektbeschreibung (Project Brief) mit skizziertem Business Case und der Plan für die Initiierungsphase.",
        reference: EXAM,
      },
      {
        id: "p2-d4-directing",
        domain: "d4",
        objective: "Prozess: Lenken eines Projekts",
        difficulty: "intermediate",
        question: "Wer führt den Prozess „Lenken eines Projekts“ (Directing a Project) aus?",
        options: [
          { id: "A", text: "Der Projektmanager", rationale: "Der Projektmanager führt vor allem „Steuern einer Phase“ und „Managen eines Phasenübergangs“ aus." },
          { id: "B", text: "Die Teammanager", rationale: "Teammanager führen „Managen der Produktlieferung“ aus." },
          { id: "C", text: "Der Lenkungsausschuss", rationale: "Richtig. Der Lenkungsausschuss trifft in diesem Prozess die zentralen Entscheidungen, etwa zur Initiierung, zum Projekt, zu Phasen und zum Abschluss." },
          { id: "D", text: "Die Projektunterstützung", rationale: "Die Projektunterstützung unterstützt administrativ, lenkt aber nicht." },
        ],
        answer: "C",
        explanation:
          "„Lenken eines Projekts“ läuft vom Ende des Vorbereitens bis zum Projektabschluss. Der Lenkungsausschuss gibt außerdem bei Bedarf Ad-hoc-Anweisungen.",
        reference: EXAM,
      },
      {
        id: "p2-d4-initiating",
        domain: "d4",
        objective: "Prozess: Initiieren eines Projekts",
        difficulty: "intermediate",
        question: "Welches wichtige Ergebnis entsteht im Prozess „Initiieren eines Projekts“?",
        options: [
          { id: "A", text: "Die Projektinitiierungsdokumentation (PID) mit Projektplan, ausgearbeitetem Business Case und Managementansätzen", rationale: "Richtig. Die PID bildet die Grundlage, auf der der Lenkungsausschuss das Projekt freigibt." },
          { id: "B", text: "Der Projektabschlussbericht", rationale: "Der Abschlussbericht entsteht im Prozess „Abschließen eines Projekts“." },
          { id: "C", text: "Das Projektmandat", rationale: "Das Projektmandat kommt von der Unternehmens- oder Programmebene und löst das Vorbereiten aus." },
          { id: "D", text: "Der Checkpoint-Bericht", rationale: "Checkpoint-Berichte erstellen Teammanager während der Arbeit an Arbeitspaketen." },
        ],
        answer: "A",
        explanation:
          "In der Initiierung werden die Managementansätze (etwa für Risiko, Qualität, Issues, Kommunikation und Nutzen), der Projektplan und die Projektsteuerung festgelegt.",
        reference: EXAM,
      },
      {
        id: "p2-d4-controlling-stage",
        domain: "d4",
        objective: "Prozess: Steuern einer Phase",
        difficulty: "intermediate",
        question: "Welche Tätigkeit gehört zum Prozess „Steuern einer Phase“ (Controlling a Stage)?",
        options: [
          { id: "A", text: "Die Freigabe des gesamten Projekts", rationale: "Das Projekt gibt der Lenkungsausschuss im Prozess „Lenken eines Projekts“ frei." },
          { id: "B", text: "Die Erstellung der Projektbeschreibung", rationale: "Die Projektbeschreibung entsteht beim Vorbereiten." },
          { id: "C", text: "Die Übergabe der Produkte an den Betrieb am Projektende", rationale: "Die abschließende Übergabe gehört zum Prozess „Abschließen eines Projekts“." },
          { id: "D", text: "Arbeitspakete freigeben, den Fortschritt überwachen und Issues und Risiken bearbeiten", rationale: "Richtig. In diesem Prozess steuert der Projektmanager die tägliche Arbeit der Phase." },
        ],
        answer: "D",
        explanation:
          "Der Projektmanager berichtet regelmäßig mit Statusberichten an den Lenkungsausschuss und eskaliert Ausnahmen. Die Teammanager arbeiten parallel im Prozess „Managen der Produktlieferung“.",
        reference: EXAM,
      },
      {
        id: "p2-d4-stage-boundary",
        domain: "d4",
        objective: "Prozess: Managen eines Phasenübergangs",
        difficulty: "intermediate",
        question: "Was bereitet der Projektmanager im Prozess „Managen eines Phasenübergangs“ für den Lenkungsausschuss vor?",
        options: [
          { id: "A", text: "Einen Phasenabschlussbericht, den Plan für die nächste Phase sowie aktualisierten Projektplan und Business Case", rationale: "Richtig. Damit kann der Lenkungsausschuss entscheiden, ob das Projekt fortgesetzt wird." },
          { id: "B", text: "Ausschließlich eine Liste offener Rechnungen", rationale: "Finanzielle Informationen sind Teil der Unterlagen, aber nicht ausschließlich." },
          { id: "C", text: "Die Projektproduktbeschreibung zum ersten Mal", rationale: "Die Projektproduktbeschreibung entsteht beim Vorbereiten." },
          { id: "D", text: "Den Nutzenbewertungsbericht nach Projektende", rationale: "Nutzen wird zwar auch während des Projekts bewertet, ein Bericht nach Projektende ist aber nicht das Ergebnis des Phasenübergangs." },
        ],
        answer: "A",
        explanation:
          "Der Prozess wird auch genutzt, um einen Ausnahmeplan zu erstellen, wenn der Lenkungsausschuss das nach einem Ausnahmebericht verlangt.",
        reference: EXAM,
      },
      {
        id: "p2-d4-managing-delivery",
        domain: "d4",
        objective: "Prozess: Managen der Produktlieferung",
        difficulty: "foundation",
        question: "Welchen Zweck hat der Prozess „Managen der Produktlieferung“ (Managing Product Delivery)?",
        options: [
          { id: "A", text: "Die Verbindung zwischen Projektmanager und Teammanager zu regeln, mit formalen Anforderungen an Annahme, Ausführung und Lieferung der Arbeit", rationale: "Richtig. Der Teammanager nimmt Arbeitspakete an, lässt die Produkte erstellen und liefert sie zurück." },
          { id: "B", text: "Den Business Case zu genehmigen", rationale: "Den Business Case genehmigt der Lenkungsausschuss." },
          { id: "C", text: "Die Managementphasen festzulegen", rationale: "Managementphasen werden bei der Planung in der Initiierung festgelegt." },
          { id: "D", text: "Den Lenkungsausschuss zu ernennen", rationale: "Der Lenkungsausschuss wird beim Vorbereiten ernannt." },
        ],
        answer: "A",
        explanation:
          "Im Arbeitspaket werden Produkte, Toleranzen, Berichtswege und Qualitätsanforderungen vereinbart. Der Teammanager berichtet mit Checkpoint-Berichten.",
        reference: EXAM,
      },
      {
        id: "p2-d4-closing",
        domain: "d4",
        objective: "Prozess: Abschließen eines Projekts",
        difficulty: "intermediate",
        question: "Was gehört zum Prozess „Abschließen eines Projekts“?",
        options: [
          { id: "A", text: "Das Projektmandat erstellen", rationale: "Das Projektmandat steht am Anfang, nicht am Ende des Projekts." },
          { id: "B", text: "Die Abnahme bestätigen, Produkte übergeben, die Leistung des Projekts bewerten und Folgeaktionen empfehlen", rationale: "Richtig. Das Projekt wird geordnet beendet, und der Lenkungsausschuss erhält einen Projektabschlussbericht." },
          { id: "C", text: "Neue Arbeitspakete für die nächste Phase freigeben", rationale: "Am Projektende gibt es keine nächste Phase mehr." },
          { id: "D", text: "Die Projektbeschreibung erstmals erstellen", rationale: "Die Projektbeschreibung entsteht beim Vorbereiten." },
        ],
        answer: "B",
        explanation:
          "Auch ein vorzeitig beendetes Projekt wird über diesen Prozess abgeschlossen. Nutzen, der erst nach dem Projekt eintritt, wird über den Nutzenmanagementansatz weiter geprüft.",
        reference: EXAM,
      },

      /* ── Bereich 5: Anpassung und Projektkontext ───────────────────────── */
      {
        id: "p2-d5-tailoring",
        domain: "d5",
        objective: "Anpassung an das Projekt",
        difficulty: "intermediate",
        question: "Was darf bei der Anpassung (Tailoring) von PRINCE2 an ein kleines Projekt verändert werden?",
        options: [
          { id: "A", text: "Die Anzahl der Grundprinzipien", rationale: "Die Grundprinzipien werden nicht angepasst; alle sieben gelten immer." },
          { id: "B", text: "Die Verantwortung des Auftraggebers für den Business Case", rationale: "Rollen können kombiniert werden, die Verantwortlichkeiten bleiben aber bestehen." },
          { id: "C", text: "Art und Umfang von Prozessen, Themen und Managementprodukten, etwa durch Kombinieren von Rollen und Dokumenten", rationale: "Richtig. Die Methode wird an Größe, Komplexität, Risiko und Umfeld angepasst." },
          { id: "D", text: "Die Notwendigkeit einer geschäftlichen Rechtfertigung", rationale: "Die fortlaufende geschäftliche Rechtfertigung ist ein Grundprinzip und gilt immer." },
        ],
        answer: "C",
        explanation:
          "Wie die Methode angepasst wird, wird in der Projektinitiierungsdokumentation festgehalten. Beispiele: weniger Managementphasen, mündliche statt schriftlicher Berichte oder kombinierte Dokumente.",
        reference: EXAM,
      },
      {
        id: "p2-d5-sustainability",
        domain: "d5",
        objective: "Projektkontext: Nachhaltigkeit",
        difficulty: "intermediate",
        question: "Wie berücksichtigt PRINCE2 7 Nachhaltigkeit im Projekt?",
        options: [
          { id: "A", text: "Gar nicht; Nachhaltigkeit ist Aufgabe der Unternehmensstrategie", rationale: "Version 7 integriert Nachhaltigkeit ausdrücklich in die Projektleistung." },
          { id: "B", text: "Nur als optionales Kapitel für Bauprojekte", rationale: "Nachhaltigkeit gilt für alle Projekte, nicht nur für bestimmte Branchen." },
          { id: "C", text: "Ausschließlich durch eine abschließende Umweltprüfung nach Projektende", rationale: "Nachhaltigkeit wird während des gesamten Projekts gesteuert, nicht nur am Ende geprüft." },
          { id: "D", text: "Als Leistungsziel neben Zeit, Kosten, Umfang, Qualität, Nutzen und Risiko, für das Ziele und Toleranzen festgelegt werden können", rationale: "Richtig. Nachhaltigkeit ist in Version 7 einer der Leistungsbereiche des Projekts." },
        ],
        answer: "D",
        explanation:
          "Laut PeopleCert integriert Version 7 Nachhaltigkeit in die Projektleistung, um Projekte an ökologischer und sozialer Verantwortung auszurichten.",
        reference: EXAM,
      },
      {
        id: "p2-d5-agile-context",
        domain: "d5",
        objective: "Projektkontext: Anpassung an die Arbeitsweise",
        difficulty: "intermediate",
        question:
          "Ein Projektteam liefert Software in kurzen Iterationen nach Scrum. Wie verhält sich PRINCE2 dazu?",
        options: [
          { id: "A", text: "PRINCE2 kann mit agilen Lieferansätzen kombiniert werden; die Methode wird entsprechend angepasst", rationale: "Richtig. PRINCE2 regelt Lenkung und Steuerung, während die Teams ihre Produkte mit einem passenden Lieferansatz erstellen." },
          { id: "B", text: "PRINCE2 verbietet iterative Entwicklung", rationale: "PRINCE2 schreibt keinen bestimmten Lieferansatz vor." },
          { id: "C", text: "Bei agilen Teams entfällt der Lenkungsausschuss", rationale: "Die Lenkung durch den Lenkungsausschuss bleibt auch bei agilen Teams bestehen." },
          { id: "D", text: "Agile Teams dürfen keine Toleranzen haben", rationale: "Gerade bei agilen Ansätzen werden Toleranzen etwa für den Umfang häufig genutzt." },
        ],
        answer: "A",
        explanation:
          "Der Projektkontext umfasst unter anderem Organisation, Kunden-Lieferanten-Beziehung, Lieferansatz, Größe, Komplexität und Risiko. Er bestimmt, wie die Methode angepasst wird.",
        reference: EXAM,
      },
    ],
  },
};
