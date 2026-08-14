"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Mail, Phone, MapPin, Clock, Briefcase, ChevronLeft, ChevronRight, MoreHorizontal, Award } from "lucide-react";
import { DriverModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface DriverDetailsPanelProps {
  driver: DriverModel;
  onEditClick: (driver: DriverModel) => void;
}

export function DriverDetailsPanel({ driver, onEditClick }: DriverDetailsPanelProps) {
  const { lang, t } = useLanguage();
  const [currentMonth] = useState("August 2028");

  // Highlighted active duty dates
  const activeDutyDays = [1, 7, 10, 14, 18, 22, 26, 29];

  const calendarDays = [
    { day: 30, prevMonth: true },
    { day: 31, prevMonth: true },
    { day: 1, current: true },
    { day: 2, current: true },
    { day: 3, current: true },
    { day: 4, current: true },
    { day: 5, current: true },
    { day: 6, current: true },
    { day: 7, current: true },
    { day: 8, current: true },
    { day: 9, current: true },
    { day: 10, current: true },
    { day: 11, current: true },
    { day: 12, current: true },
    { day: 13, current: true },
    { day: 14, current: true },
    { day: 15, current: true },
    { day: 16, current: true },
    { day: 17, current: true },
    { day: 18, current: true },
    { day: 19, current: true },
    { day: 20, current: true },
    { day: 21, current: true },
    { day: 22, current: true },
    { day: 23, current: true },
    { day: 24, current: true },
    { day: 25, current: true },
    { day: 26, current: true },
    { day: 27, current: true },
    { day: 28, current: true },
    { day: 29, current: true },
    { day: 30, current: true },
    { day: 31, current: true },
    { day: 1, nextMonth: true },
    { day: 2, nextMonth: true },
  ];

  return (
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-6 space-y-6">
      {/* Panel Top Action Bar */}
      <div className="flex items-center justify-between border-b border-[#333333] pb-4">
        <h3 className="text-lg font-extrabold text-white tracking-tight">{t("drivers.driverDetails")}</h3>
        <button
          onClick={() => onEditClick(driver)}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Driver Identity Card */}
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#444444] shadow-lg">
          <Image
            src={driver.avatar}
            alt={driver.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-extrabold text-white">{driver.name}</h4>
          <p className="text-xs text-slate-400 font-mono font-semibold">{driver.id}</p>
        </div>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
            driver.status === "On Duty"
              ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
              : driver.status === "Sick Leave"
              ? "bg-rose-950 text-rose-300 border border-rose-800/40"
              : "bg-amber-950 text-amber-300 border border-amber-800/40"
          }`}
        >
          {driver.status}
        </span>
      </div>

      {/* Contact & Professional Details */}
      <div className="space-y-3 pt-2 border-t border-[#333333] text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" /> Email
          </span>
          <span className="text-white font-medium truncate max-w-[180px]">{driver.email}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" /> {lang === "vi" ? "Số điện thoại" : "Phone"}
          </span>
          <span className="text-white font-medium">{driver.phone}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> {lang === "vi" ? "Giờ làm việc" : "Work Hours"}
          </span>
          <span className="text-white font-bold">{driver.workHours} {lang === "vi" ? "Giờ" : "Hours"}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-2">
            <Award className="w-3.5 h-3.5" /> {t("drivers.rating")}
          </span>
          <span className="text-white font-bold">{driver.rating} ★ ({driver.performanceBadge})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> {lang === "vi" ? "Địa chỉ" : "Address"}
          </span>
          <span className="text-white font-medium">{driver.address}</span>
        </div>
      </div>

      {/* Mini Attendance Calendar */}
      <div className="space-y-3 pt-4 border-t border-[#333333]">
        <div className="flex items-center justify-between">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider">{lang === "vi" ? "Lịch làm việc" : "Duty Calendar"}</h5>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded-lg hover:bg-[#2a2a2a] text-slate-400 hover:text-white transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-300">{lang === "vi" ? "Tháng 8, 2028" : currentMonth}</span>
            <button className="p-1 rounded-lg hover:bg-[#2a2a2a] text-slate-400 hover:text-white transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400">
          <span>{lang === "vi" ? "CN" : "Su"}</span>
          <span>{lang === "vi" ? "T2" : "Mo"}</span>
          <span>{lang === "vi" ? "T3" : "Tu"}</span>
          <span>{lang === "vi" ? "T4" : "We"}</span>
          <span>{lang === "vi" ? "T5" : "Th"}</span>
          <span>{lang === "vi" ? "T6" : "Fr"}</span>
          <span>{lang === "vi" ? "T7" : "Sa"}</span>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {calendarDays.map((d, i) => {
            const isActive = d.current && activeDutyDays.includes(d.day);
            return (
              <div
                key={i}
                className={`py-1.5 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-[#ff3366] text-white font-bold shadow-xs"
                    : d.current
                    ? "text-slate-200 hover:bg-[#2a2a2a]"
                    : "text-slate-600"
                }`}
              >
                {d.day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Message CTA */}
      <button
        onClick={() => alert(`Direct messaging with ${driver.name}`)}
        className="w-full py-3 rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white text-xs font-bold hover:bg-[#333333] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
      >
        <MessageSquare className="w-4 h-4 text-[#38bdf8]" />
        <span>{t("tracking.sendMsg")}</span>
      </button>
    </div>
  );
}
