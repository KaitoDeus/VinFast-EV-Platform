"use client";

import React from "react";
import { CircleDollarSign, Calendar, Car, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function MetricCards() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("metrics.revenue"),
      value: "$8,450",
      subtext: t("metrics.fromLastWeek"),
      trend: "+2.85%",
      isPositive: true,
      icon: CircleDollarSign,
      iconBg: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40",
    },
    {
      title: t("metrics.bookings"),
      value: "386",
      subtext: t("metrics.fromLastWeek"),
      trend: "+1.73%",
      isPositive: true,
      icon: Calendar,
      iconBg: "bg-sky-950/60 text-sky-400 border border-sky-800/40",
    },
    {
      title: t("metrics.rented"),
      value: `214 ${t("metrics.units")}`,
      subtext: t("metrics.fromLastWeek"),
      trend: "-2.85%",
      isPositive: false,
      icon: Car,
      iconBg: "bg-rose-950/60 text-rose-400 border border-rose-800/40",
    },
    {
      title: t("metrics.available"),
      value: `89 ${t("metrics.units")}`,
      subtext: t("metrics.fromLastWeek"),
      trend: "+3.45%",
      isPositive: true,
      icon: ShieldCheck,
      iconBg: "bg-indigo-950/60 text-indigo-400 border border-indigo-800/40",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#1f1f1f] p-5 rounded-2xl border border-[#333333] shadow-sm flex items-center justify-between transition-all hover:border-[#444444]"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
              <card.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">{card.title}</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">{card.value}</h3>
            </div>
          </div>

          <div className="text-right">
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${
                card.isPositive
                  ? "bg-cyan-950/60 text-cyan-400 border border-cyan-800/40"
                  : "bg-rose-950/60 text-rose-400 border border-rose-800/40"
              }`}
            >
              {card.isPositive ? "↑" : "↓"} {card.trend}
            </span>
            <p className="text-[11px] text-slate-400 mt-1">{card.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
