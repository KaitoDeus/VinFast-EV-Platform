"use client";

import React from "react";
import { CheckCircle2, Clock, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function PaymentsKpiCards() {
  const { lang, t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* 1. Completed Payment */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
          >
            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
            <TrendingUp className="w-3 h-3" />
            <span>+2.77%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 block">
            {lang === "vi" ? "Đã thanh toán" : "Completed Payment"}
          </span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">$22,450</h3>
            <span className="text-[11px] font-extrabold text-slate-400">350 {t("financials.invoices")}</span>
          </div>
        </div>
      </div>

      {/* 2. Awaiting Payment */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
          >
            <Clock className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-800">
            <TrendingDown className="w-3 h-3" />
            <span>-1.05%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 block">
            {lang === "vi" ? "Chờ thanh toán" : "Awaiting Payment"}
          </span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">$15,300</h3>
            <span className="text-[11px] font-extrabold text-slate-400">215 {t("financials.invoices")}</span>
          </div>
        </div>
      </div>

      {/* 3. Overdue */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#ff3366] flex items-center justify-center shrink-0 shadow-2xs"
          >
            <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
            <TrendingUp className="w-3 h-3" />
            <span>+3.45%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 block">
            {lang === "vi" ? "Quá hạn thanh toán" : "Overdue"}
          </span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">$12,730</h3>
            <span className="text-[11px] font-extrabold text-slate-400">180 {t("financials.invoices")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
