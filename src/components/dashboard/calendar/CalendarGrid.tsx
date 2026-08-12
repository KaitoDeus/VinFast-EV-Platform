"use client";

import React from "react";
import Image from "next/image";
import { CalendarEventModel } from "@/domain/models";

interface CalendarGridProps {
  events: CalendarEventModel[];
  selectedEventId: string;
  onSelectEvent: (event: CalendarEventModel) => void;
}

export function CalendarGrid({
  events,
  selectedEventId,
  onSelectEvent,
}: CalendarGridProps) {
  const days = [
    { num: "14", day: "Mon" },
    { num: "15", day: "Tue" },
    { num: "16", day: "Wed" },
    { num: "17", day: "Thu" },
    { num: "18", day: "Fri" },
    { num: "19", day: "Sat" },
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <div className="theme-card rounded-2xl border shadow-sm p-4 space-y-3">
      {/* Legend Indicator Bar */}
      <div className="flex items-center gap-4 text-xs font-semibold px-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#00a8ff]"></span>
          <span className="theme-text font-bold">Pickup</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-rose-400"></span>
          <span className="theme-text font-bold">Return</span>
        </div>
      </div>

      {/* Main Grid Schedule Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-center">
              <th className="py-3 px-3 text-xs theme-muted font-bold text-left w-20">UTC +1</th>
              {days.map((d, idx) => (
                <th key={idx} className="py-3 px-3 w-[15%]">
                  <div className="space-y-0.5 text-center">
                    <p className="text-base font-extrabold theme-text leading-none">{d.num}</p>
                    <p className="text-[11px] theme-muted font-medium uppercase tracking-wide">{d.day}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {timeSlots.map((time, timeIdx) => (
              <tr key={timeIdx} className="h-16">
                {/* Time Label */}
                <td className="py-2 px-3 text-[11px] theme-muted font-bold align-top whitespace-nowrap">
                  {time}
                </td>

                {/* 6 Day Columns */}
                {days.map((_, dayIdx) => {
                  // Find matching events for this cell
                  const cellEvents = events.filter(
                    (e) => e.dayIndex === dayIdx && e.timeSlot === time
                  );

                  return (
                    <td
                      key={dayIdx}
                      className="py-1 px-1 border-l border-slate-100 dark:border-slate-800/60 align-top relative"
                    >
                      <div className="space-y-1">
                        {cellEvents.map((evt) => {
                          const isSelected = evt.id === selectedEventId;
                          const isPickup = evt.type === "Pickup";

                          return (
                            <button
                              key={evt.id}
                              onClick={() => onSelectEvent(evt)}
                              className={`w-full text-left p-2 rounded-xl border shadow-2xs ${
                                isPickup
                                  ? "bg-sky-100/95 border-sky-200 dark:bg-sky-950/70 dark:border-sky-800"
                                  : "bg-rose-100/95 border-rose-200 dark:bg-rose-950/70 dark:border-rose-800"
                              } ${
                                isSelected
                                  ? "ring-2 ring-slate-900 dark:ring-white z-10 shadow-md"
                                  : ""
                              }`}
                            >
                              <div className="space-y-0.5">
                                <p className="text-[10px] text-slate-900 dark:text-slate-300 font-bold leading-tight">
                                  {evt.timeSlot}
                                </p>
                                <p className="text-xs font-black text-black dark:text-white leading-snug truncate">
                                  {evt.carModel}
                                </p>
                                <div className="flex items-center gap-1.5 text-[10px] text-slate-900 dark:text-slate-300 font-bold pt-0.5">
                                  <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700">
                                    <Image
                                      src={evt.clientAvatar}
                                      alt={evt.clientName}
                                      fill
                                      sizes="16px"
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="truncate">{evt.clientName}</span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
