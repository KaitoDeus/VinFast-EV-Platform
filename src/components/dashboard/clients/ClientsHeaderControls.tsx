"use client";

import React from "react";
import { Search, Plus } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface ClientsHeaderControlsProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onAddClientClick: () => void;
}

export function ClientsHeaderControls({
  searchQuery,
  onSearchChange,
  onAddClientClick,
}: ClientsHeaderControlsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Search Input */}
      <div className="relative flex-1 w-full sm:max-w-[320px]">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={t("clients.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#38bdf8]"
        />
      </div>

      {/* Add Client Red CTA Button */}
      <button
        onClick={onAddClientClick}
        className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        <span>{t("clients.addClient")}</span>
      </button>
    </div>
  );
}
