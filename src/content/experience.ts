import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "VOCPhone",
    location: "Sydney, Australia",
    totalDuration: "4 years",
    roles: [
      {
        title: "App Development Lead",
        period: "Jan 2024 — Present",
        current: true,
      },
      {
        title: "Project Team Lead",
        period: "Feb 2024 — Dec 2024",
      },
      {
        title: "Full-stack Developer",
        period: "Mar 2022 — Feb 2024",
      },
    ],
    highlights: [
      "Led engineering team building cross-platform WebRTC audio calling ecosystem",
      "Architected scalable backend services supporting high-concurrency calling",
      "Owned full release lifecycle across iOS, Android, and Desktop (Electron)",
      "Served as final escalation point for critical production issues",
    ],
    stack: [
      "React Native",
      "Expo",
      "Electron",
      "WebRTC",
      "Laravel",
      "TypeScript",
    ],
    projects: [
      {
        name: "VOCPhone Mobile",
        description:
          "VoIP calling, messaging, SMS & video conferencing app — SIP/JSSIP engine, Matrix chat, WatermelonDB offline persistence, and 4 push notification handlers",
        tags: ["React Native", "Redux", "JSSIP", "Matrix SDK"],
      },
      {
        name: "VOCPhone Desktop",
        description:
          "Desktop counterpart mirroring mobile features — Lit web components with 14 context providers, IPC multi-window architecture, and Playwright E2E tests",
        tags: ["Electron", "Lit", "WatermelonDB", "JSSIP"],
      },
      {
        name: "VOCPhone Presence",
        description:
          "Real-time WebSocket broadcasting hub — BLF status mapping, Redis cache-first strategy, and private channels for CRM integrations (Salesforce, HubSpot)",
        tags: ["Laravel 11", "Laravel Reverb", "Redis"],
      },
      {
        name: "VOC Auth",
        description:
          "Authentication portal with 7 auth flows — QR code login, email/TOTP 2FA, device registration, Jitsi JWT, and multi-database user config assembly",
        tags: ["Laravel 10", "Sanctum", "JWT"],
      },
    ],
  },
  {
    company: "Zian Gaming Recreation, Inc",
    location: "Zamboanga, Philippines",
    totalDuration: "6+ years",
    roles: [
      {
        title: "Head of IT Department",
        period: "Feb 2024 — Present",
        current: true,
      },
      {
        title: "Full-stack Developer",
        period: "Jan 2023 — Feb 2024",
      },
      {
        title: "Web Developer",
        period: "Oct 2021 — Jan 2023",
      },
      {
        title: "Frontend Developer",
        period: "Apr 2019 — Jul 2019",
      },
    ],
    highlights: [
      "Established and now lead the entire IT department — built the technical architecture and operational workflows from the ground up",
      "Architected and shipped the core multi-user betting application with real-time data and high concurrency",
      "Built a full business information system, business portal, payroll system, inventory management, and sales platform",
      "Managed cloud and local server infrastructure for reliable deployment across all systems",
      "Continuously shipping new features and improving performance across the entire product suite",
    ],
    stack: ["Laravel", "Vue.js", "React Native", "Expo", "MySQL", "Linux", "Redis"],
    projects: [
      {
        name: "BettingApp",
        description:
          "Offline-first mobile betting app for field agents — local SQLite storage, thermal receipt printing, and background sync to cloud",
        tags: ["React Native", "TypeScript", "SQLite", "Redux"],
      },
      {
        name: "ZianAdmin",
        description:
          "Back-office admin portal with full HR/Finance suite — payroll, DTR, leave management, inventory, vouchers, and real-time transaction monitoring",
        tags: ["Laravel 12", "Vue 3", "Tailwind CSS"],
      },
      {
        name: "Zian API",
        description:
          "Central REST API and single source of truth — handles all transactions, auto-scrapes lottery results, and syncs sold-out combinations",
        tags: ["Laravel", "MySQL", "Sanctum"],
      },
      {
        name: "Monitoring App",
        description:
          "Read-only stakeholder dashboard showing gross/net metrics, draw results, and high-bet alerts across municipalities",
        tags: ["Expo", "React Native", "TypeScript"],
      },
      {
        name: "STL System",
        description:
          "Batch ticket generator for pre-printed lottery booklets — randomized bet numbers with multi-draw and multi-bet-type support",
        tags: ["Laravel 11", "Vue 3", "SQLite"],
      },
    ],
  },
  {
    company: "DreamersPH",
    location: "Philippines",
    totalDuration: "5 years 1 month",
    roles: [
      {
        title: "Web Developer",
        period: "Dec 2021 — Jul 2024",
      },
      {
        title: "Web Developer",
        period: "Jul 2019 — Dec 2021",
      },
    ],
    highlights: [
      "Long-term web development partnership spanning multiple projects",
      "Built and maintained production web applications over 5+ years",
    ],
    stack: ["PHP", "Laravel", "JavaScript", "MySQL"],
    projects: [
      {
        name: "Client Web Application",
        description: "Production web application built and maintained over 5+ years",
        tags: ["PHP", "Laravel", "JavaScript"],
      },
    ],
  },
  {
    company: "SecureLife International Corporation",
    location: "Zamboanga, Philippines",
    totalDuration: "9 months",
    roles: [
      {
        title: "Web Developer",
        period: "Jul 2019 — Mar 2020",
      },
    ],
    highlights: [
      "Built a multi-level marketing (MLM) platform with complex referral tree and commission structures",
      "Developed downline genealogy tracking with real-time visualization of network hierarchies",
      "Implemented automated commission computation engine handling multiple payout tiers and bonuses",
      "Built member dashboards for tracking earnings, recruitment, and rank progression",
    ],
    stack: ["PHP", "Laravel", "JavaScript", "MySQL", "jQuery"],
    projects: [
      {
        name: "MLM Platform",
        description: "Multi-level marketing platform with referral tree & commission engine",
        tags: ["PHP", "Laravel", "MySQL"],
      },
    ],
  },
];

export const founderInfo = {
  name: "John Mark Ovalo",
  title: "Founder & Lead Engineer",
  bio: "A full-stack developer from the Philippines with 7+ years of professional experience building products that scale. From leading engineering teams on real-time communication platforms to shipping SaaS products and mobile apps — Symflo is the culmination of everything I've built and learned.",
  startedCoding: "2018",
  linkedin: "https://linkedin.com/in/johnmarkovalo",
  email: "johnmarkovalo@gmail.com",
};
