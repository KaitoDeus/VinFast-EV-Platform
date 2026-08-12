"use client";

import React, { useState } from "react";
import { ServiceContainer } from "@/infrastructure/di";
import { ConversationThread } from "@/domain/models";
import {
  ChatSidebarList,
  ChatWindowHeader,
  ChatMessagesList,
  ChatInputBar,
} from "@/components/dashboard/messages";

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedThreadId, setSelectedThreadId] = useState("MSG-003"); // Default to George Clark matching Wheelzie mockup

  const messageService = ServiceContainer.getInstance().getMessageService();
  const allThreads: ConversationThread[] = messageService.getAllThreads();

  const filteredThreads = allThreads.filter((t) =>
    t.clientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedThread =
    filteredThreads.find((t) => t.id === selectedThreadId) ||
    messageService.getThreadById("MSG-003") ||
    allThreads[0];

  const handleSendMessage = (text: string) => {
    if (!selectedThread) return;
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: "user" as const,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "read" as const,
    };
    selectedThread.messages.push(newMsg);
    setSelectedThreadId(selectedThread.id);
  };

  return (
    <div className="space-y-6">
      {/* Main 2-Column Chat Layout matching Wheelzie mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Conversations Sidebar (~4 cols) */}
        <div className="lg:col-span-4">
          <ChatSidebarList
            threads={filteredThreads}
            selectedThreadId={selectedThread?.id || "MSG-003"}
            onSelectThread={(t) => setSelectedThreadId(t.id)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Right Active Chat Window Card (~8 cols) aligned perfectly with left top search bar */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#f1f5f9] shadow-xs flex flex-col h-[700px] justify-between overflow-hidden">
          {selectedThread ? (
            <>
              <ChatWindowHeader thread={selectedThread} />
              <ChatMessagesList thread={selectedThread} />
              <ChatInputBar onSendMessage={handleSendMessage} />
            </>
          ) : (
            <div className="flex items-center justify-center h-full p-12 text-center">
              <p className="text-sm font-bold text-[#1e293b]">Select a conversation to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
