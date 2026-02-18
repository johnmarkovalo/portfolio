"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { TechCarousel } from "@/components/ui/TechCarousel";

// All technologies flattened and deduplicated
const allTech = [
  "Laravel 11/12",
  "PHP 8.2+",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Vue 3",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Vite",
  "React Native",
  "Expo",
  "Kotlin",
  "SQLite",
  "Electron",
  "WebRTC",
  "JavaScript",
  "Vercel",
  "DigitalOcean",
  "GitHub Actions",
  "Linux",
  "jQuery",
];

export function TechStack() {
  return (
    <Section id="stack">
      <FadeUp>
        <SectionHeader
          label="Tech Stack"
          title="Our toolkit."
          description="We pick the right tool for the job — not the trendiest. Here's what powers our products."
        />
      </FadeUp>

      {/* Full-width carousel — breaks out of the max-w container */}
      <FadeUp>
        <div className="relative left-1/2 w-[100vw] -translate-x-1/2">
          <TechCarousel items={allTech} speed="normal" iconSize={28} />
        </div>
      </FadeUp>
    </Section>
  );
}
