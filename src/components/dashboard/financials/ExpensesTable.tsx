"use client";

import React, { useState } from "react";
import { ArrowUpDown, ArrowRightLeft, Tag, Calendar, DollarSign, Package } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ExpenseItem } from "@/types";

interface ExpensesTableProps {
  expenses: ExpenseItem[];
  onEditExpense: (expense: ExpenseItem) => void;
  onDeleteExpense: (id: string) => void;
}

export function ExpensesTable({
  expenses,
  onEditExpense,
  onDeleteExpense,
}: ExpensesTableProps) {
  const { t, lang } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const toggleSelectAll = () => {
    if (selectedIds.length === expenses.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(expenses.map((e) => e.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const getCategoryDotColor = (cat: string) => {
    switch (cat) {
      case "Vehicle Maintenance":
        return "bg-[#38bdf8]";
      case "Fuel":
        return "bg-[#00a8ff]";
      case "Insurance":
        return "bg-rose-400";
      case "Office Supplies":
        return "bg-[#ff3366]";
      case "Staff Salaries":
        return "bg-amber-500";
      case "Marketing":
        return "bg-purple-400";
      default:
        return "bg-slate-400";
    }
  };

  if (expenses.length === 0) {
    return (
      <div className="bg-[#1f1f1f] p-12 rounded-2xl border border-[#333333] text-center space-y-2">
        <p className="text-sm font-bold text-white">No expense transactions found</p>
        <p className="text-xs text-slate-400">Try adjusting your search query or status filter.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm overflow-hidden p-4 sm:p-0">
      {/* Mobile Switcher header */}
      <div className="flex items-center justify-between pb-3 sm:hidden border-b border-[#333333]">
        <span className="text-xs font-bold text-white">{t("financials.expensesList")} ({expenses.length})</span>
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
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-[#262626] p-4 rounded-xl border border-[#333333] space-y-3 shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(expense.id)}
                  onChange={() => toggleSelectRow(expense.id)}
                  className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-bold text-white">{expense.id}</span>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  expense.status === "Completed"
                    ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
                    : "bg-amber-950 text-amber-300 border border-amber-800/40"
                }`}
              >
                {expense.status}
              </span>
            </div>

            <div className="space-y-1 pt-1 border-t border-[#333333]">
              <p className="text-xs font-bold text-white leading-snug">{expense.name}</p>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <span className={`w-2 h-2 rounded-full ${getCategoryDotColor(expense.category)}`} />
                  <span>{expense.category}</span>
                </div>
                <span className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Package className="w-3 h-3" /> {t("financials.quantity")}: {expense.quantity}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#333333] text-xs">
              <div>
                <span className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {t("bookings.date")}
                </span>
                <p className="text-slate-300 font-medium">{expense.date}</p>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-[10px] flex items-center justify-end gap-1">
                  <DollarSign className="w-3 h-3" /> {t("financials.amount")}
                </span>
                <p className="font-black text-white text-sm">${expense.amount.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#333333]">
              <button
                onClick={() => onEditExpense(expense)}
                className="px-3 py-1.5 rounded-lg bg-[#333333] text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                {t("common.edit")}
              </button>
              <button
                onClick={() => onDeleteExpense(expense.id)}
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
                    checked={selectedIds.length === expenses.length && expenses.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>Expense ID</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{lang === "vi" ? "Tên khoản chi" : "Item Name"}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("financials.category")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span>{t("financials.quantity")}</span>
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
                    <span>{t("bookings.date")}</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center">{t("common.status")}</th>
                <th className="py-3.5 px-4 text-center">{t("common.action")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a] font-medium text-slate-200">
              {expenses.map((expense) => {
                const isSelected = selectedIds.includes(expense.id);

                return (
                  <tr
                    key={expense.id}
                    className={`hover:bg-[#262626] transition-colors ${
                      isSelected ? "bg-[#262626]/80" : ""
                    }`}
                  >
                    <td className="py-3.5 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectRow(expense.id)}
                        className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                      />
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                      {expense.id}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                      {expense.name}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${getCategoryDotColor(expense.category)}`} />
                        <span>{expense.category}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                      {expense.quantity}
                    </td>
                    <td className="py-3.5 px-4 font-black text-white whitespace-nowrap">
                      ${expense.amount.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                      {expense.date}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {expense.status === "Completed" && (
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                          Completed
                        </span>
                      )}
                      {expense.status === "Pending" && (
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-950 text-amber-300 border border-amber-800/40">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => onEditExpense(expense)}
                          className="px-3 py-1 rounded-lg bg-[#2a2a2a] text-white font-bold text-[11px] hover:bg-slate-700 transition-all shadow-sm cursor-pointer"
                        >
                          {t("common.edit")}
                        </button>
                        <button
                          onClick={() => onDeleteExpense(expense.id)}
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
