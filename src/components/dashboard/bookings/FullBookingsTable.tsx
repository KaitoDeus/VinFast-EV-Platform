"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Check, Minus, Plus } from "lucide-react";
import { ServiceContainer } from "@/infrastructure/di";
import { BookingModel } from "@/domain/models";
import { AddBookingModal } from "./AddBookingModal";

export function FullBookingsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bookingService = ServiceContainer.getInstance().getBookingService();
  const allBookings: BookingModel[] = bookingService.searchBookings(searchQuery);

  const filteredBookings = allBookings.filter((item) => {
    const matchesType =
      selectedType === "All" ||
      item.carTypeBadge.toLowerCase() === selectedType.toLowerCase() ||
      item.carModel.toLowerCase().includes(selectedType.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" ||
      item.bookingStatus.toLowerCase() === selectedStatus.toLowerCase();
    return matchesType && matchesStatus;
  });

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      {/* Table Action Controls Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <h3 className="text-xl font-bold theme-text tracking-tight">Car Bookings</h3>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 lg:w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search client name, car, etc"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
          </div>

          {/* Car Type Dropdown Filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="pl-3 pr-8 py-2 text-xs font-semibold rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff] appearance-none cursor-pointer"
            >
              <option value="All">Car Type</option>
              <option value="SUV">SUV</option>
              <option value="Crossover">Crossover</option>
              <option value="E-Scooter">E-Scooter</option>
              <option value="Compact">Compact</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Status Dropdown Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-3 pr-8 py-2 text-xs font-semibold rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff] appearance-none cursor-pointer"
            >
              <option value="All">Status</option>
              <option value="Returned">Returned</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Add Booking Red CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Add Booking</span>
          </button>
        </div>
      </div>

      {/* Full Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold tracking-wider">
              <th className="py-3 px-3">Booking ID</th>
              <th className="py-3 px-3">Booking Date</th>
              <th className="py-3 px-3">Client Name</th>
              <th className="py-3 px-3">Car Model</th>
              <th className="py-3 px-3">Plan</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3 text-center">Driver</th>
              <th className="py-3 px-3">Payment</th>
              <th className="py-3 px-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
            {filteredBookings.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-3 theme-text font-bold">{item.id}</td>
                <td className="py-4 px-3 theme-muted">{item.bookingDate}</td>
                <td className="py-4 px-3 theme-text font-semibold">{item.clientName}</td>
                <td className="py-4 px-3">
                  <div className="flex items-center gap-2">
                    <span className="theme-text font-semibold">{item.carModel}</span>
                    <span className="px-2 py-0.5 text-[10px] rounded-md font-bold bg-[#f0f7ff] text-[#00a8ff] border border-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:border-slate-700">
                      {item.carTypeBadge}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-3 theme-text">{item.planDays}</td>
                <td className="py-4 px-3">
                  <div className="inline-flex items-center gap-1 text-[11px] theme-muted">
                    <span>{item.startDate}</span>
                    <span className="text-slate-400 text-[10px]">to</span>
                    <span>{item.endDate}</span>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  {item.driverAssigned ? (
                    <div className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 border border-sky-200 dark:border-sky-800 flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-500 border border-rose-200 dark:border-rose-800 flex items-center justify-center mx-auto shadow-sm">
                      <Minus className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </td>
                <td className="py-4 px-3">
                  <div className="flex items-center gap-2">
                    <span className="theme-text font-bold">{item.amount}</span>
                    <span className={`text-[10px] font-bold ${item.paymentStatus === "Paid" ? "text-sky-600 dark:text-sky-400" : "text-rose-500"}`}>
                      {item.paymentStatus}
                    </span>
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

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2 theme-muted">
          <span>Results per page</span>
          <div className="relative">
            <select className="pl-3 pr-7 py-1 text-xs font-semibold rounded-lg contact-input border border-slate-200 dark:border-slate-800 outline-none appearance-none cursor-pointer">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Page Buttons (Clean White Pills with Light Slate & Soft Blue Hover) */}
        <div className="flex items-center gap-1.5 font-semibold">
          <button className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all shadow-2xs">
            &lt; Prev
          </button>
          <button className="w-8.5 h-8.5 rounded-xl bg-[#ff3366] text-white font-extrabold flex items-center justify-center shadow-md">
            1
          </button>
          <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
            2
          </button>
          <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
            3
          </button>
          <span className="px-1 theme-muted">..</span>
          <button className="w-8.5 h-8.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-2xs font-bold">
            18
          </button>
          <button className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-sky-50 hover:text-[#00a8ff] hover:border-sky-200 dark:hover:bg-slate-800 transition-all shadow-2xs">
            Next &gt;
          </button>
        </div>
      </div>

      {/* Add Booking Modal Dialog */}
      <AddBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert("New VinFast EV booking created successfully!");
        }}
      />
    </div>
  );
}
