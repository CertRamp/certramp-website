import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for CompTIA A+ Core 1 (220-1201, V15).
 * Exam facts follow the verified record in src/config/certifications.ts
 * (CompTIA A+ certification page and Core 1 V15 exam page, checked 2026-11-03).
 * The objectives PDF was not reachable, so questions reference the exam domains only.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const EXAM = {
  label: "CompTIA: A+ Core 1 (V15)",
  url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/",
};

export const comptiaAPlusCore1De: DeContent = {
  slug: "comptia-a-plus-core-1-220-1201",
  name: "CompTIA A+ Core 1 (220-1201)",
  languageNote:
    "CompTIA bietet die Prüfung 220-1201 unter anderem auf Deutsch an. Fachbegriffe wie RAID, DHCP oder SSD solltest du trotzdem auch auf Englisch kennen, weil sie in Prüfung und Praxis so verwendet werden.",
  facts: [
    { label: "Prüfungsanbieter", value: "CompTIA" },
    { label: "Prüfungscode", value: "220-1201 (A+ V15)" },
    { label: "Fragen", value: "Maximal 90" },
    { label: "Dauer", value: "90 Minuten" },
    { label: "Bestehensgrenze", value: "675 (auf einer Skala von 100 bis 900)" },
    {
      label: "Fragetypen",
      value: "Multiple Choice (eine oder mehrere Antworten), Drag-and-Drop und performancebasierte Aufgaben",
    },
    { label: "Prüfungssprachen", value: "Englisch, Deutsch, Japanisch" },
    {
      label: "Voraussetzungen",
      value: "Keine; CompTIA empfiehlt 12 Monate praktische Erfahrung im IT-Support",
    },
    { label: "Zertifizierung", value: "Für CompTIA A+ brauchst du Core 1 (220-1201) und Core 2 (220-1202)" },
  ],
  domains: [
    { id: "d1", name: "Mobile Geräte", weight: "13%" },
    { id: "d2", name: "Netzwerke", weight: "23%" },
    { id: "d3", name: "Hardware", weight: "25%" },
    { id: "d4", name: "Virtualisierung und Cloud Computing", weight: "11%" },
    { id: "d5", name: "Fehlerbehebung bei Hardware und Netzwerken", weight: "28%" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "comptia-a-plus-core-1-220-1201",
    summary:
      "CompTIA A+ Core 1 (220-1201) ist die erste von zwei Prüfungen für die CompTIA-A+-Zertifizierung. Du hast 90 Minuten für maximal 90 Fragen und bestehst mit 675 von 900 Punkten. Den größten Anteil haben Fehlerbehebung bei Hardware und Netzwerken (28 %), Hardware (25 %) und Netzwerke (23 %). Die Prüfung gibt es auch auf Deutsch.",
    whoFor: [
      "Einsteiger in IT-Support, Helpdesk und Service Desk",
      "Auszubildende und Umschüler zum Fachinformatiker oder IT-Systemelektroniker",
      "Quereinsteiger, die ihre Hardware- und Netzwerkgrundlagen mit einem anerkannten Zertifikat belegen wollen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst maximal 90 Fragen in 90 Minuten. Neben Multiple-Choice-Fragen mit einer oder mehreren richtigen Antworten gibt es Drag-and-Drop-Aufgaben und performancebasierte Aufgaben (PBQs), in denen du zum Beispiel Kabel zuordnest oder eine Fehlerursache in einer simulierten Umgebung findest. Die Bewertung erfolgt auf einer Skala von 100 bis 900; bestanden ist ab 675.",
          "Für die A+-Zertifizierung musst du Core 1 und Core 2 bestehen, beide in derselben Version (V15). Die Reihenfolge ist frei. Core 1 deckt Hardware, Netzwerke, mobile Geräte, Virtualisierung und Cloud ab, Core 2 Betriebssysteme, Sicherheit, Software-Fehlerbehebung und Arbeitsabläufe.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Fehlerbehebung ist mit 28 % der größte Bereich. CompTIA erwartet, dass du die sechsstufige Methodik zur Fehlerbehebung sicher anwendest und typische Symptome zuordnen kannst: ein PC, der nicht startet, eine überhitzte CPU, ein Drucker mit verschmierten Ausdrucken, ein Rechner mit einer APIPA-Adresse. Viele Fragen beschreiben ein Symptom und fragen nach dem wahrscheinlichsten Grund oder dem nächsten Schritt.",
          "Hardware (25 %) umfasst Kabel und Anschlüsse, RAM, Speicher und RAID, Mainboards, CPUs, Netzteile und Drucker. Bei Netzwerken (23 %) zählen Ports und Protokolle, WLAN-Standards, DHCP und DNS, IP-Adressierung sowie Netzwerkgeräte und Werkzeuge. Mobile Geräte (13 %) und Virtualisierung und Cloud (11 %) sind kleiner, bringen aber sichere Punkte, weil die Inhalte überschaubar sind.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Die Prüfungsziele besorgen",
            body: "Lade auf der CompTIA-Seite zu Core 1 (V15) die Prüfungsziele herunter. Sie listen jedes Thema und viele Fachbegriffe, die drankommen können.",
          },
          {
            title: "Ports und Protokolle auswendig lernen",
            body: "Lerne die wichtigsten Ports mit Protokoll und Zweck, etwa 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS und 3389 RDP. Karteikarten funktionieren hier am besten.",
          },
          {
            title: "Hardware anfassen",
            body: "Baue einen alten PC auseinander und wieder zusammen, tausche RAM und Laufwerke und sieh dir die Anschlüsse am Mainboard an. Das macht Hardwarefragen und PBQs deutlich leichter.",
          },
          {
            title: "Die Methodik zur Fehlerbehebung üben",
            body: "Spiele Fälle aus deinem Alltag mit den sechs Schritten durch: Problem identifizieren, Theorie aufstellen, Theorie testen, Plan umsetzen, Funktion prüfen, dokumentieren.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen in 90 Minuten. Überspringe PBQs zunächst und bearbeite sie am Ende, damit du nicht zu viel Zeit an einer Aufgabe verlierst.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 80 % liegst und die Erklärungen zu deinen Fehlern verstanden hast.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Ports nur ungefähr kennen. Viele Fragen hängen an genau einer Portnummer.",
          "In der Fehlerbehebung Schritte überspringen: Erst wird das Problem identifiziert und eine Theorie getestet, dann umgesetzt, geprüft und dokumentiert.",
          "RAID-Level verwechseln: RAID 0 erhöht nur die Geschwindigkeit, RAID 1 spiegelt, RAID 5 braucht mindestens drei Laufwerke, RAID 10 mindestens vier.",
          "WLAN-Standards nicht den Frequenzbändern zuordnen können, etwa 802.11ax (Wi-Fi 6/6E) mit 2,4, 5 und 6 GHz.",
          "Die kleineren Bereiche Mobile Geräte und Cloud vernachlässigen, obwohl sie zusammen fast ein Viertel der Prüfung ausmachen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die Prüfung 220-1201?",
        answer: "Maximal 90 Fragen in 90 Minuten, darunter Multiple-Choice-, Drag-and-Drop- und performancebasierte Aufgaben.",
      },
      {
        question: "Wie viele Punkte brauche ich zum Bestehen?",
        answer: "675 Punkte auf einer Skala von 100 bis 900.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer: "Ja. CompTIA bietet Core 1 (220-1201) auf Englisch, Deutsch und Japanisch an.",
      },
      {
        question: "Muss ich Core 1 vor Core 2 ablegen?",
        answer:
          "Nein, die Reihenfolge ist frei. Für die A+-Zertifizierung brauchst du beide Prüfungen in derselben Version (V15).",
      },
      {
        question: "Welche Voraussetzungen gibt es?",
        answer: "Keine formalen. CompTIA empfiehlt 12 Monate praktische Erfahrung im IT-Support.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den Prüfungsbereichen von CompTIA erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "CompTIA A+ Core 1 (220-1201) auf Deutsch: Prüfung & Lernplan",
      description:
        "CompTIA A+ Core 1 220-1201 auf Deutsch vorbereiten: maximal 90 Fragen, 90 Minuten, 675 Punkte zum Bestehen, alle fünf Bereiche mit Gewichtung und Lernplan.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "comptia-a-plus-core-1-220-1201",
    intro:
      "30 eigene Übungsfragen zu CompTIA A+ Core 1 (220-1201) aus allen fünf Prüfungsbereichen, gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "CompTIA A+ 220-1201 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose CompTIA A+ Core 1 Übungsfragen auf Deutsch: Ports, WLAN, RAID, Drucker, Cloud und Fehlerbehebung, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Mobile Geräte ──────────────────────────────────────── */
      {
        id: "a1-d1-battery-swelling",
        domain: "d1",
        objective: "Bereich 1.0 Mobile Geräte",
        difficulty: "foundation",
        question:
          "Bei einem Notebook wölbt sich das Touchpad nach oben, und das Gehäuse schließt nicht mehr richtig. Was ist die wahrscheinlichste Ursache und der richtige erste Schritt?",
        options: [
          { id: "A", text: "Ein defekter Treiber; den Touchpad-Treiber neu installieren", rationale: "Ein Treiber kann das Gehäuse nicht verformen." },
          { id: "B", text: "Ein aufgeblähter Akku; das Gerät nicht mehr laden und den Akku sicher austauschen", rationale: "Richtig. Ein aufgeblähter Lithium-Ionen-Akku drückt von unten gegen Touchpad und Gehäuse und ist eine Brandgefahr." },
          { id: "C", text: "Zu wenig Arbeitsspeicher; RAM aufrüsten", rationale: "Arbeitsspeicher hat mit einer Verformung des Gehäuses nichts zu tun." },
          { id: "D", text: "Eine lose Displayverbindung; das Displaykabel neu stecken", rationale: "Ein loses Displaykabel führt zu Bildfehlern, nicht zu einem gewölbten Touchpad." },
        ],
        answer: "B",
        explanation:
          "Aufgeblähte Akkus sind ein typisches Prüfungsthema. Das Gerät wird vom Strom getrennt, nicht mehr verwendet, und der Akku wird ausgetauscht und vorschriftsmäßig entsorgt.",
        reference: EXAM,
      },
      {
        id: "a1-d1-nfc",
        domain: "d1",
        objective: "Bereich 1.0 Mobile Geräte",
        difficulty: "foundation",
        question: "Welche Funkverbindung nutzt ein Smartphone, um an einem Kassenterminal kontaktlos zu bezahlen?",
        options: [
          { id: "A", text: "Bluetooth", rationale: "Bluetooth verbindet Geräte wie Kopfhörer über mehrere Meter, wird aber nicht für kontaktloses Bezahlen am Terminal verwendet." },
          { id: "B", text: "Infrarot", rationale: "Infrarot braucht Sichtverbindung und spielt beim mobilen Bezahlen keine Rolle." },
          { id: "C", text: "WLAN", rationale: "WLAN verbindet mit Netzwerken, nicht mit Kassenterminals." },
          { id: "D", text: "NFC", rationale: "Richtig. Near Field Communication arbeitet auf wenige Zentimeter und wird für kontaktloses Bezahlen genutzt." },
        ],
        answer: "D",
        explanation:
          "NFC hat eine Reichweite von wenigen Zentimetern, was das versehentliche Auslösen von Zahlungen erschwert. Es wird auch für Zutrittskarten und das Koppeln von Geräten verwendet.",
        reference: EXAM,
      },
      {
        id: "a1-d1-mdm",
        domain: "d1",
        objective: "Bereich 1.0 Mobile Geräte",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte auf allen Firmensmartphones zentral E-Mail-Profile verteilen, eine Bildschirmsperre erzwingen und verlorene Geräte aus der Ferne löschen. Was wird dafür eingesetzt?",
        options: [
          { id: "A", text: "Mobile Device Management (MDM)", rationale: "Richtig. Mit MDM werden Konfigurationen und Richtlinien zentral verteilt und Geräte bei Verlust gesperrt oder gelöscht." },
          { id: "B", text: "Ein USB-Tethering-Profil", rationale: "Tethering teilt die mobile Datenverbindung, verwaltet aber keine Geräte." },
          { id: "C", text: "Ein Bluetooth-Pairing mit jedem Gerät", rationale: "Pairing verbindet zwei Geräte, ermöglicht aber keine zentrale Verwaltung." },
          { id: "D", text: "Ein Hotspot im Büro", rationale: "Ein Hotspot stellt Internetzugang bereit, setzt aber keine Richtlinien durch." },
        ],
        answer: "A",
        explanation:
          "MDM-Lösungen verteilen Profile, Apps und Sicherheitsrichtlinien und können Geräte aus der Ferne sperren oder auf Werkseinstellungen zurücksetzen. Das ist besonders bei BYOD und Firmengeräten wichtig.",
        reference: EXAM,
      },
      {
        id: "a1-d1-docking",
        domain: "d1",
        objective: "Bereich 1.0 Mobile Geräte",
        difficulty: "foundation",
        question:
          "Ein Mitarbeiter möchte sein Notebook am Schreibtisch mit einem einzigen Kabel an zwei Monitore, Tastatur, Maus, Netzwerk und Strom anschließen. Was passt am besten?",
        options: [
          { id: "A", text: "Ein KVM-Switch", rationale: "Ein KVM-Switch schaltet Tastatur, Monitor und Maus zwischen mehreren Rechnern um; er versorgt das Notebook nicht mit Strom und Netzwerk über ein Kabel." },
          { id: "B", text: "Ein Netzwerk-Switch", rationale: "Ein Netzwerk-Switch verbindet nur Netzwerkgeräte." },
          { id: "C", text: "Eine Dockingstation, etwa mit USB-C oder Thunderbolt", rationale: "Richtig. Eine Dockingstation stellt über ein Kabel Bildschirmausgänge, USB, Netzwerk und Stromversorgung bereit." },
          { id: "D", text: "Ein Bluetooth-Adapter", rationale: "Bluetooth verbindet Peripherie kabellos, aber keine Monitore, kein kabelgebundenes Netzwerk und keinen Strom." },
        ],
        answer: "C",
        explanation:
          "Dockingstationen und Port-Replikatoren erweitern mobile Geräte um Anschlüsse. Mit USB-C oder Thunderbolt und Power Delivery reicht oft ein einziges Kabel.",
        reference: EXAM,
      },

      /* ── Bereich 2: Netzwerke ──────────────────────────────────────────── */
      {
        id: "a1-d2-rdp-port",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "foundation",
        question: "Ein Administrator möchte per Remotedesktop auf einen Windows-Server zugreifen. Welcher TCP-Port muss in der Firewall freigegeben sein?",
        options: [
          { id: "A", text: "3389", rationale: "Richtig. Das Remote Desktop Protocol (RDP) verwendet standardmäßig Port 3389." },
          { id: "B", text: "22", rationale: "Port 22 gehört zu SSH." },
          { id: "C", text: "443", rationale: "Port 443 gehört zu HTTPS." },
          { id: "D", text: "445", rationale: "Port 445 gehört zu SMB für Datei- und Druckerfreigaben." },
        ],
        answer: "A",
        explanation:
          "Wichtige Ports: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3, 143 IMAP, 389 LDAP, 443 HTTPS, 445 SMB, 3389 RDP.",
        reference: EXAM,
      },
      {
        id: "a1-d2-apipa",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "intermediate",
        question: "Ein Windows-PC zeigt die IP-Adresse 169.254.23.17 und erreicht keine anderen Geräte im Netz. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Der DNS-Server ist falsch eingetragen", rationale: "Ein falscher DNS-Server verhindert die Namensauflösung, führt aber nicht zu einer 169.254-Adresse." },
          { id: "B", text: "Die Adresse wurde manuell als statische IP vergeben", rationale: "Aus diesem Bereich vergibt Windows Adressen automatisch; eine manuelle Vergabe ist nicht die typische Ursache." },
          { id: "C", text: "Der PC hat keine Antwort von einem DHCP-Server erhalten", rationale: "Richtig. Findet Windows keinen DHCP-Server, vergibt es sich selbst eine APIPA-Adresse aus 169.254.0.0/16." },
          { id: "D", text: "Das Standard-Gateway ist überlastet", rationale: "Ein überlastetes Gateway verlangsamt den Internetzugang, ändert aber nicht die IP-Adresse." },
        ],
        answer: "C",
        explanation:
          "APIPA (Automatic Private IP Addressing) ist ein deutliches Zeichen für ein DHCP-Problem. Prüfe Kabel, Switch-Port, WLAN-Verbindung und die Erreichbarkeit des DHCP-Servers; danach ipconfig /renew.",
        reference: EXAM,
      },
      {
        id: "a1-d2-wifi6e",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "intermediate",
        question: "Welcher WLAN-Standard kann zusätzlich zu 2,4 und 5 GHz das 6-GHz-Band nutzen?",
        options: [
          { id: "A", text: "802.11n (Wi-Fi 4)", rationale: "802.11n nutzt 2,4 und 5 GHz." },
          { id: "B", text: "802.11ac (Wi-Fi 5)", rationale: "802.11ac nutzt nur das 5-GHz-Band." },
          { id: "C", text: "802.11g", rationale: "802.11g nutzt nur 2,4 GHz." },
          { id: "D", text: "802.11ax (Wi-Fi 6E)", rationale: "Richtig. Wi-Fi 6E ist die Erweiterung von 802.11ax um das 6-GHz-Band." },
        ],
        answer: "D",
        explanation:
          "802.11a: 5 GHz, 802.11b/g: 2,4 GHz, 802.11n: 2,4 und 5 GHz, 802.11ac: 5 GHz, 802.11ax (Wi-Fi 6): 2,4 und 5 GHz, Wi-Fi 6E zusätzlich 6 GHz. Wi-Fi 7 (802.11be) nutzt ebenfalls alle drei Bänder.",
        reference: EXAM,
      },
      {
        id: "a1-d2-dns",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "foundation",
        question: "Ein Benutzer erreicht eine Website über ihre IP-Adresse, aber nicht über ihren Namen. Welcher Dienst funktioniert wahrscheinlich nicht?",
        options: [
          { id: "A", text: "DHCP", rationale: "DHCP vergibt IP-Adressen; da die Seite über die IP erreichbar ist, funktioniert die Netzwerkverbindung." },
          { id: "B", text: "DNS", rationale: "Richtig. DNS übersetzt Namen in IP-Adressen; funktioniert die IP, aber nicht der Name, liegt das Problem bei der Namensauflösung." },
          { id: "C", text: "SMTP", rationale: "SMTP dient dem Versand von E-Mails." },
          { id: "D", text: "NTP", rationale: "NTP synchronisiert die Uhrzeit." },
        ],
        answer: "B",
        explanation:
          "Mit nslookup prüfst du die Namensauflösung. Typische Ursachen sind ein falsch eingetragener oder nicht erreichbarer DNS-Server.",
        reference: EXAM,
      },
      {
        id: "a1-d2-private-ip",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "foundation",
        question: "Welche dieser IPv4-Adressen ist eine private Adresse nach RFC 1918?",
        options: [
          { id: "A", text: "8.8.8.8", rationale: "8.8.8.8 ist eine öffentliche Adresse." },
          { id: "B", text: "169.254.10.5", rationale: "Das ist eine APIPA-Adresse (Link-Local), keine private Adresse nach RFC 1918." },
          { id: "C", text: "172.20.1.10", rationale: "Richtig. Der Bereich 172.16.0.0 bis 172.31.255.255 ist privat." },
          { id: "D", text: "127.0.0.1", rationale: "127.0.0.1 ist die Loopback-Adresse des eigenen Geräts." },
        ],
        answer: "C",
        explanation:
          "Private Bereiche nach RFC 1918: 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16. Sie werden im Internet nicht geroutet und per NAT übersetzt.",
        reference: EXAM,
      },
      {
        id: "a1-d2-poe",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "intermediate",
        question:
          "Für neue Deckenaccesspoints gibt es an der Montagestelle keine Steckdose. Wie lassen sie sich am einfachsten mit Strom versorgen?",
        options: [
          { id: "A", text: "Über einen Switch mit Power over Ethernet (PoE)", rationale: "Richtig. PoE überträgt Strom und Daten über dasselbe Netzwerkkabel." },
          { id: "B", text: "Über einen WLAN-Repeater", rationale: "Ein Repeater verlängert die Funkreichweite, liefert aber keinen Strom." },
          { id: "C", text: "Über ein Glasfaserkabel", rationale: "Glasfaser überträgt Licht, aber keinen Strom." },
          { id: "D", text: "Über einen Patchpanel-Port", rationale: "Ein Patchpanel ist ein passiver Verteiler ohne Stromversorgung." },
        ],
        answer: "A",
        explanation:
          "PoE (802.3af, 802.3at, 802.3bt) versorgt Geräte wie Accesspoints, IP-Kameras und VoIP-Telefone. Hat der Switch kein PoE, hilft ein PoE-Injektor.",
        reference: EXAM,
      },
      {
        id: "a1-d2-cable-tester",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerke",
        difficulty: "intermediate",
        question:
          "Ein Techniker muss in einem Patchpanel herausfinden, welcher Port zu einer bestimmten Netzwerkdose im Büro führt. Welches Werkzeug ist dafür gedacht?",
        options: [
          { id: "A", text: "Crimpzange", rationale: "Mit der Crimpzange werden Stecker auf Kabel gesetzt." },
          { id: "B", text: "Loopback-Stecker", rationale: "Ein Loopback-Stecker testet einen Port selbst, verfolgt aber keine Kabel." },
          { id: "C", text: "Auflegewerkzeug (Punchdown Tool)", rationale: "Damit werden Adern im Patchpanel aufgelegt, nicht gesucht." },
          { id: "D", text: "Tongenerator mit Prüfsonde (Toner Probe)", rationale: "Richtig. Der Tongenerator wird an der Dose angeschlossen, mit der Sonde findet man das passende Kabel am Patchpanel." },
        ],
        answer: "D",
        explanation:
          "Weitere Netzwerkwerkzeuge: Kabeltester prüft Adernbelegung und Durchgang, WLAN-Analysator zeigt Kanäle und Signalstärke, Abisolierwerkzeug entfernt die Ummantelung.",
        reference: EXAM,
      },

      /* ── Bereich 3: Hardware ───────────────────────────────────────────── */
      {
        id: "a1-d3-raid5",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "intermediate",
        question:
          "Ein Server soll den Ausfall eines Laufwerks verkraften und dabei möglichst viel Nutzkapazität bieten. Es stehen vier gleich große Laufwerke zur Verfügung. Welches RAID-Level passt am besten?",
        options: [
          { id: "A", text: "RAID 0", rationale: "RAID 0 bietet keine Ausfallsicherheit; fällt ein Laufwerk aus, sind alle Daten verloren." },
          { id: "B", text: "RAID 5", rationale: "Richtig. RAID 5 verteilt Paritätsdaten, verkraftet den Ausfall eines Laufwerks und nutzt bei vier Laufwerken die Kapazität von drei." },
          { id: "C", text: "RAID 1 mit zwei Laufwerken", rationale: "RAID 1 spiegelt und nutzt nur die Hälfte der Kapazität; zwei Laufwerke blieben ungenutzt." },
          { id: "D", text: "RAID 10", rationale: "RAID 10 ist ausfallsicher, nutzt bei vier Laufwerken aber nur die Kapazität von zwei." },
        ],
        answer: "B",
        explanation:
          "RAID 0: Striping, keine Redundanz, mindestens 2. RAID 1: Spiegelung, mindestens 2. RAID 5: Striping mit Parität, mindestens 3. RAID 6: doppelte Parität, mindestens 4. RAID 10: Spiegelung plus Striping, mindestens 4.",
        reference: EXAM,
      },
      {
        id: "a1-d3-nvme",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "foundation",
        question: "Welche Speicherlösung bietet in einem aktuellen Desktop-PC in der Regel die höchste Lese- und Schreibgeschwindigkeit?",
        options: [
          { id: "A", text: "Eine 7.200-U/min-Festplatte über SATA", rationale: "Mechanische Festplatten sind deutlich langsamer als SSDs." },
          { id: "B", text: "Eine 2,5-Zoll-SSD über SATA", rationale: "SATA-SSDs sind schnell, aber durch die SATA-Schnittstelle auf rund 600 MB/s begrenzt." },
          { id: "C", text: "Eine externe Festplatte über USB 2.0", rationale: "USB 2.0 ist mit maximal 480 Mbit/s sehr langsam." },
          { id: "D", text: "Eine M.2-SSD mit NVMe über PCIe", rationale: "Richtig. NVMe-SSDs nutzen PCIe-Lanes direkt und erreichen ein Vielfaches der SATA-Geschwindigkeit." },
        ],
        answer: "D",
        explanation:
          "Achte auf den Unterschied zwischen Formfaktor und Schnittstelle: M.2 ist ein Formfaktor, der sowohl SATA- als auch NVMe-SSDs aufnehmen kann. Nicht jeder M.2-Steckplatz unterstützt beides.",
        reference: EXAM,
      },
      {
        id: "a1-d3-ram-dual-channel",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "intermediate",
        question:
          "Ein Mainboard hat vier RAM-Steckplätze mit farbiger Markierung. Ein Kunde hat zwei gleiche Module gekauft und möchte Dual-Channel nutzen. Wie werden sie eingesetzt?",
        options: [
          { id: "A", text: "In die laut Handbuch zusammengehörigen Steckplätze eines Kanalpaars, meist gleich markiert", rationale: "Richtig. Für Dual-Channel müssen die Module auf beide Kanäle verteilt werden; welche Steckplätze das sind, steht im Handbuch des Mainboards." },
          { id: "B", text: "Direkt nebeneinander in die ersten beiden Steckplätze, unabhängig von der Markierung", rationale: "Benachbarte Steckplätze gehören oft zum selben Kanal; dann läuft der Speicher nur im Single-Channel-Modus." },
          { id: "C", text: "Ein Modul in einen Steckplatz, das zweite in einen PCIe-Slot", rationale: "RAM passt nicht in einen PCIe-Slot." },
          { id: "D", text: "Die Reihenfolge spielt keine Rolle, Dual-Channel wird immer aktiviert", rationale: "Dual-Channel setzt die richtige Belegung voraus." },
        ],
        answer: "A",
        explanation:
          "Mehrkanal-Speicher verdoppelt (oder vervielfacht) die Bandbreite. Am zuverlässigsten funktioniert es mit identischen Modulen in den vom Hersteller angegebenen Steckplätzen.",
        reference: EXAM,
      },
      {
        id: "a1-d3-psu",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "intermediate",
        question:
          "Nach dem Einbau einer leistungsstarken Grafikkarte schaltet sich ein PC unter Last, etwa beim Spielen, plötzlich aus. Im Leerlauf läuft er stabil. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Ein defektes Betriebssystem", rationale: "Ein Softwarefehler führt eher zu Abstürzen oder Bluescreens, nicht zu einem schlagartigen Abschalten unter Last." },
          { id: "B", text: "Eine leere CMOS-Batterie", rationale: "Eine leere CMOS-Batterie führt zu falscher Uhrzeit und verlorenen BIOS-Einstellungen." },
          { id: "C", text: "Ein zu schwaches Netzteil", rationale: "Richtig. Reicht die Leistung des Netzteils für Grafikkarte und System unter Last nicht aus, greift die Schutzschaltung und der PC schaltet ab." },
          { id: "D", text: "Ein fehlender Monitortreiber", rationale: "Ein Monitortreiber beeinflusst die Stromversorgung nicht." },
        ],
        answer: "C",
        explanation:
          "Beim Aufrüsten sollte die Leistung des Netzteils mit Reserve berechnet werden. Auch fehlende PCIe-Stromanschlüsse an der Grafikkarte oder Überhitzung können zu Abschaltungen führen.",
        reference: EXAM,
      },
      {
        id: "a1-d3-laser-fuser",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "intermediate",
        question: "Bei einem Laserdrucker lässt sich der Toner auf frischen Ausdrucken mit dem Finger verwischen. Welche Komponente ist wahrscheinlich defekt?",
        options: [
          { id: "A", text: "Die Fixiereinheit (Fuser)", rationale: "Richtig. Die Fixiereinheit schmilzt den Toner mit Hitze und Druck ins Papier; arbeitet sie nicht richtig, bleibt der Toner lose." },
          { id: "B", text: "Die Einzugsrolle", rationale: "Die Einzugsrolle zieht Papier ein; ein Defekt führt zu Papierstau oder Mehrfacheinzug." },
          { id: "C", text: "Der Netzwerkanschluss", rationale: "Ein Netzwerkproblem verhindert das Drucken, beeinflusst aber nicht die Haftung des Toners." },
          { id: "D", text: "Der Druckertreiber", rationale: "Ein falscher Treiber erzeugt eher unleserliche Zeichen, keinen verwischbaren Toner." },
        ],
        answer: "A",
        explanation:
          "Der Laserdruckprozess: Verarbeiten, Laden, Belichten, Entwickeln, Übertragen, Fixieren, Reinigen. Beim Fixieren wird der Toner dauerhaft mit dem Papier verbunden.",
        reference: EXAM,
      },
      {
        id: "a1-d3-tpm",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen möchte die Laufwerke seiner Notebooks mit BitLocker verschlüsseln und die Schlüssel in einem Hardwarebaustein sicher speichern. Welche Komponente wird dafür genutzt?",
        options: [
          { id: "A", text: "Die CMOS-Batterie", rationale: "Die CMOS-Batterie versorgt die Uhr und die BIOS-Einstellungen mit Strom, speichert aber keine Schlüssel." },
          { id: "B", text: "Das Trusted Platform Module (TPM)", rationale: "Richtig. Das TPM ist ein Sicherheitschip, der kryptografische Schlüssel speichert und die Integrität des Startvorgangs prüft." },
          { id: "C", text: "Der L3-Cache der CPU", rationale: "Der Cache beschleunigt Speicherzugriffe und ist nicht für die Schlüsselspeicherung gedacht." },
          { id: "D", text: "Der Grafikspeicher", rationale: "Grafikspeicher dient der Bildverarbeitung." },
        ],
        answer: "B",
        explanation:
          "TPM 2.0 ist Voraussetzung für Windows 11 und wird im UEFI aktiviert. Zusammen mit Secure Boot schützt es den Startvorgang vor Manipulation.",
        reference: EXAM,
      },
      {
        id: "a1-d3-usb-c",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "foundation",
        question: "Welche Aussage zu USB-C ist richtig?",
        options: [
          { id: "A", text: "USB-C ist eine Übertragungsgeschwindigkeit", rationale: "USB-C beschreibt die Steckerform; die Geschwindigkeit hängt vom unterstützten USB- oder Thunderbolt-Standard ab." },
          { id: "B", text: "USB-C-Stecker lassen sich nur in einer Richtung einstecken", rationale: "USB-C ist verdrehsicher und lässt sich in beiden Richtungen einstecken." },
          { id: "C", text: "USB-C kann keine Bildsignale übertragen", rationale: "Im DisplayPort-Alternate-Mode oder mit Thunderbolt kann USB-C Bildsignale übertragen." },
          { id: "D", text: "USB-C ist ein verdrehsicherer Steckertyp, der je nach Gerät Daten, Strom und Bild übertragen kann", rationale: "Richtig. USB-C ist ein Steckertyp; was er überträgt, hängt von den unterstützten Standards ab." },
        ],
        answer: "D",
        explanation:
          "Unterscheide Steckertyp (USB-A, USB-C, Micro-USB, Lightning) und Standard (USB 2.0, USB 3.x, USB4, Thunderbolt). Ein USB-C-Anschluss kann je nach Gerät sehr unterschiedliche Fähigkeiten haben.",
        reference: EXAM,
      },

      {
        id: "a1-d3-cat6-length",
        domain: "d3",
        objective: "Bereich 3.0 Hardware",
        difficulty: "foundation",
        question: "Wie lang darf ein Kupfer-Netzwerkkabel nach Ethernet-Standard (zum Beispiel Cat 6) zwischen Switch und Endgerät maximal sein?",
        options: [
          { id: "A", text: "10 Meter", rationale: "10 Meter sind viel kürzer als die zulässige Länge." },
          { id: "B", text: "100 Meter", rationale: "Richtig. Für Twisted-Pair-Kupferkabel gilt eine maximale Segmentlänge von 100 Metern." },
          { id: "C", text: "500 Meter", rationale: "500 Meter überschreiten die Grenze für Twisted-Pair deutlich; dafür wird Glasfaser eingesetzt." },
          { id: "D", text: "Es gibt keine Längenbegrenzung", rationale: "Mit zunehmender Länge nimmt die Signaldämpfung zu, daher gibt es eine feste Grenze." },
        ],
        answer: "B",
        explanation:
          "Cat 5e unterstützt 1 Gbit/s, Cat 6 bis 10 Gbit/s auf etwa 55 Meter, Cat 6a 10 Gbit/s auf 100 Meter. Für längere Strecken werden Glasfaserkabel verwendet.",
        reference: EXAM,
      },

      /* ── Bereich 4: Virtualisierung und Cloud Computing ────────────────── */
      {
        id: "a1-d4-saas",
        domain: "d4",
        objective: "Bereich 4.0 Virtualisierung und Cloud Computing",
        difficulty: "foundation",
        question:
          "Ein Unternehmen nutzt eine webbasierte E-Mail- und Office-Lösung. Um Server, Betriebssystem und Updates der Anwendung kümmert sich vollständig der Anbieter. Welches Cloud-Modell ist das?",
        options: [
          { id: "A", text: "Infrastructure as a Service (IaaS)", rationale: "Bei IaaS verwaltet der Kunde Betriebssystem und Anwendungen selbst." },
          { id: "B", text: "Platform as a Service (PaaS)", rationale: "Bei PaaS entwickelt und betreibt der Kunde eigene Anwendungen auf einer verwalteten Plattform." },
          { id: "C", text: "Software as a Service (SaaS)", rationale: "Richtig. Bei SaaS nutzt der Kunde eine fertige Anwendung; der Anbieter verwaltet alles darunter." },
          { id: "D", text: "On-Premises", rationale: "On-Premises bedeutet Betrieb im eigenen Rechenzentrum, nicht beim Anbieter." },
        ],
        answer: "C",
        explanation:
          "IaaS: virtuelle Server, Speicher und Netzwerke. PaaS: Laufzeitumgebung für eigene Anwendungen. SaaS: fertige Anwendungen wie E-Mail oder CRM.",
        reference: EXAM,
      },
      {
        id: "a1-d4-hypervisor",
        domain: "d4",
        objective: "Bereich 4.0 Virtualisierung und Cloud Computing",
        difficulty: "intermediate",
        question: "Was unterscheidet einen Typ-1-Hypervisor von einem Typ-2-Hypervisor?",
        options: [
          { id: "A", text: "Ein Typ-1-Hypervisor läuft direkt auf der Hardware, ein Typ-2-Hypervisor als Anwendung auf einem Betriebssystem", rationale: "Richtig. Typ 1 (Bare Metal) wird vor allem auf Servern eingesetzt, Typ 2 (Hosted) häufig auf Arbeitsplatzrechnern." },
          { id: "B", text: "Ein Typ-1-Hypervisor kann nur Linux-VMs ausführen", rationale: "Beide Typen können je nach Produkt verschiedene Gastbetriebssysteme ausführen." },
          { id: "C", text: "Ein Typ-2-Hypervisor braucht keine CPU-Virtualisierungsfunktionen", rationale: "Auch Typ-2-Hypervisoren nutzen in der Regel Intel VT-x oder AMD-V." },
          { id: "D", text: "Ein Typ-2-Hypervisor ist immer schneller", rationale: "Typ 2 hat durch das Host-Betriebssystem eher mehr Overhead." },
        ],
        answer: "A",
        explanation:
          "Für Virtualisierung muss die Hardwareunterstützung (Intel VT-x oder AMD-V) meist im UEFI aktiviert werden. Ausreichend RAM und CPU-Kerne sind ebenfalls Voraussetzung.",
        reference: EXAM,
      },
      {
        id: "a1-d4-elasticity",
        domain: "d4",
        objective: "Bereich 4.0 Virtualisierung und Cloud Computing",
        difficulty: "foundation",
        question:
          "Ein Onlineshop erhöht in der Weihnachtszeit automatisch die Zahl seiner Cloud-Server und verringert sie danach wieder. Welche Eigenschaft der Cloud ist das?",
        options: [
          { id: "A", text: "Mandantenfähigkeit (Multitenancy)", rationale: "Mandantenfähigkeit bedeutet, dass sich mehrere Kunden dieselbe Infrastruktur teilen." },
          { id: "B", text: "Hochverfügbarkeit", rationale: "Hochverfügbarkeit hält Dienste trotz Ausfällen erreichbar, passt aber nicht die Kapazität an." },
          { id: "C", text: "Dateisynchronisation", rationale: "Dateisynchronisation hält Dateien auf mehreren Geräten aktuell." },
          { id: "D", text: "Elastizität", rationale: "Richtig. Elastizität bedeutet, Ressourcen bedarfsgerecht automatisch zu erhöhen und wieder zu verringern." },
        ],
        answer: "D",
        explanation:
          "Weitere Cloud-Eigenschaften: gemessene Nutzung (Abrechnung nach Verbrauch), gemeinsam genutzte Ressourcen, Verfügbarkeit und Self-Service.",
        reference: EXAM,
      },

      /* ── Bereich 5: Fehlerbehebung bei Hardware und Netzwerken ─────────── */
      {
        id: "a1-d5-methodology",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "foundation",
        question:
          "Ein Techniker hat eine Theorie zur Fehlerursache aufgestellt und sie erfolgreich getestet. Was ist laut CompTIA-Methodik der nächste Schritt?",
        options: [
          { id: "A", text: "Die Ergebnisse dokumentieren und das Ticket schließen", rationale: "Dokumentiert wird erst am Ende, nachdem die Lösung umgesetzt und geprüft wurde." },
          { id: "B", text: "Einen Aktionsplan erstellen und die Lösung umsetzen", rationale: "Richtig. Nach dem bestätigten Test folgt der Plan zur Behebung und dessen Umsetzung." },
          { id: "C", text: "Den Benutzer erneut zum Problem befragen", rationale: "Die Befragung gehört zum ersten Schritt, der Identifikation des Problems." },
          { id: "D", text: "Eine neue Theorie aufstellen", rationale: "Eine neue Theorie ist nur nötig, wenn der Test die bisherige widerlegt." },
        ],
        answer: "B",
        explanation:
          "Die sechs Schritte: 1. Problem identifizieren, 2. Theorie zur wahrscheinlichen Ursache aufstellen, 3. Theorie testen, 4. Aktionsplan erstellen und umsetzen, 5. volle Systemfunktion prüfen und ggf. Vorbeugemaßnahmen umsetzen, 6. Ergebnisse, Maßnahmen und Resultate dokumentieren.",
        reference: EXAM,
      },
      {
        id: "a1-d5-post-beeps",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "Ein PC schaltet sich ein, die Lüfter drehen, aber es erscheint kein Bild, und es ertönt eine Folge von Pieptönen. Wo findet der Techniker die Bedeutung der Signale?",
        options: [
          { id: "A", text: "In der Windows-Ereignisanzeige", rationale: "Windows ist noch nicht gestartet; die Ereignisanzeige enthält dazu keine Einträge." },
          { id: "B", text: "Im Druckerprotokoll", rationale: "Das Druckerprotokoll hat mit dem Startvorgang nichts zu tun." },
          { id: "C", text: "In der Dokumentation des Mainboard- oder BIOS-Herstellers", rationale: "Richtig. Die Pieptöne sind POST-Codes, deren Bedeutung vom Hersteller festgelegt ist, etwa für fehlenden oder defekten Arbeitsspeicher." },
          { id: "D", text: "In den DNS-Einstellungen", rationale: "DNS betrifft die Namensauflösung im Netzwerk." },
        ],
        answer: "C",
        explanation:
          "Beim POST (Power-On Self-Test) prüft die Firmware die Grundhardware. Fehler werden über Pieptöne, LEDs oder Codeanzeigen auf dem Mainboard gemeldet.",
        reference: EXAM,
      },
      {
        id: "a1-d5-overheating",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "Ein Desktop-PC stürzt nach etwa 20 Minuten Nutzung ab, die Lüfter sind sehr laut. Nach einer Pause startet er wieder normal. Was sollte der Techniker zuerst prüfen?",
        options: [
          { id: "A", text: "Ob das Betriebssystem neu installiert werden muss", rationale: "Eine Neuinstallation ist aufwendig und passt nicht zum Muster aus Hitze und Wartezeit." },
          { id: "B", text: "Ob die Netzwerkkarte richtig konfiguriert ist", rationale: "Eine Netzwerkkonfiguration verursacht keine zeitabhängigen Abstürze mit lauten Lüftern." },
          { id: "C", text: "Ob die Bildschirmauflösung zu hoch ist", rationale: "Die Auflösung führt nicht zu solchen Abstürzen." },
          { id: "D", text: "Ob Kühlkörper und Lüfter verstaubt sind oder die Wärmeleitpaste erneuert werden muss", rationale: "Richtig. Das Muster deutet auf Überhitzung hin; Staub und ausgetrocknete Wärmeleitpaste sind häufige Ursachen." },
        ],
        answer: "D",
        explanation:
          "Bei der Fehlerbehebung gilt: Erst die einfachen und wahrscheinlichen Ursachen prüfen. Temperaturen lassen sich im UEFI oder mit Monitoring-Tools ablesen.",
        reference: EXAM,
      },
      {
        id: "a1-d5-limited-connectivity",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "Ein Benutzer kann Dateien auf dem Server im eigenen Netz öffnen, aber keine Websites im Internet erreichen. Andere Benutzer im selben Netz sind nicht betroffen. Welche Einstellung am PC prüft der Techniker zuerst?",
        options: [
          { id: "A", text: "Das Standard-Gateway in der IP-Konfiguration", rationale: "Richtig. Ohne korrektes Standard-Gateway erreicht der PC nur Geräte im eigenen Subnetz, aber kein anderes Netz und damit auch nicht das Internet." },
          { id: "B", text: "Die Bildschirmauflösung", rationale: "Die Auflösung hat keinen Einfluss auf die Netzwerkverbindung." },
          { id: "C", text: "Die Drucker-Warteschlange", rationale: "Die Druckwarteschlange betrifft nur das Drucken." },
          { id: "D", text: "Die Größe der Auslagerungsdatei", rationale: "Die Auslagerungsdatei hat mit dem Internetzugang nichts zu tun." },
        ],
        answer: "A",
        explanation:
          "Mit ipconfig /all prüfst du IP-Adresse, Subnetzmaske, Gateway und DNS-Server. Ein ping auf das Gateway zeigt, ob es erreichbar ist.",
        reference: EXAM,
      },
      {
        id: "a1-d5-grinding",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "Ein älterer PC wird immer langsamer, aus dem Gehäuse kommen klickende Geräusche, und Dateien lassen sich teilweise nicht mehr öffnen. Was sollte der Techniker als Erstes tun?",
        options: [
          { id: "A", text: "Die Festplatte defragmentieren", rationale: "Bei einer vermutlich defekten Festplatte belastet eine Defragmentierung das Laufwerk zusätzlich und kann zu Datenverlust führen." },
          { id: "B", text: "Die Daten sichern, solange das Laufwerk noch lesbar ist", rationale: "Richtig. Klickgeräusche und Lesefehler deuten auf einen bevorstehenden Festplattenausfall hin; die Datensicherung hat Vorrang." },
          { id: "C", text: "Mehr Arbeitsspeicher einbauen", rationale: "Mehr RAM löst keine mechanischen Festplattenprobleme." },
          { id: "D", text: "Das Betriebssystem auf derselben Festplatte neu installieren", rationale: "Eine Neuinstallation auf einem defekten Laufwerk löscht Daten und löst das Problem nicht." },
        ],
        answer: "B",
        explanation:
          "Typische Anzeichen für einen Laufwerksausfall: Klick- oder Schleifgeräusche, S.M.A.R.T.-Warnungen, Lesefehler, sehr lange Zugriffszeiten. Danach wird das Laufwerk ersetzt.",
        reference: EXAM,
      },
      {
        id: "a1-d5-printer-ghosting",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "Ein Laserdrucker druckt auf jeder Seite ein schwaches Abbild eines früheren Bildbereichs weiter unten auf derselben Seite. Wie heißt dieser Fehler, und welche Komponente kommt typischerweise in Frage?",
        options: [
          { id: "A", text: "Papierstau; die Einzugsrolle", rationale: "Ein Papierstau verhindert den Ausdruck, erzeugt aber keine wiederholten Bilder." },
          { id: "B", text: "Streifenbildung; der Druckkopf eines Tintenstrahldruckers", rationale: "Ein Laserdrucker hat keinen Tintendruckkopf." },
          { id: "C", text: "Geisterbilder (Ghosting); Bildtrommel oder Reinigung der Trommel", rationale: "Richtig. Wird die Trommel nicht vollständig gereinigt oder entladen, druckt sie Reste des vorherigen Bildes erneut." },
          { id: "D", text: "Falsche Farben; der Druckertreiber", rationale: "Der Treiber verursacht keine wiederholten Abbilder auf derselben Seite." },
        ],
        answer: "C",
        explanation:
          "Geisterbilder entstehen oft durch eine abgenutzte Bildtrommel oder Probleme beim Reinigen und Entladen. Häufig wird dann die Tonerkartusche mit integrierter Trommel getauscht.",
        reference: EXAM,
      },
      {
        id: "a1-d5-intermittent-wifi",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "In einem Büro bricht das 2,4-GHz-WLAN immer zur Mittagszeit stark ein, wenn in der angrenzenden Küche die Mikrowelle läuft. Was hilft am ehesten?",
        options: [
          { id: "A", text: "Die SSID umbenennen", rationale: "Der Netzwerkname hat keinen Einfluss auf Funkstörungen." },
          { id: "B", text: "Das WLAN-Kennwort ändern", rationale: "Das Kennwort betrifft die Sicherheit, nicht die Funkqualität." },
          { id: "C", text: "Die Bildschirmhelligkeit reduzieren", rationale: "Die Helligkeit hat keinen Einfluss auf das WLAN." },
          { id: "D", text: "Die Geräte auf das 5-GHz- oder 6-GHz-Band umstellen", rationale: "Richtig. Mikrowellen stören vor allem das 2,4-GHz-Band; höhere Frequenzbänder sind davon nicht betroffen." },
        ],
        answer: "D",
        explanation:
          "Funkstörungen (Interferenzen) kommen von Mikrowellen, schnurlosen Telefonen, Bluetooth und benachbarten WLANs. Ein WLAN-Analysator hilft, Kanäle und Störquellen zu erkennen.",
        reference: EXAM,
      },
      {
        id: "a1-d5-display-dim",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung bei Hardware und Netzwerken",
        difficulty: "intermediate",
        question:
          "Das Display eines Notebooks bleibt schwarz, mit einer Taschenlampe ist das Bild aber schwach zu erkennen. Ein externer Monitor zeigt das Bild normal. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Ein defekter Grafikchip", rationale: "Der externe Monitor zeigt ein normales Bild, also arbeitet die Grafik." },
          { id: "B", text: "Eine ausgefallene Hintergrundbeleuchtung", rationale: "Richtig. Das Bild wird erzeugt, aber nicht beleuchtet; typisch für eine defekte Hintergrundbeleuchtung oder deren Stromversorgung." },
          { id: "C", text: "Ein falscher Grafiktreiber", rationale: "Ein Treiberproblem würde auch den externen Monitor betreffen oder zu Bildfehlern führen, nicht zu einem nur schwach sichtbaren Bild." },
          { id: "D", text: "Zu wenig Arbeitsspeicher", rationale: "Arbeitsspeicher beeinflusst die Displaybeleuchtung nicht." },
        ],
        answer: "B",
        explanation:
          "Erst prüfen, ob die Helligkeit über die Funktionstasten heruntergeregelt wurde. Ist das nicht der Fall, ist meist die LED-Hintergrundbeleuchtung oder das Displaykabel betroffen.",
        reference: EXAM,
      },
    ],
  },
};
