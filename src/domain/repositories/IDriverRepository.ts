import { DriverModel } from "../models";

export interface IDriverRepository {
  findAll(): DriverModel[];
  findById(id: string): DriverModel | undefined;
  search(query: string, statusFilter?: string): DriverModel[];
}
