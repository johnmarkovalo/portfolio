"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FlowingWaves } from "@/components/ui/FlowingWaves";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "5", label: "Products Built" },
  { value: "Full-Stack", label: "Capability" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16 md:px-12 lg:px-16">
      {/* Background Effects */}
      <div className="gradient-mesh" />
      <FlowingWaves />
      <div className="dot-grid" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Building products that matter
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We build software{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              that works.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl"
          >
            Symflo is a technology company creating SaaS platforms, mobile apps,
            and developer tools. We ship real products that solve real problems.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#work">
              See Our Work
              <ArrowDown size={16} className="ml-1" />
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-0"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && (
                  <div className="mx-6 hidden h-8 w-px bg-[var(--border)] sm:block sm:mx-10" />
                )}
                <div className="text-center">
                  <div className="text-xl font-bold tracking-tight sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs tracking-wide text-[var(--text-tertiary)] sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[var(--text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
