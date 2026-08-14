"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Check, Minus, Plus, ArrowRightLeft, User, Car, Calendar, CreditCard } from "lucide-react";
import { ServiceContainer } from "@/infrastructure/di";
import { BookingModel } from "@/domain/models";
import { AddBookingModal } from "./AddBookingModal";

export function FullBookingsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

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
    <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-2xl border border-[#333333] shadow-sm space-y-4">
      {/* Table Action Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">Car Bookings</h3>

          {/* Mobile View Mode Switcher (Cards / Table) */}
          <div className="flex items-center bg-[#2a2a2a] p-1 rounded-xl border border-[#3a3a3a] sm:hidden">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                viewMode === "cards" ? "bg-[#1464f4] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                viewMode === "table" ? "bg-[#1464f4] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Table
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search client, car..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
          </div>

          {/* Car Type Dropdown Filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="pl-3 pr-7 py-2 text-xs font-semibold rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white outline-none focus:ring-2 focus:ring-[#38bdf8] appearance-none cursor-pointer"
            >
              <option value="All">Car Type</option>
              <option value="SUV">SUV</option>
              <option value="Crossover">Crossover</option>
              <option value="E-Scooter">E-Scooter</option>
              <option value="Compact">Compact</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Status Dropdown Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-3 pr-7 py-2 text-xs font-semibold rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white outline-none focus:ring-2 focus:ring-[#38bdf8] appearance-none cursor-pointer"
            >
              <option value="All">Status</option>
              <option value="Returned">Returned</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Add Booking Red CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Booking</span>
          </button>
        </div>
      </div>

      {/* ─── 1. MOBILE CARD VIEW (< 640px) ─── */}
      <div className={`${viewMode === "cards" ? "block sm:hidden" : "hidden"} space-y-3`}>
        {filteredBookings.length === 0 ? (
          <div className="p-8 text-center bg-[#2a2a2a] rounded-xl border border-[#333333]">
            <p className="text-xs font-bold text-white">No bookings match your filters</p>
          </div>
        ) : (
          filteredBookings.map((item) => (
            <div
              key={item.id}
              className="bg-[#262626] p-4 rounded-xl border border-[#333333] space-y-3 shadow-xs"
            >
              {/* Card Header: ID & Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-white">{item.id}</span>
                  <span className="text-[10px] text-slate-400 font-medium">({item.bookingDate})</span>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                    item.bookingStatus === "Returned"
                      ? "bg-slate-700 text-slate-200"
                      : item.bookingStatus === "Ongoing"
                      ? "bg-sky-950 text-sky-300 border border-sky-800/50"
                      : "bg-rose-950 text-rose-300 border border-rose-800/50"
                  }`}
                >
                  {item.bookingStatus}
                </span>
              </div>

              {/* Client & Car info */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#333333]">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <User className="w-3 h-3" /> Client
                  </span>
                  <p className="text-xs font-bold text-white truncate">{item.clientName}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Car className="w-3 h-3" /> Vehicle
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="text-xs font-bold text-white truncate">{item.carModel}</p>
                    <span className="px-1.5 py-0.2 text-[9px] rounded bg-[#1f1f1f] text-sky-400 font-bold border border-sky-900/40">
                      {item.carTypeBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dates & Payment */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#333333] text-[11px]">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Rental ({item.planDays})
                  </span>
                  <p className="text-slate-300 text-[11px] font-medium leading-tight">
                    {item.startDate} ➔ {item.endDate}
                  </p>
                  <div className="flex items-center gap-1 pt-1 text-[10px] text-slate-400">
                    <span>Driver:</span>
                    {item.driverAssigned ? (
                      <span className="text-sky-400 font-bold flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> Assigned
                      </span>
                    ) : (
                      <span className="text-slate-500 flex items-center gap-0.5">
                        <Minus className="w-3 h-3" /> None
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-0.5 text-right">
                  <span className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                    <CreditCard className="w-3 h-3" /> Amount
                  </span>
                  <p className="text-xs font-black text-white">{item.amount}</p>
                  <span
                    className={`inline-block text-[10px] font-bold ${
                      item.paymentStatus === "Paid" ? "text-sky-400" : "text-rose-400"
                    }`}
                  >
                    {item.paymentStatus}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ─── 2. FULL HORIZONTAL SCROLL TABLE (Desktop & Mobile if viewMode === "table") ─── */}
      <div className={`${viewMode === "table" ? "block" : "hidden sm:block"}`}>
        {/* Swipe hint on mobile */}
        <div className="sm:hidden flex items-center justify-between pb-2 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ArrowRightLeft className="w-3 h-3 text-[#38bdf8]" />
            Vuốt ngang để xem đủ 9 cột
          </span>
          <span className="text-[10px] bg-[#2a2a2a] px-2 py-0.5 rounded text-slate-300">
            {filteredBookings.length} Bookings
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#333333] scrollbar-thin">
          <table className="w-full text-left text-xs min-w-[700px] border-collapse bg-[#1f1f1f]">
            <thead>
              <tr className="border-b border-[#333333] bg-[#262626] text-slate-400 font-semibold tracking-wider text-[11px]">
                <th className="py-3 px-4">Booking ID</th>
                <th className="py-3 px-3">Booking Date</th>
                <th className="py-3 px-3">Client Name</th>
                <th className="py-3 px-3">Car Model</th>
                <th className="py-3 px-3">Plan</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3 text-center">Driver</th>
                <th className="py-3 px-3">Payment</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a] font-medium text-slate-200">
              {filteredBookings.map((item) => (
                <tr key={item.id} className="hover:bg-[#262626] transition-colors">
                  <td className="py-3.5 px-4 text-white font-bold">{item.id}</td>
                  <td className="py-3.5 px-3 text-slate-400">{item.bookingDate}</td>
                  <td className="py-3.5 px-3 text-white font-semibold">{item.clientName}</td>
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{item.carModel}</span>
                      <span className="px-2 py-0.5 text-[10px] rounded-md font-bold bg-[#2a2a2a] text-[#38bdf8] border border-[#38bdf8]/30">
                        {item.carTypeBadge}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-slate-300">{item.planDays}</td>
                  <td className="py-3.5 px-3">
                    <div className="inline-flex items-center gap-1 text-[11px] text-slate-300">
                      <span>{item.startDate}</span>
                      <span className="text-slate-500 text-[10px]">to</span>
                      <span>{item.endDate}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    {item.driverAssigned ? (
                      <div className="w-5 h-5 rounded-full bg-sky-950 text-sky-400 border border-sky-800/50 flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-rose-950 text-rose-400 border border-rose-800/50 flex items-center justify-center mx-auto shadow-sm">
                        <Minus className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">{item.amount}</span>
                      <span className={`text-[10px] font-bold ${item.paymentStatus === "Paid" ? "text-sky-400" : "text-rose-400"}`}>
                        {item.paymentStatus}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
                        item.bookingStatus === "Returned"
                          ? "bg-slate-800 text-slate-200 border border-slate-700"
                          : item.bookingStatus === "Ongoing"
                          ? "bg-sky-950 text-sky-300 border border-sky-800/50"
                          : "bg-rose-950 text-rose-300 border border-rose-800/50"
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

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#333333] text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span>Results per page</span>
          <div className="relative">
            <select className="pl-3 pr-7 py-1 text-xs font-semibold rounded-lg bg-[#2a2a2a] border border-[#3a3a3a] text-white outline-none appearance-none cursor-pointer">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Page Buttons */}
        <div className="flex items-center gap-1.5 font-semibold">
          <button className="px-3 py-1.5 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-300 hover:bg-[#333333] hover:text-white transition-all text-xs cursor-pointer">
            &lt; Prev
          </button>
          <button className="w-8 h-8 rounded-xl bg-[#ff3366] text-white font-extrabold flex items-center justify-center shadow-md text-xs">
            1
          </button>
          <button className="w-8 h-8 rounded-xl bg-[#2a2a2a] text-slate-300 border border-[#333333] hover:bg-[#333333] hover:text-white transition-all flex items-center justify-center font-bold text-xs cursor-pointer">
            2
          </button>
          <button className="w-8 h-8 rounded-xl bg-[#2a2a2a] text-slate-300 border border-[#333333] hover:bg-[#333333] hover:text-white transition-all flex items-center justify-center font-bold text-xs cursor-pointer">
            3
          </button>
          <span className="px-1 text-slate-500">..</span>
          <button className="w-8 h-8 rounded-xl bg-[#2a2a2a] text-slate-300 border border-[#333333] hover:bg-[#333333] hover:text-white transition-all flex items-center justify-center font-bold text-xs cursor-pointer">
            18
          </button>
          <button className="px-3 py-1.5 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-300 hover:bg-[#333333] hover:text-white transition-all text-xs cursor-pointer">
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
