"use client";

import { Briefcase, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TechCarousel } from "@/components/ui/TechCarousel";
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

              {/* Deployed Projects */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)]">
                    Deployed Work
                  </span>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {exp.projects.map((project) => (
                      <div
                        key={project.name}
                        className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-3 transition-colors hover:border-[var(--border-hover)]"
                      >
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium text-[var(--text-primary)]">
                            {project.name}
                          </h4>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[var(--text-tertiary)] transition-colors hover:text-primary"
                              aria-label={`Visit ${project.name}`}
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                          {project.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-tertiary)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Carousel */}
              <div className="mt-4">
                <TechCarousel items={exp.stack} speed="fast" iconSize={18} />
              </div>
            </div>
          </StaggerItem>
        ))}

      </Stagger>
    </Section>
  );
}
