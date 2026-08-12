import { CarModelEntity } from "../models";

export interface ICarRepository {
  findAll(): CarModelEntity[];
  findById(id: string): CarModelEntity | undefined;
  findBySegment(segment: string): CarModelEntity[];
  getDefaultModel(): CarModelEntity;
}
