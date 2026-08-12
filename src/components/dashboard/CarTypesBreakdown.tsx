"use client";

import React from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ServiceContainer } from "@/infrastructure/di";

export function CarTypesBreakdown() {
  const fleetData = ServiceContainer.getInstance()
    .getBookingService()
    .getFleetDistribution();

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Car Types</h3>
        <button className="theme-muted hover:theme-text transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3.5">
        {fleetData.map((item) => (
          <div
            key={item.model}
            className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors gap-3"
          >
            <div className="relative w-12 h-8 shrink-0">
              <Image
                src={item.image}
                alt={item.model}
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold theme-text">{item.model}</span>
                <span className="font-extrabold theme-text">{item.percentage}%</span>
              </div>
              <div className="w-full bg-sky-100/60 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#00a8ff] dark:bg-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
