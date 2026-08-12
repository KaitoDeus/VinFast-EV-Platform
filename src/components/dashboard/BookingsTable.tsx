"use client";

import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { ServiceContainer } from "@/infrastructure/di";
import { BookingModel } from "@/domain/models";

export function BookingsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const bookingService = ServiceContainer.getInstance().getBookingService();
  const bookings: BookingModel[] = bookingService.searchBookings(searchQuery);

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold theme-text tracking-tight">Car Bookings</h3>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search client name, car, etc."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <th className="py-3 px-3">Booking ID</th>
              <th className="py-3 px-3">Booking Date</th>
              <th className="py-3 px-3">Client Name</th>
              <th className="py-3 px-3">Car Model</th>
              <th className="py-3 px-3">Plan</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Payment</th>
              <th className="py-3 px-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
            {bookings.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-3 theme-text font-bold">{item.id}</td>
                <td className="py-4 px-3 theme-muted">{item.bookingDate}</td>
                <td className="py-4 px-3 theme-text font-semibold">{item.clientName}</td>
                <td className="py-4 px-3">
                  <div className="space-y-1">
                    <p className="theme-text font-semibold">{item.carModel}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] rounded-md bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-bold font-mono shadow-2xs">
                      {item.plateNumber}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-3 theme-text">{item.planDays}</td>
                <td className="py-4 px-3">
                  <div className="space-y-0.5 text-[11px]">
                    <p className="theme-muted"><span className="text-slate-400">Start:</span> {item.startDate}</p>
                    <p className="theme-muted"><span className="text-slate-400">End:</span> {item.endDate}</p>
                  </div>
                </td>
                <td className="py-4 px-3">
                  <div className="space-y-0.5">
                    <p className="theme-text font-bold">{item.amount}</p>
                    <p className={`text-[10px] font-bold ${item.paymentStatus === "Paid" ? "text-sky-600 dark:text-sky-400" : "text-rose-500"}`}>
                      {item.paymentStatus}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-[11px] font-bold shadow-sm ${
                      item.bookingStatus === "Returned"
                        ? "bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900"
                        : item.bookingStatus === "Ongoing"
                        ? "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                    }`}
                  >
                    {item.bookingStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
