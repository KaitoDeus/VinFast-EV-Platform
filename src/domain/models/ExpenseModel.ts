export type ExpenseCategory =
  | "Vehicle Maintenance"
  | "Staff Salaries"
  | "Fuel"
  | "Insurance"
  | "Office Supplies"
  | "Marketing";

export type ExpenseStatus = "Completed" | "Pending";

export interface ExpenseSpec {
  id: string;
  name: string;
  category: ExpenseCategory;
  quantity: number;
  amount: number;
  date: string;
  status: ExpenseStatus;
}

export class ExpenseModel implements ExpenseSpec {
  public readonly id: string;
  public readonly name: string;
  public readonly category: ExpenseCategory;
  public readonly quantity: number;
  public readonly amount: number;
  public readonly date: string;
  public readonly status: ExpenseStatus;

  constructor(data: ExpenseSpec) {
    this.id = data.id;
    this.name = data.name;
    this.category = data.category;
    this.quantity = data.quantity;
    this.amount = data.amount;
    this.date = data.date;
    this.status = data.status;
  }

  public matchesQuery(query: string, statusFilter: string): boolean {
    const q = query.toLowerCase();
    const matchesQ =
      !query ||
      this.id.toLowerCase().includes(q) ||
      this.name.toLowerCase().includes(q) ||
      this.category.toLowerCase().includes(q);

    const matchesStatus =
      !statusFilter || statusFilter === "All" || this.status === statusFilter;

    return matchesQ && matchesStatus;
  }
}
