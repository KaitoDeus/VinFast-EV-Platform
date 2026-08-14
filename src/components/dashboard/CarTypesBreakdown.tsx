"use client";

import React from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ServiceContainer } from "@/infrastructure/di";

export function CarTypesBreakdown() {
  const { t } = useLanguage();
  const fleetData = ServiceContainer.getInstance()
    .getBookingService()
    .getFleetDistribution();

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.carTypes")}</h3>
        <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3.5">
        {fleetData.map((item) => (
          <div
            key={item.model}
            className="flex items-center justify-between p-2 rounded-xl hover:bg-[#262626] transition-colors gap-3"
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
                <span className="font-bold text-white">{item.model}</span>
                <span className="font-extrabold text-white">{item.percentage}%</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#00a8ff] h-full rounded-full transition-all duration-500"
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
