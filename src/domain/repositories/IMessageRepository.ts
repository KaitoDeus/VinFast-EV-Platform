import { ConversationThread } from "../models";

export interface IMessageRepository {
  findAllThreads(): ConversationThread[];
  findThreadById(id: string): ConversationThread | undefined;
}
