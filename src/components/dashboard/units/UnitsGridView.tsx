"use client";

import React from "react";
import Image from "next/image";
import { SlidersHorizontal, User, Trash2 } from "lucide-react";
import { UnitModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface UnitsGridViewProps {
  units: UnitModel[];
  onSelectUnit: (unit: UnitModel) => void;
  onEditUnit: (unit: UnitModel) => void;
  onDeleteUnit: (id: string) => void;
}

export function UnitsGridView({
  units,
  onSelectUnit,
  onEditUnit,
  onDeleteUnit,
}: UnitsGridViewProps) {
  const { t } = useLanguage();

  if (units.length === 0) {
    return (
      <div className="bg-[#1f1f1f] p-12 rounded-2xl border border-[#333333] text-center space-y-2">
        <p className="text-sm font-bold text-white">No fleet units found</p>
        <p className="text-xs text-slate-400">Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {units.map((unit) => (
        <div
          key={unit.id}
          className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-5 space-y-4 flex flex-col justify-between transition-all hover:border-[#444444]"
        >
          {/* Card Top */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-medium text-slate-400 block">{unit.brand}</span>
                <h4 className="text-lg font-extrabold text-white tracking-tight">{unit.modelName}</h4>
              </div>
              <span
                className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-sm bg-sky-950 text-sky-300 border border-sky-800/40"
              >
                {unit.status === "Available" ? t("common.available") : unit.status}
              </span>
            </div>

            {/* Thumbnail */}
            <div className="relative w-full h-32 my-2">
              <Image
                src={unit.image}
                alt={unit.modelName}
                fill
                sizes="240px"
                className="object-contain"
              />
            </div>

            {/* Specs Row */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#333333] text-xs">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-white font-medium">{unit.transmission === "Automatic" ? t("common.automatic") : unit.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-white font-medium">{unit.capacity.replace("seats", t("common.seats"))}</span>
              </div>
            </div>
          </div>

          {/* Card Bottom */}
          <div className="pt-3 border-t border-[#333333] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{t("common.price")}</span>
              <span className="text-base font-extrabold text-white">
                {unit.dailyPrice} <span className="text-xs font-normal text-slate-400">{t("common.perDay")}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectUnit(unit)}
                className="flex-1 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs py-2 rounded-xl shadow-md transition-all active:scale-95 text-center cursor-pointer"
              >
                {t("common.select")}
              </button>
              <button
                onClick={() => onEditUnit(unit)}
                className="px-3 py-2 rounded-xl bg-[#2a2a2a] text-white border border-[#3a3a3a] font-bold text-xs hover:bg-[#333333] transition-all shadow-md text-center cursor-pointer"
              >
                {t("common.edit")}
              </button>
              <button
                onClick={() => onDeleteUnit(unit.id)}
                className="p-2 rounded-xl bg-rose-950/40 text-rose-400 border border-rose-900/40 font-bold text-xs hover:bg-rose-900/60 transition-all shadow-md text-center cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
