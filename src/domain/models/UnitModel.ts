export interface UnitSpec {
  id: string;
  brand: string;
  modelName: string;
  status: "Available" | "Maintenance" | "Unavailable";
  unitsCount: number;
  transmission: string;
  capacity: string;
  dailyPrice: string;
  carType: string;
  image: string;
  description?: string;
  range?: string;
  batteryFuel?: string;
  topSpeed?: string;
  acceleration?: string;
  galleryImages?: string[];
  features?: string[];
}

export class UnitModel implements UnitSpec {
  public readonly id: string;
  public readonly brand: string;
  public readonly modelName: string;
  public readonly status: "Available" | "Maintenance" | "Unavailable";
  public readonly unitsCount: number;
  public readonly transmission: string;
  public readonly capacity: string;
  public readonly dailyPrice: string;
  public readonly carType: string;
  public readonly image: string;
  public readonly description: string;
  public readonly range: string;
  public readonly batteryFuel: string;
  public readonly topSpeed: string;
  public readonly acceleration: string;
  public readonly galleryImages: string[];
  public readonly features: string[];

  constructor(data: UnitSpec) {
    this.id = data.id;
    this.brand = data.brand;
    this.modelName = data.modelName;
    this.status = data.status;
    this.unitsCount = data.unitsCount;
    this.transmission = data.transmission;
    this.capacity = data.capacity;
    this.dailyPrice = data.dailyPrice;
    this.carType = data.carType;
    this.image = data.image;
    this.description =
      data.description ||
      `${data.brand} ${data.modelName} is a premium all-electric ${data.carType.toLowerCase()}, ideal for both daily urban commutes and extended highway journeys. Renowned for its powerful dual-motor performance, advanced smart tech, and refined driving experience with exceptional cabin comfort.`;
    this.range = data.range || "471 km on a full charge";
    this.batteryFuel = data.batteryFuel || "100% Electric (87.7 kWh)";
    this.topSpeed = data.topSpeed || "200 km/h";
    this.acceleration = data.acceleration || "5.5 seconds (0-60 mph)";
    this.galleryImages = data.galleryImages || [data.image, data.image, data.image];
    this.features = data.features || [
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Backup Camera & 360 Surround View",
      "Adaptive Cruise Control",
      "Keyless Entry & Smart Digital Key",
      "Power Windows and Panoramic Sunroof",
      "AM/FM Radio with Premium Audio",
      "Fast USB-C Charging Ports",
      "Spacious Trunk & Frunk Storage",
      "Advanced ADAS Safety Suite (Lane Assist, Auto Emergency Braking)",
    ];
  }

  public isAvailable(): boolean {
    return this.status === "Available";
  }

  public isMaintenance(): boolean {
    return this.status === "Maintenance";
  }

  public matchesQuery(query: string): boolean {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      this.id.toLowerCase().includes(q) ||
      this.brand.toLowerCase().includes(q) ||
      this.modelName.toLowerCase().includes(q) ||
      this.carType.toLowerCase().includes(q) ||
      this.status.toLowerCase().includes(q)
    );
  }

  public toJSON(): UnitSpec {
    return {
      id: this.id,
      brand: this.brand,
      modelName: this.modelName,
      status: this.status,
      unitsCount: this.unitsCount,
      transmission: this.transmission,
      capacity: this.capacity,
      dailyPrice: this.dailyPrice,
      carType: this.carType,
      image: this.image,
      description: this.description,
      range: this.range,
      batteryFuel: this.batteryFuel,
      topSpeed: this.topSpeed,
      acceleration: this.acceleration,
      galleryImages: this.galleryImages,
      features: this.features,
    };
  }
}
