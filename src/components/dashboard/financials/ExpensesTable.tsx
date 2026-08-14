"use client";

import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { ExpenseItem } from "@/types";
import { useTheme } from "@/components/theme-provider";

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
  const { theme } = useTheme();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

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
        return "bg-[#0f172a] dark:bg-slate-200";
      case "Fuel":
        return "bg-[#00a8ff]";
      case "Insurance":
        return "bg-rose-400";
      case "Office Supplies":
        return "bg-[#ff3366]";
      case "Staff Salaries":
        return "bg-amber-500";
      case "Marketing":
        return "bg-rose-400";
      default:
        return "bg-slate-400";
    }
  };

  if (expenses.length === 0) {
    return (
      <div className="theme-card p-12 rounded-2xl border text-center space-y-2">
        <p className="text-sm font-bold theme-text">No expense transactions found</p>
        <p className="text-xs theme-muted">Try adjusting your search query or status filter.</p>
      </div>
    );
  }

  return (
    <div className="theme-card rounded-2xl border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
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
                  checked={selectedIds.length === expenses.length && expenses.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-slate-300 text-[#00a8ff] focus:ring-[#00a8ff] cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Expenses</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Category</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Quantity</span>
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
                  <span>Date</span>
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
            {expenses.map((exp) => {
              const isChecked = selectedIds.includes(exp.id);

              return (
                <tr
                  key={exp.id}
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
                      onChange={() => toggleSelectRow(exp.id)}
                      className="w-4 h-4 rounded border-slate-300 text-[#00a8ff] focus:ring-[#00a8ff] cursor-pointer"
                    />
                  </td>

                  {/* Expense Name Cell */}
                  <td className="py-3.5 px-4 theme-text font-black text-xs whitespace-nowrap">
                    {exp.name}
                  </td>

                  {/* Category Pill Cell */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 inline-flex items-center gap-2 shadow-2xs">
                      <span className={`w-2 h-2 rounded-sm ${getCategoryDotColor(exp.category)}`} />
                      <span>{exp.category}</span>
                    </span>
                  </td>

                  {/* Quantity Cell */}
                  <td className="py-3.5 px-4 theme-text font-bold whitespace-nowrap">
                    {exp.quantity}
                  </td>

                  {/* Amount Cell */}
                  <td className="py-3.5 px-4 theme-text font-black text-xs whitespace-nowrap">
                    ${exp.amount}
                  </td>

                  {/* Date Cell */}
                  <td className="py-3.5 px-4 theme-text font-semibold whitespace-nowrap text-slate-600 dark:text-slate-300">
                    {exp.date}
                  </td>

                  {/* Status Cell */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {exp.status === "Completed" && (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-[#edf7fc] text-[#00a8ff] border border-sky-200 dark:bg-sky-950/60 dark:text-sky-400 shadow-2xs">
                        Completed
                      </span>
                    )}
                    {exp.status === "Pending" && (
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-500 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-400 shadow-2xs">
                        Pending
                      </span>
                    )}
                  </td>

                  {/* Action Cell (Dark Navy Edit with White text & Delete with Red text) */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEditExpense(exp)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-white font-bold text-[11px] hover:bg-slate-800 transition-all shadow-sm text-center"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDeleteExpense(exp.id)}
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
