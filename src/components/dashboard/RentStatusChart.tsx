"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function RentStatusChart() {
  const { theme } = useTheme();

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Rent Status</h3>
        <button
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            color: theme === "dark" ? "#ffffff" : "#0f172a",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all shadow-2xs hover:opacity-90"
        >
          <span>This Week</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff]" />
        </button>
      </div>

      {/* SVG Donut Chart */}
      <div className="relative flex items-center justify-center py-2">
        <svg className="w-[180px] h-[180px] -rotate-90 transform" viewBox="0 0 100 100">
          {/* Base Background Track */}
          <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="14" className="dark:stroke-slate-800" />
          
          {/* Hired Arc (58%) -> stroke-dasharray = 58*2.387 = 138.4, gap = 238.7 */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#00a8ff"
            strokeWidth="14"
            strokeDasharray="138.4 238.7"
            strokeDashoffset="0"
            className="dark:stroke-cyan-400 transition-all duration-500"
          />

          {/* Pending Arc (24%) -> 24*2.387 = 57.3 */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#ff3366"
            strokeWidth="14"
            strokeDasharray="57.3 238.7"
            strokeDashoffset="-142"
            className="transition-all duration-500"
          />

          {/* Cancelled Arc (18%) -> 18*2.387 = 43 */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="14"
            strokeDasharray="43 238.7"
            strokeDashoffset="-204"
            className="dark:stroke-slate-700 transition-all duration-500"
          />
        </svg>

        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs theme-muted font-medium">Total Status</span>
          <span className="text-xl font-extrabold theme-text">100%</span>
        </div>
      </div>

      {/* Legend Breakdown List matching Mockup */}
      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00a8ff] dark:bg-cyan-400" />
            <span className="theme-muted font-medium">Hired</span>
          </div>
          <div className="flex items-center gap-1 font-bold theme-text">
            <span>58%</span>
            <span className="text-emerald-500">↑</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ff3366]" />
            <span className="theme-muted font-medium">Pending</span>
          </div>
          <div className="flex items-center gap-1 font-bold theme-text">
            <span>24%</span>
            <span className="text-rose-500">↓</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-300 dark:bg-slate-700" />
            <span className="theme-muted font-medium">Cancelled</span>
          </div>
          <div className="flex items-center gap-1 font-bold theme-text">
            <span>18%</span>
            <span className="text-emerald-500">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}
