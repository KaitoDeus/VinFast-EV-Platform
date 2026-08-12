import { ConversationThread } from "../../models";
import { IMessageRepository } from "../IMessageRepository";

const RAW_THREADS: ConversationThread[] = [
  {
    id: "MSG-001",
    clientName: "Helen Martinez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Today",
    lastMessage: "Just confirming my booking for the Mazda 3 next week.",
    timestamp: "04:10 PM",
    unreadCount: 5,
    isOnline: true,
    messages: [
      { id: "m1", sender: "client", text: "Just confirming my booking for the Mazda 3 next week.", timestamp: "04:10 PM" },
    ],
  },
  {
    id: "MSG-002",
    clientName: "Alice Johnson",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Today",
    lastMessage: "Hi, I just returned the Toyota Corolla. Can you confirm the drop-off?",
    timestamp: "10:10 AM",
    unreadCount: 5,
    isOnline: true,
    messages: [
      { id: "m1", sender: "client", text: "Hi, I just returned the Toyota Corolla. Can you confirm the drop-off?", timestamp: "10:10 AM" },
    ],
  },
  {
    id: "MSG-003",
    clientName: "George Clark",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Today",
    lastMessage: "No, that's all for now. Thanks for the quick response! I really appreciate it!",
    timestamp: "09:37 AM",
    unreadCount: 0,
    isOnline: true,
    messages: [
      {
        id: "m1",
        sender: "client",
        text: "Hi, I noticed a small scratch on the Audi Q7. Can you note it down?",
        timestamp: "09:20 AM",
      },
      {
        id: "m2",
        sender: "user",
        text: "Hello George, thank you for informing us. Can you please send a picture of the scratch?",
        timestamp: "09:25 AM",
        status: "read",
      },
      {
        id: "m3",
        sender: "client",
        text: "Sure, give me a moment.",
        timestamp: "09:27 AM",
      },
      {
        id: "m4",
        sender: "client",
        text: "Here is the picture.",
        imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80",
        timestamp: "09:30 AM",
      },
      {
        id: "m5",
        sender: "user",
        text: "Got it. We'll note it down and make sure it's documented. Is there anything else you need assistance with?",
        timestamp: "09:35 AM",
        status: "read",
      },
      {
        id: "m6",
        sender: "client",
        text: "No, that's all for now. Thanks for the quick response! I really appreciate it!",
        timestamp: "09:37 AM",
      },
    ],
  },
  {
    id: "MSG-004",
    clientName: "Bob Smith",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Today",
    lastMessage: "Can I extend my rental for the Honda Civic for another day?",
    timestamp: "09:15 AM",
    unreadCount: 5,
    isOnline: false,
    messages: [
      { id: "m1", sender: "client", text: "Can I extend my rental for the Honda Civic for another day?", timestamp: "09:15 AM" },
    ],
  },
  {
    id: "MSG-005",
    clientName: "Charlie Davis",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Today",
    lastMessage: "The Ford Focus needs maintenance. The engine light is on.",
    timestamp: "08:45 AM",
    unreadCount: 0,
    isOnline: true,
    messages: [
      { id: "m1", sender: "client", text: "The Ford Focus needs maintenance. The engine light is on.", timestamp: "08:45 AM" },
    ],
  },
  {
    id: "MSG-006",
    clientName: "Fiona Brown",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Yesterday",
    lastMessage: "The BMW X5 is fantastic! What are the rates for a longer rental?",
    timestamp: "05:00 PM",
    unreadCount: 0,
    isOnline: false,
    messages: [
      { id: "m1", sender: "client", text: "The BMW X5 is fantastic! What are the rates for a longer rental?", timestamp: "05:00 PM" },
    ],
  },
  {
    id: "MSG-007",
    clientName: "Diana White",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Yesterday",
    lastMessage: "Thank you for the smooth rental process. I will rent again soon!",
    timestamp: "03:00 PM",
    unreadCount: 0,
    isOnline: true,
    messages: [
      { id: "m1", sender: "client", text: "Thank you for the smooth rental process. I will rent again soon!", timestamp: "03:00 PM" },
    ],
  },
  {
    id: "MSG-008",
    clientName: "Edward Green",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Yesterday",
    lastMessage: "I left my sunglasses in the Nissan Altima. Can you check?",
    timestamp: "10:00 AM",
    unreadCount: 0,
    isOnline: false,
    messages: [
      { id: "m1", sender: "client", text: "I left my sunglasses in the Nissan Altima. Can you check?", timestamp: "10:00 AM" },
    ],
  },
  {
    id: "MSG-009",
    clientName: "Ivan Rodriguez",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=250&q=80",
    timeGroup: "Yesterday",
    lastMessage: "I appreciate the quick response and excellent service. Looking forward to my next rental!",
    timestamp: "08:20 AM",
    unreadCount: 0,
    isOnline: true,
    messages: [
      { id: "m1", sender: "client", text: "I appreciate the quick response and excellent service. Looking forward to my next rental!", timestamp: "08:20 AM" },
    ],
  },
];

export class InMemoryMessageRepository implements IMessageRepository {
  private readonly threads: ConversationThread[];

  constructor() {
    this.threads = RAW_THREADS;
  }

  public findAllThreads(): ConversationThread[] {
    return [...this.threads];
  }

  public findThreadById(id: string): ConversationThread | undefined {
    return this.threads.find((t) => t.id === id);
  }
}
