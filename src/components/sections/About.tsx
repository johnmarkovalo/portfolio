"use client";

import { Rocket, Code2, Target, Zap } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { founderInfo } from "@/content/experience";

const values = [
  {
    icon: Rocket,
    title: "Ship Over Talk",
    description:
      "Working software beats perfect documentation. We prototype fast, iterate based on feedback, and deploy continuously.",
  },
  {
    icon: Code2,
    title: "Technical Depth",
    description:
      "We care about architecture, performance, and correctness. Quality isn't just UI-deep \u2014 it goes all the way to the infrastructure.",
  },
  {
    icon: Target,
    title: "Market-Grounded",
    description:
      "Every product starts with a validated problem. We build for specific markets \u2014 not abstract personas.",
  },
  {
    icon: Zap,
    title: "Simplicity First",
    description:
      "Complexity is easy. Simplicity is hard. We aim for the simplest solution that solves the problem.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-[var(--bg-secondary)]">
      <FadeUp>
        <SectionHeader
          label="About"
          title="Who we are."
          description="Symflo is a Philippine-based technology company that designs, builds, and ships software products. We're not an agency \u2014 we build our own products to solve problems we understand deeply."
        />
      </FadeUp>

      {/* Founder */}
      <FadeUp delay={0.1}>
        <div className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
              JM
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {founderInfo.name}
              </h3>
              <p className="text-sm font-medium text-primary">
                {founderInfo.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {founderInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.15}>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
          Our focus areas span SaaS platforms, mobile applications, AI-powered
          tools, and automation systems. Every product we create is grounded in
          real market needs, built with modern architecture, and designed to
          scale. We believe in shipping over talking, simplicity over complexity,
          and building things that actually work.
        </p>
      </FadeUp>

      {/* Values Grid */}
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <StaggerItem key={value.title}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
