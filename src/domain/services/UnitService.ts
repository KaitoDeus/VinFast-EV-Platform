import { IUnitRepository } from "../repositories";
import { UnitModel } from "../models";

export class UnitService {
  constructor(private readonly repository: IUnitRepository) {}

  public getAllUnits(): UnitModel[] {
    return this.repository.findAll();
  }

  public getUnitById(id: string): UnitModel | undefined {
    return this.repository.findById(id);
  }

  public searchUnits(query: string): UnitModel[] {
    return this.repository.search(query);
  }

  public filterUnits(type: string, status: string): UnitModel[] {
    return this.repository.findByTypeAndStatus(type, status);
  }
}
