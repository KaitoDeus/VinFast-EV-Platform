import { ITrackingRepository } from "../repositories";
import { TrackingModel } from "../models";

export class TrackingService {
  constructor(private readonly repository: ITrackingRepository) {}

  public getAllTrackedVehicles(): TrackingModel[] {
    return this.repository.findAll();
  }

  public getTrackedVehicleById(id: string): TrackingModel | undefined {
    return this.repository.findById(id);
  }

  public searchTrackedVehicles(query: string): TrackingModel[] {
    return this.repository.search(query);
  }
}
