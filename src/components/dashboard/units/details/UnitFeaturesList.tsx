"use client";

import React from "react";
import { Check } from "lucide-react";

interface UnitFeaturesListProps {
  features?: string[];
}

export function UnitFeaturesList({ features }: UnitFeaturesListProps) {
  const defaultFeatures = [
    "Air Conditioning",
    "AM/FM Radio with CD Player",
    "Bluetooth Connectivity",
    "USB Charging Ports",
    "Backup Camera",
    "Spacious Trunk",
    "Cruise Control",
    "Advanced Safety Features (e.g., Lane Departure Warning, Automatic Emergency Braking)",
    "Keyless Entry",
    "Power Windows and Locks",
  ];

  const list = features && features.length > 0 ? features : defaultFeatures;

  return (
    <div className="theme-card p-6 rounded-2xl border shadow-sm space-y-4">
      <h3 className="text-lg font-bold theme-text tracking-tight">Car Features</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {list.map((feature, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <div className="w-4 h-4 rounded-full bg-rose-50 text-[#ff3366] dark:bg-rose-950/60 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="theme-text font-medium leading-tight">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
