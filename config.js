/**
 * SAP Compass — config.js
 * ─────────────────────────────────────────────────────────────────
 * THIS IS THE ONLY FILE YOU NEED TO EDIT FOR CONTENT CHANGES.
 *
 * Sections:
 *   1. BACKGROUNDS   — Professional profiles & their SAP analogies
 *   2. CURRICULUM    — 5-phase learning journey
 *   3. SWOT          — Strengths, Weaknesses, Opportunities, Threats
 *   4. GLOSSARY      — SAP terms with plain definitions & analogies
 *   5. QUICK_QUESTIONS — Per-background suggested starter questions
 *   6. AGENT_CONFIG  — Model, max tokens, system prompt behaviour
 * ─────────────────────────────────────────────────────────────────
 */


/* ─── 1. BACKGROUNDS ─────────────────────────────────────────────
   Each entry defines a professional background that a new leader
   might come from. The `analogy` field is injected directly into
   the AI system prompt — it tells the agent how to frame SAP
   explanations for that person's world.

   To add a new background:
     1. Copy an existing entry.
     2. Give it a unique `id` (no spaces).
     3. Write a clear `analogy` — this is what shapes every answer.
     4. Pick a Tabler icon name (https://tabler.io/icons).
──────────────────────────────────────────────────────────────── */
const BACKGROUNDS = [
  {
    id: "infra",
    label: "IT Infrastructure / Engineering",
    icon: "ti-server",
    analogy:
      "Think of SAP like enterprise IT infrastructure — Basis is your NOC, landscapes are your Dev/QA/Prod environments, transports are your CI/CD pipeline, and HANA is the high-performance in-memory database engine underneath it all."
  },
  {
    id: "manufacturing",
    label: "Manufacturing / Operations",
    icon: "ti-settings-2",
    analogy:
      "SAP runs the shopfloor digitally — PP (Production Planning) manages production orders like a master schedule, MM (Materials Management) handles procurement and inventory like your warehouse system, and QM manages quality gates just like your inspection checkpoints."
  },
  {
    id: "finance",
    label: "Finance / Consulting",
    icon: "ti-chart-bar",
    analogy:
      "SAP FI/CO is your P&L backbone — every cost centre, journal entry, and management report flows through it. Think of it as the system of record for every financial transaction across the enterprise, with real-time reporting built in."
  },
  {
    id: "sales",
    label: "Sales / Commercial",
    icon: "ti-trending-up",
    analogy:
      "SAP SD is your order-to-cash engine — from quote to delivery to invoice, it manages the entire revenue lifecycle. CRM and customer analytics sit on top, and BTP integrations bring in external sales data."
  },
  {
    id: "hr",
    label: "HR / People Leadership",
    icon: "ti-users",
    analogy:
      "SAP SuccessFactors is your digital HR backbone — talent acquisition, onboarding, payroll, performance management, and org design all in one system. It integrates tightly with the core S/4HANA for headcount and cost centre reporting."
  },
  {
    id: "techarchitect",
    label: "Tech Architect",
    icon: "ti-hierarchy",
    isNew: true,
    analogy:
      "Think of SAP as a layered enterprise architecture: Basis is your infrastructure and platform tier, ABAP and BTP are your middleware and integration layers (API gateway + PaaS), S/4HANA is the core application tier built on an in-memory HANA database, and Joule AI sits as the intelligence and orchestration layer on top. Every principle you know — separation of concerns, clean interfaces, event-driven integration, scalability — applies directly. Clean Core is essentially microservices thinking applied to ERP."
  },
  {
    id: "strategy",
    label: "General Management / Strategy",
    icon: "ti-building",
    analogy:
      "Think of SAP as the operating system of your enterprise — every business decision, from procurement to payroll to production, eventually touches it. The SAP landscape is your digital backbone, and understanding it helps you make better decisions about investment, risk, and transformation."
  }
];


/* ─── 2. CURRICULUM ──────────────────────────────────────────────
   Five learning phases, shown in the Learn tab.
   Each phase has a title, badge status, and list of topics.
   Topics appear as clickable "Ask ↗" cards that fire questions
   into the chat automatically.

   Badge values: "badge-now" | "badge-next" | "badge-later"
──────────────────────────────────────────────────────────────── */
const CURRICULUM = [
  {
    phase: 1,
    title: "SAP from 30,000 feet",
    badge: "badge-now",
    label: "Start here",
    topics: [
      "What is SAP and why does it matter?",
      "SAP vs other ERPs",
      "Our SAP landscape overview",
      "Key modules at a glance",
      "The 2027 ECC deadline — why it matters now"
    ]
  },
  {
    phase: 2,
    title: "SAP Basis — your team's domain",
    badge: "badge-now",
    label: "Start here",
    topics: [
      "What Basis does (SAP's IT Ops)",
      "System landscape: Dev → QA → Prod",
      "Transport management (SAP's version of CI/CD)",
      "SAP on cloud vs on-prem",
      "RISE with SAP explained"
    ]
  },
  {
    phase: 3,
    title: "Business modules — what users do in SAP",
    badge: "badge-next",
    label: "Next",
    topics: [
      "FI/CO — Finance & Controlling",
      "MM/PP — Materials & Production",
      "SD — Sales & Distribution",
      "HCM / SuccessFactors — People",
      "Module interdependencies"
    ]
  },
  {
    phase: 4,
    title: "SAP technology & architecture",
    badge: "badge-next",
    label: "Next",
    topics: [
      "ABAP — SAP's programming language",
      "S/4HANA vs ECC (legacy vs modern)",
      "SAP BTP — the cloud extension platform",
      "Joule AI — SAP's AI copilot (2026)",
      "APIs, integrations & clean core"
    ]
  },
  {
    phase: 5,
    title: "Leadership strategic topics",
    badge: "badge-later",
    label: "Later",
    topics: [
      "SAP licensing & cost landscape",
      "Upgrade & migration decisions",
      "Team structure: Basis, Functional, Dev",
      "Reading a SAP roadmap",
      "Vendor management with SAP"
    ]
  }
];


/* ─── 3. SWOT ────────────────────────────────────────────────────
   Live-researched as of August 2026.
   Update quarterly — replace items or add new ones as the
   SAP landscape evolves. Each item is a plain text string.
──────────────────────────────────────────────────────────────── */
const SWOT = {
  strengths: [
    "Mission-critical position — nothing runs without Basis",
    "2026 is peak migration year — skilled Basis teams are in demand",
    "AI agent governance (Joule, BTP) is now a Basis responsibility",
    "Rare, hard-to-replace expertise across the market"
  ],
  weaknesses: [
    "Talent shortage sharpest in SAP + AI + cloud hybrid profiles",
    "Change management moves slower than business demands",
    "23% of leaders admit significant SAP security skill gaps",
    "Cost & value visibility remains a consistent leadership blind spot"
  ],
  opportunities: [
    "55% of orgs on S/4HANA — unfinished migrations need Basis hands",
    "Joule AI adoption up 40% YoY — Basis governs the infrastructure",
    "Elevate SAP security to a board-level risk conversation",
    "Lead clean core governance as cloud code convergence accelerates"
  ],
  threats: [
    "Zero-day SAP vulnerabilities actively exploited in 2026",
    "AI used by attackers to scan SAP misconfigurations at scale",
    "2027 ECC end-of-support cliff creates last-minute migration pressure",
    "Over 80% of digital transformations hindered by integration complexity"
  ]
};


/* ─── 4. GLOSSARY ────────────────────────────────────────────────
   SAP terms every new leader should know.
   Each entry has:
     term    — the SAP term or acronym
     def     — plain-English definition (2-3 sentences)
     analogy — a one-liner mapping it to a familiar concept

   To add a term: copy an existing entry and fill in the fields.
   The glossary is searchable by both term and definition text.
──────────────────────────────────────────────────────────────── */
const GLOSSARY = [
  {
    term: "SAP BASIS",
    def: "The technical foundation team that keeps SAP running — system administration, performance tuning, security, upgrades, and landscape management. Without Basis, no one can log into SAP.",
    analogy: "Like your IT Ops / NOC team, but dedicated entirely to SAP."
  },
  {
    term: "S/4HANA",
    def: "SAP's modern ERP platform, rebuilt from the ground up on the HANA in-memory database. It is faster, simpler, and cloud-ready compared to older ECC systems. The mandatory destination for all SAP customers by 2027.",
    analogy: "SAP's cloud-native rewrite — like migrating a legacy monolith to a modern, in-memory platform."
  },
  {
    term: "ECC",
    def: "SAP's older ERP system (ERP Central Component). Mainstream maintenance ends March 2027. All organisations running ECC must migrate to S/4HANA — this is the single biggest SAP programme globally right now.",
    analogy: "The legacy system that must be modernised — like retiring an ageing on-premises data centre."
  },
  {
    term: "Transport",
    def: "The mechanism SAP uses to move changes — code, configuration, master data — from Development to Quality to Production in a controlled way. Every change goes through a transport request before it reaches Production.",
    analogy: "Exactly like a CI/CD pipeline — controlled, auditable promotion of changes across environment tiers."
  },
  {
    term: "Landscape",
    def: "The full set of SAP environments an organisation runs — typically Development (DEV), Quality/Test (QAS), and Production (PRD). Some organisations also have Sandbox and Training systems.",
    analogy: "Your dev / staging / prod environment tiers — same concept, SAP terminology."
  },
  {
    term: "BTP",
    def: "SAP Business Technology Platform — SAP's cloud platform for building extensions, integrations, analytics, and AI services. It is the recommended place to build anything that extends S/4HANA without modifying the core.",
    analogy: "SAP's version of AWS or Azure — their PaaS layer for extensibility, APIs, data services, and AI."
  },
  {
    term: "ABAP",
    def: "SAP's proprietary programming language (Advanced Business Application Programming). Used to build custom reports, enhancements, and integrations inside SAP systems. Basis teams support the runtime environment where ABAP code executes.",
    analogy: "Like Java for SAP — a typed, compiled language with its own runtime, debugger, and development environment (SE80/ADT)."
  },
  {
    term: "RISE with SAP",
    def: "SAP's bundled cloud migration offering — packages S/4HANA Cloud Private Edition, BTP credits, tools, and managed services into a single subscription contract. Designed to simplify the move to the cloud.",
    analogy: "A fully managed migration bundle — infrastructure, platform, tooling, and hyperscaler hosting as one SKU."
  },
  {
    term: "Clean Core",
    def: "SAP's strategic principle: keep the S/4HANA core standard and unmodified, and build all customisations and extensions outside on BTP using APIs and events. This reduces upgrade complexity and future-proofs the system.",
    analogy: "Microservices thinking applied to ERP — stable core, extend via APIs, never modify the base package."
  },
  {
    term: "Joule",
    def: "SAP's AI copilot — now evolved into a full agentic AI platform with 40+ autonomous agents and 2,400+ skills spanning S/4HANA, BTP, SuccessFactors, and Ariba. Joule can execute multi-step business processes, not just answer questions.",
    analogy: "SAP's Copilot layer — agentic AI deeply embedded in ERP business processes, orchestrated via BTP."
  },
  {
    term: "TCode",
    def: "Transaction code — a short alphanumeric command that takes a user directly to a specific SAP screen or function. For example, SE38 opens the ABAP editor, SM21 opens the system log, and PFCG manages roles.",
    analogy: "Like a CLI command or keyboard shortcut — instant navigation to any SAP function."
  },
  {
    term: "Client",
    def: "A self-contained unit within a single SAP system that has its own data, users, customisation, and configuration. Multiple clients can exist within one physical system — for example, a training client alongside a test client.",
    analogy: "Like tenants in a multi-tenant architecture — same underlying infrastructure, fully isolated data and config."
  },
  {
    term: "FI/CO",
    def: "Finance (FI) and Controlling (CO) — SAP's core financial accounting and management accounting modules. FI handles external reporting (balance sheet, P&L), CO handles internal cost centre and profitability reporting.",
    analogy: "The real-time financial engine of the business — every cost, revenue, and journal entry flows through here."
  },
  {
    term: "Basis Admin",
    def: "An SAP Basis administrator who manages day-to-day system health — performance monitoring, patching, user administration, transport management, and system refreshes. The Basis team is the engine room of any SAP operation.",
    analogy: "Your SAP sysadmin — the person who keeps the lights on so every other team can do their job."
  },
  {
    term: "HANA",
    def: "SAP HANA is SAP's proprietary in-memory database. It stores and processes data in RAM rather than on disk, enabling real-time analytics and faster transactions. S/4HANA is built exclusively on HANA.",
    analogy: "Like moving from a spinning hard disk to a massive RAM array — everything runs orders of magnitude faster."
  },
  {
    term: "Fiori",
    def: "SAP Fiori is SAP's modern user interface framework — a set of role-based, responsive web apps that replace the old SAP GUI. Fiori apps run in the browser and on mobile, making SAP accessible to non-technical users.",
    analogy: "SAP's UX modernisation — like replacing a command-line interface with a clean, role-based web app."
  }
];


/* ─── 5. QUICK QUESTIONS ─────────────────────────────────────────
   Suggested starter questions shown as quick-tap buttons in the
   chat pane. Mapped by background ID.
   The agent picks the matching set + fills remaining from `base`.
──────────────────────────────────────────────────────────────── */
const QUICK_QUESTIONS = {
  infra: [
    "How does SAP Basis map to IT Ops?",
    "What is a transport in SAP?"
  ],
  manufacturing: [
    "How does SAP manage production orders?",
    "Explain SAP MM through a manufacturing lens"
  ],
  finance: [
    "How does SAP FI/CO work?",
    "What does SAP mean for our P&L reporting?"
  ],
  sales: [
    "How does SAP SD manage order-to-cash?",
    "What is SAP CRM and how does it connect?"
  ],
  hr: [
    "What is SAP SuccessFactors?",
    "How does SAP manage payroll and headcount?"
  ],
  techarchitect: [
    "Walk me through SAP's architecture layers",
    "How does BTP fit into enterprise architecture?"
  ],
  strategy: [
    "What is the SAP 2027 migration landscape?",
    "How should I think about SAP ROI as a leader?"
  ],
  base: [
    "What is SAP Basis in simple terms?",
    "Explain the 2027 ECC deadline",
    "What is Joule AI in SAP?",
    "Latest SAP security risks 2026"
  ]
};


/* ─── 6. AGENT CONFIG ────────────────────────────────────────────
   Controls the AI model behaviour.
   - model: always use "claude-sonnet-4-6"
   - maxTokens: response length cap (1000 is a good balance)
   - webSearch: enables live search tool in every query
   - storageKey: sessionStorage key for profile persistence
──────────────────────────────────────────────────────────────── */
const AGENT_CONFIG = {
  model: "claude-sonnet-4-6",
  maxTokens: 1000,
  webSearch: true,
  storageKey: "sap_compass_profile",
  apiEndpoint: "https://api.anthropic.com/v1/messages"
};
