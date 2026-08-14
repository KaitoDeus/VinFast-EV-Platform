---
name: vinfast-component-generator
description: >-
  Expert guide for generating accessible, responsive, and type-safe React components
  for the VinFast EV Platform (Landing Page and Fleet Management Dashboard).
---

# VinFast Component Generator Skill

This skill provides step-by-step instructions and templates for building new UI components in the VinFast EV Platform.

## 🎯 Component Design Principles

1. **Dashboard Components**:
   - Must support **Dark Mode (`#1f1f1f`)** by default.
   - Container background: `bg-[#1f1f1f]` or `bg-[#2a2a2a]`.
   - Card border: `border-[#333333]` or `border-slate-800`.
   - High-contrast text: `text-white` for primary headings, `text-slate-400` for subtitles.
   - Interactive elements: Smooth hover transitions, visible active states.

2. **Landing Page Components**:
   - Must support dual Light & Dark themes using `theme-bg`, `theme-card`, `theme-text`, `theme-muted`.
   - Responsive design with distinct Desktop (`hidden lg:flex`) and Mobile (`flex lg:hidden`) layouts.
   - Dual-language support through `useLanguage()` hook (`vi` and `en`).

---

## 📋 Component Boilerplate (Dashboard Feature)

```tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface CustomCardProps {
  title: string;
  subtitle: string;
  badge?: string;
  onClick?: () => void;
}

export function CustomCard({ title, subtitle, badge, onClick }: CustomCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1f1f1f] rounded-2xl border border-[#333333] p-5
        hover:bg-[#262626] transition-all cursor-pointer shadow-xs space-y-3"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-white tracking-tight">{title}</h4>
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ff3366]/20 text-[#ff3366]">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{subtitle}</p>
    </div>
  );
}
```
