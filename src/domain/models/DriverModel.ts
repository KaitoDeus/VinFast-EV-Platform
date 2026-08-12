export type DriverStatus = "On Duty" | "Sick Leave" | "Half-Day Leave";

export interface DriverScheduleItem {
  id: string;
  dayLabel: string; // e.g. "Tue, 1 Aug"
  clientName: string;
  timeSlot: string; // e.g. "10:00 AM"
  carModel: string; // e.g. "VinFast VF 8"
}

export interface DriverSpec {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: DriverStatus;
  address?: string;
  workHours?: number;
  rating?: number;
  performanceBadge?: string;
  avatar?: string;
  scheduleItems?: DriverScheduleItem[];
}

export class DriverModel implements DriverSpec {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly phone: string;
  public readonly status: DriverStatus;
  public readonly address: string;
  public readonly workHours: number;
  public readonly rating: number;
  public readonly performanceBadge: string;
  public readonly avatar: string;
  public readonly scheduleItems: DriverScheduleItem[];

  constructor(data: DriverSpec) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.status = data.status;
    this.address = data.address || "123 Elm Street";
    this.workHours = data.workHours || 248;
    this.rating = data.rating || 4.5;
    this.performanceBadge = data.performanceBadge || "Excellent";
    this.avatar = data.avatar || "/team/avatar-1.png";
    this.scheduleItems = data.scheduleItems || [
      {
        id: "SCH-1",
        dayLabel: "Tue, 1 Aug",
        clientName: "Alice Johnson",
        timeSlot: "10:00 AM",
        carModel: "VinFast VF 8",
      },
      {
        id: "SCH-2",
        dayLabel: "Thu, 3 Aug",
        clientName: "Bob Smith",
        timeSlot: "11:00 AM",
        carModel: "VinFast VF 6",
      },
      {
        id: "SCH-3",
        dayLabel: "Mon, 7 Aug",
        clientName: "Charlie Davis",
        timeSlot: "2:00 PM",
        carModel: "VinFast VF 7",
      },
      {
        id: "SCH-4",
        dayLabel: "Thu, 10 Aug",
        clientName: "Diana White",
        timeSlot: "1:00 PM",
        carModel: "VinFast VF 9",
      },
    ];
  }

  public matchesQuery(query: string, statusFilter: string): boolean {
    const q = query.toLowerCase();
    const matchesQ =
      !query ||
      this.id.toLowerCase().includes(q) ||
      this.name.toLowerCase().includes(q) ||
      this.email.toLowerCase().includes(q) ||
      this.phone.toLowerCase().includes(q);

    const matchesStatus =
      !statusFilter || statusFilter === "All" || this.status === statusFilter;

    return matchesQ && matchesStatus;
  }
}
