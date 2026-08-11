"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function DesktopHeroSection() {
  const { t } = useLanguage();

  return (
    <section id="gioi-thieu" className="relative w-full overflow-hidden bg-[#121526] scroll-mt-[80px]">
      {/* Full Viewport Height Container */}
      <div className="relative w-full min-h-[calc(100vh-80px)] h-[calc(100vh-80px)] flex items-center justify-center">
        <Image
          src="/section/Banner.png"
          alt="VinFast EV Background Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-95" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-10 grid grid-cols-12 gap-8 items-center h-full">
          {/* Left Column: Scooter Image */}
          <div className="col-span-7 relative flex justify-center items-center h-full">
            <div className="relative w-full max-w-[850px] xl:max-w-[960px] aspect-[4/3] translate-y-[10%] animate-in fade-in zoom-in-95 duration-500">
              {/* Soft Dark Floor Shadow */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/80 blur-2xl rounded-full pointer-events-none" />
              
              <Image
                src="/section/sec1.png"
                alt="VinFast Klara Electric Scooter"
                fill
                priority
                sizes="60vw"
                className="object-contain relative z-10"
              />
            </div>
          </div>

          {/* Right Column: Headline Text */}
          <div className="col-span-5 text-center -translate-y-[20%] flex justify-center">
            <h1 className="text-[60px] xl:text-[76px] font-extrabold text-white tracking-tight uppercase leading-[1.1] drop-shadow-2xl">
              {t("hero.title1")} <br />
              {t("hero.title2")} <br />
              {t("hero.title3")}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
