import type { DeContent } from "@/config/types";

/**
 * German edition of the AI-200 exam guide and free practice questions.
 * Faithful translation of src/content/guides/ai-200.ts and
 * src/content/practice-questions/ai-200.ts. Exam facts match the verified
 * `exam` record in src/config/certifications.ts (weight of d2 deliberately
 * left out, as there). Domain and objective names follow the official German
 * (de-de) AI-200 study guide on Microsoft Learn, with spelling normalised
 * (hyphenation, grammar, product names kept in English). The German study
 * guide had not yet been updated to the 7 October 2026 version when checked
 * (28 Oct 2026), so the reference points to the current English study guide.
 */
const GUIDE = {
  label: "Microsoft Learn — AI-200-Studienleitfaden (englisch)",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200",
};

export const ai200De: DeContent = {
  slug: "ai-200",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; übersetzte Fassungen werden etwa acht Wochen nach der englischen Version aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "AI-200" },
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
        "Keine formalen Voraussetzungen. Microsoft erwartet sichere Kenntnisse in Python, Azure SDKs, Azure-Datenverwaltungsdiensten, Vektordatenbanken, Messaging und Eventing, Überwachung sowie containerisierten Anwendungen. Verlängerung alle 12 Monate über eine kostenlose Onlinebewertung auf Microsoft Learn.",
    },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 7. Oktober 2026" },
  ],
  domains: [
    {
      id: "d1",
      name: "Entwickeln von containerisierten Lösungen für Azure",
      weight: "20–25 %",
      objectives: ["Implementieren des Containeranwendungshostings", "Implementieren von container-orchestrierten Lösungen"],
    },
    {
      id: "d2",
      name: "Entwickeln von KI-Lösungen mithilfe von Azure-Datenverwaltungsdiensten",
      objectives: [
        "Entwickeln von KI-Lösungen mithilfe von Azure Cosmos DB for NoSQL",
        "Entwickeln von KI-Lösungen mithilfe von Azure Database for PostgreSQL",
        "Integrieren von Azure Managed Redis in KI-Lösungen",
      ],
    },
    {
      id: "d3",
      name: "Verbindung zu Azure-Diensten herstellen und nutzen",
      weight: "20–25 %",
      objectives: [
        "Entwickeln von ereignis- und nachrichtenbasierten KI-Lösungen",
        "Entwickeln und Implementieren von Azure Functions",
      ],
    },
    {
      id: "d4",
      name: "Sichern, Überwachen und Beheben von Azure-Lösungen",
      weight: "20–25 %",
      objectives: ["Implementieren sicherer Azure-Lösungen", "Überwachen und Beheben von Azure-Lösungen"],
    },
  ],

  /* ── Leitfaden ──────────────────────────────────────────────────────────── */
  guide: {
    slug: "ai-200",
    summary:
      "AI-200 (Developing AI Cloud Solutions on Azure) führt zur Zertifizierung Microsoft Certified: Azure AI Cloud Developer Associate und deckt das Back-End von KI-Lösungen ab: Container, vektorfähige Datendienste, Messaging, Functions, Sicherheit und Überwachung. Microsoft hat AZ-204 (Azure Developer Associate) am 31. Juli 2026 eingestellt. AI-200 dauert 120 Minuten, zum Bestehen brauchen Sie 700 Punkte, und die Liste der gemessenen Fähigkeiten wurde zuletzt am 7. Oktober 2026 aktualisiert.",
    whoFor: [
      "Back-End- und Cloud-Entwicklerinnen und -Entwickler, die die Dienste hinter KI-Anwendungen in Azure entwickeln, überwiegend mit Python",
      "Entwicklerinnen und Entwickler, die sich auf AZ-204 vorbereitet haben oder die Zertifizierung besitzen und die aktuelle Developer-Associate-Zertifizierung anstreben",
      "Engineers, die Cosmos DB, PostgreSQL oder Redis als Vektorspeicher für Retrieval-Augmented Generation (RAG) nutzen",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was AI-200 tatsächlich prüft",
        paragraphs: [
          "AI-200 hat vier Fähigkeitsbereiche: Entwickeln containerisierter Lösungen (20–25 %), Entwickeln von KI-Lösungen mit Azure-Datenverwaltungsdiensten, Verbinden mit und Nutzen von Azure-Diensten (20–25 %) sowie Sichern, Überwachen und Beheben von Problemen in Azure-Lösungen (20–25 %). Für den Datenbereich zeigt der aktuelle englische Studienleitfaden in der Übersicht 30–35 % und in der Abschnittsüberschrift 25–30 %; laut Änderungsprotokoll wurde sein Prüfungsanteil am 7. Oktober 2026 erhöht. Prüfen Sie den Studienleitfaden vor Ihrer Prüfung noch einmal, falls Microsoft eine der beiden Angaben korrigiert.",
          "Dies ist keine Prüfung zum Erstellen von Modellen. Der KI-Teil betrifft die Daten und die Infrastruktur, die eine KI-Anwendung braucht: Embeddings speichern und Vektorähnlichkeitssuchen in Cosmos DB for NoSQL, Azure Database for PostgreSQL mit pgvector und Azure Managed Redis ausführen, RAG mit Metadatenfiltern sowie die Container, Warteschlangen, Ereignisse und Funktionen drumherum. Microsoft erwartet sichere Kenntnisse in Python, Azure SDKs, Vektordatenbanken und containerisierten Anwendungen.",
        ],
      },
      {
        id: "az-204-vs-ai-200",
        heading: "AI-200 und die eingestellte AZ-204",
        paragraphs: [
          "Microsoft führt AZ-204 (Microsoft Certified: Azure Developer Associate) in der Liste der eingestellten Prüfungen mit dem 31. Juli 2026. Wenn Sie die Zertifizierung bereits erworben haben, bleibt sie in Ihrem Microsoft-Learn-Transkript, Sie können sie aber nicht mehr verlängern. AI-200 ist die Developer-Associate-Prüfung, die jetzt ähnliche Themen abdeckt.",
          "Im Vergleich zu AZ-204 hat sich das Gewicht in Richtung Datendienste mit Vektorsuche, Container (Container Registry Tasks, Container Apps mit KEDA-Skalierung, AKS) und Observability mit OpenTelemetry und KQL verschoben. Messaging (Service Bus, Event Grid), Azure Functions, Key Vault und App Configuration bleiben. Am 7. Oktober 2026 hat sich nur der Bereich Datenverwaltung geändert (sein Gewicht wurde erhöht); seine drei Unterbereiche sind unverändert. Übersetzte Fassungen werden etwa acht Wochen nach der englischen Prüfung aktualisiert.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Eigenen Stand am Studienleitfaden messen",
            body: "Gehen Sie jeden Punkt der offiziellen AI-200-Fähigkeitenliste durch und markieren Sie ihn als bekannt, unsicher oder neu. Wer von AZ-204 kommt, findet meist die Punkte zu Vektorsuche und Container-Orchestrierung am neuesten.",
          },
          {
            title: "Ein kleines RAG-Back-End von Anfang bis Ende bauen",
            body: "Speichern Sie Embeddings in Cosmos DB for NoSQL und in PostgreSQL mit pgvector, führen Sie in beiden eine Ähnlichkeitsabfrage aus und ergänzen Sie Azure Managed Redis als Cache. Wenn Sie das einmal gemacht haben, werden Indextypen, Vektorrichtlinien und Konsistenzstufen greifbar.",
          },
          {
            title: "Containerisieren und bereitstellen",
            body: "Erstellen Sie das Image mit ACR Tasks, stellen Sie es in Container Apps mit einer warteschlangenbasierten Skalierungsregel und einer zweiten Revision bereit und probieren Sie dasselbe Image mit einem Manifest auf AKS aus. Üben Sie, Protokolle und Ereignisse zu lesen, wenn etwas nicht startet.",
          },
          {
            title: "Messaging und Functions verbinden",
            body: "Fügen Sie ein Service-Bus-Topic mit Abonnements, ein Event-Grid-Abonnement mit Filtern und eine Azure Function mit Trigger und Bindungen hinzu. Senden Sie absichtlich eine fehlerhafte Nachricht, um die Dead-Letter-Warteschlange in Aktion zu sehen.",
          },
          {
            title: "Absichern und beobachten",
            body: "Verschieben Sie Geheimnisse mit verwalteter Identität in Key Vault, legen Sie Einstellungen und Featureflags in App Configuration ab, instrumentieren Sie die Dienste mit OpenTelemetry und fragen Sie Traces mit KQL in Application Insights ab.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Absolvieren Sie Übungsprüfungen auf Zeit, lesen Sie jede Erklärung und nutzen Sie die kostenlose Übungsbewertung (Practice Assessment) von Microsoft. Buchen Sie, sobald Ihre Ergebnisse stabil sind, und planen Sie die kostenlose jährliche Verlängerungsbewertung ein.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Nur mit AZ-204-Material lernen. Vieles davon hilft weiterhin, aber Vektorsuche, Managed Redis, KEDA-Skalierung und OpenTelemetry werden dort nicht in derselben Tiefe behandelt.",
          "„KI“ mit Modelltraining gleichsetzen. AI-200 prüft die Datendienste und die Infrastruktur rund um KI-Anwendungen, nicht das Erstellen oder Feinabstimmen von Modellen.",
          "Cosmos-DB-Einstellungen verwechseln. Indizierungsrichtlinie, Vektorrichtlinie und Konsistenzstufe lösen jeweils ein anderes Problem, und die RU-Kosten eines Lesevorgangs hängen von der Konsistenzstufe ab.",
          "Warteschlangen mit Topics und Event Grid mit Service Bus verwechseln. Sie sollten wissen, welcher Dienst Befehle transportiert und welcher auf Ereignisse reagiert, und wie Wiederholungsversuche und Dead-Lettering jeweils funktionieren.",
          "Geheimnisse am falschen Ort ablegen. Geheimnisse gehören in Key Vault; App Configuration ist für Einstellungen und Featureflags gedacht.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die AI-200-Prüfung, und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 120 Minuten Zeit. Microsoft verlangt zum Bestehen 700 oder mehr Punkte. Microsoft veröffentlicht für AI-200 keine genaue Fragenanzahl; laut Microsoft haben die meisten seiner Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Ersetzt AI-200 die Prüfung AZ-204?",
        answer:
          "AZ-204 und die Zertifizierung Azure Developer Associate wurden am 31. Juli 2026 eingestellt, und AI-200 führt zur neuen Zertifizierung Azure AI Cloud Developer Associate. Die Gliederungen überschneiden sich – Messaging, Functions, Key Vault, Container –, aber AI-200 ergänzt Vektorsuche in Cosmos DB, PostgreSQL und Redis, Container-Orchestrierung und OpenTelemetry. Eine bereits erworbene AZ-204-Zertifizierung bleibt in Ihrem Transkript.",
      },
      {
        question: "Wie verlängere ich die Zertifizierung Azure AI Cloud Developer Associate?",
        answer:
          "Microsoft-Associate-Zertifizierungen laufen jährlich ab. Sie verlängern kostenlos, indem Sie innerhalb des sechsmonatigen Verlängerungszeitraums vor dem Ablauf eine Onlinebewertung auf Microsoft Learn bestehen; damit verlängert sich die Zertifizierung um ein Jahr.",
      },
      {
        question: "In welchen Sprachen gibt es AI-200?",
        answer:
          "Englisch, Arabisch (Saudi-Arabien), Chinesisch (vereinfacht), Chinesisch (traditionell), Französisch, Deutsch, Indonesisch (Indonesien), Italienisch, Japanisch, Koreanisch, Portugiesisch (Brasilien), Russisch und Spanisch. Wenn die Prüfung nicht in Ihrer bevorzugten Sprache verfügbar ist, können Sie 30 Minuten zusätzliche Zeit beantragen.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Microsoft bietet AI-200 unter anderem auf Deutsch an. Übersetzte Fassungen werden etwa acht Wochen nach der englischen Version aktualisiert.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den von Microsoft veröffentlichten gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AI-200 Prüfungsvorbereitung 2026: Azure AI Cloud Developer",
      description:
        "AI-200-Leitfaden auf Deutsch: Fähigkeiten ab 7. Okt. 2026, 120 Minuten, Bestehensgrenze 700, Vektorsuche, Container, Messaging, Sicherheit, Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ───────────────────────────────────────────────────────── */
  questions: {
    slug: "ai-200",
    intro:
      "15 eigene AI-200-Übungsfragen zu den vier Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 7. Oktober 2026), ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Antwort, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "AI-200 Übungsfragen mit Antworten und Erklärungen (2026)",
      description:
        "15 kostenlose, eigene AI-200 Übungsfragen zu Containern, Vektorsuche in Cosmos DB, PostgreSQL und Redis, Messaging, Functions, Key Vault und Monitoring.",
    },
    questions: [
      /* ── Bereich 1: Entwickeln von containerisierten Lösungen für Azure ───── */
      {
        id: "ai200-d1-acr-base-image",
        domain: "d1",
        objective: "Erstellen und Ausführen von Images mithilfe von Azure Container Registry Tasks",
        difficulty: "intermediate",
        question:
          "Ihre Anwendungsimages in Azure Container Registry basieren auf einem gemeinsamen Python-Basisimage. Jedes Mal, wenn das Basisimage gepatcht und in die Registry gepusht wird, müssen alle abhängigen Anwendungsimages automatisch neu erstellt werden. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Einen Webhook in der Registry, der eine E-Mail an das Entwicklungsteam sendet", rationale: "Eine Benachrichtigung setzt weiterhin voraus, dass jemand die Images von Hand neu erstellt." },
          { id: "B", text: "Georeplikation der Registry", rationale: "Georeplikation kopiert Images in andere Regionen; sie erstellt nichts neu." },
          { id: "C", text: "Einen Azure Container Registry Task mit einem Trigger für Basisimage-Updates", rationale: "Richtig. ACR Tasks können die Basisimage-Abhängigkeit eines Anwendungsimages verfolgen und es automatisch neu erstellen, wenn ein aktualisiertes Basisimage gepusht wird." },
          { id: "D", text: "Eine Quick-Task-Ausführung mit az acr build", rationale: "Ein Quick Task erstellt ein Image einmalig bei Bedarf. Er reagiert nicht auf Basisimage-Updates." },
        ],
        answer: "C",
        explanation:
          "ACR Tasks unterstützen drei automatische Trigger: Quellcode-Commits (oder Pull Requests), Basisimage-Updates und Zeitgeber. Basisimage-Trigger sind der Standardweg, Anwendungsimages ohne separate Pipeline gepatcht zu halten.",
        reference: { label: "Microsoft Learn — Übersicht über Azure Container Registry Tasks", url: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview" },
      },
      {
        id: "ai200-d1-keda-service-bus",
        domain: "d1",
        objective: "Implementieren der ereignisgesteuerten Skalierung mithilfe von Kubernetes Event-driven Autoscaling (KEDA) in Container Apps",
        difficulty: "intermediate",
        question:
          "Ein Worker in Azure Container Apps verarbeitet Embedding-Aufträge aus einer Azure-Service-Bus-Warteschlange. Er hat keinen Ingress. Bei leerer Warteschlange sollen keine Replikate laufen, und bei wachsender Nachrichtenzahl sollen Replikate hinzukommen. Was konfigurieren Sie?",
        options: [
          { id: "A", text: "Eine benutzerdefinierte Skalierungsregel vom Typ azure-servicebus mit einer Mindestanzahl von 0 Replikaten", rationale: "Richtig. Container Apps nutzt für benutzerdefinierte Regeln KEDA-Scaler; eine Service-Bus-Regel skaliert nach der Warteschlangenlänge, und ein Minimum von 0 erlaubt das Herunterskalieren auf null." },
          { id: "B", text: "Eine HTTP-Skalierungsregel mit einer Mindestanzahl von 0 Replikaten", rationale: "HTTP-Regeln skalieren nach gleichzeitigen Anfragen. Der Worker hat keinen Ingress, würde also nie Anfragen erhalten und nicht wieder starten." },
          { id: "C", text: "Eine feste Anzahl von 10 Replikaten", rationale: "Damit laufen auch ohne Arbeit zehn Replikate, was der Anforderung widerspricht." },
          { id: "D", text: "Der Modus für mehrere Revisionen mit Aufteilung des Datenverkehrs", rationale: "Der Revisionsmodus steuert, wie Versionen Datenverkehr erhalten, nicht wie Replikate nach der Warteschlangenlänge skalieren." },
        ],
        answer: "A",
        explanation:
          "Container Apps unterstützt HTTP-, TCP- und benutzerdefinierte (KEDA-basierte) Skalierungsregeln. Für Warteschlangen-Worker ohne Ingress verwenden Sie eine ereignisgesteuerte Regel wie azure-servicebus; ohne benutzerdefinierte Regel oder ein Minimum von mindestens einem Replikat kann eine App ohne Ingress auf null skalieren und nie wieder starten.",
        reference: { label: "Microsoft Learn — Festlegen von Skalierungsregeln in Azure Container Apps", url: "https://learn.microsoft.com/en-us/azure/container-apps/scale-app" },
      },
      {
        id: "ai200-d1-revisions",
        domain: "d1",
        objective: "Bereitstellen von Anwendungen für Azure Container Apps, einschließlich Umgebungskonfiguration und Revisionsverwaltung",
        difficulty: "advanced",
        question:
          "Sie möchten 20 % des Produktionsdatenverkehrs an eine neue Version einer API in Azure Container Apps senden und 80 % auf der aktuellen Version lassen, bis Sie sicher sind. Was muss zutreffen?",
        options: [
          { id: "A", text: "Die App nutzt den Modus für einzelne Revisionen, und das neue Image wird mit einem Revisionssuffix bereitgestellt", rationale: "Im Modus für einzelne Revisionen wird der gesamte Datenverkehr auf die neue Revision verlagert, sobald sie bereit ist; zwei aktive Revisionen mit Aufteilung gibt es dort nicht." },
          { id: "B", text: "Die neue Version wird bereitgestellt, indem nur ein Geheimniswert geändert wird", rationale: "Geheimniswerte sind Änderungen im Anwendungsbereich und erzeugen keine neue Revision." },
          { id: "C", text: "Zwei getrennte Container-Apps teilen sich denselben Ingress-Hostnamen", rationale: "Die Aufteilung des Datenverkehrs wird zwischen Revisionen einer Container-App konfiguriert, nicht zwischen getrennten Apps." },
          { id: "D", text: "Die App nutzt den Modus für mehrere Revisionen, und der Datenverkehr wird zwischen den beiden aktiven Revisionen aufgeteilt", rationale: "Richtig. Im Modus für mehrere Revisionen bleiben mehrere Revisionen aktiv, und Sie können jeder einen prozentualen Anteil des Datenverkehrs zuweisen." },
        ],
        answer: "D",
        explanation:
          "Änderungen an der Vorlage, etwa am Containerimage oder an Skalierungsregeln, erzeugen eine neue Revision. Im Modus für mehrere Revisionen entscheiden Sie dann, wie der Datenverkehr aufgeteilt wird, was Canary- und Blue-Green-Releases ermöglicht.",
        reference: { label: "Microsoft Learn — Revisionen in Azure Container Apps", url: "https://learn.microsoft.com/en-us/azure/container-apps/revisions" },
      },

      /* ── Bereich 2: Entwickeln von KI-Lösungen mithilfe von Azure-Datenverwaltungsdiensten ── */
      {
        id: "ai200-d2-cosmos-vector",
        domain: "d2",
        objective: "Speichern und Abrufen von Einbettungen und Ausführen der Vektorähnlichkeitssuche für semantischen Abruf",
        difficulty: "intermediate",
        question:
          "Sie speichern Produktbeschreibungen und deren Embeddings in Azure Cosmos DB for NoSQL. Sie müssen die zehn Elemente zurückgeben, die einem Abfrage-Embedding am ähnlichsten sind. Was brauchen Sie?",
        options: [
          { id: "A", text: "Einen zusammengesetzten Index auf der Embedding-Eigenschaft und ein ORDER BY nach der Element-ID", rationale: "Zusammengesetzte Indizes beschleunigen gewöhnliche Filter und Sortierungen; sie berechnen keine Vektorähnlichkeit." },
          { id: "B", text: "Eine Container-Vektorrichtlinie für den Embedding-Pfad und eine Abfrage mit der Systemfunktion VectorDistance", rationale: "Richtig. Die Vektorrichtlinie teilt der Engine mit, wo die Vektoren liegen, welchen Datentyp und wie viele Dimensionen sie haben und welche Distanzfunktion gilt; VectorDistance berechnet die Ähnlichkeit in der Abfrage." },
          { id: "C", text: "Einen Änderungsfeedprozessor, der jedes neue Embedding mit der Abfrage vergleicht", rationale: "Der Änderungsfeed reagiert auf Einfügungen und Aktualisierungen; er ist kein Abfragemechanismus für die Ähnlichkeitssuche." },
          { id: "D", text: "Starke Konsistenz für das Konto", rationale: "Konsistenzstufen regeln Lesegarantien, nicht die Ähnlichkeitssuche." },
        ],
        answer: "B",
        explanation:
          "Vektorsuche in Cosmos DB for NoSQL braucht eine Vektorrichtlinie auf dem Container, idealerweise einen Vektorindex (flat, quantizedFlat oder diskANN), und eine Abfrage, die nach VectorDistance sortiert. Bestehende Einstellungen der Vektorrichtlinie lassen sich nicht direkt bearbeiten; Sie entfernen sie und fügen sie neu hinzu.",
        reference: { label: "Microsoft Learn — Vektorsuche in Azure Cosmos DB for NoSQL", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search" },
      },
      {
        id: "ai200-d2-cosmos-session",
        domain: "d2",
        objective: "Optimieren der Abfrageperformance und des Verbrauchs von Anforderungseinheiten (RUs) mithilfe von Indizierungsrichtlinien und Konsistenzstufen",
        difficulty: "intermediate",
        question:
          "Eine Chatanwendung speichert den Gesprächsverlauf aller Benutzerinnen und Benutzer in Azure Cosmos DB. Eine Person muss die Nachricht, die sie gerade geschrieben hat, immer sehen; andere Benutzerinnen und Benutzer dürfen sie etwas später sehen. Außerdem sollen die RU-Kosten für Lesevorgänge niedrig bleiben. Welche Konsistenzstufe passt am besten?",
        options: [
          { id: "A", text: "Stark (Strong)", rationale: "Strong erfüllt die Anforderung, aber Lesevorgänge nutzen zwei Replikate und kosten etwa doppelt so viele RUs wie Session-Lesevorgänge." },
          { id: "B", text: "Begrenzte Veraltung (Bounded Staleness)", rationale: "Auch Lesevorgänge mit begrenzter Veraltung nutzen zwei Replikate und kosten daher mehr als Session-Lesevorgänge." },
          { id: "C", text: "Sitzung (Session)", rationale: "Richtig. Sitzungskonsistenz garantiert innerhalb einer Clientsitzung, dass eigene Schreibvorgänge gelesen werden (Read Your Writes), und nutzt Lesevorgänge über ein einzelnes Replikat." },
          { id: "D", text: "Letztlich (Eventual)", rationale: "Eventual ist günstig, garantiert aber nicht, dass eine Person ihren eigenen Schreibvorgang liest." },
        ],
        answer: "C",
        explanation:
          "Sitzungskonsistenz bietet innerhalb einer Sitzung Read Your Writes und Write Follows Reads. Lesevorgänge mit Strong und Bounded Staleness nutzen ein Minderheitsquorum aus zwei Replikaten, sodass ihr Lesedurchsatz bei gleichen RUs nur halb so hoch ist wie bei den schwächeren Stufen.",
        reference: { label: "Microsoft Learn — Konsistenzstufen in Azure Cosmos DB", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels" },
      },
      {
        id: "ai200-d2-change-feed-lease",
        domain: "d2",
        objective: "Implementieren eines Änderungsfeedprozessors zum Erkennen und Verarbeiten neuer oder aktualisierter Elemente",
        difficulty: "foundation",
        question:
          "Sie nutzen den Änderungsfeedprozessor, um Embeddings zu erzeugen, sobald Dokumente in einen Cosmos-DB-Container eingefügt oder dort aktualisiert werden. Mehrere Instanzen des Workers laufen parallel. Was koordiniert, welche Instanz welchen Teil des Feeds verarbeitet, und speichert den Fortschritt?",
        options: [
          { id: "A", text: "Der Leasecontainer", rationale: "Richtig. Der Leasecontainer speichert den Zustand und koordiniert die Verarbeitung über die Worker hinweg, mit einem Lease pro Partitionsschlüsselbereich." },
          { id: "B", text: "Der überwachte Container", rationale: "Der überwachte Container ist die Quelle der Änderungen, nicht der Speicher des Verarbeitungszustands." },
          { id: "C", text: "Der Delegat", rationale: "Der Delegat ist Ihr Code, der jeden Batch von Änderungen verarbeitet; er koordiniert keine Worker." },
          { id: "D", text: "Eine Service-Bus-Dead-Letter-Warteschlange", rationale: "Dead-Letter-Warteschlangen enthalten fehlgeschlagene Nachrichten in Service Bus; sie spielen für den Änderungsfeedprozessor keine Rolle." },
        ],
        answer: "A",
        explanation:
          "Der Änderungsfeedprozessor hat vier Bestandteile: den überwachten Container, den Leasecontainer, die Compute-Instanz und den Delegaten. Leases ermöglichen es den Instanzen, die Arbeit aufzuteilen und nach einem Neustart am letzten Prüfpunkt fortzufahren.",
        reference: { label: "Microsoft Learn — Änderungsfeedprozessor in Azure Cosmos DB", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor" },
      },
      {
        id: "ai200-d2-pgvector-hnsw",
        domain: "d2",
        objective: "Implementieren von Indizierungsstrategien, einschließlich der Optimierung der Abfragelatenz und der Reduzierung des Rechenaufwands von pgvector",
        difficulty: "advanced",
        question:
          "In Azure Database for PostgreSQL legen Sie eine neue, noch leere Tabelle für Dokument-Embeddings an. Sie möchten jetzt einen Index für die ungefähre Nächste-Nachbarn-Suche (Approximate Nearest Neighbour) erstellen, mit dem besten Verhältnis von Geschwindigkeit zu Trefferquote (Recall) bei Abfragen. Welcher pgvector-Indextyp passt?",
        options: [
          { id: "A", text: "Kein Index, damit jede Abfrage eine exakte Suche durchführt", rationale: "Ohne Index führt pgvector eine exakte Suche mit perfektem Recall durch, allerdings auf Kosten der Abfrageleistung." },
          { id: "B", text: "IVFFlat", rationale: "IVFFlat wird schneller erstellt und braucht weniger Arbeitsspeicher, hat aber einen Trainingsschritt auf vorhandenen Daten und ein schlechteres Verhältnis von Geschwindigkeit zu Recall." },
          { id: "C", text: "Ein B-Tree-Index auf der Embedding-Spalte", rationale: "B-Tree-Indizes unterstützen keine Operatoren für Vektorähnlichkeit." },
          { id: "D", text: "HNSW", rationale: "Richtig. HNSW hat ein besseres Verhältnis von Geschwindigkeit zu Recall und keinen Trainingsschritt, kann also auf einer leeren Tabelle erstellt werden; er braucht mehr Erstellungszeit und Arbeitsspeicher." },
        ],
        answer: "D",
        explanation:
          "pgvector bietet exakte Suche ohne Index und ungefähre Suche mit IVFFlat oder HNSW. IVFFlat partitioniert vorhandene Daten mit k-Means und wird daher am besten nach dem Laden der Daten erstellt; HNSW kann von Anfang an erstellt werden.",
        reference: { label: "Microsoft Learn — Optimieren der Leistung bei Verwendung von pgvector", url: "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-optimize-performance-pgvector" },
      },
      {
        id: "ai200-d2-redis-vector",
        domain: "d2",
        objective: "Implementieren der Vektorindizierung zum Aktivieren der Ähnlichkeitssuche",
        difficulty: "advanced",
        question:
          "Sie möchten eine vorhandene Azure-Managed-Redis-Instanz als semantischen Cache mit Vektorähnlichkeitssuche nutzen. Die Instanz wurde ohne Module erstellt. Was müssen Sie tun?",
        options: [
          { id: "A", text: "Das Modul RediSearch über das Azure-Portal in die laufende Instanz laden", rationale: "Module lassen sich nicht manuell in eine vorhandene Azure-Managed-Redis-Instanz laden." },
          { id: "B", text: "Eine neue Instanz erstellen und das Modul RediSearch bei der Erstellung aktivieren", rationale: "Richtig. Module müssen bei der Erstellung der Instanz hinzugefügt werden, und RediSearch stellt die Abfragen für die Vektorähnlichkeit bereit." },
          { id: "C", text: "Für alle zwischengespeicherten Schlüssel eine längere Ablaufzeit festlegen", rationale: "Die Ablaufzeit steuert, wie lange Schlüssel bestehen; sie fügt keine Such- oder Vektorfunktionen hinzu." },
          { id: "D", text: "Die Instanz auf die OSS-Clusteringrichtlinie umstellen", rationale: "RediSearch erfordert die Enterprise-Clusteringrichtlinie, und eine Änderung der Richtlinie fügt kein Modul hinzu." },
        ],
        answer: "B",
        explanation:
          "RediSearch ergänzt Azure Managed Redis um Sekundärindizierung und Vektorähnlichkeitssuche wie KNN. Das Modul muss bei der Erstellung der Instanz ausgewählt werden und erfordert die Enterprise-Clusteringrichtlinie und die Entfernungsrichtlinie NoEviction.",
        reference: { label: "Microsoft Learn — Verwenden von Redis-Modulen mit Azure Managed Redis", url: "https://learn.microsoft.com/en-us/azure/redis/redis-modules" },
      },

      /* ── Bereich 3: Verbindung zu Azure-Diensten herstellen und nutzen ────── */
      {
        id: "ai200-d3-dead-letter",
        domain: "d3",
        objective: "Verarbeitung von Warteschlangen- und Back-End-Vorgängen mithilfe von Azure Service Bus, einschließlich der Verarbeitung von Dead-Letter-Warteschlangen, Nachrichten, Themen und Abonnements",
        difficulty: "intermediate",
        question:
          "Einige Nachrichten in einer Azure-Service-Bus-Warteschlange schlagen wegen fehlerhafter Nutzdaten wiederholt fehl. Nach der standardmäßigen Anzahl von Zustellversuchen verschwinden sie aus der Warteschlange. Wo sind sie, und wie verarbeiten Sie sie?",
        options: [
          { id: "A", text: "Sie wurden gelöscht; erhöhen Sie die Gültigkeitsdauer (Time-to-Live), um sie zu behalten", rationale: "Sie werden nicht gelöscht. Nachrichten, die die maximale Zustellanzahl überschreiten, werden verschoben, nicht verworfen." },
          { id: "B", text: "Sie wurden an Azure Event Grid weitergeleitet; abonnieren Sie das Topic", rationale: "Service Bus leitet fehlgeschlagene Nachrichten nicht an Event Grid weiter." },
          { id: "C", text: "Sie wurden in die Dead-Letter-Unterwarteschlange der Warteschlange verschoben; erstellen Sie einen Empfänger für diese Unterwarteschlange und schließen Sie jede Nachricht nach der Bearbeitung ab", rationale: "Richtig. Nach Überschreiten der maximalen Zustellanzahl (Standard: 10) wird die Nachricht in die Dead-Letter-Warteschlange verschoben, wo sie bleibt, bis sie empfangen und abgeschlossen wird." },
          { id: "D", text: "Sie laufen in der Dead-Letter-Warteschlange nach 24 Stunden automatisch ab", rationale: "Es gibt keine automatische Bereinigung der Dead-Letter-Warteschlange, und die Gültigkeitsdauer wird dort nicht berücksichtigt." },
        ],
        answer: "C",
        explanation:
          "Jede Warteschlange und jedes Abonnement hat eine eigene Dead-Letter-Unterwarteschlange. Mit dem .NET SDK setzen Sie die Empfängeroption SubQueue auf DeadLetter, prüfen DeadLetterReason (zum Beispiel MaxDeliveryCountExceeded) und schließen die Nachricht ab, um sie zu entfernen.",
        reference: { label: "Microsoft Learn — Service-Bus-Dead-Letter-Warteschlangen", url: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues" },
      },
      {
        id: "ai200-d3-event-grid-filter",
        domain: "d3",
        objective: "Implementieren von ereignisgesteuerten Workflows mithilfe von Azure Event Grid, einschließlich Filtern, benutzerdefinierten Ereignissen und Wiederholungen",
        difficulty: "intermediate",
        question:
          "Eine Azure Function soll nur ausgeführt werden, wenn eine neue PDF-Datei in ein Speicherkonto hochgeladen wird – nicht bei Löschvorgängen und nicht für andere Dateitypen. Wie konfigurieren Sie das Event-Grid-Abonnement?",
        options: [
          { id: "A", text: "Nach dem Ereignistyp BlobCreated filtern und einen Betrefffilter „endet mit“ .pdf festlegen", rationale: "Richtig. Die Filterung nach Ereignistyp beschränkt die Zustellung auf Erstellungsereignisse, und der Betrefffilter auf Blobs, deren Name auf .pdf endet." },
          { id: "B", text: "Alle Ereignistypen abonnieren und unerwünschte Ereignisse im Funktionscode verwerfen", rationale: "Das funktioniert, löst die Funktion aber bei jedem Ereignis aus, was die Anforderung vermeiden will." },
          { id: "C", text: "Die Wiederholungsrichtlinie des Abonnements auf null Versuche setzen", rationale: "Wiederholungseinstellungen steuern die erneute Zustellung nach Fehlern, nicht welche Ereignisse gesendet werden." },
          { id: "D", text: "Einen Dead-Letter-Speicherort für unerwünschte Ereignisse verwenden", rationale: "Dead-Lettering speichert Ereignisse, die nicht zugestellt werden konnten; es ist kein Filter." },
        ],
        answer: "A",
        explanation:
          "Event-Grid-Abonnements können nach Ereignistyp, nach Betreff („beginnt mit“ oder „endet mit“) und mit erweiterten Filtern auf Datenfeldern filtern. Die Filterung im Abonnement spart Ausführungen und hält den Handlercode einfach.",
        reference: { label: "Microsoft Learn — Ereignisfilterung in Event Grid", url: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering" },
      },
      {
        id: "ai200-d3-functions-bindings",
        domain: "d3",
        objective: "Erstellen von serverlosen APIs, einschließlich Implementierung von Triggern und Bindungen",
        difficulty: "foundation",
        question:
          "Eine Azure Function muss für jede Nachricht in einer Speicherwarteschlange ausgeführt werden und ein Dokument in Azure Cosmos DB schreiben, ohne Verbindungslogik für einen der beiden Dienste fest zu programmieren. Welches Design ist richtig?",
        options: [
          { id: "A", text: "Zwei Trigger: ein Warteschlangentrigger und ein Cosmos-DB-Trigger", rationale: "Eine Funktion muss genau einen Trigger haben, und ein Cosmos-DB-Trigger reagiert auf Änderungen, statt Dokumente zu schreiben." },
          { id: "B", text: "Ein HTTP-Trigger, der die Warteschlange abfragt und die Cosmos-DB-REST-API aufruft", rationale: "Polling und manuelle API-Aufrufe sind genau der fest programmierte Zugriff, den Bindungen vermeiden." },
          { id: "C", text: "Ein Timertrigger ohne Bindungen", rationale: "Ein Timer läuft nach Zeitplan, nicht pro Nachricht, und ohne Bindungen brauchen Sie weiterhin eigenen Verbindungscode." },
          { id: "D", text: "Ein Warteschlangentrigger mit einer Cosmos-DB-Ausgabebindung", rationale: "Richtig. Der Trigger startet die Funktion für jede Nachricht, und die Ausgabebindung schreibt das Dokument." },
        ],
        answer: "D",
        explanation:
          "Jede Funktion hat genau einen Trigger und beliebig viele optionale Eingabe- und Ausgabebindungen. Bindungen übergeben Daten über Parameter hinein und über Rückgabewerte oder Ausgabeparameter hinaus, sodass Sie keinen dienstspezifischen Verbindungscode schreiben.",
        reference: { label: "Microsoft Learn — Trigger und Bindungen in Azure Functions", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings" },
      },
      {
        id: "ai200-d3-service-bus-topics",
        domain: "d3",
        objective: "Verarbeitung von Warteschlangen- und Back-End-Vorgängen mithilfe von Azure Service Bus, einschließlich der Verarbeitung von Dead-Letter-Warteschlangen, Nachrichten, Themen und Abonnements",
        difficulty: "intermediate",
        question:
          "Wenn eine Bestellung aufgegeben wird, müssen drei unabhängige Back-End-Dienste (Abrechnung, Versand und ein KI-Empfehlungsdienst) jeweils eine eigene Kopie der Bestellnachricht erhalten und sie in ihrem eigenen Tempo verarbeiten. Was sollten Sie verwenden?",
        options: [
          { id: "A", text: "Eine einzelne Service-Bus-Warteschlange, aus der alle drei Dienste lesen", rationale: "Bei einer Warteschlange wird jede Nachricht nur von einem Empfänger verarbeitet, sodass jeder Dienst nur einen Teil der Bestellungen sehen würde." },
          { id: "B", text: "Ein Service-Bus-Topic mit einem Abonnement pro Dienst", rationale: "Richtig. Jedes Abonnement erhält eine eigene Kopie jeder an das Topic gesendeten Nachricht, und jeder Dienst verarbeitet sein Abonnement unabhängig." },
          { id: "C", text: "Drei Azure Functions mit HTTP-Triggern, die nacheinander aufgerufen werden", rationale: "Direkte Aufrufe koppeln die Dienste und verlieren die Pufferung, die Messaging bietet." },
          { id: "D", text: "Ein Featureflag in Azure App Configuration", rationale: "Featureflags schalten Anwendungsverhalten um; sie stellen keine Nachrichten zu." },
        ],
        answer: "B",
        explanation:
          "Warteschlangen sind für die 1:1-Verarbeitung mit konkurrierenden Consumern gedacht; Topics und Abonnements für Publish-Subscribe, bei dem jeder Abonnent eine eigene Kopie erhält. Jedes Abonnement hat außerdem eine eigene Dead-Letter-Unterwarteschlange.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Sichern, Überwachen und Beheben von Azure-Lösungen ────── */
      {
        id: "ai200-d4-key-vault-reference",
        domain: "d4",
        objective: "Sichern von Secrets mithilfe von Azure Key Vault, einschließlich Rotation und Abruf",
        difficulty: "intermediate",
        question:
          "Eine App-Service-App liest ein Datenbankkennwort über einen Key-Vault-Verweis in ihren App-Einstellungen. Das Kennwort wird alle 90 Tage rotiert, und die App muss die neue Version ohne Code- oder Einstellungsänderung übernehmen. Wie sollte der Verweis geschrieben sein?",
        options: [
          { id: "A", text: "Mit dem vollständigen Geheimnis-URI einschließlich der aktuellen Versions-ID", rationale: "Ein versionierter Verweis bleibt an diese Version gebunden und folgt der Rotation nicht." },
          { id: "B", text: "Als Klartextkennwort, das nach jeder Rotation per Skript aktualisiert wird", rationale: "Damit liegt das Geheimnis in den App-Einstellungen und erfordert jedes Mal eine Einstellungsänderung." },
          { id: "C", text: "Als Azure-App-Configuration-Schlüssel mit einer Bezeichnung (Label) pro Version", rationale: "App Configuration ist für nicht geheime Einstellungen und Featureflags gedacht; Geheimnisse gehören in Key Vault." },
          { id: "D", text: "Mit dem Geheimnis-URI ohne Version, wobei die verwaltete Identität der App für den Zugriff genutzt wird", rationale: "Richtig. Ohne Version verwendet die App die neueste Version des Geheimnisses und übernimmt einen rotierten Wert automatisch innerhalb von 24 Stunden." },
        ],
        answer: "D",
        explanation:
          "Key-Vault-Verweise nutzen die verwaltete Identität der App, die Lesezugriff auf Geheimnisse braucht. App Service speichert referenzierte Werte zwischen und ruft sie alle 24 Stunden neu ab; jede Konfigurationsänderung startet die App neu und ruft sie sofort neu ab.",
        reference: { label: "Microsoft Learn — Verwenden von Key-Vault-Verweisen in App Service", url: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references" },
      },
      {
        id: "ai200-d4-app-configuration",
        domain: "d4",
        objective: "Speichern und Abrufen von App-Konfigurationsinformationen mithilfe von Azure App Configuration",
        difficulty: "foundation",
        question:
          "Mehrere Microservices brauchen einen zentralen Ort für gemeinsame, nicht geheime Einstellungen wie Namen von Modellbereitstellungen und Timeouts sowie Featureflags, um eine neue Retrieval-Strategie schrittweise einzuschalten. Welcher Dienst passt?",
        options: [
          { id: "A", text: "Nur Azure Key Vault", rationale: "Key Vault ist für Geheimnisse, Schlüssel und Zertifikate gedacht und hat keine Verwaltung von Featureflags." },
          { id: "B", text: "Azure Monitor", rationale: "Azure Monitor sammelt Telemetrie; es stellt keine Anwendungseinstellungen bereit." },
          { id: "C", text: "Azure App Configuration", rationale: "Richtig. App Configuration verwaltet Anwendungseinstellungen und Featureflags zentral und ergänzt Key Vault, das die Geheimnisse enthält." },
          { id: "D", text: "Umgebungsvariablen, die fest in jedes Containerimage eingebaut sind", rationale: "Fest eingebaute Werte erfordern bei jeder Änderung einen Neubuild und werden nicht zentral geteilt." },
        ],
        answer: "C",
        explanation:
          "Verwenden Sie App Configuration für Einstellungen und Featureflags und Key Vault für Geheimnisse. Bezeichnungen (Labels) in App Configuration helfen, Varianten desselben Schlüssels zu verwalten, zum Beispiel pro Umgebung.",
        reference: { label: "Microsoft Learn — Was ist Azure App Configuration?", url: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview" },
      },
      {
        id: "ai200-d4-opentelemetry",
        domain: "d4",
        objective: "Nachverfolgen verteilter Systeme mithilfe von OpenTelemetry-SDKs",
        difficulty: "intermediate",
        question:
          "Sie instrumentieren eine Python-API und ihren Hintergrund-Worker mit der Microsoft-OpenTelemetry-Distribution, um Traces an Application Insights zu senden. Welchen Weg empfiehlt Microsoft für die Produktion, um das Ziel anzugeben?",
        options: [
          { id: "A", text: "Den Application-Insights-Instrumentierungsschlüssel fest im Quellcode hinterlegen", rationale: "Schlüssel im Quellcode lassen sich schwer rotieren und sind nicht die empfohlene Konfiguration." },
          { id: "B", text: "Die Umgebungsvariable APPLICATIONINSIGHTS_CONNECTION_STRING setzen", rationale: "Richtig. Die Distribution liest die Application-Insights-Verbindungszeichenfolge aus dieser Umgebungsvariablen, was Microsoft für die Produktion empfiehlt." },
          { id: "C", text: "Traces in lokale Protokolldateien schreiben und wöchentlich hochladen", rationale: "Damit geht die verteilte Ablaufverfolgung nahezu in Echtzeit verloren, und so funktioniert der Exporter nicht." },
          { id: "D", text: "Die Verbindungszeichenfolge in einer Service-Bus-Nachricht speichern", rationale: "Service Bus transportiert Anwendungsnachrichten, keine Instrumentierungskonfiguration." },
        ],
        answer: "B",
        explanation:
          "Die OpenTelemetry-Distribution sammelt Traces, Metriken und Protokolle und exportiert sie nach Azure Monitor. Wenn beide Dienste instrumentiert sind, können Sie eine Anfrage über korrelierte Traces durch API und Worker verfolgen und sie anschließend mit KQL analysieren.",
        reference: { label: "Microsoft Learn — Aktivieren von OpenTelemetry in Application Insights", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable" },
      },
    ],
  },
};
