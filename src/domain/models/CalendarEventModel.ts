export interface CalendarEventSpec {
  id: string;
  type: "Pickup" | "Return";
  timeSlot: string; // e.g. "8:00 AM"
  dayIndex: number; // 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat
  dateStr: string; // e.g. "Thu, 17 Aug 2028"
  carModel: string;
  carImage: string;
  carType: string;
  carNumber: string;
  clientName: string;
  clientAvatar?: string;
  driverName?: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

export class CalendarEventModel implements CalendarEventSpec {
  public readonly id: string;
  public readonly type: "Pickup" | "Return";
  public readonly timeSlot: string;
  public readonly dayIndex: number;
  public readonly dateStr: string;
  public readonly carModel: string;
  public readonly carImage: string;
  public readonly carType: string;
  public readonly carNumber: string;
  public readonly clientName: string;
  public readonly clientAvatar: string;
  public readonly driverName: string;
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly notes: string;

  constructor(data: CalendarEventSpec) {
    this.id = data.id;
    this.type = data.type;
    this.timeSlot = data.timeSlot;
    this.dayIndex = data.dayIndex;
    this.dateStr = data.dateStr;
    this.carModel = data.carModel;
    this.carImage = data.carImage;
    this.carType = data.carType;
    this.carNumber = data.carNumber;
    this.clientName = data.clientName;
    this.clientAvatar = data.clientAvatar || "/team/avatar-1.png";
    this.driverName = data.driverName || "None";
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.notes = data.notes || "Client requested a child safety seat.";
  }
}
