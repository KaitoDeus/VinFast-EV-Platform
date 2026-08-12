"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ServiceContainer } from "@/infrastructure/di";
import { UnitModel } from "@/domain/models";
import {
  UnitsHeaderControls,
  UnitsListView,
  UnitsGridView,
  UnitsPagination,
  AddUnitModal,
} from "@/components/dashboard/units";

export default function UnitsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unitService = ServiceContainer.getInstance().getUnitService();
  const allUnits: UnitModel[] = unitService.filterUnits(selectedType, selectedStatus);

  const filteredUnits = allUnits.filter((unit) => unit.matchesQuery(searchQuery));

  const handleSelectUnit = (unit: UnitModel) => {
    router.push(`/dashboard/units/${unit.id}`);
  };

  const handleEditUnit = (unit: UnitModel) => {
    router.push(`/dashboard/units/${unit.id}`);
  };

  const handleDeleteUnit = (id: string) => {
    if (confirm(`Are you sure you want to delete unit ${id}?`)) {
      alert(`Unit ${id} removed from fleet.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header Control Bar */}
      <UnitsHeaderControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onAddUnitClick={() => setIsModalOpen(true)}
      />

      {/* Main Units View (List vs Grid) */}
      {viewMode === "list" ? (
        <UnitsListView
          units={filteredUnits}
          onSelectUnit={handleSelectUnit}
          onEditUnit={handleEditUnit}
          onDeleteUnit={handleDeleteUnit}
        />
      ) : (
        <UnitsGridView
          units={filteredUnits}
          onSelectUnit={handleSelectUnit}
          onEditUnit={handleEditUnit}
          onDeleteUnit={handleDeleteUnit}
        />
      )}

      {/* Pagination Footer */}
      <UnitsPagination />

      {/* Add Unit Modal */}
      <AddUnitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert("VinFast EV unit saved successfully!");
        }}
      />
    </div>
  );
}
