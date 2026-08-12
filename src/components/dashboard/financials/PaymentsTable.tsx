"use client";

import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { PaymentModel } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

interface PaymentsTableProps {
  payments: PaymentModel[];
  onEditPayment: (payment: PaymentModel) => void;
  onDeletePayment: (id: string) => void;
}

export function PaymentsTable({
  payments,
  onEditPayment,
  onDeletePayment,
}: PaymentsTableProps) {
  const { theme } = useTheme();
  const [selectedIds, setSelectedIds] = useState<string[]>(["INV-WZ1004"]); // INV-WZ1004 checked matching mockup

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
      <div className="theme-card p-12 rounded-2xl border text-center space-y-2">
        <p className="text-sm font-bold theme-text">No invoices found</p>
        <p className="text-xs theme-muted">Try adjusting your search query or status filter.</p>
      </div>
    );
  }

  return (
    <div className="theme-card rounded-2xl border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          {/* Header Row (Pale Ice Blue & Pure Black Extra-Bold Text in Light Mode) */}
          <thead>
            <tr
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                color: theme === "dark" ? "#ffffff" : "#000000",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="border-b font-black uppercase tracking-wider text-[11px]"
            >
              <th className="py-3.5 px-4 w-10 text-center">
                <input
                  type="checkbox"
                  checked={selectedIds.length === payments.length && payments.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-slate-300 text-[#00a8ff] focus:ring-[#00a8ff] cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Invoice ID</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Client Name</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Car Model</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Rate per Day</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Rental Period</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Amount</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Due Date</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center">
                <div className="flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>Status</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center">
                <div className="flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>Action</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body Rows with Ultra-Thin Separator Lines */}
          <tbody className="divide-y divide-slate-100/40 dark:divide-slate-800/30 font-medium">
            {payments.map((payment) => {
              const isChecked = selectedIds.includes(payment.id);

              return (
                <tr
                  key={payment.id}
                  className={`transition-colors ${
                    isChecked
                      ? "bg-slate-50/90 dark:bg-slate-800/50"
                      : "hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                  }`}
                >
                  {/* Checkbox Cell */}
                  <td className="py-3.5 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleSelectRow(payment.id)}
                      className="w-4 h-4 rounded border-slate-300 text-[#00a8ff] focus:ring-[#00a8ff] cursor-pointer"
                    />
                  </td>

                  {/* Invoice ID Cell */}
                  <td className="py-3.5 px-4 theme-text font-black text-xs whitespace-nowrap">
                    {payment.id}
                  </td>

                  {/* Client Name Cell */}
                  <td className="py-3.5 px-4 theme-text font-extrabold whitespace-nowrap">
                    {payment.clientName}
                  </td>

                  {/* Car Model Cell */}
                  <td className="py-3.5 px-4 theme-text font-bold whitespace-nowrap">
                    {payment.carModel}
                  </td>

                  {/* Rate per Day Cell */}
                  <td className="py-3.5 px-4 theme-text font-semibold whitespace-nowrap">
                    ${payment.ratePerDay}
                  </td>

                  {/* Rental Period Cell */}
                  <td className="py-3.5 px-4 theme-text font-semibold whitespace-nowrap">
                    {payment.rentalPeriodDays} {payment.rentalPeriodDays === 1 ? "Day" : "Days"}
                  </td>

                  {/* Amount Cell */}
                  <td className="py-3.5 px-4 theme-text font-black text-xs whitespace-nowrap">
                    ${payment.amount}
                  </td>

                  {/* Due Date Cell */}
                  <td className="py-3.5 px-4 theme-text font-medium whitespace-nowrap text-slate-600 dark:text-slate-300">
                    {payment.dueDate}
                  </td>

                  {/* Status Badge Cell */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {payment.status === "Completed" && (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-[#0f172a] text-white shadow-2xs">
                        Completed
                      </span>
                    )}
                    {payment.status === "Awaiting" && (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-[#edf7fc] text-[#00a8ff] border border-sky-200 dark:bg-sky-950/60 dark:text-sky-400 shadow-2xs">
                        Awaiting
                      </span>
                    )}
                    {payment.status === "Overdue" && (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-500 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-400 shadow-2xs">
                        Overdue
                      </span>
                    )}
                  </td>

                  {/* Action Cell (Dark Navy Edit/View with White text & Delete with Red text) */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEditPayment(payment)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-white font-bold text-[11px] hover:bg-slate-800 transition-all shadow-sm text-center"
                      >
                        {payment.id === "INV-WZ1004" ? "View" : "Edit"}
                      </button>
                      <button
                        onClick={() => onDeletePayment(payment.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-[#ff3366] font-bold text-[11px] hover:bg-rose-950/40 hover:text-rose-400 transition-all shadow-sm text-center"
                      >
                        Delete
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
  );
}
