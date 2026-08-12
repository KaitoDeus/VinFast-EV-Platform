import { FaqItem as IFaqItem } from "@/types";

export class FaqItemEntity implements IFaqItem {
  public readonly question: string;
  public readonly answer: string;

  constructor(data: IFaqItem) {
    this.question = data.question;
    this.answer = data.answer;
  }

  public matchesQuery(term: string): boolean {
    const q = term.toLowerCase();
    return (
      this.question.toLowerCase().includes(q) ||
      this.answer.toLowerCase().includes(q)
    );
  }

  public toJSON(): IFaqItem {
    return {
      question: this.question,
      answer: this.answer,
    };
  }
}
