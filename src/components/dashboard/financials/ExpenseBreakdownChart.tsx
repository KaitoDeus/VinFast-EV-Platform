"use client";

import React from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ExpenseBreakdownChart() {
  const { theme } = useTheme();

  const categories = [
    { name: "Vehicle Maintenance", percentage: "30%", amount: "$3,000", color: "bg-[#ff3366]" },
    { name: "Staff Salaries", percentage: "25%", amount: "$2,500", color: "bg-[#0f172a] dark:bg-slate-300" },
    { name: "Fuel", percentage: "20%", amount: "$2,000", color: "bg-[#00a8ff]" },
    { name: "Insurance", percentage: "15%", amount: "$1,500", color: "bg-rose-400" },
    { name: "Office Supplies", percentage: "5%", amount: "$500", color: "bg-sky-200" },
    { name: "Marketing", percentage: "5%", amount: "$500", color: "bg-slate-400" },
  ];

  return (
    <div className="theme-card rounded-2xl border shadow-sm p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-base font-extrabold theme-text tracking-tight">Expense Breakdown</h4>
        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Donut Graphic & Center Total */}
      <div className="flex items-center justify-center relative py-2">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Segments */}
            <path
              className="text-[#ff3366]"
              strokeDasharray="30, 100"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#0f172a] dark:text-slate-300"
              strokeDasharray="25, 100"
              strokeDashoffset="-30"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#00a8ff]"
              strokeDasharray="20, 100"
              strokeDashoffset="-55"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-rose-400"
              strokeDasharray="15, 100"
              strokeDashoffset="-75"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          {/* Center Text Card */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                color: theme === "dark" ? "#ffffff" : "#0f172a",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="px-2 py-0.5 rounded-md border text-[9px] font-extrabold mb-1 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>This Week</span>
              <ChevronDown className="w-2.5 h-2.5 text-[#00a8ff]" />
            </div>
            <span className="text-[10px] theme-muted font-bold block leading-none">Total Expenses</span>
            <span className="text-base font-black theme-text leading-tight">$10,000</span>
          </div>
        </div>
      </div>

      {/* Category Breakdown Legend Items */}
      <div className="space-y-2 text-xs pt-1">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between py-1 border-b border-slate-50 dark:border-slate-800/40">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-sm ${cat.color} shrink-0`} />
              <span className="w-7 text-[10px] font-extrabold theme-muted text-right">{cat.percentage}</span>
              <span className="theme-text font-bold text-xs truncate max-w-[140px]">{cat.name}</span>
            </div>
            <span className="theme-text font-extrabold text-xs">{cat.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
