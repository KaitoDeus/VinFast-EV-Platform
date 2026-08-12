"use client";

import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { UnitModel } from "@/domain/models";

interface UnitInfoOverviewProps {
  unit: UnitModel;
  onEdit: () => void;
  onDelete: () => void;
}

export function UnitInfoOverview({ unit, onEdit, onDelete }: UnitInfoOverviewProps) {
  return (
    <div className="space-y-4 pt-2">
      {/* Category, Model Title, Action Buttons, and Price */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold theme-muted block">{unit.carType}</span>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold theme-text tracking-tight">
              {unit.brand} {unit.modelName}
            </h1>
            
            {/* Edit & Delete Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={onEdit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs"
                title="Edit Unit"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={onDelete}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors border border-slate-200 dark:border-slate-700 shadow-2xs"
                title="Delete Unit"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Status & Available Count Badges */}
          <div className="flex items-center gap-2 pt-1">
            <span
              className={`px-3 py-1 rounded-lg text-xs font-extrabold shadow-sm ${
                unit.status === "Available"
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : unit.status === "Maintenance"
                  ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                  : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              }`}
            >
              {unit.status}
            </span>
            {unit.unitsCount > 0 && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-100 text-sky-800 dark:bg-slate-800 dark:text-sky-400 border border-sky-200 dark:border-slate-700">
                {unit.unitsCount} Unit
              </span>
            )}
          </div>
        </div>

        {/* Daily Price Tag */}
        <div className="text-left sm:text-right shrink-0">
          <p className="text-3xl font-extrabold theme-text">{unit.dailyPrice}</p>
          <p className="text-xs theme-muted font-medium">/days</p>
        </div>
      </div>

      {/* About Description Paragraph */}
      <div className="space-y-1.5 pt-2">
        <h4 className="text-sm font-bold theme-text tracking-tight">About</h4>
        <p className="text-xs theme-muted leading-relaxed max-w-3xl">
          {unit.description}
        </p>
      </div>
    </div>
  );
}
