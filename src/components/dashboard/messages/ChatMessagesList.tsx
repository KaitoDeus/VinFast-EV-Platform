"use client";

import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { ConversationThread } from "@/domain/models";

interface ChatMessagesListProps {
  thread: ConversationThread;
}

export function ChatMessagesList({ thread }: ChatMessagesListProps) {
  return (
    <div className="flex-1 p-6 space-y-5 overflow-y-auto bg-white">
      {/* Date Divider Pill */}
      <div className="flex items-center justify-center my-2">
        <span className="px-4 py-1 rounded-full text-[11px] font-medium bg-[#f1f5f9] text-[#94a3b8]">
          Today
        </span>
      </div>

      {/* Messages Timeline */}
      {thread.messages.map((msg) => {
        const isClient = msg.sender === "client";

        return (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${isClient ? "justify-start" : "justify-end"}`}
          >
            {isClient && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-100 mt-1">
                <Image
                  src={thread.avatar}
                  alt={thread.clientName}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            )}

            <div className={`space-y-1.5 max-w-[70%] ${isClient ? "items-start" : "items-end flex flex-col"}`}>
              {/* Image attachment card if present */}
              {msg.imageUrl && (
                <div className="relative w-52 h-36 rounded-2xl overflow-hidden border border-slate-100 shadow-xs my-1">
                  <Image
                    src={msg.imageUrl}
                    alt="Uploaded attachment"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Message text bubble */}
              {msg.text && (
                <div
                  className={`px-4 py-3 rounded-2xl text-xs font-medium leading-relaxed shadow-2xs ${
                    isClient
                      ? "bg-[#f1f5f9] text-[#1e293b] rounded-tl-xs"
                      : "bg-[#bae6fd] text-[#1e293b] rounded-tr-xs"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              )}

              {/* Timestamp & Status */}
              <div className="flex items-center gap-1 text-[10px] font-medium text-[#94a3b8] px-1">
                <span>{msg.timestamp}</span>
                {!isClient && <CheckCheck className="w-3.5 h-3.5 text-[#00a8ff]" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
