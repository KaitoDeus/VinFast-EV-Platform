"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function TechSpecsSection() {
  const { t } = useLanguage();

  const specCards = [
    {
      title: t("specs.card1.title"),
      desc: t("specs.card1.desc"),
      bg: "bg-[#E2ECF1]",
    },
    {
      title: t("specs.card2.title"),
      desc: t("specs.card2.desc"),
      bg: "bg-[#FDFFED]",
    },
    {
      title: t("specs.card3.title"),
      desc: t("specs.card3.desc"),
      bg: "bg-[#F1E2EC]",
    },
    {
      title: t("specs.card4.title"),
      desc: t("specs.card4.desc"),
      bg: "bg-[#FFE6D8]",
    },
  ];

  return (
    <section id="specs" className="scroll-mt-[64px] py-10 px-5 theme-bg transition-colors duration-300">
      <div className="space-y-6">
        {/* Mobile Flipped 8K HD Scooter Cutout */}
        <div className="relative w-full max-w-[490px] aspect-[4/3] mx-auto p-0">
          <Image
            src="/section/sec3.png"
            alt="VinFast Klara Rear View Performance & Range"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center drop-shadow-xl"
          />
        </div>

        {/* 4 Colored Specification Callout Cards (Title: 18px, Desc: 16px) */}
        <div className="space-y-3.5">
          {specCards.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-[15px] ${card.bg} border border-[#CDCDCD] shadow-sm space-y-1`}
            >
              <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
                {card.title}
              </h3>
              <p className="text-[16px] font-normal text-slate-800 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TechSpecsSection as MobileTechSpecsSection };
