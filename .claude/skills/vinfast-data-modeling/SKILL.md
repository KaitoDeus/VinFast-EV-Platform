---
name: vinfast-data-modeling
description: >-
  Guide for defining TypeScript interfaces in src/types/ and mock data collections
  in src/data/ for the VinFast EV Platform.
---

# VinFast Data Modeling Skill

This skill explains how to add new data entities, types, and mock datasets following the lean Next.js App Router pattern.

---

## 📂 Step 1: Define Interface in `src/types/dashboard.ts`

Always create strict, clean TypeScript interfaces without class methods:

```typescript
export interface TelemetryReportItem {
  id: string;
  vehicleId: string;
  batteryHealthPercent: number;
  currentSpeedKmH: number;
  temperatureCelsius: number;
  lastUpdated: string;
  alertStatus: "Normal" | "Warning" | "Critical";
}
```

Re-export the type in `src/types/index.ts`.

---

## 📂 Step 2: Add Mock Data in `src/data/mockDashboardData.ts`

Add typed mock records for UI testing:

```typescript
import { TelemetryReportItem } from "@/types";

export const MOCK_TELEMETRY_REPORTS: TelemetryReportItem[] = [
  {
    id: "TEL-001",
    vehicleId: "VF-EV-2026",
    batteryHealthPercent: 98,
    currentSpeedKmH: 45,
    temperatureCelsius: 28,
    lastUpdated: "Just now",
    alertStatus: "Normal",
  },
];
```

Re-export in `src/data/index.ts`.

---

## 📂 Step 3: Consume Directly in Components / Pages

```tsx
import { MOCK_TELEMETRY_REPORTS } from "@/data";
import { TelemetryReportItem } from "@/types";
```
