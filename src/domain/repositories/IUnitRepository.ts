import { UnitModel } from "../models";

export interface IUnitRepository {
  findAll(): UnitModel[];
  findById(id: string): UnitModel | undefined;
  search(query: string): UnitModel[];
  findByTypeAndStatus(type: string, status: string): UnitModel[];
}
