"use client";

import React from "react";
import { MoreHorizontal, Calendar, Info, CheckCircle2, Car } from "lucide-react";

export function RecentActivityFeed() {
  const activitiesToday = [
    {
      icon: Calendar,
      text: "Alice Johnson completed a booking for VinFast VF 8 (29A-888.88)",
      time: "10:15 AM",
      badgeStyle: "bg-sky-50 text-sky-600 border-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:border-slate-700",
    },
    {
      icon: Info,
      text: "Bob Smith's booking for VinFast VF 7 (30F-567.89) is pending payment",
      time: "11:30 AM",
      badgeStyle: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-slate-800 dark:text-amber-400 dark:border-slate-700",
    },
  ];

  const activitiesYesterday = [
    {
      icon: CheckCircle2,
      text: "Charlie Davis started a monthly rental for VinFast VF 9 (51K-910.11)",
      time: "09:45 AM",
      badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-slate-800 dark:text-emerald-400 dark:border-slate-700",
    },
    {
      icon: Car,
      text: "Diana White returned the VinFast VF 6 (43A-234.56)",
      time: "02:20 PM",
      badgeStyle: "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-slate-800 dark:text-indigo-400 dark:border-slate-700",
    },
    {
      icon: Info,
      text: "Edward Green's booking for VinFast Klara S is pending payment",
      time: "03:10 PM",
      badgeStyle: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-slate-800 dark:text-amber-400 dark:border-slate-700",
    },
  ];

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold theme-text tracking-tight">Recent Activity</h3>
        <button className="theme-muted hover:theme-text transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Today Timeline */}
      <div className="space-y-3">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Today</p>

        {activitiesToday.map((act, index) => (
          <div key={index} className="flex items-start gap-3 text-xs">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border shadow-2xs ${act.badgeStyle}`}>
              <act.icon className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-0.5">
              <p className="theme-text font-medium leading-snug">{act.text}</p>
              <p className="text-[10px] theme-muted">{act.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Yesterday Timeline */}
      <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Yesterday</p>

        {activitiesYesterday.map((act, index) => (
          <div key={index} className="flex items-start gap-3 text-xs">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border shadow-2xs ${act.badgeStyle}`}>
              <act.icon className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-0.5">
              <p className="theme-text font-medium leading-snug">{act.text}</p>
              <p className="text-[10px] theme-muted">{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
