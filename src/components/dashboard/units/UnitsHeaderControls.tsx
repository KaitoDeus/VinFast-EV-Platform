"use client";

import React from "react";
import { Search, ChevronDown, Menu, LayoutGrid, Plus } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

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
  const { theme } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      {/* Search Bar */}
      <div className="relative flex-1 w-full lg:max-w-[320px]">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search client name, car, etc"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
        />
      </div>

      {/* Right Controls: Filters, View Toggle, Add Unit CTA */}
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        {/* Car Type Dropdown Filter */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#ffffff" : "#0f172a",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="pl-3.5 pr-8 py-2.5 text-xs font-semibold rounded-full border outline-none cursor-pointer shadow-2xs appearance-none"
          >
            <option value="All">Car Type</option>
            <option value="SUV">SUV</option>
            <option value="Crossover">Crossover</option>
            <option value="Compact">Compact</option>
            <option value="E-Scooter">E-Scooter</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Status Dropdown Filter */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#ffffff" : "#0f172a",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="pl-3.5 pr-8 py-2.5 text-xs font-semibold rounded-full border outline-none cursor-pointer shadow-2xs appearance-none"
          >
            <option value="All">Status</option>
            <option value="Available">Available</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* View Mode Toggle Buttons (Pure Pale Ice Blue & Clean White Pill) */}
        <div
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="flex items-center p-1 rounded-2xl border shadow-2xs gap-1"
        >
          <button
            onClick={() => onViewModeChange("list")}
            style={{
              backgroundColor: viewMode === "list" ? (theme === "dark" ? "#0f172a" : "#ffffff") : "transparent",
              color: viewMode === "list" ? "#00a8ff" : theme === "dark" ? "#cbd5e1" : "#475569",
              borderColor: viewMode === "list" ? (theme === "dark" ? "#334155" : "#bae6fd") : "transparent",
            }}
            className={`p-2 rounded-xl transition-all border ${
              viewMode === "list" ? "shadow-sm font-bold" : "hover:text-[#00a8ff]"
            }`}
            title="List View"
          >
            <Menu className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={() => onViewModeChange("grid")}
            style={{
              backgroundColor: viewMode === "grid" ? (theme === "dark" ? "#0f172a" : "#ffffff") : "transparent",
              color: viewMode === "grid" ? "#00a8ff" : theme === "dark" ? "#cbd5e1" : "#475569",
              borderColor: viewMode === "grid" ? (theme === "dark" ? "#334155" : "#bae6fd") : "transparent",
            }}
            className={`p-2 rounded-xl transition-all border ${
              viewMode === "grid" ? "shadow-sm font-bold" : "hover:text-[#00a8ff]"
            }`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Add Unit Red CTA Button */}
        <button
          onClick={onAddUnitClick}
          className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-4.5 py-2.5 rounded-full shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add Unit</span>
        </button>
      </div>
    </div>
  );
}
