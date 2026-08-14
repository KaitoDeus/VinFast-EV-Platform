"use client";

import React, { useState } from "react";
import { MOCK_PAYMENTS } from "@/data";
import { PaymentItem } from "@/types";
import {
  PaymentsKpiCards,
  PaymentsHeaderControls,
  PaymentsTable,
  CreateInvoiceModal,
} from "@/components/dashboard/financials";
import { ClientsPagination } from "@/components/dashboard/clients/ClientsPagination";

export default function PaymentsPage() {
  const [payments, setPayments] = useState<PaymentItem[]>(MOCK_PAYMENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentToEdit, setPaymentToEdit] = useState<PaymentItem | null>(null);

  const filteredPayments = payments.filter((p) => {
    const matchesQ =
      !searchQuery ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.carModel.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      !statusFilter || statusFilter === "All" || p.status === statusFilter;

    return matchesQ && matchesStatus;
  });

  const handleOpenCreateModal = () => {
    setPaymentToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (payment: PaymentItem) => {
    setPaymentToEdit(payment);
    setIsModalOpen(true);
  };

  const handleDeletePayment = (id: string) => {
    if (confirm(`Are you sure you want to delete invoice ${id}?`)) {
      setPayments((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
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
        payments={filteredPayments}
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
        paymentToEdit={paymentToEdit as any}
      />
    </div>
  );
}
