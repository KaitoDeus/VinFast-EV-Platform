import { IExpenseRepository } from "../repositories";
import { ExpenseModel } from "../models";

export class ExpenseService {
  constructor(private readonly repository: IExpenseRepository) {}

  public getAllExpenses(): ExpenseModel[] {
    return this.repository.findAll();
  }

  public getExpenseById(id: string): ExpenseModel | undefined {
    return this.repository.findById(id);
  }

  public searchExpenses(query: string, statusFilter: string = ""): ExpenseModel[] {
    return this.repository.search(query, statusFilter);
  }
}
