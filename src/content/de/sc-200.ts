import type { DeContent } from "@/config/types";

/**
 * German edition of the SC-200 guide and free practice questions.
 * Faithful translation of src/content/guides/sc-200.ts and
 * src/content/practice-questions/sc-200.ts. Domain and objective names follow
 * the official German Microsoft Learn study guide (de-de).
 */
const GUIDE = {
  label: "Microsoft Learn — Studienleitfaden für SC-200 (englische Fassung)",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200",
};

export const sc200De: DeContent = {
  slug: "sc-200",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; lokalisierte Fassungen werden laut Microsoft etwa acht Wochen nach der englischen Version aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "SC-200" },
    { label: "Dauer", value: "100 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Japanisch, Chinesisch (vereinfacht), Koreanisch, Französisch, Deutsch, Spanisch, Portugiesisch (Brasilien), Chinesisch (traditionell), Italienisch",
    },
    { label: "Durchführung", value: "Beaufsichtigte Prüfung über Pearson VUE, im Testcenter oder online" },
    {
      label: "Voraussetzungen",
      value:
        "Keine formalen Voraussetzungen. Verlängerung alle 12 Monate über eine kostenlose Online-Bewertung auf Microsoft Learn.",
    },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 21. Oktober 2026" },
  ],
  domains: [
    {
      id: "d1",
      name: "Verwalten einer Sicherheitsbetriebsumgebung",
      weight: "40–45 %",
      objectives: [
        "Konfigurieren der Automatisierung für Microsoft Defender XDR und Microsoft Sentinel",
        "Konfigurieren des Microsoft Sentinel SIEM und der Plattform",
        "Daten in die Microsoft Sentinel SIEM-Plattform aufnehmen",
        "Konfigurieren von Erkennungen",
      ],
    },
    {
      id: "d2",
      name: "Reagieren auf Sicherheitsvorfälle",
      weight: "35–40 %",
      objectives: [
        "Reagieren auf Warnungen und Vorfälle in Microsoft Defender XDR",
        "Reagieren auf Warnungen und Vorfälle in Microsoft Defender für Endpunkt",
        "Untersuchen von Microsoft 365-Aktivitäten zur Identifizierung von Bedrohungen",
      ],
    },
    {
      id: "d3",
      name: "Durchführen der Bedrohungssuche",
      weight: "20–25 %",
      objectives: [
        "Erkennen von Bedrohungen mithilfe von Microsoft Defender XDR",
        "Erkennen von Bedrohungen mithilfe der Microsoft Sentinel-Plattform",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "sc-200",
    summary:
      "SC-200 (Microsoft Security Operations Analyst) prüft, ob Sie ein Security Operations Center (SOC) mit Microsoft Defender XDR und Microsoft Sentinel betreiben können: Erkennungen und Automatisierung konfigurieren, Vorfälle untersuchen und mit KQL nach Bedrohungen suchen. Die Prüfung dauert 100 Minuten, zum Bestehen benötigen Sie 700 Punkte, und die Gliederung der gemessenen Fähigkeiten wurde zuletzt am 21. Oktober 2026 aktualisiert.",
    whoFor: [
      "SOC-Analysten und Incident Responder, die mit Microsoft Defender XDR oder Microsoft Sentinel arbeiten",
      "Security Engineers, die Erkennungen, Automatisierungen und Datenconnectors aufbauen",
      "IT-Administratoren, die in eine Rolle im Sicherheitsbetrieb (Security Operations) wechseln",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was SC-200 tatsächlich prüft",
        paragraphs: [
          "SC-200 umfasst drei Fähigkeitsbereiche. Am stärksten gewichtet ist das Verwalten der Sicherheitsbetriebsumgebung (40–45 %): Automatisierungsregeln und Playbooks, Sentinel-Rollen, Aufbewahrungsebenen (Tiers) für Daten, Datenconnectors und Erkennungsregeln. Die Reaktion auf Sicherheitsvorfälle macht 35–40 % aus, die Bedrohungssuche (Threat Hunting) mit KQL 20–25 %.",
          "Die meisten Fragen beschreiben eine Situation im SOC und fragen nach dem passenden Werkzeug, der passenden Einstellung oder dem nächsten Schritt. Typische Entscheidungen: Automatisierungsregel oder Playbook, geplante Analyseregel oder NRT-Regel (Near Real Time), welcher Connector für welche Protokollquelle, welche KQL-Tabelle die Beweise enthält und welche Geräteaktion zur Untersuchung passt.",
        ],
      },
      {
        id: "october-2026-update",
        heading: "Was sich mit dem Update vom 21. Oktober 2026 geändert hat",
        paragraphs: [
          "Microsoft stuft die Änderung vom Oktober 2026 als geringfügig ein: Angepasst wurde nur der Bereich „Daten in die Microsoft Sentinel SIEM-Plattform aufnehmen“ (Ingest data into the Microsoft Sentinel SIEM and platform). Die Gliederung als Ganzes spiegelt die aktuelle Sentinel-Plattform wider, einschließlich Data-Lake- und Analyseebene (Analytics Tier), KQL-Jobs im Data Lake, Zusammenfassungsregeln (Summary Rules), Sentinel Graph und Notebooks mit dem Sentinel MCP Server.",
          "Auch agentische KI kommt im Bereich der Reaktion auf Vorfälle vor: das Untersuchen von Vorfällen mit dem eingebetteten Microsoft Security Copilot. Wenn Ihr Lernmaterial nur den klassischen Log Analytics-Arbeitsbereich und die alten Portalnamen von Microsoft 365 Defender behandelt, gleichen Sie es mit dem aktuellen Studienleitfaden ab. Übersetzte Fassungen der Prüfung werden etwa acht Wochen nach der englischen Version aktualisiert.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den eigenen Stand am Studienleitfaden messen",
            body: "Gehen Sie jeden Punkt der offiziellen SC-200-Liste der gemessenen Fähigkeiten durch und markieren Sie ihn als bekannt, unsicher oder neu. Verteilen Sie Ihre Zeit entsprechend der Gewichtung – allein der erste Bereich macht bis zu 45 % aus.",
          },
          {
            title: "Eine Laborumgebung aufbauen",
            body: "Verwenden Sie einen Microsoft 365 E5-Testmandanten (oder eine Entwickler-Sandbox, falls Ihr Visual Studio-Abonnement dafür berechtigt) und ein Azure-Abonnement, um einen Sentinel-Arbeitsbereich anzubinden, ein Testgerät in Defender for Endpoint zu onboarden und einige Testwarnungen zu erzeugen. Behalten Sie außerhalb der kostenlosen Testphase die Kosten für die Datenaufnahme in Sentinel im Blick. Wer die Portale einmal gesehen hat, beantwortet Szenariofragen deutlich leichter.",
          },
          {
            title: "KQL richtig lernen",
            body: "Üben Sie where, project, summarize, join und Zeitfilter auf den Hunting-Tabellen von Defender (DeviceProcessEvents, DeviceNetworkEvents, EmailEvents, IdentityLogonEvents und weitere). Sie müssen Abfragen schnell lesen und die richtige Tabelle erkennen können.",
          },
          {
            title: "Die Microsoft-Learn-Lernpfade durcharbeiten",
            body: "Folgen Sie den kostenlosen SC-200-Lernpfaden zu Defender XDR, Defender for Cloud und Microsoft Sentinel und gleichen Sie jedes Modul mit der aktuellen Gliederung ab.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Legen Sie Übungsprüfungen mit 40–60 Fragen in 100 Minuten ab und lesen Sie jede Erklärung, auch bei Fragen, die Sie richtig beantwortet haben.",
          },
          {
            title: "Buchen, wenn Ihre Ergebnisse stabil sind",
            body: "Buchen Sie die Prüfung, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen. Planen Sie die kostenlose jährliche Verlängerungsbewertung auf Microsoft Learn gleich mit ein.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Die Konfiguration unterschätzen. Im größten Bereich geht es um das Einrichten – Connectors, Aufbewahrung, Rollen, Regeln und Automatisierung –, nicht nur um die Reaktion auf Warnungen.",
          "Automatisierungsregeln und Playbooks verwechseln. Automatisierungsregeln behandeln Vorfälle zentral und können Playbooks ausführen; Playbooks sind Logic Apps-Workflows, die Aktionen durchführen.",
          "KQL nur durch Lesen lernen. Hunting-Fragen erwarten, dass Sie erkennen, was eine Abfrage tut und welche Tabelle Sie verwenden müssen.",
          "Portale und Produktnamen durcheinanderbringen. Sie sollten wissen, welche Aufgabe im Defender-Portal, welche in Sentinel und welche in Microsoft Purview erledigt wird.",
          "Untersuchungen in Microsoft 365 ignorieren. Purview Audit, die eDiscovery-Inhaltssuche und die Microsoft Graph-Aktivitätsprotokolle gehören zur Gliederung.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die SC-200-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 100 Minuten Zeit. Microsoft verlangt zum Bestehen 700 Punkte oder mehr. Die genaue Fragenzahl für SC-200 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten seiner Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Wie verlängere ich die SC-200-Zertifizierung?",
        answer:
          "Die Zertifizierung Security Operations Analyst Associate ist 12 Monate gültig. Sie verlängern sie kostenlos, indem Sie innerhalb des sechsmonatigen Verlängerungszeitraums eine Online-Bewertung auf Microsoft Learn bestehen.",
      },
      {
        question: "Welche Fähigkeiten haben sich am 21. Oktober 2026 geändert?",
        answer:
          "Microsoft nennt nur eine geringfügige Änderung im Bereich „Daten in die Microsoft Sentinel SIEM-Plattform aufnehmen“ (Ingest data into the Microsoft Sentinel SIEM and platform). Alle anderen Bereiche bleiben unverändert.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. SC-200 wird auch auf Deutsch angeboten. Lokalisierte Fassungen werden laut Microsoft etwa acht Wochen nach der englischen Version aktualisiert, sodass die deutsche Fassung nach dem Update vom 21. Oktober 2026 vorübergehend noch der vorherigen Gliederung folgen kann.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der von Microsoft veröffentlichten Gliederung der gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "SC-200 Prüfungsvorbereitung 2026: Inhalte & Lernplan",
      description:
        "SC-200 Leitfaden zum Stand 21.10.2026: 100 Minuten, Bestehensgrenze 700, Defender XDR, Sentinel, KQL-Hunting und ein Lernplan in sechs Schritten.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "sc-200",
    intro:
      "15 eigene SC-200-Übungsfragen zu den drei Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 21. Oktober 2026), ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Antwortoption falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "SC-200 Übungsfragen mit Lösungen & Erklärungen (2026)",
      description:
        "15 kostenlose, eigene SC-200-Übungsfragen zu Microsoft Sentinel, Defender XDR, Incident Response und KQL-Threat-Hunting – jeweils ausführlich erklärt.",
    },
    questions: [
      /* ── Bereich 1: Verwalten einer Sicherheitsbetriebsumgebung ── */
      {
        id: "sc200-d1-automation-rule",
        domain: "d1",
        objective: "Konfigurieren der Automatisierung für Microsoft Defender XDR und Microsoft Sentinel",
        difficulty: "intermediate",
        question:
          "Ihr SOC möchte, dass jeder neue Microsoft Sentinel-Vorfall aus einer bestimmten Analyseregel automatisch der Tier-1-Warteschlange zugewiesen und mit Tags versehen wird, ohne dafür einen Logic Apps-Workflow zu erstellen. Was sollten Sie erstellen?",
        options: [
          { id: "A", text: "Ein Playbook", rationale: "Playbooks sind Logic Apps-Workflows. Sie sind das richtige Werkzeug für komplexe Aktionen, aber die Anforderung schließt ausdrücklich aus, einen solchen Workflow zu erstellen." },
          { id: "B", text: "Eine Arbeitsmappe (Workbook)", rationale: "Arbeitsmappen visualisieren Daten; auf Vorfälle wirken sie nicht ein." },
          { id: "C", text: "Eine Automatisierungsregel", rationale: "Richtig. Automatisierungsregeln können Eigenschaften von Vorfällen wie Besitzer, Status, Schweregrad und Tags direkt ändern und bei Bedarf auch Playbooks ausführen." },
          { id: "D", text: "Eine Datensammlungsregel", rationale: "Datensammlungsregeln steuern, welche Daten der Azure Monitor-Agent sammelt, nicht wie Vorfälle behandelt werden." },
        ],
        answer: "C",
        explanation:
          "Automatisierungsregeln sind der zentrale, schlanke Weg zur Triage von Vorfällen in Sentinel. Nutzen Sie sie für Zuweisung, Tagging, Statusänderungen und Unterdrückung, und lassen Sie sie Playbooks aufrufen, wenn Sie Workflows benötigen, die andere Systeme einbeziehen.",
        reference: GUIDE,
      },
      {
        id: "sc200-d1-nrt",
        domain: "d1",
        objective: "Konfigurieren von Erkennungen",
        difficulty: "intermediate",
        question:
          "Eine Erkennung für das Anlegen eines neuen Kontos mit der Rolle „Globaler Administrator“ soll so schnell wie möglich nach der Aufnahme des Ereignisses auslösen. Welcher Analyseregeltyp in Microsoft Sentinel ist dafür vorgesehen?",
        options: [
          { id: "A", text: "NRT-Regel (Near Real Time, nahezu in Echtzeit)", rationale: "Richtig. NRT-Regeln laufen etwa jede Minute über die neuesten Daten und eignen sich für Erkennungen mit hoher Priorität, die schnell auslösen müssen." },
          { id: "B", text: "Geplante Regel mit einer Häufigkeit von 24 Stunden", rationale: "Ein täglicher Zeitplan könnte die Warnung um bis zu einen Tag verzögern." },
          { id: "C", text: "Threat-Intelligence-Regel", rationale: "Threat-Intelligence-Regeln gleichen Kompromittierungsindikatoren (IoCs) ab; das Anlegen von Konten erkennen sie nicht." },
          { id: "D", text: "Anomalieregel", rationale: "Anomalieregeln markieren mithilfe von maschinellem Lernen ungewöhnliches Verhalten; für die präzise, sofortige Erkennung eines bekannten Ereignisses sind sie nicht gedacht." },
        ],
        answer: "A",
        explanation:
          "Sentinel bietet geplante Regeln, NRT-Regeln, Threat-Intelligence-Regeln und Regeln mit maschinellem Lernen. NRT-Regeln opfern etwas Flexibilität zugunsten der Geschwindigkeit und sind für eine begrenzte Zahl kritischer Erkennungen gedacht.",
        reference: GUIDE,
      },
      {
        id: "sc200-d1-ama-windows",
        domain: "d1",
        objective: "Daten in die Microsoft Sentinel SIEM-Plattform aufnehmen",
        difficulty: "intermediate",
        question:
          "Sie müssen von einer Gruppe virtueller Azure-Computer nur ausgewählte Ereignis-IDs der Windows-Sicherheitsereignisse in Microsoft Sentinel sammeln. Was konfigurieren Sie?",
        options: [
          { id: "A", text: "Den Connector „Syslog via AMA“", rationale: "Syslog ist der Protokollierungsmechanismus von Linux und Netzwerkgeräten, nicht von Windows-Sicherheitsereignissen." },
          { id: "B", text: "Eine Sentinel-Arbeitsmappe", rationale: "Arbeitsmappen zeigen bereits aufgenommene Daten an; sie sammeln keine Daten." },
          { id: "C", text: "Einen Threat-Intelligence-Connector", rationale: "Threat-Intelligence-Connectors importieren Indikatoren, keine Windows-Ereignisprotokolle." },
          { id: "D", text: "Den Connector „Windows Security Events via AMA“ mit einer Datensammlungsregel", rationale: "Richtig. Der Azure Monitor-Agent verwendet Datensammlungsregeln, die festlegen, von welchen Computern welche Ereignisse (zum Beispiel über XPath-Filter) gesammelt werden." },
        ],
        answer: "D",
        explanation:
          "Beim Azure Monitor-Agent legen Sie den Umfang der Sammlung in der Datensammlungsregel fest – welche Computer, welche Ereignissätze oder welche einzelnen Ereignisse. Wer schon beim Sammeln filtert, hält auch die Kosten für die Datenaufnahme niedrig.",
        reference: GUIDE,
      },
      {
        id: "sc200-d1-cef",
        domain: "d1",
        objective: "Daten in die Microsoft Sentinel SIEM-Plattform aufnehmen",
        difficulty: "advanced",
        question:
          "Eine Firewall-Appliance kann ihre Protokolle nur im Common Event Format (CEF) über Syslog senden. Wie bringen Sie diese Protokolle in Microsoft Sentinel?",
        options: [
          { id: "A", text: "Den Azure Monitor-Agent direkt auf der Firewall-Appliance installieren", rationale: "Auf Appliances lässt sich der Agent in der Regel nicht ausführen. Sie leiten ihre Protokolle stattdessen an einen separaten Sammelcomputer weiter." },
          { id: "B", text: "Die Protokolle an eine Linux-Protokollweiterleitung mit dem Azure Monitor-Agent senden und den Connector „CEF via AMA“ verwenden", rationale: "Richtig. Die Appliance sendet CEF über Syslog an eine Linux-Weiterleitung; der dortige Azure Monitor-Agent sendet die Daten auf Basis einer Datensammlungsregel an den Arbeitsbereich." },
          { id: "C", text: "Den Connector „Windows Security Events via AMA“ verwenden", rationale: "Dieser Connector sammelt Windows-Ereignisprotokolle, kein CEF von Netzwerkgeräten." },
          { id: "D", text: "Die Protokolle manuell in eine Arbeitsmappe hochladen", rationale: "Arbeitsmappen dienen der Visualisierung, nicht der Datenaufnahme." },
        ],
        answer: "B",
        explanation:
          "Für Syslog- und CEF-Quellen, auf denen kein Agent laufen kann, ist das Standardmuster eine Linux-Protokollweiterleitung mit dem Azure Monitor-Agent, konfiguriert über den Connector „Syslog via AMA“ oder „CEF via AMA“.",
        reference: GUIDE,
      },
      {
        id: "sc200-d1-retention-tiers",
        domain: "d1",
        objective: "Konfigurieren des Microsoft Sentinel SIEM und der Plattform",
        difficulty: "intermediate",
        question:
          "Aus Compliance-Gründen müssen Sie umfangreiche Netzwerk-Flow-Protokolle mehrere Jahre lang kostengünstig aufbewahren. Analysten fragen sie selten ab und benötigen sie nicht für Echtzeit-Analyseregeln. Welche Speicheroption passt am besten?",
        options: [
          { id: "A", text: "Die Analyseebene (Analytics Tier) mit maximaler interaktiver Aufbewahrung", rationale: "Die Analyseebene ist für Daten gedacht, die für Echtzeiterkennung und häufige Abfragen genutzt werden, und ist bei großen Datenmengen die teuerste Option." },
          { id: "B", text: "Die Data-Lake-Ebene (Data Lake Tier)", rationale: "Richtig. Die Data-Lake-Ebene von Sentinel ist für die langfristige, kostengünstige Speicherung großer Datenmengen gedacht, die seltener abgefragt werden, zum Beispiel mit KQL-Jobs." },
          { id: "C", text: "Die Protokolle nach 90 Tagen löschen und eine Zusammenfassung nach Excel exportieren", rationale: "Damit wäre die mehrjährige Aufbewahrungspflicht nicht erfüllt." },
          { id: "D", text: "Sie als Watchlists speichern", rationale: "Watchlists enthalten kleine Referenzlisten wie VIP-Benutzer, keine Protokolldaten aus mehreren Jahren." },
        ],
        answer: "B",
        explanation:
          "Die Gliederung verlangt, dass Sie die Aufbewahrung über Analyse-, Data-Lake- und XDR-Ebene hinweg verwalten. Faustregel: erkennungsrelevante, häufig abgefragte Daten in die Analyseebene, umfangreiche, selten genutzte Daten in den Data Lake.",
        reference: GUIDE,
      },
      {
        id: "sc200-d1-mitre",
        domain: "d1",
        objective: "Konfigurieren von Erkennungen",
        difficulty: "foundation",
        question:
          "Ihre Vorgesetzte möchte wissen, welche Taktiken und Techniken von Angreifern Ihre aktuellen Microsoft Sentinel-Erkennungen abdecken und wo die Lücken liegen. Welches Feature hilft Ihnen am direktesten, diese Frage zu beantworten?",
        options: [
          { id: "A", text: "Die Vorfallwarteschlange", rationale: "Die Warteschlange zeigt aufgetretene Vorfälle, nicht die Abdeckung Ihrer Erkennungsregeln." },
          { id: "B", text: "Datensammlungsregeln", rationale: "Sie steuern die Datensammlung und sagen nichts darüber aus, welche Techniken erkannt werden." },
          { id: "C", text: "Gerätegruppen in Defender for Endpoint", rationale: "Gerätegruppen ordnen Geräte für Berechtigungen und Automatisierungsstufen, nicht für die Erkennungsabdeckung." },
          { id: "D", text: "Die MITRE ATT&CK-Ansicht Ihrer Erkennungsabdeckung", rationale: "Richtig. Sentinel ordnet Analyseregeln und Hunting-Abfragen den Taktiken und Techniken von MITRE ATT&CK zu und zeigt so abgedeckte und nicht abgedeckte Bereiche." },
        ],
        answer: "D",
        explanation:
          "Die Analyse der Abdeckung von Angriffsvektoren mit der MITRE ATT&CK-Matrix ist eine ausdrücklich genannte Fähigkeit in der Gliederung. Sie macht aus der Frage „Erkennen wir genug?“ eine konkrete Liste von Techniken ohne Abdeckung.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Reagieren auf Sicherheitsvorfälle ── */
      {
        id: "sc200-d2-isolate",
        domain: "d2",
        objective: "Reagieren auf Warnungen und Vorfälle in Microsoft Defender für Endpunkt",
        difficulty: "foundation",
        question:
          "Ein Laptop zeigt Anzeichen einer aktiven Ransomware-Verschlüsselung. Sie müssen sofort verhindern, dass er mit anderen Geräten kommuniziert, die Verbindung zu Defender for Endpoint für die weitere Untersuchung aber erhalten. Welche Aktion führen Sie aus?",
        options: [
          { id: "A", text: "Das Gerät isolieren", rationale: "Richtig. Die Geräteisolation trennt das Gerät vom Netzwerk, erhält aber seine Verbindung zum Defender-Dienst, sodass Sie weiter untersuchen und es später wieder freigeben können." },
          { id: "B", text: "Nur eine Antivirenüberprüfung ausführen", rationale: "Eine Überprüfung allein hindert das Gerät nicht daran, den Angriff im Netzwerk zu verbreiten." },
          { id: "C", text: "Nur ein Untersuchungspaket sammeln", rationale: "Das Paket liefert nützliche Beweise, dämmt die Bedrohung aber nicht ein." },
          { id: "D", text: "Das Gerät aus Microsoft Entra ID entfernen", rationale: "Das stoppt den Netzwerkverkehr nicht und erschwert die Untersuchung." },
        ],
        answer: "A",
        explanation:
          "Bei einem aktiven Angriff hat die Eindämmung Vorrang. Die Isolation ist dafür die Standard-Reaktionsaktion für Geräte; Beweissicherung und Liveantwort (Live Response) folgen, sobald das Gerät das Netzwerk nicht mehr erreichen kann.",
        reference: GUIDE,
      },
      {
        id: "sc200-d2-investigation-package",
        domain: "d2",
        objective: "Reagieren auf Warnungen und Vorfälle in Microsoft Defender für Endpunkt",
        difficulty: "intermediate",
        question:
          "Für eine forensische Prüfung benötigen Sie eine Momentaufnahme der Autostart-Einträge, installierten Programme, Netzwerkverbindungen, geplanten Aufgaben und Ereignisprotokolle eines Geräts, gesammelt über das Defender-Portal. Welche Aktion liefert das?",
        options: [
          { id: "A", text: "App-Ausführung einschränken (Restrict app execution)", rationale: "Diese Aktion blockiert Apps, die nicht von Microsoft signiert sind; Daten sammelt sie nicht." },
          { id: "B", text: "Export der Gerätezeitachse nur für die letzte Stunde", rationale: "Die Zeitachse zeigt Ereignisse, ist aber nicht das beschriebene Paket mit dem Systemzustand." },
          { id: "C", text: "Untersuchungspaket sammeln (Collect investigation package)", rationale: "Richtig. Das Untersuchungspaket fasst forensische Daten wie Autostart-Einträge, installierte Programme, Netzwerkverbindungen, geplante Aufgaben und Protokolle in einer herunterladbaren Datei zusammen." },
          { id: "D", text: "Das Gerät offboarden", rationale: "Offboarding beendet die Überwachung und würde Ihnen die Sicht auf das Gerät nehmen." },
        ],
        answer: "C",
        explanation:
          "Das Sammeln eines Untersuchungspakets und die Liveantwort (Live Response) sind die beiden wichtigsten Wege, in Defender for Endpoint Beweise von einem Gerät zu gewinnen.",
        reference: GUIDE,
      },
      {
        id: "sc200-d2-risky-user",
        domain: "d2",
        objective: "Reagieren auf Warnungen und Vorfälle in Microsoft Defender XDR",
        difficulty: "intermediate",
        question:
          "Microsoft Entra ID Protection stuft einen Benutzer nach Anmeldungen aus einem ungewohnten Land als hoch riskant ein, und Ihre Untersuchung bestätigt, dass das Konto kompromittiert wurde. Was ist die am besten geeignete erste Abhilfemaßnahme?",
        options: [
          { id: "A", text: "Das Benutzerrisiko verwerfen", rationale: "Das Verwerfen des Risikos ist für False Positives gedacht; hier ist die Kompromittierung bestätigt." },
          { id: "B", text: "Den Schwellenwert der Anmelderisikorichtlinie für alle Benutzer senken", rationale: "Eine Anpassung der Richtlinie kann später helfen, behebt aber nicht das Problem dieses Kontos." },
          { id: "C", text: "Die nächste Anmeldung abwarten, um zu sehen, ob das Risiko erneut auftritt", rationale: "Abwarten lässt den Angreifer im Konto aktiv." },
          { id: "D", text: "Den Benutzer als kompromittiert bestätigen, die Sitzungen widerrufen und eine sichere Kennwortzurücksetzung verlangen", rationale: "Richtig. Das macht die Sitzungen und Anmeldeinformationen des Angreifers ungültig und meldet die bestätigte Kompromittierung an Entra ID Protection zurück." },
        ],
        answer: "D",
        explanation:
          "Bei kompromittierten Identitäten verbindet die Reaktion das Abschneiden des Zugriffs (Sitzungen widerrufen, Anmeldeinformationen zurücksetzen, gegebenenfalls die Anmeldung blockieren) mit der Rückmeldung an das System, dass das Risiko echt war, damit seine Erkennungen daraus lernen.",
        reference: GUIDE,
      },
      {
        id: "sc200-d2-purview-audit",
        domain: "d2",
        objective: "Untersuchen von Microsoft 365-Aktivitäten zur Identifizierung von Bedrohungen",
        difficulty: "intermediate",
        question:
          "Sie vermuten, dass ein Angreifer mit einem kompromittierten Konto E-Mails gelesen und eine Weiterleitungsregel für den Posteingang erstellt hat. Mit welchem Werkzeug durchsuchen Sie Benutzer- und Administratoraktivitäten in Microsoft 365 wie Postfachzugriffe und das Erstellen von Regeln?",
        options: [
          { id: "A", text: "Konformitätsberichte für Geräte in Microsoft Intune", rationale: "Konformitätsberichte zeigen den Gerätezustand, keine Postfachaktivitäten." },
          { id: "B", text: "Gerätezeitachse in Defender for Endpoint", rationale: "Die Zeitachse zeigt Ereignisse auf einem Gerät, keine Aktivitäten innerhalb von Exchange Online." },
          { id: "C", text: "Microsoft Purview Audit", rationale: "Richtig. Purview Audit zeichnet Benutzer- und Administratoraktivitäten in allen Microsoft 365-Diensten auf, einschließlich Aktionen in Exchange-Postfächern und Änderungen an Posteingangsregeln." },
          { id: "D", text: "Azure Cost Management", rationale: "Cost Management enthält keine Sicherheitsüberwachungsdaten." },
        ],
        answer: "C",
        explanation:
          "Die Gliederung nennt drei Werkzeuge für Untersuchungen in Microsoft 365: Purview Audit für Aktivitätsdatensätze, die eDiscovery-Inhaltssuche für die Inhalte selbst und die Microsoft Graph-Aktivitätsprotokolle für API-Aufrufe.",
        reference: GUIDE,
      },
      {
        id: "sc200-d2-attack-disruption",
        domain: "d2",
        objective: "Reagieren auf Warnungen und Vorfälle in Microsoft Defender XDR",
        difficulty: "advanced",
        question:
          "Während einer sich schnell ausbreitenden Business-E-Mail-Kompromittierung (BEC) deaktiviert Microsoft Defender XDR automatisch das kompromittierte Benutzerkonto und dämmt betroffene Geräte ein, bevor ein Analyst den Vorfall überhaupt öffnet. Welche Funktion hat das getan?",
        options: [
          { id: "A", text: "Automatische Angriffsunterbrechung (Automatic attack disruption)", rationale: "Richtig. Die automatische Angriffsunterbrechung nutzt Signale mit hoher Konfidenz aus Defender XDR, um kompromittierte Benutzer und Geräte während Angriffen wie Ransomware oder BEC automatisch einzudämmen." },
          { id: "B", text: "Eine Sentinel-Arbeitsmappe", rationale: "Arbeitsmappen zeigen nur Daten an; sie führen keine Aktionen aus." },
          { id: "C", text: "Berichte der Bedrohungsanalyse (Threat Analytics)", rationale: "Die Bedrohungsanalyse liefert Informationen über Bedrohungen; Ressourcen dämmt sie nicht ein." },
          { id: "D", text: "Eine Datenaufbewahrungsrichtlinie", rationale: "Aufbewahrung regelt, wie lange Daten gespeichert werden, nicht wie Angriffe gestoppt werden." },
        ],
        answer: "A",
        explanation:
          "Die automatische Angriffsunterbrechung verschafft dem SOC Zeit, indem sie Ressourcen mitten im Angriff eindämmt. Analysten untersuchen dann den Vorfall und entscheiden, wann die Eindämmung aufgehoben wird.",
        reference: GUIDE,
      },
      {
        id: "sc200-d2-lateral",
        domain: "d2",
        objective: "Reagieren auf Warnungen und Vorfälle in Microsoft Defender XDR",
        difficulty: "advanced",
        question:
          "Ein Vorfall umfasst eine Phishing-E-Mail, einen verdächtigen Prozess auf einem Gerät und spätere Anmeldungen dieses Benutzers an drei Servern. Wie erfassen Sie den vollen Umfang am besten?",
        options: [
          { id: "A", text: "Jede Warnung einzeln schließen, sobald sie behoben ist", rationale: "Wer Warnungen einzeln schließt, verdeckt ihren Zusammenhang und das tatsächliche Ausmaß des Angriffs." },
          { id: "B", text: "Den korrelierten Vorfall über E-Mail, Endpunkt und Identität hinweg untersuchen, einschließlich der betroffenen Entitäten und möglicher seitlicher Bewegung (Lateral Movement)", rationale: "Richtig. Defender XDR korreliert Warnungen aus mehreren Bereichen zu einem Vorfall, sodass Sie die Angriffskette vom ersten Zugriff bis zur seitlichen Bewegung verfolgen können." },
          { id: "C", text: "Nur das erste Gerät neu aufsetzen", rationale: "Der Angreifer kann bereits auf den Servern sein; ein Gerät neu aufzusetzen reicht nicht." },
          { id: "D", text: "Alle Benutzer der Organisation deaktivieren", rationale: "Das ist unverhältnismäßig und keine Methode, den Umfang zu bestimmen." },
        ],
        answer: "B",
        explanation:
          "Mehrstufige, bereichsübergreifende Angriffe werden in der Gliederung ausdrücklich genannt. Arbeiten Sie auf Vorfallebene, erfassen Sie jede Entität (Benutzer, Geräte, Postfächer, IP-Adressen) und prüfen Sie auf seitliche Bewegung, bevor Sie über die Behebung entscheiden.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Durchführen der Bedrohungssuche ── */
      {
        id: "sc200-d3-table",
        domain: "d3",
        objective: "Erkennen von Bedrohungen mithilfe von Microsoft Defender XDR",
        difficulty: "foundation",
        question:
          "Sie möchten in der erweiterten Suche (Advanced Hunting) alle Geräte finden, auf denen powershell.exe mit einer codierten Befehlszeile gestartet wurde. Welche Tabelle fragen Sie ab?",
        options: [
          { id: "A", text: "DeviceProcessEvents", rationale: "Richtig. DeviceProcessEvents zeichnet das Erstellen von Prozessen auf, einschließlich Dateiname und Befehlszeile." },
          { id: "B", text: "EmailEvents", rationale: "EmailEvents enthält Informationen zur E-Mail-Zustellung, keine Prozesse." },
          { id: "C", text: "IdentityLogonEvents", rationale: "Diese Tabelle enthält Authentifizierungsereignisse, keine Prozessstarts." },
          { id: "D", text: "DeviceNetworkEvents", rationale: "Diese Tabelle zeichnet Netzwerkverbindungen auf, nicht das Erstellen von Prozessen." },
        ],
        answer: "A",
        explanation:
          "Die richtige Tabelle zu wählen ist bei jeder Hunting-Frage die halbe Miete. Prozessstarts stehen in DeviceProcessEvents, Netzwerkverbindungen in DeviceNetworkEvents, Dateien in DeviceFileEvents und E-Mails in EmailEvents.",
        reference: GUIDE,
      },
      {
        id: "sc200-d3-kql-summarize",
        domain: "d3",
        objective: "Erkennen von Bedrohungen mithilfe von Microsoft Defender XDR",
        difficulty: "intermediate",
        question:
          "Welche Abfrage auf IdentityLogonEvents zählt in der erweiterten Suche (Advanced Hunting) die fehlgeschlagenen Anmeldungen pro Konto und gibt nur Konten mit mehr als 20 Fehlschlägen zurück?",
        options: [
          { id: "A", text: "| summarize Failures = count() | where AccountName > 20", rationale: "Es gibt keine Gruppierung nach Konto, und AccountName ist keine Zahl." },
          { id: "B", text: "| project AccountName | take 20", rationale: "Das gibt nur 20 Zeilen zurück und zählt nichts." },
          { id: "C", text: "| where Failures > 20 | summarize count() by AccountName", rationale: "Failures existiert vor dem summarize-Schritt noch nicht, daher schlägt der Filter fehl." },
          { id: "D", text: "IdentityLogonEvents | where ActionType == \"LogonFailed\" | summarize Failures = count() by AccountName | where Failures > 20", rationale: "Richtig. Zuerst die Fehlschläge filtern, dann mit summarize pro Konto aggregieren und schließlich das aggregierte Ergebnis filtern." },
        ],
        answer: "D",
        explanation:
          "Das Muster Filter → summarize … by … → Filter auf das Aggregat kommt in vielen Hunting- und Erkennungsabfragen vor, etwa bei der Erkennung von Brute-Force- oder Password-Spray-Angriffen.",
        reference: GUIDE,
      },
      {
        id: "sc200-d3-summary-rules",
        domain: "d3",
        objective: "Erkennen von Bedrohungen mithilfe der Microsoft Sentinel-Plattform",
        difficulty: "advanced",
        question:
          "Threat Hunter benötigen regelmäßig stündliche Aggregate einer sehr großen, ausführlichen Protokollquelle. Jedes Mal die Rohdaten abzufragen ist langsam und teuer. Welches Feature von Microsoft Sentinel erzeugt vorab aggregierte Ergebnisse in einer Tabelle, die sich effizient abfragen lässt?",
        options: [
          { id: "A", text: "Watchlists", rationale: "Watchlists speichern kleine Referenzdaten, keine aggregierten Protokollergebnisse." },
          { id: "B", text: "Automatisierungsregeln", rationale: "Automatisierungsregeln wirken auf Vorfälle ein; Protokolldaten aggregieren sie nicht." },
          { id: "C", text: "Zusammenfassungsregeln (Summary Rules)", rationale: "Richtig. Zusammenfassungsregeln führen geplante Aggregationen aus und schreiben die Ergebnisse in eine Zusammenfassungstabelle, was spätere Abfragen schneller und günstiger macht." },
          { id: "D", text: "Gerätegruppen", rationale: "Gerätegruppen gehören zur Verwaltung von Defender for Endpoint, nicht zur Aggregation von Protokollen." },
        ],
        answer: "C",
        explanation:
          "Die Gliederung verlangt, dass Sie Tabellen für Zusammenfassungsregeln sowie KQL-Jobs im Data Lake erstellen und verwalten. Beides hilft, große Datenmengen effizient zu bearbeiten, statt immer wieder die Rohdaten abzufragen.",
        reference: GUIDE,
      },
    ],
  },
};
