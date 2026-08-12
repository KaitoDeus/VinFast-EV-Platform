"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface AddUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddUnitModal({ isOpen, onClose, onSuccess }: AddUnitModalProps) {
  const [formData, setFormData] = useState({
    modelName: "VinFast VF 8",
    carType: "SUV",
    status: "Available",
    unitsCount: 5,
    transmission: "Automatic",
    capacity: "5 seats",
    dailyPrice: "$120",
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
          <h3 className="text-xl font-bold theme-text tracking-tight">Add New Fleet Unit</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:text-slate-400 dark:hover:text-rose-400 dark:hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Model Name</label>
              <select
                value={formData.modelName}
                onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              >
                <option value="VinFast VF 9">VinFast VF 9</option>
                <option value="VinFast VF 8">VinFast VF 8</option>
                <option value="VinFast VF 7">VinFast VF 7</option>
                <option value="VinFast VF 6">VinFast VF 6</option>
                <option value="VinFast VF 5">VinFast VF 5</option>
                <option value="VinFast VF e34">VinFast VF e34</option>
                <option value="VinFast Klara S">VinFast Klara S</option>
                <option value="VinFast Feliz S">VinFast Feliz S</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Car Category</label>
              <select
                value={formData.carType}
                onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
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
              <label className="text-xs font-semibold theme-text block mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              >
                <option value="Available">Available</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Units Available</label>
              <input
                type="number"
                min="0"
                value={formData.unitsCount}
                onChange={(e) => setFormData({ ...formData, unitsCount: Number(e.target.value) })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Transmission</label>
              <input
                type="text"
                value={formData.transmission}
                onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold theme-text block mb-1">Daily Price ($/day)</label>
              <input
                type="text"
                value={formData.dailyPrice}
                onChange={(e) => setFormData({ ...formData, dailyPrice: e.target.value })}
                className="w-full contact-input px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
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
              <span>Save Unit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
