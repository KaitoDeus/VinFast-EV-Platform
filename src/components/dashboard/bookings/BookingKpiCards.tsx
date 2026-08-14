"use client";

import React from "react";
import { CircleDollarSign, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function BookingKpiCards() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("bookings.upcoming"),
      value: "145",
      subtext: t("metrics.fromLastWeek"),
      trend: "+2.97%",
      isPositive: true,
      icon: CircleDollarSign,
      iconBg: "bg-sky-950/60 text-sky-400 border border-sky-800/40",
      sparklineColor: "#00a8ff",
      sparklinePath: "M0 25 C30 15, 60 22, 90 8 C120 18, 150 5, 180 2",
    },
    {
      title: t("bookings.pending"),
      value: "106",
      subtext: t("metrics.fromLastWeek"),
      trend: "+1.72%",
      isPositive: true,
      icon: Calendar,
      iconBg: "bg-amber-950/60 text-amber-400 border border-amber-800/40",
      sparklineColor: "#f59e0b",
      sparklinePath: "M0 22 C30 25, 60 10, 90 18 C120 8, 150 12, 180 4",
    },
    {
      title: t("bookings.canceled"),
      value: "86",
      subtext: t("metrics.fromLastWeek"),
      trend: "-4.02%",
      isPositive: false,
      icon: AlertCircle,
      iconBg: "bg-rose-950/60 text-rose-400 border border-rose-800/40",
      sparklineColor: "#ff3366",
      sparklinePath: "M0 5 C30 12, 60 8, 90 20 C120 15, 150 25, 180 28",
    },
    {
      title: t("bookings.completed"),
      value: "298",
      subtext: t("metrics.fromLastWeek"),
      trend: "+3.15%",
      isPositive: true,
      icon: CheckCircle2,
      iconBg: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40",
      sparklineColor: "#10b981",
      sparklinePath: "M0 28 C30 20, 60 15, 90 10 C120 12, 150 6, 180 3",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#1f1f1f] p-5 rounded-2xl border border-[#333333] shadow-sm flex items-center justify-between relative overflow-hidden transition-all hover:border-[#444444]"
        >
          <div className="space-y-3 z-10">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${card.iconBg}`}>
                <card.icon className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">{card.title}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{card.value}</h3>
              <div className="flex items-center gap-1.5 pt-1">
                <span
                  className={`inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    card.isPositive
                      ? "bg-cyan-950/60 text-cyan-400 border border-cyan-800/40"
                      : "bg-rose-950/60 text-rose-400 border border-rose-800/40"
                  }`}
                >
                  {card.isPositive ? "↑" : "↓"} {card.trend}
                </span>
                <span className="text-[11px] text-slate-400">{card.subtext}</span>
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
