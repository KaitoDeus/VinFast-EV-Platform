"use client";

import React from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function ExpenseBreakdownChart() {
  const { lang, t } = useLanguage();

  const categories = [
    { name: lang === "vi" ? "Bảo dưỡng xe" : "Vehicle Maintenance", percentage: "30%", amount: "$3,000", color: "bg-[#ff3366]" },
    { name: lang === "vi" ? "Lương nhân viên" : "Staff Salaries", percentage: "25%", amount: "$2,500", color: "bg-amber-400" },
    { name: lang === "vi" ? "Nhiên liệu & Điện" : "Fuel", percentage: "20%", amount: "$2,000", color: "bg-[#00a8ff]" },
    { name: lang === "vi" ? "Bảo hiểm xe" : "Insurance", percentage: "15%", amount: "$1,500", color: "bg-rose-400" },
    { name: lang === "vi" ? "Văn phòng phẩm" : "Office Supplies", percentage: "5%", amount: "$500", color: "bg-sky-200" },
    { name: lang === "vi" ? "Marketing & Quảng cáo" : "Marketing", percentage: "5%", amount: "$500", color: "bg-slate-400" },
  ];

  return (
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="text-base font-extrabold text-white tracking-tight">{t("financials.expenseBreakdown")}</h4>
        <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Donut Graphic & Center Total */}
      <div className="flex items-center justify-center relative py-2">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-[#2a2a2a]"
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
              className="text-amber-400"
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

          {/* Center Callout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase">{t("overview.totalStatus")}</span>
            <span className="text-sm font-black text-white">$10,000</span>
          </div>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div className="space-y-2.5 pt-2 border-t border-[#333333]">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-sm ${c.color}`} />
              <span className="text-slate-300">{c.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{c.percentage}</span>
              <span className="font-bold text-white min-w-[50px] text-right">{c.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
