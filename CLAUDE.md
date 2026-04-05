# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

Portfolio site for Mariale Trinidad (designer/researcher/illustrator). Uses **Next.js 16.2.2 App Router** with React 19, TypeScript (strict), and Tailwind CSS v4.

### Key conventions
- **App Router** only — all routes live under `app/`
- **Tailwind v4** — configured via `@import "tailwindcss"` in `globals.css` and `@tailwindcss/postcss` plugin; uses `@theme` directive (not `tailwind.config.js`)
- **Path alias** — `@/` maps to the project root
- **Fonts** — Geist Sans/Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`

### Static assets
- `public/navbar_logo.png` — navigation logo
- `public/hero_description.png` — hero section image
