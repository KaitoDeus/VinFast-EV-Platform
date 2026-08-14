"use client";

import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { ConversationThread } from "@/types";

interface ChatMessagesListProps {
  thread: ConversationThread;
}

export function ChatMessagesList({ thread }: ChatMessagesListProps) {
  return (
    <div className="flex-1 p-6 space-y-5 overflow-y-auto bg-[#1f1f1f]">
      {/* Date Divider Pill */}
      <div className="flex items-center justify-center my-2">
        <span className="px-4 py-1 rounded-full text-[11px] font-medium bg-[#2a2a2a] text-slate-300">
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
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-neutral-700 mt-1">
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
                <div className="relative w-52 h-36 rounded-2xl overflow-hidden border border-[#333333] shadow-xs my-1">
                  <Image
                    src={msg.imageUrl}
                    alt="Uploaded attachment"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Message text bubble (Charcoal Slate #2a2a2a) */}
              {msg.text && (
                <div
                  className={`px-4 py-3 rounded-2xl text-xs font-medium leading-relaxed shadow-2xs ${
                    isClient
                      ? "bg-[#2a2a2a] text-white rounded-tl-xs"
                      : "bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-tr-xs"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              )}

              {/* Timestamp & Status */}
              <div className="flex items-center gap-1 text-[10px] font-medium text-slate-400 px-1">
                <span>{msg.timestamp}</span>
                {!isClient && <CheckCheck className="w-3.5 h-3.5 text-slate-400" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
