"use client";

import React, { useState } from "react";
import { Smile, Paperclip, Send } from "lucide-react";

interface ChatInputBarProps {
  onSendMessage: (text: string) => void;
}

export function ChatInputBar({ onSendMessage }: ChatInputBarProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText("");
  };

  return (
    <div className="p-4 bg-white border-t border-[#f1f5f9]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#f8fafc] border border-[#f1f5f9] rounded-2xl px-4 py-2 flex items-center gap-3"
      >
        {/* Emoji Button */}
        <button
          type="button"
          className="text-[#94a3b8] hover:text-[#1e293b] transition-colors cursor-pointer"
          title="Add Emoji"
        >
          <Smile className="w-5 h-5" />
        </button>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Type a message.."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 py-2 text-xs bg-transparent outline-none text-[#1e293b] placeholder:text-[#94a3b8] font-normal"
        />

        {/* Attachment Button */}
        <button
          type="button"
          className="text-[#94a3b8] hover:text-[#1e293b] transition-colors cursor-pointer"
          title="Attach File"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* Red Send Button */}
        <button
          type="submit"
          className="w-9 h-9 rounded-xl bg-[#ff3366] hover:bg-[#e02654] text-white flex items-center justify-center shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          title="Send Message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
