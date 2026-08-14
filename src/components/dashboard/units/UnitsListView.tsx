"use client";

import React from "react";
import Image from "next/image";
import { SlidersHorizontal, User } from "lucide-react";
import { UnitModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface UnitsListViewProps {
  units: UnitModel[];
  onSelectUnit: (unit: UnitModel) => void;
  onEditUnit: (unit: UnitModel) => void;
  onDeleteUnit: (id: string) => void;
}

export function UnitsListView({
  units,
  onSelectUnit,
  onEditUnit,
  onDeleteUnit,
}: UnitsListViewProps) {
  const { lang, t } = useLanguage();

  if (units.length === 0) {
    return (
      <div className="bg-[#1f1f1f] p-12 rounded-2xl border border-[#333333] text-center space-y-2">
        <p className="text-sm font-bold text-white">No fleet units found</p>
        <p className="text-xs text-slate-400">Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {units.map((unit) => (
        <div
          key={unit.id}
          className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm flex flex-col md:flex-row items-stretch overflow-hidden transition-all hover:border-[#444444]"
        >
          {/* Main Content Area */}
          <div className="flex-1 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Left Image Thumbnail */}
            <div className="relative w-36 h-24 shrink-0 mx-auto sm:mx-0">
              <Image
                src={unit.image}
                alt={unit.modelName}
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>

            {/* Title & Status Badge Column */}
            <div className="space-y-1 min-w-[150px]">
              <span className="text-[11px] font-medium text-slate-400 block">{unit.brand}</span>
              <h4 className="text-xl font-extrabold text-white tracking-tight">{unit.modelName}</h4>
              <div>
                <span
                  className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-sm bg-sky-950 text-sky-300 border border-sky-800/40"
                >
                  {unit.status === "Available" ? t("common.available") : unit.status} {unit.unitsCount > 0 ? `${unit.unitsCount} ${t("metrics.units")}` : ""}
                </span>
              </div>
            </div>

            {/* Specs 1: Transmission */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] text-slate-400 font-medium">{t("common.transmission")}</p>
                <p className="text-xs font-bold text-white">{unit.transmission === "Automatic" ? t("common.automatic") : unit.transmission}</p>
              </div>
            </div>

            {/* Specs 2: Capacity */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center shrink-0 shadow-2xs"
              >
                <User className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] text-slate-400 font-medium">{t("common.capacity")}</p>
                <p className="text-xs font-bold text-white">{unit.capacity.replace("seats", t("common.seats"))}</p>
              </div>
            </div>

            {/* Price & Select CTA */}
            <div className="flex items-center gap-5">
              <div className="space-y-0.5">
                <p className="text-[10px] text-slate-400 font-medium">{t("common.price")}</p>
                <p className="text-base font-extrabold text-white">
                  {unit.dailyPrice} <span className="text-[11px] font-normal text-slate-400">{t("common.perDay")}</span>
                </p>
              </div>

              <button
                onClick={() => onSelectUnit(unit)}
                className="bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
              >
                {t("common.select")}
              </button>
            </div>
          </div>

          {/* Right Action Side Box */}
          <div className="bg-[#262626] p-5 flex items-center justify-center gap-3 shrink-0 min-w-[170px] border-t md:border-t-0 md:border-l border-[#333333]">
            <button
              onClick={() => onEditUnit(unit)}
              className="px-4.5 py-2 rounded-xl bg-[#1f1f1f] text-white border border-[#3a3a3a] font-bold text-xs hover:bg-[#333333] transition-all shadow-md text-center cursor-pointer"
            >
              {t("common.edit")}
            </button>
            <button
              onClick={() => onDeleteUnit(unit.id)}
              className="px-4.5 py-2 rounded-xl bg-rose-950/40 text-rose-400 border border-rose-900/40 font-bold text-xs hover:bg-rose-900/60 transition-all shadow-md text-center cursor-pointer"
            >
              {t("common.delete")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
