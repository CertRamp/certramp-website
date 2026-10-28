import type { DeContent } from "@/config/types";

/**
 * German edition of the SC-500 guide and free practice questions.
 * Faithful translation of src/content/guides/sc-500.ts and
 * src/content/practice-questions/sc-500.ts. Domain and objective names follow
 * the official German Microsoft Learn study guide (de-de); an obvious
 * lower-case typo there ("einhaltung") is corrected.
 */
const GUIDE = {
  label: "Microsoft Learn — Studienleitfaden für SC-500 (englische Fassung)",
  url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500",
};

export const sc500De: DeContent = {
  slug: "sc-500",
  languageNote: "Die Prüfung wird auch auf Deutsch angeboten.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "SC-500" },
    { label: "Dauer", value: "120 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Japanisch, Chinesisch (vereinfacht), Chinesisch (traditionell), Koreanisch, Deutsch, Französisch, Italienisch, Portugiesisch (Brasilien), Spanisch",
    },
    {
      label: "Durchführung",
      value: "Beaufsichtigte Prüfung, Terminbuchung über Pearson VUE; kann interaktive Komponenten enthalten",
    },
    {
      label: "Voraussetzungen",
      value:
        "Keine formalen Voraussetzungen. Microsoft empfiehlt praktische Erfahrung in der Administration von Azure- und Hybridumgebungen, gute Kenntnisse von Microsoft Entra ID und Vertrautheit mit der Microsoft 365-Administration. Rollenbasierte Zertifizierungen werden jährlich über eine kostenlose Online-Bewertung auf Microsoft Learn verlängert.",
    },
    {
      label: "Prüfungsversion",
      value:
        "Prüfung SC-500: Implementing End-to-End Security Controls for Cloud and AI Workloads (Studienleitfaden zeigt „Last updated“ 13. Mai 2026; kein Datum für die gemessenen Fähigkeiten veröffentlicht)",
    },
  ],
  domains: [
    {
      id: "d1",
      name: "Verwalten von Identität, Zugriff und Governance",
      weight: "20–25 %",
      objectives: [
        "Sicherer Zugriff auf Ressourcen mithilfe von Microsoft Entra ID",
        "Schützen von Geheimnissen und Schlüsseln mit Azure Key Vault",
        "Implementieren von Governance zur Durchsetzung der Sicherheit und Einhaltung gesetzlicher Vorschriften",
      ],
    },
    {
      id: "d2",
      name: "Sicherer Speicher, Datenbanken und Netzwerk",
      weight: "25–30 %",
      objectives: [
        "Implementieren von Sicherheit für Speicherkonten",
        "Implementieren von Sicherheit für Datenbanken",
        "Implementieren der Sicherheit für Azure Netzwerkdienste",
      ],
    },
    {
      id: "d3",
      name: "Sichere Berechnung",
      weight: "20–25 %",
      objectives: [
        "Implementieren von Sicherheit für KI",
        "Implementieren von Sicherheit für Server und virtuelle Computer (VMs)",
        "Implementieren von Sicherheit für Anwendungsplattformdienste",
      ],
    },
    {
      id: "d4",
      name: "Verwalten und Überwachen des Sicherheitsstatus",
      weight: "20–25 %",
      objectives: [
        "Verwalten des Sicherheitsstatus mithilfe von Defender for Cloud",
        "Implementieren von Aktivitäten und Ereignissammlungen in Microsoft Sentinel",
        "Microsoft Security Copilot einführen",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "sc-500",
    summary:
      "SC-500 (Implementing End-to-End Security Controls for Cloud and AI Workloads) ist die Prüfung für die Zertifizierung Microsoft Certified: Cloud and AI Security Engineer Associate, die Microsoft im Mai 2026 vor der Einstellung von AZ-500 am 31. August 2026 eingeführt hat. Sie prüft, ob Sie Identitäten, Daten, Netzwerke, Compute- und KI-Workloads in Azure absichern und den Sicherheitsstatus mit Defender for Cloud, Microsoft Sentinel und Security Copilot überwachen können. Sie haben 120 Minuten Zeit und benötigen zum Bestehen 700 Punkte.",
    whoFor: [
      "Azure Security Engineers, die AZ-500 besaßen oder sich darauf vorbereitet haben und die aktuelle Zertifizierung benötigen",
      "Cloudadministratoren und -Engineers, die für die Absicherung von Azure-, Hybrid- und Multicloud-Umgebungen verantwortlich sind",
      "Sicherheitsfachleute, die KI-Workloads auf Basis von Microsoft Foundry, Copilot Studio und Microsoft 365 Copilot schützen müssen",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was SC-500 tatsächlich prüft",
        paragraphs: [
          "SC-500 umfasst vier Fähigkeitsbereiche. Am stärksten gewichtet ist die Absicherung von Speicher, Datenbanken und Netzwerk (25–30 %): Speicherfirewalls und Zugriffsrichtlinien, Sicherheit und Überwachung von Azure SQL, NSGs und Anwendungssicherheitsgruppen, Azure Virtual Network Manager, Virtual WAN, VPNs, Microsoft Entra Private Access, private Endpunkte, Private Link und Azure Firewall. Identität, Zugriff und Governance, die Absicherung von Compute-Ressourcen (einschließlich KI; offiziell „Sichere Berechnung“) und die Überwachung des Sicherheitsstatus machen jeweils 20–25 % aus.",
          "Die Lernziele sind mit „Implementieren“ und „Konfigurieren“ formuliert. Rechnen Sie daher eher mit Szenariofragen nach der richtigen Einstellung, dem richtigen Dienst oder dem nächsten Schritt als mit Definitionen. Typische Entscheidungen: PIM oder dauerhafte Rollenzuweisung, Azure RBAC-Rolle oder Key Vault-Zugriffsrichtlinie, privater Endpunkt oder Dienstendpunkt, welche Ressourcensperre, welcher Defender for Cloud-Plan und welcher Sentinel-Connector oder welche Sentinel-Rolle.",
        ],
      },
      {
        id: "how-it-differs",
        heading: "Wie SC-500 mit AZ-500 zusammenhängt",
        paragraphs: [
          "Microsoft hat die Zertifizierung Azure Security Engineer Associate, die Prüfung AZ-500 und die zugehörigen Verlängerungsbewertungen am 31. August 2026 eingestellt; sie kann weder neu erworben noch verlängert werden. In seiner Partnerankündigung vom 6. Mai 2026 hat Microsoft die Zertifizierung Cloud and AI Security Engineer Associate (SC-500) im Rahmen des Übergangs vorgestellt und beschrieben, dass sie die Rolle des Security Engineers um den Schutz von Cloud- und KI-Modellen erweitert. Die Betaversion von SC-500 startete im Mai 2026; Training und Prüfung wurden laut Microsoft für Juli 2026 erwartet.",
          "Der deutlichste neue Bereich ist „Implementieren von Sicherheit für KI“ (Implement security for AI): Datenüberexposition in SharePoint, Microsoft Purview Data Security Posture Management für Copilot und KI-Apps, Echtzeitschutz für Copilot Studio-Agents, Microsoft Entra Agent ID, AI Gateway in Azure API Management für Microsoft Foundry, Defender for AI Services, Guardrails in Foundry und das Data and AI security dashboard in Defender for Cloud. Auch Arbeitsbereiche, Rollen, Plug-ins und Agents von Microsoft Security Copilot gehören zur Gliederung. Wenn Ihr Lernmaterial nur AZ-500 abdeckt, gleichen Sie es Zeile für Zeile mit dem SC-500-Studienleitfaden ab.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Den eigenen Stand am Studienleitfaden messen",
            body: "Gehen Sie jeden Punkt der offiziellen SC-500-Liste der gemessenen Fähigkeiten durch und markieren Sie ihn als bekannt, unsicher oder neu. Erfahrung mit AZ-500 deckt einen Großteil der Inhalte zu Identität, Netzwerk und Defender for Cloud ab, die Lernziele zu KI und Security Copilot dürften aber neu sein.",
          },
          {
            title: "Eine Laborumgebung aufbauen",
            body: "Stellen Sie mit einem Azure-Abonnement und einem Microsoft 365-Testmandanten einen Key Vault, ein Speicherkonto mit privatem Endpunkt, eine VM hinter Azure Bastion und Defender for Cloud-Pläne bereit. Schalten Sie kostenpflichtige Ressourcen nach jeder Sitzung ab oder löschen Sie sie; Defender-Pläne, Firewall und Bastion werden abgerechnet, solange sie laufen.",
          },
          {
            title: "Die Netzwerkentscheidungen üben",
            body: "Netzwerk ist der größte Bereich. Sie sollten den Unterschied zwischen NSGs, Anwendungssicherheitsgruppen und Azure Firewall kennen, ebenso zwischen privaten Endpunkten und Private Link-Diensten, und wissen, wie Network Watcher zeigt, welche Regel Datenverkehr zulässt oder blockiert.",
          },
          {
            title: "Die Lernziele zur KI-Sicherheit abdecken",
            body: "Arbeiten Sie die Microsoft-Learn-Inhalte zu Purview DSPM, Defender for AI Services, Entra Agent ID und Foundry-Guardrails durch. Notieren Sie zu jedem Thema, welches Risiko es adressiert und wo Sie es konfigurieren.",
          },
          {
            title: "Unter Zeitdruck üben",
            body: "Legen Sie Übungsprüfungen in 120 Minuten ab und lesen Sie jede Erklärung, auch bei Fragen, die Sie richtig beantwortet haben. Laut Zertifizierungsseite kann die Prüfung interaktive Komponenten enthalten; machen Sie sich daher auch mit der Prüfungssandbox vertraut.",
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
          "Nur mit AZ-500-Material lernen. Die Lernziele zu KI, Security Copilot und Entra Private Access werden von älteren Kursen nicht abgedeckt.",
          "Private Endpunkte und Dienstendpunkte verwechseln. Ein privater Endpunkt gibt der PaaS-Ressource eine private IP-Adresse in Ihrem virtuellen Netzwerk; ein Dienstendpunkt nicht.",
          "Azure RBAC und Microsoft Entra-Rollen durcheinanderbringen. Azure-Rollen steuern Azure-Ressourcen, Entra-Rollen steuern Verzeichnisobjekte und -einstellungen. Die Gliederung verlangt benutzerdefinierte Rollen beider Art.",
          "Defender for Cloud als einen einzigen Schalter behandeln. Sie sollten wissen, was das grundlegende (kostenlose) CSPM, Defender CSPM und die einzelnen Workload-Schutzpläne (Servers, Storage, Databases, Containers, Key Vault, AI Services) jeweils hinzufügen.",
          "Die Einrichtung von Sentinel übersehen. Arbeitsbereiche, Rollen, Content Hub, Connectors, benutzerdefinierte Protokolltabellen, Automatisierung und Aufbewahrung kommen alle im Bereich Sicherheitsstatus vor.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die SC-500-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 120 Minuten Zeit. Microsoft verlangt zum Bestehen 700 Punkte oder mehr. Die genaue Fragenzahl für SC-500 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten seiner Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Ist SC-500 der Ersatz für AZ-500?",
        answer:
          "AZ-500 und die Zertifizierung Azure Security Engineer Associate wurden am 31. August 2026 eingestellt. Microsoft hat die Zertifizierung Cloud and AI Security Engineer Associate (SC-500) im Rahmen dieses Übergangs eingeführt; sie deckt die Rolle des Security Engineers ab, ergänzt um den Schutz von Cloud- und KI-Workloads.",
      },
      {
        question: "Wie verlängere ich die Zertifizierung Cloud and AI Security Engineer Associate?",
        answer:
          "Wie andere rollenbasierte Microsoft-Zertifizierungen wird sie jährlich kostenlos verlängert, indem Sie innerhalb des sechsmonatigen Zeitraums vor dem Ablauf eine Online-Bewertung auf Microsoft Learn bestehen.",
      },
      {
        question: "Brauche ich für SC-500 eine Zertifizierung als Voraussetzung?",
        answer:
          "Eine formale Voraussetzung ist nicht aufgeführt. Microsoft empfiehlt praktische Erfahrung in der Administration von Azure- und Hybridumgebungen, gute Kenntnisse von Microsoft Entra ID und Vertrautheit mit der Microsoft 365-Administration.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. SC-500 wird laut Microsoft auch auf Deutsch angeboten, neben Englisch und weiteren Sprachen wie Französisch, Italienisch und Spanisch.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der von Microsoft veröffentlichten Gliederung der gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "SC-500 Prüfungsvorbereitung 2026: AZ-500-Nachfolger",
      description:
        "SC-500 Leitfaden: 120 Minuten, Bestehensgrenze 700, die vier Fähigkeitsbereiche, der Nachfolger von AZ-500, neue KI-Sicherheitsziele und ein Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "sc-500",
    intro:
      "15 eigene SC-500-Übungsfragen zu den vier Fähigkeitsbereichen des Microsoft-Studienleitfadens für Implementing End-to-End Security Controls for Cloud and AI Workloads, ungefähr wie in der echten Prüfung gewichtet. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Antwortoption falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "SC-500 Übungsfragen mit Lösungen & Erklärungen (2026)",
      description:
        "15 kostenlose, eigene SC-500-Übungsfragen zu Entra ID, Key Vault, Netzwerksicherheit, KI- und VM-Sicherheit, Defender for Cloud und Sentinel – erklärt.",
    },
    questions: [
      /* ── Bereich 1: Verwalten von Identität, Zugriff und Governance ── */
      {
        id: "sc500-d1-pim-eligible",
        domain: "d1",
        objective: "Sicherer Zugriff auf Ressourcen mithilfe von Microsoft Entra ID",
        difficulty: "intermediate",
        question:
          "Drei Engineers benötigen gelegentlich die Rolle „Besitzer“ (Owner) für ein Produktionsabonnement. Die Rolle darf nicht dauerhaft aktiv sein, jede Aktivierung muss eine Genehmigung und eine Begründung erfordern, und der Zugriff muss nach einigen Stunden automatisch enden. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Eine dauerhafte (aktive) Owner-Zuweisung mit einer Conditional-Access-Richtlinie, die MFA verlangt", rationale: "MFA stärkt die Anmeldung, aber die Rolle wäre weiterhin ständig aktiv, was die Anforderung ausschließt." },
          { id: "B", text: "Eine benutzerdefinierte Azure-Rolle mit weniger Berechtigungen als Owner", rationale: "Minimale Berechtigungen sind gute Praxis, aber auch eine dauerhaft zugewiesene benutzerdefinierte Rolle bietet keine zeitlich begrenzte Aktivierung mit Genehmigung." },
          { id: "C", text: "Eine berechtigte Zuweisung der Owner-Rolle in Privileged Identity Management, bei der die Aktivierung eine Genehmigung erfordert", rationale: "Richtig. Berechtigte PIM-Zuweisungen müssen vor der Nutzung aktiviert werden, können Genehmigung und Begründung verlangen und laufen nach der konfigurierten Aktivierungsdauer ab." },
          { id: "D", text: "Eine vierteljährliche Zugriffsüberprüfung der Owner-Rolle", rationale: "Zugriffsüberprüfungen finden Zuweisungen, die nicht mehr benötigt werden, machen den Zugriff aber nicht zu einem Just-in-Time-Zugriff." },
        ],
        answer: "C",
        explanation:
          "Privileged Identity Management macht aus dauerhaftem Zugriff einen Just-in-Time-Zugriff. Berechtigte Zuweisungen, Aktivierungseinstellungen (Dauer, Genehmigung, MFA, Begründung) und der Überwachungsverlauf sind die Kernfunktionen für Rollen für Azure-Ressourcen und Microsoft Entra-Rollen.",
        reference: GUIDE,
      },
      {
        id: "sc500-d1-keyvault-rbac",
        domain: "d1",
        objective: "Schützen von Geheimnissen und Schlüsseln mit Azure Key Vault",
        difficulty: "intermediate",
        question:
          "Ein Key Vault verwendet das Azure RBAC-Berechtigungsmodell. Die verwaltete Identität einer Anwendung soll die Werte von Geheimnissen lesen können, sie aber nicht erstellen, ändern oder löschen dürfen. Welche integrierte Rolle sollten Sie im Bereich des Key Vault zuweisen?",
        options: [
          { id: "A", text: "Key Vault Secrets User", rationale: "Richtig. Key Vault Secrets User erlaubt das Lesen von Geheimnisinhalten und nichts darüber hinaus und erfüllt damit das Prinzip der minimalen Berechtigungen." },
          { id: "B", text: "Key Vault Reader", rationale: "Key Vault Reader kann Metadaten des Tresors und seiner Objekte lesen, aber nicht die Geheimniswerte, die die Anwendung benötigt." },
          { id: "C", text: "Key Vault Secrets Officer", rationale: "Secrets Officer kann Geheimnisse außerdem erstellen, aktualisieren und löschen, was über die Anforderung hinausgeht." },
          { id: "D", text: "Contributor", rationale: "Contributor verwaltet die Tresorressource selbst (Verwaltungsebene); Zugriff auf Datenebene zum Lesen von Geheimniswerten gewährt die Rolle nicht." },
        ],
        answer: "A",
        explanation:
          "Beim RBAC-Berechtigungsmodell wird der Zugriff auf Datenebene auf Schlüssel, Geheimnisse und Zertifikate über eigene Key Vault-Rollen gewährt. Rollen der Verwaltungsebene wie Contributor geben keinen Zugriff auf Geheimniswerte.",
        reference: GUIDE,
      },
      {
        id: "sc500-d1-resource-lock",
        domain: "d1",
        objective: "Implementieren von Governance zur Durchsetzung der Sicherheit und Einhaltung gesetzlicher Vorschriften",
        difficulty: "foundation",
        question:
          "Administratoren sollen die Konfiguration eines virtuellen Produktionsnetzwerks weiterhin ändern können, aber niemand – nicht einmal ein Owner – soll es versehentlich löschen können, ohne zuvor einen Schutz zu entfernen. Was sollten Sie anwenden?",
        options: [
          { id: "A", text: "Eine ReadOnly-Ressourcensperre", rationale: "ReadOnly verhindert das Löschen, blockiert aber auch Konfigurationsänderungen, die Administratoren weiterhin vornehmen müssen." },
          { id: "B", text: "Eine Azure Policy-Zuweisung mit der Auswirkung „Audit“", rationale: "Audit meldet nur Nichtkonformität; verhindert wird dadurch nichts." },
          { id: "C", text: "Allen Administratoren die Owner-Rolle entziehen", rationale: "Damit könnten Administratoren das Netzwerk gar nicht mehr verwalten, und versehentliches Löschen durch verbleibende privilegierte Benutzer wäre trotzdem nicht gezielt verhindert." },
          { id: "D", text: "Eine CanNotDelete-Ressourcensperre (Delete)", rationale: "Richtig. Eine CanNotDelete-Sperre erlaubt berechtigten Benutzern, die Ressource zu lesen und zu ändern, verhindert aber das Löschen, bis die Sperre entfernt wird." },
        ],
        answer: "D",
        explanation:
          "Ressourcensperren gelten für alle Benutzer und Rollen, auch für Owner. CanNotDelete schützt vor dem Löschen und erlaubt Änderungen; ReadOnly schützt vor beidem, was den normalen Betrieb stören kann.",
        reference: GUIDE,
      },
      {
        id: "sc500-d1-policy-deny",
        domain: "d1",
        objective: "Implementieren von Governance zur Durchsetzung der Sicherheit und Einhaltung gesetzlicher Vorschriften",
        difficulty: "intermediate",
        question:
          "Ihre Sicherheitsstandards verlangen, dass kein Speicherkonto in Ihren Abonnements mit aktiviertem öffentlichem Netzwerkzugriff erstellt oder aktualisiert werden kann. Nicht konforme Bereitstellungen sollen fehlschlagen. Was sollten Sie implementieren?",
        options: [
          { id: "A", text: "Eine Defender for Cloud-Empfehlung", rationale: "Empfehlungen zeigen nicht konforme Ressourcen an und helfen bei der Behebung, blockieren für sich allein aber keine Bereitstellungen." },
          { id: "B", text: "Eine Azure Policy-Zuweisung mit der Auswirkung „Deny“ für Speicherkonten mit aktiviertem öffentlichem Netzwerkzugriff", rationale: "Richtig. Eine Richtlinie mit der Auswirkung „Deny“ wird bei Erstellungs- und Aktualisierungsanforderungen ausgewertet und lehnt Ressourcen ab, die die Regel nicht erfüllen." },
          { id: "C", text: "Eine CanNotDelete-Ressourcensperre für jedes Speicherkonto", rationale: "Sperren verhindern das Löschen; sie steuern nicht, welche Einstellungen eine neue Ressource haben darf." },
          { id: "D", text: "Eine benutzerdefinierte Azure-Rolle ohne Speicherberechtigungen", rationale: "Das Entziehen von Berechtigungen würde alle Speicherbereitstellungen blockieren, statt eine bestimmte sichere Konfiguration durchzusetzen." },
        ],
        answer: "B",
        explanation:
          "Azure Policy setzt Regeln zum Zeitpunkt der Bereitstellung durch. Verwenden Sie Deny, um nicht konforme Konfigurationen zu verhindern, Audit, um sie zu melden, und Korrekturauswirkungen wie Modify oder DeployIfNotExists, um sie zu beheben.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Sicherer Speicher, Datenbanken und Netzwerk ── */
      {
        id: "sc500-d2-private-endpoint",
        domain: "d2",
        objective: "Implementieren der Sicherheit für Azure Netzwerkdienste",
        difficulty: "intermediate",
        question:
          "Anwendungen in einem virtuellen Netzwerk sollen eine Azure SQL-Datenbank über eine private IP-Adresse in diesem virtuellen Netzwerk erreichen, und die Datenbank darf über ihren öffentlichen Endpunkt nicht erreichbar sein. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Einen VNet-Dienstendpunkt für Microsoft.Sql", rationale: "Dienstendpunkte leiten den Datenverkehr über das Azure-Backbone, aber die Datenbank behält ihren öffentlichen Endpunkt und erhält keine private IP-Adresse in Ihrem virtuellen Netzwerk." },
          { id: "B", text: "Einen privaten Endpunkt für den logischen Server, und den öffentlichen Netzwerkzugriff deaktivieren", rationale: "Richtig. Ein privater Endpunkt gibt der PaaS-Ressource eine private IP-Adresse in Ihrem virtuellen Netzwerk; das Deaktivieren des öffentlichen Netzwerkzugriffs schließt den öffentlichen Endpunkt." },
          { id: "C", text: "Eine Netzwerksicherheitsgruppe auf der Datenbank", rationale: "NSGs werden auf Subnetze und Netzwerkschnittstellen angewendet, nicht auf den Dienst Azure SQL-Datenbank selbst." },
          { id: "D", text: "Azure Bastion", rationale: "Bastion bietet RDP- und SSH-Zugriff auf virtuelle Computer; private Konnektivität zu PaaS-Diensten bietet es nicht." },
        ],
        answer: "B",
        explanation:
          "Private Endpunkte holen eine PaaS-Ressource über Azure Private Link in Ihr virtuelles Netzwerk. Kombinieren Sie sie mit privatem DNS, damit der Dienstname auf die private IP-Adresse aufgelöst wird.",
        reference: GUIDE,
      },
      {
        id: "sc500-d2-asg",
        domain: "d2",
        objective: "Implementieren der Sicherheit für Azure Netzwerkdienste",
        difficulty: "intermediate",
        question:
          "Webserver und Datenbankserver teilen sich ein Subnetz, und VMs werden häufig hinzugefügt und entfernt. Sie möchten NSG-Regeln wie „TCP 1433 von Webservern zu Datenbankservern zulassen“, ohne Listen von IP-Adressen zu pflegen. Was sollten Sie verwenden?",
        options: [
          { id: "A", text: "Anwendungssicherheitsgruppen als Quelle und Ziel in der NSG-Regel", rationale: "Richtig. Anwendungssicherheitsgruppen fassen die Netzwerkschnittstellen von VMs nach ihrer Rolle zusammen, und NSG-Regeln können statt auf IP-Adressen auf sie verweisen." },
          { id: "B", text: "Diensttags", rationale: "Diensttags stehen für Azure-Dienste wie Storage oder Sql, nicht für Ihre eigenen Gruppen von VMs." },
          { id: "C", text: "Eine eigene Routingtabelle für jede VM", rationale: "Routingtabellen steuern, wohin Datenverkehr gesendet wird; nach Workload-Rolle zulassen oder verweigern können sie ihn nicht." },
          { id: "D", text: "Azure DDoS Protection", rationale: "DDoS Protection wehrt volumetrische Angriffe ab; Regeln für den Datenverkehr zwischen VMs definiert es nicht." },
        ],
        answer: "A",
        explanation:
          "Mit Anwendungssicherheitsgruppen formulieren Sie Netzwerkrichtlinien in Begriffen von Workloads. Wird die Netzwerkschnittstelle einer neuen VM der richtigen Gruppe hinzugefügt, gelten die vorhandenen NSG-Regeln automatisch.",
        reference: GUIDE,
      },
      {
        id: "sc500-d2-stored-access-policy",
        domain: "d2",
        objective: "Implementieren von Sicherheit für Speicherkonten",
        difficulty: "advanced",
        question:
          "Ein Partner erhält Dienst-SAS-Token, um Blobs in einem Container zu lesen. Falls ein Token offengelegt wird, müssen Sie es schnell widerrufen können, ohne die Speicherkontoschlüssel zu rotieren, die von anderen Anwendungen genutzt werden. Was sollten Sie beim Ausstellen der Token tun?",
        options: [
          { id: "A", text: "Konto-SAS-Token mit sehr langer Gültigkeit ausstellen", rationale: "Eine Konto-SAS ist weiter gefasst als nötig, und eine lange Gültigkeit verschlimmert ein Leck. Ad-hoc-Token lassen sich nur durch Rotieren des Signaturschlüssels widerrufen." },
          { id: "B", text: "Den Container öffentlich machen, statt SAS zu verwenden", rationale: "Anonymer öffentlicher Zugriff nimmt jede Kontrolle darüber, wer die Daten liest." },
          { id: "C", text: "Den Speicherkontoschlüssel mit dem Partner teilen", rationale: "Der Kontoschlüssel gewährt Vollzugriff auf das gesamte Speicherkonto und lässt sich weder einschränken noch ohne Rotation widerrufen." },
          { id: "D", text: "Die Dienst-SAS-Token mit einer gespeicherten Zugriffsrichtlinie für den Container verknüpfen", rationale: "Richtig. Eine Dienst-SAS, die mit einer gespeicherten Zugriffsrichtlinie verknüpft ist, lässt sich durch Ändern oder Löschen der Richtlinie widerrufen, ohne die Kontoschlüssel zu rotieren." },
        ],
        answer: "D",
        explanation:
          "Gespeicherte Zugriffsrichtlinien geben serverseitige Kontrolle über Startzeit, Ablauf und Berechtigungen von Dienst-SAS-Token. Eine mit Microsoft Entra-Anmeldeinformationen signierte SAS für die Benutzerdelegierung (User Delegation SAS) ist ein weiterer Weg, um ohne Kontoschlüssel auszukommen.",
        reference: GUIDE,
      },
      {
        id: "sc500-d2-network-watcher",
        domain: "d2",
        objective: "Implementieren der Sicherheit für Azure Netzwerkdienste",
        difficulty: "intermediate",
        question:
          "Eine VM erreicht einen Back-End-Server über TCP 443 nicht. Mehrere NSGs sind auf Subnetz- und Netzwerkschnittstellenebene angewendet, und Sie müssen schnell herausfinden, ob der Datenverkehr zugelassen oder verweigert wird und welche Regel darüber entscheidet. Welches Werkzeug sollten Sie verwenden?",
        options: [
          { id: "A", text: "Metrikwarnungen in Azure Monitor", rationale: "Metrikwarnungen benachrichtigen Sie bei Schwellenwerten; NSG-Regeln für einen bestimmten Datenfluss werten sie nicht aus." },
          { id: "B", text: "Microsoft Defender External Attack Surface Management", rationale: "EASM ermittelt aus dem Internet erreichbare Ressourcen; Datenverkehr zwischen zwei VMs diagnostiziert es nicht." },
          { id: "C", text: "IP-Flussüberprüfung (IP flow verify) in Azure Network Watcher", rationale: "Richtig. Die IP-Flussüberprüfung prüft, ob ein Paket von oder zu einer VM zugelassen oder verweigert wird, und nennt die Sicherheitsregel, die die Entscheidung getroffen hat." },
          { id: "D", text: "Kostenempfehlungen von Azure Advisor", rationale: "Kostenempfehlungen haben nichts mit der Auswertung von Netzwerksicherheitsregeln zu tun." },
        ],
        answer: "C",
        explanation:
          "Diagnosen von Network Watcher wie die IP-Flussüberprüfung und die effektiven Sicherheitsregeln zeigen das kombinierte Ergebnis aller NSGs, die für eine Netzwerkschnittstelle gelten. Das ist schneller und zuverlässiger, als jede NSG einzeln zu lesen.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Sichere Berechnung ── */
      {
        id: "sc500-d3-jit",
        domain: "d3",
        objective: "Implementieren von Sicherheit für Server und virtuelle Computer (VMs)",
        difficulty: "foundation",
        question:
          "Verwaltungsports (RDP und SSH) Ihrer Azure-VMs sollen standardmäßig geschlossen sein und nur für einen genehmigten Benutzer, von dessen IP-Adresse aus und für begrenzte Zeit geöffnet werden. Welches Feature bietet das?",
        options: [
          { id: "A", text: "Azure Disk Encryption", rationale: "Die Datenträgerverschlüsselung schützt ruhende Daten; den Netzwerkzugriff auf Verwaltungsports steuert sie nicht." },
          { id: "B", text: "Azure Machine Configuration", rationale: "Machine Configuration überwacht und erzwingt Einstellungen innerhalb des Betriebssystems; Ports auf Anforderung öffnet sie nicht." },
          { id: "C", text: "Just-in-Time-VM-Zugriff (JIT) in Defender for Servers", rationale: "Richtig. JIT-VM-Zugriff sperrt Verwaltungsports mit NSG- oder Azure Firewall-Regeln und öffnet sie auf Anforderung für eine bestimmte Quelle und ein bestimmtes Zeitfenster." },
          { id: "D", text: "Agentlose Überprüfung für VMs", rationale: "Die agentlose Überprüfung sucht auf Datenträgern nach Sicherheitsrisiken und Geheimnissen; den Portzugriff steuert sie nicht." },
        ],
        answer: "C",
        explanation:
          "JIT-VM-Zugriff verringert die Angriffsfläche für Brute-Force-Angriffe auf Verwaltungsports. Azure Bastion ist die ergänzende Option, wenn Sie diese Ports gar nicht mehr öffentlich erreichbar machen möchten.",
        reference: GUIDE,
      },
      {
        id: "sc500-d3-defender-ai",
        domain: "d3",
        objective: "Implementieren von Sicherheit für KI",
        difficulty: "intermediate",
        question:
          "Ihr Unternehmen betreibt generative KI-Anwendungen auf Basis von Microsoft Foundry. Das Sicherheitsteam möchte in Defender for Cloud Warnungen zu Bedrohungen wie Jailbreak-Versuchen und dem Abfluss sensibler Daten in diesen KI-Workloads erhalten. Was sollten Sie aktivieren?",
        options: [
          { id: "A", text: "Den Plan Defender for AI Services in Defender for Cloud", rationale: "Richtig. Defender for AI Services bietet Bedrohungsschutz für KI-Workloads und löst in Defender for Cloud Sicherheitswarnungen aus, etwa bei Jailbreak-Versuchen und Datenabfluss." },
          { id: "B", text: "Defender for Storage", rationale: "Defender for Storage schützt Speicherkonten vor Bedrohungen wie hochgeladener Schadsoftware; Interaktionen mit KI-Modellen überwacht es nicht." },
          { id: "C", text: "Azure DDoS Protection", rationale: "DDoS Protection behandelt Überflutungen auf Netzwerkebene, keine promptbasierten Angriffe auf KI-Anwendungen." },
          { id: "D", text: "Eine ReadOnly-Ressourcensperre für die Foundry-Ressource", rationale: "Sperren verhindern Konfigurationsänderungen und das Löschen; Bedrohungen erkennen sie nicht." },
        ],
        answer: "A",
        explanation:
          "Die Gliederung nennt das Aktivieren von Defender for AI Services im Cloud-Workload-Schutz neben Foundry-Guardrails und dem Data and AI security dashboard. Guardrails verringern riskante Eingaben und Ausgaben; Defender for AI Services erkennt Bedrohungen und warnt davor.",
        reference: GUIDE,
      },
      {
        id: "sc500-d3-dspm-ai",
        domain: "d3",
        objective: "Implementieren von Sicherheit für KI",
        difficulty: "advanced",
        question:
          "Bevor Microsoft 365 Copilot breiter eingeführt wird, möchte der CISO Risiken verstehen, etwa dass sensible Daten in Prompts an KI-Apps weitergegeben werden oder Benutzer nicht genehmigte KI-Tools verwenden. Welche Lösung ist dafür gedacht, diese Risiken zu erkennen?",
        options: [
          { id: "A", text: "Azure Firewall Premium", rationale: "Azure Firewall prüft Netzwerkverkehr in Azure; Datensicherheitsrisiken bei der Nutzung von Copilot und KI-Apps bewertet sie nicht." },
          { id: "B", text: "Microsoft Entra Privileged Identity Management", rationale: "PIM steuert die Aktivierung privilegierter Rollen, nicht Datenrisiken bei KI-Interaktionen." },
          { id: "C", text: "Defender for Servers", rationale: "Defender for Servers schützt VMs und Server, nicht die Datennutzung durch Microsoft 365 Copilot." },
          { id: "D", text: "Microsoft Purview Data Security Posture Management (DSPM)", rationale: "Richtig. Die Gliederung nennt Purview DSPM, um Risiken im Zusammenhang mit Microsoft Copilot und KI-Apps zu erkennen; es zeigt KI-Aktivitäten mit sensiblen Daten und empfiehlt Richtlinien." },
        ],
        answer: "D",
        explanation:
          "KI-Sicherheit beginnt bei den Daten. Purview DSPM zeigt, wie sensible Daten mit Copilot und anderen KI-Apps verwendet werden; die Prüfung von SharePoint auf zu weit freigegebene Inhalte verringert, was Copilot Benutzern anzeigen kann, die es nicht sehen sollten.",
        reference: GUIDE,
      },
      {
        id: "sc500-d3-trusted-launch",
        domain: "d3",
        objective: "Implementieren von Sicherheit für Server und virtuelle Computer (VMs)",
        difficulty: "intermediate",
        question:
          "Neue Azure-VMs sollen mit sicherem Start (Secure Boot), einem virtuellen TPM und Überwachung der Startintegrität gegen Bootkits und Rootkits geschützt sein. Welche Einstellung sollten Sie beim Erstellen der VMs wählen?",
        options: [
          { id: "A", text: "Sicherheitstyp „Standard“ mit Azure Disk Encryption", rationale: "Die Datenträgerverschlüsselung schützt ruhende Daten; der Sicherheitstyp „Standard“ bietet weder sicheren Start noch vTPM." },
          { id: "B", text: "Sicherheitstyp „Vertrauenswürdiger Start“ (Trusted launch)", rationale: "Richtig. Der vertrauenswürdige Start aktiviert auf VMs der Generation 2 sicheren Start, ein virtuelles TPM und die Überwachung der Startintegrität." },
          { id: "C", text: "Eine Verfügbarkeitsgruppe", rationale: "Verfügbarkeitsgruppen verbessern die Ausfallsicherheit bei Hardwarefehlern; Schutz für den Startvorgang bieten sie nicht." },
          { id: "D", text: "Eine Netzwerksicherheitsgruppe auf der Netzwerkschnittstelle der VM", rationale: "NSGs filtern Netzwerkverkehr; den Startvorgang können sie nicht schützen." },
        ],
        answer: "B",
        explanation:
          "Der Sicherheitstyp einer VM wird beim Erstellen festgelegt. Der vertrauenswürdige Start ist die Basis für Startintegrität; vertrauliche VMs (Confidential VMs) ergänzen für sensiblere Workloads einen hardwarebasierten Speicherschutz.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Verwalten und Überwachen des Sicherheitsstatus ── */
      {
        id: "sc500-d4-attack-path",
        domain: "d4",
        objective: "Verwalten des Sicherheitsstatus mithilfe von Defender for Cloud",
        difficulty: "advanced",
        question:
          "Das Sicherheitsteam möchte in Defender for Cloud sehen, wie ein Angreifer eine aus dem Internet erreichbare VM mit einer bekannten Sicherheitslücke ausnutzen könnte, um zu einem Speicherkonto mit sensiblen Daten zu gelangen. Welche Funktion und welcher Plan bieten das?",
        options: [
          { id: "A", text: "Die Angriffspfadanalyse, die den Plan Defender CSPM erfordert", rationale: "Richtig. Die Angriffspfadanalyse ist eine Funktion von Defender CSPM, die den Cloudsicherheitsgraphen nutzt, um ausnutzbare Pfade zu kritischen Ressourcen zu zeigen." },
          { id: "B", text: "Die Sicherheitsbewertung (Secure Score), verfügbar mit dem grundlegenden CSPM", rationale: "Die Sicherheitsbewertung fasst den Status zusammen, zeigt aber keine mehrstufigen Pfade zwischen Ressourcen." },
          { id: "C", text: "Das Dashboard für die Einhaltung gesetzlicher Vorschriften", rationale: "Das Compliance-Dashboard ordnet Kontrollen Standards zu; Angriffspfade modelliert es nicht." },
          { id: "D", text: "Just-in-Time-VM-Zugriff", rationale: "JIT verringert die Erreichbarkeit von Ports, analysiert aber keine Angriffspfade über Ressourcen hinweg." },
        ],
        answer: "A",
        explanation:
          "Das grundlegende CSPM liefert Empfehlungen und die Sicherheitsbewertung. Defender CSPM ergänzt erweiterte Statusfunktionen wie die Angriffspfadanalyse, den Cloudsicherheits-Explorer und die agentlose Erkennung.",
        reference: GUIDE,
      },
      {
        id: "sc500-d4-sentinel-roles",
        domain: "d4",
        objective: "Implementieren von Aktivitäten und Ereignissammlungen in Microsoft Sentinel",
        difficulty: "intermediate",
        question:
          "Tier-1-Analysten sollen in Microsoft Sentinel Vorfälle zuweisen, ihren Status ändern und Kommentare hinzufügen können, dürfen aber keine Analyseregeln oder Arbeitsmappen erstellen oder bearbeiten. Welche integrierte Rolle folgt dem Prinzip der minimalen Berechtigungen?",
        options: [
          { id: "A", text: "Microsoft Sentinel Reader", rationale: "Reader können Daten, Vorfälle und Arbeitsmappen anzeigen, Vorfälle aber nicht ändern." },
          { id: "B", text: "Microsoft Sentinel Contributor", rationale: "Contributors können außerdem Analyseregeln und Arbeitsmappen erstellen und bearbeiten, was über die Anforderung hinausgeht." },
          { id: "C", text: "Microsoft Sentinel Responder", rationale: "Richtig. Responder haben die Berechtigungen von Reader und können zusätzlich Vorfälle verwalten, also zuweisen, den Status ändern und kommentieren." },
          { id: "D", text: "Owner für das Abonnement", rationale: "Owner gewährt weit mehr als nötig, einschließlich des Rechts, anderen Zugriff zuzuweisen." },
        ],
        answer: "C",
        explanation:
          "Die integrierten Sentinel-Rollen bauen aufeinander auf: Reader zeigt an, Responder verwaltet zusätzlich Vorfälle, Contributor erstellt und bearbeitet zusätzlich Inhalte. Weisen Sie Rollen im engsten Bereich zu, der funktioniert, meist im Arbeitsbereich oder in der Ressourcengruppe.",
        reference: GUIDE,
      },
      {
        id: "sc500-d4-aws-connector",
        domain: "d4",
        objective: "Verwalten des Sicherheitsstatus mithilfe von Defender for Cloud",
        difficulty: "foundation",
        question:
          "Ihre Organisation betreibt auch Workloads in Amazon Web Services. Deren Sicherheitsstatus und Empfehlungen sollen in Defender for Cloud neben Ihren Azure-Ressourcen erscheinen. Was sollten Sie tun?",
        options: [
          { id: "A", text: "Azure Bastion im AWS-Konto bereitstellen", rationale: "Bastion ist ein Azure-Dienst für den VM-Zugriff; er lässt sich nicht in AWS bereitstellen und liefert keine Statusdaten." },
          { id: "B", text: "In den Umgebungseinstellungen von Defender for Cloud einen AWS-Connector für das Konto hinzufügen", rationale: "Richtig. Defender for Cloud bindet AWS-Konten (und GCP-Projekte) über native Connectors an, bewertet sie und zeigt Empfehlungen neben den Azure-Ressourcen an." },
          { id: "C", text: "Eine Microsoft Sentinel-Watchlist mit AWS-Ressourcen erstellen", rationale: "Watchlists enthalten Referenzdaten für Abfragen; den Sicherheitsstatus bewerten sie nicht." },
          { id: "D", text: "Dem AWS-Konto eine Azure Policy mit der Auswirkung „Deny“ zuweisen", rationale: "Azure Policy-Zuweisungen zielen auf Azure-Bereiche; damit allein wird AWS nicht in Defender for Cloud eingebunden." },
        ],
        answer: "B",
        explanation:
          "Multicloud-Unterstützung gehört bei SC-500 zum Bereich Sicherheitsstatus. Connectors binden AWS und GCP in Defender for Cloud ein, und Azure Arc erweitert den Serverschutz auf Hybrid- und Multicloud-Computer.",
        reference: GUIDE,
      },
    ],
  },
};
