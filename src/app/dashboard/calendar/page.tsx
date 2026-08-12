"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { CalendarEventModel } from "@/domain/models";
import {
  CalendarHeaderControls,
  CalendarGrid,
  ScheduleDetailPanel,
} from "@/components/dashboard/calendar";

export default function CalendarPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedEventId, setSelectedEventId] = useState("EVT-1230"); // Default active selected event (Kyle Thompson)
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const calendarService = ServiceContainer.getInstance().getCalendarService();
  const allEvents: CalendarEventModel[] = calendarService.filterEventsByType(selectedFilter);
  const selectedEvent: CalendarEventModel =
    calendarService.getEventById(selectedEventId) || allEvents[0];

  const handleSelectEvent = (event: CalendarEventModel) => {
    setSelectedEventId(event.id);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <CalendarHeaderControls
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {/* Main 2-Column Calendar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Weekly Grid Schedule (8 Cols if Detail Open, 12 Cols if Closed) */}
        <div className={isDetailOpen ? "lg:col-span-8 space-y-6" : "lg:col-span-12 space-y-6"}>
          <CalendarGrid
            events={allEvents}
            selectedEventId={selectedEventId}
            onSelectEvent={handleSelectEvent}
          />
        </div>

        {/* Right Column: Schedule Detail Panel (4 Cols) */}
        {isDetailOpen && selectedEvent && (
          <div className="lg:col-span-4 space-y-6">
            <ScheduleDetailPanel
              event={selectedEvent}
              onClose={() => setIsDetailOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
