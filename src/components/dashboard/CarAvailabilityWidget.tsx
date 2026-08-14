"use client";

import React, { useState } from "react";
import { MoreHorizontal, Car, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function CarAvailabilityWidget() {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState("VinFast VF 8 (SUV)");

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.carAvailability")}</h3>
        <button className="text-slate-400 hover:text-white transition-colors cursor-pointer">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {/* Car Type Select */}
        <div className="relative">
          <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white outline-none focus:ring-2 focus:ring-[#38bdf8] appearance-none font-medium transition-all cursor-pointer"
          >
            <option value="VinFast VF 8 (SUV)">VinFast VF 8 (SUV)</option>
            <option value="VinFast VF 9 (Full-Size)">VinFast VF 9 (Full-Size)</option>
            <option value="VinFast VF 7 (Sport)">VinFast VF 7 (Sport)</option>
            <option value="VinFast VF 6 (Crossover)">VinFast VF 6 (Crossover)</option>
            <option value="VinFast VF 5 (Compact)">VinFast VF 5 (Compact)</option>
            <option value="VinFast Klara (E-Scooter)">VinFast Klara (E-Scooter)</option>
          </select>
        </div>

        {/* Date Select */}
        <div className="relative">
          <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            defaultValue="17 August 2028"
            className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white outline-none focus:ring-2 focus:ring-[#38bdf8] font-medium transition-all"
          />
        </div>

        {/* Time Select */}
        <div className="relative">
          <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            defaultValue="10:00 AM"
            className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white outline-none focus:ring-2 focus:ring-[#38bdf8] font-medium transition-all"
          />
        </div>

        {/* Action Button matching bright CTA in mockup */}
        <button
          onClick={() => alert("Vehicle is available for booking!")}
          className="w-full bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
        >
          {t("overview.checkAvailability")}
        </button>
      </div>
    </div>
  );
}
