"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { CalendarEventModel } from "@/domain/models";

interface ScheduleDetailPanelProps {
  event: CalendarEventModel;
  onClose: () => void;
}

export function ScheduleDetailPanel({ event, onClose }: ScheduleDetailPanelProps) {
  return (
    <div className="theme-card rounded-2xl border shadow-sm p-6 space-y-6">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <h3 className="text-lg font-extrabold theme-text tracking-tight">Schedule Detail</h3>
        <button
          onClick={onClose}
          className="p-1.5 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:text-slate-400 dark:hover:text-rose-400 dark:hover:bg-slate-800 transition-colors"
          title="Close Panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Agenda Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold theme-muted block">Agenda</span>
        <h4 className="text-base font-extrabold theme-text">
          Car {event.type} at {event.timeSlot}
        </h4>
      </div>

      {/* Client Info Card */}
      <div className="space-y-3">
        <span className="text-xs font-bold theme-muted block uppercase tracking-wider">Client Info</span>
        
        <div className="theme-card p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4 shadow-2xs">
          {/* Avatar & Name */}
          <div className="flex flex-col items-center justify-center text-center space-y-2 py-2">
            <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white dark:border-slate-800 shadow-md">
              <Image
                src={event.clientAvatar}
                alt={event.clientName}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <h5 className="text-base font-extrabold theme-text">{event.clientName}</h5>
          </div>

          {/* Key Details List */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex items-center justify-between">
              <span className="theme-muted font-medium">Driver</span>
              <span className="theme-text font-bold">{event.driverName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="theme-muted font-medium">Start Date</span>
              <span className="theme-text font-bold">{event.startDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="theme-muted font-medium">End Date</span>
              <span className="theme-text font-bold">{event.endDate}</span>
            </div>
            {event.notes && (
              <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="theme-muted font-medium block">Notes</span>
                <p className="theme-text font-medium text-[11px] leading-relaxed">
                  {event.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Car Info Card */}
      <div className="space-y-3">
        <span className="text-xs font-bold theme-muted block uppercase tracking-wider">Car Info</span>

        <div className="theme-card p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4 shadow-2xs">
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

          <h5 className="text-base font-extrabold theme-text">{event.carModel}</h5>

          {/* Car Specs List */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex items-center justify-between">
              <span className="theme-muted font-medium">Car Type</span>
              <span className="theme-text font-bold">{event.carType}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="theme-muted font-medium">Car Number</span>
              <span className="theme-text font-bold">{event.carNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="theme-muted font-medium">Transmission</span>
              <span className="theme-text font-bold">Automatic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
