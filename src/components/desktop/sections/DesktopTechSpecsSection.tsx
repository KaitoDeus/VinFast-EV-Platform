"use client";

import React from "react";
import Image from "next/image";
import { Gauge, Zap, Compass, Users, CheckCircle2 } from "lucide-react";
import { useCarSelector } from "@/hooks";

export function DesktopTechSpecsSection() {
  const { models, selectedModel, selectModel } = useCarSelector();

  return (
    <section id="thong-so-ky-thuat" className="scroll-mt-[80px] py-24 theme-bg border-t border-slate-800/40">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
            Khám phá dải sản phẩm
          </h2>
          <p className="text-4xl font-extrabold theme-text tracking-tight">
            THÔNG SỐ KỸ THUẬT & DÒNG XE
          </p>
          <p className="theme-muted text-base font-light">
            Đa dạng phân khúc đáp ứng hoàn hảo mọi nhu cầu di chuyển cá nhân và gia đình.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-14">
          {models.map((model) => {
            const isSelected = selectedModel.id === model.id;
            return (
              <button
                key={model.id}
                onClick={() => selectModel(model)}
                className={`px-7 py-3 rounded-full text-base font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#00a8ff] text-white shadow-xl shadow-cyan-500/30 scale-105"
                    : "theme-card theme-text border border-slate-800 hover:border-primary/50"
                }`}
              >
                {model.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-12 gap-10 items-center theme-card border rounded-3xl p-10 shadow-2xl">
          <div className="col-span-6 relative">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950/40 border border-slate-800/50">
              <Image
                src="/section/sec3.jpg"
                alt={selectedModel.name}
                fill
                sizes="50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-cyan-400">
                {selectedModel.segment}
              </div>
            </div>
          </div>

          <div className="col-span-6 space-y-7">
            <div>
              <h3 className="text-3xl font-extrabold theme-text mb-1.5">
                {selectedModel.name}
              </h3>
              <p className="text-primary font-bold text-xl">{selectedModel.price}</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2 theme-muted text-xs mb-1.5">
                  <Gauge className="w-4 h-4 text-primary" />
                  <span>Công suất</span>
                </div>
                <div className="text-lg font-bold theme-text">{selectedModel.power}</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2 theme-muted text-xs mb-1.5">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Quãng đường</span>
                </div>
                <div className="text-lg font-bold theme-text">{selectedModel.range}</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2 theme-muted text-xs mb-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Sạc nhanh</span>
                </div>
                <div className="text-lg font-bold theme-text">{selectedModel.chargeTime}</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2 theme-muted text-xs mb-1.5">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Chỗ ngồi</span>
                </div>
                <div className="text-lg font-bold theme-text">{selectedModel.seats}</div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider theme-muted">Điểm nổi bật</h4>
              <div className="space-y-2">
                {selectedModel.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm theme-text">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
