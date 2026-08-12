"use client";

import React from "react";
import Image from "next/image";
import { SlidersHorizontal, User, Trash2 } from "lucide-react";
import { UnitModel } from "@/domain/models";

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
  if (units.length === 0) {
    return (
      <div className="theme-card p-12 rounded-2xl border text-center space-y-2">
        <p className="text-sm font-bold theme-text">No fleet units found</p>
        <p className="text-xs theme-muted">Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {units.map((unit) => (
        <div
          key={unit.id}
          className="theme-card rounded-2xl border shadow-sm p-5 space-y-4 flex flex-col justify-between transition-all hover:shadow-md"
        >
          {/* Card Top */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-medium theme-muted block">{unit.brand}</span>
                <h4 className="text-lg font-extrabold theme-text tracking-tight">{unit.modelName}</h4>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-sm ${
                  unit.status === "Available"
                    ? "bg-sky-100 text-sky-800 border border-sky-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
                    : unit.status === "Maintenance"
                    ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                    : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                }`}
              >
                {unit.status}
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
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 theme-muted" />
                <span className="theme-text font-medium">{unit.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 theme-muted" />
                <span className="theme-text font-medium">{unit.capacity}</span>
              </div>
            </div>
          </div>

          {/* Card Bottom */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs theme-muted">Price</span>
              <span className="text-base font-extrabold theme-text">
                {unit.dailyPrice} <span className="text-xs font-normal theme-muted">/day</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectUnit(unit)}
                className="flex-1 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs py-2 rounded-xl shadow-md transition-all active:scale-95 text-center"
              >
                Select
              </button>
              <button
                onClick={() => onEditUnit(unit)}
                className="px-3 py-2 rounded-xl bg-[#0f172a] text-white font-bold text-xs hover:bg-slate-800 transition-all shadow-md text-center"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteUnit(unit.id)}
                className="p-2 rounded-xl bg-[#0f172a] text-[#ff3366] font-bold text-xs hover:bg-rose-950/40 hover:text-rose-400 transition-all shadow-md text-center"
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
