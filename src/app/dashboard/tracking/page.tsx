"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { TrackingModel } from "@/domain/models";
import {
  TrackingSidebarList,
  TrackingInfoBar,
  TrackingMapCanvas,
} from "@/components/dashboard/tracking";

export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("TRK-003");

  const trackingService = ServiceContainer.getInstance().getTrackingService();
  const allVehicles: TrackingModel[] = trackingService.searchTrackedVehicles(searchQuery);

  const selectedVehicle =
    allVehicles.find((v) => v.id === selectedVehicleId) ||
    trackingService.getTrackedVehicleById("TRK-003") ||
    allVehicles[0];

  return (
    <div className="space-y-6">
      {/* 2-column grid: left list (4 cols) | right info + map (8 cols) matching Wheelzie mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left — vehicle list */}
        <div className="lg:col-span-4">
          <TrackingSidebarList
            vehicles={allVehicles}
            selectedVehicleId={selectedVehicle?.id || "TRK-003"}
            onSelectVehicle={(v) => setSelectedVehicleId(v.id)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onAddCarClick={() => alert("Opening Add Vehicle to Tracking modal...")}
          />
        </div>

        {/* Right — info bar + map */}
        <div className="lg:col-span-8 space-y-5">
          {selectedVehicle && <TrackingInfoBar vehicle={selectedVehicle} />}
          <TrackingMapCanvas />
        </div>
      </div>
    </div>
  );
}
