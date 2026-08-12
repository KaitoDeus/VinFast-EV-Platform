import { ClientModel, ClientSpec } from "../../models";
import { IClientRepository } from "../IClientRepository";

const RAW_CLIENTS: ClientSpec[] = [
  {
    id: "CLT-001",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    address: "123 Maple Street",
    residenceCard: "Alice's Residence Card",
    driverLicense: "Alice's License",
    points: 120,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-002",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "234-567-8901",
    address: "456 Oak Avenue",
    residenceCard: "Bob's Residence Card",
    driverLicense: "Bob's License",
    points: 150,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-003",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "345-678-9012",
    address: "789 Pine Road",
    residenceCard: "Charlie's Residence Card",
    driverLicense: "Charlie's License",
    points: 200,
    avatar: "/team/avatar-1.png",
    selected: true,
  },
  {
    id: "CLT-004",
    name: "Diana White",
    email: "diana.white@example.com",
    phone: "456-789-0123",
    address: "101 Birch Lane",
    residenceCard: "Diana's Residence Card",
    driverLicense: "Diana's License",
    points: 180,
    avatar: "/team/avatar-1.png",
    selected: true,
  },
  {
    id: "CLT-005",
    name: "Edward Green",
    email: "edward.green@example.com",
    phone: "567-890-1234",
    address: "202 Cedar Street",
    residenceCard: "Edward's Residence Card",
    driverLicense: "Edward's License",
    points: 140,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-006",
    name: "Fiona Brown",
    email: "fiona.brown@example.com",
    phone: "678-901-2345",
    address: "303 Elm Avenue",
    residenceCard: "Fiona's Residence Card",
    driverLicense: "Fiona's License",
    points: 160,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-007",
    name: "George Clark",
    email: "george.clark@example.com",
    phone: "789-012-3456",
    address: "404 Spruce Road",
    residenceCard: "George's Residence Card",
    driverLicense: "George's License",
    points: 110,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-008",
    name: "Helen Martinez",
    email: "helen.martinez@example.com",
    phone: "890-123-4567",
    address: "505 Willow Lane",
    residenceCard: "Helen's Residence Card",
    driverLicense: "Helen's License",
    points: 170,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-009",
    name: "Ivan Rodriguez",
    email: "ivan.rodriguez@example.com",
    phone: "901-234-5678",
    address: "606 Walnut Street",
    residenceCard: "Ivan's Residence Card",
    driverLicense: "Ivan's License",
    points: 130,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-010",
    name: "Jane Wilson",
    email: "jane.wilson@example.com",
    phone: "012-345-6789",
    address: "707 Ash Avenue",
    residenceCard: "Jane's Residence Card",
    driverLicense: "Jane's License",
    points: 190,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-011",
    name: "Kyle Thompson",
    email: "kyle.thompson@example.com",
    phone: "123-456-7891",
    address: "808 Cherry Road",
    residenceCard: "Kyle's Residence Card",
    driverLicense: "Kyle's License",
    points: 175,
    avatar: "/team/avatar-1.png",
  },
  {
    id: "CLT-012",
    name: "Laura King",
    email: "laura.king@example.com",
    phone: "234-567-8902",
    address: "909 Chestnut Lane",
    residenceCard: "Laura's Residence Card",
    driverLicense: "Laura's License",
    points: 155,
    avatar: "/team/avatar-1.png",
  },
];

export class InMemoryClientRepository implements IClientRepository {
  private readonly clients: ClientModel[];

  constructor() {
    this.clients = RAW_CLIENTS.map((c) => new ClientModel(c));
  }

  public findAll(): ClientModel[] {
    return [...this.clients];
  }

  public findById(id: string): ClientModel | undefined {
    return this.clients.find((c) => c.id === id);
  }

  public search(query: string): ClientModel[] {
    if (!query) return [...this.clients];
    return this.clients.filter((c) => c.matchesQuery(query));
  }
}
