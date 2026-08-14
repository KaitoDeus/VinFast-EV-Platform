"use client";

import React, { useState } from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function CashflowChart() {
  const { lang, t } = useLanguage();
  const [activeMonthIdx, setActiveMonthIdx] = useState<number>(4);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-6 space-y-4">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-lg font-black text-white tracking-tight">{t("financials.cashflow")}</h4>
          <div className="flex items-center gap-4 text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-[#38bdf8]"></span>
              <span className="text-slate-200">{t("financials.income")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 rounded-full bg-[#ff3366]"></span>
              <span className="text-slate-200">{t("financials.expenses")}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Year Dropdown Selector */}
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-white text-xs font-extrabold shadow-2xs cursor-pointer"
          >
            <span>{t("overview.thisYear")}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
          </div>

          <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative w-full h-[220px] pt-4">
        {/* Y Axis Grid Labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-slate-400 font-medium">
          <span>$24K</span>
          <span>$18K</span>
          <span>$12K</span>
          <span>$6K</span>
          <span>$0</span>
        </div>

        <div className="ml-10 h-full flex flex-col justify-between">
          <svg className="w-full h-[180px] overflow-visible" viewBox="0 0 680 200" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="40" y1="40" x2="640" y2="40" stroke="#333333" strokeDasharray="4 4" />
            <line x1="40" y1="80" x2="640" y2="80" stroke="#333333" strokeDasharray="4 4" />
            <line x1="40" y1="120" x2="640" y2="120" stroke="#333333" strokeDasharray="4 4" />
            <line x1="40" y1="160" x2="640" y2="160" stroke="#333333" strokeDasharray="4 4" />
            <line x1="40" y1="200" x2="640" y2="200" stroke="#333333" />

            {/* Income Curve (Blue) */}
            <path
              d={`M ${incomePoints}`}
              fill="none"
              stroke="#00a8ff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Expense Curve (Red) */}
            <path
              d={`M ${expensePoints}`}
              fill="none"
              stroke="#ff3366"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Node for May 2028 */}
            <circle cx={getSvgPoint(4, 16).split(",")[0]} cy={getSvgPoint(4, 16).split(",")[1]} r="6" fill="#00a8ff" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx={getSvgPoint(4, 13).split(",")[0]} cy={getSvgPoint(4, 13).split(",")[1]} r="6" fill="#ff3366" stroke="#ffffff" strokeWidth="2.5" />
          </svg>

          {/* Month labels */}
          <div className="flex justify-between text-[11px] text-slate-400 font-semibold pt-2 px-2">
            {months.map((m, idx) => (
              <button
                key={m}
                onClick={() => setActiveMonthIdx(idx)}
                className={`cursor-pointer transition-colors ${
                  idx === activeMonthIdx ? "text-white font-black" : "hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
