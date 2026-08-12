import { ICarRepository } from "../repositories";
import { CarModelEntity } from "../models";

export class CarService {
  constructor(private readonly repository: ICarRepository) {}

  public getAllModels(): CarModelEntity[] {
    return this.repository.findAll();
  }

  public getModelById(id: string): CarModelEntity | undefined {
    return this.repository.findById(id);
  }

  public getModelsBySegment(segment: string): CarModelEntity[] {
    return this.repository.findBySegment(segment);
  }

  public getDefaultModel(): CarModelEntity {
    return this.repository.getDefaultModel();
  }
}
