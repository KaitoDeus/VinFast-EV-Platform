import { useState } from "react";
import { FaqService } from "@/services";

export function useFaqAccordion(initialOpenIndex: number | null = 0) {
  const faqs = FaqService.getAllFaqs();
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
