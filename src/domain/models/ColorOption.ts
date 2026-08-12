import { ColorOption as IColorOption } from "@/types";

export class ColorOptionEntity implements IColorOption {
  public readonly id: string;
  public readonly name: string;
  public readonly hex: string;
  public readonly desc: string;

  constructor(data: IColorOption) {
    this.id = data.id;
    this.name = data.name;
    this.hex = data.hex;
    this.desc = data.desc;
  }

  public getHexColor(): string {
    return this.hex;
  }

  public isDarkColor(): boolean {
    const hex = this.hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }

  public toJSON(): IColorOption {
    return {
      id: this.id,
      name: this.name,
      hex: this.hex,
      desc: this.desc,
    };
  }
}
