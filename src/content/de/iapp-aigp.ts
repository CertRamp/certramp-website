import type { DeContent } from "@/config/types";

/**
 * German edition of the IAPP AIGP guide and free practice questions.
 * Faithful translation of src/content/guides/iapp-aigp.ts and
 * src/content/practice-questions/iapp-aigp.ts. The IAPP publishes no German
 * body of knowledge, so domain and competency names stay in the official
 * English wording. Legal terms follow the official German texts of the
 * KI-Verordnung (Verordnung (EU) 2024/1689) and the DSGVO (Verordnung (EU) 2016/679).
 * ORIGINAL CertRamp questions — not real exam questions.
 */
const BOK = {
  label: "IAPP — AIGP Body of Knowledge und Exam Blueprint 2.1 (PDF, Englisch)",
  url: "https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf",
};

const aiAct = (articles: string) => ({
  label: `KI-Verordnung (Verordnung (EU) 2024/1689), ${articles} — EUR-Lex`,
  url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
});

const GDPR = {
  label: "DSGVO (Verordnung (EU) 2016/679), Artikel 5, 6 und 13 — EUR-Lex",
  url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
};

const NIST_RMF = {
  label: "NIST AI 100-1, AI Risk Management Framework 1.0, Abschnitt 5 (Abbildung 5)",
  url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
};

export const iappAigpDe: DeContent = {
  slug: "iapp-aigp",
  name: "IAPP AIGP",
  languageNote:
    "Die offizielle Prüfung gibt es nicht auf Deutsch; Sie legen sie auf Englisch ab. Unsere Übungsprüfungen helfen Ihnen, die Inhalte auf Deutsch zu verstehen.",
  facts: [
    { label: "Prüfungsanbieter", value: "IAPP" },
    { label: "Prüfung", value: "Artificial Intelligence Governance Professional (AIGP)" },
    { label: "Prüfungsversion", value: "Body of Knowledge und Exam Blueprint 2.1, gültig ab 2. Februar 2026" },
    { label: "Fragen", value: "100 Fragen" },
    { label: "Dauer", value: "2,75 Stunden, mit einer optionalen 15-minütigen Pause zur Halbzeit" },
    { label: "Format", value: "Multiple Choice; einige Fragen können szenariobasiert sein" },
    { label: "Bestehensgrenze", value: "300 oder mehr (Skala 100–500)" },
    { label: "Prüfungssprachen", value: "Englisch" },
    { label: "Durchführung", value: "Pearson VUE, im Testzentrum oder online mit OnVUE-Fernaufsicht" },
    {
      label: "Voraussetzungen",
      value:
        "Keine formalen Voraussetzungen angegeben. Aufrechterhaltung: 20 Weiterbildungspunkte (Continuing Education Credits) pro zweijähriger Zertifizierungsperiode, passend zum AIGP Body of Knowledge, plus die Gebühr für die Aufrechterhaltung der Zertifizierung (in der IAPP-Mitgliedschaft enthalten).",
    },
  ],
  domains: [
    {
      id: "d1",
      name: "Understanding the foundations of AI governance",
      weight: "16–20 Fragen",
      objectives: [
        "I.A Understand what AI is and why it needs governance",
        "I.B Establish and communicate organizational expectations for AI governance",
        "I.C Establish policies and procedures to apply throughout the AI life cycle",
      ],
    },
    {
      id: "d2",
      name: "Understanding how laws, standards and frameworks apply to AI",
      weight: "19–23 Fragen",
      objectives: [
        "II.A Understand how existing data privacy laws apply to AI",
        "II.B Understand how other types of existing laws apply to AI",
        "II.C Understand the main elements of AI-specific laws",
        "II.D Understand the main industry standards and tools that apply to AI",
      ],
    },
    {
      id: "d3",
      name: "Understanding how to govern AI development",
      weight: "21–25 Fragen",
      objectives: [
        "III.A Govern the designing and building of the AI system",
        "III.B Govern the collection and use of data in training and testing the AI model and system",
        "III.C Govern the release, monitoring and maintenance of the AI system",
      ],
    },
    {
      id: "d4",
      name: "Understanding how to govern AI deployment and use",
      weight: "21–25 Fragen",
      objectives: [
        "IV.A Evaluate key factors and risks relevant to the decision to deploy the AI system",
        "IV.B Perform key activities to assess the AI system",
        "IV.C Govern the deployment and use of the AI system",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "iapp-aigp",
    summary:
      "Die IAPP AIGP (Artificial Intelligence Governance Professional) prüft, ob Sie KI über ihren gesamten Lebenszyklus steuern können: Governance-Strukturen und Richtlinien aufbauen, Datenschutzrecht, KI-spezifische und sonstige Gesetze sowie Standards anwenden und sowohl die Entwicklung als auch den Einsatz von KI-Systemen beaufsichtigen. Die Prüfung umfasst 100 Fragen in 2,75 Stunden mit einer optionalen 15-minütigen Pause. Zum Bestehen benötigen Sie 300 Punkte auf der IAPP-Skala von 100–500. Die Prüfung folgt dem Body of Knowledge 2.1, gültig ab 2. Februar 2026.",
    whoFor: [
      "Fachleute aus Datenschutz, Recht und Compliance, die Verantwortung für KI übernehmen",
      "Verantwortliche für Risikomanagement, Governance und Ethik, die ein KI-Governance-Programm aufbauen oder betreiben",
      "Fachleute aus Produktmanagement, Data Science und Einkauf, die KI-Systeme entwickeln, beschaffen oder einsetzen",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was die AIGP tatsächlich prüft",
        paragraphs: [
          "Der Body of Knowledge umfasst vier Domänen: Understanding the foundations of AI governance (Grundlagen der KI-Governance, 16–20 Fragen), Understanding how laws, standards and frameworks apply to AI (Anwendung von Gesetzen, Standards und Rahmenwerken auf KI, 19–23), Understanding how to govern AI development (Steuerung der KI-Entwicklung, 21–25) und Understanding how to govern AI deployment and use (Steuerung von Einsatz und Nutzung von KI, 21–25). Der Prüfungsplan (Exam Blueprint) nennt pro Domäne eine Mindest- und Höchstzahl an Fragen statt eines Prozentsatzes.",
          "Zwei der vier Domänen betrachten den KI-Lebenszyklus aus zwei Blickwinkeln: aus Sicht der Organisation, die ein KI-System konzipiert, trainiert und freigibt, und aus Sicht der Organisation, die sich entscheidet, ein solches System einzusetzen und zu nutzen – oft von einem Anbieter bezogen. Darum herum stehen die Grundlagen (was KI ist, ihre Risiken und Schäden, Rollen, Schulung und Richtlinien) und die rechtliche Domäne: bestehendes Datenschutzrecht, Recht des geistigen Eigentums und Antidiskriminierungsrecht, KI-spezifische Gesetze wie die KI-Verordnung der EU (EU AI Act) sowie Standards und Rahmenwerke wie die OECD-KI-Grundsätze, das NIST AI Risk Management Framework und die ISO-Normen zu KI.",
        ],
      },
      {
        id: "how-the-exam-is-structured",
        heading: "Wie Prüfung und Prüfungsplan aufgebaut sind",
        paragraphs: [
          "Version 2.1 des Body of Knowledge und Exam Blueprint gilt seit dem 2. Februar 2026 und ersetzt Version 2.0.1. Jede Domäne ist in Kompetenzen (Competencies) gegliedert, zum Beispiel II.C „Understand the main elements of AI-specific laws“, mit jeweils eigenen Fragenspannen, und zu jeder Kompetenz sind Leistungsindikatoren (Performance Indicators) aufgeführt. Die Kompetenzen mit den meisten Fragen sind IV.C, die Steuerung von Einsatz und Nutzung des KI-Systems (9–11), und III.C, die Steuerung von Freigabe, Überwachung und Wartung des KI-Systems (8–10).",
          "Sie legen die Prüfung über Pearson VUE ab, im Testzentrum oder online mit OnVUE, und sie wird auf Englisch angeboten. Zur Halbzeit wird Ihnen eine 15-minütige Pause angeboten; ob Sie sie nehmen oder nicht, Sie müssen zuerst die erste Hälfte abschließen und abgeben und können danach nicht mehr zu ihr zurückkehren. IAPP-Prüfungen verwenden Multiple-Choice-Fragen, bei einigen ist mehr als eine Antwort richtig, und möglicherweise sollen Sie ein Szenario lesen und mehrere Fragen dazu beantworten.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den eigenen Stand am Body of Knowledge messen",
            body: "Laden Sie den BoK 2.1 bei der IAPP herunter und bewerten Sie jeden Leistungsindikator als bekannt, unsicher oder neu. Nutzen Sie die Fragenspannen des Prüfungsplans, um Ihre Zeit zu verteilen: Die beiden Lebenszyklus-Domänen machen zusammen 42–50 Fragen aus.",
          },
          {
            title: "KI-Grundlagen aus Governance-Sicht lernen",
            body: "Sie müssen keine Modelle bauen, aber Sie müssen die wichtigsten Arten von KI kennen, wissen, wie Machine-Learning-Systeme trainiert, getestet und überwacht werden, und die typischen Risiken und Schäden verstehen – Verzerrung (Bias), Intransparenz, Drift sowie Sicherheits- und Datenschutzmängel.",
          },
          {
            title: "Die zentralen Rechts- und Rahmenwerkstexte lesen",
            body: "Arbeiten Sie die KI-Verordnung der EU durch (verbotene Praktiken, Einstufung als Hochrisiko-KI-System, Transparenzpflichten, KI-Modelle mit allgemeinem Verwendungszweck sowie die Rollen von Anbieter und Betreiber), außerdem das NIST AI RMF mit seinem Playbook und die OECD-KI-Grundsätze. Halten Sie anschließend fest, wie die DSGVO und andere Datenschutzgesetze auf KI anzuwenden sind.",
          },
          {
            title: "Ein KI-System durch seinen Lebenszyklus begleiten",
            body: "Nehmen Sie einen Beispiel-Anwendungsfall und verfolgen Sie ihn vom Business Case und der Folgenabschätzung über Data Governance, Tests, Freigabe und Überwachung. Wiederholen Sie das Ganze dann aus Sicht des Betreibers: Due-Diligence-Prüfung des Lieferanten, Vertragsbedingungen, menschliche Aufsicht und Außerbetriebnahme.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Legen Sie Übungsprüfungen mit 100 Fragen in 2,75 Stunden ab, einschließlich Szenariofragen, und lesen Sie jede Erklärung – auch bei Fragen, die Sie richtig beantwortet haben.",
          },
          {
            title: "Buchen, wenn Ihre Ergebnisse stabil sind",
            body: "Buchen Sie die Prüfung, sobald Sie mehrere Übungsprüfungen mit sicherem Abstand bestehen. Die Prüfung muss innerhalb eines Jahres nach dem Kauf abgelegt werden, und nach der Zertifizierung benötigen Sie 20 Weiterbildungspunkte pro zweijähriger Zertifizierungsperiode.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Nur die KI-Verordnung der EU lernen. Sie ist wichtig, aber die rechtliche Domäne umfasst auch Datenschutzrecht, Recht des geistigen Eigentums, Antidiskriminierungsrecht und Produkthaftungsrecht sowie Standards und Rahmenwerke.",
          "Die Pflichten von Anbieter und Betreiber verwechseln. Viele Fragen hängen davon ab, welcher Akteur in der KI-Wertschöpfungskette für eine bestimmte Pflicht verantwortlich ist.",
          "Governance als einmalige Freigabe verstehen. Der Body of Knowledge erwartet Überwachung, Wartung, erneutes Training, Vorfallbehandlung und Außerbetriebnahme über den gesamten Lebenszyklus.",
          "Die Beschaffungsseite auslassen. Domäne IV behandelt den Kauf und die Lizenzierung von KI, einschließlich Vertragsbedingungen, Lieferantenrisiken und Folgenabschätzungen für Systeme Dritter.",
          "Die vier Funktionen des NIST AI RMF durcheinanderbringen. Sie sollten wissen, was Govern, Map, Measure und Manage jeweils abdecken und dass Govern funktionsübergreifend wirkt.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die AIGP-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Die Prüfung umfasst 100 Fragen bei einer vorgesehenen Zeit von 2,75 Stunden; zur Halbzeit wird eine 15-minütige Pause angeboten. Alle Kernprüfungen der IAPP werden auf einer Skala von 100–500 bewertet, und zum Bestehen benötigen Sie 300 Punkte oder mehr.",
      },
      {
        question: "Welche Version des AIGP Body of Knowledge gilt?",
        answer:
          "Body of Knowledge und Exam Blueprint in Version 2.1, gültig ab 2. Februar 2026. Er umfasst vier Domänen und nennt für jede eine Mindest- und Höchstzahl an Fragen.",
      },
      {
        question: "Wie erhalte ich die AIGP-Zertifizierung aufrecht?",
        answer:
          "Die Zertifizierungsperiode dauert zwei Jahre und beginnt am Tag nach dem Bestehen. Sie benötigen 20 Weiterbildungspunkte (Continuing Education Credits), die zum AIGP Body of Knowledge passen, sowie die Gebühr für die Aufrechterhaltung der Zertifizierung. Die Gebühr ist in der IAPP-Mitgliedschaft enthalten; ohne Mitgliedschaft führt der IAPP-Store sie mit 250 USD pro zweijähriger Periode.",
      },
      {
        question: "Brauche ich einen technischen Hintergrund, um die AIGP zu bestehen?",
        answer:
          "Die IAPP legt keine formalen Voraussetzungen für die Prüfung fest. Der Body of Knowledge konzentriert sich auf Governance – Richtlinien, Gesetze, Risiken und die Aufsicht über den Lebenszyklus –, erwartet aber, dass Sie die wichtigsten Arten von KI kennen und verstehen, wie Systeme gebaut, getestet und überwacht werden.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Nein. Die AIGP-Prüfung wird nur auf Englisch angeboten. Unsere Übungsprüfungen helfen Ihnen, die Inhalte auf Deutsch zu verstehen; die offiziellen englischen Domänen- und Kompetenzbezeichnungen behalten wir bei, damit Sie sie in der Prüfung wiedererkennen.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach dem von der IAPP veröffentlichten Body of Knowledge und Exam Blueprint geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AIGP Prüfungsvorbereitung 2026: Domänen & Lernplan",
      description:
        "IAPP-AIGP-Leitfaden zum Body of Knowledge 2.1: 100 Fragen, 2,75 Stunden, Bestehensgrenze 300 von 500, die vier Domänen und ein Lernplan in sechs Schritten.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "iapp-aigp",
    intro:
      "15 eigene AIGP-Übungsfragen zu den vier Domänen des IAPP Body of Knowledge und Exam Blueprint 2.1 (gültig ab 2. Februar 2026), ungefähr wie im Prüfungsplan gewichtet. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung, die Begründung, warum jede andere Antwortoption falsch ist, und einen Link zum maßgeblichen IAPP-Dokument oder Rechtstext.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "AIGP Übungsfragen mit Lösungen & Erklärungen (2026)",
      description:
        "15 kostenlose, eigene IAPP-AIGP-Übungsfragen zu KI-Governance, KI-Verordnung, NIST AI RMF, KI-Entwicklung und -Einsatz – jeweils ausführlich erklärt.",
    },
    questions: [
      /* ── Domäne I: Understanding the foundations of AI governance ── */
      {
        id: "aigp-d1-ai-definition",
        domain: "d1",
        objective: "I.A Understand what AI is and why it needs governance",
        difficulty: "foundation",
        question:
          "Die OECD und die KI-Verordnung der EU definieren ein KI-System ähnlich. Welches Merkmal in diesen Definitionen grenzt ein KI-System am deutlichsten von herkömmlicher, regelbasierter Software ab?",
        options: [
          { id: "A", text: "Es läuft auf Cloud-Infrastruktur und verarbeitet große Datenmengen", rationale: "Wo Software läuft und wie viele Daten sie verarbeitet, ist nicht Teil der Definition; herkömmliche Software kann beides." },
          { id: "B", text: "Es leitet aus den erhaltenen Eingaben ab, wie Ausgaben wie etwa Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen erstellt werden", rationale: "Richtig. Die Fähigkeit, abzuleiten, wie Ausgaben erzeugt werden, statt nur von Menschen geschriebene Regeln auszuführen, ist das Kernelement beider Definitionen." },
          { id: "C", text: "Es kann ohne jede menschliche Beteiligung arbeiten", rationale: "Die Definitionen sprechen von unterschiedlichen Graden der Autonomie. Vollständige Autonomie ist nicht erforderlich, und viele KI-Systeme arbeiten mit einem Menschen in der Entscheidungsschleife (Human in the Loop)." },
          { id: "D", text: "Es lernt nach der Betriebsaufnahme stets weiter", rationale: "Anpassungsfähigkeit nach der Betriebsaufnahme kann ein KI-System aufweisen; sie ist aber keine zwingende Voraussetzung der Definition." },
        ],
        answer: "B",
        explanation:
          "Die Fähigkeit zur Ableitung (Inferenz) macht ein System im regulatorischen Sinne zu „KI“: Das System leitet aus Eingaben und Daten ab, wie Ausgaben erstellt werden. Beide Definitionen lassen unterschiedliche Grade der Autonomie zu, vollständige Unabhängigkeit vom Menschen ist also nicht erforderlich, und Anpassungsfähigkeit nach der Betriebsaufnahme ist optional („anpassungsfähig sein kann“).",
        reference: aiAct("Artikel 3 Nummer 1"),
      },
      {
        id: "aigp-d1-roles",
        domain: "d1",
        objective: "I.B Establish and communicate organizational expectations for AI governance",
        difficulty: "intermediate",
        question:
          "Eine Organisation hat Dutzende KI-Anwendungsfälle, verteilt über mehrere Geschäftsbereiche. Audits zeigen, dass niemand sagen kann, wer mehrere der Systeme genehmigt hat oder wer für ihre Überwachung zuständig ist. Was sollte die verantwortliche Person für KI-Governance zuerst tun?",
        options: [
          { id: "A", text: "Das Data-Science-Team bitten, die Verantwortung für alle KI-Systeme zu übernehmen", rationale: "Data Scientists sind wichtige Stakeholder, aber fachliche Verantwortung sowie Rechenschaftspflicht für Recht, Datenschutz und Risiko können nicht bei einem einzelnen technischen Team liegen." },
          { id: "B", text: "Jede KI-Nutzung aussetzen, bis eine Aufsichtsbehörde Leitlinien veröffentlicht", rationale: "Auf externe Leitlinien zu warten, schließt keine interne Verantwortungslücke und ist für Anwendungsfälle mit geringem Risiko unverhältnismäßig." },
          { id: "C", text: "Rollen und Verantwortlichkeiten festlegen und dokumentieren, einschließlich einer verantwortlichen Person (Owner) für jedes KI-System und eines funktionsübergreifenden Aufsichtsgremiums", rationale: "Richtig. Klare Rollen, benannte Verantwortliche und ein funktionsübergreifendes Gremium (zum Beispiel aus Recht, Datenschutz, Informationssicherheit, Risikomanagement und Fachbereich) schließen die Verantwortungslücke, die das Audit aufgedeckt hat." },
          { id: "D", text: "Für jeden Geschäftsbereich ein KI-Überwachungstool kaufen", rationale: "Tools können die Aufsicht unterstützen, aber ohne festgelegte Verantwortlichkeiten ist niemand dafür zuständig, auf ihre Ergebnisse zu reagieren." },
        ],
        answer: "C",
        explanation:
          "Rechenschaftspflicht beginnt mit festgelegten Rollen und Verantwortlichkeiten für die Stakeholder der KI-Governance. Jedes KI-System braucht eine verantwortliche Person, und eine funktionsübergreifende Aufsicht stellt sicher, dass rechtliche, ethische, datenschutz- und sicherheitsbezogene Perspektiven berücksichtigt werden.",
        reference: BOK,
      },
      {
        id: "aigp-d1-third-party-policy",
        domain: "d1",
        objective: "I.C Establish policies and procedures to apply throughout the AI life cycle",
        difficulty: "intermediate",
        question:
          "Ein Softwareanbieter fügt einem Dienst, den Ihre Organisation seit Jahren nutzt, eine Funktion mit generativer KI hinzu. Die Funktion wurde per Update aktiviert, ohne Ihre KI-Governance-Prüfung zu durchlaufen. Welche Richtlinienänderung verhindert eine Wiederholung am besten?",
        options: [
          { id: "A", text: "Beschaffungs- und Drittparteien-Risikorichtlinien so anpassen, dass neue oder geänderte KI-Funktionen in bestehenden Produkten von Anbietern eine KI-Governance-Prüfung auslösen", rationale: "Richtig. Richtlinien zu Drittparteienrisiken müssen auch KI abdecken, die über Vertragsverlängerungen und Produktupdates hinzukommt, nicht nur über Neuanschaffungen." },
          { id: "B", text: "Alle Anbieterprodukte verbieten, die KI enthalten", rationale: "Ein pauschales Verbot ist selten praktikabel und missachtet den risikobasierten Ansatz, auf dem KI-Governance beruht." },
          { id: "C", text: "Eine KI-Klausel in die Nutzungsrichtlinie für Beschäftigte aufnehmen", rationale: "Nutzungsregeln steuern das Verhalten der Beschäftigten, aber nicht, was Anbieter in vertraglich vereinbarte Dienste einbringen." },
          { id: "D", text: "Sich auf die Erklärung des Anbieters zu verantwortungsvoller KI verlassen", rationale: "Eine Erklärung des Anbieters ist ein nützlicher Input, aber die Organisation bleibt dafür verantwortlich zu bewerten, wie sich die Funktion auf ihre eigene Nutzung und ihre Pflichten auswirkt." },
        ],
        answer: "A",
        explanation:
          "Der Body of Knowledge erwartet Richtlinien, die Drittparteienrisiken über den gesamten KI-Lebenszyklus steuern. KI-Funktionen tauchen oft in bestehenden Produkten auf, daher müssen Prüfauslöser auch Änderungen an Diensten von Anbietern abdecken, nicht nur Neubeschaffungen.",
        reference: BOK,
      },

      /* ── Domäne II: Understanding how laws, standards and frameworks apply to AI ── */
      {
        id: "aigp-d2-purpose-limitation",
        domain: "d2",
        objective: "II.A Understand how existing data privacy laws apply to AI",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen, das der DSGVO unterliegt, möchte Chatprotokolle aus dem Kundensupport, die ursprünglich zur Bearbeitung von Kundenanfragen erhoben wurden, zum Feintuning eines Sprachmodells verwenden. Welcher Schritt ist vorher erforderlich?",
        options: [
          { id: "A", text: "Keiner – Daten, die das Unternehmen bereits besitzt, dürfen für jeden internen Zweck weiterverwendet werden", rationale: "Der Grundsatz der Zweckbindung erlaubt keine unbeschränkte Weiterverwendung personenbezogener Daten für neue Zwecke." },
          { id: "B", text: "Die Protokolle anonymisieren, indem nur die Kundennamen entfernt werden", rationale: "Das bloße Entfernen von Namen macht Freitext-Protokolle selten anonym; andere Identifikatoren und Kontextinformationen bleiben in der Regel erhalten." },
          { id: "C", text: "Eine Genehmigung der Aufsichtsbehörde einholen", rationale: "Die DSGVO verlangt für einen neuen Verarbeitungszweck keine vorherige Genehmigung der Aufsichtsbehörde (eine vorherige Konsultation ist nur in bestimmten Fällen mit hohem Risiko nach einer Datenschutz-Folgenabschätzung vorgesehen)." },
          { id: "D", text: "Prüfen, ob der neue Zweck mit dem ursprünglichen vereinbar ist, eine Rechtsgrundlage bestimmen und die betroffenen Personen transparent informieren", rationale: "Richtig. Die Weiterverarbeitung für das Modelltraining dient einem weiteren Zweck, der den Grundsatz der Zweckbindung erfüllen, eine Rechtsgrundlage haben und den betroffenen Personen erläutert werden muss." },
        ],
        answer: "D",
        explanation:
          "Datenschutzrecht gilt für KI-Training genauso wie für jede andere Verarbeitung. Zweckbindung, Rechtsgrundlage und Transparenz sind die ersten Fragen, die zu klären sind, wenn vorhandene personenbezogene Daten zum Aufbau oder Feintuning eines Modells weiterverwendet werden.",
        reference: GDPR,
      },
      {
        id: "aigp-d2-nondiscrimination",
        domain: "d2",
        objective: "II.B Understand how other types of existing laws apply to AI",
        difficulty: "intermediate",
        question:
          "Ein Arbeitgeber nutzt das KI-Tool eines Anbieters, um Bewerbungen vorzusortieren. Eine Analyse zeigt, dass das Tool Bewerbende aus einer geschützten Gruppe deutlich häufiger ablehnt. Welche Aussage beschreibt am besten, wie das Antidiskriminierungsrecht anzuwenden ist?",
        options: [
          { id: "A", text: "Nur der Anbieter kann haften, weil er das Modell entwickelt hat", rationale: "Die Haftung geht nicht vollständig auf den Anbieter über; der Arbeitgeber trifft die Einstellungsentscheidung mithilfe des Tools." },
          { id: "B", text: "Es gibt kein Problem, solange das Tool das geschützte Merkmal nicht als Eingabe verwendet", rationale: "Stellvertretervariablen (Proxys) können zu diskriminierenden Ergebnissen führen, selbst wenn das geschützte Merkmal selbst ausgeschlossen ist." },
          { id: "C", text: "Das Antidiskriminierungsrecht gilt nicht für automatisierte Entscheidungen", rationale: "Bestehendes arbeitsrechtliches Antidiskriminierungsrecht gilt unabhängig davon, ob ein Mensch oder ein System die Entscheidung trifft." },
          { id: "D", text: "Der Arbeitgeber kann für das diskriminierende Ergebnis verantwortlich sein, obwohl ein Dritter das Tool entwickelt hat", rationale: "Richtig. Arbeitgeber unterliegen bei ihren Einstellungsentscheidungen weiterhin dem Antidiskriminierungsrecht, auch bei Entscheidungen, die mithilfe von KI-Tools getroffen werden." },
        ],
        answer: "D",
        explanation:
          "Der Einsatz von KI hebt bestehende rechtliche Pflichten nicht auf. Entscheidungen über Beschäftigung, Kredite, Wohnraum und Versicherungen unterliegen weiterhin dem Antidiskriminierungsrecht, und Organisationen müssen ungleiche Ergebnisse testen und beheben, auch solche, die durch Proxys entstehen.",
        reference: BOK,
      },
      {
        id: "aigp-d2-prohibited-emotion",
        domain: "d2",
        objective: "II.C Understand the main elements of AI-specific laws",
        difficulty: "advanced",
        question:
          "Ein Unternehmen in der EU plant, ein KI-System einzusetzen, das während der Arbeitszeit aus Webcam-Aufnahmen die Emotionen der Beschäftigten ableitet, um deren Engagement zu messen. Es gibt keinen medizinischen oder sicherheitsbezogenen Grund. Wie stuft die KI-Verordnung der EU diese Verwendung ein?",
        options: [
          { id: "A", text: "Verbotene Praktik im KI-Bereich", rationale: "Richtig. Die KI-Verordnung verbietet KI-Systeme zur Ableitung von Emotionen natürlicher Personen am Arbeitsplatz und in Bildungseinrichtungen, es sei denn, die Verwendung erfolgt aus medizinischen Gründen oder Sicherheitsgründen." },
          { id: "B", text: "Hochrisiko-KI-System, das nach einer Konformitätsbewertung verwendet werden darf", rationale: "Manche Emotionserkennungssysteme sind Hochrisiko-KI-Systeme, aber diese konkrete Verwendung am Arbeitsplatz fällt unter die Verbote, sodass keine Konformitätsbewertung sie rechtmäßig machen kann." },
          { id: "C", text: "System mit begrenztem Risiko, für das nur Transparenzpflichten gelten", rationale: "Transparenzpflichten für Emotionserkennung gelten für zulässige Verwendungen; sie machen eine verbotene Verwendung nicht zulässig." },
          { id: "D", text: "System mit minimalem Risiko ohne besondere Pflichten", rationale: "Die Ableitung von Emotionen am Arbeitsplatz ist in der Verordnung ausdrücklich geregelt und fällt nicht unter minimales Risiko." },
        ],
        answer: "A",
        explanation:
          "Die risikobasierte Struktur der KI-Verordnung beginnt mit einer Liste verbotener Praktiken. Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen steht auf dieser Liste, sofern sie nicht aus medizinischen Gründen oder Sicherheitsgründen erfolgt.",
        reference: aiAct("Artikel 5 Absatz 1 Buchstabe f"),
      },
      {
        id: "aigp-d2-nist-govern",
        domain: "d2",
        objective: "II.D Understand the main industry standards and tools that apply to AI",
        difficulty: "foundation",
        question:
          "Das NIST AI Risk Management Framework gliedert seinen Kern (Core) in vier Funktionen. Welche Funktion ist funktionsübergreifend angelegt, sodass sie die anderen drei prägt und durchdringt?",
        options: [
          { id: "A", text: "Map", rationale: "Map stellt den Kontext her und identifiziert Risiken für ein bestimmtes KI-System; es ist nicht die funktionsübergreifende Funktion." },
          { id: "B", text: "Govern", rationale: "Richtig. Govern fördert eine Risikomanagementkultur, Richtlinien und Rechenschaftspflicht und wirkt über Map, Measure und Manage hinweg." },
          { id: "C", text: "Measure", rationale: "Measure analysiert, bewertet und verfolgt identifizierte Risiken; es baut auf Map auf, statt alle Funktionen zu umspannen." },
          { id: "D", text: "Manage", rationale: "Manage priorisiert Risiken und ergreift Maßnahmen; es hängt von Govern, Map und Measure ab." },
        ],
        answer: "B",
        explanation:
          "Die vier Funktionen des AI RMF sind Govern, Map, Measure und Manage. Govern ist die Grundlage, die sich durch die anderen zieht, während Map, Measure und Manage im Kontext bestimmter KI-Systeme und Lebenszyklusphasen angewendet werden.",
        reference: NIST_RMF,
      },

      /* ── Domäne III: Understanding how to govern AI development ── */
      {
        id: "aigp-d3-impact-assessment",
        domain: "d3",
        objective: "III.A Govern the designing and building of the AI system",
        difficulty: "intermediate",
        question:
          "Ein Team beginnt gleich mit dem Aufbau eines KI-Systems, das Terminanfragen von Patientinnen und Patienten priorisieren soll. Wann sollte die KI-Folgenabschätzung durchgeführt werden?",
        options: [
          { id: "A", text: "Nach dem Training des Modells, wenn seine Genauigkeit bekannt ist", rationale: "Wer bis nach dem Training wartet, hat risikobehaftete Designentscheidungen bereits getroffen, und diese sind nur noch mit hohem Aufwand zu ändern." },
          { id: "B", text: "Nur wenn eine Aufsichtsbehörde sie verlangt", rationale: "Folgenabschätzungen sind ein Governance-Instrument, um Risiken zu erkennen und zu verringern, nicht nur eine Reaktion auf behördliche Anfragen." },
          { id: "C", text: "Während des Designs, bevor der Aufbau beginnt, und erneut, wenn sich das System im Laufe seines Lebenszyklus ändert", rationale: "Richtig. Eine frühe Bewertung lässt die Ergebnisse in Anforderungen, Datenauswahl und Kontrollen einfließen, und die Überarbeitung hält sie aktuell." },
          { id: "D", text: "Einmal, unmittelbar vor der Freigabe für den Produktivbetrieb", rationale: "Eine einzige Prüfung vor der Freigabe verpasst die Chance, Risiken schon im Design zu vermeiden, und ignoriert Änderungen nach der Freigabe." },
        ],
        answer: "C",
        explanation:
          "Folgenabschätzungen wirken am besten, wenn sie Designentscheidungen beeinflussen. Sie sollten in der Designphase beginnen und aktualisiert werden, wenn sich das System, seine Daten oder sein Kontext wesentlich ändern.",
        reference: BOK,
      },
      {
        id: "aigp-d3-data-provenance",
        domain: "d3",
        objective: "III.B Govern the collection and use of data in training and testing the AI model and system",
        difficulty: "intermediate",
        question:
          "Bei einer Prüfung kann das Entwicklungsteam nicht nachweisen, woher Teile seines Trainingsdatensatzes stammen oder zu welchen Bedingungen sie beschafft wurden. Welche Governance-Praxis schließt diese Lücke am direktesten?",
        options: [
          { id: "A", text: "Den Trainingsdatensatz vergrößern", rationale: "Mehr Daten erklären nicht, woher die vorhandenen Daten stammen, und fügen womöglich weitere Daten unbekannter Herkunft hinzu." },
          { id: "B", text: "Datenherkunft und -verlauf (Provenance und Lineage) festhalten und dokumentieren, einschließlich der Quelle und der rechtmäßigen Nutzungsrechte für jeden Datensatz", rationale: "Richtig. Dokumentierte Lineage und Provenance zeigen, woher Daten stammen, wie sie umgewandelt wurden und ob die Organisation sie für das Training verwenden darf." },
          { id: "C", text: "Den Trainingsdatensatz im Ruhezustand verschlüsseln", rationale: "Verschlüsselung schützt die Vertraulichkeit, sagt aber nichts über Herkunft oder Nutzungsrechte aus." },
          { id: "D", text: "Das Modell häufiger neu trainieren", rationale: "Die Häufigkeit des erneuten Trainings beseitigt keine Unklarheit über die Daten, mit denen das Modell trainiert wird." },
        ],
        answer: "B",
        explanation:
          "Data Governance für KI umfasst das Wissen um die Quelle der Daten, die Rechte zu ihrer Erhebung und Nutzung und die Art ihrer Verarbeitung. Eine Dokumentation von Lineage und Provenance unterstützt die Einhaltung rechtlicher Vorgaben, die Qualitätsbewertung und die Rechenschaftspflicht.",
        reference: BOK,
      },
      {
        id: "aigp-d3-monitoring-drift",
        domain: "d3",
        objective: "III.C Govern the release, monitoring and maintenance of the AI system",
        difficulty: "intermediate",
        question:
          "Sechs Monate nach der Freigabe ist die Präzision eines Modells zur Betrugserkennung stetig gesunken, weil sich das Kundenverhalten verändert hat. Welche Governance-Kontrolle hätte vorhanden sein sollen, um dies zu erkennen und zu beheben?",
        options: [
          { id: "A", text: "Ein einmaliger Validierungsbericht, der bei der Freigabe abgezeichnet wurde", rationale: "Die Validierung bei der Freigabe bestätigt die Leistung zu einem Zeitpunkt und kann spätere Veränderungen nicht erkennen." },
          { id: "B", text: "Ein größerer Testdatensatz vor der Freigabe", rationale: "Bessere Tests vor der Freigabe zeigen keine Veränderungen der realen Daten, die erst danach auftreten." },
          { id: "C", text: "Den Zugriff auf das Modell auf das Betrugsteam beschränken", rationale: "Zugriffskontrolle ist eine Sicherheitsmaßnahme und erkennt keinen Leistungsabfall." },
          { id: "D", text: "Kontinuierliche Überwachung anhand festgelegter Leistungsschwellenwerte, mit einem Zeitplan für Wartung und erneutes Training", rationale: "Richtig. Laufende Überwachung erkennt Drift, und festgelegte Schwellenwerte sowie ein Wartungszeitplan stellen sicher, dass daraus Maßnahmen folgen." },
        ],
        answer: "D",
        explanation:
          "Die Modellleistung kann nachlassen, wenn sich Daten oder Umgebung nach der Freigabe ändern. Governance erfordert daher kontinuierliche Überwachung, Schwellenwerte, die eine Überprüfung auslösen, und einen regelmäßigen Zeitplan für Wartung und erneutes Training.",
        reference: BOK,
      },
      {
        id: "aigp-d3-business-context",
        domain: "d3",
        objective: "III.A Govern the designing and building of the AI system",
        difficulty: "foundation",
        question:
          "Ein Geschäftsbereich bittet das Data-Science-Team, „ein KI-Modell für Kundenabwanderung zu bauen“. Was sollte die Governance verlangen, bevor eine Modellarchitektur gewählt wird?",
        options: [
          { id: "A", text: "Einen dokumentierten Geschäftskontext und Anwendungsfall, einschließlich Zweckbestimmung, betroffener Stakeholder und Erfolgskriterien", rationale: "Richtig. Die Festlegung von Geschäftskontext und Anwendungsfall ist der Ausgangspunkt, um Risiken zu bewerten, Daten auszuwählen und Abnahmekriterien festzulegen." },
          { id: "B", text: "Einen Vergleich der Genauigkeit mehrerer Kandidatenmodelle", rationale: "Der Modellvergleich kommt später; ohne festgelegten Anwendungsfall gibt es keine Kriterien, an denen verglichen werden kann." },
          { id: "C", text: "Ein Budget für Cloud-Rechenressourcen", rationale: "Die Budgetplanung ist eine Projektaufgabe, nicht die Governance-Grundlage für Designentscheidungen." },
          { id: "D", text: "Eine Pressemitteilung, die die KI-Initiative ankündigt", rationale: "Externe Kommunikation ist keine Governance-Anforderung der Designphase." },
        ],
        answer: "A",
        explanation:
          "Die Steuerung des Designs beginnt mit dem Verständnis, warum das System benötigt wird, wen es betrifft und wie Erfolg aussieht. Diese Entscheidungen bestimmen die Folgenabschätzung, die Datenanforderungen und die Testkriterien.",
        reference: BOK,
      },

      /* ── Domäne IV: Understanding how to govern AI deployment and use ── */
      {
        id: "aigp-d4-deployment-options",
        domain: "d4",
        objective: "IV.A Evaluate key factors and risks relevant to the decision to deploy the AI system",
        difficulty: "advanced",
        question:
          "Eine Bank möchte ein großes Sprachmodell nutzen, um interne Dokumente mit vertraulichen Kundendaten zusammenzufassen. Vertragliche und regulatorische Anforderungen schreiben vor, dass die Daten in einer Infrastruktur bleiben müssen, die die Bank kontrolliert. Welche Bereitstellungsoption erfüllt diese Anforderungen am besten?",
        options: [
          { id: "A", text: "Ein Modell mit offenen Gewichten (Open-Weight-Modell) auf der eigenen, kontrollierten Infrastruktur der Bank betreiben", rationale: "Richtig. Durch den Eigenbetrieb (Self-Hosting) bleibt die Datenverarbeitung in einer Infrastruktur, die die Bank kontrolliert, was der genannten Anforderung entspricht." },
          { id: "B", text: "Einen öffentlichen Chatbot für Verbraucher über private Konten der Beschäftigten nutzen", rationale: "Verbraucherdienste bieten die geringste Kontrolle über den Umgang mit Daten und erfüllen vertragliche oder regulatorische Pflichten möglicherweise nicht." },
          { id: "C", text: "Ein Modell eines Drittanbieters über eine öffentliche API mit Standardeinstellungen aufrufen", rationale: "Eine Drittanbieter-API sendet Daten in die Umgebung des Anbieters; das widerspricht der Anforderung, sofern keine besonderen vertraglichen und technischen Schutzmaßnahmen vereinbart sind." },
          { id: "D", text: "Ein beim Anbieter gehostetes Modell mit den vertraulichen Daten feintunen", rationale: "Dabei gelangen die vertraulichen Daten in die Umgebung des Anbieters und werden in ein Modell eingebettet, das die Bank nicht kontrolliert." },
        ],
        answer: "A",
        explanation:
          "Bereitstellungsentscheidungen hängen vom Modelltyp und der Bereitstellungsoption ebenso ab wie von den Geschäftszielen. Wenn Daten unter der Kontrolle der Organisation bleiben müssen, ist der Eigenbetrieb die Option, die die Anforderung erfüllt – um den Preis, das Modell selbst betreiben zu müssen.",
        reference: BOK,
      },
      {
        id: "aigp-d4-vendor-terms",
        domain: "d4",
        objective: "IV.B Perform key activities to assess the AI system",
        difficulty: "intermediate",
        question:
          "Ihre Organisation verhandelt eine Lizenz für den KI-Schreibassistenten eines Anbieters, den die Beschäftigten mit internen Geschäftsdokumenten nutzen werden. Welche Vertragsbedingung ist aus Sicht der KI-Governance am wichtigsten zu prüfen?",
        options: [
          { id: "A", text: "Die Anzahl der enthaltenen Benutzerlizenzen", rationale: "Das Lizenzvolumen ist eine kommerzielle Bedingung ohne direkten Bezug zum KI-Risiko." },
          { id: "B", text: "Das Farbschema und die Branding-Optionen", rationale: "Branding-Optionen sind für die Governance nicht relevant." },
          { id: "C", text: "Die Bürostandorte des Anbieters", rationale: "Bürostandorte spielen kaum eine Rolle; entscheidend ist, wo Daten verarbeitet und gespeichert werden." },
          { id: "D", text: "Ob der Anbieter Ihre Eingaben und Ausgaben nutzen darf, um seine Modelle zu trainieren oder zu verbessern", rationale: "Richtig. Die Nutzung von Kundendaten für das Modelltraining berührt Vertraulichkeit, geistiges Eigentum und Datenschutz und muss im Vertrag geregelt werden." },
        ],
        answer: "D",
        explanation:
          "Zur Bewertung eines KI-Systems eines Dritten gehört die Prüfung der wesentlichen Bedingungen und Risiken in Anbieter- oder Lizenzverträgen. Datennutzung für das Training, Vertraulichkeit, geistiges Eigentum, Haftung und Prüfrechte (Audit Rights) sind typische Punkte, die zu untersuchen sind.",
        reference: BOK,
      },
      {
        id: "aigp-d4-human-oversight",
        domain: "d2",
        objective: "II.C Understand the main elements of AI-specific laws",
        difficulty: "advanced",
        question:
          "Ein Unternehmen betreibt ein Hochrisiko-KI-System im Sinne der KI-Verordnung der EU, das Entscheidungen über den Zugang zu grundlegenden Diensten unterstützt. Welche Pflicht zur menschlichen Aufsicht legt die KI-Verordnung dem Unternehmen als Betreiber auf?",
        options: [
          { id: "A", text: "Das System so umgestalten, dass es keine automatisierten Ausgaben erzeugen kann", rationale: "Die Konzeptionspflichten zur menschlichen Aufsicht liegen beim Anbieter; der Betreiber muss das System nicht umgestalten." },
          { id: "B", text: "Die menschliche Aufsicht natürlichen Personen übertragen, die über die erforderliche Kompetenz, Ausbildung und Befugnis verfügen, und ihnen die erforderliche Unterstützung zukommen lassen", rationale: "Richtig. Betreiber von Hochrisiko-KI-Systemen müssen die Aufsicht Personen übertragen, die kompetent, geschult und befugt sind, tätig zu werden." },
          { id: "C", text: "Die Aufsicht vollständig an den Anbieter delegieren", rationale: "Der Betreiber verwendet das System in seinem eigenen Kontext und kann seine Aufsichtspflicht nicht an den Anbieter abgeben." },
          { id: "D", text: "Vor jeder Verwendung die ausdrückliche Einwilligung jeder betroffenen Person einholen", rationale: "Die KI-Verordnung macht die Einwilligung nicht zur Bedingung für die Verwendung eines Hochrisiko-KI-Systems; die menschliche Aufsicht ist eine eigenständige Pflicht." },
        ],
        answer: "B",
        explanation:
          "Die KI-Verordnung teilt die Pflichten zwischen Anbieter und Betreiber auf. Anbieter konzipieren Systeme so, dass eine wirksame Aufsicht möglich ist, während Betreiber diese Aufsicht Personen übertragen müssen, die über die Kompetenz, Ausbildung, Befugnis und Unterstützung verfügen, um sie auszuüben.",
        reference: aiAct("Artikel 26 Absatz 2"),
      },
      {
        id: "aigp-d4-external-communication",
        domain: "d4",
        objective: "IV.C Govern the deployment and use of the AI system",
        difficulty: "intermediate",
        question:
          "Ein Einzelhändler steht kurz vor dem Start eines KI-Chatbots, der Kundenfragen auf seiner Website beantwortet. Was sollte der Plan für die externe Kommunikation im Rahmen der Governance des Einsatzes enthalten?",
        options: [
          { id: "A", text: "Nichts – die Kommunikation mit Kunden liegt in der Verantwortung des Anbieters", rationale: "Der Einzelhändler setzt den Chatbot gegenüber seinen eigenen Kunden ein und ist dafür verantwortlich, wie er über dessen Nutzung kommuniziert." },
          { id: "B", text: "Nur eine Marketingankündigung der neuen Funktion", rationale: "Werbebotschaften sagen Kunden nicht, was sie über die Interaktion mit einem KI-System wissen müssen." },
          { id: "C", text: "Einen klaren Hinweis, dass Kunden mit einem KI-System interagieren, auf dessen Zweck und Grenzen sowie darauf, wie sie einen Menschen erreichen oder ein Anliegen vorbringen können", rationale: "Richtig. Transparente externe Kommunikation umfasst die Tatsache der KI-Nutzung, ihren Zweck, ihre Grenzen und die Wege zu Hilfe, Beschwerde oder Abhilfe." },
          { id: "D", text: "Die vollständige technische Dokumentation und die Modellgewichte", rationale: "Die Veröffentlichung technischer Interna ist für Kunden weder nötig noch nützlich und kann vertrauliche Informationen preisgeben." },
        ],
        answer: "C",
        explanation:
          "Pläne für die externe Kommunikation aufzustellen, gehört zur Governance des Einsatzes. Menschen, die mit einem KI-System interagieren, sollten wissen, dass sie dies tun, seinen Zweck und seine Grenzen verstehen und einen Weg zu einem Menschen oder zur Meldung eines Anliegens haben.",
        reference: BOK,
      },
    ],
  },
};
