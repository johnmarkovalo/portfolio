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
