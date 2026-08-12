import { ClientModel } from "../models";

export interface IClientRepository {
  findAll(): ClientModel[];
  findById(id: string): ClientModel | undefined;
  search(query: string): ClientModel[];
}
