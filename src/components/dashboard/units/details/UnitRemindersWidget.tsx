"use client";

import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function UnitRemindersWidget() {
  const { theme } = useTheme();

  const reminders = [
    {
      title: "Scheduled Maintenance for VinFast VF 8",
      date: "2028-08-10",
      time: "10:00 AM",
    },
    {
      title: "Unit Return for VinFast VF 9",
      date: "2028-08-12",
      time: "02:00 PM",
    },
    {
      title: "Tire Replacement for VinFast VF 7",
      date: "2028-08-15",
      time: "09:00 AM",
    },
    {
      title: "Battery Health Inspection for VinFast VF e34",
      date: "2028-08-18",
      time: "11:30 AM",
    },
  ];

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Reminders</h3>
        <Link href="/dashboard" className="text-xs font-bold text-slate-400 hover:text-[#00a8ff] transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {reminders.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
            }}
            className="p-3.5 rounded-2xl flex flex-col justify-between space-y-3 transition-all hover:opacity-90"
          >
            {/* White Circle Badge */}
            <div
              style={{
                backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
              }}
              className="w-7 h-7 rounded-full text-slate-500 dark:text-slate-400 flex items-center justify-center shrink-0 shadow-2xs"
            >
              <Info className="w-4 h-4" />
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold theme-text leading-snug line-clamp-2">
                {item.title}
              </p>
              <div className="text-[10px] theme-muted font-medium pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
