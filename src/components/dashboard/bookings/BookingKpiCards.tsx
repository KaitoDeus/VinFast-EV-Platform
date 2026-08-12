"use client";

import React from "react";
import { CircleDollarSign, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";

export function BookingKpiCards() {
  const cards = [
    {
      title: "Upcoming Bookings",
      value: "145",
      subtext: "from last week",
      trend: "+2.97%",
      isPositive: true,
      icon: CircleDollarSign,
      iconBg: "bg-[#f0f7ff] text-[#00a8ff] border border-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:border-slate-700",
      sparklineColor: "#00a8ff",
      sparklinePath: "M0 25 C30 15, 60 22, 90 8 C120 18, 150 5, 180 2",
    },
    {
      title: "Pending Bookings",
      value: "106",
      subtext: "from last week",
      trend: "+1.72%",
      isPositive: true,
      icon: Calendar,
      iconBg: "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-slate-800 dark:text-amber-400 dark:border-slate-700",
      sparklineColor: "#f59e0b",
      sparklinePath: "M0 22 C30 25, 60 10, 90 18 C120 8, 150 12, 180 4",
    },
    {
      title: "Canceled Bookings",
      value: "86",
      subtext: "from last week",
      trend: "-4.02%",
      isPositive: false,
      icon: AlertCircle,
      iconBg: "bg-rose-50 text-rose-600 border border-rose-100 dark:bg-slate-800 dark:text-rose-400 dark:border-slate-700",
      sparklineColor: "#ff3366",
      sparklinePath: "M0 5 C30 12, 60 8, 90 20 C120 15, 150 25, 180 28",
    },
    {
      title: "Completed Bookings",
      value: "298",
      subtext: "from last week",
      trend: "+3.15%",
      isPositive: true,
      icon: CheckCircle2,
      iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-slate-800 dark:text-emerald-400 dark:border-slate-700",
      sparklineColor: "#10b981",
      sparklinePath: "M0 28 C30 20, 60 15, 90 10 C120 12, 150 6, 180 3",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="theme-card p-5 rounded-2xl border shadow-sm flex items-center justify-between relative overflow-hidden transition-all hover:shadow-md"
        >
          <div className="space-y-3 z-10">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${card.iconBg}`}>
                <card.icon className="w-4 h-4" />
              </div>
              <p className="text-xs theme-muted font-semibold">{card.title}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold theme-text tracking-tight">{card.value}</h3>
              <div className="flex items-center gap-1.5 pt-1">
                <span
                  className={`inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    card.isPositive
                      ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-400"
                      : "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400"
                  }`}
                >
                  {card.isPositive ? "↑" : "↓"} {card.trend}
                </span>
                <span className="text-[11px] theme-muted">{card.subtext}</span>
              </div>
            </div>
          </div>

          {/* Mini Sparkline Chart SVG */}
          <div className="w-[90px] h-[45px] shrink-0 opacity-80">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 180 30">
              <path
                d={card.sparklinePath}
                fill="none"
                stroke={card.sparklineColor}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
