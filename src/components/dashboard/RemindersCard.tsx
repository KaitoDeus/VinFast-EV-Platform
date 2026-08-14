"use client";

import React from "react";
import { Plus, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function RemindersCard() {
  const { t } = useLanguage();

  const reminders = [
    {
      title: t("overview.reminder1"),
      date: "2028-08-10",
    },
    {
      title: t("overview.reminder2"),
      date: "2028-08-12",
    },
    {
      title: t("overview.reminder3"),
      date: "2028-08-15",
    },
  ];

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">{t("overview.reminders")}</h3>
        <button
          onClick={() => alert("Add reminder dialog")}
          className="p-1.5 rounded-xl bg-[#2a2a2a] text-sky-400 border border-[#3a3a3a] hover:bg-[#333333] transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {reminders.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-[#262626] border border-[#333333] flex items-start gap-3.5 transition-all hover:border-[#444444]"
          >
            {/* Dark Circle Badge */}
            <div
              className="w-9 h-9 rounded-full bg-[#1f1f1f] text-[#ff3366] flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-[#333333]"
            >
              <AlertCircle className="w-5 h-5 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-white leading-snug">{item.title}</p>
              <p className="text-[11px] text-slate-400 font-medium pt-0.5">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
