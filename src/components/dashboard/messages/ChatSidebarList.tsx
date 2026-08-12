"use client";

import React from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { ConversationThread } from "@/domain/models";

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
  const todayThreads = threads.filter((t) => t.timeGroup === "Today");
  const yesterdayThreads = threads.filter((t) => t.timeGroup === "Yesterday");

  return (
    <div className="space-y-4">
      {/* Pure White Search & Action Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search for messages"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white border border-[#e2e8f0] outline-none focus:ring-2 focus:ring-[#00a8ff] text-[#1e293b] font-medium placeholder:text-[#94a3b8] shadow-2xs"
          />
        </div>

        <button
          className="p-2.5 rounded-xl border border-[#e2e8f0] bg-white text-[#64748b] hover:text-[#00a8ff] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
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
          <span className="text-[11px] font-bold text-[#1e293b] px-1 uppercase tracking-wider">
            Today ({todayThreads.length})
          </span>

          <div className="space-y-2">
            {todayThreads.map((thread) => {
              const isSelected = thread.id === selectedThreadId;

              return (
                <div
                  key={thread.id}
                  onClick={() => onSelectThread(thread)}
                  className={`p-3.5 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#eef6fc] border border-[#bae6fd] shadow-2xs"
                      : "bg-white border border-[#f1f5f9] hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-100">
                        <Image
                          src={thread.avatar}
                          alt={thread.clientName}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                        {thread.isOnline && (
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0" />
                        )}
                      </div>

                      <div className="space-y-0.5 min-w-0">
                        <h5 className="font-bold text-[#1e293b] text-xs leading-snug truncate">
                          {thread.clientName}
                        </h5>
                        <p className="text-[11px] text-[#94a3b8] font-normal leading-tight truncate">
                          {thread.lastMessage}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={`text-[10px] font-bold ${
                          thread.unreadCount && thread.unreadCount > 0
                            ? "text-[#ff3366]"
                            : "text-[#94a3b8]"
                        }`}
                      >
                        {thread.timestamp}
                      </span>
                      {thread.unreadCount && thread.unreadCount > 0 ? (
                        <span className="w-4 h-4 rounded-full bg-[#ff3366] text-white text-[9px] font-bold flex items-center justify-center">
                          {thread.unreadCount}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Yesterday Section */}
        <div className="space-y-2 pt-2 border-t border-slate-200/60">
          <span className="text-[11px] font-bold text-[#1e293b] px-1 uppercase tracking-wider">
            Yesterday ({yesterdayThreads.length})
          </span>

          <div className="space-y-2">
            {yesterdayThreads.map((thread) => {
              const isSelected = thread.id === selectedThreadId;

              return (
                <div
                  key={thread.id}
                  onClick={() => onSelectThread(thread)}
                  className={`p-3.5 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#eef6fc] border border-[#bae6fd] shadow-2xs"
                      : "bg-white border border-[#f1f5f9] hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-100">
                        <Image
                          src={thread.avatar}
                          alt={thread.clientName}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>

                      <div className="space-y-0.5 min-w-0">
                        <h5 className="font-bold text-[#1e293b] text-xs leading-snug truncate">
                          {thread.clientName}
                        </h5>
                        <p className="text-[11px] text-[#94a3b8] font-normal leading-tight truncate">
                          {thread.lastMessage}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-[10px] font-medium text-[#94a3b8]">
                        {thread.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
