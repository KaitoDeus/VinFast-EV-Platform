"use client";

import React from "react";
import { Wallet, ArrowDownRight, ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ExpensesKpiCards() {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* 1. Balance */}
      <div className="theme-card rounded-2xl border shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#38bdf8" : "#00a8ff",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
          >
            <Wallet className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            <TrendingUp className="w-3 h-3" />
            <span>+4.82%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold theme-muted block">Balance</span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black theme-text tracking-tight">$155,820</h3>
            <span className="text-[11px] font-extrabold theme-muted">from last week</span>
          </div>
        </div>
      </div>

      {/* 2. Income */}
      <div className="theme-card rounded-2xl border shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#38bdf8" : "#00a8ff",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            <TrendingUp className="w-3 h-3" />
            <span>+2.73%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold theme-muted block">Income</span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black theme-text tracking-tight">$25,700</h3>
            <span className="text-[11px] font-extrabold theme-muted">from last week</span>
          </div>
        </div>
      </div>

      {/* 3. Expenses */}
      <div className="theme-card rounded-2xl border shadow-sm p-5 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              color: theme === "dark" ? "#38bdf8" : "#ff3366",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
          >
            <ArrowDownRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-extrabold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800">
            <TrendingDown className="w-3 h-3" />
            <span>-5.70%</span>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold theme-muted block">Expenses</span>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-2xl font-black theme-text tracking-tight">$14,575</h3>
            <span className="text-[11px] font-extrabold theme-muted">from last week</span>
          </div>
        </div>
      </div>
    </div>
  );
}
