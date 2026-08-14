"use client";

import React from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { TrackingItem } from "@/types";

interface TrackingSidebarListProps {
  vehicles: TrackingItem[];
  selectedVehicleId: string;
  onSelectVehicle: (v: TrackingItem) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onAddCarClick: () => void;
}

export function TrackingSidebarList({
  vehicles,
  selectedVehicleId,
  onSelectVehicle,
  searchQuery,
  onSearchChange,
  onAddCarClick,
}: TrackingSidebarListProps) {
  return (
    <div className="space-y-3">
      {/* ─── Search bar ─── */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for client or car"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-[13px] rounded-lg
              bg-[#2a2a2a] border border-[#3a3a3a]
              text-white placeholder:text-slate-400
              outline-none focus:ring-2 focus:ring-slate-500
              transition-all"
          />
        </div>
        <button
          className="p-2.5 rounded-lg border border-[#3a3a3a]
            bg-[#2a2a2a] text-slate-300
            hover:bg-[#333333] transition-colors cursor-pointer"
          title="Filter"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* ─── Vehicle card list ─── */}
      <div className="space-y-2 max-h-[680px] overflow-y-auto pr-0.5 scrollbar-thin">
        {vehicles.map((v) => {
          const isSelected = v.id === selectedVehicleId;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onSelectVehicle(v)}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer
                ${
                  isSelected
                    ? "bg-[#2a2a2a] border border-slate-500 ring-1 ring-slate-500"
                    : "bg-[#1f1f1f] border border-[#333333] hover:bg-[#262626]"
                }`}
            >
              {/* Car thumbnail */}
              <div className="relative w-[72px] h-[48px] shrink-0 rounded-lg overflow-hidden bg-neutral-800">
                <Image src={v.carImage} alt={v.carModel} fill sizes="72px" className="object-cover" />
              </div>

              {/* Name & car */}
              <div className="flex-1 min-w-0 space-y-0.5">
                <p className="text-[13px] font-semibold text-white truncate leading-tight">
                  {v.clientName}
                </p>
                <p className="text-[11px] text-slate-400 truncate leading-tight flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-5H8L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                  {v.carModel}
                </p>
              </div>

              {/* Status badge */}
              <span
                className={`shrink-0 px-2.5 py-[3px] rounded-md text-[10px] font-bold leading-none
                  ${
                    v.status === "On Trip"
                      ? "bg-sky-950/80 text-sky-300 border border-sky-800/40"
                      : "bg-rose-950/80 text-rose-300 border border-rose-800/40"
                  }`}
              >
                {v.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─── Add Car CTA ─── */}
      <button
        onClick={onAddCarClick}
        className="w-full flex items-center justify-center gap-1.5
          bg-[#ff3366] hover:bg-[#e02654] active:scale-[0.98]
          text-white font-bold text-[13px] py-3 rounded-xl
          shadow-md transition-all cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        Add Car
      </button>
    </div>
  );
}
