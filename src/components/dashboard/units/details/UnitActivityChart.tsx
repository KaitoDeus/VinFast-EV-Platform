"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function UnitActivityChart() {
  const { theme } = useTheme();

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      {/* Header with Title & Dropdown */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Activity</h3>
        <button
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            color: theme === "dark" ? "#ffffff" : "#0f172a",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all shadow-2xs hover:opacity-90"
        >
          <span>Last 8 Months</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff]" />
        </button>
      </div>

      {/* Subtitle Value */}
      <div className="space-y-0.5">
        <p className="text-[11px] theme-muted font-medium">Total traveled this year</p>
        <p className="text-2xl font-extrabold theme-text tracking-tight">489 Km</p>
      </div>

      {/* SVG Interactive Smooth Red Line Chart */}
      <div className="relative w-full h-[180px] pt-4">
        {/* Y Axis Labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] theme-muted font-medium">
          <span>120</span>
          <span>90</span>
          <span>60</span>
          <span>30</span>
          <span>0</span>
        </div>

        {/* Chart Canvas */}
        <div className="ml-8 h-full flex flex-col justify-between">
          <svg className="w-full h-[140px] overflow-visible" viewBox="0 0 500 140" preserveAspectRatio="none">
            {/* Horizontal Grid lines */}
            <line x1="0" y1="0" x2="500" y2="0" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />
            <line x1="0" y1="35" x2="500" y2="35" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="500" y2="70" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />
            <line x1="0" y1="105" x2="500" y2="105" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeDasharray="3 3" />
            <line x1="0" y1="140" x2="500" y2="140" stroke="currentColor" className="text-slate-200 dark:text-slate-800" />

            {/* Gradient Fill under path */}
            <defs>
              <linearGradient id="unitActivityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff3366" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff3366" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M 0 80 C 40 60, 80 40, 125 50 C 170 60, 210 110, 250 55 C 295 40, 335 85, 375 75 C 415 65, 455 35, 500 45 L 500 140 L 0 140 Z"
              fill="url(#unitActivityGradient)"
            />

            {/* Red Curve Line */}
            <path
              d="M 0 80 C 40 60, 80 40, 125 50 C 170 60, 210 110, 250 55 C 295 40, 335 85, 375 75 C 415 65, 455 35, 500 45"
              fill="none"
              stroke="#ff3366"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Dashed Vertical Guideline at March 2028 */}
            <line x1="210" y1="45" x2="210" y2="140" stroke="#ff3366" strokeDasharray="3 3" strokeWidth="1.5" />

            {/* Active Node Circle at March 2028 */}
            <circle cx="210" cy="110" r="5" fill="#ff3366" stroke="#ffffff" strokeWidth="2.5" className="shadow-md" />
          </svg>

          {/* Active Tooltip Callout matching mockup */}
          <div className="absolute left-[42%] top-[30px] -translate-x-1/2 bg-slate-900/90 text-white rounded-xl px-2.5 py-1 text-center shadow-lg z-20 border border-slate-700 pointer-events-none">
            <p className="text-[9px] text-slate-300 font-medium">Traveled on March 2028</p>
            <p className="text-xs font-extrabold text-white">65 Km</p>
          </div>

          {/* Month Labels */}
          <div className="flex justify-between text-[10px] theme-muted font-medium pt-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>
        </div>
      </div>
    </div>
  );
}
