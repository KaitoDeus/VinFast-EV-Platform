"use client";

import React from "react";
import { Search, Plus } from "lucide-react";

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
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Search Input */}
      <div className="relative flex-1 w-full sm:max-w-[320px]">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search for client"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
        />
      </div>

      {/* Add Client Red CTA Button */}
      <button
        onClick={onAddClientClick}
        className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0"
      >
        <Plus className="w-4 h-4" />
        <span>Add Client</span>
      </button>
    </div>
  );
}
