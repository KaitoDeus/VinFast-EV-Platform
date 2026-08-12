"use client";

import React from "react";
import { Search, Plus, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface DriversHeaderControlsProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: string;
  onStatusFilterChange: (st: string) => void;
  onAddDriverClick: () => void;
}

export function DriversHeaderControls({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  onAddDriverClick,
}: DriversHeaderControlsProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Search Input */}
        <div className="relative flex-1 sm:w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search for driver"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
          />
        </div>

        {/* Status Dropdown Filter */}
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#ffffff" : "#0f172a",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="pl-3.5 pr-8 py-2.5 text-xs font-bold rounded-xl border outline-none appearance-none cursor-pointer shadow-2xs"
          >
            <option value="">Status: All</option>
            <option value="On Duty">On Duty</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Half-Day Leave">Half-Day Leave</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Add Driver Red CTA Button */}
      <button
        onClick={onAddDriverClick}
        className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0"
      >
        <Plus className="w-4 h-4" />
        <span>Add Driver</span>
      </button>
    </div>
  );
}
