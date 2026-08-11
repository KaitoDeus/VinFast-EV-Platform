"use client";

import React from "react";
import Image from "next/image";
import { Gauge, Zap, Compass, Users, CheckCircle2 } from "lucide-react";
import { useCarSelector } from "@/hooks";

export function MobileTechSpecsSection() {
  const { models, selectedModel, selectModel } = useCarSelector();

  return (
    <section id="thong-so-ky-thuat" className="py-12 px-5 theme-bg border-t border-slate-800/40">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Khám phá dải sản phẩm
          </span>
          <h2 className="text-2xl font-extrabold theme-text tracking-tight">
            THÔNG SỐ KỸ THUẬT & DÒNG XE
          </h2>
          <p className="theme-muted text-xs font-light">
            Đa dạng phân khúc đáp ứng mọi nhu cầu di chuyển.
          </p>
        </div>

        {/* Mobile Horizontal Scroll Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {models.map((model) => {
            const isSelected = selectedModel.id === model.id;
            return (
              <button
                key={model.id}
                onClick={() => selectModel(model)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#00a8ff] text-white shadow-md scale-105"
                    : "theme-card theme-text border border-slate-800"
                }`}
              >
                {model.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Compact Card Spec Layout */}
        <div className="theme-card border rounded-2xl p-5 space-y-5 shadow-xl">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950/40 border border-slate-800/50">
            <Image
              src="/section/sec3.jpg"
              alt={selectedModel.name}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-cyan-400">
              {selectedModel.segment}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold theme-text">{selectedModel.name}</h3>
              <p className="text-primary font-bold text-base mt-0.5">{selectedModel.price}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 theme-muted text-[11px] mb-1">
                  <Gauge className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Công suất</span>
                </div>
                <div className="text-sm font-bold theme-text">{selectedModel.power}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 theme-muted text-[11px] mb-1">
                  <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Quãng đường</span>
                </div>
                <div className="text-sm font-bold theme-text">{selectedModel.range}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 theme-muted text-[11px] mb-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sạc nhanh</span>
                </div>
                <div className="text-sm font-bold theme-text">{selectedModel.chargeTime}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 theme-muted text-[11px] mb-1">
                  <Users className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Chỗ ngồi</span>
                </div>
                <div className="text-sm font-bold theme-text">{selectedModel.seats}</div>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <h4 className="text-[11px] font-bold uppercase tracking-wider theme-muted">Điểm nổi bật</h4>
              <div className="space-y-1">
                {selectedModel.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs theme-text">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
