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
  label: "Cisco: 200-301 CCNA v2.0 exam topics (PDF)",
  url: "https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf",
};

export const ccna200301Questions: PracticeQuestionSet = {
  slug: "ccna-200-301",
  intro:
    "30 original CCNA 200-301 practice questions, grouped by the five domains of the v2.0 exam topics and weighted roughly like them. Every question covers a topic that appears in both v2.0 and v1.1, so they are useful whichever version you sit; each objective shows both topic numbers. Each question comes with the answer, a short explanation and the reason every other option is wrong.",
  published: "2026-10-27",
  updated: "2026-11-09",
  seo: {
    title: "CCNA 200-301 Practice Questions with Answers (v1.1 & v2.0)",
    description:
      "30 free, original CCNA 200-301 practice questions on subnetting, IPv6, VLANs, STP, OSPF, NAT, ACLs and Layer 2 security: valid for v1.1 and v2.0.",
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
      objective: "1.4 Troubleshoot IPv6 address configuration, assignment, and prefix sizing (unicast and modified EUI 64) (v1.1: 1.8, 1.9.d)",
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
      objective: "1.5 Describe wireless principles, 1.5.a Band and channel selection (v1.1: 1.11.a)",
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
    {
      id: "ccna-d1-dhcp-relay",
      domain: "d1",
      objective: "1.7 Troubleshoot DHCPv4 client, server, and relay on IOS devices (v1.1: 4.6)",
      difficulty: "intermediate",
      question:
        "Hosts in VLAN 30 (10.30.0.0/24) do not receive DHCP addresses. Their default gateway is router subinterface GigabitEthernet0/0.30 with address 10.30.0.1. The DHCP server is 10.99.0.10 in another subnet and already has a pool for 10.30.0.0/24. What must you configure on the router?",
      options: [
        { id: "A", text: "ip helper-address 10.99.0.10 on the interface facing the DHCP server's subnet", rationale: "The helper address belongs on the interface that receives the client broadcasts, not on the interface towards the server." },
        { id: "B", text: "ip helper-address 10.99.0.10 on subinterface GigabitEthernet0/0.30", rationale: "Correct. The router receives the DHCPDISCOVER broadcast on this subinterface and relays it as a unicast to 10.99.0.10, inserting 10.30.0.1 as the relay agent address (giaddr)." },
        { id: "C", text: "ip dhcp excluded-address 10.30.0.1 in global configuration mode", rationale: "This only excludes an address from a DHCP pool on the router itself. It does not forward any client requests to the remote server." },
        { id: "D", text: "ip address dhcp on subinterface GigabitEthernet0/0.30", rationale: "This makes the router a DHCP client on that subinterface; it would no longer have the static gateway address the hosts need." },
      ],
      answer: "B",
      explanation:
        "DHCPDISCOVER is a broadcast, and routers do not forward broadcasts between subnets. ip helper-address on the client-facing interface turns the router into a DHCP relay agent, and the giaddr it inserts tells the server which pool to assign from.",
      reference: V2,
    },
    {
      id: "ccna-d1-apipa",
      domain: "d1",
      objective: "1.6 Troubleshoot wired and wireless client connectivity (IP configuration, network reachability, and wireless security parameters on Windows, MacOS, and Linux) (v1.1: 1.10)",
      difficulty: "foundation",
      question:
        "A Windows laptop on a wired switch port cannot reach any network resource. ipconfig shows: Autoconfiguration IPv4 Address 169.254.37.112, Subnet Mask 255.255.0.0, Default Gateway empty. Other PCs in the same VLAN work normally. What does this output tell you?",
      options: [
        { id: "A", text: "The laptop has a static IP address configured from the wrong subnet", rationale: "169.254.0.0/16 addresses labelled Autoconfiguration are assigned automatically by the operating system, not entered as static settings." },
        { id: "B", text: "The DHCP server handed out an address from its link-local pool", rationale: "DHCP servers do not assign 169.254.x.x addresses; the client picks one itself when DHCP fails." },
        { id: "C", text: "The default gateway is down, so Windows replaced the leased address", rationale: "A failed gateway does not change the client's IP address; the client would keep its leased address and simply fail to reach other subnets." },
        { id: "D", text: "The laptop got no reply to its DHCP requests and assigned itself an address", rationale: "Correct. When no DHCP offer arrives, Windows assigns itself an address from 169.254.0.0/16 (APIPA). It can only talk to other link-local hosts on the same segment." },
      ],
      answer: "D",
      explanation:
        "A 169.254.x.x address with no gateway is the classic sign of a failed DHCP exchange. Because other PCs in the VLAN work, check this port's cabling, VLAN assignment and security features, then run ipconfig /renew.",
      reference: V2,
    },
    {
      id: "ccna-d1-subnet-22",
      domain: "d1",
      objective: "1.3 Troubleshoot IPv4 address configuration, assignment, and subnetting (public and private) (v1.1: 1.6)",
      difficulty: "advanced",
      question:
        "A server must get a static address from the subnet 172.16.8.0/22. Which of the following is a usable host address in that subnet?",
      options: [
        { id: "A", text: "172.16.8.0", rationale: "This is the network address of 172.16.8.0/22 and cannot be assigned to a host." },
        { id: "B", text: "172.16.11.255", rationale: "This is the broadcast address of 172.16.8.0/22, the last address in the block." },
        { id: "C", text: "172.16.10.0", rationale: "Correct. The subnet runs from 172.16.8.0 to 172.16.11.255, and 172.16.10.0 lies inside it without being the first or last address, so it is a valid host address." },
        { id: "D", text: "172.16.12.1", rationale: "With a block size of 4 in the third octet, the next subnet starts at 172.16.12.0, so this address belongs to 172.16.12.0/22." },
      ],
      answer: "C",
      explanation:
        "A /22 mask (255.255.252.0) gives a block size of 4 in the third octet, so 172.16.8.0/22 spans 172.16.8.0 to 172.16.11.255 with 1,022 usable hosts. Addresses ending in .0 or .255 in the middle of such a block are ordinary host addresses; only the first and last address of the whole block are reserved.",
      reference: V2,
    },

    /* ── Domain 2: Switching and Network Access ───────────────────────────── */
    {
      id: "ccna-d2-trunk-allowed",
      domain: "d2",
      objective: "2.1 Configure network infrastructure connectivity (switch-to-switch and switch-to-router), 2.1.b Layer 2 802.1Q trunk interfaces (v1.1: 2.2.a)",
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
      objective: "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+), 2.5.a Root port, root bridge (primary/secondary), and other port names (v1.1: 2.5.a)",
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
      objective: "2.5 Configure operations of the Rapid Per VLAN Spanning Tree Protocol (Rapid PVST+), 2.5.d Root guard, loop guard, and BPDU guard (v1.1: 2.5.d)",
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
        "PortFast moves edge ports straight to forwarding without waiting for STP convergence; BPDU guard protects them by err-disabling the port if a BPDU arrives. Together they are the standard configuration for ports facing end hosts.",
      reference: V2,
    },
    {
      id: "ccna-d2-lacp-modes",
      domain: "d2",
      objective: "2.1 Configure network infrastructure connectivity (switch-to-switch and switch-to-router), 2.1.c Layer 2/Layer 3 LACP port-channel/EtherChannel (v1.1: 2.4)",
      difficulty: "intermediate",
      question:
        "You bundle Gi1/0/1 and Gi1/0/2 between SW1 and SW2 with channel-group 1 mode passive on all four ports. The cabling is correct and the port settings match, but show etherchannel summary shows Po1(SD) and neither member port is flagged (P) bundled. What fixes the problem?",
      options: [
        { id: "A", text: "Change the member ports on one switch to channel-group 1 mode active", rationale: "Correct. A passive port only answers LACPDUs and never starts negotiation. With one side active, the active/passive pair negotiates and the bundle forms." },
        { id: "B", text: "Change the member ports on both switches to channel-group 1 mode auto", rationale: "auto is a PAgP mode, not LACP, and two auto sides never start negotiation either, so the bundle would still not form." },
        { id: "C", text: "Change the member ports on one switch to channel-group 1 mode on", rationale: "mode on forces a channel without sending LACPDUs, so it cannot negotiate with a passive LACP neighbour. on must be used on both ends." },
        { id: "D", text: "Configure spanning-tree portfast on the member ports of both switches", rationale: "PortFast affects STP on edge ports. It has nothing to do with LACP negotiation and should not be used on switch-to-switch links." },
      ],
      answer: "A",
      explanation:
        "LACP active ports send LACPDUs, while passive ports only respond. Active/active and active/passive form a port channel; passive/passive does not, because nobody starts the negotiation.",
      reference: V2,
    },
    {
      id: "ccna-d2-lightweight-ap",
      domain: "d2",
      objective: "2.2 Configure Layer 2 switch port attributes for edge-host connectivity (VLAN, PoE, port channel, and LACP), 2.2.b Wireless access points (standalone and controller based) (v1.1: 2.7)",
      difficulty: "intermediate",
      question:
        "A lightweight AP in local mode has joined a WLC in the data centre and serves three SSIDs mapped to VLANs 10, 20 and 30. All client traffic is tunnelled to the WLC in CAPWAP. How should the access switch port connected to the AP be configured?",
      options: [
        { id: "A", text: "As an 802.1Q trunk that allows VLANs 10, 20 and 30", rationale: "A trunk to the AP is needed when the AP switches client traffic locally (autonomous APs or FlexConnect local switching), not in local mode." },
        { id: "B", text: "As a member of an LACP port channel that bundles the client VLANs", rationale: "A port channel combines physical links; it does not carry client VLANs for a single AP, and a local-mode AP needs no bundle." },
        { id: "C", text: "As an access port in the AP management VLAN, with PoE if the switch powers the AP", rationale: "Correct. In local mode the client VLANs exist only at the WLC. The switch just carries the AP's own IP traffic, including the CAPWAP tunnel, so an access port is enough." },
        { id: "D", text: "As an access port in VLAN 10, because CAPWAP runs in the first SSID's VLAN", rationale: "CAPWAP runs between the AP's management address and the WLC. It is not tied to the VLAN of any SSID." },
      ],
      answer: "C",
      explanation:
        "A local-mode AP encapsulates client frames in CAPWAP, so the access switch only sees traffic from the AP's management IP address. The client VLANs are needed on the WLC side, where the WLC usually connects through an 802.1Q trunk, often as a LAG.",
      reference: V2,
    },
    {
      id: "ccna-d2-voice-vlan",
      domain: "d2",
      objective: "2.2 Configure Layer 2 switch port attributes for edge-host connectivity (VLAN, PoE, port channel, and LACP), 2.2.c Voice over IP phone (v1.1: 2.1.a)",
      difficulty: "foundation",
      question:
        "A Cisco IP phone with a PC connected to its built-in switch port is plugged into Gi1/0/5. PC traffic must use VLAN 10 and voice traffic VLAN 150. Which interface configuration is correct?",
      options: [
        { id: "A", text: "switchport mode access, switchport access vlan 150 and switchport voice vlan 10", rationale: "The VLANs are reversed: the PC would land in VLAN 150 and the phone would tag voice traffic with VLAN 10." },
        { id: "B", text: "switchport mode access, switchport access vlan 10 and switchport voice vlan 150", rationale: "Correct. The PC's untagged frames go into access VLAN 10, and the phone tags its voice frames with VLAN 150, which it learns from the switch." },
        { id: "C", text: "switchport mode access and switchport access vlan 10,150", rationale: "An access port belongs to a single data VLAN; switchport access vlan does not accept a list of VLANs." },
        { id: "D", text: "switchport mode access, switchport access vlan 10 and switchport trunk native vlan 150", rationale: "The native VLAN setting only applies to trunk ports. It does not create a voice VLAN on an access port." },
      ],
      answer: "B",
      explanation:
        "With a voice VLAN, the switch tells the phone which VLAN to use through CDP (or LLDP-MED). The phone tags voice frames with VLAN 150 and passes the PC's untagged frames through, so the port can stay an access port.",
      reference: V2,
    },
    {
      id: "ccna-d2-lldp",
      domain: "d2",
      objective: "2.3 Validate the accuracy of network documentation using CDP and LLDP (v1.1: 2.3)",
      difficulty: "foundation",
      question:
        "You are checking a network diagram. On a Cisco IOS switch, show cdp neighbors lists the Cisco router but not the third-party switch connected to Gi1/0/24. show lldp neighbors returns % LLDP is not enabled. What should you do to see the third-party switch?",
      options: [
        { id: "A", text: "Enter cdp enable on Gi1/0/24 and check show cdp neighbors again", rationale: "CDP is Cisco proprietary. Most third-party switches do not speak CDP, so enabling it on the port does not reveal them." },
        { id: "B", text: "Configure Gi1/0/24 as a trunk, because discovery protocols only run on trunks", rationale: "CDP and LLDP run on access and trunk ports alike; the port mode is not the problem." },
        { id: "C", text: "Use show cdp neighbors detail, which also lists non-Cisco devices", rationale: "The detail keyword shows more information about CDP neighbours, but it cannot list devices that do not send CDP." },
        { id: "D", text: "Enable LLDP globally with lldp run, then check show lldp neighbors", rationale: "Correct. LLDP is the vendor-neutral IEEE 802.1AB discovery protocol, and it is disabled by default on many Cisco IOS switches. Once it runs, the third-party switch appears in show lldp neighbors." },
      ],
      answer: "D",
      explanation:
        "CDP is Cisco proprietary and enabled by default on most Cisco devices; LLDP is the open standard that multi-vendor networks use. lldp run enables it globally, and lldp transmit and lldp receive control it per interface.",
      reference: V2,
    },

    /* ── Domain 3: IP Routing ─────────────────────────────────────────────── */
    {
      id: "ccna-d3-longest-match",
      domain: "d3",
      objective: "3.1 Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route) (v1.1: 3.1, 3.2.a)",
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
      objective: "3.2 Troubleshoot IPv4 and IPv6 static routing, 3.2.d Floating static (v1.1: 3.3.d)",
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
      objective: "3.3 Configure single area OSPFv2 for IPv4 and OSPFv3 for IPv6, 3.3.c Broadcast (DR/BDR selection) (v1.1: 3.4.c)",
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
    {
      id: "ccna-d3-admin-distance",
      domain: "d3",
      objective: "3.1 Interpret a routing table to identify the next hop for a packet (routing protocol, prefix/mask, administrative distance, metric, and default route) (v1.1: 3.1, 3.2.b)",
      difficulty: "intermediate",
      question:
        "A router learns 172.20.4.0/24 from three sources at once: OSPF with metric 20, RIPv2 with a hop count of 1 and internal EIGRP with metric 30720. No static routes are configured. Which route does the router install in its routing table?",
      options: [
        { id: "A", text: "The EIGRP route, because its administrative distance of 90 is the lowest", rationale: "Correct. For the same prefix and length, the router compares administrative distance first: internal EIGRP 90 beats OSPF 110 and RIP 120." },
        { id: "B", text: "The RIPv2 route, because a hop count of 1 is the lowest metric", rationale: "Metrics from different routing protocols are not comparable, so the router uses administrative distance instead." },
        { id: "C", text: "The OSPF route, because link-state protocols are always preferred", rationale: "There is no general preference for link-state protocols; OSPF's administrative distance of 110 loses to EIGRP's 90." },
        { id: "D", text: "All three routes, because the router load-balances across equal prefixes", rationale: "Equal-cost load balancing only happens between routes from the same source with the same metric, not across protocols." },
      ],
      answer: "A",
      explanation:
        "Administrative distance ranks the trustworthiness of route sources: connected 0, static 1, eBGP 20, internal EIGRP 90, OSPF 110, RIP 120, external EIGRP 170, iBGP 200. The metric only breaks ties between routes from the same protocol.",
      reference: V2,
    },
    {
      id: "ccna-d3-ipv6-default-linklocal",
      domain: "d3",
      objective: "3.2 Troubleshoot IPv4 and IPv6 static routing, 3.2.a Default route (v1.1: 3.3.a)",
      difficulty: "advanced",
      question:
        "R1 has ipv6 unicast-routing enabled and must send all unknown IPv6 traffic to the ISP router. The only address you know for the ISP router on the shared link, R1's GigabitEthernet0/0, is its link-local address FE80::1. Which command creates a working IPv6 default route?",
      options: [
        { id: "A", text: "ipv6 route ::/0 FE80::1", rationale: "IOS rejects this: a link-local address is only unique on its own link, so a link-local next hop needs the exit interface as well." },
        { id: "B", text: "ipv6 route ::/128 GigabitEthernet0/0 FE80::1", rationale: "::/128 is a host route for the unspecified address, not a default route. The default route is ::/0." },
        { id: "C", text: "ip route ::/0 GigabitEthernet0/0 FE80::1", rationale: "ip route configures IPv4 static routes; IPv6 static routes use ipv6 route." },
        { id: "D", text: "ipv6 route ::/0 GigabitEthernet0/0 FE80::1", rationale: "Correct. ::/0 matches every IPv6 destination, and naming GigabitEthernet0/0 tells the router on which link FE80::1 is found." },
      ],
      answer: "D",
      explanation:
        "::/0 is the IPv6 equivalent of 0.0.0.0/0. With a global unicast next hop the exit interface is optional, but with a link-local next hop you must specify it, because the same link-local address can exist on every link.",
      reference: V2,
    },
    {
      id: "ccna-d3-hsrp-preempt",
      domain: "d3",
      objective: "3.4 Interpret the operational status of First Hop Redundancy Protocols (HSRP and VRRP) (v1.1: 3.5)",
      difficulty: "advanced",
      question:
        "R1 and R2 run HSRP group 10 on VLAN 10. R1 has standby 10 priority 110 and R2 uses the default priority. After R1 was reloaded and came back up, R2 is still the active router. show standby brief on R1 shows: Interface Gi0/1, Grp 10, Pri 110, P column empty, State Standby, Active 192.168.10.3, Standby local, Virtual IP 192.168.10.1. Why does R1 not take over?",
      options: [
        { id: "A", text: "HSRP prefers the lower priority value, so R2's 100 beats R1's 110", rationale: "In HSRP the higher priority wins. R1's 110 is better than R2's default of 100." },
        { id: "B", text: "Preemption is not configured on R1, so it does not replace a working active router", rationale: "Correct. HSRP preemption is off by default, which the empty P column confirms. R1 stays in standby until standby 10 preempt is configured or R2 fails." },
        { id: "C", text: "The virtual IP 192.168.10.1 must match R1's own interface address", rationale: "The virtual IP is a separate address shared by the group; it must not be either router's interface address." },
        { id: "D", text: "R1 must use shorter hello and hold timers than R2 to become active", rationale: "Timers control failure detection and should match within a group; they do not decide which router is active." },
      ],
      answer: "B",
      explanation:
        "HSRP elects the active router by highest priority (default 100), then highest interface IP address, but without preemption a better router that comes up later stays standby. The P column in show standby brief marks groups with preempt configured; VRRP, by contrast, preempts by default.",
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
      objective: "4.7 Configure Layer 2 security features, 4.7.a DHCP snooping (v1.1: 5.7)",
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
    {
      id: "ccna-d4-port-security-restrict",
      domain: "d4",
      objective: "4.7 Configure Layer 2 security features, 4.7.e Port security (v1.1: 5.7)",
      difficulty: "intermediate",
      question:
        "An access port has switchport port-security, switchport port-security maximum 2 and switchport port-security mac-address sticky. If a third MAC address appears, the switch must drop that host's frames, send a syslog message and increment the violation counter, while the two known hosts keep working. Which command meets the requirement?",
      options: [
        { id: "A", text: "switchport port-security violation protect", rationale: "protect drops frames from unknown MAC addresses silently: no syslog message and no increase of the violation counter." },
        { id: "B", text: "switchport port-security violation shutdown", rationale: "shutdown, the default mode, err-disables the whole port, so the two known hosts would lose connectivity too." },
        { id: "C", text: "switchport port-security violation restrict", rationale: "Correct. restrict drops frames from the offending MAC address, logs the violation and increments the counter, and the port stays up for the allowed hosts." },
        { id: "D", text: "switchport port-security maximum 3", rationale: "This raises the limit, so the third MAC address would be learned and allowed instead of being treated as a violation." },
      ],
      answer: "C",
      explanation:
        "Port security has three main violation modes: protect drops silently, restrict drops and reports, and shutdown (the default) err-disables the port. Check the mode, the learned addresses and the violation count with show port-security interface.",
      reference: V2,
    },
    {
      id: "ccna-d4-ssh-local",
      domain: "d4",
      objective: "4.1 Configure network devices with local usernames and as an AAA client (TACACS+ and RADIUS) for management (v1.1: 4.8, 5.3)",
      difficulty: "intermediate",
      question:
        "Administrators must log in to R1 over SSH with local usernames. The running configuration contains: hostname R1; ip domain-name lab.local; username netadmin privilege 15 secret (hidden); line vty 0 4; login local; transport input ssh. SSH connections to R1 are refused. What is missing?",
      options: [
        { id: "A", text: "An RSA key pair, generated with crypto key generate rsa modulus 2048", rationale: "Correct. The SSH server only starts once RSA keys exist. Hostname and domain name are already set, so generating the keys enables SSH." },
        { id: "B", text: "The login command on the VTY lines in place of login local", rationale: "login checks a line password instead of local usernames, which is the opposite of the requirement." },
        { id: "C", text: "transport input telnet ssh, because SSH needs Telnet enabled as well", rationale: "SSH does not depend on Telnet. Allowing Telnet would only add an unencrypted access method." },
        { id: "D", text: "An enable secret, because SSH rejects users when none is configured", rationale: "An enable secret is not needed to open an SSH session, and a privilege 15 user starts directly in privileged EXEC mode." },
      ],
      answer: "A",
      explanation:
        "SSH on IOS needs a hostname, a domain name, RSA keys and VTY lines that allow SSH; login local makes the lines check the local user database. SSH version 2 requires a key of at least 768 bits, and 2048 bits is the usual choice.",
      reference: V2,
    },
    {
      id: "ccna-d4-aaa-tacacs",
      domain: "d4",
      objective: "4.1 Configure network devices with local usernames and as an AAA client (TACACS+ and RADIUS) for management (v1.1: 5.8)",
      difficulty: "intermediate",
      question:
        "Your company wants central logins for administrators on its routers and switches. Each command they enter must be authorized separately, and the whole message body between device and server must be encrypted. Which protocol fits best, and why?",
      options: [
        { id: "A", text: "RADIUS, because it runs over TCP and encrypts the entire packet body", rationale: "RADIUS runs over UDP (1812/1813) and encrypts only the password in an access request." },
        { id: "B", text: "RADIUS, because it combines authentication and authorization in one step", rationale: "Combining authentication and authorization is exactly why RADIUS is less suited to separate per-command authorization." },
        { id: "C", text: "TACACS+, because it runs over UDP port 49 and needs no shared secret", rationale: "TACACS+ uses TCP port 49, and the device and server share a key that is used for encryption." },
        { id: "D", text: "TACACS+, because it uses TCP port 49, encrypts the payload and separates AAA functions", rationale: "Correct. TACACS+ encrypts the full body and handles authentication, authorization and accounting separately, which allows command-by-command authorization." },
      ],
      answer: "D",
      explanation:
        "TACACS+ is the usual choice for device administration, while RADIUS is common for network access such as 802.1X, Wi-Fi and VPN logins. On IOS, aaa new-model enables AAA, and a method list such as aaa authentication login default group tacacs+ local keeps local users as a fallback.",
      reference: V2,
    },
    {
      id: "ccna-d4-dns-mx",
      domain: "d4",
      objective: "4.4 Diagnose issues with DNS records (A, AAAA, CNAME, MX, NS, and PTR) to support host, web application, and mail server access by name (v1.1: 4.3)",
      difficulty: "intermediate",
      question:
        "Your mail server mail.example.com has a correct A record and accepts SMTP connections on its IP address. External senders still cannot deliver mail to addresses @example.com, because their servers do not find mail.example.com as the mail server for the domain. Which DNS record should you add?",
      options: [
        { id: "A", text: "A PTR record that maps the server's IP address to mail.example.com", rationale: "A PTR record supports reverse lookups, which receiving servers may check for anti-spam purposes, but it does not tell senders where to deliver mail." },
        { id: "B", text: "An MX record for example.com that points to mail.example.com", rationale: "Correct. Sending mail servers look up the MX record of the recipient's domain to find its mail server, then resolve that name with its A or AAAA record." },
        { id: "C", text: "A CNAME record that makes example.com an alias of mail.example.com", rationale: "A CNAME only creates an alias, is not allowed at the zone apex next to the SOA and NS records, and does not mark a mail server." },
        { id: "D", text: "An NS record for example.com that points to mail.example.com", rationale: "NS records name the authoritative DNS servers for a zone, not its mail servers." },
      ],
      answer: "B",
      explanation:
        "MX records map a domain to the host names of its mail servers, each with a preference value where the lower number is tried first. The MX target must be a host name with its own A or AAAA record, not an IP address.",
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
    {
      id: "ccna-d5-snmp-inform",
      domain: "d5",
      objective: "5.4 Describe the function of SNMP in network operations (v1.1: 4.4)",
      difficulty: "intermediate",
      question:
        "Your monitoring system must be told immediately when a link on a router goes down. The router must also know whether the notification arrived and resend it if it did not. Which SNMP message type should the router use?",
      options: [
        { id: "A", text: "GetRequest, polled by the manager every few minutes on UDP 161", rationale: "Polling with Get requests starts at the manager and only discovers the failure at the next poll, so it is not immediate." },
        { id: "B", text: "Trap, sent by the agent to the manager on UDP 162 without acknowledgement", rationale: "A trap is sent immediately, but the manager never acknowledges it, so the router cannot tell whether it was lost." },
        { id: "C", text: "Inform, sent by the agent on UDP 162 and acknowledged by the manager", rationale: "Correct. An inform is an unsolicited notification that the manager must acknowledge; the agent retransmits it if no acknowledgement arrives." },
        { id: "D", text: "SetRequest, sent by the manager to change a value on the agent", rationale: "Set requests let the manager change configuration values; they do not report events from the router." },
      ],
      answer: "C",
      explanation:
        "SNMP managers poll agents with Get, GetNext and GetBulk on UDP 161 and change values with Set, while agents send unsolicited notifications to UDP 162. Traps are fire-and-forget; informs, available from SNMPv2c onwards, are acknowledged and retransmitted.",
      reference: V2,
    },
  ],
};
