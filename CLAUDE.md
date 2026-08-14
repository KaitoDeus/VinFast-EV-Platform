# VinFast EV Platform - AI Agent Instructions

This document provides mandatory project context, coding standards, and operational guidelines for all AI Coding Agents (Claude Code, Antigravity, Cursor, Windsurf, Copilot).

---

## 🚀 Quick Reference Commands

- **Development Server**: `npm run dev`
- **TypeScript Check**: `npx tsc --noEmit`
- **Turbopack Build**: `npm run build`
- **Lint Check**: `npm run lint`

---

## 🎯 Key Architectural Directives

1. **Dashboard Dark Mode Lock**:
   - The entire dashboard under `/dashboard/*` is permanently locked to **Dark Mode (`#1f1f1f`)**.
   - No light mode switcher is rendered in `TopHeader.tsx`.
   - Card backgrounds must use `#1f1f1f` / `#262626` / `#2a2a2a` with borders `#333333`.
2. **Landing Page Dual-Theme**:
   - The root landing page (`/`) supports Light and Dark mode via `ThemeProvider` and bilingual VI/EN via `LanguageProvider`.
3. **Lean Next.js Pattern**:
   - Types are located in `src/types/`.
   - Mock data & data access are located in `src/data/`.
   - Avoid redundant OOP classes, DI containers, or repository boilerplate.
