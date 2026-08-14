"use client";

import React, { useState } from "react";
import { MOCK_TRACKING_VEHICLES } from "@/data";
import {
  TrackingSidebarList,
  TrackingInfoBar,
  TrackingMapCanvas,
} from "@/components/dashboard/tracking";

export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("TRK-003");

  const filteredVehicles = MOCK_TRACKING_VEHICLES.filter(
    (v) =>
      v.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.carModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.carNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedVehicle =
    filteredVehicles.find((v) => v.id === selectedVehicleId) ||
    MOCK_TRACKING_VEHICLES.find((v) => v.id === "TRK-003") ||
    filteredVehicles[0];

  return (
    <div className="space-y-6">
      {/* 2-column grid: left list (4 cols) | right info + map (8 cols) matching Wheelzie mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left — vehicle list */}
        <div className="lg:col-span-4">
          <TrackingSidebarList
            vehicles={filteredVehicles}
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
