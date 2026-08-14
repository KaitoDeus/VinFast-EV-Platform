"use client";

import React, { useState } from "react";
import { ArrowUpDown, ArrowRightLeft, User, Car, Calendar, DollarSign } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { PaymentItem } from "@/types";

interface PaymentsTableProps {
  payments: PaymentItem[];
  onEditPayment: (payment: PaymentItem) => void;
  onDeletePayment: (id: string) => void;
}

export function PaymentsTable({
  payments,
  onEditPayment,
  onDeletePayment,
}: PaymentsTableProps) {
  const { t } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>(["INV-WZ1004"]);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const toggleSelectAll = () => {
    if (selectedIds.length === payments.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(payments.map((p) => p.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  if (payments.length === 0) {
    return (
      <div className="bg-[#1f1f1f] p-12 rounded-2xl border border-[#333333] text-center space-y-2">
        <p className="text-sm font-bold text-white">No invoices found</p>
        <p className="text-xs text-slate-400">Try adjusting your search query or status filter.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm overflow-hidden p-4 sm:p-0">
      {/* Mobile Switcher header */}
      <div className="flex items-center justify-between pb-3 sm:hidden border-b border-[#333333]">
        <span className="text-xs font-bold text-white">{t("financials.invoices")} ({payments.length})</span>
        <div className="flex items-center bg-[#2a2a2a] p-1 rounded-xl border border-[#3a3a3a]">
          <button
            onClick={() => setViewMode("cards")}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
              viewMode === "cards" ? "bg-[#1464f4] text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {t("common.cards")}
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
              viewMode === "table" ? "bg-[#1464f4] text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {t("common.table")}
          </button>
        </div>
      </div>

      {/* ─── 1. MOBILE CARD VIEW (< 640px) ─── */}
      <div className={`${viewMode === "cards" ? "block sm:hidden" : "hidden"} space-y-3 pt-3`}>
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-[#262626] p-4 rounded-xl border border-[#333333] space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(payment.id)}
                  onChange={() => toggleSelectRow(payment.id)}
                  className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-bold text-white">{payment.id}</span>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  payment.status === "Completed"
                    ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
                    : payment.status === "Awaiting"
                    ? "bg-sky-950 text-sky-300 border border-sky-800/40"
                    : "bg-rose-950 text-rose-300 border border-rose-800/40"
                }`}
              >
                {payment.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-[#333333]">
              <div>
                <span className="text-slate-400 text-[10px] flex items-center gap-1">
                  <User className="w-3 h-3" /> {t("bookings.client")}
                </span>
                <p className="font-bold text-white truncate">{payment.clientName}</p>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Car className="w-3 h-3" /> {t("bookings.car")}
                </span>
                <p className="font-bold text-white truncate">{payment.carModel}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#333333] text-xs">
              <div>
                <span className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {t("financials.dueDate")}
                </span>
                <p className="text-slate-300 font-medium">{payment.dueDate}</p>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-[10px] flex items-center justify-end gap-1">
                  <DollarSign className="w-3 h-3" /> {t("financials.amount")}
                </span>
                <p className="font-black text-white text-sm">${payment.amount}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#333333]">
              <button
                onClick={() => onEditPayment(payment)}
                className="px-3 py-1.5 rounded-lg bg-[#333333] text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                {payment.id === "INV-WZ1004" ? t("common.view") : t("common.edit")}
              </button>
              <button
                onClick={() => onDeletePayment(payment.id)}
                className="px-3 py-1.5 rounded-lg bg-rose-950/40 text-rose-400 border border-rose-900/40 text-xs font-semibold hover:bg-rose-900/60 transition-colors"
              >
                {t("common.delete")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ─── 2. FULL HORIZONTAL SCROLL TABLE (Desktop & Mobile if viewMode === "table") ─── */}
      <div className={`${viewMode === "table" ? "block" : "hidden sm:block"}`}>
        {/* Swipe hint on mobile */}
        <div className="sm:hidden flex items-center justify-between py-2 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ArrowRightLeft className="w-3 h-3 text-[#38bdf8]" />
            {t("common.swipeHint")}
          </span>
        </div>

        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#333333] bg-[#262626] text-slate-300 font-black uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === payments.length && payments.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>Invoice</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("bookings.client")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("bookings.car")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("financials.ratePerDay")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("bookings.period")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("financials.amount")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("financials.dueDate")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center">{t("common.status")}</th>
                <th className="py-3.5 px-4 text-center">{t("common.action")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a] font-medium text-slate-200">
              {payments.map((payment) => {
                const isSelected = selectedIds.includes(payment.id);

                return (
                  <tr
                    key={payment.id}
                    className={`hover:bg-[#262626] transition-colors ${
                      isSelected ? "bg-[#262626]/80" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectRow(payment.id)}
                        className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                      />
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                      {payment.id}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                      {payment.clientName}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                      {payment.carModel}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-bold whitespace-nowrap">
                      ${payment.ratePerDay}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                      {payment.rentalPeriodDays} {payment.rentalPeriodDays > 1 ? "Days" : "Day"}
                    </td>
                    <td className="py-3.5 px-4 text-white font-bold whitespace-nowrap">
                      ${payment.amount}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                      {payment.dueDate}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {payment.status === "Completed" && (
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                          Completed
                        </span>
                      )}
                      {payment.status === "Awaiting" && (
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-sky-950 text-sky-300 border border-sky-800/40">
                          Awaiting
                        </span>
                      )}
                      {payment.status === "Overdue" && (
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-950 text-rose-300 border border-rose-800/40">
                          Overdue
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => onEditPayment(payment)}
                          className="px-3 py-1 rounded-lg bg-[#2a2a2a] text-white font-bold text-[11px] hover:bg-slate-700 transition-all shadow-sm cursor-pointer"
                        >
                          {payment.id === "INV-WZ1004" ? t("common.view") : t("common.edit")}
                        </button>
                        <button
                          onClick={() => onDeletePayment(payment.id)}
                          className="px-3 py-1 rounded-lg bg-rose-950/40 text-rose-400 border border-rose-900/40 font-bold text-[11px] hover:bg-rose-900/60 transition-all shadow-sm cursor-pointer"
                        >
                          {t("common.delete")}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
