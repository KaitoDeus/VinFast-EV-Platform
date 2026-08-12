import { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { FaqItemEntity } from "@/domain/models";

export function useFaqAccordion(initialOpenIndex: number | null = 0) {
  const faqService = ServiceContainer.getInstance().getFaqService();
  const faqs: FaqItemEntity[] = faqService.getAllFaqs();
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return {
    faqs,
    openIndex,
    toggleFaq,
  };
}
