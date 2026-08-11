"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function DesktopTechSpecsSection() {
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
    <section id="thong-so-ky-thuat" className="scroll-mt-[80px] py-16 theme-bg transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Column: Flipped 8K HD Scooter Cutout */}
          <div className="col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[900px] aspect-[4/3] flex items-center justify-center p-0">
              <Image
                src="/section/sec3.png"
                alt="VinFast Klara Rear View Performance & Range"
                fill
                priority
                sizes="50vw"
                className="object-contain object-center drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: 4 Specification Callout Cards Stack */}
          <div className="col-span-6 space-y-4">
            {specCards.map((card, index) => (
              <div
                key={index}
                className={`px-5 py-4 rounded-[15px] ${card.bg} border border-[#CDCDCD] shadow-sm`}
              >
                <h3 className="text-[18px] font-bold text-slate-900 tracking-tight mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[16px] font-normal text-slate-800 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
