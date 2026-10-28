import type { DeContent } from "@/config/types";

/**
 * German edition of the AZ-900 guide and free practice questions.
 * Faithful translation of src/content/guides/az-900.ts and
 * src/content/practice-questions/az-900.ts. Exam facts match the verified
 * `exam` record in src/config/certifications.ts. Domain and objective names
 * follow the official German study guide on learn.microsoft.com (de-de).
 */
const GUIDE = {
  label: "Microsoft Learn — Studienleitfaden für die Prüfung AZ-900",
  url: "https://learn.microsoft.com/de-de/credentials/certifications/resources/study-guides/az-900",
};

export const az900De: DeContent = {
  slug: "az-900",
  languageNote:
    "Die Prüfung wird auch auf Deutsch angeboten; übersetzte Fassungen werden etwa acht Wochen nach der englischen Version aktualisiert.",
  facts: [
    { label: "Prüfungsanbieter", value: "Microsoft" },
    { label: "Prüfungscode", value: "AZ-900" },
    { label: "Dauer", value: "45 Minuten" },
    { label: "Bestehensgrenze", value: "700 oder mehr (Skala 1–1000)" },
    {
      label: "Prüfungssprachen",
      value:
        "Englisch, Japanisch, Chinesisch (vereinfacht), Koreanisch, Spanisch, Deutsch, Französisch, Indonesisch (Indonesien), Arabisch (Saudi-Arabien), Chinesisch (traditionell), Italienisch, Portugiesisch (Brasilien), Russisch",
    },
    {
      label: "Durchführung",
      value: "Beaufsichtigte Prüfung, Terminbuchung über Pearson VUE; Studierende und Lehrkräfte können über Certiport buchen",
    },
    { label: "Voraussetzungen", value: "Keine. Fundamentals-Zertifizierungen laufen nicht ab." },
    { label: "Prüfungsversion", value: "Gemessene Fähigkeiten ab dem 20. Juli 2026" },
  ],
  domains: [
    {
      id: "d1",
      name: "Beschreiben von Cloudkonzepten",
      weight: "25–30%",
      objectives: [
        "Cloud-Computing beschreiben",
        "Beschreiben Sie die Vorteile der Verwendung von Cloud-Diensten",
        "Cloud-Diensttypen beschreiben",
      ],
    },
    {
      id: "d2",
      name: "Beschreiben der Azure-Architektur und -Dienste",
      weight: "35–40%",
      objectives: [
        "Beschreiben der wichtigsten Architekturkomponenten von Azure",
        "Azure-Compute- und Netzwerkdienste beschreiben",
        "Azure-Speicherdienste beschreiben",
        "Beschreiben von Identität, Zugriff und Sicherheit in Azure",
      ],
    },
    {
      id: "d3",
      name: "Azure-Verwaltung und -Governance beschreiben",
      weight: "30–35%",
      objectives: [
        "Beschreiben Sie die Kostenverwaltung in Azure",
        "Grundlegendes zu Azure-Features und -Tools für Governance und Compliance",
        "Beschreiben von Features und Tools zum Verwalten und Bereitstellen von Azure-Ressourcen",
        "Beschreiben von Überwachungstools in Azure",
      ],
    },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "az-900",
    summary:
      "AZ-900 (Microsoft Azure Fundamentals) prüft, ob Sie Cloudkonzepte, die grundlegende Azure-Architektur und die wichtigsten Azure-Dienste sowie die Azure-Werkzeuge für Kostenverwaltung, Governance und Überwachung beschreiben können. Die Prüfung dauert 45 Minuten, zum Bestehen brauchen Sie 700 Punkte, und die aktuelle Liste der gemessenen Fähigkeiten gilt ab dem 20. Juli 2026. Die Zertifizierung läuft nicht ab.",
    whoFor: [
      "Personen, die eine Laufbahn in der Cloud beginnen oder aus einem anderen IT-Bereich in eine Azure-Rolle wechseln",
      "Technische und nicht technische Mitarbeitende, die an Azure-Projekten beteiligt sind und ein gemeinsames Vokabular brauchen",
      "Studierende und Quereinsteiger, die vor einer Associate-Prüfung wie AZ-104 eine erste Microsoft-Zertifizierung erwerben möchten",
    ],
    sections: [
      {
        id: "what-the-exam-tests",
        heading: "Was AZ-900 tatsächlich prüft",
        paragraphs: [
          "AZ-900 umfasst drei Fähigkeitsbereiche. „Beschreiben der Azure-Architektur und -Dienste“ (Describe Azure architecture and services) hat das höchste Gewicht (35–40 %): Regionen und Verfügbarkeitszonen, die Ressourcenhierarchie, Compute, Netzwerke, Speicher, Identität und Sicherheit. „Azure-Verwaltung und -Governance beschreiben“ (Describe Azure management and governance) macht 30–35 % aus (Kostenverwaltung, Azure Policy, Ressourcensperren, Bereitstellungstools und Überwachung), „Beschreiben von Cloudkonzepten“ (Describe cloud concepts) 25–30 %.",
          "Die Fragen zielen darauf ab, Konzepte zu erkennen und den passenden Dienst auszuwählen, nicht darauf, ihn Schritt für Schritt zu konfigurieren. Typische Entscheidungen: IaaS, PaaS oder SaaS; Verfügbarkeitszone oder Regionspaar; Verwaltungsgruppe, Abonnement oder Ressourcengruppe; welche Speicherebene oder Redundanzoption passt; und welches Tool eine Frage zu Kosten, Compliance oder Überwachung beantwortet.",
        ],
      },
      {
        id: "july-2026-update",
        heading: "Was sich mit dem Update vom 20. Juli 2026 geändert hat",
        paragraphs: [
          "Microsoft hat die Änderungen vom Juli 2026 als geringfügig eingestuft. Sie betreffen drei Unterbereiche: „Azure-Compute- und Netzwerkdienste beschreiben“ (Describe Azure compute and networking services), „Beschreiben von Features und Tools zum Verwalten und Bereitstellen von Azure-Ressourcen“ (Describe features and tools for managing and deploying Azure resources) und „Beschreiben von Überwachungstools in Azure“ (Describe monitoring tools in Azure). Die Gewichtung der drei Fähigkeitsbereiche hat sich nicht geändert.",
          "Die Gliederung verwendet aktuelle Produktnamen wie Microsoft Entra ID, Microsoft Entra Domain Services und Microsoft Purview. Wenn Ihr Lernmaterial noch von Azure Active Directory spricht, übertragen Sie die Namen beim Lernen. Übersetzte Fassungen der Prüfung werden etwa acht Wochen nach der englischen Version aktualisiert.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in fünf Schritten",
        steps: [
          {
            title: "Gleichen Sie Ihren Stand mit dem Studienleitfaden ab",
            body: "Gehen Sie jeden Punkt der offiziellen AZ-900-Fähigkeitenliste durch und markieren Sie ihn als bekannt, unsicher oder neu. Architektur und Dienste ist der größte Bereich, rechnen Sie dort also mit dem meisten Zeitaufwand.",
          },
          {
            title: "Arbeiten Sie die Lernpfade auf Microsoft Learn durch",
            body: "Folgen Sie den kostenlosen AZ-900-Lernpfaden auf Microsoft Learn. Sie decken die Gliederung eng ab. Für die praktischen Übungen benötigen Sie ein eigenes Azure-Abonnement, etwa eine kostenlose Testversion, denn Sandboxes auf Microsoft Learn sind nicht mehr verfügbar.",
          },
          {
            title: "Lernen Sie die Vergleiche, nicht nur die Namen",
            body: "Erstellen Sie kurze Tabellen für die Paare und Gruppen, die die Prüfung gern gegenüberstellt: Cloudmodelle, Diensttypen, VM-Optionen, Speicherebenen und Redundanzoptionen, Azure Policy im Vergleich zu RBAC und Ressourcensperren sowie Advisor im Vergleich zu Service Health und Azure Monitor.",
          },
          {
            title: "Üben Sie unter Zeitdruck",
            body: "Absolvieren Sie zeitlich begrenzte Übungsprüfungen mit 40–60 Fragen in 45 Minuten und lesen Sie jede Erklärung, auch bei den Fragen, die Sie richtig beantwortet haben.",
          },
          {
            title: "Buchen Sie, wenn Ihre Ergebnisse stabil sind",
            body: "Buchen Sie, sobald Sie mehrere Übungsprüfungen mit Abstand bestehen. Studierende und Lehrkräfte können über Certiport buchen, alle anderen über Pearson VUE.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Die Prüfung als reine Theorieprüfung behandeln. Viele Fragen beschreiben eine geschäftliche Anforderung und fragen, welcher Azure-Dienst oder welches Feature dazu passt.",
          "Governance-Tools verwechseln. Azure Policy setzt Regeln für Ressourceneigenschaften durch, RBAC steuert, wer was tun darf, und Ressourcensperren verhindern das Löschen oder Ändern selbst für berechtigte Benutzer.",
          "Verfügbarkeitszonen mit Regionen und Regionspaaren verwechseln. Zonen schützen vor dem Ausfall eines Rechenzentrums innerhalb einer Region; Regionspaare helfen bei regionsweiten Ausfällen.",
          "Speicherebenen ohne ihre Zielkonflikte lernen. Sie sollten wissen, welche Ebenen online sind und welche offline ist und dass kältere Ebenen niedrigere Speicherkosten gegen höhere Zugriffskosten tauschen.",
          "Den Bereich Überwachung vernachlässigen. Azure Advisor, Azure Service Health und Azure Monitor beantworten jeweils eine andere Frage.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lange dauert die AZ-900-Prüfung und wie hoch ist die Bestehensgrenze?",
        answer:
          "Sie haben 45 Minuten Zeit. Microsoft verlangt zum Bestehen 700 Punkte oder mehr. Die genaue Anzahl der Fragen für AZ-900 veröffentlicht Microsoft nicht; laut Microsoft haben die meisten Zertifizierungsprüfungen zwischen 40 und 60 Fragen.",
      },
      {
        question: "Läuft die Zertifizierung Azure Fundamentals ab?",
        answer:
          "Nein. Laut Microsoft laufen Fundamentals-Zertifizierungen nicht ab, daher gibt es für AZ-900 keine Verlängerungsbewertung.",
      },
      {
        question: "Welche Fähigkeiten haben sich am 20. Juli 2026 geändert?",
        answer:
          "Microsoft nennt geringfügige Änderungen in „Azure-Compute- und Netzwerkdienste beschreiben“, „Beschreiben von Features und Tools zum Verwalten und Bereitstellen von Azure-Ressourcen“ und „Beschreiben von Überwachungstools in Azure“. Alle anderen Bereiche sind unverändert.",
      },
      {
        question: "Was passiert, wenn ich AZ-900 nicht bestehe?",
        answer:
          "Nach den Wiederholungsrichtlinien von Microsoft können Sie die Prüfung nach 24 Stunden wiederholen. Für weitere Versuche gilt eine Wartezeit von 14 Tagen, und Sie können dieselbe Prüfung innerhalb von 12 Monaten ab Ihrem ersten Versuch höchstens fünfmal ablegen.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Ja. Microsoft bietet AZ-900 unter anderem auf Deutsch an. Übersetzte Fassungen werden etwa acht Wochen nach der englischen Version aktualisiert; prüfen Sie daher kurz nach einem Update den Studienleitfaden.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach der von Microsoft veröffentlichten Liste der gemessenen Fähigkeiten geschrieben wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "AZ-900 Prüfungsvorbereitung 2026: Inhalte & Lernplan",
      description:
        "AZ-900 Prüfungsvorbereitung (Stand 20. Juli 2026): 45 Minuten, Bestehensgrenze 700, Cloudkonzepte, Azure-Dienste, Governance und ein Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "az-900",
    intro:
      "15 eigene AZ-900-Übungsfragen zu den drei Fähigkeitsbereichen des Microsoft-Studienleitfadens (gemessene Fähigkeiten ab dem 20. Juli 2026), ungefähr so gewichtet wie die echte Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "AZ-900 Übungsfragen mit Lösungen und Erklärungen (2026)",
      description:
        "15 kostenlose, eigene AZ-900 Übungsfragen zu Cloudkonzepten, Azure-Architektur, Speicher, Identität, Governance und Überwachung – jeweils mit Erklärung.",
    },
    questions: [
      /* ── Bereich 1: Beschreiben von Cloudkonzepten ─────────────────────── */
      {
        id: "az900-d1-shared-responsibility",
        domain: "d1",
        objective: "Beschreiben Sie das Modell der geteilten Verantwortung",
        difficulty: "foundation",
        question:
          "Ihr Unternehmen verlagert seine E-Mail in ein SaaS-Angebot (Software as a Service). Welche Verantwortung bleibt nach dem Modell der geteilten Verantwortung bei Ihrem Unternehmen?",
        options: [
          { id: "A", text: "Das Patchen des Betriebssystems der Mailserver", rationale: "Bei SaaS betreibt und patcht der Anbieter die zugrunde liegenden Server und Betriebssysteme." },
          { id: "B", text: "Die physische Sicherheit des Rechenzentrums", rationale: "Die physische Sicherheit liegt immer in der Verantwortung des Cloudanbieters." },
          { id: "C", text: "Die im Dienst gespeicherten Daten und die Benutzerkonten, die darauf zugreifen", rationale: "Richtig. Unabhängig vom Diensttyp bleibt der Kunde für seine Informationen und Daten, seine Geräte sowie seine Konten und Identitäten verantwortlich." },
          { id: "D", text: "Die Wartung der Netzwerkhardware", rationale: "Die Netzwerkhardware gehört bei jedem Clouddiensttyp zum Anbieter." },
        ],
        answer: "C",
        explanation:
          "Je weiter Sie sich von IaaS in Richtung SaaS bewegen, desto mehr übernimmt der Anbieter. Daten, Geräte, Konten und Identitäten gehen nie auf den Anbieter über und bleiben daher auch bei SaaS Aufgabe des Kunden.",
        reference: GUIDE,
      },
      {
        id: "az900-d1-consumption",
        domain: "d1",
        objective: "Beschreiben Sie das verbrauchsbasierte Modell",
        difficulty: "foundation",
        question:
          "Ein Start-up möchte keine Server im Voraus kaufen und nur für die Rechenleistung bezahlen, die es jeden Monat tatsächlich nutzt. Welches Merkmal des Cloud-Computings wird hier beschrieben?",
        options: [
          { id: "A", text: "Das verbrauchsbasierte Modell", rationale: "Richtig. Im verbrauchsbasierten Modell bezahlen Sie für die Ressourcen, die Sie nutzen, ohne Vorabkosten für Infrastruktur. Dadurch werden Investitionsausgaben (CapEx) zu Betriebsausgaben (OpEx)." },
          { id: "B", text: "Hochverfügbarkeit", rationale: "Bei Hochverfügbarkeit geht es darum, Dienste am Laufen zu halten, nicht darum, wie Sie bezahlen." },
          { id: "C", text: "Das Modell der geteilten Verantwortung", rationale: "Dieses Modell teilt Sicherheits- und Verwaltungsaufgaben auf; es beschreibt nicht die Abrechnung." },
          { id: "D", text: "Eine private Cloud", rationale: "Eine private Cloud gehört in der Regel einer einzelnen Organisation oder ist ihr fest zugeordnet und erfordert oft genau die Vorabinvestition, die das Start-up vermeiden möchte." },
        ],
        answer: "A",
        explanation:
          "Die nutzungsbasierte Abrechnung (Pay-as-you-go) ist der Kern des verbrauchsbasierten Modells. Sie vermeidet Vorabkosten für Hardware, und Sie zahlen nicht mehr, sobald Sie Ressourcen nicht mehr nutzen.",
        reference: GUIDE,
      },
      {
        id: "az900-d1-hybrid",
        domain: "d1",
        objective: "Ermitteln der geeigneten Anwendungsfälle für die einzelnen Cloudmodelle",
        difficulty: "intermediate",
        question:
          "Eine Bank muss ein Legacy-Kernsystem aus regulatorischen Gründen in ihrem eigenen Rechenzentrum behalten, möchte aber ihre neuen Kunden-Web-Apps in Azure betreiben und beides miteinander verbinden. Welches Cloudmodell passt?",
        options: [
          { id: "A", text: "Ausschließlich öffentliche Cloud", rationale: "Eine reine öffentliche Cloud würde bedeuten, das Legacy-System aus dem Rechenzentrum der Bank herauszulösen, was die Regulierung nicht zulässt." },
          { id: "B", text: "Hybrid Cloud", rationale: "Richtig. Eine Hybrid Cloud kombiniert lokale oder private Infrastruktur mit Ressourcen der öffentlichen Cloud, die zusammenarbeiten." },
          { id: "C", text: "Ausschließlich private Cloud", rationale: "Eine reine private Cloud würde Azure für die neuen Web-Apps ausschließen." },
          { id: "D", text: "Software as a Service", rationale: "SaaS ist ein Diensttyp, kein Cloudmodell, und beschreibt nicht, wie lokale und Cloudressourcen kombiniert werden." },
        ],
        answer: "B",
        explanation:
          "Hybrid ist immer dann die Antwort, wenn einige Workloads lokal oder in einer privaten Cloud bleiben müssen, während andere in der öffentlichen Cloud laufen. Verwechseln Sie Cloudmodelle (öffentlich, privat, hybrid) nicht mit Diensttypen (IaaS, PaaS, SaaS).",
        reference: GUIDE,
      },
      {
        id: "az900-d1-paas",
        domain: "d1",
        objective: "Ermitteln geeigneter Anwendungsfälle für den jeweiligen Clouddiensttyp (IaaS, PaaS und SaaS)",
        difficulty: "intermediate",
        question:
          "Entwickler möchten den Code ihrer Webanwendung bereitstellen, ohne virtuelle Maschinen, Betriebssystemupdates oder den Webserver zu verwalten, die Anwendung selbst aber weiterhin steuern. Welchen Diensttyp sollten sie wählen?",
        options: [
          { id: "A", text: "Infrastructure as a Service (IaaS)", rationale: "Bei IaaS müssten die Entwickler weiterhin das Betriebssystem und den Webserver auf den virtuellen Maschinen verwalten." },
          { id: "B", text: "Software as a Service (SaaS)", rationale: "SaaS liefert eine fertige Anwendung; die Entwickler könnten keinen eigenen Code bereitstellen." },
          { id: "C", text: "Lokales Hosting", rationale: "Lokal müssten sie alles verwalten, einschließlich der Hardware." },
          { id: "D", text: "Platform as a Service (PaaS)", rationale: "Richtig. PaaS stellt eine verwaltete Plattform bereit, sodass sich die Entwickler auf ihre Anwendung und ihre Daten konzentrieren, während der Anbieter Betriebssystem und Laufzeitumgebung übernimmt." },
        ],
        answer: "D",
        explanation:
          "PaaS ist der Mittelweg: Sie bringen die Anwendung mit, der Anbieter betreibt die Plattform. Azure App Service ist ein typisches PaaS-Beispiel für Web-Apps.",
        reference: GUIDE,
      },

      /* ── Bereich 2: Beschreiben der Azure-Architektur und -Dienste ─────── */
      {
        id: "az900-d2-availability-zones",
        domain: "d2",
        objective: "Beschreiben von Verfügbarkeitszonen",
        difficulty: "foundation",
        question:
          "Eine Anwendung soll weiterlaufen, wenn ein Rechenzentrum in einer Azure-Region ausfällt, ohne dass Sie in einer zweiten Region bereitstellen. Was sollten Sie verwenden?",
        options: [
          { id: "A", text: "Eine zweite Ressourcengruppe", rationale: "Ressourcengruppen sind logische Container; sie verteilen Ressourcen nicht auf getrennte Rechenzentren." },
          { id: "B", text: "Verfügbarkeitszonen", rationale: "Richtig. Verfügbarkeitszonen sind physisch getrennte Rechenzentrumsstandorte innerhalb einer Azure-Region, jeweils mit unabhängiger Stromversorgung, Kühlung und Netzwerkanbindung." },
          { id: "C", text: "Eine souveräne Region", rationale: "Souveräne Regionen sind isolierte Azure-Instanzen für Compliance- oder rechtliche Zwecke; sie sind keine Ausfallsicherheitsfunktion innerhalb einer Region." },
          { id: "D", text: "Eine Verwaltungsgruppe", rationale: "Verwaltungsgruppen organisieren Abonnements für die Governance; sie haben keinen Einfluss darauf, wo Ressourcen ausgeführt werden." },
        ],
        answer: "B",
        explanation:
          "Die Verteilung von Ressourcen auf Verfügbarkeitszonen schützt vor dem Verlust eines Rechenzentrums innerhalb einer Region. Für den Schutz vor dem Ausfall einer ganzen Region brauchen Sie eine zweite Region, zum Beispiel das Regionspaar.",
        reference: GUIDE,
      },
      {
        id: "az900-d2-hierarchy",
        domain: "d2",
        objective: "Beschreiben der Hierarchie von Ressourcengruppen, Abonnements und Verwaltungsgruppen",
        difficulty: "intermediate",
        question:
          "Ihre Organisation hat 12 Abonnements und möchte eine Azure Policy-Zuweisung auf alle gleichzeitig anwenden. Auf welcher Ebene sollten Sie sie zuweisen?",
        options: [
          { id: "A", text: "Auf einer Verwaltungsgruppe, die die Abonnements enthält", rationale: "Richtig. Verwaltungsgruppen stehen über den Abonnements, und dort zugewiesene Richtlinien und Zugriffsrechte werden von jedem enthaltenen Abonnement geerbt." },
          { id: "B", text: "Auf jeder Ressourcengruppe einzeln", rationale: "Das funktioniert grundsätzlich, bedeutet aber viele einzelne Zuweisungen – genau das möchte die Organisation vermeiden." },
          { id: "C", text: "Auf einem einzelnen virtuellen Netzwerk", rationale: "Ein virtuelles Netzwerk ist eine Ressource, kein Bereich, der Abonnements enthält." },
          { id: "D", text: "Auf einer Verfügbarkeitszone", rationale: "Verfügbarkeitszonen sind physische Standorte, kein Governance-Bereich." },
        ],
        answer: "A",
        explanation:
          "Die Hierarchie lautet von oben nach unten: Verwaltungsgruppen, Abonnements, Ressourcengruppen und Ressourcen. Einstellungen auf einer höheren Ebene werden von allem darunter geerbt.",
        reference: GUIDE,
      },
      {
        id: "az900-d2-redundancy",
        domain: "d2",
        objective: "Redundanzoptionen beschreiben",
        difficulty: "advanced",
        question:
          "Ein Speicherkonto muss einen vollständigen regionalen Ausfall überstehen, und die Anwendung muss die Daten aus der sekundären Region lesen können, noch bevor Microsoft ein Failover einleitet. Welche Redundanzoption erfüllt diese Anforderung?",
        options: [
          { id: "A", text: "Lokal redundanter Speicher (LRS)", rationale: "LRS hält alle Kopien in einem einzigen Rechenzentrum der primären Region, sodass die Daten bei einem regionalen Ausfall nicht verfügbar wären." },
          { id: "B", text: "Zonenredundanter Speicher (ZRS)", rationale: "ZRS verteilt Kopien auf Verfügbarkeitszonen innerhalb einer Region, repliziert aber nicht in eine zweite Region." },
          { id: "C", text: "Georedundanter Speicher mit Lesezugriff (RA-GRS)", rationale: "Richtig. RA-GRS repliziert Daten in eine sekundäre Region und erlaubt Lesezugriff auf diese sekundäre Kopie." },
          { id: "D", text: "Georedundanter Speicher (GRS) ohne Lesezugriff", rationale: "GRS repliziert in eine sekundäre Region, aber ohne die Lesezugriffsoption können die sekundären Daten erst nach einem Failover gelesen werden." },
        ],
        answer: "C",
        explanation:
          "LRS und ZRS schützen innerhalb einer Region; GRS und GZRS fügen eine Kopie in einer sekundären Region hinzu. Nur die Varianten mit Lesezugriff (RA-GRS und RA-GZRS) erlauben der Anwendung, aus der sekundären Region zu lesen.",
        reference: { label: "Microsoft Learn — Azure Storage-Redundanz", url: "https://learn.microsoft.com/de-de/azure/storage/common/storage-redundancy" },
      },
      {
        id: "az900-d2-archive-tier",
        domain: "d2",
        objective: "Speicherebenen beschreiben",
        difficulty: "intermediate",
        question:
          "Sie müssen eingescannte Verträge zehn Jahre lang zu den niedrigsten Speicherkosten aufbewahren. Sie werden fast nie gelesen, und eine Abrufverzögerung von mehreren Stunden ist akzeptabel. Welche Blob-Zugriffsebene passt am besten?",
        options: [
          { id: "A", text: "Hot", rationale: "Die Zugriffsebene Hot hat die höchsten Speicherkosten und ist für Daten mit häufigem Zugriff gedacht." },
          { id: "B", text: "Cool", rationale: "Die Zugriffsebene Cool ist günstiger als Hot, aber weiterhin eine Onlineebene mit Preisen für Daten, die gelegentlich gelesen werden." },
          { id: "C", text: "Cold", rationale: "Die Zugriffsebene Cold ist für selten genutzte Daten gedacht, die dennoch schnell abrufbar sein müssen; die Speicherung kostet mehr, als die Anforderung erfordert." },
          { id: "D", text: "Archive", rationale: "Richtig. Die Zugriffsebene Archive ist eine Offlineebene für selten genutzte Daten mit flexiblen Latenzanforderungen; Blobs müssen erst in eine Onlineebene aktiviert (rehydriert) werden, bevor sie gelesen werden können." },
        ],
        answer: "D",
        explanation:
          "Hot, Cool und Cold sind Onlineebenen; Archive ist offline und hat die niedrigsten Speicherkosten. Das Lesen archivierter Daten erfordert eine Aktivierung (Rehydrierung), die Stunden dauern kann.",
        reference: { label: "Microsoft Learn — Zugriffsebenen für Blobdaten", url: "https://learn.microsoft.com/de-de/azure/storage/blobs/access-tiers-overview" },
      },
      {
        id: "az900-d2-expressroute",
        domain: "d2",
        objective: "Azure-Compute- und Netzwerkdienste beschreiben",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen benötigt eine private Verbindung zwischen seinem lokalen Netzwerk und Azure, die nicht über das öffentliche Internet läuft. Welcher Dienst stellt das bereit?",
        options: [
          { id: "A", text: "Azure ExpressRoute", rationale: "Richtig. ExpressRoute stellt über einen Konnektivitätsanbieter eine private, dedizierte Verbindung von lokalen Netzwerken zu Microsoft-Clouddiensten bereit, ohne über das öffentliche Internet zu gehen." },
          { id: "B", text: "Azure VPN Gateway mit einem Site-to-Site-VPN", rationale: "Ein Site-to-Site-VPN ist verschlüsselt, der Datenverkehr läuft aber dennoch über das öffentliche Internet." },
          { id: "C", text: "Peering virtueller Netzwerke", rationale: "Peering verbindet virtuelle Azure-Netzwerke miteinander, nicht ein lokales Netzwerk mit Azure." },
          { id: "D", text: "Azure DNS", rationale: "Azure DNS hostet DNS-Domänen und löst Namen auf; es stellt keine Konnektivität bereit." },
        ],
        answer: "A",
        explanation:
          "Sowohl VPN Gateway als auch ExpressRoute verbinden lokale Netzwerke mit Azure. Entscheidend ist der Weg: VPN nutzt einen verschlüsselten Tunnel über das Internet, ExpressRoute eine private Verbindung.",
        reference: GUIDE,
      },
      {
        id: "az900-d2-conditional-access",
        domain: "d2",
        objective: "Microsoft Entra Conditional Access beschreiben",
        difficulty: "intermediate",
        question:
          "Benutzer sollen die Multi-Faktor-Authentifizierung nur dann durchlaufen müssen, wenn sie sich von außerhalb des Unternehmensnetzwerks anmelden. Welches Feature setzt das durch?",
        options: [
          { id: "A", text: "Rollenbasierte Zugriffssteuerung von Azure (Azure RBAC)", rationale: "RBAC legt fest, was ein angemeldeter Benutzer mit Azure-Ressourcen tun darf; Anmeldebedingungen wie den Standort wertet es nicht aus." },
          { id: "B", text: "Ressourcensperren", rationale: "Ressourcensperren schützen Ressourcen vor dem Löschen oder Ändern; mit Anmeldungen haben sie nichts zu tun." },
          { id: "C", text: "Microsoft Entra Conditional Access", rationale: "Richtig. Conditional Access wertet bei der Anmeldung Signale wie Benutzer, Standort und Gerät aus und kann MFA verlangen, den Zugriff erlauben oder blockieren." },
          { id: "D", text: "Azure Policy", rationale: "Azure Policy wertet Ressourceneigenschaften aus, nicht Benutzeranmeldungen." },
        ],
        answer: "C",
        explanation:
          "Conditional Access funktioniert bei der Anmeldung wie eine Wenn-dann-Regel: Wenn bestimmte Bedingungen erfüllt sind, greift ein Steuerelement wie MFA. So sind in riskanten Situationen strengere Prüfungen möglich, ohne jede Anmeldung zu belasten.",
        reference: GUIDE,
      },

      /* ── Bereich 3: Azure-Verwaltung und -Governance beschreiben ───────── */
      {
        id: "az900-d3-resource-lock",
        domain: "d3",
        objective: "Den Zweck von Ressourcensperren beschreiben",
        difficulty: "foundation",
        question:
          "Administratoren müssen die Einstellungen einer Produktionsdatenbank weiterhin ändern können, aber niemand, auch kein Besitzer, soll sie versehentlich löschen können. Was sollten Sie anwenden?",
        options: [
          { id: "A", text: "Eine ReadOnly-Sperre", rationale: "Eine ReadOnly-Sperre würde auch die erforderlichen Änderungen an den Einstellungen blockieren." },
          { id: "B", text: "Eine CanNotDelete-Sperre (Delete)", rationale: "Richtig. Eine CanNotDelete-Sperre erlaubt berechtigten Benutzern, die Ressource zu lesen und zu ändern, verhindert aber das Löschen, bis die Sperre entfernt wird." },
          { id: "C", text: "Ein Tag namens „DoNotDelete“", rationale: "Tags sind Metadaten; sie setzen nichts durch." },
          { id: "D", text: "Das Verschieben in ein neues Abonnement", rationale: "Ein neues Abonnement schützt eine Ressource für sich genommen nicht vor dem Löschen." },
        ],
        answer: "B",
        explanation:
          "Ressourcensperren gelten auch für Benutzer mit hohen Berechtigungen. CanNotDelete erlaubt weiterhin Änderungen; ReadOnly blockiert sowohl Änderungen als auch das Löschen.",
        reference: { label: "Microsoft Learn — Sperren von Ressourcen", url: "https://learn.microsoft.com/de-de/azure/azure-resource-manager/management/lock-resources" },
      },
      {
        id: "az900-d3-policy",
        domain: "d3",
        objective: "Beschreiben des Zwecks von Azure Policy",
        difficulty: "intermediate",
        question:
          "Aus Gründen der Datenresidenz möchte Ihr Unternehmen sicherstellen, dass neue Ressourcen nur in zwei bestimmten Azure-Regionen erstellt werden können. Welcher Dienst setzt das durch?",
        options: [
          { id: "A", text: "Azure Advisor", rationale: "Advisor gibt Empfehlungen; er verhindert nicht, dass Ressourcen erstellt werden." },
          { id: "B", text: "Rollenbasierte Zugriffssteuerung von Azure (Azure RBAC)", rationale: "RBAC steuert, wer Ressourcen erstellen darf, nicht welche Eigenschaften wie den Standort sie haben dürfen." },
          { id: "C", text: "Microsoft Defender for Cloud", rationale: "Defender for Cloud bewertet und verbessert den Sicherheitsstatus; es ist nicht das Werkzeug, um zulässige Standorte durchzusetzen." },
          { id: "D", text: "Azure Policy", rationale: "Richtig. Azure Policy prüft Ressourceneigenschaften anhand von Regeln und kann das Erstellen nicht konformer Ressourcen verweigern, zum Beispiel mit einer Regel für zulässige Standorte." },
        ],
        answer: "D",
        explanation:
          "Stellen Sie sich RBAC als „wer darf handeln“ und Azure Policy als „was darf existieren“ vor. Regionen, SKUs oder Pflicht-Tags einzuschränken ist eine typische Aufgabe für Azure Policy.",
        reference: GUIDE,
      },
      {
        id: "az900-d3-tags",
        domain: "d3",
        objective: "Beschreiben des Zwecks von Tags",
        difficulty: "foundation",
        question:
          "Die Finanzabteilung möchte die Azure-Kosten pro Abteilung sehen, obwohl Ressourcen mehrerer Abteilungen sich dieselben Ressourcengruppen teilen. Wie lässt sich das am einfachsten ermöglichen?",
        options: [
          { id: "A", text: "Jeder Ressource ein Abteilungs-Tag hinzufügen und die Kosten nach diesem Tag gruppieren", rationale: "Richtig. Tags sind Name-Wert-Paare an Ressourcen, mit denen Sie Ressourcen organisieren und Kosten filtern und gruppieren können." },
          { id: "B", text: "Eine ReadOnly-Sperre auf jede Ressourcengruppe anwenden", rationale: "Sperren verhindern Änderungen; sie helfen nicht bei der Kostenzuordnung." },
          { id: "C", text: "Für jede Abteilung einen eigenen Microsoft Entra-Mandanten erstellen", rationale: "Das ist eine große organisatorische Änderung und für die Kostenauswertung nicht nötig." },
          { id: "D", text: "Den Preisrechner verwenden", rationale: "Der Preisrechner schätzt die Kosten geplanter Ressourcen; er zeigt keine tatsächlichen Ausgaben pro Abteilung." },
        ],
        answer: "A",
        explanation:
          "Tags ergänzen Ressourcen um geschäftliche Informationen wie Abteilung, Kostenstelle oder Umgebung. Die Kostenverwaltung kann die tatsächlichen Kosten dann nach diesen Tags filtern und gruppieren.",
        reference: GUIDE,
      },
      {
        id: "az900-d3-monitoring",
        domain: "d3",
        objective: "Beschreiben von Überwachungstools in Azure",
        difficulty: "intermediate",
        question:
          "Ihr Team möchte personalisierte Empfehlungen, um Zuverlässigkeit, Sicherheit, Leistung und Kosten seiner vorhandenen Azure-Ressourcen zu verbessern. Welches Tool liefert das?",
        options: [
          { id: "A", text: "Azure Service Health", rationale: "Service Health informiert Sie über Azure-Dienstvorfälle, geplante Wartungen und Integritätshinweise, die Sie betreffen, nicht über die Optimierung Ihrer eigenen Ressourcen." },
          { id: "B", text: "Azure Monitor-Warnungen", rationale: "Warnungen benachrichtigen Sie, wenn eine Bedingung in Ihren Überwachungsdaten erfüllt ist; Best-Practice-Empfehlungen geben sie nicht." },
          { id: "C", text: "Azure Advisor", rationale: "Richtig. Azure Advisor analysiert die Konfiguration und Nutzung Ihrer Ressourcen und gibt personalisierte Best-Practice-Empfehlungen." },
          { id: "D", text: "Der Preisrechner", rationale: "Der Preisrechner schätzt Kosten vor der Bereitstellung; er analysiert keine vorhandenen Ressourcen." },
        ],
        answer: "C",
        explanation:
          "Merken Sie sich die drei Überwachungstools über ihre Frage: Advisor fragt „Wie kann ich meine Ressourcen verbessern?“, Service Health „Hat Azure selbst ein Problem, das mich betrifft?“ und Azure Monitor „Was machen meine Ressourcen und Anwendungen?“.",
        reference: GUIDE,
      },
      {
        id: "az900-d3-arc",
        domain: "d3",
        objective: "Den Zweck von Azure Arc beschreiben",
        difficulty: "advanced",
        question:
          "Ein Unternehmen betreibt Server lokal und bei einem anderen Cloudanbieter. Es möchte sie aus Azure heraus verwalten und steuern, zum Beispiel mit Azure Policy, als wären es Azure-Ressourcen. Welchen Dienst sollte es verwenden?",
        options: [
          { id: "A", text: "Azure Resource Manager-Vorlagen", rationale: "ARM-Vorlagen stellen Azure-Ressourcen als Code bereit; für sich genommen bringen sie externe Server nicht unter die Azure-Verwaltung." },
          { id: "B", text: "Azure Arc", rationale: "Richtig. Azure Arc erweitert die Azure-Verwaltung und -Governance auf Ressourcen außerhalb von Azure, etwa lokale Server und Server in anderen Clouds (Multicloud)." },
          { id: "C", text: "Azure Cloud Shell", rationale: "Cloud Shell ist eine browserbasierte Shell zum Ausführen von Azure CLI und PowerShell; sie bildet keine externen Server in Azure ab." },
          { id: "D", text: "Azure Migrate", rationale: "Azure Migrate hilft beim Verschieben von Workloads nach Azure; gefordert ist aber, sie dort zu verwalten, wo sie sind." },
        ],
        answer: "B",
        explanation:
          "Azure Arc ist die Antwort, wenn Ressourcen außerhalb von Azure bleiben, aber mit Azure-Tools verwaltet werden sollen. Azure Migrate ist die Antwort, wenn sie nach Azure umziehen sollen.",
        reference: GUIDE,
      },
    ],
  },
};
