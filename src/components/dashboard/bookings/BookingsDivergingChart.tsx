"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function BookingsDivergingChart() {
  const { theme } = useTheme();

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
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h3 className="text-lg font-bold theme-text tracking-tight">Bookings Overview</h3>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#ff3366]" />
              <span className="theme-text">Done</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-900 dark:bg-slate-200" />
              <span className="theme-text">Canceled</span>
            </div>
          </div>
        </div>

        <button
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            color: theme === "dark" ? "#ffffff" : "#0f172a",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all shadow-2xs hover:opacity-90"
        >
          <span>Last 8 Month</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff]" />
        </button>
      </div>

      {/* Diverging Bar Chart Canvas */}
      <div className="relative w-full h-[210px] pt-4">
        {/* Y Axis Grid Values */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] theme-muted font-medium">
          <span>600</span>
          <span>300</span>
          <span>0</span>
          <span>300</span>
          <span>600</span>
        </div>

        {/* Chart Baseline & Bars Container */}
        <div className="ml-10 h-[170px] flex items-center justify-between px-2 gap-2 relative">
          {/* Zero Axis Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-b border-slate-300 dark:border-slate-700 z-0" />

          {monthsData.map((item) => (
            <div key={item.month} className="flex flex-col items-center flex-1 h-full justify-center relative z-10">
              {item.isPeak && (
                <div className="absolute top-1 bg-slate-900 text-white rounded-lg px-2.5 py-1 text-center shadow-lg z-20 animate-bounce">
                  <p className="text-[9px] text-slate-400 font-medium leading-none">Done Bookings</p>
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
                className="w-full max-w-[20px] rounded-b-sm bg-slate-900 dark:bg-slate-200 transition-all duration-300"
              />

              <span className="text-[10px] theme-muted font-semibold mt-2 absolute -bottom-5">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
