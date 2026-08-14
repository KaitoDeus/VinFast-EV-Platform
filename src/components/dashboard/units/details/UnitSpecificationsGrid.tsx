"use client";

import React from "react";
import {
  SlidersHorizontal,
  User,
  Zap,
  Gauge,
  Timer,
  Navigation,
} from "lucide-react";
import { UnitModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface UnitSpecificationsGridProps {
  unit: UnitModel;
}

export function UnitSpecificationsGrid({ unit }: UnitSpecificationsGridProps) {
  const { lang, t } = useLanguage();

  const specs = [
    {
      title: t("common.transmission"),
      value: unit.transmission === "Automatic" ? t("common.automatic") : unit.transmission,
      icon: SlidersHorizontal,
    },
    {
      title: t("common.capacity"),
      value: unit.capacity.replace("seats", t("common.seats")),
      icon: User,
    },
    {
      title: t("units.range"),
      value: unit.range,
      icon: Navigation,
    },
    {
      title: t("units.battery"),
      value: unit.batteryFuel,
      icon: Zap,
    },
    {
      title: lang === "vi" ? "Tốc độ tối đa" : "Top Speed",
      value: unit.topSpeed,
      icon: Gauge,
    },
    {
      title: lang === "vi" ? "Tăng tốc (0-100km/h)" : "Acceleration",
      value: unit.acceleration,
      icon: Timer,
    },
  ];

  return (
    <div className="space-y-3 pt-4 border-t border-[#333333]">
      <h4 className="text-sm font-bold text-white tracking-tight">{t("units.specs")}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {specs.map((item, index) => (
          <div
            key={index}
            className="bg-[#262626] p-3.5 rounded-2xl border border-[#333333] shadow-2xs flex items-center gap-3.5 transition-all hover:border-[#444444]"
          >
            <div
              className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#1f1f1f] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
            >
              <item.icon className="w-5 h-5" />
            </div>

            <div className="space-y-0.5 min-w-0">
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{item.title}</p>
              <p className="text-xs font-bold text-white truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
