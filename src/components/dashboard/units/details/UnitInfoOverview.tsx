"use client";

import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { UnitModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface UnitInfoOverviewProps {
  unit: UnitModel;
  onEdit: () => void;
  onDelete: () => void;
}

export function UnitInfoOverview({ unit, onEdit, onDelete }: UnitInfoOverviewProps) {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-4 pt-2">
      {/* Category, Model Title, Action Buttons, and Price */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-400 block">{unit.carType}</span>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {unit.brand} {unit.modelName}
            </h1>
            
            {/* Edit & Delete Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={onEdit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2a2a2a] text-white hover:bg-[#333333] transition-colors text-xs font-semibold border border-[#3a3a3a] shadow-2xs cursor-pointer"
                title="Edit Unit"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>{t("common.edit")}</span>
              </button>
              <button
                onClick={onDelete}
                className="p-2 rounded-xl bg-rose-950/40 text-rose-400 hover:bg-rose-900/60 transition-colors border border-rose-900/40 shadow-2xs cursor-pointer"
                title="Delete Unit"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Status & Available Count Badges */}
          <div className="flex items-center gap-2 pt-1">
            <span
              className="px-3 py-1 rounded-lg text-xs font-extrabold shadow-sm bg-sky-950 text-sky-300 border border-sky-800/40"
            >
              {unit.status === "Available" ? t("common.available") : unit.status}
            </span>
            {unit.unitsCount > 0 && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#2a2a2a] text-white border border-[#3a3a3a]">
                {unit.unitsCount} {t("metrics.units")}
              </span>
            )}
          </div>
        </div>

        {/* Daily Price Tag */}
        <div className="text-left sm:text-right shrink-0">
          <p className="text-3xl font-extrabold text-white">{unit.dailyPrice}</p>
          <p className="text-xs text-slate-400 font-medium">{t("common.perDay")}</p>
        </div>
      </div>

      {/* About Description Paragraph */}
      <div className="space-y-1.5 pt-2">
        <h4 className="text-sm font-bold text-white tracking-tight">
          {lang === "vi" ? "Giới thiệu & Tổng quan" : "About"}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          {unit.description}
        </p>
      </div>
    </div>
  );
}
