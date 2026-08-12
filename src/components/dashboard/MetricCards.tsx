"use client";

import React from "react";
import { CircleDollarSign, Calendar, Car, ShieldCheck } from "lucide-react";

export function MetricCards() {
  const cards = [
    {
      title: "Total Revenue",
      value: "$8,450",
      subtext: "from last week",
      trend: "+2.85%",
      isPositive: true,
      icon: CircleDollarSign,
      iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-slate-800 dark:text-emerald-400 dark:border-slate-700",
    },
    {
      title: "New Bookings",
      value: "386",
      subtext: "from last week",
      trend: "+1.73%",
      isPositive: true,
      icon: Calendar,
      iconBg: "bg-sky-50 text-sky-600 border border-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:border-slate-700",
    },
    {
      title: "Rented Cars",
      value: "214 Unit",
      subtext: "from last week",
      trend: "-2.85%",
      isPositive: false,
      icon: Car,
      iconBg: "bg-rose-50 text-rose-600 border border-rose-100 dark:bg-slate-800 dark:text-rose-400 dark:border-slate-700",
    },
    {
      title: "Available Cars",
      value: "89 Unit",
      subtext: "from last week",
      trend: "+3.45%",
      isPositive: true,
      icon: ShieldCheck,
      iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-slate-800 dark:text-indigo-400 dark:border-slate-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="theme-card p-5 rounded-2xl border shadow-sm flex items-center justify-between transition-all hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
              <card.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs theme-muted font-medium">{card.title}</p>
              <h3 className="text-2xl font-bold theme-text tracking-tight">{card.value}</h3>
            </div>
          </div>

          <div className="text-right">
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${
                card.isPositive
                  ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-400"
                  : "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400"
              }`}
            >
              {card.isPositive ? "↑" : "↓"} {card.trend}
            </span>
            <p className="text-[11px] theme-muted mt-1">{card.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
