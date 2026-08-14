"use client";

import React from "react";
import { Wallet, ArrowDownRight, ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function ExpensesKpiCards() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* 1. Balance */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
          >
            <Wallet className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
            <TrendingUp className="w-3 h-3" />
            <span>+4.82%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 block">{t("financials.balance")}</span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">$155,820</h3>
            <span className="text-[11px] font-extrabold text-slate-400">{t("metrics.fromLastWeek")}</span>
          </div>
        </div>
      </div>

      {/* 2. Income */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
            <TrendingUp className="w-3 h-3" />
            <span>+2.73%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 block">{t("financials.income")}</span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">$25,700</h3>
            <span className="text-[11px] font-extrabold text-slate-400">{t("metrics.fromLastWeek")}</span>
          </div>
        </div>
      </div>

      {/* 3. Expenses */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#ff3366] flex items-center justify-center shrink-0 shadow-2xs"
          >
            <ArrowDownRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-800">
            <TrendingDown className="w-3 h-3" />
            <span>-5.70%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 block">{t("financials.expenses")}</span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">$14,575</h3>
            <span className="text-[11px] font-extrabold text-slate-400">{t("metrics.fromLastWeek")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
