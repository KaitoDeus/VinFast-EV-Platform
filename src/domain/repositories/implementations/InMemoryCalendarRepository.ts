import { CalendarEventModel, CalendarEventSpec } from "../../models";
import { ICalendarRepository } from "../ICalendarRepository";

const RAW_EVENTS: CalendarEventSpec[] = [
  {
    id: "EVT-801",
    type: "Pickup",
    timeSlot: "8:00 AM",
    dayIndex: 0, // Mon 14
    dateStr: "Mon, 14 Aug 2028",
    carModel: "VinFast VF 8",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "30H-888.99",
    clientName: "Michael Brown",
    driverName: "None",
    startDate: "Mon, 14 Aug 2028",
    endDate: "Wed, 16 Aug 2028",
    notes: "Requires fast DC charging adapter.",
  },
  {
    id: "EVT-802",
    type: "Pickup",
    timeSlot: "8:00 AM",
    dayIndex: 1, // Tue 15
    dateStr: "Tue, 15 Aug 2028",
    carModel: "VinFast VF 9",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "30G-999.88",
    clientName: "Oliver Scott",
    driverName: "Nguyen Van A",
    startDate: "Tue, 15 Aug 2028",
    endDate: "Sat, 19 Aug 2028",
    notes: "VIP airport pickup service requested.",
  },
  {
    id: "EVT-803",
    type: "Pickup",
    timeSlot: "8:00 AM",
    dayIndex: 4, // Fri 18
    dateStr: "Fri, 18 Aug 2028",
    carModel: "VinFast VF 7",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "30H-555.22",
    clientName: "Nancy Davis",
    driverName: "None",
    startDate: "Fri, 18 Aug 2028",
    endDate: "Sun, 20 Aug 2028",
  },
  {
    id: "EVT-901",
    type: "Return",
    timeSlot: "9:00 AM",
    dayIndex: 1, // Tue 15
    dateStr: "Tue, 15 Aug 2028",
    carModel: "VinFast VF e34",
    carImage: "/section/sec1.png",
    carType: "Crossover",
    carNumber: "30E-123.45",
    clientName: "Alice Johnson",
    driverName: "None",
    startDate: "Sun, 13 Aug 2028",
    endDate: "Tue, 15 Aug 2028",
  },
  {
    id: "EVT-930",
    type: "Pickup",
    timeSlot: "9:30 AM",
    dayIndex: 3, // Thu 17
    dateStr: "Thu, 17 Aug 2028",
    carModel: "VinFast VF 6",
    carImage: "/section/sec1.png",
    carType: "Crossover",
    carNumber: "30F-678.90",
    clientName: "Alice Johnson",
    driverName: "None",
    startDate: "Thu, 17 Aug 2028",
    endDate: "Sat, 19 Aug 2028",
  },
  {
    id: "EVT-1100",
    type: "Return",
    timeSlot: "11:00 AM",
    dayIndex: 4, // Fri 18
    dateStr: "Fri, 18 Aug 2028",
    carModel: "VinFast VF 5",
    carImage: "/section/sec1.png",
    carType: "Compact",
    carNumber: "30K-111.33",
    clientName: "Bob Smith",
    driverName: "None",
    startDate: "Wed, 16 Aug 2028",
    endDate: "Fri, 18 Aug 2028",
  },
  {
    id: "EVT-1200",
    type: "Pickup",
    timeSlot: "12:00 PM",
    dayIndex: 1, // Tue 15
    dateStr: "Tue, 15 Aug 2028",
    carModel: "VinFast VF 8",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "30H-777.44",
    clientName: "Helen Martinez",
    driverName: "None",
    startDate: "Tue, 15 Aug 2028",
    endDate: "Thu, 17 Aug 2028",
  },
  {
    id: "EVT-1230",
    type: "Pickup",
    timeSlot: "12:30 PM",
    dayIndex: 3, // Thu 17
    dateStr: "Thu, 17 Aug 2028",
    carModel: "VinFast VF 9",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "CX2345",
    clientName: "Kyle Thompson",
    clientAvatar: "/team/avatar-1.png",
    driverName: "None",
    startDate: "Thu, 17 Aug 2028",
    endDate: "Fri, 18 Aug 2028",
    notes: "Client requested a child safety seat.",
  },
  {
    id: "EVT-100",
    type: "Return",
    timeSlot: "1:00 PM",
    dayIndex: 0, // Mon 14
    dateStr: "Mon, 14 Aug 2028",
    carModel: "VinFast VF 7",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "30H-222.11",
    clientName: "Jane Wilson",
    driverName: "None",
    startDate: "Fri, 11 Aug 2028",
    endDate: "Mon, 14 Aug 2028",
  },
  {
    id: "EVT-130",
    type: "Return",
    timeSlot: "1:30 PM",
    dayIndex: 2, // Wed 16
    dateStr: "Wed, 16 Aug 2028",
    carModel: "VinFast VF e34",
    carImage: "/section/sec1.png",
    carType: "Crossover",
    carNumber: "30E-999.00",
    clientName: "Fiona Brown",
    driverName: "None",
    startDate: "Sun, 13 Aug 2028",
    endDate: "Wed, 16 Aug 2028",
  },
  {
    id: "EVT-300",
    type: "Pickup",
    timeSlot: "3:00 PM",
    dayIndex: 1, // Tue 15
    dateStr: "Tue, 15 Aug 2028",
    carModel: "VinFast VF 8",
    carImage: "/section/sec1.png",
    carType: "SUV",
    carNumber: "30H-333.66",
    clientName: "Kyle Thompson",
    driverName: "None",
    startDate: "Tue, 15 Aug 2028",
    endDate: "Thu, 17 Aug 2028",
  },
  {
    id: "EVT-330",
    type: "Pickup",
    timeSlot: "3:30 PM",
    dayIndex: 4, // Fri 18
    dateStr: "Fri, 18 Aug 2028",
    carModel: "VinFast Klara S",
    carImage: "/section/sec1.png",
    carType: "E-Scooter",
    carNumber: "29-AA 001.99",
    clientName: "Diana White",
    driverName: "None",
    startDate: "Fri, 18 Aug 2028",
    endDate: "Sun, 20 Aug 2028",
  },
];

export class InMemoryCalendarRepository implements ICalendarRepository {
  private readonly events: CalendarEventModel[];

  constructor() {
    this.events = RAW_EVENTS.map((e) => new CalendarEventModel(e));
  }

  public findAll(): CalendarEventModel[] {
    return [...this.events];
  }

  public findById(id: string): CalendarEventModel | undefined {
    return this.events.find((e) => e.id === id);
  }

  public findByType(type: string): CalendarEventModel[] {
    if (type === "All") return [...this.events];
    return this.events.filter((e) => e.type.toLowerCase() === type.toLowerCase());
  }
}
