"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { CalendarEventModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface ScheduleDetailPanelProps {
  event: CalendarEventModel;
  onClose: () => void;
}

export function ScheduleDetailPanel({ event, onClose }: ScheduleDetailPanelProps) {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm p-6 space-y-6">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-[#333333] pb-4">
        <h3 className="text-lg font-extrabold text-white tracking-tight">{t("calendar.scheduleDetail")}</h3>
        <button
          onClick={onClose}
          className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          title="Close Panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Agenda Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold text-slate-400 block">{t("calendar.agenda")}</span>
        <h4 className="text-base font-extrabold text-white">
          {lang === "vi"
            ? `${event.type === "Pickup" ? "Nhận xe" : "Trả xe"} lúc ${event.timeSlot}`
            : `Car ${event.type} at ${event.timeSlot}`}
        </h4>
      </div>

      {/* Client Info Card */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">{t("calendar.clientInfo")}</span>
        
        <div className="bg-[#262626] p-4 rounded-2xl border border-[#333333] space-y-4 shadow-2xs">
          {/* Avatar & Name */}
          <div className="flex flex-col items-center justify-center text-center space-y-2 py-2">
            <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-[#444444] shadow-md">
              <Image
                src={event.clientAvatar}
                alt={event.clientName}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <h5 className="text-base font-extrabold text-white">{event.clientName}</h5>
          </div>

          {/* Key Details List */}
          <div className="space-y-2.5 pt-2 border-t border-[#333333] text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t("bookings.driver")}</span>
              <span className="text-white font-bold">{event.driverName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t("calendar.startDate")}</span>
              <span className="text-white font-bold">{event.startDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t("calendar.endDate")}</span>
              <span className="text-white font-bold">{event.endDate}</span>
            </div>
            {event.notes && (
              <div className="space-y-1 pt-1 border-t border-[#333333]">
                <span className="text-slate-400 font-medium block">{t("calendar.notes")}</span>
                <p className="text-slate-300 font-medium text-[11px] leading-relaxed">
                  {event.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Car Info Card */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">{t("calendar.carInfo")}</span>

        <div className="bg-[#262626] p-4 rounded-2xl border border-[#333333] space-y-4 shadow-2xs">
          {/* Car Image Preview */}
          <div className="relative w-full h-28 my-1">
            <Image
              src={event.carImage}
              alt={event.carModel}
              fill
              sizes="240px"
              className="object-contain"
            />
          </div>

          <h5 className="text-base font-extrabold text-white">{event.carModel}</h5>

          {/* Car Specs List */}
          <div className="space-y-2.5 pt-2 border-t border-[#333333] text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t("tracking.carType")}</span>
              <span className="text-white font-bold">{event.carType}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t("tracking.carNumber")}</span>
              <span className="text-white font-bold">{event.carNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-medium">{t("common.transmission")}</span>
              <span className="text-white font-bold">{t("common.automatic")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
