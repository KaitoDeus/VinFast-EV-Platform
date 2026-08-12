"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface AddBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddBookingModal({ isOpen, onClose, onSuccess }: AddBookingModalProps) {
  const [formData, setFormData] = useState({
    clientName: "",
    carModel: "VinFast VF 8",
    carTypeBadge: "SUV",
    startDate: "2028-08-15",
    endDate: "2028-08-20",
    driverAssigned: true,
    amount: "$450",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="theme-card border border-slate-200 dark:border-slate-800 w-full max-w-[500px] rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <h3 className="text-xl font-bold theme-text tracking-tight">Add New Booking</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:text-slate-400 dark:hover:text-rose-400 dark:hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold theme-text block mb-1">Client Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Alice Johnson"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Car Model</label>
              <select
                value={formData.carModel}
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              >
                <option value="VinFast VF 8">VinFast VF 8</option>
                <option value="VinFast VF 9">VinFast VF 9</option>
                <option value="VinFast VF 7">VinFast VF 7</option>
                <option value="VinFast VF 6">VinFast VF 6</option>
                <option value="VinFast VF 5">VinFast VF 5</option>
                <option value="VinFast Klara S">VinFast Klara S</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Car Category</label>
              <select
                value={formData.carTypeBadge}
                onChange={(e) => setFormData({ ...formData, carTypeBadge: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              >
                <option value="SUV">SUV</option>
                <option value="Crossover">Crossover</option>
                <option value="Compact">Compact</option>
                <option value="E-Scooter">E-Scooter</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Start Date</label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold theme-text block mb-1">End Date</label>
              <input
                type="date"
                required
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Total Amount ($)</label>
              <input
                type="text"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>

            <div className="flex items-center pt-5">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold theme-text">
                <input
                  type="checkbox"
                  checked={formData.driverAssigned}
                  onChange={(e) => setFormData({ ...formData, driverAssigned: e.target.checked })}
                  className="w-4 h-4 text-[#00a8ff] rounded border-slate-300 focus:ring-[#00a8ff]"
                />
                <span>Assign Driver</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 bg-[#ff3366] hover:bg-[#e02654] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>Create Booking</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
