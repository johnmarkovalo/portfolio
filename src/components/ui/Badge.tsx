import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-[var(--bg-tertiary)] px-2.5 py-0.5 font-mono text-xs text-[var(--text-secondary)] transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}
