"use client";

import React, { use, useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { UnitModel } from "@/domain/models";
import {
  UnitDetailsHeader,
  UnitHeroGallery,
  UnitInfoOverview,
  UnitSpecificationsGrid,
  UnitActivityChart,
  UnitFeaturesList,
  UnitRemindersWidget,
} from "@/components/dashboard/units/details";
import { AddUnitModal } from "@/components/dashboard/units";

interface UnitDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function UnitDetailsPage({ params }: UnitDetailsPageProps) {
  const resolvedParams = use(params);
  const unitId = resolvedParams?.id || "UNT-VF802";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unitService = ServiceContainer.getInstance().getUnitService();
  const unit: UnitModel = unitService.getUnitById(unitId) || unitService.getUnitById("UNT-VF802") || unitService.getAllUnits()[0];

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete ${unit.brand} ${unit.modelName}?`)) {
      alert(`Unit ${unit.id} deleted successfully.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Page Header (Back button & Breadcrumb) */}
      <UnitDetailsHeader />

      {/* Main 2-Column Responsive Layout matching Wheelzie Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Hero Gallery, Overview, Specifications Grid) - 7 Cols */}
        <div className="lg:col-span-7 space-y-6">
          <UnitHeroGallery
            mainImage={unit.image}
            galleryImages={unit.galleryImages}
            modelName={unit.modelName}
          />

          <UnitInfoOverview
            unit={unit}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <UnitSpecificationsGrid unit={unit} />
        </div>

        {/* Right Column (Activity Line Chart, Car Features, Reminders Widget) - 5 Cols */}
        <div className="lg:col-span-5 space-y-6">
          <UnitActivityChart />

          <UnitFeaturesList features={unit.features} />

          <UnitRemindersWidget />
        </div>
      </div>

      {/* Edit Modal Dialog */}
      <AddUnitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert(`VinFast ${unit.modelName} details updated successfully!`);
        }}
      />
    </div>
  );
}
