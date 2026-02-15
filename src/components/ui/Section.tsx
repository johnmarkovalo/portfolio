import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-spacing px-6 md:px-12 lg:px-16", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {label && (
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
