"use client";

import React from "react";
import Image from "next/image";
import { Phone, Video, Sidebar, MoreHorizontal } from "lucide-react";
import { ConversationThread } from "@/domain/models";

interface ChatWindowHeaderProps {
  thread: ConversationThread;
}

export function ChatWindowHeader({ thread }: ChatWindowHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#f1f5f9] bg-white">
      {/* Client Profile Info */}
      <div className="flex items-center gap-3">
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

        <div className="space-y-0.5">
          <h4 className="text-sm font-bold text-[#1e293b] tracking-tight">{thread.clientName}</h4>
          <span className="text-[11px] font-normal text-[#94a3b8] block leading-none">
            {thread.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-1 text-[#94a3b8]">
        <button
          className="p-2 rounded-xl hover:bg-slate-50 hover:text-[#1e293b] transition-colors cursor-pointer"
          title="Phone Call"
        >
          <Phone className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded-xl hover:bg-slate-50 hover:text-[#1e293b] transition-colors cursor-pointer"
          title="Video Call"
        >
          <Video className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded-xl hover:bg-slate-50 hover:text-[#1e293b] transition-colors cursor-pointer"
          title="Toggle Details"
        >
          <Sidebar className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded-xl hover:bg-slate-50 hover:text-[#1e293b] transition-colors cursor-pointer"
          title="More Options"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
