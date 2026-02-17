"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const stackCategories = [
  {
    label: "Backend",
    items: ["Laravel 11/12", "PHP 8.2+", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "Frontend",
    items: ["Vue 3", "React", "Next.js", "Tailwind CSS", "TypeScript", "Vite"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Kotlin", "SQLite"],
  },
  {
    label: "Desktop",
    items: ["Electron", "WebRTC", "Cross-platform Builds"],
  },
  {
    label: "AI / NLP",
    items: ["ONNX Runtime", "all-MiniLM-L6-v2", "TF-IDF", "Claude API"],
  },
  {
    label: "Real-Time",
    items: ["Laravel Reverb", "WebSocket", "Redis Pub/Sub", "WebRTC"],
  },
  {
    label: "Infrastructure",
    items: ["Vercel", "DigitalOcean", "Laravel Forge", "GitHub Actions", "Linux"],
  },
];

export function TechStack() {
  return (
    <Section id="stack">
      <FadeUp>
        <SectionHeader
          label="Tech Stack"
          title="Our toolkit."
          description="We pick the right tool for the job \u2014 not the trendiest. Here's what powers our products."
        />
      </FadeUp>

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((category, i) => (
          <StaggerItem
            key={category.label}
            className={
              i === stackCategories.length - 1 &&
              stackCategories.length % 3 === 1
                ? "lg:col-start-2"
                : undefined
            }
          >
            <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                {category.label}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--text-tertiary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
