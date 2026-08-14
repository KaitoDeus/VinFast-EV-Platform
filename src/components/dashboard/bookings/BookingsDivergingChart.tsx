"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function BookingsDivergingChart() {
  const { t } = useLanguage();

  const monthsData = [
    { month: "Jan", done: 40, canceled: 30, isPeak: false },
    { month: "Feb", height: 80, done: 65, canceled: 25, isPeak: false },
    { month: "Mar", done: 70, canceled: 20, isPeak: false },
    { month: "Apr", done: 85, canceled: 35, isPeak: false },
    { month: "May", done: 75, canceled: 15, isPeak: false },
    { month: "Jun", done: 110, canceled: 45, isPeak: true, value: 586 },
    { month: "Jul", done: 80, canceled: 25, isPeak: false },
    { month: "Aug", done: 65, canceled: 30, isPeak: false },
    { month: "Sep", done: 85, canceled: 20, isPeak: false },
    { month: "Oct", done: 100, canceled: 35, isPeak: false },
    { month: "Nov", done: 75, canceled: 15, isPeak: false },
    { month: "Dec", done: 95, canceled: 40, isPeak: false },
  ];

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.bookingsOverview")}</h3>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#ff3366]" />
              <span className="text-white">{t("bookings.done")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-300" />
              <span className="text-white">{t("overview.cancelled")}</span>
            </div>
          </div>
        </div>

        <button
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] text-slate-200 transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
        >
          <span>{t("overview.last8Month")}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
        </button>
      </div>

      {/* Diverging Bar Chart Canvas */}
      <div className="relative w-full h-[210px] pt-4">
        {/* Y Axis Grid Values */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-slate-400 font-medium">
          <span>600</span>
          <span>300</span>
          <span>0</span>
          <span>300</span>
          <span>600</span>
        </div>

        {/* Chart Baseline & Bars Container */}
        <div className="ml-10 h-[170px] flex items-center justify-between px-2 gap-2 relative">
          {/* Zero Axis Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-b border-[#333333] z-0" />

          {monthsData.map((item) => (
            <div key={item.month} className="flex flex-col items-center flex-1 h-full justify-center relative z-10">
              {item.isPeak && (
                <div className="absolute top-1 bg-slate-900 text-white rounded-lg px-2.5 py-1 text-center shadow-lg z-20 animate-bounce border border-slate-700">
                  <p className="text-[9px] text-slate-400 font-medium leading-none">{t("bookings.doneBookings")}</p>
                  <p className="text-xs font-extrabold leading-tight">{item.value}</p>
                </div>
              )}

              {/* Top Done Bar (Red) */}
              <div
                style={{ height: `${item.done * 0.7}px` }}
                className={`w-full max-w-[20px] rounded-t-sm bg-[#ff3366] transition-all duration-300 ${
                  item.isPeak ? "shadow-md shadow-rose-500/40" : ""
                }`}
              />

              {/* Bottom Canceled Bar (Dark Navy/Gray) */}
              <div
                style={{ height: `${item.canceled * 0.7}px` }}
                className="w-full max-w-[20px] rounded-b-sm bg-slate-400 transition-all duration-300"
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
