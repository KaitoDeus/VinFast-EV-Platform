"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function EarningsChart() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.earningsSummary")}</h3>
        <button
          className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] text-slate-200 transition-all shadow-2xs hover:bg-[#333333] cursor-pointer"
        >
          <span>{t("overview.last8Month")}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#38bdf8]" />
        </button>
      </div>

      {/* SVG Interactive Smooth Line Chart */}
      <div className="relative w-full h-[220px] pt-4">
        {/* Y Axis Labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-slate-400 font-medium">
          <span>$24K</span>
          <span>$18K</span>
          <span>$12K</span>
          <span>$6K</span>
          <span>$0</span>
        </div>

        {/* Chart Canvas Area */}
        <div className="ml-10 h-full flex flex-col justify-between">
          <svg className="w-full h-[180px] overflow-visible" viewBox="0 0 700 180" preserveAspectRatio="none">
            {/* Horizontal Grid lines */}
            <line x1="0" y1="0" x2="700" y2="0" stroke="currentColor" className="text-[#333333]" strokeDasharray="4 4" />
            <line x1="0" y1="45" x2="700" y2="45" stroke="currentColor" className="text-[#333333]" strokeDasharray="4 4" />
            <line x1="0" y1="90" x2="700" y2="90" stroke="currentColor" className="text-[#333333]" strokeDasharray="4 4" />
            <line x1="0" y1="135" x2="700" y2="135" stroke="currentColor" className="text-[#333333]" strokeDasharray="4 4" />
            <line x1="0" y1="180" x2="700" y2="180" stroke="currentColor" className="text-[#333333]" />

            {/* Gradient Fill under path */}
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff3366" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ff3366" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M 0 110 C 50 80, 100 130, 150 100 C 200 70, 250 140, 300 40 C 350 120, 400 70, 450 110 C 500 130, 550 60, 600 75 C 650 90, 700 105, 700 105 L 700 180 L 0 180 Z"
              fill="url(#earningsGradient)"
            />

            {/* Red Smooth Curve Line matching Mockup */}
            <path
              d="M 0 110 C 50 80, 100 130, 150 100 C 200 70, 250 140, 300 40 C 350 120, 400 70, 450 110 C 500 130, 550 60, 600 75 C 650 90, 700 105, 700 105"
              fill="none"
              stroke="#ff3366"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Highlight Data Node in April 2028 ($18,450) */}
            <circle cx="300" cy="40" r="6" fill="#ff3366" stroke="#ffffff" strokeWidth="3" className="shadow-lg" />
          </svg>

          {/* Active Tooltip Callout */}
          <div className="absolute left-[40%] top-[8px] -translate-x-1/2 bg-slate-900 text-white rounded-xl px-3 py-1 text-center shadow-xl z-20 border border-slate-700 pointer-events-none">
            <p className="text-[10px] text-slate-400 font-medium">Apr 2028</p>
            <p className="text-sm font-extrabold">$18,450</p>
          </div>

          {/* X Axis Month Labels */}
          <div className="flex justify-between text-[11px] text-slate-400 font-semibold pt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>
        </div>
      </div>
    </div>
  );
}
