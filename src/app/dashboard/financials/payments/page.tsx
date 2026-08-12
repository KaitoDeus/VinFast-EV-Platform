"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { PaymentModel } from "@/domain/models";
import {
  PaymentsKpiCards,
  PaymentsHeaderControls,
  PaymentsTable,
  CreateInvoiceModal,
} from "@/components/dashboard/financials";
import { ClientsPagination } from "@/components/dashboard/clients/ClientsPagination";

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentToEdit, setPaymentToEdit] = useState<PaymentModel | null>(null);

  const paymentService = ServiceContainer.getInstance().getPaymentService();
  const allPayments: PaymentModel[] = paymentService.searchPayments(searchQuery, statusFilter);

  const handleOpenCreateModal = () => {
    setPaymentToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (payment: PaymentModel) => {
    setPaymentToEdit(payment);
    setIsModalOpen(true);
  };

  const handleDeletePayment = (id: string) => {
    if (confirm(`Are you sure you want to delete invoice ${id}?`)) {
      alert(`Invoice ${id} deleted successfully.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl font-extrabold theme-text tracking-tight">Payments</h2>

      {/* Top 3 Financial Summary Cards */}
      <PaymentsKpiCards />

      {/* Header Search & Filter Bar */}
      <PaymentsHeaderControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onCreateInvoiceClick={handleOpenCreateModal}
      />

      {/* Payments Invoices Table */}
      <PaymentsTable
        payments={allPayments}
        onEditPayment={handleOpenEditModal}
        onDeletePayment={handleDeletePayment}
      />

      {/* Pagination Footer */}
      <ClientsPagination />

      {/* Create / Edit Invoice Modal */}
      <CreateInvoiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert("Invoice saved successfully!");
        }}
        paymentToEdit={paymentToEdit}
      />
    </div>
  );
}
