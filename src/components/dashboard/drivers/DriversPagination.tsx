"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function DriversPagination() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs">
      {/* Results per page selector */}
      <div className="flex items-center gap-2 theme-muted">
        <span>Results per page</span>
        <div className="relative">
          <select
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#ffffff" : "#0f172a",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="pl-3 pr-7 py-1 text-xs font-semibold rounded-lg border outline-none appearance-none cursor-pointer shadow-2xs"
          >
            <option value="11">11</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <ChevronDown className="w-3 h-3 text-[#00a8ff] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Page Buttons (Clean White Pills with Light Slate & Soft Blue Hover) */}
      <div className="flex items-center gap-1.5 font-semibold">
        <button className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all shadow-2xs">
          &lt; Prev
        </button>
        <button className="w-8.5 h-8.5 rounded-xl bg-[#ff3366] text-white font-extrabold flex items-center justify-center shadow-md">
          1
        </button>
        <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
          2
        </button>
        <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
          3
        </button>
        <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
          4
        </button>
        <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
          5
        </button>
        <button className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all shadow-2xs">
          Next &gt;
        </button>
      </div>
    </div>
  );
}
