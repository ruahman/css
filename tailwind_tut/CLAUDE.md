# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # TypeScript check + Vite production build
npm run preview  # preview the production build locally
```

## Architecture

A multi-page Tailwind CSS tutorial built with Vite + React + TypeScript. Each route is a self-contained demo page showcasing one Tailwind feature category.

**Routing:** `BrowserRouter` in `App.tsx` wraps all pages. `Layout.tsx` provides the sticky nav across every page.

**Pages** (`src/pages/`): One file per Tailwind topic — Typography, Colors, Spacing, Flexbox, Grid, Responsive, States, Animations, DarkMode. Each page is educational: live demos alongside `<code>` labels showing the exact Tailwind classes used.

**Dark mode:** The `DarkMode` page toggles `dark` on `<html>` via `useEffect`. All `dark:` variant styles are scoped to that page — cleanup removes the class on unmount so other pages are unaffected.

## Tailwind v4

Uses `@tailwindcss/vite` plugin (no `tailwind.config.js`). The only CSS is:
```css
@import "tailwindcss";
```
in `src/index.css`. Dynamic class names (e.g. `bg-${color}-${shade}`) must be written as complete strings for Tailwind's content scanner to pick them up — avoid constructing class names at runtime.
