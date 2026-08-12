"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { DriverModel } from "@/domain/models";
import {
  DriversHeaderControls,
  DriversTable,
  DriversPagination,
  DriverDetailsPanel,
  AddDriverModal,
} from "@/components/dashboard/drivers";

export default function DriversPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedDriverId, setSelectedDriverId] = useState("DRV-009"); // Default to Daniel Jackson matching Wheelzie mockup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [driverToEdit, setDriverToEdit] = useState<DriverModel | null>(null);

  const driverService = ServiceContainer.getInstance().getDriverService();
  const allDrivers: DriverModel[] = driverService.searchDrivers(searchQuery, statusFilter);

  // Selected driver object or fallback to first
  const selectedDriver =
    allDrivers.find((d) => d.id === selectedDriverId) ||
    driverService.getDriverById("DRV-009") ||
    allDrivers[0];

  const handleOpenAddModal = () => {
    setDriverToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (driver: DriverModel) => {
    setDriverToEdit(driver);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl font-extrabold theme-text tracking-tight">Drivers</h2>

      {/* Main 2-Column Grid Layout matching Wheelzie mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Main Table Column (7 to 8 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-5">
          {/* Search, Filter & Add Driver Controls */}
          <DriversHeaderControls
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            onAddDriverClick={handleOpenAddModal}
          />

          {/* Drivers List Table */}
          <DriversTable
            drivers={allDrivers}
            selectedDriverId={selectedDriver?.id || "DRV-009"}
            onSelectDriver={(driver) => setSelectedDriverId(driver.id)}
          />

          {/* Pagination Footer */}
          <DriversPagination />
        </div>

        {/* Right Selected Driver Detail & Mini Calendar Column (4 to 5 cols) */}
        <div className="lg:col-span-5 xl:col-span-4">
          {selectedDriver && (
            <DriverDetailsPanel
              driver={selectedDriver}
              onEditClick={handleOpenEditModal}
            />
          )}
        </div>
      </div>

      {/* Add / Edit Driver Modal */}
      <AddDriverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert(`Driver info saved successfully!`);
        }}
        driverToEdit={driverToEdit}
      />
    </div>
  );
}
