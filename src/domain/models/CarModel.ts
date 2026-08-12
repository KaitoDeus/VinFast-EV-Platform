import { CarModelSpec } from "@/types";

export class CarModelEntity implements CarModelSpec {
  public readonly id: string;
  public readonly name: string;
  public readonly segment: string;
  public readonly power: string;
  public readonly torque: string;
  public readonly range: string;
  public readonly chargeTime: string;
  public readonly seats: string;
  public readonly price: string;
  public readonly highlights: string[];

  constructor(data: CarModelSpec) {
    this.id = data.id;
    this.name = data.name;
    this.segment = data.segment;
    this.power = data.power;
    this.torque = data.torque;
    this.range = data.range;
    this.chargeTime = data.chargeTime;
    this.seats = data.seats;
    this.price = data.price;
    this.highlights = [...data.highlights];
  }

  public getFormattedPrice(): string {
    return this.price;
  }

  public hasHighlight(keyword: string): boolean {
    return this.highlights.some((h) =>
      h.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  public isFlagship(): boolean {
    return this.id === "vf9";
  }

  public toJSON(): CarModelSpec {
    return {
      id: this.id,
      name: this.name,
      segment: this.segment,
      power: this.power,
      torque: this.torque,
      range: this.range,
      chargeTime: this.chargeTime,
      seats: this.seats,
      price: this.price,
      highlights: [...this.highlights],
    };
  }
}
