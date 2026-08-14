"use client";

import React, { useState } from "react";
import { MOCK_MESSAGE_THREADS } from "@/data";
import { ConversationThread, ChatMessage } from "@/types";
import {
  ChatSidebarList,
  ChatWindowHeader,
  ChatMessagesList,
  ChatInputBar,
} from "@/components/dashboard/messages";

export default function MessagesPage() {
  const [threads, setThreads] = useState<ConversationThread[]>(MOCK_MESSAGE_THREADS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedThreadId, setSelectedThreadId] = useState("MSG-003");
  const [showMobileChat, setShowMobileChat] = useState(false);

  const filteredThreads = threads.filter((t) =>
    t.clientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedThread =
    filteredThreads.find((t) => t.id === selectedThreadId) ||
    threads.find((t) => t.id === "MSG-003") ||
    threads[0];

  const handleSelectThread = (thread: ConversationThread) => {
    setSelectedThreadId(thread.id);
    setShowMobileChat(true);
  };

  const handleSendMessage = (text: string) => {
    if (!selectedThread) return;
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "read",
    };

    setThreads((prev) =>
      prev.map((t) =>
        t.id === selectedThread.id
          ? {
              ...t,
              lastMessage: text,
              timestamp: newMsg.timestamp,
              messages: [...t.messages, newMsg],
            }
          : t
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Main 2-Column Chat Layout matching Wheelzie mockup with Mobile Responsive toggling */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Conversations Sidebar (~4 cols) - Hidden on mobile when chat is active */}
        <div
          className={`lg:col-span-4 ${
            showMobileChat ? "hidden lg:block" : "block"
          }`}
        >
          <ChatSidebarList
            threads={filteredThreads}
            selectedThreadId={selectedThread?.id || "MSG-003"}
            onSelectThread={handleSelectThread}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Right Active Chat Window Card (~8 cols) - Full width on mobile when active */}
        <div
          className={`lg:col-span-8 bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-xs flex flex-col h-[640px] sm:h-[700px] justify-between overflow-hidden ${
            showMobileChat ? "block" : "hidden lg:flex"
          }`}
        >
          {selectedThread ? (
            <>
              <ChatWindowHeader
                thread={selectedThread}
                onBack={() => setShowMobileChat(false)}
              />
              <ChatMessagesList thread={selectedThread} />
              <ChatInputBar onSendMessage={handleSendMessage} />
            </>
          ) : (
            <div className="flex items-center justify-center h-full p-12 text-center">
              <p className="text-sm font-bold text-white">Select a conversation to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
