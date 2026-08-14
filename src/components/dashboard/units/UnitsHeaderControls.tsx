"use client";

import React from "react";
import { Search, ChevronDown, Menu, LayoutGrid, Plus } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface UnitsHeaderControlsProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedType: string;
  onTypeChange: (t: string) => void;
  selectedStatus: string;
  onStatusChange: (s: string) => void;
  viewMode: "list" | "grid";
  onViewModeChange: (v: "list" | "grid") => void;
  onAddUnitClick: () => void;
}

export function UnitsHeaderControls({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  viewMode,
  onViewModeChange,
  onAddUnitClick,
}: UnitsHeaderControlsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      {/* Search Bar */}
      <div className="relative flex-1 w-full lg:max-w-[320px]">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={t("units.search")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#38bdf8]"
        />
      </div>

      {/* Right Controls: Filters, View Toggle, Add Unit CTA */}
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        {/* Car Type Dropdown Filter */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="pl-3.5 pr-8 py-2.5 text-xs font-semibold rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-white outline-none cursor-pointer shadow-2xs appearance-none"
          >
            <option value="All">{t("units.allTypes")}</option>
            <option value="SUV">SUV</option>
            <option value="Crossover">Crossover</option>
            <option value="Compact">Compact</option>
            <option value="E-Scooter">E-Scooter</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Status Dropdown Filter */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="pl-3.5 pr-8 py-2.5 text-xs font-semibold rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-white outline-none cursor-pointer shadow-2xs appearance-none"
          >
            <option value="All">{t("common.status")}: {t("common.all")}</option>
            <option value="Available">Available</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* View Mode Toggle Buttons */}
        <div
          className="flex items-center p-1 rounded-2xl border border-[#3a3a3a] bg-[#2a2a2a] shadow-2xs gap-1"
        >
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-2 rounded-xl transition-all border cursor-pointer ${
              viewMode === "list"
                ? "bg-[#1f1f1f] text-[#38bdf8] border-[#38bdf8]/40 shadow-sm font-bold"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
            title="List View"
          >
            <Menu className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-2 rounded-xl transition-all border cursor-pointer ${
              viewMode === "grid"
                ? "bg-[#1f1f1f] text-[#38bdf8] border-[#38bdf8]/40 shadow-sm font-bold"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Add Unit Red CTA Button */}
        <button
          onClick={onAddUnitClick}
          className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-4.5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{t("units.addUnit")}</span>
        </button>
      </div>
    </div>
  );
}
