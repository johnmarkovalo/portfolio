"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FadeUp } from "@/components/motion/FadeUp";
import { projects } from "@/content/projects";
import { Project } from "@/types/project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--border-hover)]"
      style={
        {
          "--card-accent": project.accentColor,
        } as React.CSSProperties
      }
      whileHover={{
        y: -4,
        boxShadow: `0 0 40px ${project.accentColor}10`,
        borderColor: `${project.accentColor}40`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Screenshot Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-[var(--bg-secondary)] sm:h-56">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-5xl font-bold opacity-[0.06]"
            style={{ color: project.accentColor }}
          >
            {project.name}
          </div>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--surface)] to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 font-mono text-xs text-[var(--text-tertiary)]">
          _{project.number}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <span className="mb-2 text-xs font-medium tracking-wide text-[var(--text-tertiary)]">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          {project.tagline}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  // Split: first 4 in grid, last 1 full-width
  const gridProjects = projects.slice(0, 4);
  const featuredProject = projects[4];

  return (
    <Section id="work">
      <FadeUp>
        <SectionHeader
          label="Our Work"
          title="Products we've built."
          description="Every product starts with a problem worth solving. Here's what we've shipped."
        />
      </FadeUp>

      {/* 2-Column Grid */}
      <Stagger className="grid gap-6 md:grid-cols-2">
        {gridProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>

      {/* Full-Width Featured Card */}
      {featuredProject && (
        <FadeUp delay={0.2} className="mt-6">
          <motion.div
            className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--border-hover)]"
            style={
              {
                "--card-accent": featuredProject.accentColor,
              } as React.CSSProperties
            }
            whileHover={{
              y: -4,
              boxShadow: `0 0 40px ${featuredProject.accentColor}10`,
              borderColor: `${featuredProject.accentColor}40`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="grid md:grid-cols-2">
              {/* Screenshot Placeholder */}
              <div className="relative h-48 overflow-hidden bg-[var(--bg-secondary)] md:h-auto md:min-h-[280px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-5xl font-bold opacity-[0.06]"
                    style={{ color: featuredProject.accentColor }}
                  >
                    {featuredProject.name}
                  </div>
                </div>
                {/* Number badge */}
                <div className="absolute top-4 left-4 font-mono text-xs text-[var(--text-tertiary)]">
                  _{featuredProject.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 md:p-8">
                <span className="mb-2 text-xs font-medium tracking-wide text-[var(--text-tertiary)]">
                  {featuredProject.category}
                </span>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {featuredProject.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] md:text-base">
                  {featuredProject.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {featuredProject.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: featuredProject.accentColor,
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </FadeUp>
      )}
    </Section>
  );
}
