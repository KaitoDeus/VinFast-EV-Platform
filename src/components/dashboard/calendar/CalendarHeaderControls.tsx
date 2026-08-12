"use client";

import React from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface CalendarHeaderControlsProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function CalendarHeaderControls({
  selectedFilter,
  onFilterChange,
}: CalendarHeaderControlsProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left Navigation: Today, Arrows, Month/Year */}
      <div className="flex items-center gap-3">
        <button
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            color: theme === "dark" ? "#ffffff" : "#0f172a",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="px-4 py-2 text-xs font-semibold rounded-xl border transition-all shadow-2xs hover:opacity-90"
        >
          Today
        </button>

        <div className="flex items-center gap-1">
          <button
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="p-2 rounded-xl border text-[#00a8ff] transition-all shadow-2xs hover:opacity-90"
            title="Previous Week"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="p-2 rounded-xl border text-[#00a8ff] transition-all shadow-2xs hover:opacity-90"
            title="Next Week"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <h3 className="text-lg font-extrabold theme-text tracking-tight ml-1">August 2028</h3>
      </div>

      {/* Right Controls: Filter Pills (All, Pickup, Return) & Week Dropdown */}
      <div className="flex items-center gap-3">
        {/* Filter Pills Container */}
        <div
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="flex items-center p-1 rounded-full border shadow-2xs gap-1 text-xs font-extrabold"
        >
          <button
            onClick={() => onFilterChange("All")}
            style={{
              backgroundColor: selectedFilter === "All" ? "#ff3366" : "transparent",
              color: selectedFilter === "All" ? "#ffffff" : theme === "dark" ? "#ffffff" : "#000000",
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all font-black cursor-pointer ${
              selectedFilter === "All" ? "shadow-md" : "hover:bg-white/80 dark:hover:bg-slate-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange("Pickup")}
            style={{
              backgroundColor: selectedFilter === "Pickup" ? "#00a8ff" : "transparent",
              color: selectedFilter === "Pickup" ? "#ffffff" : theme === "dark" ? "#ffffff" : "#000000",
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all font-black cursor-pointer ${
              selectedFilter === "Pickup" ? "shadow-md" : "hover:bg-white/80 dark:hover:bg-slate-800"
            }`}
          >
            Pickup
          </button>
          <button
            onClick={() => onFilterChange("Return")}
            style={{
              backgroundColor: selectedFilter === "Return" ? "#f43f5e" : "transparent",
              color: selectedFilter === "Return" ? "#ffffff" : theme === "dark" ? "#ffffff" : "#000000",
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all font-black cursor-pointer ${
              selectedFilter === "Return" ? "shadow-md" : "hover:bg-white/80 dark:hover:bg-slate-800"
            }`}
          >
            Return
          </button>
        </div>

        {/* View Mode Dropdown */}
        <div className="relative">
          <button
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#ffffff" : "#0f172a",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border transition-all shadow-2xs hover:opacity-90"
          >
            <span>Week</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff]" />
          </button>
        </div>
      </div>
    </div>
  );
}
