"use client";

import React from "react";
import { Plus, AlertCircle } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function RemindersCard() {
  const { theme } = useTheme();

  const reminders = [
    {
      title: "Inspect and service the fleet vehicles.",
      date: "2028-08-10",
    },
    {
      title: "Update the car rental pricing plans for the upcoming season.",
      date: "2028-08-12",
    },
    {
      title: "Review customer feedback and implement improvements.",
      date: "2028-08-15",
    },
  ];

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Reminders</h3>
        <button className="p-1.5 rounded-xl bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-slate-700 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {reminders.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            }}
            className="p-4 rounded-2xl flex items-start gap-3.5 transition-all hover:opacity-90"
          >
            {/* White Circle Badge in Light Mode / Dark Circle Badge in Dark Mode */}
            <div
              style={{
                backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
              }}
              className="w-9 h-9 rounded-full text-[#ff3366] flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
            >
              <AlertCircle className="w-5 h-5 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold theme-text leading-snug">{item.title}</p>
              <p className="text-[11px] theme-muted font-medium pt-0.5">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
