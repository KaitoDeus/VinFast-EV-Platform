"use client";

import React, { useState } from "react";
import { X, UserPlus } from "lucide-react";
import { ClientModel } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  clientToEdit?: ClientModel | null;
}

export function AddClientModal({
  isOpen,
  onClose,
  onSuccess,
  clientToEdit,
}: AddClientModalProps) {
  const { theme } = useTheme();
  const [name, setName] = useState(clientToEdit ? clientToEdit.name : "");
  const [email, setEmail] = useState(clientToEdit ? clientToEdit.email : "");
  const [phone, setPhone] = useState(clientToEdit ? clientToEdit.phone : "");
  const [address, setAddress] = useState(clientToEdit ? clientToEdit.address : "");
  const [points, setPoints] = useState(clientToEdit ? String(clientToEdit.points) : "100");

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
              <UserPlus className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-extrabold theme-text tracking-tight">
              {clientToEdit ? "Edit Client Info" : "Add New Client"}
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
            <label className="font-bold theme-text">Client Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Alice Johnson"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold theme-text">Email Address</label>
            <input
              type="email"
              required
              placeholder="e.g. alice.johnson@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold theme-text">Phone Number</label>
              <input
                type="text"
                required
                placeholder="123-456-7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
            <div className="space-y-1">
              <label className="font-bold theme-text">Reward Points</label>
              <input
                type="number"
                required
                placeholder="100"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold theme-text">Street Address</label>
            <input
              type="text"
              required
              placeholder="123 Maple Street"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff]"
            />
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
              {clientToEdit ? "Save Changes" : "Create Client"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
