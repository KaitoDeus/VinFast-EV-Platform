import { IClientRepository } from "../repositories";
import { ClientModel } from "../models";

export class ClientService {
  constructor(private readonly repository: IClientRepository) {}

  public getAllClients(): ClientModel[] {
    return this.repository.findAll();
  }

  public getClientById(id: string): ClientModel | undefined {
    return this.repository.findById(id);
  }

  public searchClients(query: string): ClientModel[] {
    return this.repository.search(query);
  }
}
