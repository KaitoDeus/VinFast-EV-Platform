"use client";

import React from "react";
import Image from "next/image";

export function MobileHeroSection() {
  return (
    <section id="gioi-thieu" className="relative w-full overflow-hidden bg-[#121526] scroll-mt-[64px]">
      {/* Full Viewport Height Mobile Container */}
      <div className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-center px-6 py-10">
        <Image
          src="/section/Banner.png"
          alt="VinFast EV Mobile Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 backdrop-brightness-95" />

        {/* Mobile Content Stack */}
        <div className="relative z-10 space-y-6 text-center my-auto">
          {/* Headline Text (Centered & Shifted Up 20%) */}
          <div className="-translate-y-8 text-center">
            <h1 className="text-4xl sm:text-[60px] font-extrabold text-white tracking-tight uppercase leading-tight">
              BỀN ĐẸP <br />
              THÔNG MINH <br />
              SINH THÁI
            </h1>
          </div>

          {/* Scooter Image (4x SSAA Anti-Aliased Image) */}
          <div className="relative w-full max-w-[420px] aspect-[4/3] mx-auto translate-y-4">
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-black/80 blur-xl rounded-full pointer-events-none" />
            <Image
              src="/section/sec1_v2.png"
              alt="VinFast Klara Electric Scooter"
              fill
              priority
              sizes="100vw"
              className="object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
