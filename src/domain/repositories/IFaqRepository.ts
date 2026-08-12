import { FaqItemEntity } from "../models";

export interface IFaqRepository {
  findAll(): FaqItemEntity[];
  search(query: string): FaqItemEntity[];
}
