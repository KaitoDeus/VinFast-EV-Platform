"use client";

import React, { useState } from "react";
import { X, FilePlus } from "lucide-react";
import { PaymentModel, PaymentStatus } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

interface CreateInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  paymentToEdit?: PaymentModel | null;
}

export function CreateInvoiceModal({
  isOpen,
  onClose,
  onSuccess,
  paymentToEdit,
}: CreateInvoiceModalProps) {
  const { theme } = useTheme();
  const [clientName, setClientName] = useState(paymentToEdit ? paymentToEdit.clientName : "");
  const [carModel, setCarModel] = useState(paymentToEdit ? paymentToEdit.carModel : "VinFast VF 8");
  const [ratePerDay, setRatePerDay] = useState(paymentToEdit ? String(paymentToEdit.ratePerDay) : "60");
  const [rentalPeriodDays, setRentalPeriodDays] = useState(paymentToEdit ? String(paymentToEdit.rentalPeriodDays) : "3");
  const [dueDate, setDueDate] = useState(paymentToEdit ? paymentToEdit.dueDate : "2024-08-20");
  const [status, setStatus] = useState<PaymentStatus>(paymentToEdit ? paymentToEdit.status : "Awaiting");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="theme-card w-full max-w-md rounded-2xl border shadow-2xl overflow-hidden p-6 space-y-5 relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                color: theme === "dark" ? "#38bdf8" : "#00a8ff",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
            >
              <FilePlus className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-extrabold theme-text tracking-tight">
              {paymentToEdit ? "Edit Payment Invoice" : "Create New Invoice"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:text-slate-400 dark:hover:text-rose-400 dark:hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-bold theme-text">Client Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Alice Johnson"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold theme-text">Car Model</label>
            <select
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            >
              <option value="VinFast VF 8">VinFast VF 8</option>
              <option value="VinFast VF 9">VinFast VF 9</option>
              <option value="VinFast VF 7">VinFast VF 7</option>
              <option value="VinFast VF 6">VinFast VF 6</option>
              <option value="Toyota Corolla">Toyota Corolla</option>
              <option value="Honda Civic">Honda Civic</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold theme-text">Rate per Day ($)</label>
              <input
                type="number"
                required
                placeholder="60"
                value={ratePerDay}
                onChange={(e) => setRatePerDay(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold theme-text">Rental Period (Days)</label>
              <input
                type="number"
                required
                placeholder="3"
                value={rentalPeriodDays}
                onChange={(e) => setRentalPeriodDays(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold theme-text">Due Date</label>
              <input
                type="date"
                required
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold theme-text">Payment Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as PaymentStatus)}
                className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              >
                <option value="Completed">Completed</option>
                <option value="Awaiting">Awaiting</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold shadow-md transition-all active:scale-95"
            >
              {paymentToEdit ? "Save Invoice" : "Create Invoice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
