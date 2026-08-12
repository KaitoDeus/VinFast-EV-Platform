import { BookingModel, BookingSpec } from "../../models";
import { IBookingRepository } from "../IBookingRepository";

const RAW_BOOKINGS: BookingSpec[] = [
  {
    id: "BK-WZ1001",
    bookingDate: "Aug 1, 2028",
    clientName: "Alice Johnson",
    carModel: "VinFast VF 8",
    carTypeBadge: "SUV",
    plateNumber: "29A-888.88",
    planDays: "2 Days",
    startDate: "Aug 1, 2028",
    endDate: "Aug 2, 2028",
    driverAssigned: false,
    amount: "$50",
    paymentStatus: "Paid",
    bookingStatus: "Returned",
  },
  {
    id: "BK-WZ1002",
    bookingDate: "Aug 1, 2028",
    clientName: "Bob Smith",
    carModel: "VinFast VF 7",
    carTypeBadge: "SUV",
    plateNumber: "30F-567.89",
    planDays: "7 Days",
    startDate: "Aug 1, 2028",
    endDate: "Aug 8, 2028",
    driverAssigned: true,
    amount: "$350",
    paymentStatus: "Pending",
    bookingStatus: "Ongoing",
  },
  {
    id: "BK-WZ1003",
    bookingDate: "Aug 2, 2028",
    clientName: "Charlie Davis",
    carModel: "VinFast VF 9",
    carTypeBadge: "SUV",
    plateNumber: "51K-910.11",
    planDays: "31 Days",
    startDate: "Aug 2, 2028",
    endDate: "Sep 2, 2028",
    driverAssigned: false,
    amount: "$1000",
    paymentStatus: "Paid",
    bookingStatus: "Ongoing",
  },
  {
    id: "BK-WZ1004",
    bookingDate: "Aug 2, 2028",
    clientName: "Diana White",
    carModel: "VinFast VF 6",
    carTypeBadge: "Crossover",
    plateNumber: "43A-234.56",
    planDays: "1 Day",
    startDate: "Aug 2, 2028",
    endDate: "Aug 3, 2028",
    driverAssigned: true,
    amount: "$50",
    paymentStatus: "Paid",
    bookingStatus: "Returned",
  },
  {
    id: "BK-WZ1005",
    bookingDate: "Aug 3, 2028",
    clientName: "Edward Green",
    carModel: "VinFast Klara S",
    carTypeBadge: "E-Scooter",
    plateNumber: "29M1-678.90",
    planDays: "8 Days",
    startDate: "Aug 3, 2028",
    endDate: "Aug 10, 2028",
    driverAssigned: false,
    amount: "$350",
    paymentStatus: "Pending",
    bookingStatus: "Cancelled",
  },
  {
    id: "BK-WZ1006",
    bookingDate: "Aug 3, 2028",
    clientName: "Fiona Brown",
    carModel: "VinFast VF 8",
    carTypeBadge: "SUV",
    plateNumber: "30G-111.22",
    planDays: "32 Days",
    startDate: "Aug 3, 2028",
    endDate: "Sep 3, 2028",
    driverAssigned: true,
    amount: "$1500",
    paymentStatus: "Paid",
    bookingStatus: "Ongoing",
  },
  {
    id: "BK-WZ1007",
    bookingDate: "Aug 4, 2028",
    clientName: "George Clark",
    carModel: "VinFast VF 5",
    carTypeBadge: "Compact",
    plateNumber: "51H-333.44",
    planDays: "2 Days",
    startDate: "Aug 4, 2028",
    endDate: "Aug 5, 2028",
    driverAssigned: false,
    amount: "$70",
    paymentStatus: "Paid",
    bookingStatus: "Returned",
  },
  {
    id: "BK-WZ1008",
    bookingDate: "Aug 4, 2028",
    clientName: "Helen Martinez",
    carModel: "VinFast VF 6",
    carTypeBadge: "Crossover",
    plateNumber: "29B-555.66",
    planDays: "7 Days",
    startDate: "Aug 4, 2028",
    endDate: "Aug 11, 2028",
    driverAssigned: true,
    amount: "$450",
    paymentStatus: "Pending",
    bookingStatus: "Cancelled",
  },
  {
    id: "BK-WZ1009",
    bookingDate: "Aug 5, 2028",
    clientName: "Ivan Rodriguez",
    carModel: "VinFast VF 9",
    carTypeBadge: "SUV",
    plateNumber: "30A-777.88",
    planDays: "31 Days",
    startDate: "Aug 5, 2028",
    endDate: "Sep 5, 2028",
    driverAssigned: false,
    amount: "$1200",
    paymentStatus: "Paid",
    bookingStatus: "Ongoing",
  },
  {
    id: "BK-WZ1010",
    bookingDate: "Aug 5, 2028",
    clientName: "Jane Wilson",
    carModel: "VinFast VF 7",
    carTypeBadge: "SUV",
    plateNumber: "51F-999.00",
    planDays: "2 Days",
    startDate: "Aug 5, 2028",
    endDate: "Aug 6, 2028",
    driverAssigned: true,
    amount: "$60",
    paymentStatus: "Paid",
    bookingStatus: "Returned",
  },
];

export class InMemoryBookingRepository implements IBookingRepository {
  private readonly bookings: BookingModel[];

  constructor() {
    this.bookings = RAW_BOOKINGS.map((b) => new BookingModel(b));
  }

  public findAll(): BookingModel[] {
    return [...this.bookings];
  }

  public findById(id: string): BookingModel | undefined {
    return this.bookings.find((b) => b.id === id);
  }

  public search(query: string): BookingModel[] {
    if (!query) return [...this.bookings];
    return this.bookings.filter((b) => b.matchesQuery(query));
  }

  public findByStatus(status: string): BookingModel[] {
    if (!status || status === "All") return [...this.bookings];
    return this.bookings.filter((b) => b.bookingStatus === status);
  }
}
