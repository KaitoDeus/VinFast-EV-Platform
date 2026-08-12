import { IDriverRepository } from "../repositories";
import { DriverModel } from "../models";

export class DriverService {
  constructor(private readonly repository: IDriverRepository) {}

  public getAllDrivers(): DriverModel[] {
    return this.repository.findAll();
  }

  public getDriverById(id: string): DriverModel | undefined {
    return this.repository.findById(id);
  }

  public searchDrivers(query: string, statusFilter: string = ""): DriverModel[] {
    return this.repository.search(query, statusFilter);
  }
}
