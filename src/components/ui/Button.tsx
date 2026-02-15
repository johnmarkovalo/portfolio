import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "default" | "sm";
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light active:bg-primary-dark",
    ghost:
      "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
  };

  const styles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
