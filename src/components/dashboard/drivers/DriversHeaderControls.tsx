"use client";

import React from "react";
import { Search, Plus, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

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
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Search Input */}
        <div className="relative flex-1 sm:w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t("drivers.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#38bdf8]"
          />
        </div>

        {/* Status Dropdown Filter */}
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            className="pl-3.5 pr-8 py-2.5 text-xs font-bold rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-white outline-none appearance-none cursor-pointer shadow-2xs"
          >
            <option value="">{t("common.status")}: {t("common.all")}</option>
            <option value="On Duty">On Duty</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Half-Day Leave">Half-Day Leave</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Add Driver Red CTA Button */}
      <button
        onClick={onAddDriverClick}
        className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        <span>{t("drivers.addDriver")}</span>
      </button>
    </div>
  );
}
