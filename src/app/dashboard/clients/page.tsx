"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { ClientModel } from "@/domain/models";
import {
  ClientsHeaderControls,
  ClientsTable,
  ClientsPagination,
  AddClientModal,
} from "@/components/dashboard/clients";

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientToEdit, setClientToEdit] = useState<ClientModel | null>(null);

  const clientService = ServiceContainer.getInstance().getClientService();
  const allClients: ClientModel[] = clientService.searchClients(searchQuery);

  const handleOpenAddModal = () => {
    setClientToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (client: ClientModel) => {
    setClientToEdit(client);
    setIsModalOpen(true);
  };

  const handleDeleteClient = (id: string) => {
    if (confirm(`Are you sure you want to delete client ${id}?`)) {
      alert(`Client ${id} removed successfully.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl font-extrabold theme-text tracking-tight">Clients</h2>

      {/* Top Search & Add Client Controls */}
      <ClientsHeaderControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddClientClick={handleOpenAddModal}
      />

      {/* Main Clients Table */}
      <ClientsTable
        clients={allClients}
        onEditClient={handleOpenEditModal}
        onDeleteClient={handleDeleteClient}
      />

      {/* Pagination Footer */}
      <ClientsPagination />

      {/* Add / Edit Client Modal */}
      <AddClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert(`Client info saved successfully!`);
        }}
        clientToEdit={clientToEdit}
      />
    </div>
  );
}
