export interface BookingSpec {
  id: string;
  bookingDate: string;
  clientName: string;
  carModel: string;
  carTypeBadge: string;
  plateNumber: string;
  planDays: string;
  startDate: string;
  endDate: string;
  driverAssigned: boolean;
  amount: string;
  paymentStatus: "Paid" | "Pending" | "Unpaid";
  bookingStatus: "Returned" | "Ongoing" | "Pending" | "Cancelled";
}

export class BookingModel implements BookingSpec {
  public readonly id: string;
  public readonly bookingDate: string;
  public readonly clientName: string;
  public readonly carModel: string;
  public readonly carTypeBadge: string;
  public readonly plateNumber: string;
  public readonly planDays: string;
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly driverAssigned: boolean;
  public readonly amount: string;
  public readonly paymentStatus: "Paid" | "Pending" | "Unpaid";
  public readonly bookingStatus: "Returned" | "Ongoing" | "Pending" | "Cancelled";

  constructor(data: BookingSpec) {
    this.id = data.id;
    this.bookingDate = data.bookingDate;
    this.clientName = data.clientName;
    this.carModel = data.carModel;
    this.carTypeBadge = data.carTypeBadge;
    this.plateNumber = data.plateNumber;
    this.planDays = data.planDays;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.driverAssigned = data.driverAssigned;
    this.amount = data.amount;
    this.paymentStatus = data.paymentStatus;
    this.bookingStatus = data.bookingStatus;
  }

  public isOngoing(): boolean {
    return this.bookingStatus === "Ongoing";
  }

  public isReturned(): boolean {
    return this.bookingStatus === "Returned";
  }

  public matchesQuery(query: string): boolean {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      this.id.toLowerCase().includes(q) ||
      this.clientName.toLowerCase().includes(q) ||
      this.carModel.toLowerCase().includes(q) ||
      this.carTypeBadge.toLowerCase().includes(q) ||
      this.plateNumber.toLowerCase().includes(q)
    );
  }

  public toJSON(): BookingSpec {
    return {
      id: this.id,
      bookingDate: this.bookingDate,
      clientName: this.clientName,
      carModel: this.carModel,
      carTypeBadge: this.carTypeBadge,
      plateNumber: this.plateNumber,
      planDays: this.planDays,
      startDate: this.startDate,
      endDate: this.endDate,
      driverAssigned: this.driverAssigned,
      amount: this.amount,
      paymentStatus: this.paymentStatus,
      bookingStatus: this.bookingStatus,
    };
  }
}
