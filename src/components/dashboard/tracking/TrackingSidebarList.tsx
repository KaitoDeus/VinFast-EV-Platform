"use client";

import React from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
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
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      {/* ─── Search bar ─── */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t("tracking.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-[13px] rounded-lg
              bg-[#2a2a2a] border border-[#3a3a3a]
              text-white placeholder:text-slate-400
              outline-none focus:ring-2 focus:ring-[#38bdf8]
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
              className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3
                ${
                  isSelected
                    ? "bg-[#2a2a2a] border-[#38bdf8]/60 shadow-md ring-1 ring-[#38bdf8]/30"
                    : "bg-[#1f1f1f] border-[#333333] hover:bg-[#262626] hover:border-[#444444]"
                }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-12 h-12 rounded-xl bg-[#2a2a2a] p-1 shrink-0 overflow-hidden border border-[#333333]">
                  <Image src={v.carImage} alt={v.carModel} fill sizes="48px" className="object-contain" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[13px] font-bold text-white truncate">{v.carModel}</h4>
                  <p className="text-[11px] text-slate-400 truncate">{v.clientName}</p>
                  <p className="text-[10px] text-slate-500 font-mono font-bold mt-0.5">{v.carNumber}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                    v.status === "On Trip"
                      ? "bg-sky-950 text-sky-400 border border-sky-800/40"
                      : "bg-rose-950 text-rose-400 border border-rose-800/40"
                  }`}
                >
                  {v.status}
                </span>
                <p className="text-[11px] font-bold text-slate-300 mt-1">{v.totalDistance}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── Add Car CTA ─── */}
      <button
        onClick={onAddCarClick}
        className="w-full py-3 rounded-xl bg-[#ff3366] hover:bg-[#e02654] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
      >
        <Plus className="w-4 h-4" />
        <span>{t("tracking.addVehicle")}</span>
      </button>
    </div>
  );
}
