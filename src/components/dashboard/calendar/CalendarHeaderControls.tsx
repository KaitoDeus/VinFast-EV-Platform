"use client";

import React from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface CalendarHeaderControlsProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function CalendarHeaderControls({
  selectedFilter,
  onFilterChange,
}: CalendarHeaderControlsProps) {
  const { lang, t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left Navigation: Today, Arrows, Month/Year */}
      <div className="flex items-center gap-3">
        <button
          className="px-4 py-2 text-xs font-semibold rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-white transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
        >
          {t("common.today")}
        </button>

        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
            title="Previous Week"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            className="p-2 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
            title="Next Week"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <h3 className="text-lg font-extrabold text-white tracking-tight ml-1">
          {lang === "vi" ? "Tháng 8, 2028" : "August 2028"}
        </h3>
      </div>

      {/* Right Controls: Filter Pills (All, Pickup, Return) & Week Dropdown */}
      <div className="flex items-center gap-3">
        {/* Filter Pills Container */}
        <div
          className="flex items-center p-1 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] shadow-2xs gap-1 text-xs font-extrabold"
        >
          <button
            onClick={() => onFilterChange("All")}
            className={`px-3.5 py-1.5 rounded-full transition-all font-black cursor-pointer ${
              selectedFilter === "All" ? "bg-[#ff3366] text-white shadow-md" : "text-slate-300 hover:text-white"
            }`}
          >
            {t("common.all")}
          </button>
          <button
            onClick={() => onFilterChange("Pickup")}
            className={`px-3.5 py-1.5 rounded-full transition-all font-black cursor-pointer ${
              selectedFilter === "Pickup" ? "bg-[#00a8ff] text-white shadow-md" : "text-slate-300 hover:text-white"
            }`}
          >
            {t("common.pickup")}
          </button>
          <button
            onClick={() => onFilterChange("Return")}
            className={`px-3.5 py-1.5 rounded-full transition-all font-black cursor-pointer ${
              selectedFilter === "Return" ? "bg-[#f43f5e] text-white shadow-md" : "text-slate-300 hover:text-white"
            }`}
          >
            {t("common.return")}
          </button>
        </div>

        {/* View Mode Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] text-white transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
          >
            <span>{lang === "vi" ? "Tuần" : "Week"}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
          </button>
        </div>
      </div>
    </div>
  );
}
