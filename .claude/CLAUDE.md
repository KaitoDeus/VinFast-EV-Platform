# VinFast EV Platform - AI Assistant Guide (Claude & AI Coding Agents)

This repository contains the **VinFast EV Platform**, an enterprise-grade web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. It features an official consumer landing page for smart electric scooters and a full-featured B2B fleet management & car rental admin dashboard.

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Next.js 16.3+ (App Router with Turbopack)
- **Language**: TypeScript 5.x (Strict mode enabled)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`) & CSS Variables (`src/app/globals.css`)
- **Icons**: Lucide React (`lucide-react`)
- **UI & Animations**: Custom CSS transitions, Framer Motion
- **Maps**: OpenStreetMap embedded with custom dark mode CSS filter & SVG telemetry overlays
- **Charts**: Recharts & custom SVG visualization

---

## 📂 Project Structure

```
├── src/
│   ├── app/                                 # Next.js App Router
│   │   ├── layout.tsx                       # Root layout (Metadata, Google Font Mulish, JSON-LD)
│   │   ├── page.tsx                         # Consumer Landing Page (Light/Dark mode)
│   │   ├── globals.css                      # Global design tokens & CSS variables
│   │   └── dashboard/                       # Fleet Management Dashboard (Dark Mode #1f1f1f)
│   │       ├── layout.tsx                   # Dashboard master layout (Enforced Dark Mode)
│   │       ├── page.tsx                     # Overview analytics & KPI stats
│   │       ├── tracking/page.tsx            # Live vehicle GPS tracking & telemetry
│   │       ├── messages/page.tsx            # B2B client chat & messaging thread
│   │       ├── bookings/page.tsx            # Fleet rental bookings management
│   │       ├── units/page.tsx               # Vehicle units inventory
│   │       ├── units/[id]/page.tsx          # Vehicle detail view
│   │       ├── calendar/page.tsx            # Schedule & maintenance calendar
│   │       ├── clients/page.tsx             # Customer profiles & loyalty tiers
│   │       ├── drivers/page.tsx             # Driver assignments & telemetry
│   │       └── financials/                  # Invoicing & Accounting
│   │           ├── payments/page.tsx        # Invoices, due dates & payment status
│   │           └── expenses/page.tsx        # Expense breakdown & cashflow charts
│   ├── components/
│   │   ├── analytics/                       # Google Analytics & Tracking scripts
│   │   ├── desktop/                         # Desktop-specific landing page sections (≥ 1024px)
│   │   ├── mobile/                          # Mobile-specific landing page sections (< 1024px)
│   │   ├── dashboard/                       # Dashboard sub-components
│   │   │   ├── TopHeader.tsx                # Dynamic top header with auto-route title
│   │   │   ├── Sidebar.tsx                  # Left navigation bar with crisp active/hover states
│   │   │   ├── DashboardFooter.tsx          # Minimal footer
│   │   │   ├── tracking/                    # Tracking sidebar list, telemetry info bar, map
│   │   │   ├── messages/                    # Chat sidebar, chat window, message list, input
│   │   │   ├── financials/                  # Payments/expenses tables, charts, invoice modals
│   │   │   └── ...                          # Units, Bookings, Calendar, Clients, Drivers
│   │   └── providers/                       # Context providers (ThemeProvider, LanguageProvider)
│   ├── types/
│   │   ├── dashboard.ts                     # Lean domain interfaces (TrackingItem, ConversationThread, etc.)
│   │   └── index.ts                         # Centralized type exports
│   └── data/
│       ├── mockDashboardData.ts             # Centralized mock data collections
│       └── index.ts                         # Centralized data exports
├── .claude/                                 # Claude Code & Desktop AI skills & rules
│   ├── CLAUDE.md                            # Master AI guide
│   ├── MEMORY.md                            # Complete Project Memory, History & Roadmap
│   └── skills/                              # Specialized AI skills
├── .cursor/                                 # Cursor IDE rules & MDC definitions
└── public/                                  # Static media assets & logos
```

> [!TIP]
> Chi tiết toàn bộ tiến trình phát triển và các quyết định cốt lõi xem tại [`.claude/MEMORY.md`](file:///D:/VinFast-FE/.claude/MEMORY.md).

---

## 🎨 Design System & Theme Rules

### 1. Dashboard Theme (Strict Dark Mode - `#1f1f1f`)
- **Master Background**: `#1f1f1f` (`bg-[#1f1f1f]`)
- **Card & Component Background**: `#1f1f1f` or `#262626` / `#2a2a2a`
- **Card Borders**: `#333333` / `rgba(255, 255, 255, 0.1)`
- **Primary Text**: Pure white (`#ffffff` / `text-white`)
- **Muted Text**: Slate gray (`#94a3b8` / `text-slate-400`)
- **Accent Primary**: Sky Cyan (`#00a8ff` / `#38bdf8`)
- **Accent Danger / Badge**: Rose / Coral (`#ff3366` / `#f43f5e`)
- **Important**: Light mode is **disabled** on the Dashboard. Never render bright white cards on `/dashboard/*`.

### 2. Landing Page Theme (Adaptive Light / Dark)
- Supports dual theme switching via `ThemeProvider` (`data-theme="light"` / `data-theme="dark"`).
- Uses CSS variables: `--background`, `--foreground`, `--header-bg`, `--card-bg`.
- Language support: Dual language (Vietnamese `vi` & English `en`) via `LanguageProvider`.

---

## 💻 Development Commands

```bash
# Install dependencies
npm install

# Start local development server with Turbopack (Port 3000)
npm run dev

# Run TypeScript type validation (Always check before completing tasks)
npx tsc --noEmit

# Build production bundle with Next.js Turbopack compiler
npm run build

# Run linter
npm run lint
```

---

## ⚡ Coding Standards for AI Pair Programmers

1. **Idiomatic Next.js App Router (Lean Architecture)**:
   - Prefer React State, Props, and direct data fetching from `@/data` and interfaces in `@/types`.
   - Avoid over-engineered Java/Spring DDD layers (do NOT re-introduce DI containers, abstract repositories, or redundant service singletons).
2. **Type Safety**:
   - Always declare strict interfaces in `src/types/dashboard.ts` or `src/types/index.ts`.
   - Never use `any` unless strictly required for legacy compatibility.
3. **Component Modularity**:
   - Client components interacting with user input or hooks (`useState`, `usePathname`, `useRouter`) must include `"use client";` at line 1.
   - Keep components focused, reusable, and cleanly organized under `src/components/dashboard/<feature>/`.
4. **Validation**:
   - Always run `npx tsc --noEmit` and `npm run build` after implementing features to guarantee 0 build or lint errors.
