import { FeatureItemEntity } from "../models";

export interface IFeatureRepository {
  findAll(): FeatureItemEntity[];
}
