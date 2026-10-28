import type { DeContent } from "@/config/types";

/**
 * German edition of the AZ-104 guide and free practice questions.
 * Faithful translation of src/content/guides/az-104.ts and
 * src/content/practice-questions/az-104.ts. Exam facts match the verified
 * `exam` record in src/config/certifications.ts. Domain and objective names
 * follow the official German study guide on learn.microsoft.com (de-de).
 */
const GUIDE = {
  label: "Microsoft Learn — Studienleitfaden für die Prüfung AZ-104",
  url: "https://learn.microsoft.com/de-de/credentials/certifications/resources/study-guides/az-104",
};

export const az104De: DeContent = {
  slug: "az-104",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; übersetzte Fassungen werden etwa acht Wochen nach der englischen Version aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "AZ-104" },
    { label: "Dauer", value: "100 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Chinesisch (vereinfacht), Koreanisch, Japanisch, Französisch, Spanisch, Deutsch, Portugiesisch (Brasilien), Chinesisch (traditionell), Italienisch",
    },
    { label: "Durchführung", value: "Beaufsichtigte Prüfung; kann interaktive Komponenten enthalten" },
    {
      label: "Voraussetzungen",
      value:
        "Keine formalen Voraussetzungen. Microsoft erwartet Erfahrung mit PowerShell, Azure CLI, dem Azure-Portal, ARM-Vorlagen oder Bicep sowie Microsoft Entra ID. Verlängerung alle 12 Monate über eine kostenlose Onlinebewertung.",
    },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 17. April 2026" },
  ],
  domains: [
    {
      id: "d1",
      name: "Verwalten von Azure-Identitäten und Governance",
      weight: "20–25 %",
      objectives: [
        "Verwalten von Microsoft Entra-Benutzer*innen und -Gruppen",
        "Verwalten des Zugriffs auf Azure-Ressourcen",
        "Verwalten von Azure-Abonnements und Governance",
      ],
    },
    {
      id: "d2",
      name: "Implementieren und Verwalten von Speicher",
      weight: "15–20 %",
      objectives: [
        "Konfigurieren des Zugriffs auf Speicher",
        "Konfigurieren und Verwalten von Speicherkonten",
        "Konfigurieren von Azure Files und Azure Blob Storage",
      ],
    },
    {
      id: "d3",
      name: "Bereitstellen und Verwalten von Azure-Computeressourcen",
      weight: "20–25 %",
      objectives: [
        "Automatisieren der Bereitstellung von Ressourcen mithilfe von ARM-Vorlagen (Azure Resource Manager) oder Bicep-Dateien",
        "Erstellen und Konfigurieren von VMs",
        "Bereitstellen und Verwalten von Containern im Azure-Portal",
        "Erstellen und Konfigurieren von Azure App Service",
      ],
    },
    {
      id: "d4",
      name: "Implementieren und Verwalten virtueller Netzwerke",
      weight: "15–20 %",
      objectives: [
        "Konfiguration und Verwaltung virtueller Netzwerke in Azure",
        "Konfigurieren des sicheren Zugriffs auf virtuelle Netzwerke",
        "Konfigurieren der Namensauflösung und des Lastenausgleichs",
      ],
    },
    {
      id: "d5",
      name: "Überwachen und Verwalten von Azure-Ressourcen",
      weight: "10–15 %",
      objectives: ["Überwachen von Ressourcen in Azure", "Implementieren von Sicherung und Wiederherstellung"],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "az-104",
    summary:
      "AZ-104 (Microsoft Azure Administrator) prüft, ob Sie eine Azure-Umgebung implementieren, verwalten und überwachen können: Identitäten und Governance, Speicher, Compute, virtuelle Netzwerke sowie Überwachung mit Sicherung und Wiederherstellung. Die Prüfung dauert 100 Minuten, zum Bestehen brauchen Sie 700 Punkte, und die Liste der gemessenen Fähigkeiten wurde zuletzt am 17. April 2026 aktualisiert.",
    whoFor: [
      "Cloud- und Systemadministratoren, die Azure-Abonnements im Tagesgeschäft betreuen",
      "IT-Fachleute mit Erfahrung in Servern, Netzwerken und Virtualisierung, die zu Azure wechseln",
      "Technische Fachkräfte, die bereits mit dem Azure-Portal, PowerShell, Azure CLI und ARM-Vorlagen oder Bicep-Dateien arbeiten",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was AZ-104 tatsächlich prüft",
        paragraphs: [
          "AZ-104 umfasst fünf Fähigkeitsbereiche. „Verwalten von Azure-Identitäten und Governance“ (Manage Azure identities and governance, 20–25 %) und „Bereitstellen und Verwalten von Azure-Computeressourcen“ (Deploy and manage Azure compute resources, 20–25 %) haben das höchste Gewicht. Es folgen Speicher (15–20 %) und virtuelle Netzwerke (15–20 %); auf „Überwachen und Verwalten von Azure-Ressourcen“ (Monitor and maintain Azure resources) entfallen 10–15 %.",
          "Viele Fragen beschreiben eine Administrationsaufgabe und fragen nach der richtigen Einstellung, dem passenden Dienst oder dem nächsten Schritt. Typische Entscheidungen: welche Rolle in welchem Bereich (Scope), Azure Policy oder Ressourcensperre, welche Speicherredundanz oder Zugriffsmethode, Verfügbarkeitszonen oder Verfügbarkeitsgruppen, Dienstendpunkt oder privater Endpunkt und welcher Tresor mit welcher Richtlinie für Sicherung oder Site Recovery.",
        ],
      },
      {
        id: "april-2026-update",
        heading: "Was sich mit dem Update vom 17. April 2026 geändert hat",
        paragraphs: [
          "Microsoft hat alle Änderungen im Update vom April 2026 als geringfügig eingestuft. Sie betrafen das Zielgruppenprofil und fünf Gruppen von Lernzielen der Gliederung: Azure Files und Blob Storage, virtuelle Maschinen, Container im Azure-Portal, virtuelle Netzwerke und Überwachung. Für Identitäten und Governance gibt es keinen Eintrag im Änderungsprotokoll.",
          "Die aktuelle Gliederung enthält zum Beispiel die Verschlüsselung auf dem Host für virtuelle Maschinen, Azure Container Apps neben Container Instances, Azure Backup-Tresore neben Recovery Services-Tresoren sowie Network Watcher mit dem Verbindungsmonitor (Connection Monitor). Übersetzte Fassungen der Prüfung werden etwa acht Wochen nach der englischen Version aktualisiert; prüfen Sie daher den Studienleitfaden, wenn Ihr Material älter ist.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Gleichen Sie Ihren Stand mit dem Studienleitfaden ab",
            body: "Gehen Sie jeden Punkt der offiziellen AZ-104-Fähigkeitenliste durch und markieren Sie ihn als bekannt, unsicher oder neu. Teilen Sie Ihre Zeit nach den veröffentlichten Prozentsätzen ein – Identitäten und Governance sowie Compute machen jeweils bis zu 25 % aus.",
          },
          {
            title: "Richten Sie ein Lab-Abonnement ein",
            body: "Verwenden Sie ein kostenloses Azure-Konto oder ein Sandbox-Abonnement und legen Sie von Anfang an Budgets und Warnungen fest. Erstellen Sie Benutzer und Gruppen, weisen Sie Rollen in verschiedenen Bereichen zu, wenden Sie eine Richtlinie und eine Sperre an und löschen Sie die Ressourcengruppen am Ende jeder Sitzung.",
          },
          {
            title: "Erledigen Sie jede Aufgabe auf drei Wegen",
            body: "Üben Sie wichtige Aufgaben im Portal, mit Azure CLI oder PowerShell und mit einer ARM-Vorlage oder Bicep-Datei. Die Gliederung erwartet, dass Sie Vorlagen interpretieren, ändern, bereitstellen und exportieren können.",
          },
          {
            title: "Konzentrieren Sie sich auf Netzwerke und Speicherzugriff",
            body: "Bauen Sie zwei per Peering verbundene virtuelle Netzwerke mit NSGs, einer benutzerdefinierten Route, einem Load Balancer und Azure Bastion auf. Vergleichen Sie beim Speicher SAS-Token, gespeicherte Zugriffsrichtlinien, Zugriffsschlüssel, Firewalls und private Endpunkte.",
          },
          {
            title: "Üben Sie unter Zeitdruck",
            body: "Absolvieren Sie zeitlich begrenzte Übungsprüfungen mit 40–60 Fragen in 100 Minuten und lesen Sie jede Erklärung, auch bei den Fragen, die Sie richtig beantwortet haben.",
          },
          {
            title: "Buchen Sie und planen Sie die Verlängerung",
            body: "Buchen Sie, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen. Die Zertifizierung ist 12 Monate gültig und wird mit einer kostenlosen Onlinebewertung auf Microsoft Learn verlängert.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Azure RBAC mit Microsoft Entra-Rollen verwechseln. Azure-Rollen steuern den Zugriff auf Ressourcen; Entra-Rollen steuern Verzeichnisaufgaben wie die Benutzerverwaltung.",
          "Azure Policy und Ressourcensperren durcheinanderbringen. Policy prüft Ressourceneigenschaften und setzt sie durch; Sperren verhindern das Löschen oder Ändern unabhängig von Berechtigungen.",
          "Dienstendpunkte und private Endpunkte verwechseln. Ein privater Endpunkt gibt dem PaaS-Dienst eine private IP-Adresse in Ihrem virtuellen Netzwerk; ein Dienstendpunkt tut das nicht.",
          "Nur das Portal lernen. Fragen zu Vorlagen, CLI und PowerShell setzen voraus, dass Sie Code lesen und erkennen, was er bereitstellt.",
          "Sicherung und Wiederherstellung auslassen. Recovery Services-Tresore, Backup-Tresore, Sicherungsrichtlinien und das Failover mit Site Recovery kommen alle in der Gliederung vor.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die AZ-104-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Die Zertifizierungsseite von Microsoft nennt 100 Minuten. Zum Bestehen brauchen Sie 700 Punkte oder mehr. Die genaue Anzahl der Fragen für AZ-104 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Wie verlängere ich die Zertifizierung Azure Administrator?",
        answer:
          "Die Zertifizierung Azure Administrator Associate ist 12 Monate gültig. Sie verlängern sie kostenlos, indem Sie innerhalb des sechsmonatigen Verlängerungszeitraums eine Onlinebewertung auf Microsoft Learn bestehen; damit verlängert sich die Gültigkeit um ein Jahr ab dem Ablaufdatum.",
      },
      {
        question: "Was hat sich am 17. April 2026 geändert?",
        answer:
          "Microsoft nennt nur geringfügige Änderungen: das Zielgruppenprofil und die Gruppen von Lernzielen für Azure Files und Blob Storage, virtuelle Maschinen, Container, virtuelle Netzwerke und Überwachung. Für Identitäten und Governance gibt es keinen Eintrag im Änderungsprotokoll.",
      },
      {
        question: "Kann ich AZ-104 wiederholen, wenn ich nicht bestehe?",
        answer:
          "Ja. Laut Microsoft müssen Sie vor der ersten Wiederholung 24 Stunden warten und zwischen späteren Versuchen 14 Tage, bei höchstens fünf Versuchen innerhalb von 12 Monaten.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Microsoft bietet AZ-104 unter anderem auf Deutsch an. Übersetzte Fassungen werden etwa acht Wochen nach der englischen Version aktualisiert; prüfen Sie daher kurz nach einem Update den Studienleitfaden.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der von Microsoft veröffentlichten Liste der gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AZ-104 Prüfungsvorbereitung 2026: Inhalte & Lernplan",
      description:
        "AZ-104 Prüfungsvorbereitung (Stand 17. April 2026): 100 Minuten, Bestehensgrenze 700, Identität, Speicher, Compute, Netzwerke, Überwachung und Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "az-104",
    intro:
      "15 eigene AZ-104-Übungsfragen zu den fünf Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 17. April 2026), ungefähr so gewichtet wie die echte Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "AZ-104 Übungsfragen mit Lösungen und Erklärungen (2026)",
      description:
        "15 kostenlose, eigene AZ-104 Übungsfragen zu Entra ID, RBAC, Azure Policy, Speicher, VMs, Netzwerken und Sicherung – jeweils mit ausführlicher Erklärung.",
    },
    questions: [
      /* ── Bereich 1: Verwalten von Azure-Identitäten und Governance ─────── */
      {
        id: "az104-d1-rbac-scope",
        domain: "d1",
        objective: "Verwalten des Zugriffs auf Azure-Ressourcen",
        difficulty: "intermediate",
        question:
          "Ein Entwickler muss alle Ressourcen in der Ressourcengruppe RG-Dev erstellen und verwalten können, darf aber anderen Benutzern keinen Zugriff gewähren. Der Zugriff darf für keine andere Ressourcengruppe gelten. Was sollten Sie tun?",
        options: [
          { id: "A", text: "Die Rolle Owner (Besitzer) im Bereich des Abonnements zuweisen", rationale: "Owner kann anderen Zugriff gewähren, und der Abonnementbereich umfasst jede Ressourcengruppe." },
          { id: "B", text: "Die Rolle Contributor (Mitwirkender) im Bereich der Ressourcengruppe RG-Dev zuweisen", rationale: "Richtig. Contributor kann alle Ressourcen verwalten, aber keine Rollen zuweisen, und der Ressourcengruppenbereich beschränkt dies auf RG-Dev." },
          { id: "C", text: "Die Rolle Reader (Leser) im Bereich der Ressourcengruppe RG-Dev zuweisen", rationale: "Reader kann Ressourcen nur anzeigen; der Entwickler könnte nichts erstellen oder ändern." },
          { id: "D", text: "Die Rolle User Access Administrator (Benutzerzugriffsadministrator) im Bereich RG-Dev zuweisen", rationale: "Diese Rolle verwaltet nur Zugriffszuweisungen – genau das, was der Entwickler nicht tun darf." },
        ],
        answer: "B",
        explanation:
          "Wählen Sie die integrierte Rolle mit den geringsten Rechten und den engsten Bereich, der die Anforderung erfüllt. Rollenzuweisungen werden nach unten vererbt, daher würde eine Zuweisung auf Abonnementebene jede Ressourcengruppe erreichen.",
        reference: GUIDE,
      },
      {
        id: "az104-d1-policy-vs-lock",
        domain: "d1",
        objective: "Verwalten von Azure-Abonnements und Governance",
        difficulty: "intermediate",
        question:
          "Ihre Organisation verlangt, dass neue Ressourcen nur in den Regionen West Europe und North Europe erstellt werden können. Anforderungen für andere Regionen müssen blockiert werden. Was sollten Sie verwenden?",
        options: [
          { id: "A", text: "Eine ReadOnly-Ressourcensperre auf dem Abonnement", rationale: "Eine ReadOnly-Sperre blockiert Änderungen an allen Ressourcen unabhängig von der Region; sie kann nicht einige Regionen erlauben und andere verweigern." },
          { id: "B", text: "Ein Tag namens Region an jeder Ressourcengruppe", rationale: "Tags sind Metadaten; für sich genommen blockieren sie keine Bereitstellungen." },
          { id: "C", text: "Eine Azure Policy-Zuweisung mit der Definition für zulässige Standorte (Allowed locations)", rationale: "Richtig. Azure Policy kann Bereitstellungen verweigern, deren Standort nicht in einer genehmigten Liste steht." },
          { id: "D", text: "Ein Budget mit einer Warnung bei 100 %", rationale: "Budgets verfolgen Ausgaben und lösen Warnungen aus; sie steuern nicht, wo Ressourcen bereitgestellt werden." },
        ],
        answer: "C",
        explanation:
          "Azure Policy prüft Ressourceneigenschaften wie Standort, SKU oder Tags und kann nicht konforme Anforderungen verweigern. Ressourcensperren schützen vorhandene Ressourcen vor dem Löschen oder Ändern, können aber keine Bedingungen anwenden.",
        reference: GUIDE,
      },
      {
        id: "az104-d1-lock",
        domain: "d1",
        objective: "Verwalten von Azure-Abonnements und Governance",
        difficulty: "foundation",
        question:
          "Eine Produktionsressourcengruppe enthält kritische Ressourcen. Administratoren müssen die Einstellungen dieser Ressourcen weiterhin ändern können, aber niemand soll sie versehentlich löschen können. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Eine CanNotDelete-Sperre (Delete) auf der Ressourcengruppe", rationale: "Richtig. Eine Löschsperre erlaubt das Lesen und Ändern von Ressourcen, verhindert aber das Löschen." },
          { id: "B", text: "Eine ReadOnly-Sperre auf der Ressourcengruppe", rationale: "Eine ReadOnly-Sperre würde auch die erforderlichen Konfigurationsänderungen blockieren." },
          { id: "C", text: "Die Rolle Reader (Leser) für alle Administratoren", rationale: "Mit Reader könnten Administratoren überhaupt keine Einstellungen mehr ändern." },
          { id: "D", text: "Ein Tag namens DoNotDelete", rationale: "Tags setzen für sich genommen nichts durch." },
        ],
        answer: "A",
        explanation:
          "Azure kennt zwei Sperrebenen: CanNotDelete (im Portal als Delete angezeigt) und ReadOnly. Sperren gelten für alle Benutzer, auch für Owner (Besitzer), bis die Sperre entfernt wird.",
        reference: GUIDE,
      },
      {
        id: "az104-d1-sspr",
        domain: "d1",
        objective: "Verwalten von Microsoft Entra-Benutzer*innen und -Gruppen",
        difficulty: "foundation",
        question:
          "Der Helpdesk verbringt viel Zeit damit, vergessene Kennwörter zurückzusetzen. Eine Pilotgruppe von Benutzern soll ihre Kennwörter nach Bestätigung ihrer Identität selbst zurücksetzen können. Was sollten Sie in Microsoft Entra ID konfigurieren?",
        options: [
          { id: "A", text: "Azure Policy", rationale: "Azure Policy regelt Azure-Ressourcen, nicht das Zurücksetzen von Benutzerkennwörtern." },
          { id: "B", text: "Eine Ressourcensperre auf dem Verzeichnis", rationale: "Ressourcensperren gelten für Azure-Ressourcen und haben mit Kennwörtern nichts zu tun." },
          { id: "C", text: "Zugriff für Gastbenutzer", rationale: "Gastzugriff betrifft externe Benutzer, nicht das Zurücksetzen von Kennwörtern für Mitarbeitende." },
          { id: "D", text: "Self-Service-Kennwortzurücksetzung (SSPR), beschränkt auf die Pilotgruppe", rationale: "Richtig. SSPR lässt sich für eine ausgewählte Gruppe aktivieren und verlangt von den Benutzern, ihre Identität mit den konfigurierten Methoden zu bestätigen." },
        ],
        answer: "D",
        explanation:
          "SSPR kann für keine, ausgewählte oder alle Benutzer aktiviert werden. Mit einer ausgewählten Gruppe zu beginnen ist ein üblicher Weg, die Funktion zu pilotieren, bevor sie für alle eingeführt wird.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Implementieren und Verwalten von Speicher ──────────── */
      {
        id: "az104-d2-stored-access-policy",
        domain: "d2",
        objective: "Konfigurieren des Zugriffs auf Speicher",
        difficulty: "advanced",
        question:
          "Sie stellen einem Partner mehrere Dienst-SAS-Token für einen Blobcontainer aus. Sie müssen später alle auf einmal widerrufen können, ohne die Schlüssel des Speicherkontos neu zu generieren. Was sollten Sie beim Erstellen der Token tun?",
        options: [
          { id: "A", text: "Sie als Konto-SAS-Token erstellen", rationale: "Eine Konto-SAS kann nicht mit einer gespeicherten Zugriffsrichtlinie verknüpft werden; um sie zu widerrufen, muss der Schlüssel rotiert werden, mit dem sie signiert wurde." },
          { id: "B", text: "Sie mit einer gespeicherten Zugriffsrichtlinie auf dem Container verknüpfen", rationale: "Richtig. Wenn Sie die gespeicherte Zugriffsrichtlinie löschen, umbenennen oder ihre Ablaufzeit in die Vergangenheit setzen, wird jede damit verknüpfte Dienst-SAS widerrufen." },
          { id: "C", text: "Eine sehr lange Ablaufzeit festlegen", rationale: "Eine lange Ablaufzeit verschärft das Problem und ermöglicht keinen Widerruf." },
          { id: "D", text: "Die Blobversionsverwaltung aktivieren", rationale: "Die Versionsverwaltung bewahrt frühere Versionen von Blobs auf; sie steuert nicht die Gültigkeit von SAS-Token." },
        ],
        answer: "B",
        explanation:
          "Eine gespeicherte Zugriffsrichtlinie legt Start, Ablauf und Berechtigungen auf Containerseite fest. Dienst-SAS-Token, die darauf verweisen, lassen sich zentral widerrufen – bei Ad-hoc-Token ist das ohne Schlüsselrotation nicht möglich.",
        reference: GUIDE,
      },
      {
        id: "az104-d2-redundancy",
        domain: "d2",
        objective: "Konfigurieren und Verwalten von Speicherkonten",
        difficulty: "intermediate",
        question:
          "Ein Speicherkonto muss verfügbar bleiben, wenn ein einzelnes Rechenzentrum in der primären Region ausfällt, und die Daten müssen zusätzlich in eine sekundäre Region kopiert werden, falls die gesamte primäre Region verloren geht. Welche Redundanzoption erfüllt beide Anforderungen?",
        options: [
          { id: "A", text: "Lokal redundanter Speicher (LRS)", rationale: "LRS hält Kopien nur innerhalb eines Rechenzentrums und schützt daher weder vor dem Ausfall eines Rechenzentrums noch vor einem regionalen Ausfall." },
          { id: "B", text: "Zonenredundanter Speicher (ZRS)", rationale: "ZRS verteilt Daten auf Verfügbarkeitszonen in einer Region, kopiert sie aber nicht in eine sekundäre Region." },
          { id: "C", text: "Geozonenredundanter Speicher (GZRS)", rationale: "Richtig. GZRS repliziert über Verfügbarkeitszonen in der primären Region und asynchron in eine sekundäre Region." },
          { id: "D", text: "Georedundanter Speicher (GRS)", rationale: "GRS kopiert in eine sekundäre Region, nutzt innerhalb der primären Region aber LRS, sodass der Ausfall eines einzelnen Rechenzentrums nicht über Zonen abgedeckt ist." },
        ],
        answer: "C",
        explanation:
          "Merken Sie sich die zwei Dimensionen: Zonen innerhalb der primären Region (ZRS) und eine Kopie in einer sekundären Region (GRS). GZRS kombiniert beides; RA-GZRS ergänzt den Lesezugriff auf die sekundäre Region.",
        reference: GUIDE,
      },
      {
        id: "az104-d2-lifecycle",
        domain: "d2",
        objective: "Konfigurieren von Azure Files und Azure Blob Storage",
        difficulty: "intermediate",
        question:
          "Protokolldateien in einem Blobcontainer werden im ersten Monat häufig gelesen, danach selten, und müssen nach einem Jahr gelöscht werden. Das soll automatisch und mit minimalen Kosten geschehen. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Eine Richtlinie für die Blob-Lebenszyklusverwaltung, die Blobs nach Alter in kältere Ebenen verschiebt und nach 365 Tagen löscht", rationale: "Richtig. Regeln der Lebenszyklusverwaltung können Blobs automatisch anhand ihres Alters in andere Ebenen verschieben und löschen." },
          { id: "B", text: "Vorläufiges Löschen (Soft Delete) für Blobs mit einer Aufbewahrungsdauer von 365 Tagen", rationale: "Vorläufiges Löschen hält gelöschte Blobs nur wiederherstellbar; es verschiebt oder löscht Daten nicht automatisch." },
          { id: "C", text: "Objektreplikation in ein zweites Speicherkonto", rationale: "Die Objektreplikation kopiert Blobs in ein anderes Konto und erhöht damit die Kosten, statt sie zu senken." },
          { id: "D", text: "Blobversionsverwaltung", rationale: "Die Versionsverwaltung bewahrt frühere Versionen von Blobs auf und verschiebt oder entfernt die aktuellen Versionen nicht." },
        ],
        answer: "A",
        explanation:
          "Richtlinien der Lebenszyklusverwaltung verwenden Regeln mit Bedingungen wie den Tagen seit der letzten Änderung, um Blobs zwischen Zugriffsebenen zu verschieben oder zu löschen. Das ist der Standardweg, die Speicherkosten für alternde Daten zu senken.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Bereitstellen und Verwalten von Azure-Computeressourcen */
      {
        id: "az104-d3-availability-zones",
        domain: "d3",
        objective: "Erstellen und Konfigurieren von VMs",
        difficulty: "intermediate",
        question:
          "Zwei virtuelle Maschinen führen dieselbe Webanwendung aus. Die Lösung muss weiterlaufen, wenn ein komplettes Rechenzentrum in der Region nicht mehr verfügbar ist. Wie sollten Sie die VMs bereitstellen?",
        options: [
          { id: "A", text: "In derselben Verfügbarkeitsgruppe", rationale: "Verfügbarkeitsgruppen verteilen VMs auf Fehler- und Updatedomänen innerhalb eines Rechenzentrums, sodass ein vollständiger Ausfall des Rechenzentrums beide treffen würde." },
          { id: "B", text: "In unterschiedlichen Ressourcengruppen", rationale: "Ressourcengruppen sind eine Verwaltungsgrenze, keine physische Grenze." },
          { id: "C", text: "Auf demselben dedizierten Host", rationale: "Ein einzelner Host ist ein Single Point of Failure." },
          { id: "D", text: "In unterschiedlichen Verfügbarkeitszonen", rationale: "Richtig. Verfügbarkeitszonen sind physisch getrennte Standorte innerhalb einer Region, sodass eine Zone ausfallen kann, während die andere weiterläuft." },
        ],
        answer: "D",
        explanation:
          "Verfügbarkeitsgruppen schützen vor Hardwareausfällen auf Rack-Ebene und vor Wartungen; Verfügbarkeitszonen schützen vor dem Verlust eines ganzen Rechenzentrums. Wählen Sie die Option, die zu dem im Szenario beschriebenen Ausfall passt.",
        reference: GUIDE,
      },
      {
        id: "az104-d3-bicep-export",
        domain: "d3",
        objective: "Automatisieren der Bereitstellung von Ressourcen mithilfe von ARM-Vorlagen (Azure Resource Manager) oder Bicep-Dateien",
        difficulty: "intermediate",
        question:
          "Ihr Team hat eine vorhandene ARM-Vorlage im JSON-Format und möchte sie künftig als Bicep-Datei pflegen. Wie fangen Sie am effizientesten an?",
        options: [
          { id: "A", text: "Die Vorlage von Hand in PowerShell neu schreiben", rationale: "PowerShell-Skripte sind kein Bicep, und das manuelle Neuschreiben ist langsam und fehleranfällig." },
          { id: "B", text: "Die ARM-Vorlage mit den Bicep-Tools in eine Bicep-Datei dekompilieren und das Ergebnis prüfen", rationale: "Richtig. Die Bicep-CLI kann JSON-Vorlagen in Bicep dekompilieren; die Ausgabe sollte geprüft und bereinigt werden." },
          { id: "C", text: "Die .json-Datei in .bicep umbenennen", rationale: "Bicep hat eine eigene Syntax; das Umbenennen der Datei konvertiert sie nicht." },
          { id: "D", text: "Die Vorlage bereitstellen und dann löschen", rationale: "Durch die Bereitstellung entsteht keine Bicep-Datei, die Sie pflegen könnten." },
        ],
        answer: "B",
        explanation:
          "Die Gliederung umfasst das Exportieren einer Bereitstellung als ARM-Vorlage und das Konvertieren einer ARM-Vorlage in eine Bicep-Datei. Das Dekompilieren liefert einen Ausgangspunkt, Sie sollten aber trotzdem Namen, Parameter und etwaige Warnungen prüfen.",
        reference: GUIDE,
      },
      {
        id: "az104-d3-deployment-slots",
        domain: "d3",
        objective: "Erstellen und Konfigurieren von Azure App Service",
        difficulty: "intermediate",
        question:
          "Sie müssen eine neue Version einer App Service-Web-App in Azure testen und sie dann ohne Ausfallzeit in die Produktion übernehmen, mit der Möglichkeit, bei Problemen schnell zurückzuwechseln. Was sollten Sie verwenden?",
        options: [
          { id: "A", text: "Einen zweiten App Service-Plan in einer anderen Region", rationale: "Damit entsteht eine separate Bereitstellung, aber kein integrierter Austausch und kein schnelles Rollback." },
          { id: "B", text: "Den App Service-Plan auf mehr Instanzen aufskalieren (horizontal skalieren)", rationale: "Skalieren erhöht die Kapazität; es trennt Test- und Produktionsversion nicht voneinander." },
          { id: "C", text: "Einen Stagingslot und einen Slotaustausch (Swap)", rationale: "Richtig. Sie stellen in einem Stagingslot bereit, wärmen ihn vor, tauschen ihn mit der Produktion und können bei Bedarf zurücktauschen." },
          { id: "D", text: "Eine App Service-Sicherung", rationale: "Sicherungen dienen der Wiederherstellung einer App, nicht Releases ohne Ausfallzeit." },
        ],
        answer: "C",
        explanation:
          "Bereitstellungsslots sind Live-Apps mit eigenen Hostnamen. Beim Austausch werden sie ohne Ausfallzeit getauscht, und ein erneuter Austausch ist ein schnelles Rollback. Slots erfordern einen Tarif, der sie unterstützt.",
        reference: GUIDE,
      },

      /* ── Bereich 4: Implementieren und Verwalten virtueller Netzwerke ──── */
      {
        id: "az104-d4-peering",
        domain: "d4",
        objective: "Konfiguration und Verwaltung virtueller Netzwerke in Azure",
        difficulty: "intermediate",
        question:
          "VNet-A (10.1.0.0/16) ist per Peering mit VNet-B verbunden, und VNet-B ist per Peering mit VNet-C verbunden. Es gibt weder ein virtuelles Netzwerkgerät noch Gatewaytransit. Virtuelle Maschinen in VNet-A erreichen VNet-C nicht. Was ist die einfachste Lösung?",
        options: [
          { id: "A", text: "Ein Peering zwischen VNet-A und VNet-C erstellen", rationale: "Richtig. Peering virtueller Netzwerke ist nicht transitiv, daher brauchen VNet-A und VNet-C ein eigenes Peering." },
          { id: "B", text: "VNet-B einen zweiten Adressraum hinzufügen", rationale: "Eine Änderung des Adressraums von VNet-B macht das Peering nicht transitiv." },
          { id: "C", text: "Für jede VM in VNet-C eine öffentliche IP-Adresse erstellen", rationale: "Damit werden VMs dem Internet ausgesetzt, statt die private Konnektivität herzustellen." },
          { id: "D", text: "Eine DNS-Zone für VNet-C hinzufügen", rationale: "Namensauflösung schafft keinen Netzwerkpfad." },
        ],
        answer: "A",
        explanation:
          "Ein Peering verbindet genau zwei virtuelle Netzwerke. Um über einen Hub zu routen, brauchen Sie ein virtuelles Netzwerkgerät (NVA) oder ein Gateway mit benutzerdefinierten Routen; andernfalls verbinden Sie die Netzwerke direkt per Peering.",
        reference: GUIDE,
      },
      {
        id: "az104-d4-private-endpoint",
        domain: "d4",
        objective: "Konfigurieren des sicheren Zugriffs auf virtuelle Netzwerke",
        difficulty: "advanced",
        question:
          "Eine Azure SQL-Datenbank muss aus Ihrem virtuellen Netzwerk und über ein VPN aus Ihrem lokalen Netzwerk unter einer privaten IP-Adresse erreichbar sein, und der öffentliche Netzwerkzugriff muss deaktiviert werden. Was sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Einen Dienstendpunkt für Microsoft.Sql im Subnetz", rationale: "Dienstendpunkte halten den Datenverkehr im Azure-Backbone, aber der Dienst nutzt weiterhin seinen öffentlichen Endpunkt, und für lokale Clients gibt es keine private IP-Adresse." },
          { id: "B", text: "Eine NSG-Regel, die Port 1433 zulässt", rationale: "Eine NSG filtert Datenverkehr, gibt der Datenbank aber keine private Adresse." },
          { id: "C", text: "Azure Bastion", rationale: "Bastion bietet RDP- und SSH-Zugriff auf VMs, keinen privaten Zugriff auf PaaS-Dienste." },
          { id: "D", text: "Einen privaten Endpunkt für die Datenbank im virtuellen Netzwerk", rationale: "Richtig. Ein privater Endpunkt gibt dem Dienst eine private IP-Adresse in Ihrem VNet, die aus per Peering verbundenen Netzwerken und aus dem lokalen Netzwerk erreichbar ist." },
        ],
        answer: "D",
        explanation:
          "Private Endpunkte holen den PaaS-Dienst in Ihren Adressraum, sodass der öffentliche Zugriff abgeschaltet werden kann. Planen Sie DNS so, dass Clients den Dienstnamen in die private IP-Adresse auflösen.",
        reference: GUIDE,
      },
      {
        id: "az104-d4-nsg",
        domain: "d4",
        objective: "Konfigurieren des sicheren Zugriffs auf virtuelle Netzwerke",
        difficulty: "advanced",
        question:
          "Eine NSG an einem Subnetz hat eine eingehende Regel, die TCP 443 von jeder Quelle mit Priorität 200 zulässt, und eine eingehende Regel, die den gesamten Datenverkehr aus dem Internet mit Priorität 100 verweigert. Erreicht HTTPS-Datenverkehr aus dem Internet die VMs im Subnetz?",
        options: [
          { id: "A", text: "Ja, weil Zulassungsregeln immer Vorrang vor Verweigerungsregeln haben", rationale: "NSGs bevorzugen keine Zulassungsregeln; sie verarbeiten Regeln nach Priorität." },
          { id: "B", text: "Ja, weil Port 443 in Azure immer geöffnet ist", rationale: "Für eingehenden Internetdatenverkehr ist standardmäßig kein Port geöffnet, solange keine Regel ihn zulässt." },
          { id: "C", text: "Nein, weil die Verweigerungsregel die niedrigere Nummer hat und zuerst verarbeitet wird", rationale: "Richtig. Niedrigere Nummern bedeuten höhere Priorität. Die Verarbeitung endet beim ersten Treffer, daher blockiert die Verweigerungsregel mit 100 den Datenverkehr." },
          { id: "D", text: "Nein, weil NSGs keinen Datenverkehr in Subnetzen filtern können", rationale: "NSGs können Subnetzen und Netzwerkschnittstellen zugeordnet werden." },
        ],
        answer: "C",
        explanation:
          "Um effektive Sicherheitsregeln auszuwerten, folgen Sie der Prioritätsreihenfolge: Die niedrigste Nummer wird zuerst geprüft, und die erste passende Regel gewinnt. Damit HTTPS durchkommt, geben Sie der Zulassungsregel eine niedrigere Nummer als der Verweigerungsregel (zum Beispiel 443 mit 100 zulassen und die Verweigerungsregel auf 110 verschieben).",
        reference: GUIDE,
      },

      /* ── Bereich 5: Überwachen und Verwalten von Azure-Ressourcen ──────── */
      {
        id: "az104-d5-action-group",
        domain: "d5",
        objective: "Überwachen von Ressourcen in Azure",
        difficulty: "foundation",
        question:
          "Wenn die CPU-Auslastung einer Produktions-VM 15 Minuten lang über 90 % liegt, muss das Betriebsteam eine E-Mail und eine SMS erhalten. Was konfigurieren Sie in Azure Monitor?",
        options: [
          { id: "A", text: "Eine Diagnoseeinstellung, die Metriken an ein Speicherkonto sendet", rationale: "Diagnoseeinstellungen leiten Daten weiter; sie benachrichtigen niemanden." },
          { id: "B", text: "Eine Metrikwarnungsregel mit einer Aktionsgruppe, die E-Mail- und SMS-Benachrichtigungen enthält", rationale: "Richtig. Die Warnungsregel definiert die Bedingung; die Aktionsgruppe legt fest, wer wie benachrichtigt wird." },
          { id: "C", text: "Eine Ressourcensperre auf der VM", rationale: "Sperren schützen Ressourcen vor Änderungen und haben mit Warnungen nichts zu tun." },
          { id: "D", text: "Eine Empfehlung von Azure Advisor", rationale: "Advisor gibt Best-Practice-Empfehlungen; er warnt nicht bei Live-Metriken." },
        ],
        answer: "B",
        explanation:
          "Warnungsregeln, Aktionsgruppen und Warnungsverarbeitungsregeln arbeiten zusammen: Die Regel erkennt, die Aktionsgruppe benachrichtigt oder handelt, und Verarbeitungsregeln können Aktionen unterdrücken oder hinzufügen, zum Beispiel während einer Wartung.",
        reference: GUIDE,
      },
      {
        id: "az104-d5-site-recovery",
        domain: "d5",
        objective: "Implementieren von Sicherung und Wiederherstellung",
        difficulty: "intermediate",
        question:
          "Geschäftskritische Azure-VMs müssen kontinuierlich in eine sekundäre Region repliziert werden, damit Sie innerhalb von Minuten ein Failover durchführen können, wenn die primäre Region nicht verfügbar ist. Welchen Dienst sollten Sie konfigurieren?",
        options: [
          { id: "A", text: "Azure Backup mit einer täglichen Sicherungsrichtlinie", rationale: "Tägliche Sicherungen ermöglichen eine Wiederherstellung, aber keine kontinuierliche Replikation und kein schnelles regionales Failover." },
          { id: "B", text: "Vorläufiges Löschen (Soft Delete) für Blobs", rationale: "Vorläufiges Löschen schützt Blobs vor versehentlichem Löschen, nicht VMs vor regionalen Ausfällen." },
          { id: "C", text: "Azure Monitor VM Insights", rationale: "VM Insights überwacht Leistung und Abhängigkeiten; es repliziert keine VMs." },
          { id: "D", text: "Azure Site Recovery", rationale: "Richtig. Site Recovery repliziert Azure-VMs in eine andere Region und orchestriert Failover und Failback." },
        ],
        answer: "D",
        explanation:
          "Azure Backup dient der Wiederherstellung zu einem bestimmten Zeitpunkt; Site Recovery dient der Notfallwiederherstellung mit Replikation und Failover. Viele Lösungen nutzen beides.",
        reference: GUIDE,
      },
    ],
  },
};
