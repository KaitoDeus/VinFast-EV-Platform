"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function RentStatusChart() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.rentStatus")}</h3>
        <button
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] text-slate-200 transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
        >
          <span>{t("overview.thisWeek")}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
        </button>
      </div>

      {/* SVG Donut Chart */}
      <div className="relative flex items-center justify-center py-2">
        <svg className="w-[180px] h-[180px] -rotate-90 transform" viewBox="0 0 100 100">
          {/* Base Background Track */}
          <circle cx="50" cy="50" r="38" fill="none" stroke="#2a2a2a" strokeWidth="14" />
          
          {/* Hired Arc (58%) -> stroke-dasharray = 58*2.387 = 138.4, gap = 238.7 */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#00a8ff"
            strokeWidth="14"
            strokeDasharray="138.4 238.7"
            strokeDashoffset="0"
            className="transition-all duration-500"
          />

          {/* Pending Arc (24%) -> 24*2.387 = 57.3 */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#ff3366"
            strokeWidth="14"
            strokeDasharray="57.3 238.7"
            strokeDashoffset="-142"
            className="transition-all duration-500"
          />

          {/* Cancelled Arc (18%) -> 18*2.387 = 43 */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#475569"
            strokeWidth="14"
            strokeDasharray="43 238.7"
            strokeDashoffset="-204"
            className="transition-all duration-500"
          />
        </svg>

        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs text-slate-400 font-medium">{t("overview.totalStatus")}</span>
          <span className="text-xl font-extrabold text-white">100%</span>
        </div>
      </div>

      {/* Legend Breakdown List matching Mockup */}
      <div className="space-y-2 pt-2 border-t border-[#333333]">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00a8ff]" />
            <span className="text-slate-300 font-medium">{t("overview.hired")}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-white">
            <span>58%</span>
            <span className="text-emerald-400">↑</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ff3366]" />
            <span className="text-slate-300 font-medium">{t("overview.pending")}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-white">
            <span>24%</span>
            <span className="text-rose-400">↓</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-500" />
            <span className="text-slate-300 font-medium">{t("overview.cancelled")}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-white">
            <span>18%</span>
            <span className="text-emerald-400">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}
