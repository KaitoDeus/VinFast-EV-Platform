import { PaymentModel } from "../models";

export interface IPaymentRepository {
  findAll(): PaymentModel[];
  findById(id: string): PaymentModel | undefined;
  search(query: string, statusFilter?: string): PaymentModel[];
}
