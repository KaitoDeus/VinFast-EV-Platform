import { ExpenseModel, ExpenseSpec } from "../../models";
import { IExpenseRepository } from "../IExpenseRepository";

const RAW_EXPENSES: ExpenseSpec[] = [
  {
    id: "EXP-001",
    name: "Oil Change",
    category: "Vehicle Maintenance",
    quantity: 1,
    amount: 100,
    date: "2024-08-01",
    status: "Completed",
  },
  {
    id: "EXP-002",
    name: "Fuel Purchase",
    category: "Fuel",
    quantity: 50,
    amount: 2000,
    date: "2024-08-03",
    status: "Pending",
  },
  {
    id: "EXP-003",
    name: "Insurance Payment",
    category: "Insurance",
    quantity: 1,
    amount: 1500,
    date: "2024-08-05",
    status: "Completed",
  },
  {
    id: "EXP-004",
    name: "Office Supplies Purchase",
    category: "Office Supplies",
    quantity: 20,
    amount: 200,
    date: "2024-08-06",
    status: "Completed",
  },
  {
    id: "EXP-005",
    name: "Marketing Campaign",
    category: "Marketing",
    quantity: 1,
    amount: 500,
    date: "2024-08-07",
    status: "Completed",
  },
  {
    id: "EXP-006",
    name: "Tire Replacement",
    category: "Vehicle Maintenance",
    quantity: 4,
    amount: 400,
    date: "2024-08-09",
    status: "Pending",
  },
  {
    id: "EXP-007",
    name: "Fuel Purchase",
    category: "Fuel",
    quantity: 60,
    amount: 2400,
    date: "2024-08-11",
    status: "Completed",
  },
  {
    id: "EXP-008",
    name: "Staff Salary",
    category: "Staff Salaries",
    quantity: 5,
    amount: 2500,
    date: "2024-08-13",
    status: "Pending",
  },
  {
    id: "EXP-009",
    name: "Software Subscription",
    category: "Office Supplies",
    quantity: 1,
    amount: 300,
    date: "2024-08-14",
    status: "Completed",
  },
  {
    id: "EXP-010",
    name: "Vehicle Maintenance",
    category: "Vehicle Maintenance",
    quantity: 3,
    amount: 1000,
    date: "2024-08-15",
    status: "Completed",
  },
];

export class InMemoryExpenseRepository implements IExpenseRepository {
  private readonly expenses: ExpenseModel[];

  constructor() {
    this.expenses = RAW_EXPENSES.map((e) => new ExpenseModel(e));
  }

  public findAll(): ExpenseModel[] {
    return [...this.expenses];
  }

  public findById(id: string): ExpenseModel | undefined {
    return this.expenses.find((e) => e.id === id);
  }

  public search(query: string, statusFilter: string = ""): ExpenseModel[] {
    return this.expenses.filter((e) => e.matchesQuery(query, statusFilter));
  }
}
