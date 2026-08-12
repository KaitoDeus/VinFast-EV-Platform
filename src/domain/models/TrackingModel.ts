export type TrackingStatus = "On Trip" | "Returned";

export interface TrackingSpec {
  id: string;
  clientName: string;
  clientAvatar: string;
  carModel: string;
  carImage: string;
  carType: string;
  carNumber: string;
  driverName: string;
  startDate: string;
  endDate: string;
  tripTime: string;
  totalDistance: string;
  status: TrackingStatus;
}

export class TrackingModel implements TrackingSpec {
  public readonly id: string;
  public readonly clientName: string;
  public readonly clientAvatar: string;
  public readonly carModel: string;
  public readonly carImage: string;
  public readonly carType: string;
  public readonly carNumber: string;
  public readonly driverName: string;
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly tripTime: string;
  public readonly totalDistance: string;
  public readonly status: TrackingStatus;

  constructor(data: TrackingSpec) {
    this.id = data.id;
    this.clientName = data.clientName;
    this.clientAvatar = data.clientAvatar || "/team/avatar-1.png";
    this.carModel = data.carModel;
    this.carImage = data.carImage || "/section/sec1.png";
    this.carType = data.carType || "SUV";
    this.carNumber = data.carNumber || "CB2345";
    this.driverName = data.driverName || "-";
    this.startDate = data.startDate || "Wed, 2 Aug 2028";
    this.endDate = data.endDate || "Thu, 3 Aug 2028";
    this.tripTime = data.tripTime || "12 hours 39 minutes";
    this.totalDistance = data.totalDistance || "180 miles";
    this.status = data.status;
  }

  public matchesQuery(query: string): boolean {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      this.clientName.toLowerCase().includes(q) ||
      this.carModel.toLowerCase().includes(q) ||
      this.carNumber.toLowerCase().includes(q)
    );
  }
}
