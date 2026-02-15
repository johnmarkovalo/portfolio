import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    slug: "prompttix",
    name: "Prompttix",
    tagline: "Modernizing travel booking in Mindanao.",
    description:
      "A technology-first travel platform that delivers sub-2-minute flight booking, transparent all-in pricing, and self-service corporate dashboards. Built to replace fragmented, manual processes in the Philippine travel industry.",
    category: "SaaS \u00B7 Travel",
    accentColor: "#3B82F6",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "Amadeus GDS"],
    highlights: [
      "Sub-2-minute booking flow",
      "Zero hidden fees \u2014 all-in pricing",
      "B2B corporate travel dashboard",
    ],
    stack: ["Laravel 11", "Vue 3", "PostgreSQL", "Xendit"],
  },
  {
    number: "02",
    slug: "payfolk",
    name: "Payfolk",
    tagline: "People management, simplified for Philippine SMEs.",
    description:
      "A multi-tenant HR and payroll platform purpose-built for Philippine businesses. Handles SSS, PhilHealth, Pag-IBIG, and BIR compliance out of the box \u2014 so business owners can focus on their people, not paperwork.",
    category: "SaaS \u00B7 HR & Payroll",
    accentColor: "#10B981",
    tags: ["Laravel", "Vue.js", "MySQL", "Redis"],
    highlights: [
      "One-click batch payroll generation",
      "Full statutory compliance",
      "Employee self-service PWA",
    ],
    stack: ["Laravel 12", "Vue 3", "MySQL", "Redis"],
  },
  {
    number: "03",
    slug: "pitaka-ph",
    name: "PitakaPH",
    tagline: "Track expenses by just saying what you spent.",
    description:
      "A privacy-first expense tracker powered by on-device AI. Type \u2018Jollibee 250\u2019 and it just works \u2014 categorized, recorded, and analyzed without ever leaving your phone. Built for Filipinos who want simple money tracking.",
    category: "Mobile \u00B7 AI",
    accentColor: "#F59E0B",
    tags: ["React Native", "Expo", "SQLite", "ONNX"],
    highlights: [
      "< 5 second natural language entry",
      "100% offline capable",
      "On-device NLP \u2014 zero cloud dependency",
    ],
    stack: ["React Native", "Expo", "SQLite", "ONNX Runtime"],
  },
  {
    number: "04",
    slug: "claude-forge",
    name: "ClaudeForge",
    tagline: "Structured orchestration for AI coding agents.",
    description:
      "A multi-agent orchestration system for Claude Code that replaces vibes-based routing with real intent classification, cost controls, and observable state machines. Built for developers who want predictable AI workflows.",
    category: "Developer Tool \u00B7 AI",
    accentColor: "#8B5CF6",
    tags: ["TypeScript", "State Machines", "TF-IDF", "Claude"],
    highlights: [
      "Budget-aware model selection",
      "Typed checkpointing & resumable state",
      "TF-IDF indexed memory system",
    ],
    stack: ["TypeScript", "Claude API", "State Machines"],
  },
  {
    number: "05",
    slug: "betcomission-bot",
    name: "BetComissionBot",
    tagline: "Precision-coordinated multi-device automation.",
    description:
      "A centralized coordination platform that synchronizes actions across multiple mobile devices with \u00B150ms accuracy. Features commission-weighted allocation, real-time WebSocket communication, and comprehensive state management.",
    category: "Automation \u00B7 Platform",
    accentColor: "#EF4444",
    tags: ["Laravel", "Kotlin", "PostgreSQL", "WebSocket"],
    highlights: [
      "\u00B150ms synchronization accuracy",
      "Commission-weighted allocation engine",
      "Real-time WebSocket coordination",
    ],
    stack: ["Laravel 11", "Kotlin", "PostgreSQL", "Redis"],
  },
];
