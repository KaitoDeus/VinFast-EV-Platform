---
name: vinfast-ui-styleguide
description: >-
  Reference for UI design tokens, color palettes, responsive rules, and aesthetics
  for the VinFast EV Platform.
---

# VinFast UI Styleguide Skill

This skill contains the design tokens, color palette, and visual hierarchy standards for the VinFast platform.

---

## 🎨 Color Palette Reference

| Purpose | HEX Code | Tailwind Utility / CSS Var | Usage |
|---|---|---|---|
| **Dashboard Master Background** | `#1f1f1f` | `bg-[#1f1f1f]` | Main screen background, sidebar, header |
| **Card / Panel Background** | `#262626` / `#2a2a2a` | `bg-[#262626]` | Content containers, table cards, modals |
| **Border Dark** | `#333333` | `border-[#333333]` | Card outlines, dividers |
| **VinFast Electric Blue** | `#1464f4` | `bg-[#1464f4]`, `text-[#1464f4]` | Primary branding, hero CTA buttons |
| **Active Cyan Accent** | `#00a8ff` / `#38bdf8` | `text-[#38bdf8]` | Active nav items, focus rings |
| **Danger / Coral Alert** | `#ff3366` | `bg-[#ff3366]` | Badges, overdue alerts, add buttons |
| **Success Emerald** | `#10b981` | `text-emerald-400` | Positive trends, online status |

---

## 📐 Typography & Spacing

- **Font Family**: Mulish (`var(--font-mulish)`), system-ui, sans-serif
- **Page Titles**: `text-2xl lg:text-[26px] font-bold text-white tracking-tight`
- **Section Headers**: `text-base font-bold text-white`
- **Body Text**: `text-xs lg:text-sm text-slate-300 font-medium`
- **Captions / Meta**: `text-[11px] text-slate-400 font-normal`
- **Standard Border Radius**: `rounded-2xl` for cards, `rounded-xl` for buttons/inputs, `rounded-full` for avatars & badges.
