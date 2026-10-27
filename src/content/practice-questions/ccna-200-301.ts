import type { PracticeQuestionSet } from "@/config/types";

/**
 * Free CCNA 200-301 sample questions — ORIGINAL questions written by CertRamp.
 * Domains follow the 200-301 CCNA v2.0 exam topics (live from 3 February 2027).
 * Every question covers a topic that is in both the v2.0 and the v1.1 outline;
 * the objective shows the v2.0 topic number and the matching v1.1 topic number.
 * Not taken from the paid practice exams, not recalled exam content, and not
 * presented as real exam questions.
 */
const V2 = {
  label: "Cisco — 200-301 CCNA v2.0 exam topics (PDF)",
  url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf",
};

export const ccna200301Questions: PracticeQuestionSet = {
  slug: "ccna-200-301",
  intro:
    "15 original CCNA 200-301 practice questions, grouped by the five domains of the v2.0 exam topics and weighted roughly like them. Every question covers a topic that appears in both v2.0 and v1.1, so they are useful whichever version you sit; each objective shows both topic numbers. Each question comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-10-27",
  seo: {
    title: "CCNA 200-301 Practice Questions with Answers (v1.1 & v2.0)",
    description:
      "15 free, original CCNA 200-301 practice questions on subnetting, IPv6, VLANs, STP, OSPF, NAT, ACLs and Layer 2 security — valid for v1.1 and v2.0.",
  },
  questions: [
    /* ── Domain 1: Network Infrastructure and Connectivity ────────────────── */
    {
      id: "ccna-d1-subnet-gateway",
      domain: "d1",
      objective: "1.3 Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private) (v1.1: 1.6)",
      difficulty: "intermediate",
      question:
        "A PC is configured with IP address 192.168.10.100/27 and default gateway 192.168.10.94. It can reach other hosts on its own subnet but nothing beyond it. What is the problem?",
      options: [
        { id: "A", text: "192.168.10.100 is the broadcast address of its /27 subnet", rationale: "The /27 subnet containing .100 is 192.168.10.96–127, so its broadcast address is .127, not .100." },
        { id: "B", text: "A /27 mask cannot be used with a 192.168.0.0/16 private address", rationale: "Private ranges can be subnetted with any suitable prefix length; /27 is perfectly valid." },
        { id: "C", text: "The default gateway is in a different subnet from the PC", rationale: "Correct. With a /27 (block size 32), .100 belongs to 192.168.10.96/27 (usable .97–.126), while .94 belongs to 192.168.10.64/27. The PC cannot reach a gateway outside its own subnet." },
        { id: "D", text: "192.168.10.100 is the network address of its /27 subnet", rationale: "The network address of that subnet is 192.168.10.96." },
      ],
      answer: "C",
      explanation:
        "A /27 mask (255.255.255.224) gives blocks of 32 addresses: .64–.95, .96–.127 and so on. The host and its default gateway must be in the same subnet; here the gateway must be an address from .97 to .126.",
      reference: V2,
    },
    {
      id: "ccna-d1-ipv6-eui64",
      domain: "d1",
      objective: "1.4 Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64) (v1.1: 1.8)",
      difficulty: "advanced",
      question:
        "A router interface with MAC address 001A.2B3C.4D5E is configured with ipv6 address 2001:DB8:ACAD:1::/64 eui-64. Which IPv6 address does the interface get?",
      options: [
        { id: "A", text: "2001:DB8:ACAD:1:21A:2BFF:FE3C:4D5E", rationale: "Correct. FFFE is inserted in the middle of the MAC (001A:2BFF:FE3C:4D5E) and the seventh bit of the first byte is inverted, turning 00 into 02." },
        { id: "B", text: "2001:DB8:ACAD:1:1A:2BFF:FE3C:4D5E", rationale: "FFFE has been inserted, but the seventh bit (universal/local bit) has not been inverted." },
        { id: "C", text: "2001:DB8:ACAD:1:21A:2BFF:FF3C:4D5E", rationale: "The inserted value is FFFE, not FFFF." },
        { id: "D", text: "2001:DB8:ACAD:1::1A:2B3C:4D5E", rationale: "This simply appends the MAC address without the modified EUI-64 process." },
      ],
      answer: "A",
      explanation:
        "Modified EUI-64 splits the 48-bit MAC in half, inserts FFFE to make 64 bits and flips the seventh bit of the first byte. 00 in binary is 00000000; flipping the seventh bit gives 00000010, which is 02.",
      reference: V2,
    },
    {
      id: "ccna-d1-wifi-channels",
      domain: "d1",
      objective: "1.5 Describe wireless principles — 1.5.a Band and channel selection (v1.1: 1.11)",
      difficulty: "foundation",
      question:
        "You are deploying three neighbouring access points in the 2.4 GHz band (20 MHz channels, North American channel set) and want to avoid co-channel and adjacent-channel interference. Which channel plan should you use?",
      options: [
        { id: "A", text: "1, 2 and 3", rationale: "Adjacent 2.4 GHz channels overlap heavily and would interfere with each other." },
        { id: "B", text: "6, 6 and 6", rationale: "Using the same channel on neighbouring APs causes co-channel interference." },
        { id: "C", text: "1, 5 and 9", rationale: "Channels four apart still overlap partly in the 2.4 GHz band." },
        { id: "D", text: "1, 6 and 11", rationale: "Correct. Channels 1, 6 and 11 are the three non-overlapping channels in the 2.4 GHz band." },
      ],
      answer: "D",
      explanation:
        "2.4 GHz channels are 5 MHz apart but about 20–22 MHz wide, so only channels 1, 6 and 11 do not overlap. The 5 GHz band offers many more non-overlapping channels, which is one reason it is preferred in dense deployments.",
      reference: V2,
    },
    {
      id: "ccna-d1-duplex",
      domain: "d1",
      objective: "1.1 Diagnose interface and cable (copper and fiber) issues (v1.1: 1.4)",
      difficulty: "intermediate",
      question:
        "Users on a switch port complain about slow transfers. show interfaces on that port shows it running at half duplex with a steadily rising late collision counter. The connected device is set to full duplex. What is the most likely cause?",
      options: [
        { id: "A", text: "A spanning-tree loop", rationale: "A loop causes broadcast storms and MAC table instability, not late collisions on one port." },
        { id: "B", text: "A duplex mismatch between the two ends of the link", rationale: "Correct. The half-duplex side detects collisions after the first 64 bytes because the full-duplex side transmits whenever it wants. Late collisions on the half-duplex end are a classic sign of a duplex mismatch." },
        { id: "C", text: "The port is assigned to the wrong VLAN", rationale: "A wrong VLAN breaks connectivity to the expected subnet, but it does not produce collisions." },
        { id: "D", text: "The cable is too short", rationale: "Short cables do not cause late collisions; overly long cables and duplex mismatches do." },
      ],
      answer: "B",
      explanation:
        "In a duplex mismatch, the half-duplex end typically logs late collisions, while the full-duplex end sees FCS/CRC errors and runts. Fix it by setting both ends to the same settings, ideally auto-negotiation on both.",
      reference: V2,
    },

    /* ── Domain 2: Switching and Network Access ───────────────────────────── */
    {
      id: "ccna-d2-trunk-allowed",
      domain: "d2",
      objective: "2.1 Configure network infrastructure connectivity (switch-to-switch and switch-to-router) — 2.1.b Layer 2 802.1Q trunk interfaces (v1.1: 2.2)",
      difficulty: "intermediate",
      question:
        "An 802.1Q trunk between two switches currently allows VLANs 10 and 20. You must also carry the new VLAN 30 without interrupting VLANs 10 and 20. Which interface command do you enter on both switches?",
      options: [
        { id: "A", text: "switchport trunk allowed vlan 30", rationale: "This replaces the allowed list with VLAN 30 only, so VLANs 10 and 20 would stop crossing the trunk." },
        { id: "B", text: "switchport trunk native vlan 30", rationale: "This changes the native (untagged) VLAN; it does not add VLAN 30 to the allowed list." },
        { id: "C", text: "switchport trunk allowed vlan add 30", rationale: "Correct. The add keyword appends VLAN 30 to the existing allowed list and leaves VLANs 10 and 20 in place." },
        { id: "D", text: "switchport access vlan 30", rationale: "This sets the VLAN for an access port and has no effect on a port in trunk mode." },
      ],
      answer: "C",
      explanation:
        "Forgetting the add keyword is a common cause of outages: without it the allowed VLAN list is overwritten. Verify the result with show interfaces trunk.",
      reference: V2,
    },
    {
      id: "ccna-d2-root-bridge",
      domain: "d2",
      objective: "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+) — 2.5.a Root port, root bridge (primary/secondary), and other port names (v1.1: 2.5.a)",
      difficulty: "intermediate",
      question:
        "For VLAN 10, three switches advertise these bridge IDs: SW1 priority 32778, MAC 0011.2233.4401; SW2 priority 24586, MAC 0011.2233.4499; SW3 priority 24586, MAC 0011.2233.4410. Which switch becomes the root bridge for VLAN 10?",
      options: [
        { id: "A", text: "SW3", rationale: "Correct. SW2 and SW3 share the lowest priority (24576 + VLAN 10). The tie is broken by the lowest MAC address, and SW3's MAC (…4410) is lower than SW2's (…4499)." },
        { id: "B", text: "SW1", rationale: "SW1 has the lowest MAC address, but MAC addresses only matter when priorities are equal. Its priority of 32778 is higher than 24586." },
        { id: "C", text: "SW2", rationale: "SW2 ties with SW3 on priority but has the higher MAC address, so it loses the tie-break." },
        { id: "D", text: "No root bridge is elected because two switches have the same priority", rationale: "Equal priorities are normal; the MAC address always breaks the tie." },
      ],
      answer: "A",
      explanation:
        "The root bridge is the switch with the lowest bridge ID: priority (including the extended system ID, which is the VLAN number) first, then MAC address. To choose the root deliberately, use spanning-tree vlan 10 root primary or set a lower priority.",
      reference: V2,
    },
    {
      id: "ccna-d2-bpdu-guard",
      domain: "d2",
      objective: "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+) — 2.5.d Root guard, loop guard, and BPDU guard (v1.1: 2.5.d)",
      difficulty: "foundation",
      question:
        "An access port is configured with spanning-tree portfast and spanning-tree bpduguard enable. A user plugs a small switch into that port, and the switch starts sending BPDUs. What happens to the access port?",
      options: [
        { id: "A", text: "It becomes a root port", rationale: "BPDU guard does not let the port take part in the topology; it shuts the port down." },
        { id: "B", text: "It keeps forwarding but ignores the BPDUs", rationale: "Ignoring BPDUs is closer to BPDU filter behaviour, not BPDU guard." },
        { id: "C", text: "It moves to the blocking state until the BPDUs stop, then recovers automatically", rationale: "That describes root guard, which puts the port into a root-inconsistent state and recovers once superior BPDUs stop." },
        { id: "D", text: "It is placed in the err-disabled state", rationale: "Correct. When a BPDU guard-enabled port receives a BPDU, the switch err-disables it. It stays down until an administrator re-enables it or errdisable recovery is configured." },
      ],
      answer: "D",
      explanation:
        "PortFast lets edge ports skip the listening and learning states; BPDU guard protects them by shutting the port if a switch appears. Together they are the standard configuration for ports facing end hosts.",
      reference: V2,
    },

    /* ── Domain 3: IP Routing ─────────────────────────────────────────────── */
    {
      id: "ccna-d3-longest-match",
      domain: "d3",
      objective: "3.1 Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route) (v1.1: 3.1, 3.2)",
      difficulty: "intermediate",
      question:
        "A router has these routes: S 10.1.0.0/16 [1/0] via 192.0.2.1; O 10.1.1.0/24 [110/20] via 192.0.2.5; O 10.0.0.0/8 [110/30] via 192.0.2.9; S* 0.0.0.0/0 [1/0] via 192.0.2.13. Where does it forward a packet to 10.1.1.50?",
      options: [
        { id: "A", text: "192.0.2.1, because the static route has the lowest administrative distance", rationale: "Administrative distance only compares routes to the same prefix. 10.1.0.0/16 and 10.1.1.0/24 are different prefixes." },
        { id: "B", text: "192.0.2.5, because 10.1.1.0/24 is the longest matching prefix", rationale: "Correct. All of the first three routes match, but /24 is the most specific, so it wins regardless of administrative distance." },
        { id: "C", text: "192.0.2.9, because OSPF prefers the summary route", rationale: "10.0.0.0/8 matches, but it is the least specific of the matching routes." },
        { id: "D", text: "192.0.2.13, because the default route is preferred for unknown hosts", rationale: "The default route is only used when no more specific route matches." },
      ],
      answer: "B",
      explanation:
        "A router chooses the route with the longest prefix match first. Administrative distance and metric only matter when the router has several candidates for exactly the same prefix and length.",
      reference: V2,
    },
    {
      id: "ccna-d3-floating-static",
      domain: "d3",
      objective: "3.2 Troubleshoot IPv4 and IPv6 static routing — 3.2.d Floating static (v1.1: 3.3)",
      difficulty: "advanced",
      question:
        "A router learns its default route from OSPF. You want a backup default route via 198.51.100.1 that is used only if the OSPF default route disappears. Which command achieves this?",
      options: [
        { id: "A", text: "ip route 0.0.0.0 0.0.0.0 198.51.100.1", rationale: "Without a distance, the static route has administrative distance 1 and would replace the OSPF route immediately." },
        { id: "B", text: "ip route 0.0.0.0 0.0.0.0 198.51.100.1 100", rationale: "100 is lower than OSPF's 110, so the static route would still be preferred over the OSPF route." },
        { id: "C", text: "ip route 0.0.0.0 0.0.0.0 198.51.100.1 120", rationale: "Correct. An administrative distance of 120 is higher than OSPF's 110, so the static route stays out of the routing table until the OSPF default route is lost." },
        { id: "D", text: "ip route 0.0.0.0 255.255.255.255 198.51.100.1 120", rationale: "A mask of 255.255.255.255 with network 0.0.0.0 is a host route to 0.0.0.0, not a default route." },
      ],
      answer: "C",
      explanation:
        "A floating static route is a static route with an administrative distance higher than the primary route's. It 'floats' above the primary and is only installed when the primary route is withdrawn.",
      reference: V2,
    },
    {
      id: "ccna-d3-ospf-dr",
      domain: "d3",
      objective: "3.3 Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6 — 3.3.c Broadcast (DR/BDR selection) (v1.1: 3.4.c)",
      difficulty: "advanced",
      question:
        "Four routers on one Ethernet segment start OSPF at the same time. R1: priority 1, router ID 10.0.0.1. R2: priority 0, router ID 10.0.0.9. R3: priority 1, router ID 10.0.0.5. R4: priority 1, router ID 10.0.0.3. Which routers become DR and BDR?",
      options: [
        { id: "A", text: "DR: R3, BDR: R4", rationale: "Correct. R2 has priority 0 and can never be DR or BDR. The others tie on priority 1, so the highest router ID wins: R3 (10.0.0.5) becomes DR and R4 (10.0.0.3) becomes BDR." },
        { id: "B", text: "DR: R2, BDR: R3", rationale: "R2 has the highest router ID, but priority 0 makes it ineligible for DR and BDR." },
        { id: "C", text: "DR: R1, BDR: R4", rationale: "The lowest router ID does not win; OSPF prefers the highest priority, then the highest router ID." },
        { id: "D", text: "DR: R4, BDR: R3", rationale: "R3 has the higher router ID of the two, so it becomes DR, not BDR." },
      ],
      answer: "A",
      explanation:
        "DR/BDR election uses the highest interface priority first and the highest router ID as the tie-breaker; priority 0 excludes a router. The election is not pre-emptive, so a better router that joins later does not take over an existing DR.",
      reference: V2,
    },

    /* ── Domain 4: Network Services and Security ──────────────────────────── */
    {
      id: "ccna-d4-static-nat",
      domain: "d4",
      objective: "4.3 Configure NAT/PAT on IOS XE routers (v1.1: 4.1)",
      difficulty: "foundation",
      question:
        "An internal web server at 192.168.1.10 must always be reachable from the internet as 203.0.113.10. The inside and outside interfaces are already marked with ip nat inside and ip nat outside. Which command completes the configuration?",
      options: [
        { id: "A", text: "ip nat inside source static 203.0.113.10 192.168.1.10", rationale: "The order is reversed: the inside local address comes first, then the inside global address." },
        { id: "B", text: "ip nat inside source static 192.168.1.10 203.0.113.10", rationale: "Correct. This creates a permanent one-to-one mapping from the inside local address 192.168.1.10 to the inside global address 203.0.113.10." },
        { id: "C", text: "ip nat outside source static 192.168.1.10 203.0.113.10", rationale: "Outside source NAT translates the addresses of outside hosts, not of an internal server." },
        { id: "D", text: "ip nat inside source list 1 interface GigabitEthernet0/1 overload", rationale: "This is PAT for outbound traffic. It does not create a fixed mapping that lets internet hosts reach the server." },
      ],
      answer: "B",
      explanation:
        "Static NAT is the right choice when outside hosts must start connections to an inside host. The syntax is ip nat inside source static <inside local> <inside global>; check the mapping with show ip nat translations.",
      reference: V2,
    },
    {
      id: "ccna-d4-extended-acl",
      domain: "d4",
      objective: "4.6 Configure IPv4 access control lists (standard, extended, numbered, and named ACLs) (v1.1: 5.6)",
      difficulty: "intermediate",
      question:
        "Hosts in 10.1.20.0/24 must not reach the HTTPS service on server 10.1.50.10. All other traffic must be allowed. Which extended ACL meets the requirement?",
      options: [
        { id: "A", text: "access-list 110 deny tcp 10.1.20.0 0.0.0.255 host 10.1.50.10 eq 443", rationale: "Without a permit statement, the implicit deny at the end of the ACL blocks all other traffic too." },
        { id: "B", text: "access-list 110 deny tcp 10.1.20.0 255.255.255.0 host 10.1.50.10 eq 443, followed by access-list 110 permit ip any any", rationale: "ACLs use wildcard masks. 255.255.255.0 as a wildcard matches the wrong addresses; the correct wildcard for a /24 is 0.0.0.255." },
        { id: "C", text: "access-list 10 deny 10.1.20.0 0.0.0.255, followed by access-list 10 permit any", rationale: "A standard ACL filters only on source address. It would block all traffic from the subnet, not just HTTPS to one server." },
        { id: "D", text: "access-list 110 deny tcp 10.1.20.0 0.0.0.255 host 10.1.50.10 eq 443, followed by access-list 110 permit ip any any", rationale: "Correct. The first line matches TCP traffic from the subnet to port 443 on the server; the permit statement allows everything else instead of hitting the implicit deny." },
      ],
      answer: "D",
      explanation:
        "Extended ACLs can match protocol, source, destination and port, and are usually placed close to the source. Remember the wildcard mask and the implicit deny any at the end of every ACL.",
      reference: V2,
    },
    {
      id: "ccna-d4-dhcp-snooping",
      domain: "d4",
      objective: "4.7 Configure Layer 2 security features — 4.7.a DHCP snooping (v1.1: 5.7)",
      difficulty: "intermediate",
      question:
        "Clients in VLAN 20 are receiving IP addresses from a rogue DHCP server that someone connected to an access port. The legitimate DHCP server is reached through the switch's uplink. How do you stop this?",
      options: [
        { id: "A", text: "Enable port security with a maximum of one MAC address on every port", rationale: "Port security limits MAC addresses per port, but a rogue server with a single MAC address could still hand out leases." },
        { id: "B", text: "Enable PortFast on all access ports", rationale: "PortFast speeds up STP convergence on edge ports; it does nothing against DHCP messages." },
        { id: "C", text: "Enable DHCP snooping for VLAN 20 and configure the uplink as a trusted port", rationale: "Correct. With DHCP snooping, server messages such as DHCPOFFER are dropped on untrusted ports. Only the trusted uplink can deliver them." },
        { id: "D", text: "Configure the uplink as an access port in VLAN 20", rationale: "Changing the uplink mode does not stop DHCP offers from the rogue server's port." },
      ],
      answer: "C",
      explanation:
        "On Cisco switches, all ports are untrusted once DHCP snooping is enabled, so you must trust the ports that lead to legitimate DHCP servers. The binding table it builds is also used by dynamic ARP inspection.",
      reference: V2,
    },

    /* ── Domain 5: AI, and Network Operations and Management ──────────────── */
    {
      id: "ccna-d5-syslog-severity",
      domain: "d5",
      objective: "5.6 Interpret syslog message content, severity levels, and facilities (v1.1: 4.5)",
      difficulty: "intermediate",
      question:
        "A router is configured with logging host 10.0.0.50 and logging trap warnings. An interface goes down and the router generates %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to down. Is this message sent to the syslog server?",
      options: [
        { id: "A", text: "No, because severity 5 (notifications) is less severe than the configured level 4 (warnings)", rationale: "Correct. logging trap warnings sends levels 0 to 4. The 5 in the message is its severity, notifications, which is outside that range." },
        { id: "B", text: "Yes, because all interface state changes are always sent to the syslog server", rationale: "Every message is filtered by its severity; interface messages have no special treatment." },
        { id: "C", text: "Yes, because 5 is a higher number than 4 and therefore more severe", rationale: "In syslog, lower numbers are more severe: 0 is emergencies and 7 is debugging." },
        { id: "D", text: "No, because LINEPROTO messages are only shown on the console", rationale: "LINEPROTO is the facility. Whether a message is sent to a server depends on its severity, not on the facility." },
      ],
      answer: "A",
      explanation:
        "Cisco syslog messages follow the format %FACILITY-SEVERITY-MNEMONIC. Configuring a level sends that level and everything more severe (lower numbers): 0 emergencies, 1 alerts, 2 critical, 3 errors, 4 warnings, 5 notifications, 6 informational, 7 debugging.",
      reference: V2,
    },
    {
      id: "ccna-d5-ansible",
      domain: "d5",
      objective: "5.5 Use configuration management mechanisms such as Ansible to execute commands (v1.1: 6.6)",
      difficulty: "foundation",
      question:
        "Your team wants to push the same configuration change to 200 Cisco IOS XE switches with Ansible. Which statement about Ansible is correct?",
      options: [
        { id: "A", text: "An Ansible agent must be installed on every switch before it can be managed", rationale: "Ansible is agentless; nothing needs to be installed on the managed network devices." },
        { id: "B", text: "Ansible is agentless, typically connects to network devices over SSH and describes tasks in YAML playbooks", rationale: "Correct. A control node runs playbooks written in YAML and connects to devices over SSH (or APIs) without a resident agent." },
        { id: "C", text: "Ansible playbooks are written in JSON and must be compiled before they run", rationale: "Playbooks are YAML files and are not compiled." },
        { id: "D", text: "Ansible only works with controller-based networks and cannot manage individual devices", rationale: "Ansible commonly manages individual devices directly, with or without a controller." },
      ],
      answer: "B",
      explanation:
        "Ansible's push model and agentless design make it easy to start with: an inventory of devices, a playbook of tasks and SSH access are enough to run the same change consistently across many switches.",
      reference: V2,
    },
  ],
};
