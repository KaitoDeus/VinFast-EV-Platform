import { IPaymentRepository } from "../repositories";
import { PaymentModel } from "../models";

export class PaymentService {
  constructor(private readonly repository: IPaymentRepository) {}

  public getAllPayments(): PaymentModel[] {
    return this.repository.findAll();
  }

  public getPaymentById(id: string): PaymentModel | undefined {
    return this.repository.findById(id);
  }

  public searchPayments(query: string, statusFilter: string = ""): PaymentModel[] {
    return this.repository.search(query, statusFilter);
  }
}
