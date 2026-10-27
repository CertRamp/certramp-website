import type { ExamGuide } from "@/config/types";

/**
 * CCNA 200-301 exam guide. Exam facts come from the verified `exam` record in
 * src/config/certifications.ts. This file holds CertRamp's preparation advice.
 */
export const ccna200301Guide: ExamGuide = {
  slug: "ccna-200-301",
  summary:
    "CCNA 200-301 (Implementing and Administering Cisco Solutions) is a 120-minute exam that tests whether you can build, run and troubleshoot a small to medium network: addressing and subnetting, switching, routing, network services, security and network operations. Two versions matter right now: v1.1 can be taken until 2 February 2027, and v2.0, with five new topic areas and a stronger focus on troubleshooting and AI in operations, goes live on 3 February 2027.",
  whoFor: [
    "Network, support and helpdesk staff who want a recognised first Cisco certification",
    "Career changers and students building a foundation in routing, switching and IP addressing",
    "System administrators and security analysts who need to understand how enterprise networks really work",
  ],
  sections: [
    {
      id: "versions",
      heading: "v1.1 or v2.0: which exam will you take?",
      paragraphs: [
        "The exam code stays 200-301 and the certification is still CCNA, but the exam topics change. Cisco states that the last day of testing for 200-301 CCNA v1.1 is 2 February 2027 and that CCNA v2.0 goes live for testing on 3 February 2027. Your exam date decides which outline you study: book before 3 February 2027 and you sit v1.1; book on or after it and you sit v2.0.",
        "v1.1 has six domains: Network Fundamentals (20%), Network Access (20%), IP Connectivity (25%), IP Services (10%), Security Fundamentals (15%) and Automation and Programmability (10%). v2.0 regroups the content into five: Network Infrastructure and Connectivity (25%), Switching and Network Access (25%), IP Routing (20%), Network Services and Security (20%) and AI, and Network Operations and Management (10%).",
        "Much of the core carries over: IPv4 subnetting, IPv6 addressing, wireless principles, VLANs and trunks, EtherChannel with LACP, Rapid PVST+, static routing, single-area OSPF, NAT, IPv4 ACLs, Layer 2 security, SNMP, syslog and Ansible. Our free questions below cover only these shared topics and show both the v2.0 and the v1.1 topic number.",
      ],
    },
    {
      id: "whats-new-v2",
      heading: "What changes in v2.0",
      bullets: [
        "More troubleshooting. Many v2.0 topics start with \"Troubleshoot\", \"Diagnose\" or \"Interpret\" — IPv4 and IPv6 addressing, client connectivity, DHCPv4, static routing, DNS records and syslog messages.",
        "New or expanded topics include OSPFv3 for IPv6, the operational status of HSRP and VRRP, DNS record types (A, AAAA, CNAME, MX, NS and PTR), SFTP/SCP file transfer, AAA with TACACS+ and RADIUS, and storm control and RA guard as Layer 2 security features.",
        "AI in operations. Domain 5.0 covers the role of agentic AI and choosing a prompt for a generative AI system. Cisco also notes that some questions may ask you to evaluate output from agentic AI and digital network assistants.",
        "Topics that appear in the v1.1 outline but not in the v2.0 outline include QoS per-hop behaviour, NTP, TFTP/FTP, TCP versus UDP, REST APIs and JSON-encoded data. Learn them if you sit v1.1; check the v2.0 PDF before skipping anything if you sit v2.0.",
      ],
    },
    {
      id: "study-plan",
      heading: "A six-step preparation plan",
      steps: [
        {
          title: "Pick your version and download its exam topics",
          body: "Decide on a date before or after 3 February 2027 and download the matching exam topics PDF from Cisco. Mark every topic as known, unsure or new, and spend time in line with the domain weights.",
        },
        {
          title: "Make subnetting automatic",
          body: "Practise IPv4 subnetting until you can find the network, broadcast and usable range of any prefix in under a minute, then add IPv6 prefixes and modified EUI-64. Addressing appears in almost every routing, ACL and troubleshooting scenario.",
        },
        {
          title: "Build a lab",
          body: "Use Cisco Packet Tracer, Cisco Modeling Labs or real equipment to configure VLANs, trunks, EtherChannel, Rapid PVST+, static routes, OSPF, NAT and ACLs. Then break things on purpose and fix them with show commands, ping and traceroute.",
        },
        {
          title: "Learn to read output",
          body: "Get used to show ip route, show interfaces, show spanning-tree, show ip ospf neighbor, show ip nat translations and syslog messages. Many questions give you output and ask what it means or what to change.",
        },
        {
          title: "Cover services, security and operations",
          body: "Work through DHCP, DNS, NAT, ACLs, port security, DHCP snooping, AAA, SNMP and syslog. For v2.0, add the AI and network management topics; for v1.1, add QoS, REST APIs and JSON.",
        },
        {
          title: "Practise under time pressure",
          body: "Take timed practice exams in 120 minutes and read every explanation, including for the questions you answered correctly. Book the exam once you pass consistently with a margin.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common preparation mistakes",
      bullets: [
        "Studying the wrong outline. Material written for v1.1 is still useful for v2.0, but it misses new topics such as OSPFv3, HSRP/VRRP status, DNS records and agentic AI.",
        "Relying on a subnetting calculator. You will not have one in the exam, and slow arithmetic costs time on every addressing question.",
        "Replacing the allowed VLAN list on a trunk. switchport trunk allowed vlan 30 overwrites the list; switchport trunk allowed vlan add 30 extends it.",
        "Forgetting the implicit deny. Every IPv4 ACL ends with an invisible deny, so an ACL with only deny statements blocks all traffic.",
        "Confusing administrative distance with metric. Longest prefix match picks the route first; administrative distance only decides between routes to the same prefix from different sources.",
      ],
    },
  ],
  faq: [
    {
      question: "Should I take CCNA v1.1 now or wait for v2.0?",
      answer:
        "That depends on your timeline. v1.1 can be taken until 2 February 2027; v2.0 goes live on 3 February 2027. If you are already well prepared for v1.1, sitting it before the cut-over avoids learning new topics. If you are starting from scratch with an exam date after early February 2027, study the v2.0 exam topics. Both lead to the same CCNA certification.",
    },
    {
      question: "How long is the CCNA exam and how much does it cost?",
      answer:
        "The exam is 120 minutes long and graded pass/fail. Cisco's US site lists the price as US$300, or payment with Cisco Learning Credits. Cisco does not publish a fixed number of questions or a passing score.",
    },
    {
      question: "In which languages is the CCNA exam offered?",
      answer:
        "Cisco states that the 200-301 CCNA exam is offered in English and Japanese. There is no German version of the exam, even if you prepare with German-language material.",
    },
    {
      question: "How long is the CCNA valid and how do I recertify?",
      answer:
        "The CCNA is valid for three years. You can recertify by passing the current CCNA exam or a qualifying higher-level Cisco exam, or by earning 30 Continuing Education (CE) credits through approved Cisco training, before your certification expires.",
    },
    {
      question: "Are CertRamp's CCNA questions real exam questions?",
      answer:
        "No. All CertRamp questions are original practice questions written against Cisco's published 200-301 exam topics. They are not taken from the real exam.",
    },
  ],
  seo: {
    title: "CCNA 200-301 Exam Guide: v1.1 vs v2.0 (Feb 2027)",
    description:
      "CCNA 200-301 guide: v1.1 until 2 Feb 2027, v2.0 from 3 Feb 2027. Domains and weights, what changes, 120-minute format and a six-step study plan.",
  },
  published: "2026-10-27",
  updated: "2026-10-27",
};
