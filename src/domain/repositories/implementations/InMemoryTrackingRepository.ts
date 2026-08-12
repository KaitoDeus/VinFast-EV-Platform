import { TrackingModel, TrackingSpec } from "../../models";
import { ITrackingRepository } from "../ITrackingRepository";

const RAW_TRACKING: TrackingSpec[] = [
  {
    id: "TRK-001",
    clientName: "Helen Martinez",
    clientAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    carModel: "Aston Martin",
    carImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80",
    carType: "Sedan",
    carNumber: "AM1001",
    driverName: "-",
    startDate: "Mon, 31 Jul 2028",
    endDate: "Tue, 1 Aug 2028",
    tripTime: "24 hours",
    totalDistance: "210 miles",
    status: "Returned",
  },
  {
    id: "TRK-002",
    clientName: "Bob Smith",
    clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    carModel: "Hyundai Sonata",
    carImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    carType: "Sedan",
    carNumber: "HS2002",
    driverName: "-",
    startDate: "Tue, 1 Aug 2028",
    endDate: "Wed, 2 Aug 2028",
    tripTime: "18 hours",
    totalDistance: "150 miles",
    status: "On Trip",
  },
  {
    id: "TRK-003",
    clientName: "Diana White",
    clientAvatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=250&q=80",
    carModel: "Chevrolet Bolt",
    carImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80",
    carType: "SUV",
    carNumber: "CB2345",
    driverName: "-",
    startDate: "Wed, 2 Aug 2028",
    endDate: "Thu, 3 Aug 2028",
    tripTime: "12 hours 39 minutes",
    totalDistance: "180 miles",
    status: "On Trip",
  },
  {
    id: "TRK-004",
    clientName: "Edward Green",
    clientAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    carModel: "VW Amarok",
    carImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80",
    carType: "Truck",
    carNumber: "VW4004",
    driverName: "-",
    startDate: "Thu, 3 Aug 2028",
    endDate: "Fri, 4 Aug 2028",
    tripTime: "30 hours",
    totalDistance: "320 miles",
    status: "Returned",
  },
  {
    id: "TRK-005",
    clientName: "Fiona Brown",
    clientAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
    carModel: "BMW LX3",
    carImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80",
    carType: "SUV",
    carNumber: "BX5005",
    driverName: "-",
    startDate: "Fri, 4 Aug 2028",
    endDate: "Sat, 5 Aug 2028",
    tripTime: "15 hours",
    totalDistance: "190 miles",
    status: "On Trip",
  },
  {
    id: "TRK-006",
    clientName: "George Clark",
    clientAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80",
    carModel: "Audi Q7",
    carImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80",
    carType: "SUV",
    carNumber: "AQ6006",
    driverName: "-",
    startDate: "Sat, 5 Aug 2028",
    endDate: "Sun, 6 Aug 2028",
    tripTime: "10 hours",
    totalDistance: "140 miles",
    status: "On Trip",
  },
  {
    id: "TRK-007",
    clientName: "Helen Martinez",
    clientAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    carModel: "Nissan Ariya",
    carImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80",
    carType: "Crossover",
    carNumber: "NA7007",
    driverName: "-",
    startDate: "Sun, 6 Aug 2028",
    endDate: "Mon, 7 Aug 2028",
    tripTime: "20 hours",
    totalDistance: "230 miles",
    status: "Returned",
  },
  {
    id: "TRK-008",
    clientName: "Laura King",
    clientAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80",
    carModel: "Kia EV6",
    carImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80",
    carType: "SUV",
    carNumber: "KE8008",
    driverName: "-",
    startDate: "Mon, 7 Aug 2028",
    endDate: "Tue, 8 Aug 2028",
    tripTime: "14 hours",
    totalDistance: "165 miles",
    status: "On Trip",
  },
  {
    id: "TRK-009",
    clientName: "Ivan Rodriguez",
    clientAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80",
    carModel: "Range Rover Velar",
    carImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=400&q=80",
    carType: "SUV",
    carNumber: "RV9009",
    driverName: "-",
    startDate: "Tue, 8 Aug 2028",
    endDate: "Wed, 9 Aug 2028",
    tripTime: "16 hours",
    totalDistance: "210 miles",
    status: "On Trip",
  },
];

export class InMemoryTrackingRepository implements ITrackingRepository {
  private readonly items: TrackingModel[];

  constructor() {
    this.items = RAW_TRACKING.map((t) => new TrackingModel(t));
  }

  public findAll(): TrackingModel[] {
    return [...this.items];
  }

  public findById(id: string): TrackingModel | undefined {
    return this.items.find((t) => t.id === id);
  }

  public search(query: string): TrackingModel[] {
    return this.items.filter((t) => t.matchesQuery(query));
  }
}
