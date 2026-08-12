import { ServiceContainer } from "@/infrastructure/di";
import { FaqItem } from "@/types";

export class FaqService {
  public static getAllFaqs(): FaqItem[] {
    return ServiceContainer.getInstance()
      .getFaqService()
      .getAllFaqs()
      .map((f) => f.toJSON());
  }
}
