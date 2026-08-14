"use client";

import React from "react";
import Image from "next/image";
import { Phone, Video, Sidebar, MoreHorizontal, ArrowLeft } from "lucide-react";
import { ConversationThread } from "@/types";

interface ChatWindowHeaderProps {
  thread: ConversationThread;
  onBack?: () => void;
}

export function ChatWindowHeader({ thread, onBack }: ChatWindowHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-[#333333] bg-[#1f1f1f]">
      {/* Client Profile Info & Mobile Back Button */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-[#2a2a2a] transition-colors lg:hidden cursor-pointer shrink-0"
            title="Back to conversations"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-neutral-700">
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

        <div className="space-y-0.5 min-w-0">
          <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-[140px] sm:max-w-none">
            {thread.clientName}
          </h4>
          <span className="text-[10px] sm:text-[11px] font-normal text-slate-400 block leading-none">
            {thread.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-0.5 sm:gap-1 text-slate-400">
        <button
          className="p-1.5 sm:p-2 rounded-xl hover:bg-[#2a2a2a] hover:text-white transition-colors cursor-pointer"
          title="Phone Call"
        >
          <Phone className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 sm:p-2 rounded-xl hover:bg-[#2a2a2a] hover:text-white transition-colors cursor-pointer hidden sm:block"
          title="Video Call"
        >
          <Video className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 sm:p-2 rounded-xl hover:bg-[#2a2a2a] hover:text-white transition-colors cursor-pointer hidden md:block"
          title="Toggle Details"
        >
          <Sidebar className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 sm:p-2 rounded-xl hover:bg-[#2a2a2a] hover:text-white transition-colors cursor-pointer"
          title="More Options"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
