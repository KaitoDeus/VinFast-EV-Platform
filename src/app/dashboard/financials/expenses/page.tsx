"use client";

import React, { useState } from "react";
import { MOCK_EXPENSES } from "@/data";
import { ExpenseItem } from "@/types";
import {
  ExpensesKpiCards,
  CashflowChart,
  ExpenseBreakdownChart,
  ExpensesHeaderControls,
  ExpensesTable,
} from "@/components/dashboard/financials";
import { ClientsPagination } from "@/components/dashboard/clients/ClientsPagination";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<ExpenseItem[]>(MOCK_EXPENSES);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredExpenses = expenses.filter((e) => {
    const matchesQ =
      !searchQuery ||
      e.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      !statusFilter || statusFilter === "All" || e.status === statusFilter;

    return matchesQ && matchesStatus;
  });

  const handleEditExpense = (exp: ExpenseItem) => {
    alert(`Editing transaction ${exp.name} (${exp.id})`);
  };

  const handleDeleteExpense = (id: string) => {
    if (confirm(`Are you sure you want to delete transaction ${id}?`)) {
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleDownload = () => {
    alert("Exporting financial transactions report PDF/CSV...");
  };

  return (
    <div className="space-y-6">
      {/* Top 3 Summary KPI Cards */}
      <ExpensesKpiCards />

      {/* Middle Section: Cashflow Chart & Expense Breakdown Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8">
          <CashflowChart />
        </div>
        <div className="lg:col-span-4">
          <ExpenseBreakdownChart />
        </div>
      </div>

      {/* Bottom Section: Recent Transactions Header & Filter Bar */}
      <ExpensesHeaderControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onDownloadClick={handleDownload}
      />

      {/* Transactions Data Table */}
      <ExpensesTable
        expenses={filteredExpenses}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
      />

      {/* Pagination Footer */}
      <ClientsPagination />
    </div>
  );
}
