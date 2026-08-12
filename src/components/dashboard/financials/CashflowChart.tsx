"use client";

import React, { useState } from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function CashflowChart() {
  const { theme } = useTheme();
  const [activeMonthIdx, setActiveMonthIdx] = useState<number>(4); // May 2028 active matching mockup

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Monthly values for SVG paths (0..100 scale mapping to $0..$24k)
  const incomeData = [12, 14, 11, 15, 16, 18, 14, 19, 15, 13, 16, 14];
  const expenseData = [9, 11, 9, 12, 13, 10, 9, 12, 10, 8, 13, 11];

  const getSvgPoint = (idx: number, val: number) => {
    const x = (idx / 11) * 600 + 40;
    const y = 200 - (val / 24) * 160;
    return `${x},${y}`;
  };

  const incomePoints = incomeData.map((v, i) => getSvgPoint(i, v)).join(" L ");
  const expensePoints = expenseData.map((v, i) => getSvgPoint(i, v)).join(" L ");

  return (
    <div className="theme-card rounded-2xl border shadow-sm p-6 space-y-4">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-lg font-black theme-text tracking-tight">Cashflow</h4>
          <div className="flex items-center gap-4 text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-[#0f172a] dark:bg-slate-200"></span>
              <span className="theme-text">Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-[#ff3366]"></span>
              <span className="theme-text">Expense</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Year Dropdown Selector */}
          <div
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#ffffff" : "#0f172a",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-extrabold shadow-2xs cursor-pointer"
          >
            <span>This Year</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#00a8ff]" />
          </div>

          <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SVG Chart Container */}
      <div className="relative pt-4">
        {/* Y Axis Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between text-[10px] theme-muted font-bold pointer-events-none pb-6">
          <div className="border-b border-slate-100 dark:border-slate-800/60 pb-0.5">$24K</div>
          <div className="border-b border-slate-100 dark:border-slate-800/60 pb-0.5">$18K</div>
          <div className="border-b border-slate-100 dark:border-slate-800/60 pb-0.5">$12K</div>
          <div className="border-b border-slate-100 dark:border-slate-800/60 pb-0.5">$6K</div>
          <div className="border-b border-slate-100 dark:border-slate-800/60 pb-0.5">$0</div>
        </div>

        {/* SVG Drawing */}
        <div className="relative h-[220px] w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 680 220" preserveAspectRatio="none">
            {/* Area Fill Gradient for Expense */}
            <defs>
              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff3366" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ff3366" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Expense Area */}
            <path
              d={`M 40,200 L ${expensePoints} L 640,200 Z`}
              fill="url(#expenseGradient)"
            />

            {/* Income Line (Navy) */}
            <path
              d={`M ${incomePoints}`}
              fill="none"
              stroke={theme === "dark" ? "#ffffff" : "#0f172a"}
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Expense Line (Red) */}
            <path
              d={`M ${expensePoints}`}
              fill="none"
              stroke="#ff3366"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Active Month Dotted Indicator Line (May = index 4) */}
            <line
              x1={(4 / 11) * 600 + 40}
              y1="20"
              x2={(4 / 11) * 600 + 40}
              y2="200"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Interactive Tooltip Card matching Wheelzie mockup */}
          {activeMonthIdx === 4 && (
            <div
              style={{
                left: `${(4 / 11) * 100}%`,
                transform: "translateX(-40%)",
              }}
              className="absolute top-2 z-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 shadow-xl text-[10px] space-y-1 w-36 animate-in fade-in duration-200"
            >
              <p className="font-extrabold text-slate-500 uppercase tracking-wider text-[9px]">
                May 2028
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-600 dark:text-slate-400">Income</span>
                <span className="font-black theme-text">$18,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-600 dark:text-slate-400">Expense</span>
                <span className="font-black text-[#ff3366]">$14,200</span>
              </div>
            </div>
          )}
        </div>

        {/* X Axis Months Row */}
        <div className="flex justify-between items-center pt-3 text-[11px] font-bold theme-muted">
          {months.map((m, idx) => (
            <button
              key={m}
              onClick={() => setActiveMonthIdx(idx)}
              className={`hover:text-[#00a8ff] transition-colors ${
                idx === activeMonthIdx ? "text-[#00a8ff] font-black underline" : ""
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
