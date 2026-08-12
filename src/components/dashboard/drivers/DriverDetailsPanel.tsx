"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Mail, Phone, MapPin, Clock, Briefcase, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { DriverModel } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

interface DriverDetailsPanelProps {
  driver: DriverModel;
  onEditClick: (driver: DriverModel) => void;
}

export function DriverDetailsPanel({ driver, onEditClick }: DriverDetailsPanelProps) {
  const { theme } = useTheme();
  const [currentMonth] = useState("August 2028");

  // Highlighted active duty dates matching Wheelzie mockup calendar
  const activeDutyDays = [1, 7, 10, 14, 18, 22, 26, 29];

  // Calendar dates layout for August 2028 (Starts on Tuesday = index 2)
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
    <div className="space-y-6">
      {/* 1. Driver Profile Summary Card */}
      <div className="theme-card rounded-2xl border shadow-sm p-5 space-y-5">
        {/* Top Header Row: Profile Avatar, Name, Status Pill & Action Buttons */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white dark:border-slate-800 shadow-md">
              <Image
                src={driver.avatar}
                alt={driver.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-extrabold theme-text tracking-tight leading-none">
                {driver.name}
              </h4>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#edf7fc] text-[#00a8ff] border border-sky-200 dark:bg-sky-950/60 dark:text-sky-400 inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8ff]" />
                <span>{driver.status}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              title="Message Driver"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#00a8ff] hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={() => onEditClick(driver)}
              className="px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-white font-extrabold text-xs shadow-sm hover:bg-slate-800 transition-colors"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Contact Details List */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2 text-slate-500 font-semibold">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Email</span>
            </div>
            <span className="theme-text font-extrabold truncate max-w-[200px]">{driver.email}</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2 text-slate-500 font-semibold">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Phone</span>
            </div>
            <span className="theme-text font-extrabold">{driver.phone}</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2 text-slate-500 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Address</span>
            </div>
            <span className="theme-text font-bold">{driver.address}</span>
          </div>
        </div>

        {/* Metric Stats Cards (Work Hours & Work Performance) */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="p-3.5 rounded-xl border space-y-1.5 shadow-2xs"
          >
            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#00a8ff]" />
              <span>Work Hours</span>
            </div>
            <p className="text-sm font-black theme-text tracking-tight">{driver.workHours} hours</p>
          </div>

          <div
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
              borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
            }}
            className="p-3.5 rounded-xl border space-y-1.5 shadow-2xs"
          >
            <div className="flex items-center gap-2 text-slate-500 text-[11px] font-semibold">
              <Briefcase className="w-3.5 h-3.5 text-[#00a8ff]" />
              <span>Work Performance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black theme-text">{driver.rating}</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-[#00a8ff] text-white rounded-md">
                {driver.performanceBadge}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Mini August 2028 Calendar Picker Widget */}
      <div className="theme-card rounded-2xl border shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-extrabold theme-text">{currentMonth}</h4>
          {/* High-Contrast Arrow Navigation Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="p-1.5 rounded-xl border text-[#00a8ff] transition-all shadow-2xs hover:bg-[#00a8ff] hover:text-white dark:hover:bg-[#00a8ff] dark:hover:text-white cursor-pointer"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="p-1.5 rounded-xl border text-[#00a8ff] transition-all shadow-2xs hover:bg-[#00a8ff] hover:text-white dark:hover:bg-[#00a8ff] dark:hover:text-white cursor-pointer"
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 7-Column Day Header */}
        <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        {/* Calendar Dates Grid (Clear Soft Blue Hover + Cyan Text) */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {calendarDays.map((item, idx) => {
            const isHighlighted = item.current && activeDutyDays.includes(item.day);

            return (
              <div
                key={idx}
                className="h-8 flex items-center justify-center relative select-none"
              >
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    isHighlighted
                      ? "bg-[#0f172a] text-white shadow-md hover:bg-slate-800"
                      : item.current
                      ? "theme-text hover:bg-[#edf7fc] hover:text-[#00a8ff] dark:hover:bg-slate-800 dark:hover:text-[#38bdf8]"
                      : "text-slate-300 dark:text-slate-700"
                  }`}
                >
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Schedule Agenda List */}
      <div className="theme-card rounded-2xl border shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-extrabold theme-text">Schedule</h4>
          <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {driver.scheduleItems.map((sch) => (
            <div
              key={sch.id}
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="p-3.5 rounded-xl border flex items-center justify-between text-xs transition-all shadow-2xs"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  {sch.dayLabel}
                </span>
                <p className="font-black theme-text">{sch.clientName}</p>
                <div className="flex items-center gap-3 text-[11px] theme-muted font-medium pt-0.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00a8ff]" />
                    {sch.timeSlot}
                  </span>
                  <span>{sch.carModel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
