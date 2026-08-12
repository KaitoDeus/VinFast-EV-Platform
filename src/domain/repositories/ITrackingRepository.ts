import { TrackingModel } from "../models";

export interface ITrackingRepository {
  findAll(): TrackingModel[];
  findById(id: string): TrackingModel | undefined;
  search(query: string): TrackingModel[];
}
