import { ColorOptionEntity } from "../models";

export interface IColorRepository {
  findAll(): ColorOptionEntity[];
  findById(id: string): ColorOptionEntity | undefined;
  getDefaultColor(): ColorOptionEntity;
}
