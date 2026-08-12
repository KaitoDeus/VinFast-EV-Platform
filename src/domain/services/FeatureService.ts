import { IFeatureRepository } from "../repositories";
import { FeatureItemEntity } from "../models";

export class FeatureService {
  constructor(private readonly repository: IFeatureRepository) {}

  public getAllFeatures(): FeatureItemEntity[] {
    return this.repository.findAll();
  }
}
