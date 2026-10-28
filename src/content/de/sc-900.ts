import type { DeContent } from "@/config/types";

/**
 * German edition of the SC-900 guide and free practice questions.
 * Faithful translation of src/content/guides/sc-900.ts and
 * src/content/practice-questions/sc-900.ts. Domain and objective names follow
 * the official German Microsoft Learn study guide (de-de).
 */
const GUIDE = {
  label: "Microsoft Learn — Studienleitfaden für SC-900 (englische Fassung)",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900",
};

export const sc900De: DeContent = {
  slug: "sc-900",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; übersetzte Fassungen werden laut Microsoft in der Regel etwa acht Wochen nach der englischen Version aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "SC-900" },
    { label: "Dauer", value: "45 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Japanisch, Chinesisch (vereinfacht), Koreanisch, Französisch, Spanisch, Portugiesisch (Brasilien), Russisch, Arabisch (Saudi-Arabien), Indonesisch (Indonesien), Deutsch, Chinesisch (traditionell), Italienisch",
    },
    { label: "Durchführung", value: "Beaufsichtigte Prüfung, Terminbuchung über Pearson VUE" },
    { label: "Voraussetzungen", value: "Keine. Fundamentals-Zertifizierungen laufen nicht ab." },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 21. Oktober 2026" },
  ],
  domains: [
    {
      id: "d1",
      name: "Beschreiben der Konzepte Sicherheit, Compliance und Identität",
      weight: "10–15 %",
      objectives: ["Beschreiben von Sicherheits- und Compliancekonzepten", "Definieren von Identitätskonzepten"],
    },
    {
      id: "d2",
      name: "Beschreiben der Funktionen von Microsoft Entra",
      weight: "25–30 %",
      objectives: [
        "Beschreiben der Funktion und der Identitätstypen von Microsoft Entra ID",
        "Beschreiben der Authentifizierungsfunktionen von Microsoft Entra ID",
        "Beschreiben Sie die Funktionen zur Zugriffsverwaltung von Microsoft Entra ID",
        "Beschreiben der Identitätsschutz- und Governancefunktionen von Microsoft Entra",
      ],
    },
    {
      id: "d3",
      name: "Beschreiben der Funktionen von Microsoft-Sicherheitslösungen",
      weight: "35–40 %",
      objectives: [
        "Beschreiben der Sicherheitsdienste für die Kerninfrastruktur in Azure",
        "Beschreiben der Sicherheitsverwaltungsfunktionen von Azure",
        "Beschreiben der Funktionen von Microsoft Sentinel",
        "Bedrohungsschutz mit Microsoft Defender XDR beschreiben",
      ],
    },
    {
      id: "d4",
      name: "Beschreiben der Funktionen von Microsoft-Compliancelösungen",
      weight: "20–25 %",
      objectives: [
        "Beschreiben des Service Trust-Portals von Microsoft und der Datenschutzprinzipien",
        "Beschreiben der Compliance-Management-Funktionen von Microsoft Purview",
        "Beschreiben der Funktionen von Microsoft Purview zum Schutz von Informationen, zur Verwaltung des Datenlebenszyklus und zur Datenverwaltung",
        "Beschreiben von Insiderrisiko-, eDiscovery- und Auditfunktionen in Microsoft Purview",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "sc-900",
    summary:
      "SC-900 (Microsoft Security, Compliance, and Identity Fundamentals) prüft, ob Sie Konzepte zu Sicherheit, Compliance und Identität sowie die zugehörigen Microsoft-Lösungen beschreiben können: Microsoft Entra, Defender for Cloud, Microsoft Sentinel, Defender XDR und Microsoft Purview. Die Prüfung dauert 45 Minuten, zum Bestehen benötigen Sie 700 Punkte, und die Liste der gemessenen Fähigkeiten wurde zuletzt am 21. Oktober 2026 aktualisiert. Fundamentals-Zertifizierungen laufen nicht ab.",
    whoFor: [
      "Fachliche Stakeholder, die verstehen müssen, wie Microsoft Sicherheit, Compliance und Identität angeht",
      "Angehende oder erfahrene IT-Fachkräfte, die in die IT-Sicherheit einsteigen oder sich in Richtung SC-200, SC-300 oder SC-500 entwickeln",
      "Studierende, die eine erste Microsoft-Sicherheitszertifizierung anstreben",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was SC-900 tatsächlich prüft",
        paragraphs: [
          "SC-900 umfasst vier Fähigkeitsbereiche. Am stärksten gewichtet sind die Microsoft-Sicherheitslösungen (35–40 %): Sicherheitsdienste der Azure-Infrastruktur wie Azure Firewall, Netzwerksicherheitsgruppen (NSGs), Azure Bastion und Key Vault sowie Defender for Cloud, Microsoft Sentinel und die Defender-XDR-Dienste. Microsoft Entra macht 25–30 % aus, die Compliancelösungen von Microsoft Purview 20–25 % und die Grundkonzepte von Sicherheit, Compliance und Identität 10–15 %.",
          "Jedes Lernziel beginnt im englischen Original mit „Describe“ oder „Define“ (Beschreiben bzw. Definieren). Sie müssen nichts Schritt für Schritt konfigurieren; Sie sollen erkennen, was ein Konzept bedeutet und welches Produkt oder Feature ein beschriebenes Problem löst. Typische Entscheidungen: Conditional Access oder Privileged Identity Management, Vertraulichkeitsbezeichnung oder Aufbewahrungsbezeichnung, Azure Firewall oder Netzwerksicherheitsgruppe, SIEM oder SOAR.",
        ],
      },
      {
        id: "october-2026-update",
        heading: "Was sich mit dem Update vom 21. Oktober 2026 geändert hat",
        paragraphs: [
          "Microsoft nennt zwei kleinere Änderungen: „Beschreiben der Funktion und der Identitätstypen von Microsoft Entra ID“ (Describe function and identity types of Microsoft Entra ID) und „Bedrohungsschutz mit Microsoft Defender XDR beschreiben“ (Describe threat protection with Microsoft Defender XDR). Ansonsten bleiben die Fähigkeitsbereiche unverändert, und die veröffentlichten Gewichtungen sind dieselben wie zuvor.",
          "Die aktuelle Gliederung nennt unter Entra ID Workload-Identitäten und Hybrididentität und führt unter Defender XDR Defender for Office 365, Defender for Endpoint, Defender for Cloud Apps, Defender for Identity, Defender Vulnerability Management, Microsoft Threat Intelligence und das Microsoft Defender-Portal auf. Übersetzte Fassungen der Prüfung werden in der Regel etwa acht Wochen nach der englischen Version aktualisiert.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in fünf Schritten",
        steps: [
          {
            title: "Gleichen Sie Ihren Stand mit dem Studienleitfaden ab",
            body: "Gehen Sie jeden Punkt der offiziellen SC-900-Liste der gemessenen Fähigkeiten durch und markieren Sie ihn als bekannt, unsicher oder neu. Allein der Bereich Sicherheitslösungen macht bis zu 40 % aus und verdient daher den größten Teil Ihrer Zeit.",
          },
          {
            title: "Klären Sie zuerst die Konzepte",
            body: "Geteilte Verantwortung, Defense-in-Depth, Zero Trust, Verschlüsselung versus Hashing, Authentifizierung versus Autorisierung sowie Verbund (Federation) sind das Vokabular, auf dem der Rest der Prüfung aufbaut. Stellen Sie sicher, dass Sie jeden Begriff in einem Satz erklären können.",
          },
          {
            title: "Arbeiten Sie die Microsoft-Learn-Lernpfade durch",
            body: "Folgen Sie den kostenlosen SC-900-Lernpfaden zu Entra, zur Sicherheit mit Azure und Defender sowie zu Microsoft Purview. Notieren Sie für jedes Produkt das eine Problem, das es löst – genau das prüfen die Fragen meist.",
          },
          {
            title: "Werfen Sie einmal einen Blick in die Portale",
            body: "Mit einem kostenlosen Azure-Konto und einer Microsoft 365-Testversion sehen Sie Entra ID, Defender for Cloud, das Defender-Portal und das Purview-Portal. Wenn Sie wissen, wo Secure Score, Conditional Access oder Vertraulichkeitsbezeichnungen zu finden sind, lassen sich die Formulierungen der Fragen deutlich leichter nachvollziehen.",
          },
          {
            title: "Üben Sie unter Zeitdruck und buchen Sie dann",
            body: "Legen Sie Übungsprüfungen mit 45 Minuten Zeitlimit ab und lesen Sie jede Erklärung, auch bei Fragen, die Sie richtig beantwortet haben. Buchen Sie die Prüfung, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Eine Fundamentals-Prüfung für trivial halten. Die Produktpalette ist breit, und ähnlich klingende Features werden leicht verwechselt.",
          "Vertraulichkeitsbezeichnungen mit Aufbewahrungsbezeichnungen verwechseln. Vertraulichkeitsbezeichnungen (Sensitivity Labels) klassifizieren und schützen Inhalte (zum Beispiel durch Verschlüsselung); Aufbewahrungsbezeichnungen (Retention Labels) legen fest, wie lange Inhalte aufbewahrt oder wann sie gelöscht werden.",
          "Conditional Access, Privileged Identity Management und ID Protection durcheinanderbringen. Conditional Access setzt Anmeldebedingungen durch, PIM vergibt privilegierte Rollen just in time, und ID Protection erkennt riskante Benutzer und Anmeldungen.",
          "Die Defender-Produkte nicht auseinanderhalten. Sie sollten wissen, welches Produkt E-Mail, Endpunkte, Cloud-Apps, lokale Identitäten und Cloud-Workloads schützt.",
          "Den Compliance-Bereich überspringen. Service Trust Portal, Compliance-Manager, DLP, Datensatzverwaltung, Insider-Risikomanagement, eDiscovery und Audit machen zusammen bis zu einem Viertel der Prüfung aus.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die SC-900-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 45 Minuten Zeit. Microsoft verlangt zum Bestehen 700 Punkte oder mehr. Die genaue Fragenzahl für SC-900 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten seiner Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Läuft die SC-900-Zertifizierung ab?",
        answer:
          "Nein. Laut Microsoft laufen Fundamentals-Zertifizierungen nicht ab, daher gibt es für SC-900 keine Verlängerungsbewertung.",
      },
      {
        question: "Welche gemessenen Fähigkeiten haben sich am 21. Oktober 2026 geändert?",
        answer:
          "Microsoft nennt kleinere Änderungen in „Beschreiben der Funktion und der Identitätstypen von Microsoft Entra ID“ und „Bedrohungsschutz mit Microsoft Defender XDR beschreiben“. Die Fähigkeitsbereiche und ihre Gewichtungen bleiben gleich.",
      },
      {
        question: "Brauche ich technische Erfahrung, um SC-900 zu bestehen?",
        answer:
          "Es gibt keine formalen Voraussetzungen. Laut Microsoft sollten Kandidatinnen und Kandidaten mit Microsoft Azure und Microsoft 365 vertraut sein; die Prüfung richtet sich gleichermaßen an fachliche Stakeholder, IT-Fachkräfte und Studierende.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. SC-900 wird auch auf Deutsch angeboten. Übersetzte Fassungen werden laut Microsoft in der Regel etwa acht Wochen nach der englischen Version aktualisiert, sodass die deutsche Fassung kurz nach einem Update vorübergehend noch der vorherigen Gliederung folgen kann.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der von Microsoft veröffentlichten Gliederung der gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "SC-900 Prüfungsvorbereitung 2026: Inhalte & Lernplan",
      description:
        "SC-900 Leitfaden zum Stand 21.10.2026: 45 Minuten, Bestehensgrenze 700, Entra, Defender, Sentinel, Purview und ein Lernplan in fünf Schritten.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "sc-900",
    intro:
      "15 eigene SC-900-Übungsfragen zu den vier Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 21. Oktober 2026), ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Antwortoption falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "SC-900 Übungsfragen mit Lösungen & Erklärungen (2026)",
      description:
        "15 kostenlose, eigene SC-900-Übungsfragen zu Sicherheitskonzepten, Microsoft Entra, Defender, Sentinel und Purview – jeweils ausführlich erklärt.",
    },
    questions: [
      /* ── Bereich 1: Konzepte Sicherheit, Compliance und Identität ── */
      {
        id: "sc900-d1-shared-responsibility",
        domain: "d1",
        objective: "Beschreiben von Sicherheits- und Compliancekonzepten",
        difficulty: "foundation",
        question:
          "Ihre Organisation verlagert ihr E-Mail-System in ein SaaS-Angebot (Software as a Service). Was bleibt nach dem Modell der geteilten Verantwortung immer in der Verantwortung des Kunden?",
        options: [
          { id: "A", text: "Die physische Sicherheit des Rechenzentrums", rationale: "Die physische Sicherheit des Rechenzentrums geht bei SaaS, PaaS und IaaS vollständig auf den Cloudanbieter über." },
          { id: "B", text: "Die im Dienst gespeicherten Informationen und Daten", rationale: "Richtig. Unabhängig vom Dienstmodell bleibt der Kunde für seine Informationen und Daten, seine Geräte sowie seine Konten und Identitäten verantwortlich." },
          { id: "C", text: "Das Patchen des Betriebssystems der Server, auf denen der Dienst läuft", rationale: "Bei SaaS verwaltet der Anbieter das Betriebssystem und die Anwendung." },
          { id: "D", text: "Das physische Netzwerk im Rechenzentrum des Anbieters", rationale: "Das physische Netzwerk liegt immer in der Verantwortung des Cloudanbieters." },
        ],
        answer: "B",
        explanation:
          "Je weiter Sie sich vom lokalen Betrieb (On-Premises) in Richtung SaaS bewegen, desto mehr übernimmt der Anbieter. Informationen und Daten, Geräte sowie Konten und Identitäten verbleiben in jedem Modell beim Kunden.",
        reference: GUIDE,
      },
      {
        id: "sc900-d1-federation",
        domain: "d1",
        objective: "Definieren von Identitätskonzepten",
        difficulty: "intermediate",
        question:
          "Mitarbeitende eines Partnerunternehmens sollen sich bei der Webanwendung Ihrer Organisation mit den Anmeldeinformationen anmelden, die sie bereits in ihrem eigenen Unternehmen verwenden. Ihre Organisation soll für sie keine Kennwörter anlegen oder verwalten. Welches Identitätskonzept macht das möglich?",
        options: [
          { id: "A", text: "Verzeichnissynchronisierung", rationale: "Bei der Synchronisierung werden Identitäten von einem Verzeichnis in ein anderes kopiert. Hier sollen sich die Benutzer des Partners aber weiterhin bei ihrem eigenen Identitätsanbieter authentifizieren." },
          { id: "B", text: "Mehrstufige Authentifizierung", rationale: "MFA verstärkt eine Anmeldung durch zusätzliche Faktoren; sie stellt keine Vertrauensbeziehung zwischen zwei Organisationen her." },
          { id: "C", text: "Rollenbasierte Zugriffssteuerung", rationale: "RBAC legt fest, was ein angemeldeter Benutzer tun darf. Sie ermöglicht keine Authentifizierung mit den Anmeldeinformationen einer anderen Organisation." },
          { id: "D", text: "Verbund (Federation)", rationale: "Richtig. Ein Verbund schafft eine Vertrauensbeziehung zwischen Identitätsanbietern, sodass Ihre Anwendung die vom Identitätsanbieter des Partners durchgeführte Authentifizierung akzeptiert." },
        ],
        answer: "D",
        explanation:
          "Bei einem Verbund vertraut eine Organisation der Authentifizierung, die eine andere durchgeführt hat. Der Benutzer meldet sich einmal bei seinem eigenen Identitätsanbieter an, und der vertrauende Dienst verlässt sich auf dieses Ergebnis, statt eigene Anmeldeinformationen zu speichern.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Funktionen von Microsoft Entra ── */
      {
        id: "sc900-d2-managed-identity",
        domain: "d2",
        objective: "Beschreiben der Funktion und der Identitätstypen von Microsoft Entra ID",
        difficulty: "intermediate",
        question:
          "Eine Anwendung auf einem virtuellen Azure-Computer muss Geheimnisse aus Azure Key Vault lesen. Die Entwickler dürfen keine Anmeldeinformationen im Code oder in Konfigurationsdateien speichern. Welchen Identitätstyp sollte die Anwendung verwenden?",
        options: [
          { id: "A", text: "Eine verwaltete Identität", rationale: "Richtig. Eine verwaltete Identität ist eine Workload-Identität in Microsoft Entra ID, deren Anmeldeinformationen Azure automatisch verwaltet; der Entwickler muss also kein Geheimnis speichern." },
          { id: "B", text: "Ein Gastbenutzerkonto", rationale: "Gastkonten (B2B) sind für externe Personen gedacht, nicht für Anwendungen." },
          { id: "C", text: "Ein eigenes Benutzerkonto, dessen Kennwort in der Konfigurationsdatei gespeichert ist", rationale: "Genau das schließt die Anforderung aus, und ein gespeichertes Kennwort ist ein Sicherheitsrisiko." },
          { id: "D", text: "Eine Sicherheitsgruppe", rationale: "Gruppen fassen Identitäten für Zugriffszuweisungen zusammen; eine Gruppe kann sich nicht selbst anmelden." },
        ],
        answer: "A",
        explanation:
          "Workload-Identitäten sind Identitäten für Software wie Anwendungen und Dienste. Verwaltete Identitäten nehmen Azure-Ressourcen, die auf andere Dienste zugreifen müssen, das Speichern und Rotieren von Anmeldeinformationen ab.",
        reference: GUIDE,
      },
      {
        id: "sc900-d2-conditional-access",
        domain: "d2",
        objective: "Beschreiben Sie die Funktionen zur Zugriffsverwaltung von Microsoft Entra ID",
        difficulty: "foundation",
        question:
          "Benutzer sollen die mehrstufige Authentifizierung durchlaufen, wenn sie sich von außerhalb des Firmennetzwerks bei Microsoft 365 anmelden, nicht aber bei der Anmeldung aus dem Büro. Welches Microsoft Entra-Feature setzt das durch?",
        options: [
          { id: "A", text: "Zugriffsüberprüfungen", rationale: "Zugriffsüberprüfungen (Access Reviews) prüfen regelmäßig, ob Benutzer ihren Zugriff noch benötigen; einzelne Anmeldungen bewerten sie nicht." },
          { id: "B", text: "Privileged Identity Management", rationale: "PIM steuert die Just-in-Time-Aktivierung privilegierter Rollen, nicht die Anmeldebedingungen für alle Benutzer." },
          { id: "C", text: "Conditional Access", rationale: "Richtig. Richtlinien für den bedingten Zugriff (Conditional Access) werten Signale wie Standort, Gerät und Anwendung aus und gewähren dann Zugriff, blockieren ihn oder verlangen MFA." },
          { id: "D", text: "Microsoft Entra Password Protection", rationale: "Password Protection blockiert schwache Kennwörter; sie entscheidet nicht, wann MFA erforderlich ist." },
        ],
        answer: "C",
        explanation:
          "Conditional Access funktioniert nach dem Prinzip „wenn dieses Signal, dann diese Kontrolle“. Standortabhängige MFA ist ein klassisches Beispiel: Benannte Standorte wie das Büronetzwerk können anders behandelt werden als unbekannte Standorte.",
        reference: GUIDE,
      },
      {
        id: "sc900-d2-pim",
        domain: "d2",
        objective: "Beschreiben der Identitätsschutz- und Governancefunktionen von Microsoft Entra",
        difficulty: "intermediate",
        question:
          "Administratoren sollen die Rolle „Globaler Administrator“ (Global Administrator) nur dann innehaben, wenn sie sie benötigen – zeitlich begrenzt und nach Genehmigung –, und jede Aktivierung soll protokolliert werden. Welche Funktion stellt das bereit?",
        options: [
          { id: "A", text: "Microsoft Entra ID Protection", rationale: "ID Protection erkennt riskante Benutzer und Anmeldungen; eine zeitlich begrenzte Rollenaktivierung bietet es nicht." },
          { id: "B", text: "Microsoft Entra Privileged Identity Management", rationale: "Richtig. PIM bietet die Just-in-Time-Aktivierung privilegierter Rollen mit zeitlicher Begrenzung, Genehmigungsworkflows, Begründung und Überwachungsverlauf." },
          { id: "C", text: "Self-Service-Kennwortzurücksetzung", rationale: "Mit SSPR setzen Benutzer ihr eigenes Kennwort zurück; mit privilegierten Rollen hat das nichts zu tun." },
          { id: "D", text: "Synchronisierung hybrider Identitäten", rationale: "Die Synchronisierung bringt lokale Identitäten in die Cloud; sie steuert keine Rollenaktivierung." },
        ],
        answer: "B",
        explanation:
          "PIM reduziert dauerhaften privilegierten Zugriff. Benutzer werden für eine Rolle berechtigt und aktivieren sie nur bei Bedarf. Das begrenzt die Zeit, in der ein mächtiges Konto missbraucht werden könnte.",
        reference: GUIDE,
      },
      {
        id: "sc900-d2-password-protection",
        domain: "d2",
        objective: "Beschreiben der Authentifizierungsfunktionen von Microsoft Entra ID",
        difficulty: "intermediate",
        question:
          "Ihr Sicherheitsteam möchte verhindern, dass Benutzer Kennwörter wählen, die den Firmennamen oder die Namen lokaler Sportvereine enthalten. Welche Funktion sollten Sie verwenden?",
        options: [
          { id: "A", text: "Benannte Standorte für Conditional Access", rationale: "Benannte Standorte beschreiben vertrauenswürdige Netzwerke oder Länder für Conditional Access; den Inhalt von Kennwörtern prüfen sie nicht." },
          { id: "B", text: "Zugriffsüberprüfungen", rationale: "Bei Zugriffsüberprüfungen geht es darum, ob Benutzer ihren Zugriff noch benötigen, nicht um die Qualität von Kennwörtern." },
          { id: "C", text: "Eine Anmelderisikorichtlinie von Microsoft Entra ID Protection", rationale: "Anmelderisikorichtlinien reagieren auf verdächtige Anmeldungen; sie verhindern nicht, dass schwache Kennwörter festgelegt werden." },
          { id: "D", text: "Microsoft Entra Password Protection (Kennwortschutz) mit einer benutzerdefinierten Liste gesperrter Kennwörter", rationale: "Richtig. Password Protection blockiert bekannte schwache Kennwörter und lässt Sie organisationsspezifische Begriffe in eine benutzerdefinierte Liste gesperrter Kennwörter aufnehmen." },
        ],
        answer: "D",
        explanation:
          "Password Protection kombiniert eine globale Liste gesperrter Kennwörter mit einer benutzerdefinierten Liste für Begriffe, die für Ihre Organisation typisch sind. Sie gehört zu den Funktionen für Kennwortschutz und -verwaltung, die in der Gliederung genannt werden.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Funktionen von Microsoft-Sicherheitslösungen ── */
      {
        id: "sc900-d3-bastion",
        domain: "d3",
        objective: "Beschreiben der Sicherheitsdienste für die Kerninfrastruktur in Azure",
        difficulty: "foundation",
        question:
          "Administratoren benötigen RDP- und SSH-Zugriff auf virtuelle Azure-Computer direkt aus dem Azure-Portal über TLS, ohne dass die virtuellen Computer öffentliche IP-Adressen erhalten. Welcher Dienst erfüllt diese Anforderung?",
        options: [
          { id: "A", text: "Netzwerksicherheitsgruppen", rationale: "NSGs filtern Datenverkehr anhand von Regeln, bieten aber keine browserbasierte RDP- oder SSH-Verbindung zu VMs ohne öffentliche IP-Adresse." },
          { id: "B", text: "Azure DDoS Protection", rationale: "DDoS Protection schützt öffentliche Endpunkte vor volumetrischen Angriffen; Remotezugriff bietet es nicht." },
          { id: "C", text: "Azure Bastion", rationale: "Richtig. Azure Bastion stellt sichere RDP- und SSH-Verbindungen zu virtuellen Computern direkt aus dem Azure-Portal über TLS bereit, sodass die VMs keine öffentliche IP-Adresse benötigen." },
          { id: "D", text: "Azure Key Vault", rationale: "Key Vault speichert Geheimnisse, Schlüssel und Zertifikate; Verbindungen zu virtuellen Computern stellt es nicht bereit." },
        ],
        answer: "C",
        explanation:
          "RDP- oder SSH-Ports ins Internet zu öffnen ist ein häufiger Angriffsweg. Azure Bastion beseitigt dieses Risiko, indem es die Sitzung über das Portal vermittelt.",
        reference: GUIDE,
      },
      {
        id: "sc900-d3-waf",
        domain: "d3",
        objective: "Beschreiben der Sicherheitsdienste für die Kerninfrastruktur in Azure",
        difficulty: "intermediate",
        question:
          "Eine öffentliche Webanwendung muss vor gängigen Web-Exploits wie SQL-Injection und Cross-Site-Scripting geschützt werden. Welcher Azure-Dienst ist dafür vorgesehen?",
        options: [
          { id: "A", text: "Azure Web Application Firewall", rationale: "Richtig. Azure WAF untersucht HTTP-Datenverkehr und schützt Webanwendungen vor gängigen Exploits und Sicherheitslücken, darunter SQL-Injection und Cross-Site-Scripting." },
          { id: "B", text: "Netzwerksicherheitsgruppen", rationale: "NSGs filtern nach IP-Adresse, Port und Protokoll; den Inhalt von HTTP-Anfragen untersuchen sie nicht." },
          { id: "C", text: "Azure DDoS Protection", rationale: "DDoS Protection wehrt Überlastungsangriffe ab; nach Injection-Angriffen in Anfragen sucht es nicht." },
          { id: "D", text: "Azure Bastion", rationale: "Bastion bietet sicheren administrativen Zugriff auf VMs, keinen Schutz für Webanwendungen." },
        ],
        answer: "A",
        explanation:
          "Ordnen Sie die Schicht der Bedrohung zu: NSGs und Azure Firewall steuern den Netzwerkverkehr, DDoS Protection fängt Überlastungsangriffe ab, und die WAF schützt die Anwendungsschicht von Web-Apps.",
        reference: GUIDE,
      },
      {
        id: "sc900-d3-defender-for-cloud",
        domain: "d3",
        objective: "Beschreiben der Sicherheitsverwaltungsfunktionen von Azure",
        difficulty: "foundation",
        question:
          "Ihre Führungskraft möchte eine einzige Kennzahl für den Sicherheitsstatus Ihrer Azure-Ressourcen, zusammen mit Empfehlungen, wie er sich verbessern lässt. Welcher Dienst bietet das?",
        options: [
          { id: "A", text: "Microsoft Sentinel", rationale: "Sentinel ist eine SIEM- und SOAR-Lösung zum Erkennen und Abwehren von Bedrohungen, keine Bewertung des Sicherheitsstatus von Azure-Ressourcen." },
          { id: "B", text: "Microsoft Purview Compliance-Manager", rationale: "Der Compliance-Manager liefert eine Compliancebewertung für regulatorische Anforderungen, keine Bewertung des Sicherheitsstatus mit Empfehlungen zur Härtung von Ressourcen." },
          { id: "C", text: "Microsoft Defender for Office 365", rationale: "Defender for Office 365 schützt E-Mail und Tools für die Zusammenarbeit, keine Azure-Ressourcen." },
          { id: "D", text: "Microsoft Defender for Cloud", rationale: "Richtig. Das Cloud Security Posture Management (CSPM) von Defender for Cloud bewertet Ressourcen anhand von Sicherheitsrichtlinien und Standards, zeigt einen Secure Score an und listet Empfehlungen auf." },
        ],
        answer: "D",
        explanation:
          "Defender for Cloud verbindet Posture Management (Secure Score, Empfehlungen, Standards) mit Plänen zum Schutz von Workloads. Verwechseln Sie den Secure Score nicht mit der Compliancebewertung in Microsoft Purview.",
        reference: GUIDE,
      },
      {
        id: "sc900-d3-soar",
        domain: "d3",
        objective: "Beschreiben der Funktionen von Microsoft Sentinel",
        difficulty: "intermediate",
        question:
          "Wenn ein Incident mit hohem Schweregrad erstellt wird, soll Ihr SOC automatisch einen Workflow ausführen, der das betroffene Benutzerkonto deaktiviert und ein Ticket im Service-Desk-Tool eröffnet. Welches Konzept beschreibt das?",
        options: [
          { id: "A", text: "Security Information and Event Management (SIEM)", rationale: "SIEM sammelt und korreliert Daten, um Bedrohungen zu erkennen. Die hier beschriebene automatisierte Reaktion geht darüber hinaus." },
          { id: "B", text: "Security Orchestration Automated Response (SOAR)", rationale: "Richtig. Bei SOAR geht es um die Orchestrierung und Automatisierung der Reaktion auf Incidents. In Microsoft Sentinel geschieht das mit Automatisierungsregeln und Playbooks." },
          { id: "C", text: "Cloud Security Posture Management (CSPM)", rationale: "CSPM bewertet und verbessert den Konfigurationsstatus; Workflows zur Reaktion auf Incidents führt es nicht aus." },
          { id: "D", text: "Defense-in-Depth", rationale: "Defense-in-Depth ist eine mehrschichtige Sicherheitsstrategie, keine Automatisierungsfunktion." },
        ],
        answer: "B",
        explanation:
          "Microsoft Sentinel ist sowohl eine SIEM- als auch eine SOAR-Lösung. SIEM sammelt und analysiert die Signale; SOAR reagiert automatisch auf die daraus entstehenden Incidents.",
        reference: GUIDE,
      },
      {
        id: "sc900-d3-defender-office",
        domain: "d3",
        objective: "Bedrohungsschutz mit Microsoft Defender XDR beschreiben",
        difficulty: "foundation",
        question:
          "Ihre Organisation möchte, dass E-Mail-Anhänge vor der Zustellung in einer sicheren Umgebung geöffnet und URLs in Nachrichten genau in dem Moment geprüft werden, in dem ein Benutzer sie auswählt. Welcher Microsoft Defender XDR-Dienst bietet das?",
        options: [
          { id: "A", text: "Microsoft Defender for Identity", rationale: "Defender for Identity nutzt Signale aus dem lokalen Active Directory, um Identitätsangriffe zu erkennen; E-Mails scannt es nicht." },
          { id: "B", text: "Microsoft Defender for Cloud Apps", rationale: "Defender for Cloud Apps ist ein Cloud Access Security Broker für SaaS-Apps, kein Dienst zum Scannen von E-Mails." },
          { id: "C", text: "Microsoft Defender for Office 365", rationale: "Richtig. Defender for Office 365 umfasst Safe Attachments und Safe Links (Sichere Anlagen und Sichere Links), die vor schädlichen Anhängen und URLs in E-Mail und Tools für die Zusammenarbeit schützen." },
          { id: "D", text: "Microsoft Defender for Endpoint", rationale: "Defender for Endpoint schützt Geräte; E-Mail-Anhänge führt es nicht vor der Zustellung in einer sicheren Umgebung aus." },
        ],
        answer: "C",
        explanation:
          "Defender XDR bündelt mehrere Dienste mit jeweils eigenem Schwerpunkt: Office 365 für E-Mail und Zusammenarbeit, Endpoint für Geräte, Identity für lokale Identitäten und Cloud Apps für SaaS-Anwendungen.",
        reference: GUIDE,
      },
      {
        id: "sc900-d3-defender-identity",
        domain: "d3",
        objective: "Bedrohungsschutz mit Microsoft Defender XDR beschreiben",
        difficulty: "advanced",
        question:
          "Sie müssen Pass-the-Hash-Angriffe und andere Versuche von Lateral Movement gegen Ihre lokalen Active Directory Domain Services erkennen. Welcher Dienst ist dafür vorgesehen?",
        options: [
          { id: "A", text: "Microsoft Defender for Identity", rationale: "Richtig. Defender for Identity nutzt Signale aus dem lokalen Active Directory, um kompromittierte Identitäten, Lateral Movement und andere fortgeschrittene Angriffe zu erkennen." },
          { id: "B", text: "Microsoft Defender for Cloud Apps", rationale: "Defender for Cloud Apps konzentriert sich auf die Nutzung von Cloudanwendungen und Schatten-IT, nicht auf lokale Domänencontroller." },
          { id: "C", text: "Microsoft Defender Vulnerability Management", rationale: "Vulnerability Management findet und priorisiert Schwachstellen auf Geräten; laufende Identitätsangriffe erkennt es nicht." },
          { id: "D", text: "Microsoft Entra ID Protection", rationale: "ID Protection bewertet das Risiko von Cloudidentitäten und Anmeldungen in Microsoft Entra ID, nicht Angriffe auf lokale AD DS." },
        ],
        answer: "A",
        explanation:
          "Der Hinweis „lokales Active Directory“ (on-premises Active Directory) deutet auf Defender for Identity hin. Entra ID Protection ist das Gegenstück in der Cloud für riskante Benutzer und Anmeldungen in Microsoft Entra ID.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Funktionen von Microsoft-Compliancelösungen ── */
      {
        id: "sc900-d4-service-trust-portal",
        domain: "d4",
        objective: "Beschreiben des Service Trust-Portals von Microsoft und der Datenschutzprinzipien",
        difficulty: "foundation",
        question:
          "Ein externer Auditor fordert die unabhängigen Prüfberichte von Microsoft zu dessen Clouddiensten an, etwa ISO- und SOC-Berichte. Wo finden Sie diese?",
        options: [
          { id: "A", text: "Microsoft Purview Compliance-Manager", rationale: "Der Compliance-Manager hilft Ihnen, Ihre eigene Compliance zu bewerten und zu verbessern; er ist nicht die Bibliothek der Microsoft-Prüfberichte." },
          { id: "B", text: "Das Service Trust Portal", rationale: "Richtig. Das Service Trust Portal veröffentlicht die Prüfberichte von Microsoft, Compliance-Dokumente und weitere Ressourcen dazu, wie Microsoft-Clouddienste Daten schützen." },
          { id: "C", text: "Microsoft Purview Audit", rationale: "Purview Audit zeichnet Benutzer- und Administratoraktivitäten in Ihrem Mandanten auf, nicht die Prüfberichte unabhängiger Dritter über Microsoft." },
          { id: "D", text: "Das Microsoft Defender-Portal", rationale: "Das Defender-Portal dient dem Sicherheitsbetrieb (Security Operations), nicht der Compliance-Dokumentation." },
        ],
        answer: "B",
        explanation:
          "Das Service Trust Portal beantwortet die Frage „Wie schützt Microsoft seine Cloud?“. Der Compliance-Manager beantwortet die Frage „Wie gut erfüllt meine Organisation die Anforderungen?“.",
        reference: GUIDE,
      },
      {
        id: "sc900-d4-dlp",
        domain: "d4",
        objective:
          "Beschreiben der Funktionen von Microsoft Purview zum Schutz von Informationen, zur Verwaltung des Datenlebenszyklus und zur Datenverwaltung",
        difficulty: "intermediate",
        question:
          "Benutzer sollen daran gehindert werden, Kreditkartennummern per E-Mail und in Teams-Chats an externe Empfänger zu senden, und dabei einen Richtlinientipp mit der Begründung sehen. Was sollten Sie implementieren?",
        options: [
          { id: "A", text: "Eine Aufbewahrungsbezeichnung", rationale: "Aufbewahrungsbezeichnungen steuern, wie lange Inhalte aufbewahrt oder wann sie gelöscht werden, nicht ob sie geteilt werden dürfen." },
          { id: "B", text: "Insider-Risikomanagement", rationale: "Das Insider-Risikomanagement korreliert Signale, um riskantes Benutzerverhalten zu erkennen; es ist nicht die Kontrolle, die eine bestimmte Nachricht mit vertraulichen Daten blockiert." },
          { id: "C", text: "Eine Richtlinie zur Verhinderung von Datenverlust (DLP)", rationale: "Richtig. DLP-Richtlinien erkennen vertrauliche Informationstypen wie Kreditkartennummern, können das Teilen blockieren und Benutzern Richtlinientipps anzeigen." },
          { id: "D", text: "Ein eDiscovery-Fall", rationale: "eDiscovery ermittelt, sichert und exportiert Inhalte für rechtliche Angelegenheiten; das Teilen verhindert es nicht." },
        ],
        answer: "C",
        explanation:
          "DLP schützt vertrauliche Informationen bei der Nutzung und bei der Übertragung über Speicherorte wie Exchange, Teams, SharePoint und OneDrive hinweg. Richtlinientipps helfen Benutzern, ihr Verhalten zu verstehen und zu korrigieren.",
        reference: GUIDE,
      },
      {
        id: "sc900-d4-ediscovery",
        domain: "d4",
        objective: "Beschreiben von Insiderrisiko-, eDiscovery- und Auditfunktionen in Microsoft Purview",
        difficulty: "intermediate",
        question:
          "Ihre Rechtsabteilung bereitet sich auf einen Rechtsstreit vor. Sie muss die Postfächer und OneDrive-Inhalte von fünf Mitarbeitenden sichern (Hold), diese Inhalte durchsuchen und die Ergebnisse für die Anwälte exportieren. Welche Microsoft Purview-Lösung sollte sie verwenden?",
        options: [
          { id: "A", text: "eDiscovery", rationale: "Richtig. Mit eDiscovery in Microsoft Purview können Sie Inhalte in die Aufbewahrung (Hold) versetzen, durchsuchen und die Ergebnisse für rechtliche und investigative Fälle exportieren." },
          { id: "B", text: "Compliance-Manager", rationale: "Der Compliance-Manager verfolgt regulatorische Kontrollen und Verbesserungsmaßnahmen; Inhalte sichert oder exportiert er nicht." },
          { id: "C", text: "Inhalts-Explorer", rationale: "Der Inhalts-Explorer zeigt, wo vertrauliche oder bezeichnete Inhalte gespeichert sind, ist aber kein fallbasiertes Werkzeug für Aufbewahrungen und Exporte." },
          { id: "D", text: "Vertraulichkeitsbezeichnungen", rationale: "Vertraulichkeitsbezeichnungen klassifizieren und schützen Inhalte; für Gerichtsverfahren sichern sie sie nicht." },
        ],
        answer: "A",
        explanation:
          "Bei eDiscovery geht es darum, Inhalte für rechtliche Angelegenheiten zu ermitteln, zu sichern, zu sammeln und zu exportieren. Audit zeichnet auf, was Benutzer getan haben; eDiscovery befasst sich mit den Inhalten selbst.",
        reference: GUIDE,
      },
    ],
  },
};
