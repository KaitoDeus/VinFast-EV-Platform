# VinFast EV Platform - Master Design System

## 🎨 1. Core Color Palette

### 🌑 Dark Theme Canvas (Dashboard & Auth Base)
- **Primary Background**: `#141414` (Page Canvas)
- **Card & Surface Background**: `#1f1f1f`
- **Elevated Sub-cards & Inputs**: `#262626` / `#2a2a2a`
- **Border Default**: `#333333`
- **Border Highlight / Hover**: `#3a3a3a` / `#444444`

### 🔵 Brand Identity & Accent Colors
- **VinFast Signature Blue**: `#1464f4`
- **Electric Cyan / Highlight**: `#00a8ff` / `#38bdf8`
- **Action CTA Red / Vibrant Accent**: `#ff3366` / `#e02654`
- **Success / Healthy State**: `#10b981` / `#34d399`
- **Warning / Pending State**: `#f59e0b` / `#fbbf24`
- **Error / Overdue State**: `#f43f5e` / `#fb7185`

---

## 🔤 2. Typography & Hierarchy
- **Font Families**: Plus Jakarta Sans, Inter, system-ui
- **Page Titles**: `text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight`
- **Section Headers**: `text-lg sm:text-xl font-bold tracking-tight text-white`
- **Body & Controls**: `text-xs sm:text-sm font-medium text-slate-200`
- **Muted & Meta Info**: `text-[11px] sm:text-xs text-slate-400 font-medium`

---

## 📐 3. Component Geometry & Shapes
- **Container / Cards**: `rounded-2xl` (16px) with `border border-[#333333] shadow-sm`
- **Input Controls**: `rounded-xl` (12px) with `bg-[#2a2a2a] border border-[#3a3a3a] text-white focus:ring-2 focus:ring-[#38bdf8]`
- **Buttons (Primary / CTA)**: `rounded-xl` or `rounded-full` with `font-extrabold transition-all active:scale-95`
- **Status Pills / Badges**: `rounded-full text-[10px] sm:text-xs font-bold px-2.5 py-0.5`

---

## 📱 4. Responsive Breakpoints
- **Mobile (< 640px)**: Compact vertical card layouts, full-width inputs, touch-friendly CTA buttons (min height 44px), slide-in drawers.
- **Tablet (640px - 1024px)**: Adaptive 2-column grids, swipeable tables with horizontal cues.
- **Desktop (>= 1024px)**: Fixed sidebars, multi-column analytics, centered auth card containers (`max-w-md` / `max-w-lg`).
