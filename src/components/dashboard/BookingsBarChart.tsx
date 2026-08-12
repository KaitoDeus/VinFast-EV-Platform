"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function BookingsBarChart() {
  const { theme } = useTheme();

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
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Bookings Overview</h3>
        <button
          style={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            color: theme === "dark" ? "#ffffff" : "#0f172a",
            borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
          }}
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all shadow-2xs hover:opacity-90"
        >
          <span>This Year</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff]" />
        </button>
      </div>

      {/* SVG Bar Chart Container */}
      <div className="relative w-full h-[200px] pt-4">
        {/* Y Axis Grid Values */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] theme-muted font-medium">
          <span>1.2K</span>
          <span>900</span>
          <span>600</span>
          <span>300</span>
          <span>0</span>
        </div>

        {/* Bars Container */}
        <div className="ml-10 h-[170px] flex items-end justify-between px-2 gap-2 border-b border-slate-200 dark:border-slate-800 relative">
          {monthsData.map((item) => (
            <div key={item.month} className="flex flex-col items-center flex-1 h-full justify-end relative group">
              {item.isPeak && (
                <div className="absolute -top-7 bg-slate-900 text-white rounded-lg px-2 py-0.5 text-[10px] font-bold shadow-md z-10 animate-bounce">
                  {item.value}
                </div>
              )}
              <div
                style={{ height: `${item.height}px` }}
                className={`w-full max-w-[28px] rounded-t-lg transition-all duration-300 ${
                  item.isPeak
                    ? "bg-[#ff3366] shadow-md shadow-rose-500/30"
                    : "bg-slate-900 dark:bg-slate-200 hover:bg-[#00a8ff] dark:hover:bg-[#00a8ff]"
                }`}
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
