"use client";

import React from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { ConversationThread } from "@/types";
import { useLanguage } from "@/components/language-provider";

interface ChatSidebarListProps {
  threads: ConversationThread[];
  selectedThreadId: string;
  onSelectThread: (t: ConversationThread) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function ChatSidebarList({
  threads,
  selectedThreadId,
  onSelectThread,
  searchQuery,
  onSearchChange,
}: ChatSidebarListProps) {
  const { t } = useLanguage();
  const todayThreads = threads.filter((t) => t.timeGroup === "Today");
  const yesterdayThreads = threads.filter((t) => t.timeGroup === "Yesterday");

  return (
    <div className="space-y-4">
      {/* Search & Action Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t("messages.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] outline-none focus:ring-2 focus:ring-[#38bdf8] text-white font-medium placeholder:text-slate-400 shadow-2xs"
          />
        </div>

        <button
          className="p-2.5 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-slate-300 hover:text-white hover:bg-[#333333] transition-colors shadow-2xs cursor-pointer"
          title="Filter"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>

        <button
          className="w-9 h-9 rounded-xl bg-[#ff3366] hover:bg-[#e02654] text-white flex items-center justify-center shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          title="New Message"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Conversations List */}
      <div className="space-y-4 max-h-[640px] overflow-y-auto pr-1">
        {/* Today Section */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider">
            {t("messages.today")}
          </span>
          <div className="space-y-1">
            {todayThreads.map((thread) => {
              const isSelected = thread.id === selectedThreadId;
              return (
                <button
                  key={thread.id}
                  onClick={() => onSelectThread(thread)}
                  className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#2a2a2a] border-[#38bdf8]/40 shadow-sm"
                      : "bg-[#1f1f1f] border-[#333333] hover:bg-[#262626]"
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-700">
                    <Image
                      src={thread.avatar}
                      alt={thread.clientName}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                    {thread.isOnline && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#1f1f1f] absolute bottom-0 right-0" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h4 className="text-xs font-bold text-white tracking-tight truncate">
                        {thread.clientName}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {thread.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 truncate font-normal">
                      {thread.lastMessage}
                    </p>
                  </div>

                  {thread.unreadCount && thread.unreadCount > 0 ? (
                    <span className="w-4 h-4 rounded-full bg-[#ff3366] text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                      {thread.unreadCount}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Yesterday Section */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 px-1 uppercase tracking-wider">
            {t("messages.yesterday")}
          </span>
          <div className="space-y-1">
            {yesterdayThreads.map((thread) => {
              const isSelected = thread.id === selectedThreadId;
              return (
                <button
                  key={thread.id}
                  onClick={() => onSelectThread(thread)}
                  className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#2a2a2a] border-[#38bdf8]/40 shadow-sm"
                      : "bg-[#1f1f1f] border-[#333333] hover:bg-[#262626]"
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-700">
                    <Image
                      src={thread.avatar}
                      alt={thread.clientName}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                    {thread.isOnline && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#1f1f1f] absolute bottom-0 right-0" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h4 className="text-xs font-bold text-white tracking-tight truncate">
                        {thread.clientName}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {thread.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 truncate font-normal">
                      {thread.lastMessage}
                    </p>
                  </div>

                  {thread.unreadCount && thread.unreadCount > 0 ? (
                    <span className="w-4 h-4 rounded-full bg-[#ff3366] text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                      {thread.unreadCount}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
