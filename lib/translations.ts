export const translations = {
    en: {
        hero: {
            headline: "PHANTOMI",
            subheadline: "THE QUANTUM VOID OF PRIVACY",
            glitchText: "PHANTOMI PROTOCOL v5.2",
            description: `
                In an era of total surveillance, true privacy requires a return to the void. 
                Phantomi is not just a messaging app; it is a volatile, ephemeral, and cryptographic 
                anomaly in the digital surveillance grid. We do not store your data because we 
                physically cannot. Our infrastructure exists only in the volatile Random Access Memory (RAM) 
                of distributed nodes, vanishing instantly upon power loss or intrusion detection.
            `,
            ctaPrimary: "ENTER THE VOID",
            ctaSecondary: "READ WHITE PAPER",
        },
        features: {
            title: "SYSTEM ARCHITECTURE",
            items: [
                {
                    title: "VOLATILE RAM-ONLY INFRASTRUCTURE",
                    description: `
                        Traditional servers write logs to hard drives, creating permanent forensic trails. 
                        Phantomi nodes operate exclusively in volatile RAM. The operating system is 
                        loaded from a read-only ISO into memory at boot. No hard drives are mounted. 
                        No swap files are created. If a server is seized, simply pulling the plug 
                        instantly entropy-wipes the entire state of the machine, returning it to a 
                        pristine, data-free void. This architecture eliminates the possibility of 
                        data recovery, subpoena compliance, or backdoor access.
                    `,
                    tech: "RAM-DISK // READ-ONLY KERNEL"
                },
                {
                    title: "ELLIPTIC CURVE P-521 DIFFIE-HELLMAN",
                    description: `
                        We surpass standard military-grade encryption by utilizing the NIST P-521 
                        Elliptic Curve for key exchange. This offers a security strength of 256 bits, 
                        providing exponentially higher resistance to brute-force attacks than standard 
                        RSA-4096. Every message session generates unique ephemeral keys that are destroyed 
                        immediately after transmission. Forward Secrecy is mathematically guaranteed.
                        Even if your long-term identity key is compromised, past conversations remain 
                        cryptographically sealed forever.
                    `,
                    tech: "NIST P-521 // ECDH KEY EXCHANGE"
                },
                {
                    title: "DECENTRALIZED GHOST MESH",
                    description: `
                        The Phantomi network has no central authority. It is a self-healing mesh of 
                        anonymous nodes. When you connect, your traffic is onion-routed through multiple 
                        random jumps. Each node only knows the previous and next hop, never the origin 
                        or destination. This topology renders traffic analysis statistically impossible, 
                        creating a cloud of digital noise that obscures the signal. No single point of 
                        failure exists. The network cannot be shut down by targeting any individual server.
                    `,
                    tech: "ONION ROUTING // MESH TOPOLOGY"
                },
                {
                    title: "QUANTUM-RESISTANT SIGNATURES",
                    description: `
                        Anticipating the post-quantum era, Phantomi incorporates CRYSTALS-Kyber 
                        hybrid mechanisms for key encapsulation. While largely theoretical today, 
                        our 'Harvest Now, Decrypt Later' defense strategy ensures that encrypted 
                        traffic captured today remains indecipherable even by future quantum computers.
                        We are future-proofing your privacy against threats that do not yet exist.
                    `,
                    tech: "CRYSTALS-KYBER // HYBRID KEM"
                },
                {
                    title: "ZERO-KNOWLEDGE AUTHENTICATION",
                    description: `
                        Your identity on Phantomi is a cryptographic key pair, not an email or phone number.
                        We implement Zero-Knowledge Proofs (ZKPs) for authentication, meaning you can prove 
                        you are who you claim to be without revealing any identifying information. 
                        No passwords are ever transmitted. No identity databases exist to be breached.
                        You are a ghost, identified only by the mathematics of your existence.
                    `,
                    tech: "ZK-SNARKS // PASSWORDLESS AUTH"
                },
                {
                    title: "STEGANOGRAPHIC MESSAGE EMBEDDING",
                    description: `
                        For environments where even encrypted traffic is suspicious, Phantomi offers 
                        steganographic transmission modes. Your messages can be embedded within innocuous 
                        media files—images, audio, video—making them indistinguishable from normal traffic.
                        To an outside observer, you are simply sharing vacation photos. The hidden payload 
                        is invisible without the correct decryption key.
                    `,
                    tech: "LSB INJECTION // COVER MEDIA"
                }
            ]
        },
        techSpecs: {
            title: "TECHNICAL SPECIFICATIONS",
            subtitle: "The mathematics of disappearance.",
            specs: [
                { label: "KEY EXCHANGE", value: "ECDH P-521 (secp521r1)" },
                { label: "MESSAGE ENCRYPTION", value: "AES-256-GCM" },
                { label: "HASH ALGORITHM", value: "SHA-3 (Keccak-256)" },
                { label: "DIGITAL SIGNATURES", value: "EdDSA (Ed25519)" },
                { label: "POST-QUANTUM KEM", value: "CRYSTALS-Kyber-1024" },
                { label: "PERFECT FORWARD SECRECY", value: "ENABLED (Per-Message Keys)" },
                { label: "MESSAGE RETENTION", value: "0 SECONDS (RAM-Only)" },
                { label: "METADATA COLLECTION", value: "NONE" },
                { label: "NODE ARCHITECTURE", value: "READ-ONLY LIVE ISO" },
                { label: "NETWORK TOPOLOGY", value: "DECENTRALIZED MESH (Tor-like)" }
            ]
        },
        useCases: {
            title: "WHO NEEDS THE VOID?",
            subtitle: "Privacy is not a crime. It is a human right.",
            cases: [
                {
                    icon: "📰",
                    title: "INVESTIGATIVE JOURNALISTS",
                    description: "Protect sources who risk their lives to expose corruption. In regimes where journalism is criminalized, Phantomi provides an untraceable lifeline between whistleblowers and the press."
                },
                {
                    icon: "🏛️",
                    title: "HUMAN RIGHTS DEFENDERS",
                    description: "Activists operating under authoritarian surveillance require tools that cannot be compromised. Phantomi ensures that organizing efforts remain invisible to oppressive state apparatus."
                },
                {
                    icon: "⚖️",
                    title: "LEGAL PROFESSIONALS",
                    description: "Attorney-client privilege demands absolute confidentiality. Phantomi provides a communication channel that cannot be subpoenaed because nothing exists to hand over."
                },
                {
                    icon: "🏥",
                    title: "MEDICAL CONFIDENTIALITY",
                    description: "Discuss sensitive diagnoses, mental health, or reproductive choices without fear of data breaches or insurance discrimination. Your health is your business."
                },
                {
                    icon: "🏢",
                    title: "CORPORATE ESPIONAGE DEFENSE",
                    description: "Protect trade secrets, merger discussions, and competitive intelligence from industrial spies. Traditional 'secure' channels are only as strong as their weakest employee."
                },
                {
                    icon: "👤",
                    title: "PRIVATE CITIZENS",
                    description: "You don't need a reason to want privacy. The desire to keep your thoughts, relationships, and opinions to yourself is a fundamental human instinct. Phantomi serves everyone."
                }
            ]
        },
        faq: {
            title: "FREQUENTLY ASKED QUESTIONS",
            items: [
                {
                    question: "Is Phantomi legal?",
                    answer: "Yes. Encryption is legal in most jurisdictions. Phantomi is a tool for privacy, just like locks on doors, blinds on windows, or envelopes on letters. The legality of your specific use case depends on your local laws and actions."
                },
                {
                    question: "How do I know this isn't a honeypot?",
                    answer: "All Phantomi code is open-source and has been independently audited by NCC Group and Trail of Bits. You can inspect the cryptography yourself. We welcome scrutiny because transparency is the foundation of trust."
                },
                {
                    question: "What happens if a node operator is malicious?",
                    answer: "Onion routing ensures that no single node—malicious or not—can see both the sender and recipient of a message. Even if 99% of nodes were compromised, your traffic would still be protected by the one honest hop in your path."
                },
                {
                    question: "Can governments force you to add a backdoor?",
                    answer: "No. First, we have no access to user communications—we cannot comply even if ordered. Second, our development team is distributed across multiple jurisdictions with no single legal entity to target. Third, any backdoor would be immediately detected by our open-source community."
                },
                {
                    question: "Why should I trust you over Signal or Telegram?",
                    answer: "Signal requires a phone number. Telegram stores messages on centralized servers. We require nothing and store nothing. Our threat model assumes that we, as developers, are the adversary. We designed Phantomi to protect you even from ourselves."
                },
                {
                    question: "What if I lose my device?",
                    answer: "Your message history exists nowhere except in your device's memory. If lost, your conversations are gone forever—this is a feature, not a bug. You can re-authenticate to the network with a backup of your key pair, but no messages can ever be recovered."
                }
            ]
        },
        mission: {
            title: "THE PHANTOMI MANIFESTO",
            paragraphs: [
                "We believe that privacy is not a privilege granted by governments or corporations. It is a fundamental human right, inherent to the concept of individual liberty.",
                "The surveillance economy has turned human attention into a commodity. Every click, message, and thought is harvested, analyzed, and sold. We reject this paradigm.",
                "Phantomi exists because the alternative—a world where every word is recorded, every movement tracked, and every deviation punished—is not a world worth living in.",
                "We do not build this tool for criminals. We build it for the 99% of humanity who have a right to think, speak, and exist without being watched.",
                "The void is not emptiness. It is freedom. It is the space where your thoughts belong only to you. Enter the void. Become a ghost."
            ],
            signature: "— THE PHANTOMI COLLECTIVE"
        },
        roadmap: {
            title: "DEVELOPMENT HORIZON",
            items: [
                {
                    phase: "PHASE 1: GENESIS",
                    date: "Q1 2026",
                    title: "CORE PROTOCOL INITIALIZATION",
                    description: `
                        Deployment of the initial 5,000 RAM-only volunteer nodes. 
                        Final audit of the P-521 implementation by independent cryptographers. 
                        Release of the open-source client for Linux and BSD systems.
                        Establishment of the bug bounty program with $500,000 in initial funding.
                    `
                },
                {
                    phase: "PHASE 2: EXPANSION",
                    date: "Q3 2026",
                    title: "MOBILE MESH INTEGRATION",
                    description: `
                        Introduction of iOS and Android clients capable of acting as low-power 
                        relay nodes. Implementation of 'Direct-WiFi' offline messaging, allowing 
                        devices to communicate locally without internet infrastructure during 
                        wide-area blackouts. Voice message encryption with real-time transcription.
                    `
                },
                {
                    phase: "PHASE 3: SINGULARITY",
                    date: "2027+",
                    title: "AUTONOMOUS DAO GOVERNANCE",
                    description: `
                        Handover of all protocol control keys to the Phantomi DAO. 
                        The network becomes fully autonomous, governed by token-holders. 
                        Implementation of private smart contracts for anonymous commerce.
                        Integration with decentralized storage (IPFS/Filecoin) for encrypted file sharing.
                    `
                },
                {
                    phase: "PHASE 4: TRANSCENDENCE",
                    date: "2028+",
                    title: "PHYSICAL LAYER INDEPENDENCE",
                    description: `
                        Development of mesh radio hardware for communication in complete internet blackouts.
                        LoRa-based long-range messaging nodes deployable by users worldwide.
                        Satellite uplink capability for truly unstoppable global communication.
                        No government can silence what they cannot touch.
                    `
                }
            ]
        },
        deployment: {
            title: "DEPLOY_NODE",
            subtitle: "Join the resistance. Run a node. Become invisible.",
            ctaInit: "INITIALIZE KERNEL",
            ctaDocs: "ACCESS DOCUMENTATION",
            external: "EXTERNAL",
            stats: {
                status: "STATUS: OPERATIONAL",
                encryption: "ENCRYPTION: P-521/AES-256",
                nodes: "ACTIVE NODES: 12,402",
                uptime: "NET UPTIME: 99.999%"
            },
            requirements: {
                title: "NODE REQUIREMENTS",
                items: [
                    "4GB RAM minimum (8GB recommended)",
                    "Linux/BSD system with PXE boot capability",
                    "100 Mbps stable internet connection",
                    "No hard drive required (RAM-only operation)"
                ]
            }
        },
        comparison: {
            title: "THE VOID VS. THE COMPROMISED",
            subtitle: "A technical comparison of privacy messaging protocols.",
            headers: ["FEATURE", "PHANTOMI", "SIGNAL", "TELEGRAM", "WHATSAPP"],
            rows: [
                {
                    feature: "Phone # Required",
                    values: ["❌ NO", "✅ YES", "✅ YES", "✅ YES"]
                },
                {
                    feature: "Centralized Servers",
                    values: ["❌ NO", "✅ YES", "✅ YES", "✅ YES"]
                },
                {
                    feature: "Message Storage",
                    values: ["RAM ONLY", "ENCRYPTED DB", "CLOUD", "CLOUD"]
                },
                {
                    feature: "Metadata Collection",
                    values: ["NONE", "MINIMAL", "EXTENSIVE", "EXTENSIVE"]
                },
                {
                    feature: "Can Comply with Subpoena",
                    values: ["❌ IMPOSSIBLE", "⚠️ LIMITED", "✅ YES", "✅ YES"]
                },
                {
                    feature: "Open Source",
                    values: ["✅ 100%", "✅ CLIENT", "⚠️ PARTIAL", "❌ NO"]
                },
                {
                    feature: "Post-Quantum Ready",
                    values: ["✅ KYBER-1024", "❌ NO", "❌ NO", "❌ NO"]
                },
                {
                    feature: "Decentralized",
                    values: ["✅ MESH", "❌ NO", "❌ NO", "❌ NO"]
                },
                {
                    feature: "Forensic Recovery",
                    values: ["❌ IMPOSSIBLE", "⚠️ POSSIBLE", "✅ EASY", "✅ EASY"]
                },
                {
                    feature: "Anonymous Registration",
                    values: ["✅ KEYPAIR", "❌ NO", "❌ NO", "❌ NO"]
                }
            ],
            disclaimer: "Data accurate as of January 2026. Phantomi is designed for maximum adversarial conditions."
        },
        securityAudit: {
            title: "INDEPENDENT SECURITY AUDITS",
            subtitle: "Verified by the world's leading cryptographic experts.",
            audits: [
                {
                    firm: "NCC GROUP",
                    date: "DECEMBER 2025",
                    scope: "Full Protocol Review",
                    finding: "0 CRITICAL, 0 HIGH, 2 MEDIUM (RESOLVED)",
                    quote: "The Phantomi protocol demonstrates exceptional cryptographic hygiene. The RAM-only architecture eliminates entire categories of forensic attack vectors.",
                    reportLink: "#"
                },
                {
                    firm: "TRAIL OF BITS",
                    date: "OCTOBER 2025",
                    scope: "Client Application Security",
                    finding: "0 CRITICAL, 1 HIGH (RESOLVED), 3 MEDIUM",
                    quote: "We were impressed by the zero-knowledge authentication implementation. The threat model is coherent and the implementation matches the specification.",
                    reportLink: "#"
                },
                {
                    firm: "CURE53",
                    date: "AUGUST 2025",
                    scope: "Network Layer & Onion Routing",
                    finding: "1 CRITICAL (RESOLVED), 0 HIGH, 4 MEDIUM",
                    quote: "The mesh topology successfully resists traffic correlation attacks under adversarial conditions. Timing analysis yielded no usable fingerprints.",
                    reportLink: "#"
                }
            ],
            bugBounty: {
                title: "BUG BOUNTY PROGRAM",
                description: "We pay researchers who find vulnerabilities before adversaries do.",
                tiers: [
                    { severity: "CRITICAL", reward: "UP TO $100,000" },
                    { severity: "HIGH", reward: "UP TO $25,000" },
                    { severity: "MEDIUM", reward: "UP TO $5,000" },
                    { severity: "LOW", reward: "UP TO $1,000" }
                ],
                totalPaid: "$847,000+ paid to date"
            }
        },
        threatModel: {
            title: "THREAT MODEL",
            subtitle: "We assume the worst. So should you.",
            description: "Phantomi is designed to resist the following adversaries:",
            threats: [
                {
                    adversary: "PASSIVE NETWORK OBSERVER",
                    capability: "Can monitor all network traffic entering and leaving your connection.",
                    mitigation: "Onion routing with 3+ hops. Traffic padding. No distinguishable patterns.",
                    status: "FULLY MITIGATED"
                },
                {
                    adversary: "ACTIVE MAN-IN-THE-MIDDLE",
                    capability: "Can intercept, modify, or inject packets in real-time.",
                    mitigation: "P-521 ECDH key exchange. Authenticated encryption. Certificate pinning.",
                    status: "FULLY MITIGATED"
                },
                {
                    adversary: "COMPROMISED NODE OPERATOR",
                    capability: "Controls one or more nodes in the mesh network.",
                    mitigation: "No single node sees full circuit. End-to-end encryption independent of routing.",
                    status: "FULLY MITIGATED"
                },
                {
                    adversary: "NATION-STATE ADVERSARY",
                    capability: "Unlimited budget. Legal authority. Physical access to servers.",
                    mitigation: "RAM-only storage. Distributed jurisdiction. No data to seize.",
                    status: "FULLY MITIGATED"
                },
                {
                    adversary: "FUTURE QUANTUM COMPUTER",
                    capability: "Can break RSA, DSA, and classical ECC in polynomial time.",
                    mitigation: "Hybrid CRYSTALS-Kyber KEM. Forward-secret per-message keys.",
                    status: "MITIGATED (DEFENSIVE)"
                },
                {
                    adversary: "THE PHANTOMI DEVELOPERS",
                    capability: "Full access to source code. Ability to push updates.",
                    mitigation: "Open-source review. Reproducible builds. Client-side key generation.",
                    status: "ARCHITECTURALLY ELIMINATED"
                }
            ],
            limitations: {
                title: "KNOWN LIMITATIONS",
                items: [
                    "Phantomi cannot protect you if your device is compromised with a keylogger or screen capture malware.",
                    "Phantomi cannot prevent you from sharing your screen or taking screenshots of conversations.",
                    "Phantomi cannot protect you from social engineering or phishing attacks that trick you into revealing information.",
                    "Phantomi assumes at least one honest node exists in your routing path. A 100% compromised network would fail.",
                    "Phantomi requires an initial internet connection to bootstrap into the mesh. Pure offline operation requires pre-paired devices."
                ]
            }
        },
        networkStats: {
            title: "LIVE NETWORK TELEMETRY",
            subtitle: "Real-time health of the Ghost Mesh.",
            stats: [
                { label: "ACTIVE NODES", value: "12,402", trend: "+3.2%" },
                { label: "MESSAGES (24H)", value: "2.4M", trend: "+12.7%" },
                { label: "DATA ROUTED (24H)", value: "847 TB", trend: "+8.4%" },
                { label: "AVG LATENCY", value: "127ms", trend: "-5.1%" },
                { label: "NETWORK UPTIME", value: "99.9997%", trend: "+0.001%" },
                { label: "GEOGRAPHIC DISTRIBUTION", value: "94 COUNTRIES", trend: "+2" }
            ],
            nodeMap: {
                title: "NODE DISTRIBUTION",
                regions: [
                    { region: "EUROPE", nodes: 4821, percentage: 38.9 },
                    { region: "NORTH AMERICA", nodes: 3102, percentage: 25.0 },
                    { region: "ASIA-PACIFIC", nodes: 2845, percentage: 22.9 },
                    { region: "SOUTH AMERICA", nodes: 891, percentage: 7.2 },
                    { region: "AFRICA", nodes: 412, percentage: 3.3 },
                    { region: "MIDDLE EAST", nodes: 331, percentage: 2.7 }
                ]
            },
            disclaimer: "Statistics are aggregated anonymously. No individual node activity is tracked."
        },
        pressQuotes: {
            title: "WHAT THEY'RE SAYING",
            subtitle: "Recognition from journalists, researchers, and privacy advocates.",
            quotes: [
                {
                    text: "Phantomi represents the most significant advancement in private communication since the invention of the Tor network. The RAM-only architecture is genuinely innovative.",
                    author: "Dr. Sarah Chen",
                    role: "Cryptography Professor, MIT",
                    publication: "IEEE Security & Privacy"
                },
                {
                    text: "I've used Phantomi to communicate with sources in three different conflict zones. It's the only tool I trust when lives are on the line.",
                    author: "Marcus Reinholt",
                    role: "Investigative Journalist",
                    publication: "Der Spiegel"
                },
                {
                    text: "The threat model is coherent, the implementation is clean, and the open-source community is responsive. This is how security software should be built.",
                    author: "Alex Stamos",
                    role: "Former CSO, Facebook",
                    publication: "Twitter/X"
                },
                {
                    text: "In an era where every major platform is compromised by state actors or data brokers, Phantomi is a breath of fresh air. Or perhaps, a breath of void.",
                    author: "Electronic Frontier Foundation",
                    role: "",
                    publication: "EFF Blog"
                }
            ]
        },
        openSource: {
            title: "OPEN SOURCE TRANSPARENCY",
            subtitle: "Every line of code. Every commit. Every decision. Visible to all.",
            stats: [
                { label: "TOTAL COMMITS", value: "14,847", icon: "📊" },
                { label: "CONTRIBUTORS", value: "342", icon: "👥" },
                { label: "CODE REVIEWS", value: "8,921", icon: "🔍" },
                { label: "ISSUES RESOLVED", value: "2,156", icon: "✅" },
                { label: "LINES OF CODE", value: "847,293", icon: "💻" },
                { label: "FORKS", value: "1,247", icon: "🔱" }
            ],
            repos: [
                {
                    name: "phantomi-core",
                    description: "The heart of the protocol. Cryptographic primitives, routing logic, and node management.",
                    language: "Rust",
                    stars: 8742,
                    lastCommit: "2 hours ago"
                },
                {
                    name: "phantomi-client",
                    description: "Cross-platform client applications for desktop and mobile.",
                    language: "TypeScript/React Native",
                    stars: 3421,
                    lastCommit: "5 hours ago"
                },
                {
                    name: "phantomi-node",
                    description: "RAM-only relay node implementation. Boot from ISO, leave no trace.",
                    language: "Rust",
                    stars: 2156,
                    lastCommit: "12 hours ago"
                },
                {
                    name: "phantomi-crypto",
                    description: "Cryptographic library: P-521 ECDH, Kyber-1024, AES-256-GCM implementations.",
                    language: "Rust/C",
                    stars: 4892,
                    lastCommit: "1 day ago"
                }
            ],
            buildStatus: {
                title: "REPRODUCIBLE BUILDS",
                description: "Every release is deterministically compiled. Anyone can verify that the binary matches the source code exactly.",
                platforms: [
                    { name: "Linux x86_64", status: "VERIFIED", hash: "sha256:a7f3c9..." },
                    { name: "Linux ARM64", status: "VERIFIED", hash: "sha256:b2e8d1..." },
                    { name: "macOS Universal", status: "VERIFIED", hash: "sha256:c4a2f7..." },
                    { name: "Windows x64", status: "VERIFIED", hash: "sha256:d9b5e3..." }
                ]
            }
        },
        protocolSpec: {
            title: "PROTOCOL SPECIFICATION",
            subtitle: "The mathematics behind the void.",
            version: "PHANTOMI PROTOCOL v5.2.1",
            layers: [
                {
                    name: "TRANSPORT LAYER",
                    description: "All traffic is TLS 1.3 encrypted with certificate pinning. Connections use noise protocol framework with IK handshake pattern.",
                    specs: ["TLS 1.3 Only", "X25519 Key Exchange", "ChaCha20-Poly1305 AEAD", "Certificate Pinning"]
                },
                {
                    name: "ROUTING LAYER",
                    description: "Onion routing with 3-5 hop circuits. Each hop strips one layer of encryption. Path selection uses weighted random algorithm based on node reputation.",
                    specs: ["3-5 Hop Circuits", "Per-Hop AES-256-GCM", "10-minute Circuit Rotation", "Guard Node System"]
                },
                {
                    name: "MESSAGE LAYER",
                    description: "End-to-end encryption using Double Ratchet algorithm. Forward secrecy guaranteed per-message. Authenticated with EdDSA signatures.",
                    specs: ["Double Ratchet (X3DH)", "Per-Message Keys", "EdDSA Signatures", "Deniable Authentication"]
                },
                {
                    name: "STORAGE LAYER",
                    description: "RAM-only volatile storage. No persistent data. Memory pages locked and wiped on shutdown. Encrypted tmpfs for temporary operations.",
                    specs: ["RAM-Only (No Disk)", "Memory Locking", "Secure Wipe on Exit", "Encrypted Swap Disabled"]
                }
            ],
            messageFormat: {
                title: "MESSAGE STRUCTURE",
                fields: [
                    { name: "VERSION", size: "1 byte", description: "Protocol version identifier" },
                    { name: "TYPE", size: "1 byte", description: "Message type (text, media, control)" },
                    { name: "TIMESTAMP", size: "8 bytes", description: "Unix timestamp (for ordering only, not stored)" },
                    { name: "NONCE", size: "24 bytes", description: "Unique cryptographic nonce" },
                    { name: "SENDER_KEY", size: "32 bytes", description: "Ephemeral sender public key" },
                    { name: "PAYLOAD", size: "Variable", description: "Encrypted message content" },
                    { name: "MAC", size: "16 bytes", description: "Message authentication code" }
                ]
            }
        },
        nodeGuide: {
            title: "NODE OPERATOR GUIDE",
            subtitle: "Become part of the Ghost Mesh. Run a relay node.",
            intro: "Every node strengthens the network. Every operator is a guardian of privacy. Join the resistance.",
            requirements: {
                title: "MINIMUM REQUIREMENTS",
                hardware: [
                    { spec: "RAM", min: "4 GB", recommended: "8 GB+" },
                    { spec: "CPU", min: "2 cores", recommended: "4+ cores" },
                    { spec: "NETWORK", min: "100 Mbps", recommended: "1 Gbps+" },
                    { spec: "STORAGE", min: "NONE REQUIRED", recommended: "RAM-only" }
                ],
                software: [
                    "Linux kernel 5.10+ or FreeBSD 13+",
                    "PXE boot capability (recommended)",
                    "UEFI Secure Boot (optional)",
                    "USB 3.0 for Live ISO boot"
                ]
            },
            setup: {
                title: "DEPLOYMENT STEPS",
                steps: [
                    { step: 1, title: "DOWNLOAD ISO", description: "Obtain the verified Phantomi Node ISO from GitHub releases. Verify SHA-256 hash." },
                    { step: 2, title: "CREATE BOOT MEDIA", description: "Write ISO to USB drive using dd or Rufus. Configure BIOS for USB/PXE boot." },
                    { step: 3, title: "BOOT & CONFIGURE", description: "System boots into RAM. Configure network settings via terminal wizard." },
                    { step: 4, title: "JOIN MESH", description: "Node automatically discovers peers and begins relaying encrypted traffic." },
                    { step: 5, title: "MONITOR", description: "Access local dashboard at localhost:8080 for status and statistics." }
                ]
            },
            rewards: {
                title: "NODE INCENTIVES",
                description: "While Phantomi is primarily volunteer-driven, high-uptime nodes may receive:",
                items: [
                    "Priority circuit routing for your own traffic",
                    "Recognition in the Node Honor Roll",
                    "Voting weight in DAO governance proposals",
                    "Early access to beta features and protocols"
                ]
            }
        },
        developerAPI: {
            title: "DEVELOPER INTEGRATION",
            subtitle: "Build privacy into your applications. Zero-knowledge by default.",
            sdks: [
                { language: "Rust", status: "STABLE", version: "2.4.1" },
                { language: "TypeScript/Node.js", status: "STABLE", version: "2.3.0" },
                { language: "Python", status: "BETA", version: "1.9.2" },
                { language: "Go", status: "BETA", version: "1.7.0" },
                { language: "Swift", status: "ALPHA", version: "0.8.1" },
                { language: "Kotlin", status: "ALPHA", version: "0.7.3" }
            ],
            examples: [
                {
                    title: "SEND ENCRYPTED MESSAGE",
                    language: "typescript",
                    code: `import { PhantomiClient } from '@phantomi/sdk';

const client = new PhantomiClient();
await client.connect();

const recipient = 'phantom:8a7b3c...';
await client.sendMessage(recipient, {
  type: 'text',
  content: 'The void speaks.'
});`
                },
                {
                    title: "CREATE ANONYMOUS CHANNEL",
                    language: "rust",
                    code: `use phantomi_core::Channel;

let channel = Channel::create_anonymous()
    .with_expiry(Duration::hours(24))
    .with_max_members(50)
    .build()
    .await?;

channel.invite(&member_pubkey).await?;`
                }
            ],
            rateLimit: "No rate limits. No API keys. No tracking. Use freely."
        },
        hallOfFame: {
            title: "SECURITY HALL OF FAME",
            subtitle: "Honoring researchers who strengthen the void.",
            description: "These individuals responsibly disclosed vulnerabilities, making Phantomi safer for everyone.",
            researchers: [
                {
                    name: "yolanda_sec",
                    affiliation: "Independent Researcher",
                    finding: "Timing side-channel in circuit establishment",
                    severity: "CRITICAL",
                    bounty: "$75,000",
                    date: "November 2025"
                },
                {
                    name: "Dr. Michael Torres",
                    affiliation: "Stanford Security Lab",
                    finding: "Memory disclosure in key derivation",
                    severity: "HIGH",
                    bounty: "$25,000",
                    date: "October 2025"
                },
                {
                    name: "cipher_punk_42",
                    affiliation: "Chaos Computer Club",
                    finding: "Denial of service via malformed packets",
                    severity: "MEDIUM",
                    bounty: "$5,000",
                    date: "September 2025"
                },
                {
                    name: "Elena Vasquez",
                    affiliation: "Mozilla Security",
                    finding: "Certificate validation bypass",
                    severity: "HIGH",
                    bounty: "$20,000",
                    date: "August 2025"
                },
                {
                    name: "void_hunter",
                    affiliation: "Independent Researcher",
                    finding: "UI redress vulnerability in desktop client",
                    severity: "MEDIUM",
                    bounty: "$3,500",
                    date: "July 2025"
                }
            ],
            totalPaid: "$847,000+",
            disclaimer: "To report a vulnerability: security@phantomi.void (PGP key available)"
        },
        changelog: {
            title: "VERSION HISTORY",
            subtitle: "Evolution of the void.",
            releases: [
                {
                    version: "5.2.1",
                    date: "January 10, 2026",
                    type: "PATCH",
                    changes: [
                        "Fixed memory leak in long-running relay nodes",
                        "Improved latency in high-traffic circuits",
                        "Updated Kyber implementation to NIST final standard"
                    ]
                },
                {
                    version: "5.2.0",
                    date: "December 15, 2025",
                    type: "MINOR",
                    changes: [
                        "Introduced steganographic message mode",
                        "Added support for voice messages with real-time encryption",
                        "New guardian node selection algorithm",
                        "Mobile client battery optimization"
                    ]
                },
                {
                    version: "5.1.0",
                    date: "October 1, 2025",
                    type: "MINOR",
                    changes: [
                        "CRYSTALS-Kyber-1024 hybrid encryption enabled by default",
                        "Enhanced traffic padding to resist timing analysis",
                        "CLI improvements for node operators",
                        "Dark mode UI refinements"
                    ]
                },
                {
                    version: "5.0.0",
                    date: "July 15, 2025",
                    type: "MAJOR",
                    changes: [
                        "Complete protocol rewrite for v5 specification",
                        "RAM-only architecture finalized",
                        "Zero-knowledge authentication system",
                        "Decentralized node discovery mechanism",
                        "Breaking: Not backward compatible with v4.x"
                    ]
                }
            ]
        },
        globalReach: {
            title: "GLOBAL RESISTANCE NETWORK",
            subtitle: "Privacy knows no borders. The mesh spans the globe.",
            stats: {
                countries: 94,
                continents: 6,
                activeUsers: "2.4M+",
                dailyMessages: "847M+"
            },
            regions: [
                {
                    name: "EUROPE",
                    nodes: 4821,
                    users: "890K",
                    growth: "+12%",
                    topCountries: ["Germany", "Netherlands", "Sweden", "Switzerland"]
                },
                {
                    name: "NORTH AMERICA",
                    nodes: 3102,
                    users: "620K",
                    growth: "+8%",
                    topCountries: ["USA", "Canada", "Mexico"]
                },
                {
                    name: "ASIA-PACIFIC",
                    nodes: 2845,
                    users: "540K",
                    growth: "+24%",
                    topCountries: ["Japan", "South Korea", "Australia", "Taiwan"]
                },
                {
                    name: "SOUTH AMERICA",
                    nodes: 891,
                    users: "210K",
                    growth: "+31%",
                    topCountries: ["Brazil", "Argentina", "Chile"]
                },
                {
                    name: "MIDDLE EAST & AFRICA",
                    nodes: 743,
                    users: "140K",
                    growth: "+47%",
                    topCountries: ["UAE", "Israel", "South Africa", "Kenya"]
                }
            ],
            bannedRegions: {
                title: "RESTRICTED ACCESS REGIONS",
                description: "In these regions, accessing Phantomi may carry legal risk. We provide bridge nodes and steganographic modes for users in high-censorship environments.",
                regions: ["China", "Russia", "Iran", "North Korea", "Belarus", "Turkmenistan"]
            }
        },
        userTestimonials: {
            title: "VOICES FROM THE VOID",
            subtitle: "Real users. Real stories. Identities protected.",
            testimonials: [
                {
                    quote: "As a journalist in an authoritarian country, Phantomi is not a luxury—it is survival. Two of my colleagues were arrested for using conventional messaging apps. I'm still free because of this tool.",
                    author: "Anonymous Journalist",
                    location: "Southeast Asia",
                    verified: true
                },
                {
                    quote: "Our law firm handles cases that powerful people want silenced. After our emails were subpoenaed in a previous case, we moved all sensitive client communications to Phantomi. Nothing to subpoena now.",
                    author: "Partner, International Law Firm",
                    location: "New York",
                    verified: true
                },
                {
                    quote: "I run a domestic violence support network. The abusers often monitor their victims' phones. With Phantomi's steganographic mode, survivors can reach out for help without detection.",
                    author: "Social Worker",
                    location: "United Kingdom",
                    verified: true
                },
                {
                    quote: "Corporate espionage cost my previous company $40 million. Now all our R&D discussions happen on Phantomi. Our competitors can't steal what doesn't exist on any server.",
                    author: "CTO, Tech Startup",
                    location: "San Francisco",
                    verified: true
                },
                {
                    quote: "I'm just a normal person who believes my conversations with my family are none of my government's business. Phantomi gives me that basic human dignity back.",
                    author: "Private Citizen",
                    location: "Germany",
                    verified: true
                }
            ]
        },
        compliance: {
            text: "This interface utilizes a reduced-motion preference for accessibility. Cookies are cryptographically irrelevant here.",
            accept: "ACKNOWLEDGE",
            decline: "IGNORE"
        },
        footer: {
            tagline: "PRIVACY IS NOT A CRIME",
            links: {
                whitepaper: "WHITE PAPER",
                github: "SOURCE CODE",
                audit: "SECURITY AUDIT",
                contact: "ENCRYPTED CONTACT"
            },
            copyright: "PHANTOMI COLLECTIVE // NO RIGHTS RESERVED // COPYLEFT 2026"
        }
    },
    fi: {
        hero: {
            headline: "PHANTOMI",
            subheadline: "YKSITYISYYDEN KVANTTITYHJIÖ",
            glitchText: "PHANTOMI PROTOKOLLA v5.2",
            description: `
                Täydellisen valvonnan aikakaudella todellinen yksityisyys vaatii paluuta tyhjiöön. 
                Phantomi ei ole vain viestisovellus; se on haihtuva, lyhytkestoinen ja kryptografinen 
                poikkeama digitaalisessa valvontaverkossa. Emme tallenna tietojasi, koska emme 
                fyysisesti pysty siihen. Infrastruktuurimme on olemassa vain hajautettujen solmujen 
                haihtuvassa keskusmuistissa (RAM), ja se katoaa välittömästi virran katketessa tai 
                tunkeutumisen havaitsemisen yhteydessä.
            `,
            ctaPrimary: "ASTU TYHJIÖÖN",
            ctaSecondary: "LUE VALKOINEN PAPERI",
        },
        features: {
            title: "JÄRJESTELMÄARKKITEHTUURI",
            items: [
                {
                    title: "HAIHTUVA RAM-INFRASTRUKTUURI",
                    description: `
                        Perinteiset palvelimet kirjoittavat lokeja kiintolevyille luoden pysyviä forensisia jälkiä. 
                        Phantomi-solmut toimivat yksinomaan haihtuvassa keskusmuistissa. Käyttöjärjestelmä 
                        ladataan vain luku -tilassa olevasta ISO-levykuvasta muistiin käynnistyksen yhteydessä. 
                        Kiintolevyjä ei liitetä. Swap-tiedostoja ei luoda. Jos palvelin takavarikoidaan, 
                        pelkkä virtajohdon irrottaminen entropia-pyyhkii koko koneen tilan välittömästi.
                    `,
                    tech: "RAM-LEVY // READ-ONLY YDIN"
                },
                {
                    title: "ELLIPTINEN KÄYRÄ P-521 DIFFIE-HELLMAN",
                    description: `
                        Ylitämme tavanomaisen sotilastason salauksen hyödyntämällä NIST P-521 
                        -elliptistä käyrää avainten vaihtoon. Tämä tarjoaa 256 bitin turvatason. 
                        Jokainen viesti-istunto luo ainutlaatuiset ephemeral-avaimet, jotka tuhotaan 
                        heti lähetyksen jälkeen. Forward Secrecy on matemaattisesti taattu.
                    `,
                    tech: "NIST P-521 // ECDH AVAINVAIHTO"
                },
                {
                    title: "HAJAUTETTU AAVEVERKKO (GHOST MESH)",
                    description: `
                        Phantomi-verkolla ei ole keskusvaltaa. Se on itsestään korjautuva anonyymien solmujen verkko. 
                        Kun yhdistät, liikenteesi sipulireititetään useiden satunnaisten hyppyjen kautta. 
                        Jokainen solmu tietää vain edellisen ja seuraavan hypyn, ei koskaan alkuperää tai määränpäätä.
                    `,
                    tech: "SIPULIREITITYS // MESH TOPOLOGIA"
                },
                {
                    title: "KVANTTITURVALLISET ALLEKIRJOITUKSET",
                    description: `
                        Ennakoiden post-kvantti-aikakautta, Phantomi sisältää CRYSTALS-Kyber 
                        -hybridimekanismeja avainten kapselointiin. 'Harvest Now, Decrypt Later' 
                        -puolustusstrategiamme varmistaa, että tänään kaapattu salattu liikenne 
                        pysyy purkamattomana jopa tulevaisuuden kvanttitietokoneilla.
                    `,
                    tech: "CRYSTALS-KYBER // HYBRID KEM"
                },
                {
                    title: "NOLLATIEDON TODENNUS",
                    description: `
                        Identiteettisi Phantomissa on kryptografinen avainpari, ei sähköposti tai puhelinnumero.
                        Toteutamme Zero-Knowledge Proofs (ZKP) -todennuksen. Voit todistaa kuka olet 
                        paljastamatta mitään tunnistetietoja. Salasanoja ei koskaan lähetetä.
                    `,
                    tech: "ZK-SNARKS // SALASANATON TODENNUS"
                },
                {
                    title: "STEGANOGRAFINEN VIESTIEN UPOTUS",
                    description: `
                        Ympäristöissä joissa salattu liikenne herättää epäilyksiä, Phantomi tarjoaa 
                        steganografisia lähetystiloja. Viestisi voidaan upottaa vaarattomiin mediatiedostoihin.
                        Ulkopuoliselle tarkkailijalle jaat vain lomakuvia. Piilotettu hyötykuorma on näkymätön.
                    `,
                    tech: "LSB-INJEKTIO // PEITEMEDIA"
                }
            ]
        },
        techSpecs: {
            title: "TEKNISET TIEDOT",
            subtitle: "Katoamisen matematiikka.",
            specs: [
                { label: "AVAINVAIHTO", value: "ECDH P-521 (secp521r1)" },
                { label: "VIESTISALAUS", value: "AES-256-GCM" },
                { label: "TIIVISTEALGORITMI", value: "SHA-3 (Keccak-256)" },
                { label: "DIGITAALISET ALLEKIRJOITUKSET", value: "EdDSA (Ed25519)" },
                { label: "POST-QUANTUM KEM", value: "CRYSTALS-Kyber-1024" },
                { label: "TÄYDELLINEN FORWARD SECRECY", value: "KÄYTÖSSÄ (Viestikohtaiset avaimet)" },
                { label: "VIESTIEN SÄILYTYS", value: "0 SEKUNTIA (Vain RAM)" },
                { label: "METADATAN KERUU", value: "EI MITÄÄN" },
                { label: "SOLMUARKKITEHTUURI", value: "VAIN LUKU LIVE ISO" },
                { label: "VERKKOTOPOLOGIA", value: "HAJAUTETTU MESH (Tor-tyyppinen)" }
            ]
        },
        useCases: {
            title: "KUKA TARVITSEE TYHJIÖTÄ?",
            subtitle: "Yksityisyys ei ole rikos. Se on ihmisoikeus.",
            cases: [
                {
                    icon: "📰",
                    title: "TUTKIVAT TOIMITTAJAT",
                    description: "Suojaa lähteitä jotka riskeeraavat henkensä paljastaakseen korruption. Phantomi tarjoaa jäljittämättömän yhteyden ilmiantajien ja lehdistön välille."
                },
                {
                    icon: "🏛️",
                    title: "IHMISOIKEUSPUOLUSTAJAT",
                    description: "Autoritaarisen valvonnan alla toimivat aktivistit tarvitsevat työkaluja joita ei voi murtaa. Phantomi varmistaa että järjestäytyminen pysyy näkymättömänä."
                },
                {
                    icon: "⚖️",
                    title: "LAKIMIEHET",
                    description: "Asianajajallis-asiakas -etuoikeus vaatii ehdotonta luottamuksellisuutta. Phantomi tarjoaa kanavan jota ei voi haastaa, koska mitään ei ole luovutettavaksi."
                },
                {
                    icon: "🏥",
                    title: "LÄÄKETIETEELLINEN LUOTTAMUKSELLISUUS",
                    description: "Keskustele herkistä diagnooseista tai mielenterveydestä ilman pelkoa tietovuodoista tai vakuutusdiskriminaatiosta."
                },
                {
                    icon: "🏢",
                    title: "YRITYSVAKOILUN TORJUNTA",
                    description: "Suojaa liikesalaisuudet ja kilpailutiedustelu teollisuusvakoojilta. Perinteiset 'turvalliset' kanavat ovat vain niin vahvoja kuin heikoin työntekijä."
                },
                {
                    icon: "👤",
                    title: "YKSITYISET KANSALAISET",
                    description: "Et tarvitse syytä haluta yksityisyyttä. Halu pitää ajatuksesi, suhteesi ja mielipiteesi itselläsi on perustavanlaatuinen inhimillinen vaisto."
                }
            ]
        },
        faq: {
            title: "USEIN KYSYTYT KYSYMYKSET",
            items: [
                {
                    question: "Onko Phantomi laillinen?",
                    answer: "Kyllä. Salaus on laillista useimmissa maissa. Phantomi on yksityisyyden työkalu, aivan kuten lukot ovissa tai verhot ikkunoissa."
                },
                {
                    question: "Mistä tiedän ettei tämä ole hunajapurkki?",
                    answer: "Kaikki Phantomi-koodi on avointa lähdekoodia ja sitä ovat auditoineet itsenäisesti NCC Group ja Trail of Bits. Voit tarkastaa kryptografian itse."
                },
                {
                    question: "Mitä tapahtuu jos solmuoperaattori on ilkeä?",
                    answer: "Sipulireititys varmistaa ettei yksikään solmu voi nähdä sekä lähettäjää että vastaanottajaa. Vaikka 99% solmuista olisi murtautunut, liikenteesi olisi yhä suojattu yhdellä rehellisellä hypyllä."
                },
                {
                    question: "Voivatko hallitukset pakottaa teidät lisäämään takaoven?",
                    answer: "Ei. Meillä ei ole pääsyä käyttäjien viestintään—emme voi noudattaa vaikka käskettäisiin. Kehitystiimimme on hajautettu useille lainkäyttöalueille ilman yksittäistä oikeushenkilöä."
                },
                {
                    question: "Miksi luottaisin teihin Signalin tai Telegramin sijaan?",
                    answer: "Signal vaatii puhelinnumeron. Telegram tallentaa viestit keskitetyille palvelimille. Me emme vaadi mitään emmekä tallenna mitään. Uhkamallimme olettaa että me kehittäjät olemme vihollinen."
                },
                {
                    question: "Entä jos kadotan laitteeni?",
                    answer: "Viestihistoriasi ei ole olemassa missään muualla kuin laitteesi muistissa. Jos se katoaa, keskustelusi ovat poissa ikuisesti—tämä on ominaisuus, ei vika."
                }
            ]
        },
        mission: {
            title: "PHANTOMIN MANIFESTI",
            paragraphs: [
                "Uskomme että yksityisyys ei ole hallitusten tai yritysten myöntämä etuoikeus. Se on perustavanlaatuinen ihmisoikeus.",
                "Valvontatalous on kääntänyt ihmishuomion hyödykkeeksi. Jokainen klikkaus, viesti ja ajatus korjataan, analysoidaan ja myydään. Hylkäämme tämän paradigman.",
                "Phantomi on olemassa koska vaihtoehto—maailma jossa jokainen sana tallennetaan ja jokainen poikkeama rangaistaan—ei ole maailma jossa kannattaa elää.",
                "Emme rakenna tätä työkalua rikollisille. Rakennamme sen 99%:lle ihmiskuntaa jolla on oikeus ajatella, puhua ja olla olemassa ilman tarkkailua.",
                "Tyhjiö ei ole tyhjyyttä. Se on vapautta. Se on tila jossa ajatuksesi kuuluvat vain sinulle. Astu tyhjiöön. Tule aaveeksi."
            ],
            signature: "— PHANTOMI-KOLLEKTIIVI"
        },
        roadmap: {
            title: "KEHITYSHORISONTTI",
            items: [
                {
                    phase: "VAIHE 1: GENESIS",
                    date: "Q1 2026",
                    title: "YDINPROTOKOLLAN ALUSTUS",
                    description: `
                        Ensimmäisten 5 000 vapaaehtoisen RAM-solmun käyttöönotto. 
                        P-521-toteutuksen loppuauditointi. Avoimen lähdekoodin asiakasohjelmiston julkaisu.
                        Bug bounty -ohjelman perustaminen 500 000 dollarin alkurahoituksella.
                    `
                },
                {
                    phase: "VAIHE 2: LAAJENTUMINEN",
                    date: "Q3 2026",
                    title: "MOBIILI MESH-INTEGRAATIO",
                    description: `
                        iOS- ja Android-sovellusten julkaisu jotka kykenevät toimimaan matalatehoisina välityssolmuina. 
                        'Direct-WiFi' -offline-viestinnän toteutus. Ääniviestien salaus reaaliaikaisella puheentunnistuksella.
                    `
                },
                {
                    phase: "VAIHE 3: SINGULARITEETTI",
                    date: "2027+",
                    title: "AUTONOMINEN DAO-HALLINTO",
                    description: `
                        Protokollan hallinta-avainten luovuttaminen Phantomi DAO:lle. 
                        Yksityisten älysopimusten toteuttaminen. IPFS/Filecoin-integraatio salatulle tiedostonjaolla.
                    `
                },
                {
                    phase: "VAIHE 4: TRANSSENDENSSI",
                    date: "2028+",
                    title: "FYYSISEN KERROKSEN RIIPPUMATTOMUUS",
                    description: `
                        Mesh-radiolaitteiston kehitys viestintään täydellisissä internet-katkoksissa.
                        LoRa-pohjaiset pitkän kantaman viestisolmut. Satelliitti-uplink pysäyttämättömään globaaliin viestintään.
                        Mikään hallitus ei voi hiljentää sitä mitä ei voi koskettaa.
                    `
                }
            ]
        },
        deployment: {
            title: "KÄYNNISTÄ_SOLMU",
            subtitle: "Liity vastarintaan. Aja solmua. Muutu näkymättömäksi.",
            ctaInit: "INITIALISOI YDIN",
            ctaDocs: "AVAA DOKUMENTAATIO",
            external: "ULKOINEN",
            stats: {
                status: "TILA: OPERATIIVINEN",
                encryption: "SALAUS: P-521/AES-256",
                nodes: "AKTIIVISET SOLMUT: 12,402",
                uptime: "VERKON UPTIME: 99.999%"
            },
            requirements: {
                title: "SOLMUVAATIMUKSET",
                items: [
                    "4GB RAM vähintään (8GB suositeltu)",
                    "Linux/BSD-järjestelmä PXE-käynnistystuella",
                    "100 Mbps vakaa internet-yhteys",
                    "Kiintolevyä ei tarvita (vain RAM-toiminta)"
                ]
            }
        },
        comparison: {
            title: "TYHJIÖ VS. MURRETUT",
            subtitle: "Tekninen vertailu yksityisyysviestintäprotokollista.",
            headers: ["OMINAISUUS", "PHANTOMI", "SIGNAL", "TELEGRAM", "WHATSAPP"],
            rows: [
                { feature: "Puhelinnumero vaaditaan", values: ["❌ EI", "✅ KYLLÄ", "✅ KYLLÄ", "✅ KYLLÄ"] },
                { feature: "Keskitetyt palvelimet", values: ["❌ EI", "✅ KYLLÄ", "✅ KYLLÄ", "✅ KYLLÄ"] },
                { feature: "Viestien tallennus", values: ["VAIN RAM", "SALATTU DB", "PILVI", "PILVI"] },
                { feature: "Metadatan keruu", values: ["EI MITÄÄN", "VÄHÄINEN", "LAAJA", "LAAJA"] },
                { feature: "Voi noudattaa haastetta", values: ["❌ MAHDOTONTA", "⚠️ RAJALLINEN", "✅ KYLLÄ", "✅ KYLLÄ"] },
                { feature: "Avoin lähdekoodi", values: ["✅ 100%", "✅ ASIAKAS", "⚠️ OSITTAIN", "❌ EI"] },
                { feature: "Post-Quantum valmis", values: ["✅ KYBER-1024", "❌ EI", "❌ EI", "❌ EI"] },
                { feature: "Hajautettu", values: ["✅ MESH", "❌ EI", "❌ EI", "❌ EI"] },
                { feature: "Forensinen palautus", values: ["❌ MAHDOTONTA", "⚠️ MAHDOLLINEN", "✅ HELPPO", "✅ HELPPO"] },
                { feature: "Anonyymi rekisteröinti", values: ["✅ AVAINPARI", "❌ EI", "❌ EI", "❌ EI"] }
            ],
            disclaimer: "Tiedot voimassa tammikuussa 2026. Phantomi on suunniteltu äärimmäisille uhkaolosuhteille."
        },
        securityAudit: {
            title: "RIIPPUMATTOMAT TURVALLISUUSAUDITOINNIT",
            subtitle: "Verifioitu maailman johtavien kryptografiasiantuntijoiden toimesta.",
            audits: [
                {
                    firm: "NCC GROUP",
                    date: "JOULUKUU 2025",
                    scope: "Täysi protokolla-arviointi",
                    finding: "0 KRIITTISTÄ, 0 KORKEAA, 2 KESKITASOA (RATKAISTU)",
                    quote: "Phantomi-protokolla osoittaa poikkeuksellista kryptografista huolellisuutta. RAM-only arkkitehtuuri eliminoi kokonaisia forensisten hyökkäysvektoreiden kategorioita.",
                    reportLink: "#"
                },
                {
                    firm: "TRAIL OF BITS",
                    date: "LOKAKUU 2025",
                    scope: "Asiakassovelluksen turvallisuus",
                    finding: "0 KRIITTISTÄ, 1 KORKEA (RATKAISTU), 3 KESKITASOA",
                    quote: "Olimme vaikuttuneita nollatiedon todennuksen toteutuksesta. Uhkamalli on johdonmukainen ja toteutus vastaa spesifikaatiota.",
                    reportLink: "#"
                },
                {
                    firm: "CURE53",
                    date: "ELOKUU 2025",
                    scope: "Verkkokerros ja sipulireititys",
                    finding: "1 KRIITTINEN (RATKAISTU), 0 KORKEAA, 4 KESKITASOA",
                    quote: "Mesh-topologia vastustaa onnistuneesti liikenteen korrelaatiohyökkäyksiä vastakkaisissa olosuhteissa. Ajoitusanalyysi ei tuottanut käyttökelpoisia sormenjälkiä.",
                    reportLink: "#"
                }
            ],
            bugBounty: {
                title: "BUG BOUNTY -OHJELMA",
                description: "Maksamme tutkijoille jotka löytävät haavoittuvuuksia ennen vihollisia.",
                tiers: [
                    { severity: "KRIITTINEN", reward: "JOPA 100 000 $" },
                    { severity: "KORKEA", reward: "JOPA 25 000 $" },
                    { severity: "KESKITASO", reward: "JOPA 5 000 $" },
                    { severity: "MATALA", reward: "JOPA 1 000 $" }
                ],
                totalPaid: "847 000$+ maksettu tähän mennessä"
            }
        },
        threatModel: {
            title: "UHKAMALLI",
            subtitle: "Oletamme pahimman. Sinunkin pitäisi.",
            description: "Phantomi on suunniteltu vastustamaan seuraavia vihollisia:",
            threats: [
                {
                    adversary: "PASSIIVINEN VERKKO-TARKKAILIJA",
                    capability: "Voi tarkkailla kaikkea verkkoliikennettä yhteytesi sisään ja ulos.",
                    mitigation: "Sipulireititys 3+ hypyllä. Liikenteen pehmustus. Ei erottuvia kuvioita.",
                    status: "TÄYSIN TORJUTTU"
                },
                {
                    adversary: "AKTIIVINEN MIES-VÄLISSÄ",
                    capability: "Voi siepata, muokata tai injektoida paketteja reaaliajassa.",
                    mitigation: "P-521 ECDH avainvaihto. Autentikoitu salaus. Sertifikaatin kiinnitys.",
                    status: "TÄYSIN TORJUTTU"
                },
                {
                    adversary: "KOMPROMISSOITU SOLMUOPERAATTORI",
                    capability: "Kontrolloi yhtä tai useampaa solmua mesh-verkossa.",
                    mitigation: "Yksikään solmu ei näe koko piiriä. Päästä-päähän salaus riippumaton reitityksestä.",
                    status: "TÄYSIN TORJUTTU"
                },
                {
                    adversary: "KANSALLISVALTION VIHOLLINEN",
                    capability: "Rajoittamaton budjetti. Laillinen valtuutus. Fyysinen pääsy palvelimille.",
                    mitigation: "Vain RAM-tallennus. Hajautettu lainkäyttöalue. Ei dataa takavarikoitavaksi.",
                    status: "TÄYSIN TORJUTTU"
                },
                {
                    adversary: "TULEVA KVANTTITIETOKONE",
                    capability: "Voi murtaa RSA:n, DSA:n ja klassisen ECC:n polynomiajassa.",
                    mitigation: "Hybridi CRYSTALS-Kyber KEM. Forward-secret viestikohtaiset avaimet.",
                    status: "TORJUTTU (PUOLUSTAVA)"
                },
                {
                    adversary: "PHANTOMIN KEHITTÄJÄT",
                    capability: "Täysi pääsy lähdekoodiin. Kyky julkaista päivityksiä.",
                    mitigation: "Avoimen lähdekoodin tarkastus. Toistettavat buildaukset. Asiakaspuolen avaingenerointi.",
                    status: "ARKKITEHTUURISESTI ELIMINOITU"
                }
            ],
            limitations: {
                title: "TUNNETUT RAJOITUKSET",
                items: [
                    "Phantomi ei voi suojata sinua jos laitteesi on murrettu keyloggerilla tai näytönkaappaushaittaohjelmalla.",
                    "Phantomi ei voi estää sinua jakamasta näyttöäsi tai ottamasta kuvakaappauksia keskusteluista.",
                    "Phantomi ei voi suojata sinua sosiaaliselta manipulaatiolta tai phishing-hyökkäyksiltä.",
                    "Phantomi olettaa että vähintään yksi rehellinen solmu on reitityspolullasi. 100% murrettu verkko epäonnistuisi.",
                    "Phantomi vaatii alkuperäisen internet-yhteyden käynnistyäkseen meshiin. Puhdas offline-toiminta vaatii esiparitetut laitteet."
                ]
            }
        },
        networkStats: {
            title: "LIVE VERKKOTELEMETRIA",
            subtitle: "Reaaliaikainen Ghost Meshin tila.",
            stats: [
                { label: "AKTIIVISET SOLMUT", value: "12 402", trend: "+3,2%" },
                { label: "VIESTIT (24H)", value: "2,4M", trend: "+12,7%" },
                { label: "REITITETTYA DATAA (24H)", value: "847 TB", trend: "+8,4%" },
                { label: "KESKIMÄÄRÄINEN LATENSSI", value: "127ms", trend: "-5,1%" },
                { label: "VERKON UPTIME", value: "99,9997%", trend: "+0,001%" },
                { label: "MAANTIETEELLINEN JAKAUMA", value: "94 MAATA", trend: "+2" }
            ],
            nodeMap: {
                title: "SOLMUJEN JAKAUMA",
                regions: [
                    { region: "EUROOPPA", nodes: 4821, percentage: 38.9 },
                    { region: "POHJOIS-AMERIKKA", nodes: 3102, percentage: 25.0 },
                    { region: "AASIA-TYYNIMERI", nodes: 2845, percentage: 22.9 },
                    { region: "ETELÄ-AMERIKKA", nodes: 891, percentage: 7.2 },
                    { region: "AFRIKKA", nodes: 412, percentage: 3.3 },
                    { region: "LÄHI-ITÄ", nodes: 331, percentage: 2.7 }
                ]
            },
            disclaimer: "Tilastot kerätään anonyymisti. Yksittäisen solmun toimintaa ei seurata."
        },
        pressQuotes: {
            title: "MITÄ HE SANOVAT",
            subtitle: "Tunnustusta toimittajilta, tutkijoilta ja yksityisyyden puolustajilta.",
            quotes: [
                {
                    text: "Phantomi edustaa merkittävintä edistysaskelta yksityisessä viestinnässä sitten Tor-verkon keksimisen. RAM-only arkkitehtuuri on aidosti innovatiivinen.",
                    author: "Dr. Sarah Chen",
                    role: "Kryptografian professori, MIT",
                    publication: "IEEE Security & Privacy"
                },
                {
                    text: "Olen käyttänyt Phantomia yhteydenpitoon lähteiden kanssa kolmella eri konfliktialueella. Se on ainoa työkalu johon luotan kun henget ovat vaarassa.",
                    author: "Marcus Reinholt",
                    role: "Tutkiva toimittaja",
                    publication: "Der Spiegel"
                },
                {
                    text: "Uhkamalli on johdonmukainen, toteutus on siisti ja avoimen lähdekoodin yhteisö on responsiivinen. Näin turvallisuusohjelmistoja tulisi rakentaa.",
                    author: "Alex Stamos",
                    role: "Entinen CSO, Facebook",
                    publication: "Twitter/X"
                },
                {
                    text: "Aikakaudella jolloin jokainen suuri alusta on murrettu valtiollisten toimijoiden tai datakauppiaiden toimesta, Phantomi on raikas tuulahdus. Tai ehkä tuulahdus tyhjiöstä.",
                    author: "Electronic Frontier Foundation",
                    role: "",
                    publication: "EFF Blog"
                }
            ]
        },
        openSource: {
            title: "AVOIMEN LÄHDEKOODIN LÄPINÄKYVYYS",
            subtitle: "Jokainen koodirivi. Jokainen commit. Jokainen päätös. Kaikille nähtävissä.",
            stats: [
                { label: "COMMITIT YHTEENSÄ", value: "14 847", icon: "📊" },
                { label: "KONTRIBUUTTORIT", value: "342", icon: "👥" },
                { label: "KOODIKATSELMOINNIT", value: "8 921", icon: "🔍" },
                { label: "RATKAISTUT ONGELMAT", value: "2 156", icon: "✅" },
                { label: "KOODIRIVEJÄ", value: "847 293", icon: "💻" },
                { label: "FORKIT", value: "1 247", icon: "🔱" }
            ],
            repos: [
                {
                    name: "phantomi-core",
                    description: "Protokollan sydän. Kryptografiset primitiivit, reitityslogiikka ja solmujen hallinta.",
                    language: "Rust",
                    stars: 8742,
                    lastCommit: "2 tuntia sitten"
                },
                {
                    name: "phantomi-client",
                    description: "Monialustainen asiakassovellus työpöydälle ja mobiilille.",
                    language: "TypeScript/React Native",
                    stars: 3421,
                    lastCommit: "5 tuntia sitten"
                },
                {
                    name: "phantomi-node",
                    description: "RAM-only välityssolmun toteutus. Käynnisty ISO:sta, älä jätä jälkiä.",
                    language: "Rust",
                    stars: 2156,
                    lastCommit: "12 tuntia sitten"
                },
                {
                    name: "phantomi-crypto",
                    description: "Kryptografiakirjasto: P-521 ECDH, Kyber-1024, AES-256-GCM toteutukset.",
                    language: "Rust/C",
                    stars: 4892,
                    lastCommit: "1 päivä sitten"
                }
            ],
            buildStatus: {
                title: "TOISTETTAVAT BUILDAUKSET",
                description: "Jokainen julkaisu käännetään deterministisesti. Kuka tahansa voi varmistaa että binaari vastaa lähdekoodia täsmälleen.",
                platforms: [
                    { name: "Linux x86_64", status: "VERIFIOITU", hash: "sha256:a7f3c9..." },
                    { name: "Linux ARM64", status: "VERIFIOITU", hash: "sha256:b2e8d1..." },
                    { name: "macOS Universal", status: "VERIFIOITU", hash: "sha256:c4a2f7..." },
                    { name: "Windows x64", status: "VERIFIOITU", hash: "sha256:d9b5e3..." }
                ]
            }
        },
        protocolSpec: {
            title: "PROTOKOLLAMÄÄRITTELY",
            subtitle: "Tyhjiön takana oleva matematiikka.",
            version: "PHANTOMI PROTOKOLLA v5.2.1",
            layers: [
                {
                    name: "SIIRTOKERROS",
                    description: "Kaikki liikenne on TLS 1.3 salattua sertifikaatin kiinnityksellä. Yhteydet käyttävät noise-protokollakehystä IK-kädenpuristuskuviolla.",
                    specs: ["Vain TLS 1.3", "X25519 avainvaihto", "ChaCha20-Poly1305 AEAD", "Sertifikaatin kiinnitys"]
                },
                {
                    name: "REITITYSKERROS",
                    description: "Sipulireititys 3-5 hypyn piireillä. Jokainen hyppy poistaa yhden salauskerroksen. Reitinvalinta käyttää painotettua satunnaisalgoritmia solmun maineen perusteella.",
                    specs: ["3-5 hypyn piirit", "Hypykohtainen AES-256-GCM", "10 minuutin piirikierrätys", "Vartijasolmujärjestelmä"]
                },
                {
                    name: "VIESTIKERROS",
                    description: "Päästä-päähän salaus Double Ratchet -algoritmilla. Forward secrecy taattu viestikohtaisesti. Autentikoitu EdDSA-allekirjoituksilla.",
                    specs: ["Double Ratchet (X3DH)", "Viestikohtaiset avaimet", "EdDSA-allekirjoitukset", "Kiistettävä autentikointi"]
                },
                {
                    name: "TALLENNUSKERROS",
                    description: "Vain RAM haihtuva tallennus. Ei pysyvää dataa. Muistisivut lukittu ja pyyhitty sammutettaessa. Salattu tmpfs väliaikaisille operaatioille.",
                    specs: ["Vain RAM (ei levyä)", "Muistin lukitus", "Turvallinen pyyhintä", "Salattu swap pois käytöstä"]
                }
            ],
            messageFormat: {
                title: "VIESTINRAKENNE",
                fields: [
                    { name: "VERSIO", size: "1 tavu", description: "Protokollaversiotunniste" },
                    { name: "TYYPPI", size: "1 tavu", description: "Viestityyppi (teksti, media, kontrolli)" },
                    { name: "AIKALEIMA", size: "8 tavua", description: "Unix-aikaleima (vain järjestykseen, ei tallenneta)" },
                    { name: "NONCE", size: "24 tavua", description: "Ainutlaatuinen kryptografinen nonce" },
                    { name: "LÄHETTÄJÄAVAIN", size: "32 tavua", description: "Ephemeral lähettäjän julkinen avain" },
                    { name: "HYÖTYKUORMA", size: "Vaihteleva", description: "Salattu viestisisältö" },
                    { name: "MAC", size: "16 tavua", description: "Viestin autentikointikoodi" }
                ]
            }
        },
        nodeGuide: {
            title: "SOLMUOPERAATTORIN OPAS",
            subtitle: "Tule osaksi Ghost Meshiä. Aja välityssolmua.",
            intro: "Jokainen solmu vahvistaa verkkoa. Jokainen operaattori on yksityisyyden vartija. Liity vastarintaan.",
            requirements: {
                title: "VÄHIMMÄISVAATIMUKSET",
                hardware: [
                    { spec: "RAM", min: "4 GB", recommended: "8 GB+" },
                    { spec: "CPU", min: "2 ydintä", recommended: "4+ ydintä" },
                    { spec: "VERKKO", min: "100 Mbps", recommended: "1 Gbps+" },
                    { spec: "TALLENNUS", min: "EI TARVITA", recommended: "Vain RAM" }
                ],
                software: [
                    "Linux kernel 5.10+ tai FreeBSD 13+",
                    "PXE-käynnistyskyky (suositeltu)",
                    "UEFI Secure Boot (valinnainen)",
                    "USB 3.0 Live ISO -käynnistykseen"
                ]
            },
            setup: {
                title: "KÄYTTÖÖNOTTOVAIHEET",
                steps: [
                    { step: 1, title: "LATAA ISO", description: "Hanki verifioitu Phantomi Node ISO GitHub-julkaisuista. Varmista SHA-256 tiiviste." },
                    { step: 2, title: "LUO KÄYNNISTYSMEDIA", description: "Kirjoita ISO USB-tikulle dd:llä tai Rufuksella. Aseta BIOS USB/PXE-käynnistykseen." },
                    { step: 3, title: "KÄYNNISTÄ & KONFIGUROI", description: "Järjestelmä käynnistyy RAM:iin. Aseta verkkoasetukset terminaaliohjatulla." },
                    { step: 4, title: "LIITY MESHIIN", description: "Solmu löytää automaattisesti vertaisia ja alkaa välittää salattua liikennettä." },
                    { step: 5, title: "MONITOROI", description: "Käytä paikallista kojelautaa osoitteessa localhost:8080 tilannekuvaan ja tilastoihin." }
                ]
            },
            rewards: {
                title: "SOLMUKANNUSTIMET",
                description: "Vaikka Phantomi on ensisijaisesti vapaaehtoispohjainen, korkean käyttöajan solmut voivat saada:",
                items: [
                    "Prioriteettipiirien reititys omalle liikenteellesi",
                    "Tunnustus solmujen kunnialistalla",
                    "Äänestyspainoa DAO-hallintaehdotuksissa",
                    "Varhainen pääsy beta-ominaisuuksiin ja protokolliin"
                ]
            }
        },
        developerAPI: {
            title: "KEHITTÄJÄINTEGRAATIO",
            subtitle: "Rakenna yksityisyys sovelluksiisi. Nollatietoa oletuksena.",
            sdks: [
                { language: "Rust", status: "VAKAA", version: "2.4.1" },
                { language: "TypeScript/Node.js", status: "VAKAA", version: "2.3.0" },
                { language: "Python", status: "BETA", version: "1.9.2" },
                { language: "Go", status: "BETA", version: "1.7.0" },
                { language: "Swift", status: "ALPHA", version: "0.8.1" },
                { language: "Kotlin", status: "ALPHA", version: "0.7.3" }
            ],
            examples: [
                {
                    title: "LÄHETÄ SALATTU VIESTI",
                    language: "typescript",
                    code: `import { PhantomiClient } from '@phantomi/sdk';

const client = new PhantomiClient();
await client.connect();

const recipient = 'phantom:8a7b3c...';
await client.sendMessage(recipient, {
  type: 'text',
  content: 'Tyhjiö puhuu.'
});`
                },
                {
                    title: "LUO ANONYYMI KANAVA",
                    language: "rust",
                    code: `use phantomi_core::Channel;

let channel = Channel::create_anonymous()
    .with_expiry(Duration::hours(24))
    .with_max_members(50)
    .build()
    .await?;

channel.invite(&member_pubkey).await?;`
                }
            ],
            rateLimit: "Ei nopeusrajoituksia. Ei API-avaimia. Ei seurantaa. Käytä vapaasti."
        },
        hallOfFame: {
            title: "TURVALLISUUDEN KUNNIAGALLERIA",
            subtitle: "Kunnianosoitus tutkijoille jotka vahvistavat tyhjiötä.",
            description: "Nämä henkilöt raportoivat haavoittuvuuksista vastuullisesti, tehden Phantomista turvallisemman kaikille.",
            researchers: [
                {
                    name: "yolanda_sec",
                    affiliation: "Itsenäinen tutkija",
                    finding: "Ajoitussivukanava piirin muodostamisessa",
                    severity: "KRIITTINEN",
                    bounty: "75 000 $",
                    date: "Marraskuu 2025"
                },
                {
                    name: "Dr. Michael Torres",
                    affiliation: "Stanford Security Lab",
                    finding: "Muistivuoto avainjohdannassa",
                    severity: "KORKEA",
                    bounty: "25 000 $",
                    date: "Lokakuu 2025"
                },
                {
                    name: "cipher_punk_42",
                    affiliation: "Chaos Computer Club",
                    finding: "Palvelunesto väärin muodostetuilla paketeilla",
                    severity: "KESKITASO",
                    bounty: "5 000 $",
                    date: "Syyskuu 2025"
                },
                {
                    name: "Elena Vasquez",
                    affiliation: "Mozilla Security",
                    finding: "Sertifikaatin validoinnin ohitus",
                    severity: "KORKEA",
                    bounty: "20 000 $",
                    date: "Elokuu 2025"
                },
                {
                    name: "void_hunter",
                    affiliation: "Itsenäinen tutkija",
                    finding: "UI-uudelleenasettelu haavoittuvuus työpöytäsovelluksessa",
                    severity: "KESKITASO",
                    bounty: "3 500 $",
                    date: "Heinäkuu 2025"
                }
            ],
            totalPaid: "847 000 $+",
            disclaimer: "Haavoittuvuuden ilmoittaminen: security@phantomi.void (PGP-avain saatavilla)"
        },
        changelog: {
            title: "VERSIOHISTORIA",
            subtitle: "Tyhjiön evoluutio.",
            releases: [
                {
                    version: "5.2.1",
                    date: "10. tammikuuta 2026",
                    type: "KORJAUS",
                    changes: [
                        "Korjattu muistivuoto pitkäkestoisissa välityssolmuissa",
                        "Parannettu latenssia korkean liikenteen piireissä",
                        "Päivitetty Kyber-toteutus NIST:n lopulliseen standardiin"
                    ]
                },
                {
                    version: "5.2.0",
                    date: "15. joulukuuta 2025",
                    type: "MINOR",
                    changes: [
                        "Lisätty steganografinen viestitila",
                        "Lisätty tuki ääniviesteihin reaaliaikaisella salauksella",
                        "Uusi vartijasolmun valinta-algoritmi",
                        "Mobiilisovelluksen akkuoptimointi"
                    ]
                },
                {
                    version: "5.1.0",
                    date: "1. lokakuuta 2025",
                    type: "MINOR",
                    changes: [
                        "CRYSTALS-Kyber-1024 hybridisalaus oletuksena",
                        "Parannettu liikennepehmusteea ajoitusanalyysin torjumiseksi",
                        "CLI-parannuksia solmuoperaattoreille",
                        "Tumman tilan UI-hionta"
                    ]
                },
                {
                    version: "5.0.0",
                    date: "15. heinäkuuta 2025",
                    type: "MAJOR",
                    changes: [
                        "Täydellinen protokollan uudelleenkirjoitus v5-spesifikaatiolle",
                        "RAM-only arkkitehtuuri viimeistelty",
                        "Nollatiedon autentikointijärjestelmä",
                        "Hajautettu solmujen löytömekanismi",
                        "Rikkova: Ei taaksepäin yhteensopiva v4.x:n kanssa"
                    ]
                }
            ]
        },
        globalReach: {
            title: "GLOBAALI VASTARINTAVERKOSTO",
            subtitle: "Yksityisyys ei tunne rajoja. Mesh ulottuu maailmanlaajuisesti.",
            stats: {
                countries: 94,
                continents: 6,
                activeUsers: "2,4M+",
                dailyMessages: "847M+"
            },
            regions: [
                {
                    name: "EUROOPPA",
                    nodes: 4821,
                    users: "890K",
                    growth: "+12%",
                    topCountries: ["Saksa", "Alankomaat", "Ruotsi", "Sveitsi"]
                },
                {
                    name: "POHJOIS-AMERIKKA",
                    nodes: 3102,
                    users: "620K",
                    growth: "+8%",
                    topCountries: ["USA", "Kanada", "Meksiko"]
                },
                {
                    name: "AASIA-TYYNIMERI",
                    nodes: 2845,
                    users: "540K",
                    growth: "+24%",
                    topCountries: ["Japani", "Etelä-Korea", "Australia", "Taiwan"]
                },
                {
                    name: "ETELÄ-AMERIKKA",
                    nodes: 891,
                    users: "210K",
                    growth: "+31%",
                    topCountries: ["Brasilia", "Argentiina", "Chile"]
                },
                {
                    name: "LÄHI-ITÄ & AFRIKKA",
                    nodes: 743,
                    users: "140K",
                    growth: "+47%",
                    topCountries: ["UAE", "Israel", "Etelä-Afrikka", "Kenia"]
                }
            ],
            bannedRegions: {
                title: "RAJOITETUN PÄÄSYN ALUEET",
                description: "Näillä alueilla Phantomin käyttö voi aiheuttaa oikeudellisen riskin. Tarjoamme siltasolmuja ja steganografisia tiloja korkean sensuurin ympäristöissä oleville käyttäjille.",
                regions: ["Kiina", "Venäjä", "Iran", "Pohjois-Korea", "Valko-Venäjä", "Turkmenistan"]
            }
        },
        userTestimonials: {
            title: "ÄÄNIÄ TYHJIÖSTÄ",
            subtitle: "Oikeita käyttäjiä. Oikeita tarinoita. Identiteetit suojattu.",
            testimonials: [
                {
                    quote: "Toimittajana autoritaarisessa maassa Phantomi ei ole ylellisyyttä—se on selviytymistä. Kaksi kollegaani pidätettiin perinteisten viestintäsovellusten käytöstä. Minä olen yhä vapaa tämän työkalun ansiosta.",
                    author: "Anonyymi toimittaja",
                    location: "Kaakkois-Aasia",
                    verified: true
                },
                {
                    quote: "Lakitoimistomme käsittelee tapauksia joita vaikutusvaltaiset ihmiset haluavat vaientaa. Kun sähköpostimme haastettiin aiemmassa tapauksessa, siirsimme kaiken arkaluonteisen asiakasviestinnän Phantomiin. Ei mitään haastettavaa nyt.",
                    author: "Partneri, Kansainvälinen lakitoimisto",
                    location: "New York",
                    verified: true
                },
                {
                    quote: "Johdan perheväkivallan tukiverkostoa. Pahoinpitelijät usein seuraavat uhriensa puhelimia. Phantomin steganografisella tilalla selviytyjät voivat pyytää apua ilman havaitsemista.",
                    author: "Sosiaalityöntekijä",
                    location: "Iso-Britannia",
                    verified: true
                },
                {
                    quote: "Yritysvakoilu maksoi edelliselle yhtiölleni 40 miljoonaa dollaria. Nyt kaikki T&K-keskustelumme tapahtuvat Phantomissa. Kilpailijamme eivät voi varastaa sitä mitä ei ole millään palvelimella.",
                    author: "CTO, Teknologiastartup",
                    location: "San Francisco",
                    verified: true
                },
                {
                    quote: "Olen vain tavallinen ihminen joka uskoo että keskusteluni perheeni kanssa eivät kuulu hallitukselleni. Phantomi antaa minulle tuon perusinhimillisen arvokkuuden takaisin.",
                    author: "Yksityishenkilö",
                    location: "Saksa",
                    verified: true
                }
            ]
        },
        compliance: {
            text: "Tämä käyttöliittymä käyttää vähennetyn liikkeen asetusta saavutettavuuden vuoksi. Evästeet ovat täällä kryptografisesti merkityksettömiä.",
            accept: "KUITTAA",
            decline: "OHITA"
        },
        footer: {
            tagline: "YKSITYISYYS EI OLE RIKOS",
            links: {
                whitepaper: "VALKOINEN PAPERI",
                github: "LÄHDEKOODI",
                audit: "TURVALLISUUSAUDITOINTI",
                contact: "SALATTU YHTEYS"
            },
            copyright: "PHANTOMI-KOLLEKTIIVI // EI OIKEUKSIA PIDÄTETTY // COPYLEFT 2026"
        }
    }
};
