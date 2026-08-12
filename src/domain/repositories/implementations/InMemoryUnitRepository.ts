import { UnitModel, UnitSpec } from "../../models";
import { IUnitRepository } from "../IUnitRepository";

const RAW_UNITS: UnitSpec[] = [
  {
    id: "UNT-VF901",
    brand: "VinFast",
    modelName: "VF 9",
    status: "Available",
    unitsCount: 3,
    transmission: "Automatic",
    capacity: "7 seats",
    dailyPrice: "$130",
    carType: "SUV",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-VF802",
    brand: "VinFast",
    modelName: "VF 8",
    status: "Available",
    unitsCount: 8,
    transmission: "Automatic",
    capacity: "5 seats",
    dailyPrice: "$45",
    carType: "SUV",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-VF703",
    brand: "VinFast",
    modelName: "VF 7",
    status: "Available",
    unitsCount: 10,
    transmission: "Automatic",
    capacity: "5 seats",
    dailyPrice: "$55",
    carType: "SUV",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-VF604",
    brand: "VinFast",
    modelName: "VF 6",
    status: "Maintenance",
    unitsCount: 0,
    transmission: "Automatic",
    capacity: "5 seats",
    dailyPrice: "$60",
    carType: "Crossover",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-VF505",
    brand: "VinFast",
    modelName: "VF 5",
    status: "Available",
    unitsCount: 4,
    transmission: "Automatic",
    capacity: "5 seats",
    dailyPrice: "$120",
    carType: "Compact",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-VFE34",
    brand: "VinFast",
    modelName: "VF e34",
    status: "Unavailable",
    unitsCount: 0,
    transmission: "Automatic",
    capacity: "5 seats",
    dailyPrice: "$130",
    carType: "SUV",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-KLARA",
    brand: "VinFast",
    modelName: "Klara S",
    status: "Available",
    unitsCount: 6,
    transmission: "Automatic",
    capacity: "2 seats",
    dailyPrice: "$100",
    carType: "E-Scooter",
    image: "/section/sec1.png",
  },
  {
    id: "UNT-FELIZ",
    brand: "VinFast",
    modelName: "Feliz S",
    status: "Available",
    unitsCount: 7,
    transmission: "Manual",
    capacity: "2 seats",
    dailyPrice: "$40",
    carType: "E-Scooter",
    image: "/section/sec1.png",
  },
];

export class InMemoryUnitRepository implements IUnitRepository {
  private readonly units: UnitModel[];

  constructor() {
    this.units = RAW_UNITS.map((u) => new UnitModel(u));
  }

  public findAll(): UnitModel[] {
    return [...this.units];
  }

  public findById(id: string): UnitModel | undefined {
    return this.units.find((u) => u.id === id);
  }

  public search(query: string): UnitModel[] {
    if (!query) return [...this.units];
    return this.units.filter((u) => u.matchesQuery(query));
  }

  public findByTypeAndStatus(type: string, status: string): UnitModel[] {
    return this.units.filter((u) => {
      const matchesType = type === "All" || u.carType.toLowerCase() === type.toLowerCase();
      const matchesStatus = status === "All" || u.status.toLowerCase() === status.toLowerCase();
      return matchesType && matchesStatus;
    });
  }
}
