"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function MobileFeaturesSection() {
  const { t } = useLanguage();

  const features = [
    t("features.f1"),
    t("features.f3"),
    t("features.f2"),
    t("features.f4"),
  ];

  return (
    <section id="ly-do-lua-chon" className="relative scroll-mt-[64px] pt-12 pb-0 theme-bg overflow-hidden transition-colors duration-300">
      {/* Background Concentric Tech Grid */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none z-0">
        <svg className="w-[400px] h-[400px]" viewBox="0 0 100 100">
          <circle cx="50" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-cyan-500" />
          <circle cx="50" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500" />
        </svg>
      </div>

      {/* Section Header */}
      <div className="relative z-10 px-5 mb-8 text-center space-y-2">
        <h2 className="text-2xl sm:text-[36px] font-bold theme-text tracking-tight">
          {t("features.title")}
        </h2>
        <p className="theme-muted text-sm sm:text-[16px] font-normal leading-relaxed max-w-xs sm:max-w-md mx-auto">
          {t("features.subtitle")}
        </p>
      </div>

      {/* Main Interactive Feature Container */}
      <div className="relative z-10 px-5 mb-8 space-y-6">
        {/* Front 8K HD Scooter Dashboard Image */}
        <div className="relative w-full max-w-[340px] aspect-[4/3] mx-auto">
          <Image
            src="/section/sec2.png"
            alt="VinFast Klara Front Dashboard View"
            fill
            priority
            sizes="100vw"
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* Feature Callouts List (18px, Solid Full Border on Hover) */}
        <div className="grid grid-cols-1 gap-3.5">
          {features.map((text, idx) => (
            <div
              key={idx}
              className="border-2 border-dashed border-[#00a8ff] rounded-xl p-3.5 bg-white/80 dark:bg-transparent backdrop-blur-sm shadow-md text-sm sm:text-[18px] font-semibold theme-text leading-snug transition-all duration-300 hover:border-solid cursor-pointer"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Full-Width Cyan Announcement Banner (36px Font Size) */}
      <div className="relative z-20 w-full bg-[#00a8ff] py-8 px-4 text-center shadow-lg shadow-cyan-500/20">
        <h3 className="text-white text-xl sm:text-[36px] font-extrabold tracking-wider uppercase leading-snug">
          {t("features.banner")}
        </h3>
      </div>
    </section>
  );
}
