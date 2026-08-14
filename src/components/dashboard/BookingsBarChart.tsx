"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function BookingsBarChart() {
  const { t } = useLanguage();

  const monthsData = [
    { month: "Jan", height: 60, isPeak: false },
    { month: "Feb", height: 85, isPeak: false },
    { month: "Mar", height: 65, isPeak: false },
    { month: "Apr", height: 95, isPeak: false },
    { month: "May", height: 130, isPeak: true, value: 985 },
    { month: "Jun", height: 75, isPeak: false },
    { month: "Jul", height: 110, isPeak: false },
    { month: "Aug", height: 90, isPeak: false },
    { month: "Sep", height: 105, isPeak: false },
    { month: "Oct", height: 95, isPeak: false },
    { month: "Nov", height: 70, isPeak: false },
    { month: "Dec", height: 100, isPeak: false },
  ];

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.bookingsOverview")}</h3>
        <button
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] text-slate-200 transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
        >
          <span>{t("overview.thisYear")}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
        </button>
      </div>

      {/* SVG Bar Chart Container */}
      <div className="relative w-full h-[200px] pt-4">
        {/* Y Axis Grid Values */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-slate-400 font-medium">
          <span>1.2K</span>
          <span>900</span>
          <span>600</span>
          <span>300</span>
          <span>0</span>
        </div>

        {/* Bars Container */}
        <div className="ml-10 h-[170px] flex items-end justify-between px-2 gap-2 border-b border-[#333333] relative">
          {monthsData.map((item) => (
            <div key={item.month} className="flex flex-col items-center flex-1 h-full justify-end relative group">
              {item.isPeak && (
                <div className="absolute -top-7 bg-slate-900 text-white rounded-lg px-2 py-0.5 text-[10px] font-bold shadow-md z-10 animate-bounce border border-slate-700">
                  {item.value}
                </div>
              )}
              <div
                style={{ height: `${item.height}px` }}
                className={`w-full max-w-[28px] rounded-t-lg transition-all duration-300 ${
                  item.isPeak
                    ? "bg-[#ff3366] shadow-md shadow-rose-500/30"
                    : "bg-[#2a2a2a] hover:bg-[#00a8ff]"
                }`}
              />
              <span className="text-[10px] text-slate-400 font-semibold mt-2 absolute -bottom-5">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
