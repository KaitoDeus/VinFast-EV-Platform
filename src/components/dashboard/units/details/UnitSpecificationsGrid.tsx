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
import { useTheme } from "@/components/theme-provider";

interface UnitSpecificationsGridProps {
  unit: UnitModel;
}

export function UnitSpecificationsGrid({ unit }: UnitSpecificationsGridProps) {
  const { theme } = useTheme();

  const specs = [
    {
      title: "Transmission",
      value: unit.transmission,
      icon: SlidersHorizontal,
    },
    {
      title: "Capacity",
      value: unit.capacity,
      icon: User,
    },
    {
      title: "Range",
      value: unit.range,
      icon: Navigation,
    },
    {
      title: "Battery / Fuel",
      value: unit.batteryFuel,
      icon: Zap,
    },
    {
      title: "Top Speed",
      value: unit.topSpeed,
      icon: Gauge,
    },
    {
      title: "Acceleration",
      value: unit.acceleration,
      icon: Timer,
    },
  ];

  return (
    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
      <h4 className="text-sm font-bold theme-text tracking-tight">Specifications</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {specs.map((item, index) => (
          <div
            key={index}
            className="theme-card p-3.5 rounded-2xl border shadow-2xs flex items-center gap-3.5 transition-all hover:shadow-xs"
          >
            {/* Pale Ice Blue Icon Badge in Light Mode */}
            <div
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                color: theme === "dark" ? "#38bdf8" : "#00a8ff",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
            >
              <item.icon className="w-5 h-5" />
            </div>

            <div className="space-y-0.5 min-w-0">
              <p className="text-[10px] theme-muted font-medium uppercase tracking-wider">{item.title}</p>
              <p className="text-xs font-bold theme-text truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
