import { IMessageRepository } from "../repositories";
import { ConversationThread } from "../models";

export class MessageService {
  constructor(private readonly repository: IMessageRepository) {}

  public getAllThreads(): ConversationThread[] {
    return this.repository.findAllThreads();
  }

  public getThreadById(id: string): ConversationThread | undefined {
    return this.repository.findThreadById(id);
  }
}
