import { PaymentModel, PaymentSpec } from "../../models";
import { IPaymentRepository } from "../IPaymentRepository";

const RAW_PAYMENTS: PaymentSpec[] = [
  {
    id: "INV-WZ1001",
    clientName: "Alice Johnson",
    carModel: "Toyota Corolla",
    ratePerDay: 50,
    rentalPeriodDays: 3,
    amount: 150,
    dueDate: "2024-08-05",
    status: "Completed",
  },
  {
    id: "INV-WZ1002",
    clientName: "Bob Smith",
    carModel: "Honda Civic",
    ratePerDay: 45,
    rentalPeriodDays: 5,
    amount: 225,
    dueDate: "2024-08-06",
    status: "Awaiting",
  },
  {
    id: "INV-WZ1003",
    clientName: "Charlie Davis",
    carModel: "Ford Focus",
    ratePerDay: 55,
    rentalPeriodDays: 2,
    amount: 110,
    dueDate: "2024-08-07",
    status: "Overdue",
  },
  {
    id: "INV-WZ1004",
    clientName: "Diana White",
    carModel: "Chevrolet Malibu",
    ratePerDay: 60,
    rentalPeriodDays: 1,
    amount: 60,
    dueDate: "2024-08-08",
    status: "Completed",
    selected: true,
  },
  {
    id: "INV-WZ1005",
    clientName: "Edward Green",
    carModel: "Nissan Altima",
    ratePerDay: 50,
    rentalPeriodDays: 4,
    amount: 200,
    dueDate: "2024-08-09",
    status: "Awaiting",
  },
  {
    id: "INV-WZ1006",
    clientName: "Fiona Brown",
    carModel: "BMW X5",
    ratePerDay: 120,
    rentalPeriodDays: 3,
    amount: 360,
    dueDate: "2024-08-10",
    status: "Overdue",
  },
  {
    id: "INV-WZ1007",
    clientName: "George Clark",
    carModel: "Audi Q7",
    ratePerDay: 130,
    rentalPeriodDays: 2,
    amount: 260,
    dueDate: "2024-08-11",
    status: "Completed",
  },
  {
    id: "INV-WZ1008",
    clientName: "Helen Martinez",
    carModel: "Mazda 3",
    ratePerDay: 40,
    rentalPeriodDays: 6,
    amount: 240,
    dueDate: "2024-08-12",
    status: "Awaiting",
  },
  {
    id: "INV-WZ1009",
    clientName: "Ivan Rodriguez",
    carModel: "Hyundai Elantra",
    ratePerDay: 45,
    rentalPeriodDays: 3,
    amount: 135,
    dueDate: "2024-08-13",
    status: "Overdue",
  },
  {
    id: "INV-WZ1010",
    clientName: "Jane Wilson",
    carModel: "Mercedes C-Class",
    ratePerDay: 100,
    rentalPeriodDays: 1,
    amount: 100,
    dueDate: "2024-08-14",
    status: "Completed",
  },
];

export class InMemoryPaymentRepository implements IPaymentRepository {
  private readonly payments: PaymentModel[];

  constructor() {
    this.payments = RAW_PAYMENTS.map((p) => new PaymentModel(p));
  }

  public findAll(): PaymentModel[] {
    return [...this.payments];
  }

  public findById(id: string): PaymentModel | undefined {
    return this.payments.find((p) => p.id === id);
  }

  public search(query: string, statusFilter: string = ""): PaymentModel[] {
    return this.payments.filter((p) => p.matchesQuery(query, statusFilter));
  }
}
