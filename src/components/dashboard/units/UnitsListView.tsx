"use client";

import React from "react";
import Image from "next/image";
import { SlidersHorizontal, User } from "lucide-react";
import { UnitModel } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

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
  const { theme } = useTheme();

  if (units.length === 0) {
    return (
      <div className="theme-card p-12 rounded-2xl border text-center space-y-2">
        <p className="text-sm font-bold theme-text">No fleet units found</p>
        <p className="text-xs theme-muted">Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {units.map((unit) => (
        <div
          key={unit.id}
          className="theme-card rounded-2xl border shadow-sm flex flex-col md:flex-row items-stretch overflow-hidden transition-all hover:shadow-md"
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
              <span className="text-[11px] font-medium theme-muted block">{unit.brand}</span>
              <h4 className="text-xl font-extrabold theme-text tracking-tight">{unit.modelName}</h4>
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-sm ${
                    unit.status === "Available"
                      ? "bg-sky-100 text-sky-800 border border-sky-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"
                      : unit.status === "Maintenance"
                      ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                      : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  }`}
                >
                  {unit.status} {unit.unitsCount > 0 ? `${unit.unitsCount} Unit` : ""}
                </span>
              </div>
            </div>

            {/* Specs 1: Transmission (Pale Ice Blue Icon Badge in Light Mode) */}
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                  color: theme === "dark" ? "#38bdf8" : "#00a8ff",
                  borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
                }}
                className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-2xs"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] theme-muted font-medium">Transmission</p>
                <p className="text-xs font-bold theme-text">{unit.transmission}</p>
              </div>
            </div>

            {/* Specs 2: Capacity (Pale Ice Blue Icon Badge in Light Mode) */}
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                  color: theme === "dark" ? "#38bdf8" : "#00a8ff",
                  borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
                }}
                className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 shadow-2xs"
              >
                <User className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] theme-muted font-medium">Capacity</p>
                <p className="text-xs font-bold theme-text">{unit.capacity}</p>
              </div>
            </div>

            {/* Price & Select CTA */}
            <div className="flex items-center gap-5">
              <div className="space-y-0.5">
                <p className="text-[10px] theme-muted font-medium">Price</p>
                <p className="text-base font-extrabold theme-text">
                  {unit.dailyPrice} <span className="text-[11px] font-normal theme-muted">/days</span>
                </p>
              </div>

              <button
                onClick={() => onSelectUnit(unit)}
                className="bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95 shrink-0"
              >
                Select
              </button>
            </div>
          </div>

          {/* Right Action Side Box (Horizontal Edit & Delete with dark navy background & white text) */}
          <div className="bg-[#475569]/20 dark:bg-slate-800/80 p-5 flex items-center justify-center gap-3 shrink-0 min-w-[170px]">
            <button
              onClick={() => onEditUnit(unit)}
              className="px-4.5 py-2 rounded-xl bg-[#0f172a] text-white font-bold text-xs hover:bg-slate-800 transition-all shadow-md text-center"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteUnit(unit.id)}
              className="px-4.5 py-2 rounded-xl bg-[#0f172a] text-[#ff3366] font-bold text-xs hover:bg-rose-950/40 hover:text-rose-400 transition-all shadow-md text-center"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
