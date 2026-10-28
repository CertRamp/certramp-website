import type { DeContent } from "@/config/types";

/**
 * German edition of the CCNA 200-301 guide and free practice questions.
 * Faithful translation of src/content/guides/ccna-200-301.ts and
 * src/content/practice-questions/ccna-200-301.ts. Exam facts match the verified
 * `exam` record in src/config/certifications.ts. Domain names and exam topics stay in
 * Cisco's official English wording (no official German version of the exam exists).
 */
const V2 = {
  label: "Cisco — 200-301 CCNA v2.0 Exam Topics (PDF, Englisch)",
  url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf",
};

export const ccna200301De: DeContent = {
  slug: "ccna-200-301",
  name: "Cisco CCNA 200-301",
  languageNote:
    "Die offizielle CCNA-Prüfung 200-301 gibt es nicht auf Deutsch – Cisco bietet sie nur auf Englisch und Japanisch an; unsere Übungsprüfungen helfen Ihnen, die Inhalte auf Deutsch zu verstehen.",
  facts: [
    { label: "Prüfungsanbieter", value: "Cisco" },
    { label: "Prüfungscode", value: "200-301 CCNA" },
    { label: "Format", value: "Bewertung nach bestanden/nicht bestanden" },
    { label: "Dauer", value: "120 Minuten" },
    { label: "Prüfungssprachen", value: "Englisch, Japanisch" },
    {
      label: "Voraussetzungen",
      value:
        "Keine. Die CCNA-Zertifizierung ist drei Jahre gültig; die Rezertifizierung erfolgt durch das Bestehen qualifizierender Prüfungen oder durch 30 Continuing-Education-Credits.",
    },
    {
      label: "Prüfungsversion",
      value: "v1.1 bis 2. Februar 2027; v2.0 ab 3. Februar 2027 (angezeigte Domänen: Exam Topics v2.0)",
    },
    { label: "Auslaufdatum", value: "2. Februar 2027 (v1.1, letzter Prüfungstag)" },
  ],
  domains: [
    {
      id: "d1",
      name: "Network Infrastructure and Connectivity",
      weight: "25%",
      objectives: [
        "1.1 Diagnose interface and cable (copper and fiber) issues",
        "1.2 Describe the role and function of hypervisors, virtual machines, and containers",
        "1.3 Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private)",
        "1.4 Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64)",
        "1.5 Describe wireless principles",
        "1.6 Troubleshoot wired and wireless client connectivity (…)",
        "1.7 Troubleshoot DHCPv4 client, server, and relay on IOS devices",
      ],
    },
    {
      id: "d2",
      name: "Switching and Network Access",
      weight: "25%",
      objectives: [
        "2.1 Configure network infrastructure connectivity (switch-to-switch and switch-to-router)",
        "2.2 Configure Layer 2 switch port attributes for edge-host connectivity (VLAN, PoE, port channel, and LACP)",
        "2.3 Validate the accuracy of network documentation using CDP and LLDP",
        "2.4 Troubleshoot basic Layer 2/Layer 3 connectivity and device operations using show commands (including show logs), ping, extended ping, trace route, and packet capture output",
        "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+)",
      ],
    },
    {
      id: "d3",
      name: "IP Routing",
      weight: "20%",
      objectives: [
        "3.1 Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route)",
        "3.2 Troubleshoot IPv4 and IPv6 static routing",
        "3.3 Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6",
        "3.4 Interpret the operational status of First Hop Redundancy Protocols (HSRP and VRRP)",
      ],
    },
    {
      id: "d4",
      name: "Network Services and Security",
      weight: "20%",
      objectives: [
        "4.1 Configure network devices with local usernames and as an AAA client (TACACS+ and RADIUS) for management",
        "4.2 Manage device configuration and software files using secure file transfer operations with SFTP/SCP",
        "4.3 Configure NAT/PAT on IOS XE routers",
        "4.4 Diagnose issues with DNS records (A, AAAA, CNAME, MX, NS, and PTR) to support host, web application, and mail server access by name",
        "4.5 Describe IPsec remote access and site-to-site VPNs (protocols and transport modes)",
        "4.6 Configure IPv4 access control lists (standard, extended, numbered, and named ACLs)",
        "4.7 Configure Layer 2 security features",
      ],
    },
    {
      id: "d5",
      name: "AI, and Network Operations and Management",
      weight: "10%",
      objectives: [
        "5.1 Describe the role of agentic AI in network operations",
        "5.2 Select a prompt to send to a generative AI system to support network operations, considering prompt components such as data classification, output format, persona, and instructions",
        "5.3 Describe network management approaches (device-based, cloud-based, controller-based, automation-based, and infrastructure as code)",
        "5.4 Describe the function of SNMP in network operations",
        "5.5 Use configuration management mechanisms such as Ansible to execute commands",
        "5.6 Interpret syslog message content, severity levels, and facilities",
      ],
    },
  ],

  guide: {
    slug: "ccna-200-301",
    summary:
      "CCNA 200-301 (Implementing and Administering Cisco Solutions) ist eine 120-minütige Prüfung, die zeigt, ob Sie ein kleines bis mittelgroßes Netzwerk aufbauen, betreiben und Fehler darin beheben können: Adressierung und Subnetting, Switching, Routing, Netzwerkdienste, Sicherheit und Netzwerkbetrieb. Derzeit sind zwei Versionen relevant: v1.1 kann bis zum 2. Februar 2027 abgelegt werden, und v2.0 – die die Inhalte in fünf Domänen neu gliedert, mit mehr Troubleshooting und KI im Netzwerkbetrieb – startet am 3. Februar 2027.",
    whoFor: [
      "Mitarbeitende aus Netzwerk, Support und Helpdesk, die eine anerkannte erste Cisco-Zertifizierung anstreben",
      "Quereinsteigerinnen, Quereinsteiger und Studierende, die eine Grundlage in Routing, Switching und IP-Adressierung aufbauen",
      "Systemadministratoren und Security-Analysten, die verstehen müssen, wie Unternehmensnetzwerke wirklich funktionieren",
    ],
    sections: [
      {
        id: "versions",
        heading: "v1.1 oder v2.0: Welche Prüfung legen Sie ab?",
        paragraphs: [
          "Der Prüfungscode bleibt 200-301 und die Zertifizierung heißt weiterhin CCNA, aber die Exam Topics ändern sich. Laut Cisco ist der letzte Prüfungstag für 200-301 CCNA v1.1 der 2. Februar 2027, und CCNA v2.0 steht ab dem 3. Februar 2027 zur Prüfung bereit. Ihr Prüfungstermin entscheidet, welche Gliederung Sie lernen: Prüfen Sie am oder vor dem 2. Februar 2027, legen Sie v1.1 ab; prüfen Sie am oder nach dem 3. Februar 2027, legen Sie v2.0 ab.",
          "v1.1 hat sechs Domänen: Network Fundamentals (Netzwerkgrundlagen, 20 %), Network Access (Netzwerkzugang, 20 %), IP Connectivity (IP-Konnektivität, 25 %), IP Services (IP-Dienste, 10 %), Security Fundamentals (Sicherheitsgrundlagen, 15 %) sowie Automation and Programmability (Automatisierung und Programmierbarkeit, 10 %). v2.0 gliedert die Inhalte in fünf Domänen neu: Network Infrastructure and Connectivity (25 %), Switching and Network Access (25 %), IP Routing (20 %), Network Services and Security (20 %) sowie AI, and Network Operations and Management (10 %).",
          "Ein Großteil des Kerns bleibt erhalten: IPv4-Subnetting, IPv6-Adressierung, WLAN-Grundlagen, VLANs und Trunks, EtherChannel mit LACP, Rapid PVST+, statisches Routing, Single-Area-OSPF, NAT, IPv4-ACLs, Layer-2-Sicherheit, SNMP, Syslog und Ansible. Unsere kostenlosen Fragen unten behandeln nur diese gemeinsamen Themen und nennen jeweils die Themennummer aus v2.0 und aus v1.1.",
        ],
      },
      {
        id: "whats-new-v2",
        heading: "Was sich mit v2.0 ändert",
        bullets: [
          "Mehr Troubleshooting. Viele Themen in v2.0 beginnen mit „Troubleshoot“, „Diagnose“ oder „Interpret“ – IPv4- und IPv6-Adressierung, Client-Konnektivität, DHCPv4, statisches Routing, DNS-Einträge und Syslog-Meldungen.",
          "Neue oder erweiterte Themen sind unter anderem OSPFv3 für IPv6, der Betriebsstatus von HSRP und VRRP, DNS-Eintragstypen (A, AAAA, CNAME, MX, NS und PTR), Dateiübertragung mit SFTP/SCP, AAA mit TACACS+ und RADIUS sowie Storm Control und RA Guard als Layer-2-Sicherheitsfunktionen.",
          "KI im Betrieb. Domäne 5.0 behandelt die Rolle agentischer KI und die Auswahl eines Prompts für ein generatives KI-System. Cisco weist außerdem darauf hin, dass manche Fragen verlangen können, die Ausgabe agentischer KI und digitaler Netzwerkassistenten zu bewerten.",
          "Themen, die in der Gliederung von v1.1, aber nicht in der von v2.0 vorkommen, sind unter anderem QoS-Per-Hop-Behavior, NTP, TFTP/FTP, TCP im Vergleich zu UDP, REST-APIs und JSON-codierte Daten. Lernen Sie sie, wenn Sie v1.1 ablegen; wenn Sie v2.0 ablegen, prüfen Sie das PDF zu v2.0, bevor Sie etwas auslassen.",
        ],
      },
      {
        id: "study-plan",
        heading: "Ein Vorbereitungsplan in sechs Schritten",
        steps: [
          {
            title: "Wählen Sie Ihre Version und laden Sie deren Exam Topics herunter",
            body: "Legen Sie sich auf einen Termin vor oder nach dem 3. Februar 2027 fest und laden Sie das passende PDF mit den Exam Topics von Cisco herunter. Markieren Sie jedes Thema als „beherrscht“, „unsicher“ oder „neu“ und verteilen Sie Ihre Zeit entsprechend den Domänengewichten.",
          },
          {
            title: "Machen Sie Subnetting zur Routine",
            body: "Üben Sie IPv4-Subnetting, bis Sie Netzadresse, Broadcast-Adresse und nutzbaren Adressbereich jedes Präfixes in unter einer Minute bestimmen können; nehmen Sie dann IPv6-Präfixe und Modified EUI-64 hinzu. Adressierung taucht in fast jedem Routing-, ACL- und Troubleshooting-Szenario auf.",
          },
          {
            title: "Bauen Sie ein Lab auf",
            body: "Nutzen Sie Cisco Packet Tracer, Cisco Modeling Labs oder echte Geräte, um VLANs, Trunks, EtherChannel, Rapid PVST+, statische Routen, OSPF, NAT und ACLs zu konfigurieren. Bauen Sie dann absichtlich Fehler ein und beheben Sie sie mit show-Befehlen, ping und traceroute.",
          },
          {
            title: "Lernen Sie, Ausgaben zu lesen",
            body: "Gewöhnen Sie sich an show ip route, show interfaces, show spanning-tree, show ip ospf neighbor, show ip nat translations und Syslog-Meldungen. Viele Fragen zeigen Ihnen eine Ausgabe und fragen, was sie bedeutet oder was zu ändern ist.",
          },
          {
            title: "Decken Sie Dienste, Sicherheit und Betrieb ab",
            body: "Arbeiten Sie DHCP, DNS, NAT, ACLs, Port Security, DHCP Snooping, AAA, SNMP und Syslog durch. Für v2.0 kommen die Themen zu KI und Netzwerkmanagement hinzu; für v1.1 QoS, REST-APIs und JSON.",
          },
          {
            title: "Üben Sie unter Zeitdruck",
            body: "Absolvieren Sie zeitlich begrenzte Übungsprüfungen in 120 Minuten und lesen Sie jede Erklärung – auch zu den Fragen, die Sie richtig beantwortet haben. Buchen Sie die Prüfung, sobald Sie regelmäßig mit Abstand bestehen.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Häufige Fehler bei der Vorbereitung",
        bullets: [
          "Die falsche Gliederung lernen. Material für v1.1 ist auch für v2.0 nützlich, deckt aber neue Themen nicht ab – etwa OSPFv3, den Betriebsstatus von HSRP und VRRP (v1.1 beschrieb nur FHRP-Konzepte), DNS-Einträge und agentische KI.",
          "Sich auf einen Subnetzrechner verlassen. In der Prüfung haben Sie keinen, und langsames Rechnen kostet bei jeder Adressierungsfrage Zeit.",
          "Die Liste der erlaubten VLANs auf einem Trunk ersetzen. switchport trunk allowed vlan 30 überschreibt die Liste; switchport trunk allowed vlan add 30 erweitert sie.",
          "Das implizite Deny vergessen. Jede IPv4-ACL endet mit einem unsichtbaren Deny – eine ACL, die nur deny-Anweisungen enthält, blockiert daher den gesamten Datenverkehr.",
          "Administrative Distanz und Metrik verwechseln. Zuerst wählt der Longest Prefix Match die Route aus; die administrative Distanz entscheidet nur zwischen Routen zum selben Präfix aus unterschiedlichen Quellen.",
        ],
      },
    ],
    faq: [
      {
        question: "Sollte ich CCNA v1.1 jetzt ablegen oder auf v2.0 warten?",
        answer:
          "Das hängt von Ihrem Zeitplan ab. v1.1 kann bis zum 2. Februar 2027 abgelegt werden; v2.0 startet am 3. Februar 2027. Wenn Sie bereits gut auf v1.1 vorbereitet sind, vermeiden Sie mit einer Prüfung vor der Umstellung, neue Themen lernen zu müssen. Wenn Sie bei null anfangen und Ihr Prüfungstermin nach Anfang Februar 2027 liegt, lernen Sie die Exam Topics von v2.0. Beide führen zur selben CCNA-Zertifizierung.",
      },
      {
        question: "Wie lange dauert die CCNA-Prüfung und was kostet sie?",
        answer:
          "Die Prüfung dauert 120 Minuten und wird nach bestanden/nicht bestanden bewertet. Ciscos US-Website nennt einen Preis von 300 US-Dollar oder die Bezahlung mit Cisco Learning Credits. Cisco veröffentlicht weder eine feste Anzahl von Fragen noch eine Bestehensgrenze.",
      },
      {
        question: "In welchen Sprachen wird die CCNA-Prüfung angeboten?",
        answer:
          "Laut Cisco wird die Prüfung 200-301 CCNA auf Englisch und Japanisch angeboten. Eine deutsche Version der Prüfung gibt es nicht, auch wenn Sie sich mit deutschsprachigem Material vorbereiten.",
      },
      {
        question: "Gibt es die Prüfung auf Deutsch?",
        answer:
          "Nein. Die CCNA-Prüfung 200-301 wird nur auf Englisch und Japanisch angeboten; Sie legen sie in der Regel auf Englisch ab. Unsere deutschsprachigen Übungsfragen helfen Ihnen, die Inhalte auf Deutsch zu verstehen – Befehle, Ausgaben und Fachbegriffe sollten Sie dennoch auf Englisch beherrschen.",
      },
      {
        question: "Wie lange ist die CCNA gültig und wie rezertifiziere ich mich?",
        answer:
          "Die CCNA-Zertifizierung ist drei Jahre gültig. Sie können sich rezertifizieren, indem Sie vor Ablauf Ihrer Zertifizierung die aktuelle CCNA-Prüfung oder eine qualifizierende Cisco-Prüfung auf höherem Niveau bestehen oder 30 Continuing-Education-Credits (CE) über anerkannte Cisco-Schulungen sammeln.",
      },
      {
        question: "Sind die CertRamp-Fragen echte Prüfungsfragen?",
        answer:
          "Nein. Alle CertRamp-Fragen sind eigene Übungsfragen, geschrieben nach den von Cisco veröffentlichten Exam Topics für 200-301. Sie stammen nicht aus der echten Prüfung.",
      },
    ],
    seo: {
      title: "CCNA 200-301 Prüfungsvorbereitung: v1.1 vs. v2.0 (2027)",
      description:
        "CCNA 200-301 Leitfaden: v1.1 bis 2. Feb. 2027, v2.0 ab 3. Feb. 2027. Domänen und Gewichtung, Änderungen, 120-Minuten-Format und sechsstufiger Lernplan.",
    },
    published: "2026-10-28",
    updated: "2026-10-28",
  },

  questions: {
    slug: "ccna-200-301",
    intro:
      "15 eigene Übungsfragen zu CCNA 200-301, gegliedert nach den fünf Domänen der Exam Topics v2.0 und ungefähr so gewichtet wie diese. Jede Frage behandelt ein Thema, das sowohl in v2.0 als auch in v1.1 vorkommt – die Fragen sind also unabhängig davon nützlich, welche Version Sie ablegen; bei jedem Prüfungsziel stehen beide Themennummern. Zu jeder Frage gibt es die Lösung, eine kurze Erklärung und die Begründung, warum jede andere Option falsch ist.",
    published: "2026-10-28",
    updated: "2026-10-28",
    seo: {
      title: "CCNA 200-301 Übungsfragen mit Lösungen (v1.1 & v2.0)",
      description:
        "15 kostenlose, eigene CCNA-200-301-Übungsfragen zu Subnetting, IPv6, VLANs, STP, OSPF, NAT, ACLs und Layer-2-Sicherheit – passend für v1.1 und v2.0.",
    },
    questions: [
      /* ── Domäne 1: Network Infrastructure and Connectivity ───────────────── */
      {
        id: "ccna-d1-subnet-gateway",
        domain: "d1",
        objective: "1.3 Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private) (v1.1: 1.6)",
        difficulty: "intermediate",
        question:
          "Ein PC ist mit der IP-Adresse 192.168.10.100/27 und dem Standardgateway 192.168.10.94 konfiguriert. Er erreicht andere Hosts in seinem eigenen Subnetz, aber nichts darüber hinaus. Wo liegt das Problem?",
        options: [
          { id: "A", text: "192.168.10.100 ist die Broadcast-Adresse ihres /27-Subnetzes", rationale: "Das /27-Subnetz, in dem .100 liegt, ist 192.168.10.96–127; seine Broadcast-Adresse ist also .127, nicht .100." },
          { id: "B", text: "Eine /27-Maske kann nicht mit einer privaten Adresse aus 192.168.0.0/16 verwendet werden", rationale: "Private Adressbereiche lassen sich mit jeder passenden Präfixlänge unterteilen; /27 ist völlig zulässig." },
          { id: "C", text: "Das Standardgateway liegt in einem anderen Subnetz als der PC", rationale: "Richtig. Bei /27 (Blockgröße 32) gehört .100 zu 192.168.10.96/27 (nutzbar .97–.126), während .94 zu 192.168.10.64/27 gehört. Der PC kann kein Gateway außerhalb seines eigenen Subnetzes erreichen." },
          { id: "D", text: "192.168.10.100 ist die Netzadresse ihres /27-Subnetzes", rationale: "Die Netzadresse dieses Subnetzes ist 192.168.10.96." },
        ],
        answer: "C",
        explanation:
          "Eine /27-Maske (255.255.255.224) ergibt Blöcke von 32 Adressen: .64–.95, .96–.127 und so weiter. Host und Standardgateway müssen im selben Subnetz liegen; hier muss das Gateway eine Adresse von .97 bis .126 haben.",
        reference: V2,
      },
      {
        id: "ccna-d1-ipv6-eui64",
        domain: "d1",
        objective: "1.4 Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64) (v1.1: 1.8, 1.9.d)",
        difficulty: "advanced",
        question:
          "Eine Router-Schnittstelle mit der MAC-Adresse 001A.2B3C.4D5E ist mit ipv6 address 2001:DB8:ACAD:1::/64 eui-64 konfiguriert. Welche IPv6-Adresse erhält die Schnittstelle?",
        options: [
          { id: "A", text: "2001:DB8:ACAD:1:21A:2BFF:FE3C:4D5E", rationale: "Richtig. FFFE wird in der Mitte der MAC-Adresse eingefügt (001A:2BFF:FE3C:4D5E), und das siebte Bit des ersten Bytes wird invertiert, wodurch aus 00 der Wert 02 wird." },
          { id: "B", text: "2001:DB8:ACAD:1:1A:2BFF:FE3C:4D5E", rationale: "FFFE wurde eingefügt, aber das siebte Bit (Universal/Local-Bit) wurde nicht invertiert." },
          { id: "C", text: "2001:DB8:ACAD:1:21A:2BFF:FF3C:4D5E", rationale: "Der eingefügte Wert ist FFFE, nicht FFFF." },
          { id: "D", text: "2001:DB8:ACAD:1::1A:2B3C:4D5E", rationale: "Hier wird die MAC-Adresse einfach angehängt, ohne das Modified-EUI-64-Verfahren anzuwenden." },
        ],
        answer: "A",
        explanation:
          "Modified EUI-64 teilt die 48-Bit-MAC-Adresse in der Mitte, fügt FFFE ein, um auf 64 Bit zu kommen, und invertiert das siebte Bit des ersten Bytes. 00 ist binär 00000000; nach dem Invertieren des siebten Bits ergibt sich 00000010, also 02.",
        reference: V2,
      },
      {
        id: "ccna-d1-wifi-channels",
        domain: "d1",
        objective: "1.5 Describe wireless principles — 1.5.a Band and channel selection (v1.1: 1.11.a)",
        difficulty: "foundation",
        question:
          "Sie installieren drei benachbarte Access Points im 2,4-GHz-Band (20-MHz-Kanäle, nordamerikanischer Kanalsatz) und möchten Gleichkanal- und Nachbarkanalstörungen vermeiden. Welchen Kanalplan sollten Sie verwenden?",
        options: [
          { id: "A", text: "1, 2 und 3", rationale: "Benachbarte 2,4-GHz-Kanäle überlappen stark und würden sich gegenseitig stören." },
          { id: "B", text: "6, 6 und 6", rationale: "Derselbe Kanal auf benachbarten APs verursacht Gleichkanalstörungen." },
          { id: "C", text: "1, 5 und 9", rationale: "Kanäle im Abstand von vier überlappen im 2,4-GHz-Band immer noch teilweise." },
          { id: "D", text: "1, 6 und 11", rationale: "Richtig. Die Kanäle 1, 6 und 11 sind die drei nicht überlappenden Kanäle im 2,4-GHz-Band." },
        ],
        answer: "D",
        explanation:
          "2,4-GHz-Kanäle liegen 5 MHz auseinander, sind aber etwa 20–22 MHz breit, sodass nur die Kanäle 1, 6 und 11 nicht überlappen. Das 5-GHz-Band bietet deutlich mehr nicht überlappende Kanäle – ein Grund, warum es in dichten Umgebungen bevorzugt wird.",
        reference: V2,
      },
      {
        id: "ccna-d1-duplex",
        domain: "d1",
        objective: "1.1 Diagnose interface and cable (copper and fiber) issues (v1.1: 1.4)",
        difficulty: "intermediate",
        question:
          "Benutzer an einem Switch-Port klagen über langsame Übertragungen. show interfaces zeigt für diesen Port Halbduplex und einen stetig steigenden Zähler für Late Collisions. Das angeschlossene Gerät ist auf Vollduplex eingestellt. Was ist die wahrscheinlichste Ursache?",
        options: [
          { id: "A", text: "Eine Spanning-Tree-Schleife", rationale: "Eine Schleife verursacht Broadcast-Stürme und eine instabile MAC-Adresstabelle, aber keine Late Collisions an einem einzelnen Port." },
          { id: "B", text: "Ein Duplex-Mismatch zwischen den beiden Enden der Verbindung", rationale: "Richtig. Die Halbduplex-Seite erkennt Kollisionen nach den ersten 64 Byte, weil die Vollduplex-Seite sendet, wann immer sie will. Late Collisions auf der Halbduplex-Seite sind ein klassisches Zeichen für einen Duplex-Mismatch." },
          { id: "C", text: "Der Port ist dem falschen VLAN zugewiesen", rationale: "Ein falsches VLAN unterbricht die Verbindung zum erwarteten Subnetz, erzeugt aber keine Kollisionen." },
          { id: "D", text: "Das Kabel ist zu kurz", rationale: "Kurze Kabel verursachen keine Late Collisions; zu lange Kabel und Duplex-Mismatches schon." },
        ],
        answer: "B",
        explanation:
          "Bei einem Duplex-Mismatch protokolliert die Halbduplex-Seite typischerweise Late Collisions, während die Vollduplex-Seite FCS/CRC-Fehler und Runts sieht. Beheben Sie das, indem Sie beide Enden gleich einstellen, idealerweise beide auf Autonegotiation.",
        reference: V2,
      },

      /* ── Domäne 2: Switching and Network Access ──────────────────────────── */
      {
        id: "ccna-d2-trunk-allowed",
        domain: "d2",
        objective: "2.1 Configure network infrastructure connectivity (switch-to-switch and switch-to-router) — 2.1.b Layer 2 802.1Q trunk interfaces (v1.1: 2.2.a)",
        difficulty: "intermediate",
        question:
          "Ein 802.1Q-Trunk zwischen zwei Switches erlaubt derzeit die VLANs 10 und 20. Sie müssen zusätzlich das neue VLAN 30 übertragen, ohne VLAN 10 und 20 zu unterbrechen. Welchen Schnittstellenbefehl geben Sie auf beiden Switches ein?",
        options: [
          { id: "A", text: "switchport trunk allowed vlan 30", rationale: "Damit wird die Liste der erlaubten VLANs durch VLAN 30 allein ersetzt, sodass VLAN 10 und 20 den Trunk nicht mehr passieren würden." },
          { id: "B", text: "switchport trunk native vlan 30", rationale: "Damit wird das native (ungetaggte) VLAN geändert; VLAN 30 wird dadurch nicht in die Liste der erlaubten VLANs aufgenommen." },
          { id: "C", text: "switchport trunk allowed vlan add 30", rationale: "Richtig. Das Schlüsselwort add hängt VLAN 30 an die bestehende Liste der erlaubten VLANs an und lässt VLAN 10 und 20 bestehen." },
          { id: "D", text: "switchport access vlan 30", rationale: "Damit wird das VLAN für einen Access-Port festgelegt; auf einen Port im Trunk-Modus hat der Befehl keine Wirkung." },
        ],
        answer: "C",
        explanation:
          "Das vergessene Schlüsselwort add ist eine häufige Ursache für Ausfälle: Ohne add wird die Liste der erlaubten VLANs überschrieben. Prüfen Sie das Ergebnis mit show interfaces trunk.",
        reference: V2,
      },
      {
        id: "ccna-d2-root-bridge",
        domain: "d2",
        objective: "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+) — 2.5.a Root port, root bridge (primary/secondary), and other port names (v1.1: 2.5.a)",
        difficulty: "intermediate",
        question:
          "Für VLAN 10 kündigen drei Switches diese Bridge-IDs an: SW1 Priorität 32778, MAC 0011.2233.4401; SW2 Priorität 24586, MAC 0011.2233.4499; SW3 Priorität 24586, MAC 0011.2233.4410. Welcher Switch wird Root Bridge für VLAN 10?",
        options: [
          { id: "A", text: "SW3", rationale: "Richtig. SW2 und SW3 teilen sich die niedrigste Priorität (24576 + VLAN 10). Der Gleichstand wird durch die niedrigste MAC-Adresse aufgelöst, und die MAC-Adresse von SW3 (…4410) ist niedriger als die von SW2 (…4499)." },
          { id: "B", text: "SW1", rationale: "SW1 hat die niedrigste MAC-Adresse, aber MAC-Adressen zählen nur bei gleicher Priorität. Seine Priorität von 32778 ist höher als 24586." },
          { id: "C", text: "SW2", rationale: "SW2 hat dieselbe Priorität wie SW3, aber die höhere MAC-Adresse und unterliegt daher beim Tie-Break." },
          { id: "D", text: "Es wird keine Root Bridge gewählt, weil zwei Switches dieselbe Priorität haben", rationale: "Gleiche Prioritäten sind normal; die MAC-Adresse entscheidet bei Gleichstand immer." },
        ],
        answer: "A",
        explanation:
          "Root Bridge wird der Switch mit der niedrigsten Bridge-ID: zuerst die Priorität (einschließlich der Extended System ID, also der VLAN-Nummer), dann die MAC-Adresse. Um die Root Bridge gezielt festzulegen, verwenden Sie spanning-tree vlan 10 root primary oder setzen eine niedrigere Priorität.",
        reference: V2,
      },
      {
        id: "ccna-d2-bpdu-guard",
        domain: "d2",
        objective: "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+) — 2.5.d Root guard, loop guard, and BPDU guard (v1.1: 2.5.d)",
        difficulty: "foundation",
        question:
          "Ein Access-Port ist mit spanning-tree portfast und spanning-tree bpduguard enable konfiguriert. Ein Benutzer schließt an diesen Port einen kleinen Switch an, der beginnt, BPDUs zu senden. Was passiert mit dem Access-Port?",
        options: [
          { id: "A", text: "Er wird zum Root-Port", rationale: "BPDU Guard lässt den Port nicht an der Topologie teilnehmen; er schaltet den Port ab." },
          { id: "B", text: "Er leitet weiter Datenverkehr weiter, ignoriert aber die BPDUs", rationale: "Das Ignorieren von BPDUs entspricht eher dem Verhalten von BPDU Filter, nicht von BPDU Guard." },
          { id: "C", text: "Er wechselt in den Zustand Blocking, bis keine BPDUs mehr eintreffen, und erholt sich dann automatisch", rationale: "Das beschreibt Root Guard, der den Port in den Zustand root-inconsistent versetzt und ihn wiederherstellt, sobald keine überlegenen BPDUs mehr eintreffen." },
          { id: "D", text: "Er wird in den Zustand err-disabled versetzt", rationale: "Richtig. Empfängt ein Port mit aktiviertem BPDU Guard eine BPDU, setzt der Switch ihn auf err-disabled. Er bleibt deaktiviert, bis ein Administrator ihn wieder aktiviert oder errdisable recovery konfiguriert ist." },
        ],
        answer: "D",
        explanation:
          "PortFast versetzt Edge-Ports sofort in den Zustand Forwarding, ohne auf die STP-Konvergenz zu warten; BPDU Guard schützt sie, indem der Port beim Eintreffen einer BPDU auf err-disabled gesetzt wird. Zusammen sind sie die Standardkonfiguration für Ports zu Endgeräten.",
        reference: V2,
      },

      /* ── Domäne 3: IP Routing ─────────────────────────────────────────────── */
      {
        id: "ccna-d3-longest-match",
        domain: "d3",
        objective: "3.1 Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route) (v1.1: 3.1, 3.2.a)",
        difficulty: "intermediate",
        question:
          "Ein Router hat diese Routen: S 10.1.0.0/16 [1/0] via 192.0.2.1; O 10.1.1.0/24 [110/20] via 192.0.2.5; O 10.0.0.0/8 [110/30] via 192.0.2.9; S* 0.0.0.0/0 [1/0] via 192.0.2.13. Wohin leitet er ein Paket an 10.1.1.50 weiter?",
        options: [
          { id: "A", text: "An 192.0.2.1, weil die statische Route die niedrigste administrative Distanz hat", rationale: "Die administrative Distanz vergleicht nur Routen zum selben Präfix. 10.1.0.0/16 und 10.1.1.0/24 sind unterschiedliche Präfixe." },
          { id: "B", text: "An 192.0.2.5, weil 10.1.1.0/24 das längste passende Präfix ist", rationale: "Richtig. Die ersten drei Routen passen alle, aber /24 ist am spezifischsten und gewinnt deshalb unabhängig von der administrativen Distanz." },
          { id: "C", text: "An 192.0.2.9, weil OSPF die Summary-Route bevorzugt", rationale: "10.0.0.0/8 passt zwar, ist aber die am wenigsten spezifische der passenden Routen." },
          { id: "D", text: "An 192.0.2.13, weil die Default-Route für unbekannte Hosts bevorzugt wird", rationale: "Die Default-Route wird nur verwendet, wenn keine spezifischere Route passt." },
        ],
        answer: "B",
        explanation:
          "Ein Router wählt zuerst die Route mit dem längsten passenden Präfix (Longest Prefix Match). Administrative Distanz und Metrik spielen nur eine Rolle, wenn der Router mehrere Kandidaten für genau dasselbe Präfix mit derselben Länge hat.",
        reference: V2,
      },
      {
        id: "ccna-d3-floating-static",
        domain: "d3",
        objective: "3.2 Troubleshoot IPv4 and IPv6 static routing — 3.2.d Floating static (v1.1: 3.3.d)",
        difficulty: "advanced",
        question:
          "Ein Router lernt seine Default-Route über OSPF. Sie möchten eine Backup-Default-Route über 198.51.100.1, die nur verwendet wird, wenn die OSPF-Default-Route wegfällt. Mit welchem Befehl erreichen Sie das?",
        options: [
          { id: "A", text: "ip route 0.0.0.0 0.0.0.0 198.51.100.1", rationale: "Ohne Angabe einer Distanz hat die statische Route die administrative Distanz 1 und würde die OSPF-Route sofort ersetzen." },
          { id: "B", text: "ip route 0.0.0.0 0.0.0.0 198.51.100.1 100", rationale: "100 ist niedriger als die 110 von OSPF, daher würde die statische Route weiterhin der OSPF-Route vorgezogen." },
          { id: "C", text: "ip route 0.0.0.0 0.0.0.0 198.51.100.1 120", rationale: "Richtig. Eine administrative Distanz von 120 ist höher als die 110 von OSPF, daher bleibt die statische Route aus der Routing-Tabelle heraus, bis die OSPF-Default-Route verloren geht." },
          { id: "D", text: "ip route 0.0.0.0 255.255.255.255 198.51.100.1 120", rationale: "Eine Maske von 255.255.255.255 mit dem Netz 0.0.0.0 ist eine Host-Route zu 0.0.0.0, keine Default-Route." },
        ],
        answer: "C",
        explanation:
          "Eine Floating Static Route ist eine statische Route mit einer höheren administrativen Distanz als die primäre Route. Sie „schwebt“ über der primären Route und wird erst installiert, wenn die primäre Route zurückgezogen wird.",
        reference: V2,
      },
      {
        id: "ccna-d3-ospf-dr",
        domain: "d3",
        objective: "3.3 Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6 — 3.3.c Broadcast (DR/BDR selection) (v1.1: 3.4.c)",
        difficulty: "advanced",
        question:
          "Vier Router in einem Ethernet-Segment starten OSPF gleichzeitig. R1: Priorität 1, Router-ID 10.0.0.1. R2: Priorität 0, Router-ID 10.0.0.9. R3: Priorität 1, Router-ID 10.0.0.5. R4: Priorität 1, Router-ID 10.0.0.3. Welche Router werden DR und BDR?",
        options: [
          { id: "A", text: "DR: R3, BDR: R4", rationale: "Richtig. R2 hat Priorität 0 und kann nie DR oder BDR werden. Die übrigen haben alle Priorität 1, daher gewinnt die höchste Router-ID: R3 (10.0.0.5) wird DR und R4 (10.0.0.3) wird BDR." },
          { id: "B", text: "DR: R2, BDR: R3", rationale: "R2 hat die höchste Router-ID, ist aber wegen Priorität 0 für DR und BDR nicht wählbar." },
          { id: "C", text: "DR: R1, BDR: R4", rationale: "Die niedrigste Router-ID gewinnt nicht; OSPF bevorzugt die höchste Priorität und dann die höchste Router-ID." },
          { id: "D", text: "DR: R4, BDR: R3", rationale: "R3 hat von beiden die höhere Router-ID und wird daher DR, nicht BDR." },
        ],
        answer: "A",
        explanation:
          "Bei der DR/BDR-Wahl zählt zuerst die höchste Schnittstellenpriorität und bei Gleichstand die höchste Router-ID; Priorität 0 schließt einen Router aus. Die Wahl ist nicht präemptiv: Ein besserer Router, der später hinzukommt, übernimmt nicht die Rolle eines bestehenden DR.",
        reference: V2,
      },

      /* ── Domäne 4: Network Services and Security ──────────────────────────── */
      {
        id: "ccna-d4-static-nat",
        domain: "d4",
        objective: "4.3 Configure NAT/PAT on IOS XE routers (v1.1: 4.1)",
        difficulty: "foundation",
        question:
          "Ein interner Webserver unter 192.168.1.10 muss aus dem Internet immer als 203.0.113.10 erreichbar sein. Die inneren und äußeren Schnittstellen sind bereits mit ip nat inside und ip nat outside gekennzeichnet. Welcher Befehl vervollständigt die Konfiguration?",
        options: [
          { id: "A", text: "ip nat inside source static 203.0.113.10 192.168.1.10", rationale: "Die Reihenfolge ist vertauscht: Zuerst kommt die Inside-Local-Adresse, dann die Inside-Global-Adresse." },
          { id: "B", text: "ip nat inside source static 192.168.1.10 203.0.113.10", rationale: "Richtig. Damit wird eine dauerhafte 1:1-Zuordnung von der Inside-Local-Adresse 192.168.1.10 zur Inside-Global-Adresse 203.0.113.10 angelegt." },
          { id: "C", text: "ip nat outside source static 192.168.1.10 203.0.113.10", rationale: "Outside-Source-NAT übersetzt die Adressen externer Hosts, nicht die eines internen Servers." },
          { id: "D", text: "ip nat inside source list 1 interface GigabitEthernet0/1 overload", rationale: "Das ist PAT für ausgehenden Datenverkehr. Es legt keine feste Zuordnung an, über die Hosts im Internet den Server erreichen könnten." },
        ],
        answer: "B",
        explanation:
          "Statisches NAT ist die richtige Wahl, wenn externe Hosts Verbindungen zu einem internen Host aufbauen müssen. Die Syntax lautet ip nat inside source static <inside local> <inside global>; prüfen Sie die Zuordnung mit show ip nat translations.",
        reference: V2,
      },
      {
        id: "ccna-d4-extended-acl",
        domain: "d4",
        objective: "4.6 Configure IPv4 access control lists (standard, extended, numbered, and named ACLs) (v1.1: 5.6)",
        difficulty: "intermediate",
        question:
          "Hosts in 10.1.20.0/24 dürfen den HTTPS-Dienst auf dem Server 10.1.50.10 nicht erreichen. Jeder andere Datenverkehr muss erlaubt sein. Welche erweiterte ACL erfüllt die Anforderung?",
        options: [
          { id: "A", text: "access-list 110 deny tcp 10.1.20.0 0.0.0.255 host 10.1.50.10 eq 443", rationale: "Ohne permit-Anweisung blockiert das implizite Deny am Ende der ACL auch jeden anderen Datenverkehr." },
          { id: "B", text: "access-list 110 deny tcp 10.1.20.0 255.255.255.0 host 10.1.50.10 eq 443, gefolgt von access-list 110 permit ip any any", rationale: "ACLs verwenden Wildcard-Masken. 255.255.255.0 als Wildcard trifft die falschen Adressen; die richtige Wildcard für ein /24 ist 0.0.0.255." },
          { id: "C", text: "access-list 10 deny 10.1.20.0 0.0.0.255, gefolgt von access-list 10 permit any", rationale: "Eine Standard-ACL filtert nur nach der Quelladresse. Sie würde den gesamten Datenverkehr aus dem Subnetz blockieren, nicht nur HTTPS zu einem Server." },
          { id: "D", text: "access-list 110 deny tcp 10.1.20.0 0.0.0.255 host 10.1.50.10 eq 443, gefolgt von access-list 110 permit ip any any", rationale: "Richtig. Die erste Zeile trifft TCP-Datenverkehr aus dem Subnetz zu Port 443 auf dem Server; die permit-Anweisung erlaubt alles andere, statt es im impliziten Deny enden zu lassen." },
        ],
        answer: "D",
        explanation:
          "Erweiterte ACLs können Protokoll, Quelle, Ziel und Port abgleichen und werden in der Regel nahe der Quelle platziert. Denken Sie an die Wildcard-Maske und an das implizite deny any am Ende jeder ACL.",
        reference: V2,
      },
      {
        id: "ccna-d4-dhcp-snooping",
        domain: "d4",
        objective: "4.7 Configure Layer 2 security features — 4.7.a DHCP snooping (v1.1: 5.7)",
        difficulty: "intermediate",
        question:
          "Clients in VLAN 20 erhalten IP-Adressen von einem nicht autorisierten DHCP-Server (Rogue DHCP Server), den jemand an einen Access-Port angeschlossen hat. Der legitime DHCP-Server ist über den Uplink des Switches erreichbar. Wie unterbinden Sie das?",
        options: [
          { id: "A", text: "Port Security mit maximal einer MAC-Adresse auf jedem Port aktivieren", rationale: "Port Security begrenzt die Zahl der MAC-Adressen pro Port, aber ein Rogue-Server mit einer einzigen MAC-Adresse könnte weiterhin Leases vergeben." },
          { id: "B", text: "PortFast auf allen Access-Ports aktivieren", rationale: "PortFast beschleunigt die STP-Konvergenz an Edge-Ports; gegen DHCP-Nachrichten bewirkt es nichts." },
          { id: "C", text: "DHCP Snooping für VLAN 20 aktivieren und den Uplink als vertrauenswürdigen (trusted) Port konfigurieren", rationale: "Richtig. Mit DHCP Snooping werden Servernachrichten wie DHCPOFFER an nicht vertrauenswürdigen Ports verworfen. Nur der vertrauenswürdige Uplink kann sie zustellen." },
          { id: "D", text: "Den Uplink als Access-Port in VLAN 20 konfigurieren", rationale: "Eine Änderung des Uplink-Modus verhindert keine DHCP-Angebote vom Port des Rogue-Servers." },
        ],
        answer: "C",
        explanation:
          "Auf Cisco-Switches sind nach dem Aktivieren von DHCP Snooping alle Ports nicht vertrauenswürdig; Sie müssen also die Ports als trusted festlegen, die zu legitimen DHCP-Servern führen. Die dabei aufgebaute Binding-Tabelle wird auch von Dynamic ARP Inspection genutzt.",
        reference: V2,
      },

      /* ── Domäne 5: AI, and Network Operations and Management ─────────────── */
      {
        id: "ccna-d5-syslog-severity",
        domain: "d5",
        objective: "5.6 Interpret syslog message content, severity levels, and facilities (v1.1: 4.5)",
        difficulty: "intermediate",
        question:
          "Ein Router ist mit logging host 10.0.0.50 und logging trap warnings konfiguriert. Eine Schnittstelle fällt aus, und der Router erzeugt %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to down. Wird diese Meldung an den Syslog-Server gesendet?",
        options: [
          { id: "A", text: "Nein, weil Schweregrad 5 (notifications) weniger schwerwiegend ist als die konfigurierte Stufe 4 (warnings)", rationale: "Richtig. logging trap warnings sendet die Stufen 0 bis 4. Die 5 in der Meldung ist ihr Schweregrad, notifications, und liegt außerhalb dieses Bereichs." },
          { id: "B", text: "Ja, weil alle Statusänderungen von Schnittstellen immer an den Syslog-Server gesendet werden", rationale: "Jede Meldung wird nach ihrem Schweregrad gefiltert; Schnittstellenmeldungen werden nicht gesondert behandelt." },
          { id: "C", text: "Ja, weil 5 eine höhere Zahl als 4 und damit schwerwiegender ist", rationale: "Bei Syslog sind niedrigere Zahlen schwerwiegender: 0 steht für emergencies und 7 für debugging." },
          { id: "D", text: "Nein, weil LINEPROTO-Meldungen nur auf der Konsole angezeigt werden", rationale: "LINEPROTO ist die Facility. Ob eine Meldung an einen Server gesendet wird, hängt von ihrem Schweregrad ab, nicht von der Facility." },
        ],
        answer: "A",
        explanation:
          "Cisco-Syslog-Meldungen folgen dem Format %FACILITY-SEVERITY-MNEMONIC. Wird eine Stufe konfiguriert, werden diese Stufe und alle schwerwiegenderen (niedrigere Zahlen) gesendet: 0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging.",
        reference: V2,
      },
      {
        id: "ccna-d5-ansible",
        domain: "d5",
        objective: "5.5 Use configuration management mechanisms such as Ansible to execute commands (v1.1: 6.6)",
        difficulty: "foundation",
        question:
          "Ihr Team möchte mit Ansible dieselbe Konfigurationsänderung auf 200 Cisco-IOS-XE-Switches ausrollen. Welche Aussage über Ansible ist richtig?",
        options: [
          { id: "A", text: "Auf jedem Switch muss ein Ansible-Agent installiert werden, bevor er verwaltet werden kann", rationale: "Ansible ist agentenlos; auf den verwalteten Netzwerkgeräten muss nichts installiert werden." },
          { id: "B", text: "Ansible ist agentenlos, verbindet sich mit Netzwerkgeräten in der Regel über SSH und beschreibt Aufgaben in YAML-Playbooks", rationale: "Richtig. Ein Control Node führt in YAML geschriebene Playbooks aus und verbindet sich über SSH (oder APIs) mit den Geräten, ohne dass dort ein Agent dauerhaft läuft." },
          { id: "C", text: "Ansible-Playbooks werden in JSON geschrieben und müssen vor der Ausführung kompiliert werden", rationale: "Playbooks sind YAML-Dateien und werden nicht kompiliert." },
          { id: "D", text: "Ansible funktioniert nur mit controllerbasierten Netzwerken und kann keine einzelnen Geräte verwalten", rationale: "Ansible verwaltet häufig einzelne Geräte direkt, mit oder ohne Controller." },
        ],
        answer: "B",
        explanation:
          "Durch das Push-Modell und das agentenlose Design ist der Einstieg in Ansible einfach: Ein Inventar der Geräte, ein Playbook mit Aufgaben und SSH-Zugriff genügen, um dieselbe Änderung konsistent auf vielen Switches auszuführen.",
        reference: V2,
      },
    ],
  },
};
