"use client";

import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";

interface TechCarouselProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  iconSize?: number;
}

export function TechCarousel({
  items,
  className,
  speed = "normal",
  iconSize = 20,
}: TechCarouselProps) {
  const resolvedItems = items.map((name) => ({
    name,
    icon: getTechIcon(name),
  }));

  // Duplicate the list for seamless infinite scroll
  const doubledItems = [...resolvedItems, ...resolvedItems];

  const speedClass = {
    slow: "tech-carousel-slow",
    normal: "tech-carousel-normal",
    fast: "tech-carousel-fast",
  }[speed];

  return (
    <div
      className={cn("tech-carousel-container", className)}
      aria-label="Technologies used"
    >
      <div className={cn("tech-carousel-track", speedClass)}>
        {doubledItems.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="group/icon flex shrink-0 items-center gap-1.5 px-4 sm:px-6"
            title={item.name}
          >
            {item.icon ? (
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={iconSize}
                height={iconSize}
                className="shrink-0 fill-[var(--text-tertiary)] transition-colors duration-200 group-hover/icon:fill-[var(--text-primary)]"
                aria-hidden="true"
              >
                <path d={item.icon.path} />
              </svg>
            ) : (
              <span className="shrink-0 font-mono text-xs text-[var(--text-tertiary)] transition-colors duration-200 group-hover/icon:text-[var(--text-primary)]">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
