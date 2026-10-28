import type { DeContent } from "@/config/types";

/**
 * German edition of the AB-620 exam guide and free practice questions.
 * Faithful translation of src/content/guides/ab-620.ts and
 * src/content/practice-questions/ab-620.ts. Exam facts match the verified
 * `exam` record in src/config/certifications.ts. Domain and objective names
 * follow the official German (de-de) AB-620 study guide on Microsoft Learn
 * (machine-translated by Microsoft; quoted verbatim). UI names in Copilot
 * Studio (nodes, settings, test methods) stay in English.
 */
const MULTI_AGENT = {
  label: "Microsoft Learn — Andere Agents in Copilot Studio hinzufügen",
  url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/authoring-add-other-agents",
};

const EVALUATION = {
  label: "Microsoft Learn — Agent-Evaluierung in Copilot Studio",
  url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/analytics-agent-evaluation-overview",
};

export const ab620De: DeContent = {
  slug: "ab-620",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; übersetzte Versionen werden laut Microsoft etwa acht Wochen nach der englischen Fassung aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "AB-620" },
    { label: "Dauer", value: "120 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Arabisch (Saudi-Arabien), Chinesisch (vereinfacht), Chinesisch (traditionell), Französisch, Deutsch, Indonesisch (Indonesien), Italienisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Russisch, Spanisch",
    },
    { label: "Durchführung", value: "Beaufsichtigte Prüfung; kann interaktive Komponenten enthalten" },
    {
      label: "Voraussetzungen",
      value:
        "Keine formalen Voraussetzungen. Microsoft erwartet Vertrautheit mit Power Fx, Dataverse, Power-Platform-Umgebungen, Microsoft 365 Copilot, Microsoft Foundry und adaptiven Karten, mittlere Kenntnisse generativer KI (RAG, MCP, A2A), REST-APIs und Erfahrung mit der Konfiguration von Agents in Copilot Studio. Verlängerung alle 12 Monate über eine kostenlose Online-Bewertung auf Microsoft Learn.",
    },
    {
      label: "Prüfungsversion",
      value: "Studienleitfaden zuletzt aktualisiert am 16. Oktober 2026 (kein Stichtag für die gemessenen Fähigkeiten veröffentlicht)",
    },
  ],
  domains: [
    {
      id: "d1",
      name: "Planen und Konfigurieren von Agentlösungen",
      weight: "30–35 %",
      objectives: [
        "Planen einer Agentlösung",
        "Erstellen und Überwachen von Agentabläufen in Copilot Studio",
        "Konfigurieren von Themen",
      ],
    },
    {
      id: "d2",
      name: "Integrieren und Erweitern von Agents in Copilot Studio",
      weight: "40–45 %",
      objectives: [
        "Herstellen einer Verbindung mit Unternehmenswissensquellen",
        "Hinzufügen von Tools zu Agenten",
        "Konfigurieren der Zusammenarbeit mit mehreren Agents über Copilot Studio",
        "Integrieren von Agents in Azure",
      ],
    },
    {
      id: "d3",
      name: "Testen und Verwalten von Agents",
      weight: "20–25 %",
      objectives: [
        "Bewerten Sie die Agentenleistung (Evaluate agent performance)",
        "Implementieren der Anwendungslebenszyklusverwaltung (Application Lifecycle Management, ALM) für Agents in Copilot Studio",
      ],
    },
  ],

  /* ── Leitfaden ──────────────────────────────────────────────────────────── */
  guide: {
    slug: "ab-620",
    summary:
      "AB-620 (Designing and Building Integrated AI Agent Solutions in Copilot Studio) führt zur Zertifizierung Microsoft Certified: AI Agent Builder Associate. Geprüft wird, ob Sie Agents für Unternehmen in Microsoft Copilot Studio planen, erstellen, integrieren, testen und bereitstellen können – Agent-Flows, Themen (Topics), MCP- und REST-Tools, Multi-Agent-Lösungen, Azure-Integration, Evaluierung und ALM. Die Prüfung dauert 120 Minuten, und zum Bestehen brauchen Sie 700 Punkte.",
    whoFor: [
      "Professionelle Entwicklerinnen und Entwickler sowie fortgeschrittene Builder, die benutzerdefinierte Agents in Copilot Studio erstellen, erweitern und integrieren",
      "IT-Anwendungsentwickler, Beraterinnen und Berater sowie ISV-Partner, die Agent-Lösungen für Organisationen oder Kunden umsetzen",
      "Power-Platform-Maker, die bereits einfache Agents konfigurieren und den Schritt zu Integrationen, Multi-Agent-Designs und ALM machen möchten",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was AB-620 tatsächlich prüft",
        paragraphs: [
          "AB-620 hat drei Fähigkeitsbereiche. Das Integrieren und Erweitern von Agents in Copilot Studio hat das größte Gewicht (40–45 %): Wissensquellen im Unternehmen, Tools wie Computerverwendung (Computer Use), MCP, benutzerdefinierte Connectors und REST-APIs, die Zusammenarbeit mehrerer Agents und die Integration mit Azure. Das Planen und Konfigurieren von Agent-Lösungen macht 30–35 % aus (Planung, Agent-Flows und Themen), das Testen und Verwalten von Agents 20–25 % (Evaluierung und ALM).",
          "Dies ist eine Prüfung auf Entwicklerniveau, keine Einführung. Microsoft erwartet Vertrautheit mit Power Fx, Dataverse, Power-Platform-Umgebungen, Microsoft 365 Copilot, Microsoft Foundry und adaptiven Karten, mittlere Kenntnisse generativer KI-Konzepte wie Orchestrierung, RAG, MCP und dem A2A-Protokoll sowie Erfahrung mit Prompt Engineering und REST-APIs.",
        ],
      },
      {
        id: "how-it-is-structured",
        heading: "Wie die Gliederung aufgebaut ist",
        paragraphs: [
          "Der Planungsbereich beginnt vor dem eigentlichen Bauen: Integration mit Unternehmenssystemen, Identität, Kanäle, verantwortungsvolle KI, Sicherheit und Governance, wiederverwendbare Komponenten sowie interne und externe Zielgruppen. Danach geht es um Agent-Flows (einschließlich Human-in-the-Loop-Flows, Fehlerbehandlung und Überwachung) und um fortgeschrittenes Erstellen von Themen mit benutzerdefinierten Prompts, HTTP-Anforderungen, generativen Antworten, adaptiven Karten und Variablen.",
          "Der Integrationsbereich nennt konkrete Technologien: Copilot-Connectors, Power-Platform-Connectors und Azure AI Search (auf Deutsch: Azure KI-Suche) für Wissen; Computerverwendung, MCP, benutzerdefinierte Connectors und REST-APIs als Tools; Foundry-Agents, Fabric-Daten-Agents, vorhandene Agents und A2A für Multi-Agent-Lösungen; sowie Azure AI Search mit Foundry, den Foundry-Modellkatalog und Application Insights. Laut Microsoft betreffen die meisten Fragen allgemein verfügbare Funktionen, häufig genutzte Vorschaufunktionen können aber vorkommen. Übersetzte Versionen werden etwa acht Wochen nach der englischen Prüfung aktualisiert.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Eigenen Stand am Studienleitfaden messen",
            body: "Gehen Sie jeden Punkt der offiziellen Liste der gemessenen Fähigkeiten für AB-620 durch und markieren Sie ihn als bekannt, unsicher oder neu. Verwenden Sie die meiste Zeit auf die Integration, die allein bis zu 45 % ausmacht.",
          },
          {
            title: "Eine Copilot-Studio-Umgebung einrichten",
            body: "Nutzen Sie eine Copilot-Studio-Testversion oder eine Entwicklerumgebung sowie ein Azure-Abonnement für Azure AI Search, Foundry und Application Insights. Behalten Sie die Azure-Kosten außerhalb der kostenlosen Tarife im Blick.",
          },
          {
            title: "Einen Agent mit echten Integrationen bauen",
            body: "Erstellen Sie einen Agent mit generativer Orchestrierung, fügen Sie einen Power-Platform-Connector, ein REST-API-Tool aus einer OpenAPI-Datei und einen MCP-Server hinzu und verankern Sie ihn (Grounding) mit Quellenangaben in einem Azure-AI-Search-Index.",
          },
          {
            title: "Flows, Themen und einen zweiten Agent ergänzen",
            body: "Bauen Sie einen Agent-Flow mit Genehmigungsschritt und Fehlerbehandlung, ein Thema mit adaptiver Karte und HTTP-Anforderung und verbinden Sie einen zweiten Agent. Notieren Sie, welche Multi-Agent-Optionen noch in der Vorschau sind.",
          },
          {
            title: "Sauber evaluieren und bereitstellen",
            body: "Erstellen Sie einen Testsatz, führen Sie mehrere Evaluierungsmethoden aus, legen Sie den Agent in eine Lösung mit Umgebungsvariablen und stellen Sie ihn mit Power-Platform-Pipelines in einer Testumgebung bereit. Verbinden Sie Application Insights und sehen Sie sich die Telemetrie an.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Absolvieren Sie Übungsprüfungen auf Zeit (120 Minuten), lesen Sie jede Erklärung und nutzen Sie die kostenlose Übungsbewertung (Practice Assessment) von Microsoft. Buchen Sie, wenn Ihre Ergebnisse stabil sind, und planen Sie die kostenlose jährliche Verlängerungsbewertung ein.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Nur auf Maker-Niveau lernen. AB-620 erwartet Integrationen mit APIs, MCP, Azure und anderen Agents, nicht nur Wissensquellen und einfache Themen.",
          "Erweiterungsoptionen verwechseln. Sie sollten wissen, wann ein Connector, ein benutzerdefinierter Connector, ein REST-API-Tool, ein MCP-Server, ein HTTP-Anforderungsknoten oder Computerverwendung passt.",
          "Grenzen der Vorschau ignorieren. Mehrere Multi-Agent-Integrationen sind in der Vorschau und haben dokumentierte Einschränkungen, die Designentscheidungen beeinflussen.",
          "Evaluierung als optional ansehen. Testsätze, Evaluierungsmethoden und das Auswerten der Ergebnisse gehören zur Gliederung, und jede Methode braucht die passenden erwarteten Werte.",
          "Außerhalb von Lösungen bauen. ALM-Fragen setzen voraus, dass Agents in Lösungen mit Umgebungsvariablen liegen und über Pipelines bereitgestellt werden.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die AB-620-Prüfung, und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 120 Minuten Zeit. Microsoft verlangt zum Bestehen 700 oder mehr. Die genaue Fragenzahl für AB-620 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Wie lauten die offiziellen Namen der AB-620-Prüfung und der Zertifizierung?",
        answer:
          "Die Prüfung heißt „Designing and Building Integrated AI Agent Solutions in Copilot Studio“ und führt zur Zertifizierung Microsoft Certified: AI Agent Builder Associate. „Copilot Studio AI Agent Builder“ ist eine gängige Kurzbeschreibung, nicht der offizielle Name.",
      },
      {
        question: "Wie verlängere ich die Zertifizierung AI Agent Builder Associate?",
        answer:
          "Microsoft-Associate-Zertifizierungen laufen jährlich ab. Sie verlängern kostenlos, indem Sie innerhalb des sechsmonatigen Verlängerungszeitraums vor Ablauf der Zertifizierung eine Online-Bewertung auf Microsoft Learn bestehen.",
      },
      {
        question: "In welchen Sprachen wird AB-620 angeboten?",
        answer:
          "Englisch, Arabisch (Saudi-Arabien), Chinesisch (vereinfacht), Chinesisch (traditionell), Französisch, Deutsch, Indonesisch (Indonesien), Italienisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Russisch und Spanisch. Ist die Prüfung nicht in Ihrer bevorzugten Sprache verfügbar, können Sie 30 zusätzliche Minuten beantragen.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. AB-620 wird auch auf Deutsch angeboten. Laut Microsoft werden übersetzte Versionen etwa acht Wochen nach der englischen Fassung aktualisiert.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den von Microsoft veröffentlichten gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AB-620 Prüfungsvorbereitung 2026: AI Agent Builder",
      description:
        "AB-620 Leitfaden auf Deutsch: 120 Minuten, Bestehensgrenze 700, Agent-Flows, MCP- und REST-Tools, Multi-Agent, Evaluierung, ALM und 6-Schritte-Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ───────────────────────────────────────────────────────── */
  questions: {
    slug: "ab-620",
    intro:
      "15 eigene AB-620-Übungsfragen zu den drei Fähigkeitsbereichen des Microsoft-Studienleitfadens, ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Antwort, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "AB-620 Übungsfragen mit Antworten und Erklärungen (2026)",
      description:
        "15 kostenlose, eigene AB-620 Übungsfragen zu Copilot Studio: Agent-Flows, Themen, MCP- und REST-Tools, Multi-Agent-Lösungen, Evaluierung und ALM.",
    },
    questions: [
      /* ── Bereich 1: Planen und Konfigurieren von Agentlösungen ───────────── */
      {
        id: "ab620-d1-identity-teams",
        domain: "d1",
        objective: "Planen der Identitätsstrategie",
        difficulty: "foundation",
        question:
          "Ein interner HR-Agent wird nur über den integrierten Kanal Teams und Microsoft 365 veröffentlicht. Mitarbeitende müssen angemeldet sein, und Sie möchten die Authentifizierung mit Microsoft Entra ID ohne manuelle App-Registrierung einrichten. Welche Authentifizierungsoption sollten Sie wählen?",
        options: [
          { id: "A", text: "No authentication", rationale: "Jeder mit dem Link könnte den Agent nutzen, und Sie wüssten nicht, wer der Benutzer ist." },
          { id: "B", text: "Authenticate manually", rationale: "Die manuelle Authentifizierung ist für Kanäle und Identitätsanbieter gedacht, die eine eigene Konfiguration brauchen; sie bedeutet hier mehr Aufwand als nötig." },
          { id: "C", text: "Authenticate with Microsoft", rationale: "Richtig. Microsoft dokumentiert diese Option für den Kanal Teams und Microsoft 365; sie richtet die Entra-ID-Authentifizierung automatisch ein." },
          { id: "D", text: "Ein API-Schlüssel in einer globalen Variable", rationale: "API-Schlüssel authentifizieren Aufrufe an APIs; sie melden Benutzer nicht bei einem Agent an." },
        ],
        answer: "C",
        explanation:
          "Copilot Studio bietet No authentication, Authenticate with Microsoft und Authenticate manually. Wählen Sie die einfachste Option, die die Anforderungen an Kanal und Identität erfüllt; die manuelle Authentifizierung ist für andere Kanäle oder benutzerdefinierte Identitätsanbieter gedacht.",
        reference: { label: "Microsoft Learn — Benutzerauthentifizierung in Copilot Studio konfigurieren", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/configuration-end-user-authentication" },
      },
      {
        id: "ab620-d1-hitl-approval",
        domain: "d1",
        objective: "Erstellen eines Mensch-in-der-Schleife-Agentenflusses (Create a human-in-the-loop agent flow)",
        difficulty: "intermediate",
        question:
          "Ein Agent-Flow verarbeitet Lieferantenrechnungen. Rechnungen über einem Schwellenwert müssen zuerst von einem KI-Modell bewertet und dann von einer Finanzmanagerin oder einem Finanzmanager genehmigt werden, bevor die Zahlung fortgesetzt wird. Welche Aktion passt am besten?",
        options: [
          { id: "A", text: "Eine mehrstufige Genehmigung mit einer KI-Stufe, gefolgt von einer manuellen Stufe", rationale: "Richtig. Mehrstufige Genehmigungen in Agent-Flows kombinieren KI-Stufen, manuelle Stufen und Bedingungen, und der Flow wartet, bis die Genehmigung abgeschlossen ist." },
          { id: "B", text: "Ein Knoten „HTTP-Anforderung senden“ (Send HTTP request) in einem Thema", rationale: "Damit wird aus einem Thema eine API aufgerufen; es gibt keinen Genehmigungsprozess und kein Warten auf eine menschliche Entscheidung." },
          { id: "C", text: "Ein Knoten für generative Antworten, verankert in der Rechnungsrichtlinie", rationale: "Generative Antworten erzeugen Antworten aus Wissen; sie holen keine Genehmigung einer Führungskraft ein." },
          { id: "D", text: "Eine geplante Aktualisierung der Wissensquelle", rationale: "Das Aktualisieren von Wissen hat nichts mit der Genehmigung einer Rechnung zu tun." },
        ],
        answer: "A",
        explanation:
          "Human-in-the-Loop-Flows halten für die Entscheidung einer Person an. Eine mehrstufige Genehmigung kann eine KI-Entscheidung an eine prüfende Person weiterleiten, und Genehmigende können in Teams, Outlook oder im Power-Automate-Portal antworten. Mehrstufige und KI-Genehmigungen sind derzeit in der Vorschau.",
        reference: { label: "Microsoft Learn — Mehrstufige und KI-Genehmigungen in Agent-Flows", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/flows-advanced-approvals" },
      },
      {
        id: "ab620-d1-http-node",
        domain: "d1",
        objective: "Konfigurieren erweiterter Agent-Antworten mit API- und Senden von HTTP-Anforderungen (Configure advanced agent responses with API and Send HTTP requests)",
        difficulty: "intermediate",
        question:
          "In einem Thema rufen Sie mit dem Knoten „HTTP-Anforderung senden“ (Send HTTP request) eine externe Bestell-API auf. Spätere Knoten sollen Felder aus der JSON-Antwort mit IntelliSense im Power-Fx-Editor nutzen können. Was sollten Sie tun?",
        options: [
          { id: "A", text: "Den Body auf „Rohinhalt“ (Raw content) setzen", rationale: "Die Body-Einstellung steuert, was Sie senden, nicht wie die Antwort typisiert wird." },
          { id: "B", text: "Die Antwort als Zeichenfolge speichern und mit einem benutzerdefinierten Prompt parsen", rationale: "Das fügt einen unnötigen Modellaufruf hinzu und verliert die typisierte Struktur." },
          { id: "C", text: "Einen Authorization-Header hinzufügen", rationale: "Header können für die Authentifizierung nötig sein, sie typisieren aber nicht die Antwort." },
          { id: "D", text: "Das Antwortschema aus Beispiel-JSON generieren und die Antwort in einer Variable speichern", rationale: "Richtig. „Schema aus Beispiel-JSON abrufen“ (Get schema from sample JSON) erstellt eine typisierte Power-Fx-Variable, die spätere Knoten nutzen können." },
        ],
        answer: "D",
        explanation:
          "Der Knoten „HTTP-Anforderung senden“ (Send HTTP request) unterstützt GET, POST, PATCH, PUT und DELETE, benutzerdefinierte Header sowie JSON- oder Raw-Bodys. Eine Beispielantwort macht aus dem Ergebnis eine strukturierte Variable statt reinem Text.",
        reference: { label: "Microsoft Learn — HTTP-Anforderungen in Copilot Studio", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/authoring-http-node" },
      },
      {
        id: "ab620-d1-adaptive-card",
        domain: "d1",
        objective: "Konfigurieren adaptiver Karten",
        difficulty: "foundation",
        question:
          "Ein Thema soll Reisedatum, Reiseziel und Kostenstelle in einem Schritt mit einer einzigen Submit-Schaltfläche abfragen und jeden Wert für spätere Knoten speichern. Was sollten Sie hinzufügen?",
        options: [
          { id: "A", text: "Drei separate Message-Knoten", rationale: "Message-Knoten zeigen Informationen an; sie fragen keine Eingaben ab." },
          { id: "B", text: "Einen Adaptive-Card-Knoten mit drei Eingabefeldern und einer Submit-Aktion", rationale: "Richtig. Der Adaptive-Card-Knoten zeigt eine interaktive Karte an und erstellt Ausgabevariablen für ihre Eingaben, die beim Absenden durch den Benutzer gefüllt werden." },
          { id: "C", text: "Einen Knoten für generative Antworten", rationale: "Generative Antworten antworten aus Wissensquellen; sie zeigen kein Formular an." },
          { id: "D", text: "Eine globale Variable mit einem Standardwert", rationale: "Eine Variable speichert Werte, fragt sie aber nicht beim Benutzer ab." },
        ],
        answer: "B",
        explanation:
          "Verwenden Sie den Adaptive-Card-Knoten für interaktive Karten, die eine Übermittlung erwarten. Für Karten, die nur Informationen anzeigen, nutzen Sie Message- oder Question-Knoten; prüfen Sie die erzeugten Ausgabevariablen mit Edit Schema.",
        reference: { label: "Microsoft Learn — Mit adaptiven Karten fragen", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/authoring-ask-with-adaptive-card" },
      },
      {
        id: "ab620-d1-variables",
        domain: "d1",
        objective: "Verwalten von Variablen",
        difficulty: "intermediate",
        question:
          "Mehrere Themen benötigen die Kontonummer des Kunden, sobald sie in einem Anmeldethema erfasst wurde. Außerdem muss sich die Basis-URL der API zwischen Entwicklungs-, Test- und Produktionsumgebung unterscheiden, ohne dass der Agent bearbeitet wird. Welche Kombination passt?",
        options: [
          { id: "A", text: "Eine globale Variable für die Kontonummer und eine Power-Platform-Umgebungsvariable für die Basis-URL der API", rationale: "Richtig. Globale Variablen sind in allen Themen verfügbar; Umgebungsvariablen enthalten Werte pro Umgebung und sind in Copilot Studio schreibgeschützt." },
          { id: "B", text: "Themenvariablen für beide Werte", rationale: "Themenvariablen sind nur in dem Thema verfügbar, das sie erstellt." },
          { id: "C", text: "Eine Systemvariable für die Kontonummer", rationale: "Systemvariablen sind integriert und enthalten Kontext zur Unterhaltung oder zum Benutzer; sie sind nicht dafür gedacht, eigene Werte wie eine Kontonummer zu speichern." },
          { id: "D", text: "Die Basis-URL der API in jedem HTTP-Knoten fest eintragen", rationale: "Das erfordert nach jeder Bereitstellung eine Bearbeitung des Agents, was die Anforderung ausschließt." },
        ],
        answer: "A",
        explanation:
          "Copilot Studio kennt Themen-, globale, System- und Umgebungsvariablen. Umgebungsvariablen werden in Power Platform festgelegt und mit Lösungen transportiert, sodass jede Umgebung ihren eigenen Wert haben kann.",
        reference: { label: "Microsoft Learn — Mit Variablen in Copilot Studio arbeiten", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/authoring-variables-about" },
      },

      /* ── Bereich 2: Integrieren und Erweitern von Agents in Copilot Studio ── */
      {
        id: "ab620-d2-mcp",
        domain: "d2",
        objective: "Konfigurieren von MCP-Tools",
        difficulty: "intermediate",
        question:
          "Ihr Unternehmen betreibt einen MCP-Server, der Tools und Prompt-Vorlagen für sein Ticketsystem bereitstellt. Sie verbinden ihn mit einem Copilot-Studio-Agent. Welche Aussage ist richtig?",
        options: [
          { id: "A", text: "Jedes Tool muss manuell neu importiert werden, sobald der Server ein Tool hinzufügt", rationale: "Vom Server veröffentlichte Tools stehen automatisch zur Verfügung, und Änderungen auf dem Server werden dynamisch übernommen." },
          { id: "B", text: "MCP funktioniert nur mit klassischer Orchestrierung", rationale: "Für MCP muss die generative Orchestrierung aktiviert sein." },
          { id: "C", text: "Der Agent kann alle drei MCP-Primitive nutzen, einschließlich der Prompt-Vorlagen", rationale: "Copilot Studio unterstützt derzeit MCP-Tools und -Ressourcen, keine Prompts." },
          { id: "D", text: "Der Agent kann die Tools und Ressourcen des Servers nutzen, und die generative Orchestrierung muss aktiviert sein", rationale: "Richtig. Copilot Studio unterstützt MCP-Tools und -Ressourcen und braucht dafür die generative Orchestrierung." },
        ],
        answer: "D",
        explanation:
          "MCP definiert Ressourcen, Tools und Prompts. Copilot Studio nutzt Tools und Ressourcen; der Server liefert Namen, Beschreibungen, Ein- und Ausgaben, sodass der Orchestrator entscheiden kann, wann er welches Tool aufruft.",
        reference: { label: "Microsoft Learn — Agent mit Model Context Protocol erweitern", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/agent-extend-action-mcp" },
      },
      {
        id: "ab620-d2-rest-api",
        domain: "d2",
        objective: "Hinzufügen von REST-APIs zu einem Agent",
        difficulty: "intermediate",
        question:
          "Sie möchten die REST-API eines Partners als Tool zu einem Agent hinzufügen. Der Partner stellt eine OpenAPI-3.0-Spezifikation bereit. Was passiert, wenn Sie sie hochladen?",
        options: [
          { id: "A", text: "Der Upload wird abgelehnt; Sie müssen zuerst einen benutzerdefinierten Connector erstellen", rationale: "Für ein REST-API-Tool ist kein benutzerdefinierter Connector nötig, und v3-Spezifikationen werden akzeptiert." },
          { id: "B", text: "Copilot Studio übersetzt sie automatisch in eine OpenAPI-v2-Spezifikation", rationale: "Richtig. REST-API-Tools werden aus OpenAPI v2 erstellt; eine v3-Spezifikation wird automatisch übersetzt." },
          { id: "C", text: "Copilot Studio erstellt daraus einen MCP-Server", rationale: "Das Hochladen einer Spezifikation erstellt ein REST-API-Tool, keinen MCP-Server." },
          { id: "D", text: "Es können nur APIs ohne Authentifizierung hinzugefügt werden", rationale: "REST-API-Tools unterstützen die Optionen ohne Authentifizierung, API-Schlüssel und OAuth 2.0." },
        ],
        answer: "B",
        explanation:
          "Um ein REST-API-Tool hinzuzufügen, brauchen Sie die OpenAPI-Spezifikation und die Authentifizierungsdetails. Die v2-Anforderung ergibt sich daraus, wie Power Platform API-Spezifikationen verarbeitet.",
        reference: { label: "Microsoft Learn — REST-API-Tools zu Agents hinzufügen", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/agent-extend-action-rest-api" },
      },
      {
        id: "ab620-d2-computer-use",
        domain: "d2",
        objective: "Konfigurieren und Überwachen der Computerverwendung für einen Agent",
        difficulty: "intermediate",
        question:
          "Ein Agent soll Schadensmeldungen in eine ältere Windows-Desktopanwendung eingeben, die weder API noch Connector hat. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Einen Knoten „HTTP-Anforderung senden“ (Send HTTP request), der auf die ausführbare Datei der Anwendung zeigt", rationale: "HTTP-Anforderungen rufen Web-APIs auf; die Anwendung hat keine." },
          { id: "B", text: "Azure AI Search als Wissensquelle", rationale: "Wissensquellen dienen dem Grounding von Antworten; sie können keine Anwendung bedienen." },
          { id: "C", text: "Das Tool für Computerverwendung (Computer Use) auf einem dafür eingerichteten Windows-Rechner, mit aktivierter generativer Orchestrierung", rationale: "Richtig. Computerverwendung bedient Websites und Desktop-Apps mit virtueller Maus und Tastatur, wenn keine API vorhanden ist." },
          { id: "D", text: "Einen Fabric-Daten-Agent", rationale: "Fabric-Daten-Agents beantworten Fragen zu Fabric-Daten; sie bedienen keine Desktopanwendungen." },
        ],
        answer: "C",
        explanation:
          "Computerverwendung läuft auf einem Windows-Rechner, den Sie einrichten und im Tool auswählen. Beim Testen sehen Sie ein schrittweises Protokoll und eine Vorschau des Rechners; in Unterhaltungen teilt das Tool Begründungsnachrichten und Screenshots.",
        reference: { label: "Microsoft Learn — Computerverwendung in Copilot Studio", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/computer-use" },
      },
      {
        id: "ab620-d2-azure-ai-search",
        domain: "d2",
        objective: "Herstellen einer Verbindung mit Azure KI-Suche",
        difficulty: "advanced",
        question:
          "Sie fügen einen Azure-AI-Search-Index als Wissensquelle hinzu und möchten, dass Antworten Quellenangaben mit Links zu den Originaldokumenten zeigen. Was sollte der Index enthalten?",
        options: [
          { id: "A", text: "Ein Feld mit der vollständigen URL jedes Dokuments, zum Beispiel metadata_storage_path", rationale: "Richtig. Copilot Studio verwendet metadata_storage_path als Quellenangabe, falls vorhanden, andernfalls ein Feld mit einer vollständigen URL." },
          { id: "B", text: "Einen Vektorindex pro Dokumenttyp", rationale: "Es kann nur ein Vektorindex hinzugefügt werden, und mehrere Indizes erzeugen keine Quellenangaben." },
          { id: "C", text: "Den Administratorschlüssel in einem Dokumentfeld", rationale: "Schlüssel gehören in die Datenverbindung, niemals in den Indexinhalt." },
          { id: "D", text: "Nur eine Konfiguration des semantischen Rankers", rationale: "Der semantische Ranker verbessert die Relevanz, liefert aber keine Links für Quellenangaben." },
        ],
        answer: "A",
        explanation:
          "Azure AI Search muss über eine formelle Datenverbindung hinzugefügt werden, zum Beispiel mit Microsoft-Entra-ID-Authentifizierung. Quellenangaben brauchen ein URL-Feld im Index, und Benutzer können sie nur öffnen, wenn sie Zugriff auf die zugrunde liegende Quelle haben.",
        reference: { label: "Microsoft Learn — Azure AI Search als Wissensquelle hinzufügen", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/knowledge-azure-ai-search" },
      },
      {
        id: "ab620-d2-a2a",
        domain: "d2",
        objective: "Erstellen einer Multi-Agent-Lösung mithilfe des A2A-Protokolls",
        difficulty: "intermediate",
        question:
          "Ein Logistikpartner stellt einen Agent zur Sendungsverfolgung, der auf einer anderen Plattform gebaut ist, über das Agent2Agent-Protokoll (A2A) bereit. Ihr Copilot-Studio-Agent soll Fragen zur Sendungsverfolgung an ihn delegieren. Was sollten Sie tun?",
        options: [
          { id: "A", text: "Den Partner-Agent als untergeordneten Agent (Child Agent) in Ihrem Copilot-Studio-Agent nachbauen", rationale: "Ein Nachbau dupliziert die Arbeit des Partners; der Agent kann direkt verbunden werden." },
          { id: "B", text: "Die Antworten des Partners in eine Wissensdatei kopieren", rationale: "Statische Dateien können keine Live-Fragen zur Sendungsverfolgung beantworten." },
          { id: "C", text: "Den Partner bitten, seinen Agent in Ihrem Teams-Mandanten zu veröffentlichen", rationale: "Eine Veröffentlichung in Teams macht ihn für Personen verfügbar, nicht als Ihren verbundenen Agent." },
          { id: "D", text: "Ihn als verbundenen Agent hinzufügen, der über das A2A-Protokoll verfügbar ist", rationale: "Richtig. Copilot Studio kann andere Agents, die über A2A verfügbar sind, zu einer Multi-Agent-Lösung hinzufügen." },
        ],
        answer: "D",
        explanation:
          "Copilot Studio kann untergeordnete Agents, andere Copilot-Studio-Agents in der Umgebung, A2A-Agents und (in der Vorschau) Microsoft-Foundry-Agents, Fabric-Daten-Agents und Agents aus dem Microsoft 365 Agents SDK hinzufügen.",
        reference: MULTI_AGENT,
      },
      {
        id: "ab620-d2-fabric-data-agent",
        domain: "d2",
        objective: "Integrieren eines Fabric-Daten-Agents",
        difficulty: "advanced",
        question:
          "Sie verbinden einen Fabric-Daten-Agent mit Ihrem Haupt-Agent in Copilot Studio, damit Benutzer Vertriebsfragen zu einem Lakehouse stellen können. Welche Einschränkung müssen Sie beim Design einplanen?",
        options: [
          { id: "A", text: "Der Haupt-Agent darf nur klassische Themen verwenden", rationale: "Eine solche Anforderung gibt es in der Dokumentation zu verbundenen Agents nicht." },
          { id: "B", text: "Fabric-Daten-Agents können nicht Ziel des Redirect-Knotens eines Themas sein und funktionieren derzeit nicht, wenn der Haupt-Agent in Microsoft Copilot bereitgestellt ist", rationale: "Richtig. Microsoft dokumentiert beide Einschränkungen für Fabric-Daten-Agents, die in Copilot Studio verbunden sind." },
          { id: "C", text: "Der Fabric-Daten-Agent muss als untergeordneter Agent nachgebaut werden", rationale: "Fabric-Daten-Agents werden so verbunden, wie sie sind; sie müssen nicht nachgebaut werden." },
          { id: "D", text: "Fabric-Daten-Agents können Fragen nur auf Englisch beantworten", rationale: "Die Dokumentation nennt keine solche Einschränkung." },
        ],
        answer: "B",
        explanation:
          "Das Verbinden von Foundry-, Fabric- und Microsoft-365-Agents-SDK-Agents ist in der öffentlichen Vorschau. Fabric-Daten-Agents können außerdem nicht in Anweisungen referenziert werden; planen Sie Kanäle und Routing daher um diese Grenzen herum.",
        reference: MULTI_AGENT,
      },
      {
        id: "ab620-d2-app-insights",
        domain: "d2",
        objective: "Überwachen von Agents mithilfe von Application Insights",
        difficulty: "foundation",
        question:
          "Ihr Betriebsteam möchte die Unterhaltungstelemetrie aus Copilot Studio in derselben Azure-Application-Insights-Ressource haben, die es bereits für andere Dienste nutzt. Was tun Sie?",
        options: [
          { id: "A", text: "Die Transkripttabelle jede Nacht aus Dataverse nach Application Insights exportieren", rationale: "Ein manueller Export ist nicht nötig; Copilot Studio kann Telemetrie direkt senden." },
          { id: "B", text: "Den Azure Monitor Agent auf den Geräten der Benutzer installieren", rationale: "Agents auf Geräten erfassen Geräteprotokolle, keine Copilot-Studio-Unterhaltungen." },
          { id: "C", text: "Die Verbindungszeichenfolge von Application Insights in den erweiterten Einstellungen des Agents eintragen", rationale: "Richtig. Der Agent protokolliert dann Telemetrie, die Sie im Bereich Logs abfragen, zum Beispiel in der Tabelle customEvents." },
          { id: "D", text: "Einen MCP-Server für Application Insights hinzufügen", rationale: "MCP erweitert, was der Agent tun kann; so wird keine Telemetrie konfiguriert." },
        ],
        answer: "C",
        explanation:
          "Unter Settings > Advanced fügen Sie die Verbindungszeichenfolge hinzu und können optional Nachrichtendetails und Ereignisse der Knotenausführung protokollieren. Unterhaltungen im Testbereich sind mit designMode gekennzeichnet, sodass Sie sie herausfiltern können.",
        reference: { label: "Microsoft Learn — Telemetrie mit Application Insights erfassen", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry" },
      },

      /* ── Bereich 3: Testen und Verwalten von Agents ──────────────────────── */
      {
        id: "ab620-d3-test-set-import",
        domain: "d3",
        objective: "Testsatz erstellen (Create a test set)",
        difficulty: "foundation",
        question:
          "Sie haben 80 echte Benutzerfragen mit den Antworten, die der Fachbereich erwartet, in einer Tabellenkalkulation. Sie möchten Ihren Agent damit evaluieren. Wie erstellen Sie den Testsatz am schnellsten?",
        options: [
          { id: "A", text: "Sie als CSV-Datei mit den Überschriften Question und Expected response speichern und importieren", rationale: "Richtig. Importierte Testsätze verwenden eine CSV- oder Textdatei mit diesen Überschriften, mit bis zu 100 Fragen." },
          { id: "B", text: "Jede Frage in den Testchat eingeben und auf Fehler warten", rationale: "Manuelles Chatten ergibt keinen wiederholbaren Testsatz mit erwarteten Antworten." },
          { id: "C", text: "Fragen aus den Themen des Agents generieren", rationale: "Generierte Fragen wären nicht Ihre 80 echten Fragen mit den erwarteten Antworten." },
          { id: "D", text: "Die Tabellenkalkulation als Wissensquelle hochladen", rationale: "Damit würden die Inhalte dem Wissen des Agents hinzugefügt, statt ihn zu testen." },
        ],
        answer: "A",
        explanation:
          "Testsätze können aus Wissen oder Themen generiert, aus dem letzten Testchat erstellt, manuell geschrieben oder importiert werden. Erwartete Antworten sind beim Import optional, werden aber für vergleichsbasierte Testmethoden benötigt.",
        reference: { label: "Microsoft Learn — Testsatz erstellen", url: "https://learn.microsoft.com/de-de/microsoft-copilot-studio/analytics-agent-evaluation-create" },
      },
      {
        id: "ab620-d3-evaluation-method",
        domain: "d3",
        objective: "Auswählen einer Auswertungsmethode",
        difficulty: "intermediate",
        question:
          "Die Antworten Ihres Agents dürfen anders formuliert sein als die erwarteten Antworten, solange sie dasselbe aussagen. Welche Testmethode sollten Sie wählen?",
        options: [
          { id: "A", text: "Exact match", rationale: "Exact match (Genaue Übereinstimmung) lässt jede Antwort durchfallen, die nicht Wort für Wort identisch ist." },
          { id: "B", text: "Keyword match", rationale: "Keyword match (Schlüsselwort-Übereinstimmung) prüft bestimmte Wörter oder Ausdrücke, nicht die Gesamtbedeutung." },
          { id: "C", text: "Tool use", rationale: "Tool use (Werkzeuggebrauch) prüft, ob die erwarteten Tools oder Themen verwendet wurden, nicht den Inhalt der Antwort." },
          { id: "D", text: "Compare meaning", rationale: "Richtig. Compare meaning (Bedeutung vergleichen) bewertet, wie gut die Bedeutung der Antwort mit der erwarteten Antwort übereinstimmt." },
        ],
        answer: "D",
        explanation:
          "Copilot Studio bietet die Methoden General quality, Content safety, Compare meaning, Tool use, Keyword match, Text similarity, Exact match und benutzerdefinierte Methoden. Methoden, die mit einem erwarteten Wert vergleichen, liefern ein ungültiges Ergebnis (Invalid), wenn dieser Wert fehlt.",
        reference: EVALUATION,
      },
      {
        id: "ab620-d3-pipelines",
        domain: "d3",
        objective: "Implementieren und Erweitern der Microsoft Power Platform Pipelines",
        difficulty: "advanced",
        question:
          "Sie verwenden Power-Platform-Pipelines, um eine Lösung mit Ihrem Agent von der Entwicklung in Test und Produktion zu übertragen. Welche Aussage ist richtig?",
        options: [
          { id: "A", text: "Pipelines stellen die Lösung zusammen mit den Daten ihrer Dataverse-Tabellen bereit", rationale: "Pipelines und Lösungen enthalten keine Daten, die in Dataverse-Tabellen gespeichert sind." },
          { id: "B", text: "Die Entwicklungsumgebung muss der Pipelines-Host sein", rationale: "Dieselbe Umgebung als Entwicklungsumgebung und als Host zu verwenden, wird nicht unterstützt." },
          { id: "C", text: "Test- und Produktionsziele müssen verwaltete Umgebungen sein, und Microsoft empfiehlt, dort verwaltete Lösungen bereitzustellen", rationale: "Richtig. Alle Nicht-Entwicklerumgebungen in Pipelines müssen verwaltete Umgebungen sein, und für Ziele außerhalb der Entwicklung werden verwaltete Lösungen empfohlen." },
          { id: "D", text: "Pipelines lassen sich nicht anpassen", rationale: "Pipelines lassen sich mit Erweiterungs-Hooks, Power Automate und der Integration mit anderen CI/CD-Tools erweitern." },
        ],
        answer: "C",
        explanation:
          "Pipelines stellen Lösungen samt Konfiguration wie Verbindungsreferenzen und Umgebungsvariablen bereit. Legen Sie Agents von Anfang an in Lösungen an, damit ALM, Umgebungsvariablen und Pipelines wie vorgesehen funktionieren.",
        reference: { label: "Microsoft Learn — Übersicht über Pipelines in Power Platform", url: "https://learn.microsoft.com/de-de/power-platform/alm/pipelines" },
      },
    ],
  },
};
