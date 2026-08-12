export interface ChatBubble {
  id: string;
  sender: "user" | "client";
  text?: string;
  imageUrl?: string;
  timestamp: string; // e.g. "09:20 AM"
  status?: "sent" | "delivered" | "read";
}

export interface ConversationThread {
  id: string;
  clientName: string;
  avatar: string;
  timeGroup: "Today" | "Yesterday";
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isOnline?: boolean;
  messages: ChatBubble[];
}

export class MessageModel {
  constructor(public readonly thread: ConversationThread) {}
}
