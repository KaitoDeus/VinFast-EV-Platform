export type PaymentStatus = "Completed" | "Awaiting" | "Overdue";

export interface PaymentSpec {
  id: string; // e.g. "INV-WZ1001"
  clientName: string;
  carModel: string;
  ratePerDay: number;
  rentalPeriodDays: number;
  amount: number;
  dueDate: string; // e.g. "2024-08-05"
  status: PaymentStatus;
  selected?: boolean;
}

export class PaymentModel implements PaymentSpec {
  public readonly id: string;
  public readonly clientName: string;
  public readonly carModel: string;
  public readonly ratePerDay: number;
  public readonly rentalPeriodDays: number;
  public readonly amount: number;
  public readonly dueDate: string;
  public readonly status: PaymentStatus;
  public readonly selected: boolean;

  constructor(data: PaymentSpec) {
    this.id = data.id;
    this.clientName = data.clientName;
    this.carModel = data.carModel;
    this.ratePerDay = data.ratePerDay;
    this.rentalPeriodDays = data.rentalPeriodDays;
    this.amount = data.amount || data.ratePerDay * data.rentalPeriodDays;
    this.dueDate = data.dueDate;
    this.status = data.status;
    this.selected = data.selected || false;
  }

  public matchesQuery(query: string, statusFilter: string): boolean {
    const q = query.toLowerCase();
    const matchesQ =
      !query ||
      this.id.toLowerCase().includes(q) ||
      this.clientName.toLowerCase().includes(q) ||
      this.carModel.toLowerCase().includes(q);

    const matchesStatus =
      !statusFilter || statusFilter === "All" || this.status === statusFilter;

    return matchesQ && matchesStatus;
  }
}
