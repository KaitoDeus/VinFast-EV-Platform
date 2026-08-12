"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function UnitDetailsHeader() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      {/* Back Arrow Button (Pale Ice Blue Background in Light Mode) */}
      <Link
        href="/dashboard/units"
        style={{
          backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
          color: theme === "dark" ? "#ffffff" : "#0f172a",
          borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
        }}
        className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all shadow-2xs hover:opacity-90 shrink-0"
      >
        <ArrowLeft className="w-5 h-5 text-[#00a8ff]" />
      </Link>

      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5 text-xs theme-muted font-medium">
          <Link href="/dashboard/units" className="hover:text-[#00a8ff] transition-colors">
            Units
          </Link>
          <span>/</span>
          <span className="theme-text font-bold">Unit Details</span>
        </div>
        <h2 className="text-2xl font-extrabold theme-text tracking-tight">Unit Details</h2>
      </div>
    </div>
  );
}
