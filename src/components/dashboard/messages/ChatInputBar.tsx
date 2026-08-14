"use client";

import React, { useState } from "react";
import { Smile, Paperclip, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface ChatInputBarProps {
  onSendMessage: (text: string) => void;
}

export function ChatInputBar({ onSendMessage }: ChatInputBarProps) {
  const { t } = useLanguage();
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText("");
  };

  return (
    <div className="p-4 bg-[#1f1f1f] border-t border-[#333333]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-2xl px-4 py-2 flex items-center gap-3"
      >
        {/* Emoji Button */}
        <button
          type="button"
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Add Emoji"
        >
          <Smile className="w-5 h-5" />
        </button>

        {/* Input Field */}
        <input
          type="text"
          placeholder={t("messages.typePlaceholder")}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 py-2 text-xs bg-transparent outline-none text-white placeholder:text-slate-400 font-normal"
        />

        {/* Attachment Button */}
        <button
          type="button"
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Attach File"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* Red Send Button */}
        <button
          type="submit"
          className="w-9 h-9 rounded-xl bg-[#ff3366] hover:bg-[#e02654] text-white flex items-center justify-center shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          title={t("messages.send")}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
