import type { DeContent } from "@/config/types";

/**
 * German guide and free practice questions for CompTIA Network+ (N10-009, V9).
 * Exam facts follow the verified record in src/config/certifications.ts
 * (CompTIA Network+ certification page, checked 2026-11-03).
 * The objectives PDF was not reachable, so questions reference the exam domains only.
 * ORIGINAL CertRamp questions, not real exam questions.
 */
const EXAM = {
  label: "CompTIA: Network+ (N10-009)",
  url: "https://www.comptia.org/en-us/certifications/network/",
};

export const comptiaNetworkPlusDe: DeContent = {
  slug: "comptia-network-plus-n10-009",
  name: "CompTIA Network+ (N10-009)",
  languageNote:
    "CompTIA bietet die Prüfung N10-009 unter anderem auf Deutsch an. Protokollnamen, Befehle und Abkürzungen wie OSPF, VLAN oder traceroute bleiben auch in der deutschen Prüfung englisch.",
  facts: [
    { label: "Prüfungsanbieter", value: "CompTIA" },
    { label: "Prüfungscode", value: "N10-009 (Network+ V9)" },
    { label: "Fragen", value: "Maximal 90" },
    { label: "Dauer", value: "90 Minuten" },
    { label: "Bestehensgrenze", value: "720 (auf einer Skala von 100 bis 900)" },
    { label: "Fragetypen", value: "Multiple-Choice- und performancebasierte Fragen" },
    { label: "Prüfungssprachen", value: "Englisch, Deutsch, Japanisch, Portugiesisch, Spanisch" },
    {
      label: "Voraussetzungen",
      value: "Keine; CompTIA empfiehlt A+ und 9 bis 12 Monate praktische Erfahrung als Junior-Netzwerkadministrator oder im Netzwerk-Support",
    },
  ],
  domains: [
    { id: "d1", name: "Netzwerkkonzepte", weight: "23%" },
    { id: "d2", name: "Netzwerkimplementierung", weight: "20%" },
    { id: "d3", name: "Netzwerkbetrieb", weight: "19%" },
    { id: "d4", name: "Netzwerksicherheit", weight: "14%" },
    { id: "d5", name: "Fehlerbehebung im Netzwerk", weight: "24%" },
  ],

  /* ── Leitfaden ─────────────────────────────────────────────────────────── */
  guide: {
    slug: "comptia-network-plus-n10-009",
    summary:
      "CompTIA Network+ (N10-009) prüft Netzwerkgrundlagen auf Einstiegs- bis Fortgeschrittenenniveau. Du hast 90 Minuten für maximal 90 Fragen und bestehst mit 720 von 900 Punkten. Am stärksten gewichtet sind Fehlerbehebung im Netzwerk (24 %) und Netzwerkkonzepte (23 %). Die Prüfung gibt es auch auf Deutsch.",
    whoFor: [
      "IT-Support-Mitarbeitende, die in die Netzwerkadministration wechseln wollen",
      "Junior-Netzwerkadministratoren und Systemadministratoren",
      "Auszubildende und Umschüler, die nach CompTIA A+ den nächsten Schritt gehen",
    ],
    sections: [
      {
        id: "exam-format",
        heading: "So läuft die Prüfung ab",
        paragraphs: [
          "Die Prüfung umfasst maximal 90 Fragen in 90 Minuten: Multiple-Choice-Fragen mit einer oder mehreren richtigen Antworten und performancebasierte Aufgaben (PBQs), in denen du zum Beispiel ein Subnetz planst, Firewall-Regeln ordnest oder in einer simulierten Umgebung einen Fehler findest. Bestanden ist ab 720 auf einer Skala von 100 bis 900.",
          "Formale Voraussetzungen gibt es nicht. CompTIA empfiehlt A+ und 9 bis 12 Monate praktische Erfahrung im Netzwerkumfeld. Die Prüfung wird auf Englisch, Deutsch, Japanisch, Portugiesisch und Spanisch angeboten.",
        ],
      },
      {
        id: "where-to-focus",
        heading: "Worauf du dich konzentrieren solltest",
        paragraphs: [
          "Fehlerbehebung (24 %) ist der größte Bereich: Du wendest die Methodik zur Fehlerbehebung an, erkennst Kabel- und Schnittstellenprobleme, WLAN-Störungen, Fehler bei IP-Adressierung, DNS, DHCP und Routing und nutzt Werkzeuge wie ping, traceroute, nslookup, ipconfig und Paketanalysatoren. Netzwerkkonzepte (23 %) umfassen das OSI-Modell, Ports und Protokolle, IPv4-Subnetting, IPv6, Netzwerkgeräte, Topologien und Cloud-Konzepte.",
          "Netzwerkimplementierung (20 %) behandelt Routing (statisch und dynamisch, etwa OSPF und BGP), Switching mit VLANs und Spanning Tree, WLAN-Standards und physische Installation. Netzwerkbetrieb (19 %) umfasst Dokumentation, Monitoring mit SNMP und Syslog, Hochverfügbarkeit und Notfallwiederherstellung sowie Netzwerkdienste. Netzwerksicherheit (14 %) deckt Angriffe, Härtung, Zugriffskontrolle und Segmentierung ab.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Die Prüfungsziele besorgen",
            body: "Lade auf der CompTIA-Seite zu Network+ die Prüfungsziele zu N10-009 herunter und arbeite sie Punkt für Punkt durch.",
          },
          {
            title: "Subnetting sicher beherrschen",
            body: "Übe täglich, bis du Netzadresse, Broadcast-Adresse und Anzahl nutzbarer Hosts für jedes Präfix ohne Taschenrechner bestimmst. Subnetting taucht in vielen Fragen und PBQs auf.",
          },
          {
            title: "Ports und Protokolle lernen",
            body: "Lerne die gängigen Ports mit Protokoll und Zweck, etwa 22 SSH, 53 DNS, 67/68 DHCP, 161/162 SNMP, 389 LDAP, 443 HTTPS, 514 Syslog und 3389 RDP.",
          },
          {
            title: "Ein Labor aufbauen",
            body: "Mit einem Netzwerksimulator oder virtuellen Maschinen kannst du VLANs, Routing und DHCP konfigurieren und Fehler bewusst einbauen, um sie anschließend zu finden.",
          },
          {
            title: "Mit Zeitlimit üben",
            body: "Bearbeite vollständige Übungsprüfungen in 90 Minuten. Markiere PBQs und bearbeite sie zum Schluss, damit sie dich nicht zu viel Zeit kosten.",
          },
          {
            title: "Mit Puffer buchen",
            body: "Buche die Prüfung, wenn du in mehreren Übungsprüfungen sicher über 80 % liegst. Die Hürde von 720 Punkten ist höher als bei A+.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Typische Fehler bei der Vorbereitung",
        bullets: [
          "Subnetting nur langsam beherrschen. In der Prüfung fehlt die Zeit, jede Rechnung lange aufzuschreiben.",
          "OSI-Schichten falsch zuordnen: Switches arbeiten auf Schicht 2, Router auf Schicht 3, Load Balancer und Proxys oft auf Schicht 7.",
          "Ähnliche Protokolle verwechseln, etwa SNMP und Syslog, TACACS+ und RADIUS oder OSPF und BGP.",
          "Bei der Fehlerbehebung Schritte überspringen: Erst wird das Problem identifiziert und eine Theorie getestet, dann umgesetzt, geprüft und dokumentiert.",
          "IPv6 vernachlässigen. Adressarten, Kurzschreibweise und SLAAC kommen regelmäßig vor.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie viele Fragen hat die Prüfung N10-009?",
        answer: "Maximal 90 Fragen in 90 Minuten, darunter Multiple-Choice- und performancebasierte Aufgaben.",
      },
      {
        question: "Wie viele Punkte brauche ich zum Bestehen?",
        answer: "720 Punkte auf einer Skala von 100 bis 900.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer: "Ja. CompTIA bietet N10-009 auf Englisch, Deutsch, Japanisch, Portugiesisch und Spanisch an.",
      },
      {
        question: "Brauche ich vorher CompTIA A+?",
        answer:
          "Nein, A+ ist keine Pflicht. CompTIA empfiehlt A+ und 9 bis 12 Monate praktische Erfahrung im Netzwerkumfeld.",
      },
      {
        question: "Welcher Bereich ist am wichtigsten?",
        answer:
          "Fehlerbehebung im Netzwerk mit 24 %, dicht gefolgt von Netzwerkkonzepten mit 23 %. Danach kommen Implementierung (20 %), Betrieb (19 %) und Sicherheit (14 %).",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, die nach den Prüfungsbereichen von CompTIA erstellt wurden. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "CompTIA Network+ (N10-009) auf Deutsch: Prüfung & Lernplan",
      description:
        "CompTIA Network+ N10-009 auf Deutsch vorbereiten: maximal 90 Fragen, 90 Minuten, 720 Punkte zum Bestehen, alle fünf Bereiche mit Gewichtung und Lernplan.",
    },
    published: "2026-11-24",
    updated: "2026-11-24",
  },

  /* ── Übungsfragen ──────────────────────────────────────────────────────── */
  questions: {
    slug: "comptia-network-plus-n10-009",
    intro:
      "30 eigene Übungsfragen zu CompTIA Network+ (N10-009) aus allen fünf Prüfungsbereichen, gewichtet wie in der Prüfung. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-11-24",
    updated: "2026-11-24",
    seo: {
      title: "CompTIA Network+ N10-009 Übungsfragen mit Lösungen (Deutsch)",
      description:
        "30 kostenlose CompTIA Network+ Übungsfragen auf Deutsch: OSI, Subnetting, VLAN, Routing, WLAN, Sicherheit und Fehlerbehebung, mit Erklärung zu jeder Option.",
    },
    questions: [
      /* ── Bereich 1: Netzwerkkonzepte ───────────────────────────────────── */
      {
        id: "np-d1-osi-switch",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "foundation",
        question: "Auf welcher OSI-Schicht trifft ein klassischer Switch seine Weiterleitungsentscheidungen?",
        options: [
          { id: "A", text: "Schicht 1", rationale: "Auf Schicht 1 arbeiten Hubs und Repeater, die Signale nur weitergeben." },
          { id: "B", text: "Schicht 2", rationale: "Richtig. Ein Switch leitet Frames anhand von MAC-Adressen weiter, also auf der Sicherungsschicht." },
          { id: "C", text: "Schicht 3", rationale: "Auf Schicht 3 arbeiten Router und Layer-3-Switches mit IP-Adressen." },
          { id: "D", text: "Schicht 4", rationale: "Schicht 4 betrifft Transportprotokolle wie TCP und UDP." },
        ],
        answer: "B",
        explanation:
          "OSI: 1 Bitübertragung, 2 Sicherung, 3 Vermittlung, 4 Transport, 5 Sitzung, 6 Darstellung, 7 Anwendung. Merke: Switch = Schicht 2 (MAC), Router = Schicht 3 (IP).",
        reference: EXAM,
      },
      {
        id: "np-d1-subnet-hosts",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "intermediate",
        question: "Wie viele nutzbare Hostadressen bietet ein IPv4-Subnetz mit dem Präfix /27?",
        options: [
          { id: "A", text: "32", rationale: "32 ist die Gesamtzahl der Adressen; Netz- und Broadcast-Adresse sind nicht nutzbar." },
          { id: "B", text: "62", rationale: "62 nutzbare Hosts hat ein /26." },
          { id: "C", text: "30", rationale: "Richtig. Ein /27 hat 5 Hostbits: 2^5 = 32 Adressen, abzüglich Netz- und Broadcast-Adresse bleiben 30." },
          { id: "D", text: "14", rationale: "14 nutzbare Hosts hat ein /28." },
        ],
        answer: "C",
        explanation:
          "Formel: 2^(32 − Präfix) − 2. /24 = 254, /25 = 126, /26 = 62, /27 = 30, /28 = 14, /29 = 6, /30 = 2. Für Punkt-zu-Punkt-Verbindungen wird auch /31 verwendet.",
        reference: EXAM,
      },
      {
        id: "np-d1-ports",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "foundation",
        question: "Welches Protokoll verwendet standardmäßig UDP-Port 514?",
        options: [
          { id: "A", text: "Syslog", rationale: "Richtig. Syslog überträgt Protokollmeldungen klassisch über UDP 514." },
          { id: "B", text: "SNMP", rationale: "SNMP nutzt UDP 161 für Abfragen und 162 für Traps." },
          { id: "C", text: "NTP", rationale: "NTP nutzt UDP 123." },
          { id: "D", text: "TFTP", rationale: "TFTP nutzt UDP 69." },
        ],
        answer: "A",
        explanation:
          "Weitere Ports: 20/21 FTP, 22 SSH/SFTP, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 69 TFTP, 123 NTP, 161/162 SNMP, 389 LDAP, 443 HTTPS, 445 SMB, 636 LDAPS, 1433 SQL Server, 3389 RDP, 5060/5061 SIP.",
        reference: EXAM,
      },
      {
        id: "np-d1-ipv6",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "intermediate",
        question: "Welche IPv6-Adresse ist eine Link-Local-Adresse?",
        options: [
          { id: "A", text: "2001:db8::10", rationale: "2001:db8::/32 ist für Dokumentation reserviert, keine Link-Local-Adresse." },
          { id: "B", text: "::1", rationale: "::1 ist die Loopback-Adresse." },
          { id: "C", text: "ff02::1", rationale: "ff02::1 ist eine Multicast-Adresse (alle Knoten im Link)." },
          { id: "D", text: "fe80::1a2b:3cff:fe4d:5e6f", rationale: "Richtig. Link-Local-Adressen beginnen mit fe80::/10 und sind nur im lokalen Segment gültig." },
        ],
        answer: "D",
        explanation:
          "IPv6-Adressarten: Global Unicast (2000::/3), Unique Local (fc00::/7), Link-Local (fe80::/10), Multicast (ff00::/8), Loopback (::1). IPv6 kennt keinen Broadcast.",
        reference: EXAM,
      },
      {
        id: "np-d1-tcp-udp",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "foundation",
        question: "Warum verwenden VoIP-Gespräche für die Sprachdaten meist UDP statt TCP?",
        options: [
          { id: "A", text: "UDP verschlüsselt die Daten automatisch", rationale: "UDP bietet keine Verschlüsselung." },
          { id: "B", text: "UDP hat weniger Overhead und keine Neuübertragungen, was die Verzögerung gering hält", rationale: "Richtig. Für Echtzeitdaten ist ein verspätet neu übertragenes Paket nutzlos; geringe Latenz ist wichtiger als Zuverlässigkeit." },
          { id: "C", text: "UDP garantiert die Reihenfolge der Pakete", rationale: "UDP garantiert weder Zustellung noch Reihenfolge." },
          { id: "D", text: "UDP baut vor jeder Übertragung einen Drei-Wege-Handshake auf", rationale: "Der Drei-Wege-Handshake gehört zu TCP." },
        ],
        answer: "B",
        explanation:
          "TCP ist verbindungsorientiert und zuverlässig (Handshake, Bestätigungen, Neuübertragung). UDP ist verbindungslos und schnell und eignet sich für Sprache, Video, DNS-Abfragen und DHCP.",
        reference: EXAM,
      },
      {
        id: "np-d1-cloud-model",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "intermediate",
        question:
          "Ein Unternehmen betreibt seine Datenbank im eigenen Rechenzentrum und den Webshop bei einem öffentlichen Cloud-Anbieter, verbunden über ein VPN. Welches Bereitstellungsmodell ist das?",
        options: [
          { id: "A", text: "Hybrid Cloud", rationale: "Richtig. Eine Hybrid Cloud kombiniert eigene Infrastruktur oder Private Cloud mit einer Public Cloud." },
          { id: "B", text: "Community Cloud", rationale: "Eine Community Cloud wird von mehreren Organisationen mit gemeinsamen Anforderungen geteilt." },
          { id: "C", text: "Reine Public Cloud", rationale: "Die Datenbank läuft im eigenen Rechenzentrum, also nicht ausschließlich in der Public Cloud." },
          { id: "D", text: "Reine Private Cloud", rationale: "Der Webshop läuft bei einem öffentlichen Anbieter." },
        ],
        answer: "A",
        explanation:
          "Cloud-Anbindungen erfolgen über VPN oder dedizierte Verbindungen (Direct Connect, ExpressRoute). In der Cloud gibt es virtuelle Netze (VPC), Sicherheitsgruppen und Gateways.",
        reference: EXAM,
      },
      {
        id: "np-d1-nat",
        domain: "d1",
        objective: "Bereich 1.0 Netzwerkkonzepte",
        difficulty: "intermediate",
        question:
          "In einem Büro nutzen 40 Geräte mit privaten IP-Adressen gleichzeitig eine einzige öffentliche IPv4-Adresse für den Internetzugang. Welche Technik ermöglicht das?",
        options: [
          { id: "A", text: "DHCP-Relay", rationale: "Ein DHCP-Relay leitet DHCP-Anfragen über Subnetzgrenzen weiter." },
          { id: "B", text: "Spanning Tree", rationale: "Spanning Tree verhindert Schleifen im Switch-Netz." },
          { id: "C", text: "Port Address Translation (PAT)", rationale: "Richtig. PAT, auch NAT Overload genannt, übersetzt viele private Adressen über unterschiedliche Quellports auf eine öffentliche Adresse." },
          { id: "D", text: "Link Aggregation", rationale: "Link Aggregation bündelt mehrere physische Verbindungen." },
        ],
        answer: "C",
        explanation:
          "Statisches NAT ordnet eine private einer öffentlichen Adresse fest zu, dynamisches NAT nutzt einen Pool, PAT teilt eine Adresse über Ports. Private Bereiche: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",
        reference: EXAM,
      },

      /* ── Bereich 2: Netzwerkimplementierung ────────────────────────────── */
      {
        id: "np-d2-vlan-trunk",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerkimplementierung",
        difficulty: "intermediate",
        question:
          "Zwei Switches sollen über eine einzige Verbindung den Verkehr mehrerer VLANs übertragen. Wie wird der Port zwischen ihnen konfiguriert?",
        options: [
          { id: "A", text: "Als Access-Port im VLAN 1", rationale: "Ein Access-Port gehört nur zu einem VLAN." },
          { id: "B", text: "Als gespiegelter Port (Port Mirroring)", rationale: "Port Mirroring kopiert Verkehr zur Analyse, transportiert aber keine VLANs zwischen Switches." },
          { id: "C", text: "Mit deaktiviertem Spanning Tree", rationale: "Das Abschalten von Spanning Tree hat nichts mit der VLAN-Übertragung zu tun und erhöht das Schleifenrisiko." },
          { id: "D", text: "Als Trunk-Port mit 802.1Q-Tagging", rationale: "Richtig. Ein Trunk überträgt mehrere VLANs; jeder Frame wird mit seiner VLAN-ID markiert." },
        ],
        answer: "D",
        explanation:
          "802.1Q fügt ein Tag mit der VLAN-ID ein. Das native VLAN wird ungetaggt übertragen und muss auf beiden Seiten gleich sein.",
        reference: EXAM,
      },
      {
        id: "np-d2-ospf",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerkimplementierung",
        difficulty: "intermediate",
        question: "Welches dynamische Routingprotokoll ist ein Link-State-Protokoll, das innerhalb eines Unternehmensnetzes eingesetzt wird?",
        options: [
          { id: "A", text: "OSPF", rationale: "Richtig. OSPF ist ein Link-State-Protokoll für das Routing innerhalb eines autonomen Systems." },
          { id: "B", text: "BGP", rationale: "BGP ist ein Path-Vector-Protokoll, vor allem für das Routing zwischen autonomen Systemen im Internet." },
          { id: "C", text: "RIP", rationale: "RIP ist ein Distance-Vector-Protokoll mit Hop-Anzahl als Metrik." },
          { id: "D", text: "ARP", rationale: "ARP ist kein Routingprotokoll; es löst IP- in MAC-Adressen auf." },
        ],
        answer: "A",
        explanation:
          "Interior Gateway Protocols: OSPF (Link-State), EIGRP (Advanced Distance Vector), RIP (Distance Vector). Exterior Gateway Protocol: BGP. Bei gleichen Zielen entscheidet zuerst die administrative Distanz, dann die Metrik.",
        reference: EXAM,
      },
      {
        id: "np-d2-stp",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerkimplementierung",
        difficulty: "intermediate",
        question:
          "Nach dem Hinzufügen eines redundanten Kabels zwischen zwei Switches bricht das Netz durch einen Broadcast-Sturm zusammen. Welche Funktion hätte das verhindert?",
        options: [
          { id: "A", text: "Port Security", rationale: "Port Security begrenzt die erlaubten MAC-Adressen an einem Port, verhindert aber keine Schleifen." },
          { id: "B", text: "Spanning Tree Protocol (STP)", rationale: "Richtig. STP erkennt redundante Pfade und blockiert Ports, damit keine Schleifen entstehen." },
          { id: "C", text: "DHCP Snooping", rationale: "DHCP Snooping schützt vor nicht autorisierten DHCP-Servern." },
          { id: "D", text: "Quality of Service", rationale: "QoS priorisiert Verkehr, verhindert aber keine Schleifen." },
        ],
        answer: "B",
        explanation:
          "STP (802.1D) und Rapid STP (802.1w) wählen eine Root Bridge und blockieren redundante Pfade. Fällt ein aktiver Pfad aus, wird ein blockierter Port aktiviert.",
        reference: EXAM,
      },
      {
        id: "np-d2-wifi-channels",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerkimplementierung",
        difficulty: "intermediate",
        question: "Welche Kanäle im 2,4-GHz-Band werden in einem Netz mit mehreren Accesspoints üblicherweise verwendet, um Überlappungen zu vermeiden?",
        options: [
          { id: "A", text: "1, 2 und 3", rationale: "Benachbarte Kanäle überlappen sich im 2,4-GHz-Band stark." },
          { id: "B", text: "36, 40 und 44", rationale: "Das sind Kanäle im 5-GHz-Band." },
          { id: "C", text: "1, 6 und 11", rationale: "Richtig. Bei 20 MHz Kanalbreite überlappen sich die Kanäle 1, 6 und 11 nicht." },
          { id: "D", text: "Alle Accesspoints auf Kanal 6", rationale: "Gleiche Kanäle auf benachbarten Accesspoints führen zu Gleichkanalstörungen." },
        ],
        answer: "C",
        explanation:
          "Im 5- und 6-GHz-Band stehen deutlich mehr nicht überlappende Kanäle zur Verfügung. Kanalbündelung (40, 80, 160 MHz) erhöht den Durchsatz, verringert aber die Zahl freier Kanäle.",
        reference: EXAM,
      },
      {
        id: "np-d2-fiber",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerkimplementierung",
        difficulty: "foundation",
        question: "Zwei Gebäude auf einem Campus sind 2 Kilometer voneinander entfernt und sollen mit 10 Gbit/s verbunden werden. Welches Medium passt?",
        options: [
          { id: "A", text: "Cat 6 Twisted Pair", rationale: "Kupferkabel sind auf 100 Meter pro Segment begrenzt." },
          { id: "B", text: "Koaxialkabel", rationale: "Koaxialkabel werden für diese Distanz und Geschwindigkeit in Unternehmensnetzen nicht eingesetzt." },
          { id: "C", text: "Bluetooth", rationale: "Bluetooth hat eine Reichweite von wenigen Metern." },
          { id: "D", text: "Singlemode-Glasfaser", rationale: "Richtig. Singlemode-Glasfaser überbrückt viele Kilometer bei hoher Bandbreite." },
        ],
        answer: "D",
        explanation:
          "Multimode-Glasfaser eignet sich für kürzere Strecken innerhalb von Gebäuden, Singlemode für lange Strecken. Transceiver wie SFP+ müssen zur Faserart passen.",
        reference: EXAM,
      },
      {
        id: "np-d2-poe",
        domain: "d2",
        objective: "Bereich 2.0 Netzwerkimplementierung",
        difficulty: "intermediate",
        question:
          "Neue PTZ-Kameras benötigen jeweils etwa 50 Watt über das Netzwerkkabel. Welcher PoE-Standard ist mindestens erforderlich?",
        options: [
          { id: "A", text: "802.3af (PoE)", rationale: "802.3af liefert maximal 15,4 Watt am Switch-Port." },
          { id: "B", text: "802.3at (PoE+)", rationale: "802.3at liefert maximal 30 Watt am Switch-Port." },
          { id: "C", text: "802.3bt (PoE++)", rationale: "Richtig. 802.3bt liefert je nach Typ bis zu 60 oder 90 Watt am Switch-Port." },
          { id: "D", text: "802.11ax", rationale: "802.11ax ist ein WLAN-Standard, kein PoE-Standard." },
        ],
        answer: "C",
        explanation:
          "Bei der Planung muss auch das gesamte PoE-Budget des Switches berücksichtigt werden, nicht nur die Leistung pro Port.",
        reference: EXAM,
      },

      /* ── Bereich 3: Netzwerkbetrieb ────────────────────────────────────── */
      {
        id: "np-d3-snmp",
        domain: "d3",
        objective: "Bereich 3.0 Netzwerkbetrieb",
        difficulty: "intermediate",
        question:
          "Ein Administrator möchte die Auslastung von Switch-Ports zentral überwachen und dabei Authentifizierung und Verschlüsselung nutzen. Welches Protokoll passt?",
        options: [
          { id: "A", text: "SNMPv3", rationale: "Richtig. SNMPv3 ergänzt das Monitoring-Protokoll SNMP um Authentifizierung und Verschlüsselung." },
          { id: "B", text: "SNMPv2c", rationale: "SNMPv2c nutzt Community-Strings im Klartext und bietet keine Verschlüsselung." },
          { id: "C", text: "Telnet", rationale: "Telnet ist ein unverschlüsselter Fernzugriff, kein Monitoring-Protokoll." },
          { id: "D", text: "TFTP", rationale: "TFTP überträgt Dateien ohne Authentifizierung." },
        ],
        answer: "A",
        explanation:
          "SNMP-Begriffe: Manager, Agent, MIB, OID, Get/Set und Traps. Ergänzend werden Syslog für Ereignismeldungen und NetFlow für Verkehrsanalysen eingesetzt.",
        reference: EXAM,
      },
      {
        id: "np-d3-rpo-rto",
        domain: "d3",
        objective: "Bereich 3.0 Netzwerkbetrieb",
        difficulty: "intermediate",
        question:
          "Die Geschäftsleitung legt fest, dass bei einem Ausfall höchstens 15 Minuten an Daten verloren gehen dürfen. Welche Kennzahl beschreibt diese Vorgabe?",
        options: [
          { id: "A", text: "Recovery Time Objective (RTO)", rationale: "Das RTO beschreibt, wie schnell ein System wieder verfügbar sein muss." },
          { id: "B", text: "Recovery Point Objective (RPO)", rationale: "Richtig. Das RPO legt fest, wie viel Datenverlust, gemessen in Zeit, maximal akzeptabel ist." },
          { id: "C", text: "Mean Time Between Failures (MTBF)", rationale: "Die MTBF beschreibt die durchschnittliche Zeit zwischen Ausfällen." },
          { id: "D", text: "Mean Time To Repair (MTTR)", rationale: "Die MTTR beschreibt die durchschnittliche Reparaturdauer." },
        ],
        answer: "B",
        explanation:
          "Ein RPO von 15 Minuten verlangt Sicherungen oder Replikation mindestens in diesem Abstand. Standorte für Notfälle: Hot Site, Warm Site, Cold Site.",
        reference: EXAM,
      },
      {
        id: "np-d3-documentation",
        domain: "d3",
        objective: "Bereich 3.0 Netzwerkbetrieb",
        difficulty: "foundation",
        question: "Welches Dokument zeigt, welche Geräte über welche Schnittstellen und Kabel physisch miteinander verbunden sind?",
        options: [
          { id: "A", text: "Ein logisches Netzwerkdiagramm", rationale: "Ein logisches Diagramm zeigt Subnetze, VLANs und Routing, nicht die physische Verkabelung." },
          { id: "B", text: "Ein Service Level Agreement", rationale: "Ein SLA regelt vereinbarte Leistungen mit einem Anbieter." },
          { id: "C", text: "Ein physisches Netzwerkdiagramm", rationale: "Richtig. Es zeigt Geräte, Ports, Kabel und ihre Lage, etwa im Rack." },
          { id: "D", text: "Eine Richtlinie zur akzeptablen Nutzung", rationale: "Diese Richtlinie regelt das Verhalten der Benutzer." },
        ],
        answer: "C",
        explanation:
          "Weitere Dokumentation: Rack-Diagramme, Kabelpläne, IP-Adressverwaltung (IPAM), Baselines, Bestandslisten und Änderungsprotokolle.",
        reference: EXAM,
      },
      {
        id: "np-d3-fhrp",
        domain: "d3",
        objective: "Bereich 3.0 Netzwerkbetrieb",
        difficulty: "intermediate",
        question:
          "Clients sollen ihr Standard-Gateway auch dann erreichen, wenn einer von zwei Routern ausfällt, ohne dass die Clients umkonfiguriert werden müssen. Was wird eingesetzt?",
        options: [
          { id: "A", text: "Ein First Hop Redundancy Protocol wie VRRP mit einer virtuellen IP-Adresse", rationale: "Richtig. Beide Router teilen sich eine virtuelle Gateway-Adresse; fällt der aktive Router aus, übernimmt der andere." },
          { id: "B", text: "Ein zweiter DHCP-Server ohne Gateway-Angabe", rationale: "Ohne Gateway-Angabe erreichen die Clients keine anderen Netze." },
          { id: "C", text: "Eine kürzere DHCP-Leasezeit", rationale: "Das ändert nichts daran, dass das eingetragene Gateway ausfällt." },
          { id: "D", text: "Port Mirroring am Router", rationale: "Port Mirroring dient der Analyse, nicht der Redundanz." },
        ],
        answer: "A",
        explanation:
          "FHRPs sind VRRP (offener Standard), HSRP und GLBP (Cisco). Sie sind Teil der Hochverfügbarkeit, zusammen mit redundanten Verbindungen, Netzteilen und Clustern.",
        reference: EXAM,
      },
      {
        id: "np-d3-dhcp-scope",
        domain: "d3",
        objective: "Bereich 3.0 Netzwerkbetrieb",
        difficulty: "intermediate",
        question:
          "Ein Netzwerkdrucker soll per DHCP immer dieselbe IP-Adresse erhalten. Was richtet der Administrator auf dem DHCP-Server ein?",
        options: [
          { id: "A", text: "Einen größeren Adressbereich", rationale: "Ein größerer Bereich garantiert nicht, dass der Drucker dieselbe Adresse erhält." },
          { id: "B", text: "Ein DHCP-Relay", rationale: "Ein Relay leitet DHCP-Anfragen über Subnetzgrenzen weiter." },
          { id: "C", text: "Eine kürzere Leasezeit", rationale: "Eine kürzere Leasezeit erhöht eher die Wahrscheinlichkeit wechselnder Adressen." },
          { id: "D", text: "Eine Reservierung anhand der MAC-Adresse des Druckers", rationale: "Richtig. Eine Reservierung weist einem Gerät anhand seiner MAC-Adresse immer dieselbe IP-Adresse zu." },
        ],
        answer: "D",
        explanation:
          "DHCP-Begriffe: Scope, Ausschlüsse, Reservierungen, Leasezeit, Optionen (Gateway, DNS) und Relay (IP Helper). Der Ablauf heißt DORA: Discover, Offer, Request, Acknowledge.",
        reference: EXAM,
      },
      {
        id: "np-d3-dns-record",
        domain: "d3",
        objective: "Bereich 3.0 Netzwerkbetrieb",
        difficulty: "foundation",
        question: "Welcher DNS-Eintrag legt fest, welcher Server E-Mails für eine Domain annimmt?",
        options: [
          { id: "A", text: "AAAA", rationale: "Ein AAAA-Eintrag ordnet einem Namen eine IPv6-Adresse zu." },
          { id: "B", text: "MX", rationale: "Richtig. Der MX-Eintrag (Mail Exchanger) nennt die Mailserver einer Domain." },
          { id: "C", text: "PTR", rationale: "Ein PTR-Eintrag dient der Rückwärtsauflösung von IP-Adresse zu Name." },
          { id: "D", text: "CNAME", rationale: "Ein CNAME ist ein Alias auf einen anderen Namen." },
        ],
        answer: "B",
        explanation:
          "Weitere Einträge: A (IPv4), AAAA (IPv6), CNAME (Alias), PTR (Reverse), TXT (etwa SPF, DKIM, DMARC), NS (Nameserver), SOA (Zoneninformationen), SRV (Dienste).",
        reference: EXAM,
      },

      /* ── Bereich 4: Netzwerksicherheit ─────────────────────────────────── */
      {
        id: "np-d4-arp-spoofing",
        domain: "d4",
        objective: "Bereich 4.0 Netzwerksicherheit",
        difficulty: "intermediate",
        question:
          "Ein Angreifer im lokalen Netz sendet gefälschte ARP-Antworten, damit der Verkehr der Clients über seinen Rechner statt über das Gateway läuft. Welche Funktion auf dem Switch hilft dagegen?",
        options: [
          { id: "A", text: "Dynamic ARP Inspection", rationale: "Richtig. DAI prüft ARP-Pakete gegen vertrauenswürdige Zuordnungen, etwa aus DHCP Snooping, und verwirft gefälschte Antworten." },
          { id: "B", text: "Jumbo Frames", rationale: "Jumbo Frames erhöhen die maximale Frame-Größe und haben keine Schutzwirkung." },
          { id: "C", text: "Link Aggregation", rationale: "Link Aggregation bündelt Verbindungen für mehr Bandbreite." },
          { id: "D", text: "Ein größerer DHCP-Bereich", rationale: "Die Größe des Adressbereichs verhindert kein ARP-Spoofing." },
        ],
        answer: "A",
        explanation:
          "ARP-Spoofing ermöglicht On-Path-Angriffe (Man-in-the-Middle). Schutz bieten DAI, DHCP Snooping, Port Security und Segmentierung.",
        reference: EXAM,
      },
      {
        id: "np-d4-8021x",
        domain: "d4",
        objective: "Bereich 4.0 Netzwerksicherheit",
        difficulty: "intermediate",
        question:
          "Nur authentifizierte Firmengeräte sollen an Netzwerkdosen und im WLAN Zugang erhalten; die Prüfung erfolgt zentral über einen RADIUS-Server. Welcher Standard wird eingesetzt?",
        options: [
          { id: "A", text: "802.3ad", rationale: "802.3ad (LACP) dient der Link Aggregation." },
          { id: "B", text: "802.1Q", rationale: "802.1Q ist der Standard für VLAN-Tagging." },
          { id: "C", text: "802.1X", rationale: "Richtig. 802.1X ist portbasierte Netzwerkzugriffskontrolle mit Supplicant, Authenticator und Authentifizierungsserver." },
          { id: "D", text: "802.11ac", rationale: "802.11ac ist ein WLAN-Standard für Übertragungsgeschwindigkeit." },
        ],
        answer: "C",
        explanation:
          "Im WLAN heißt das WPA2/WPA3-Enterprise. RADIUS und TACACS+ sind AAA-Protokolle; TACACS+ verschlüsselt das gesamte Paket und trennt Authentifizierung, Autorisierung und Accounting.",
        reference: EXAM,
      },
      {
        id: "np-d4-screened-subnet",
        domain: "d4",
        objective: "Bereich 4.0 Netzwerksicherheit",
        difficulty: "foundation",
        question: "Wo wird ein öffentlich erreichbarer Webserver am sinnvollsten platziert?",
        options: [
          { id: "A", text: "Im selben Segment wie die Arbeitsplatzrechner der Buchhaltung", rationale: "Ein kompromittierter Webserver hätte dann direkten Zugang zu sensiblen Systemen." },
          { id: "B", text: "Direkt im Internet ohne Firewall", rationale: "Ohne Firewall ist der Server ungeschützt." },
          { id: "C", text: "Im Managementnetz der Switches", rationale: "Das Managementnetz soll vom öffentlich erreichbaren Verkehr getrennt sein." },
          { id: "D", text: "In einem abgeschirmten Subnetz (Screened Subnet, früher DMZ)", rationale: "Richtig. Das abgeschirmte Subnetz trennt öffentlich erreichbare Dienste vom internen Netz." },
        ],
        answer: "D",
        explanation:
          "Segmentierung begrenzt die Ausbreitung von Angriffen. Weitere Konzepte sind Zero Trust, Defense in Depth, Gastnetze und getrennte Netze für IoT und OT.",
        reference: EXAM,
      },

      {
        id: "np-d4-hardening",
        domain: "d4",
        objective: "Bereich 4.0 Netzwerksicherheit",
        difficulty: "foundation",
        question: "Welche Maßnahme gehört zur grundlegenden Härtung eines neuen Switches vor der Inbetriebnahme?",
        options: [
          { id: "A", text: "Telnet für die Verwaltung aktivieren", rationale: "Telnet überträgt Zugangsdaten im Klartext; für die Verwaltung wird SSH verwendet." },
          { id: "B", text: "Alle ungenutzten Ports aktiv lassen", rationale: "Ungenutzte aktive Ports bieten Angreifern einen einfachen Zugang." },
          { id: "C", text: "Die SNMP-Community „public“ beibehalten", rationale: "Standard-Community-Strings sind allgemein bekannt und unsicher." },
          { id: "D", text: "Standardkennwörter ändern, ungenutzte Ports deaktivieren und die Firmware aktualisieren", rationale: "Richtig. Das sind zentrale Schritte der Gerätehärtung." },
        ],
        answer: "D",
        explanation:
          "Zur Härtung gehören außerdem verschlüsselte Verwaltungsprotokolle (SSH, HTTPS, SNMPv3), ein getrenntes Managementnetz, das Abschalten unnötiger Dienste und Port Security.",
        reference: EXAM,
      },

      /* ── Bereich 5: Fehlerbehebung im Netzwerk ─────────────────────────── */
      {
        id: "np-d5-methodology",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "foundation",
        question:
          "Ein Techniker hat die Lösung für ein Netzwerkproblem umgesetzt. Was ist laut CompTIA-Methodik der nächste Schritt vor der Dokumentation?",
        options: [
          { id: "A", text: "Eine neue Theorie aufstellen", rationale: "Eine neue Theorie ist nur nötig, wenn die bisherige widerlegt wurde." },
          { id: "B", text: "Die volle Systemfunktion prüfen und gegebenenfalls vorbeugende Maßnahmen umsetzen", rationale: "Richtig. Erst wird geprüft, dass alles wieder funktioniert, dann wird dokumentiert." },
          { id: "C", text: "Den Benutzer zu den Symptomen befragen", rationale: "Die Befragung gehört zum ersten Schritt, der Identifikation des Problems." },
          { id: "D", text: "Das Problem eskalieren", rationale: "Eine Eskalation ist bei bestätigter Lösung nicht nötig." },
        ],
        answer: "B",
        explanation:
          "Die Schritte: Problem identifizieren, Theorie aufstellen, Theorie testen, Aktionsplan erstellen, Lösung umsetzen oder eskalieren, Funktion prüfen und vorbeugen, Ergebnisse dokumentieren.",
        reference: EXAM,
      },
      {
        id: "np-d5-duplex",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "intermediate",
        question:
          "Ein Server ist sehr langsam erreichbar. Auf dem Switch-Port steigen die Zähler für Late Collisions und CRC-Fehler; der Port steht fest auf Vollduplex, die Server-Netzwerkkarte auf Halbduplex. Was ist die Ursache?",
        options: [
          { id: "A", text: "Ein Duplex-Mismatch", rationale: "Richtig. Unterschiedliche Duplex-Einstellungen führen zu Kollisionen, Fehlern und schlechter Leistung." },
          { id: "B", text: "Ein falscher DNS-Eintrag", rationale: "Ein DNS-Problem erzeugt keine Kollisionen oder CRC-Fehler auf dem Port." },
          { id: "C", text: "Eine abgelaufene DHCP-Lease", rationale: "Dann hätte der Server eher gar keine Verbindung." },
          { id: "D", text: "Ein fehlender MX-Eintrag", rationale: "MX-Einträge betreffen nur die E-Mail-Zustellung." },
        ],
        answer: "A",
        explanation:
          "Beide Seiten sollten dieselbe Einstellung nutzen, meist automatische Aushandlung. Schnittstellenzähler wie CRC-Fehler, Runts, Giants und Kollisionen helfen bei der Eingrenzung physischer Probleme.",
        reference: EXAM,
      },
      {
        id: "np-d5-traceroute",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "foundation",
        question:
          "Ein Benutzer erreicht einen entfernten Server nicht. Der Techniker möchte sehen, an welchem Router auf dem Weg die Verbindung abbricht. Welcher Befehl ist dafür gedacht?",
        options: [
          { id: "A", text: "nslookup", rationale: "nslookup prüft die DNS-Namensauflösung." },
          { id: "B", text: "arp -a", rationale: "arp -a zeigt die ARP-Tabelle des lokalen Rechners." },
          { id: "C", text: "tracert bzw. traceroute", rationale: "Richtig. traceroute zeigt jeden Hop auf dem Weg zum Ziel und damit, wo Pakete nicht mehr weiterkommen." },
          { id: "D", text: "netstat", rationale: "netstat zeigt aktive Verbindungen und offene Ports auf dem eigenen Rechner." },
        ],
        answer: "C",
        explanation:
          "Weitere Werkzeuge: ping (Erreichbarkeit), pathping und mtr (Pfad mit Verlusten), ipconfig/ip (Konfiguration), dig/nslookup (DNS), tcpdump und Wireshark (Paketanalyse), nmap (Portscans).",
        reference: EXAM,
      },
      {
        id: "np-d5-vlan-mismatch",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "intermediate",
        question:
          "Ein neu angeschlossener PC erhält eine IP-Adresse aus dem Gastnetz statt aus dem Büronetz. Das Kabel ist in Ordnung. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Die Netzwerkkarte ist defekt", rationale: "Eine defekte Karte würde gar keine Adresse erhalten." },
          { id: "B", text: "Der DNS-Server ist überlastet", rationale: "DNS hat keinen Einfluss darauf, aus welchem Netz die IP-Adresse kommt." },
          { id: "C", text: "Die Bildschirmauflösung ist falsch", rationale: "Die Auflösung hat mit der Netzwerkzuordnung nichts zu tun." },
          { id: "D", text: "Der Switch-Port ist dem falschen VLAN zugewiesen", rationale: "Richtig. Der Port gehört zum Gast-VLAN, also antwortet der DHCP-Server dieses Netzes." },
        ],
        answer: "D",
        explanation:
          "Bei Problemen mit der Netzzugehörigkeit prüfst du VLAN-Zuweisung des Ports, Trunk-Konfiguration und erlaubte VLANs auf dem Trunk.",
        reference: EXAM,
      },
      {
        id: "np-d5-wifi-roaming",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "intermediate",
        question:
          "In einem Lagerhaus verlieren Handscanner regelmäßig die WLAN-Verbindung in einem Bereich zwischen zwei Accesspoints. Der WLAN-Analysator zeigt dort ein sehr schwaches Signal von beiden. Was hilft am ehesten?",
        options: [
          { id: "A", text: "Die SSID ändern", rationale: "Der Netzwerkname hat keinen Einfluss auf die Signalstärke." },
          { id: "B", text: "Die Abdeckung verbessern, etwa durch einen zusätzlichen oder besser platzierten Accesspoint", rationale: "Richtig. Ein Funkloch zwischen zwei Accesspoints wird durch bessere Abdeckung geschlossen; eine Funkausleuchtung (Site Survey) hilft bei der Planung." },
          { id: "C", text: "Die Verschlüsselung abschalten", rationale: "Das schwächt die Sicherheit und verbessert das Signal nicht." },
          { id: "D", text: "Die DHCP-Leasezeit verlängern", rationale: "Die Leasezeit hat keinen Einfluss auf die Funkabdeckung." },
        ],
        answer: "B",
        explanation:
          "Typische WLAN-Probleme: zu geringe Signalstärke (RSSI), Interferenzen, Gleichkanalstörungen, falsche Antennenausrichtung und Roaming-Probleme zwischen Accesspoints.",
        reference: EXAM,
      },
      {
        id: "np-d5-wrong-gateway",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "intermediate",
        question:
          "Ein PC mit der Adresse 192.168.10.25/24 erreicht Geräte im eigenen Subnetz, aber keine anderen Netze. Als Standard-Gateway ist 192.168.11.1 eingetragen. Was ist das Problem?",
        options: [
          { id: "A", text: "Die Subnetzmaske ist zu groß", rationale: "Die Maske /24 passt zum lokalen Netz; das Problem liegt beim Gateway." },
          { id: "B", text: "Der DNS-Server ist nicht erreichbar", rationale: "Ohne DNS würden Namen nicht aufgelöst, IP-Adressen anderer Netze wären aber erreichbar, wenn das Gateway stimmt." },
          { id: "C", text: "Das Standard-Gateway liegt nicht im eigenen Subnetz", rationale: "Richtig. 192.168.11.1 gehört nicht zu 192.168.10.0/24; der PC kann das Gateway nicht direkt erreichen." },
          { id: "D", text: "Der PC hat eine APIPA-Adresse", rationale: "192.168.10.25 ist keine APIPA-Adresse; diese liegen im Bereich 169.254.0.0/16." },
        ],
        answer: "C",
        explanation:
          "Das Gateway muss im selben Subnetz liegen wie der Host. Mit ipconfig /all oder ip addr und ip route prüfst du Adresse, Maske und Gateway.",
        reference: EXAM,
      },
      {
        id: "np-d5-dns-fail",
        domain: "d5",
        objective: "Bereich 5.0 Fehlerbehebung im Netzwerk",
        difficulty: "foundation",
        question:
          "Ein Benutzer kann 8.8.8.8 anpingen, aber keine Websites über ihre Namen öffnen. Mit welchem Befehl prüft der Techniker die wahrscheinliche Ursache am direktesten?",
        options: [
          { id: "A", text: "ipconfig /release", rationale: "Das gibt die IP-Adresse frei und unterbricht die Verbindung, prüft aber nicht die Namensauflösung." },
          { id: "B", text: "arp -d", rationale: "Das löscht ARP-Einträge und hat mit der Namensauflösung nichts zu tun." },
          { id: "C", text: "route print", rationale: "Die Routingtabelle ist in Ordnung, da 8.8.8.8 erreichbar ist." },
          { id: "D", text: "nslookup", rationale: "Richtig. Funktioniert die IP-Verbindung, aber nicht der Name, liegt das Problem bei DNS; nslookup prüft die Namensauflösung direkt." },
        ],
        answer: "D",
        explanation:
          "Typische DNS-Ursachen: falscher oder nicht erreichbarer DNS-Server, fehlerhafte Einträge, veralteter Cache (ipconfig /flushdns) oder blockierter Port 53.",
        reference: EXAM,
      },
    ],
  },
};
