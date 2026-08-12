import { IColorRepository } from "../repositories";
import { ColorOptionEntity } from "../models";

export class ColorService {
  constructor(private readonly repository: IColorRepository) {}

  public getAllColors(): ColorOptionEntity[] {
    return this.repository.findAll();
  }

  public getColorById(id: string): ColorOptionEntity | undefined {
    return this.repository.findById(id);
  }

  public getDefaultColor(): ColorOptionEntity {
    return this.repository.getDefaultColor();
  }
}
