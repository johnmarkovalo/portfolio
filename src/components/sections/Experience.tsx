"use client";

import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience">
      <FadeUp>
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          description="7+ years of professional experience building real-time platforms, SaaS products, and mobile applications across companies in Australia and the Philippines."
        />
      </FadeUp>

      {/* Timeline */}
      <Stagger className="relative space-y-8">
        {/* Wavy timeline line */}
        <div className="timeline-wave-line absolute top-8 bottom-8 left-[13px] hidden w-[14px] sm:block" aria-hidden="true">
          <div className="timeline-wave-glow absolute inset-0" />
        </div>

        {experiences.map((exp) => (
          <StaggerItem key={exp.company}>
            <div className="group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] sm:ml-12">
              {/* Timeline dot */}
              <div className="absolute top-8 -left-[25px] hidden h-3 w-3 rounded-full border-2 border-primary bg-[var(--bg-primary)] sm:block" />

              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase
                      size={16}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold tracking-tight">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                    {exp.location} · {exp.totalDuration}
                  </p>
                </div>

                {/* Current badge */}
                {exp.roles[0].current && (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>

              {/* Roles */}
              <div className="mt-4 space-y-1.5">
                {exp.roles.map((role) => (
                  <div
                    key={`${role.title}-${role.period}`}
                    className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3"
                  >
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {role.title}
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)]">
                      {role.period}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-tertiary)]"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}

      </Stagger>
    </Section>
  );
}
