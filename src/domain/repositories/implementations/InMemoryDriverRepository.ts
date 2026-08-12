import { DriverModel, DriverSpec } from "../../models";
import { IDriverRepository } from "../IDriverRepository";

const RAW_DRIVERS: DriverSpec[] = [
  {
    id: "DRV-001",
    name: "John Adams",
    email: "john.adams@example.com",
    phone: "111-222-3333",
    status: "On Duty",
    address: "101 Maple Drive",
    workHours: 220,
    rating: 4.8,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-002",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "222-333-4444",
    status: "Sick Leave",
    address: "202 Oak Way",
    workHours: 190,
    rating: 4.6,
    performanceBadge: "Good",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-003",
    name: "Michael Clark",
    email: "michael.clark@example.com",
    phone: "333-444-5555",
    status: "On Duty",
    address: "303 Pine Avenue",
    workHours: 260,
    rating: 4.9,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-004",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    phone: "444-555-6666",
    status: "Half-Day Leave",
    address: "404 Cedar Street",
    workHours: 180,
    rating: 4.5,
    performanceBadge: "Good",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-005",
    name: "James Evans",
    email: "james.evans@example.com",
    phone: "555-666-7777",
    status: "On Duty",
    address: "505 Birch Road",
    workHours: 230,
    rating: 4.7,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-006",
    name: "Laura Fisher",
    email: "laura.fisher@example.com",
    phone: "666-777-8888",
    status: "On Duty",
    address: "606 Spruce Court",
    workHours: 210,
    rating: 4.8,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-007",
    name: "Robert Gray",
    email: "robert.gray@example.com",
    phone: "777-888-9999",
    status: "Sick Leave",
    address: "707 Willow Lane",
    workHours: 160,
    rating: 4.4,
    performanceBadge: "Average",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-008",
    name: "Jessica Harris",
    email: "jessica.harris@example.com",
    phone: "888-999-0000",
    status: "On Duty",
    address: "808 Ash Street",
    workHours: 250,
    rating: 4.9,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-009",
    name: "Daniel Jackson",
    email: "daniel.jackson@example.com",
    phone: "999-000-1111",
    status: "On Duty",
    address: "123 Elm Street",
    workHours: 248,
    rating: 4.5,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-010",
    name: "Olivia King",
    email: "olivia.king@example.com",
    phone: "000-111-2222",
    status: "On Duty",
    address: "909 Cherry Road",
    workHours: 240,
    rating: 4.7,
    performanceBadge: "Excellent",
    avatar: "/team/avatar-1.png",
  },
  {
    id: "DRV-011",
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "111-222-3334",
    status: "Half-Day Leave",
    address: "101 Chestnut Lane",
    workHours: 175,
    rating: 4.5,
    performanceBadge: "Good",
    avatar: "/team/avatar-1.png",
  },
];

export class InMemoryDriverRepository implements IDriverRepository {
  private readonly drivers: DriverModel[];

  constructor() {
    this.drivers = RAW_DRIVERS.map((d) => new DriverModel(d));
  }

  public findAll(): DriverModel[] {
    return [...this.drivers];
  }

  public findById(id: string): DriverModel | undefined {
    return this.drivers.find((d) => d.id === id);
  }

  public search(query: string, statusFilter: string = ""): DriverModel[] {
    return this.drivers.filter((d) => d.matchesQuery(query, statusFilter));
  }
}
