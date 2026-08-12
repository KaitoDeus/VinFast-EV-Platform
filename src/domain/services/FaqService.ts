import { IFaqRepository } from "../repositories";
import { FaqItemEntity } from "../models";

export class FaqService {
  constructor(private readonly repository: IFaqRepository) {}

  public getAllFaqs(): FaqItemEntity[] {
    return this.repository.findAll();
  }

  public searchFaqs(query: string): FaqItemEntity[] {
    return this.repository.search(query);
  }
}
