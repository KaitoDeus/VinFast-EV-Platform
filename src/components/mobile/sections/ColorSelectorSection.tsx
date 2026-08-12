"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function ColorSelectorSection() {
  const { t } = useLanguage();

  const valueProps = [
    {
      title: t("colors.prop1.title"),
      desc: t("colors.prop1.desc"),
    },
    {
      title: t("colors.prop2.title"),
      desc: t("colors.prop2.desc"),
    },
    {
      title: t("colors.prop3.title"),
      desc: t("colors.prop3.desc"),
    },
    {
      title: t("colors.prop4.title"),
      desc: t("colors.prop4.desc"),
    },
  ];

  return (
    <section id="colors" className="scroll-mt-[64px] theme-bg transition-colors duration-300">
      {/* Top Banner Container with Dark Showroom Background */}
      <div className="relative w-full bg-slate-950 pt-12 pb-32 px-5 overflow-hidden">
        {/* Background Showroom Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <Image
            src="/section/Banner.png"
            alt="VinFast Factory Showroom Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Gradient Mask */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />

        {/* Header Text Content */}
        <div className="relative z-10 text-center space-y-1.5">
          <h2 className="text-[36px] sm:text-[60px] font-extrabold text-[#00a8ff] tracking-tight uppercase leading-tight">
            {t("colors.headline")}
          </h2>
          <p className="text-[16px] font-normal text-slate-200 tracking-wide">
            {t("colors.subtitle")}
          </p>
        </div>
      </div>

      {/* Overlapping 6-Scooter Lineup Image Container */}
      <div className="relative z-20 px-4 -mt-24">
        <div className="relative w-full aspect-[21/9] mx-auto">
          <Image
            src="/section/sec4.png"
            alt="VinFast Klara 6 Màu Sơn Ngoại Thất"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center drop-shadow-xl"
          />
        </div>
      </div>

      {/* Bottom 4 Value Proposition Heritage Columns */}
      <div className="pt-8 pb-12 px-5 space-y-6">
        {valueProps.map((item, index) => (
          <div key={index} className="flex items-start gap-3.5">
            <div className="flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-8 h-8 text-[#00a8ff]" strokeWidth={1.8} />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-[24px] sm:text-[35px] font-bold theme-text tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] font-normal theme-text leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { ColorSelectorSection as MobileColorSelectorSection };
