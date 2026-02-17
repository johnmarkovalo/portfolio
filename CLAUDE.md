# Symflo Portfolio

## Overview
Single-page portfolio for Symflo (symflo.dev), a technology company by John Mark Ovalo. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Architecture
- **App Router** — `src/app/layout.tsx` (root layout), `src/app/page.tsx` (single page)
- **Sections** — `src/components/sections/` (Hero, Projects, Experience, About, TechStack, Contact)
- **Layout** — `src/components/layout/` (Navbar, Footer)
- **UI primitives** — `src/components/ui/` (Button, Badge, Section, ThemeProvider, LenisProvider, FlowingWaves)
- **Motion utilities** — `src/components/motion/` (FadeUp, Stagger — scroll-triggered animations)
- **Content data** — `src/content/` (projects.ts, experience.ts)
- **Types** — `src/types/` (project.ts, experience.ts)
- **Lib** — `src/lib/utils.ts` (`cn()` for class merging), `src/lib/constants.ts` (site config, nav links)

## Styling Conventions
- **Tailwind CSS v4** with `@theme inline` design tokens in `globals.css`
- CSS custom properties for theming: `--bg-primary`, `--text-secondary`, `--surface`, `--border`, etc.
- Use `cn()` from `src/lib/utils.ts` for conditional class merging (`clsx` + `tailwind-merge`)
- Brand color: indigo `#6366F1` (`--color-primary`)
- Inline CSS vars in Tailwind: `bg-[var(--surface)]`, `text-[var(--text-secondary)]`

## Theme System
- Dark theme by default, light theme via toggle
- Uses `next-themes` with `attribute="data-theme"` on `<html>`
- Theme-specific styles: `[data-theme="light"] .class-name { ... }` in globals.css
- Fonts: Geist Sans (body) + Geist Mono (labels, badges)

## Animation Patterns
- **Framer Motion** for entrance/interaction animations (fade-up, stagger, hover effects)
- **CSS `@keyframes`** for ambient background effects (gradient mesh float, wave drift)
- Always respect `prefers-reduced-motion` — use `useReducedMotion()` hook (Framer) or `@media` query (CSS)
- Ease curve: `[0.16, 1, 0.3, 1]` for snappy entrance animations

## Component Patterns
- Named exports for all components (no default exports)
- `"use client"` only when needed (hooks, Framer Motion interactions, event handlers)
- Background effects: absolutely positioned with `inset: 0`, `pointer-events: none`
- Section components use `<Section>` and `<SectionHeader>` wrappers from `src/components/ui/Section.tsx`
- Smooth scrolling via Lenis (`LenisProvider` wraps the page)
