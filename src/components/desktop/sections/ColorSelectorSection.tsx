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
    <section id="colors" className="scroll-mt-[80px] theme-bg transition-colors duration-300">
      {/* Top Banner Container with Dark Showroom Background */}
      <div className="relative w-full bg-slate-950 pt-20 pb-48 px-8 overflow-hidden">
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

        {/* Watermark VinFast "V" Logo Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
          <svg className="w-[550px] h-[550px] text-white" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 85L15 20h20l15 45 15-45h20L50 85z" />
          </svg>
        </div>

        {/* Header Text Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-2">
          <h2 className="text-[60px] font-extrabold text-[#00a8ff] tracking-tight uppercase leading-none">
            {t("colors.headline")}
          </h2>
          <p className="text-[16px] font-normal text-slate-200 tracking-wide">
            {t("colors.subtitle")}
          </p>
        </div>
      </div>

      {/* Overlapping 6-Scooter Lineup Image Container */}
      <div className="relative z-20 max-w-[1140px] mx-auto px-8 -mt-40">
        <div className="relative w-full max-w-[1020px] aspect-[21/9] mx-auto">
          <Image
            src="/section/sec4.png"
            alt="VinFast Klara 6 Màu Sơn Ngoại Thất"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1020px"
            className="object-contain object-center drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom 4 Value Proposition Heritage Columns */}
      <div className="max-w-[1140px] mx-auto pt-12 pb-20 px-8">
        <div className="grid grid-cols-2 gap-x-16 gap-y-10">
          {valueProps.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <ShieldCheck className="w-10 h-10 text-[#00a8ff]" strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <h3 className="text-[35px] font-bold theme-text tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] font-normal theme-text leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ColorSelectorSection as DesktopColorSelectorSection };
