import { ExpenseModel } from "../models";

export interface IExpenseRepository {
  findAll(): ExpenseModel[];
  findById(id: string): ExpenseModel | undefined;
  search(query: string, statusFilter?: string): ExpenseModel[];
}
