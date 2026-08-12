"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { ExpenseModel } from "@/domain/models";
import {
  ExpensesKpiCards,
  CashflowChart,
  ExpenseBreakdownChart,
  ExpensesHeaderControls,
  ExpensesTable,
} from "@/components/dashboard/financials";
import { ClientsPagination } from "@/components/dashboard/clients/ClientsPagination";

export default function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const expenseService = ServiceContainer.getInstance().getExpenseService();
  const allExpenses: ExpenseModel[] = expenseService.searchExpenses(searchQuery, statusFilter);

  const handleEditExpense = (exp: ExpenseModel) => {
    alert(`Editing transaction ${exp.name} (${exp.id})`);
  };

  const handleDeleteExpense = (id: string) => {
    if (confirm(`Are you sure you want to delete transaction ${id}?`)) {
      alert(`Transaction ${id} deleted successfully.`);
    }
  };

  const handleDownload = () => {
    alert("Exporting financial transactions report PDF/CSV...");
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl font-extrabold theme-text tracking-tight">Expenses</h2>

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
        expenses={allExpenses}
        onEditExpense={handleEditExpense}
        onDeleteExpense={handleDeleteExpense}
      />

      {/* Pagination Footer */}
      <ClientsPagination />
    </div>
  );
}
