"use client";

import React from "react";
import Image from "next/image";

export function DesktopFeaturesSection() {
  return (
    <section id="ly-do-lua-chon" className="relative scroll-mt-[80px] pt-16 pb-0 theme-bg overflow-hidden transition-colors duration-300">
      {/* Background Concentric Tech Grid & Dial Graphic (Positioned Below Header Text) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-30 pointer-events-none z-0">
        <svg className="w-[800px] h-[800px]" viewBox="0 0 100 100">
          <circle cx="50" cy="65" r="38" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" className="text-cyan-500" />
          <circle cx="50" cy="65" r="28" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-cyan-500" />
          <circle cx="50" cy="65" r="18" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 1" className="text-cyan-500" />
        </svg>
      </div>

      {/* Section Header (Cleanly Above the Circle Arc) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 mb-12 text-center">
        <h2 className="text-[36px] font-bold theme-text tracking-tight mb-3">
          Mẫu xe máy điện thông minh đầu tiên
        </h2>
        <p className="theme-muted text-[16px] font-normal max-w-2xl mx-auto leading-relaxed">
          Đây là dòng xe được tích hợp nhiều công nghệ hiện đại bên trong thiết kế điệu đà nhưng giá bán lại phù hợp với đại đa số người Việt
        </p>
      </div>

      {/* Interactive Front Scooter Dashboard & Callouts Grid */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 mb-0">
        <div className="grid grid-cols-12 gap-4 items-center min-h-[480px]">
          {/* Left Feature Callouts Column */}
          <div className="col-span-3 space-y-20 flex flex-col justify-center h-full py-4 z-20">
            {/* Left Top Feature */}
            <div className="border-2 border-dashed border-[#00a8ff] rounded-2xl p-4 bg-white/80 dark:bg-transparent backdrop-blur-sm shadow-md transition-all duration-300 hover:border-solid hover:bg-white dark:hover:bg-white/10 cursor-pointer">
              <p className="text-[18px] font-semibold theme-text leading-snug">
                Động cơ điện công nghệ Bosch cho lượng khí thải CO2 bằng 0
              </p>
            </div>

            {/* Left Bottom Feature */}
            <div className="border-2 border-dashed border-[#00a8ff] rounded-2xl p-4 bg-white/80 dark:bg-transparent backdrop-blur-sm shadow-md transition-all duration-300 hover:border-solid hover:bg-white dark:hover:bg-white/10 cursor-pointer">
              <p className="text-[18px] font-semibold theme-text leading-snug">
                Xe hỗ trợ các kết nối 3G, Bluetooth và định vị GPS
              </p>
            </div>
          </div>

          {/* Center Front 8K HD Scooter Dashboard Image (No zoom hover effect) */}
          <div className="col-span-6 relative flex justify-center items-end h-full">
            <div className="relative w-full max-w-[560px] aspect-[4/3] -mb-1">
              <Image
                src="/section/sec2.png"
                alt="VinFast Klara Front Dashboard View"
                fill
                priority
                sizes="50vw"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Feature Callouts Column */}
          <div className="col-span-3 space-y-20 flex flex-col justify-center h-full py-4 z-20">
            {/* Right Top Feature */}
            <div className="border-2 border-dashed border-[#00a8ff] rounded-2xl p-4 bg-white/80 dark:bg-transparent backdrop-blur-sm shadow-md transition-all duration-300 hover:border-solid hover:bg-white dark:hover:bg-white/10 cursor-pointer">
              <p className="text-[18px] font-semibold theme-text leading-snug">
                Kiểm soát bằng smartphone
              </p>
            </div>

            {/* Right Bottom Feature */}
            <div className="border-2 border-dashed border-[#00a8ff] rounded-2xl p-4 bg-white/80 dark:bg-transparent backdrop-blur-sm shadow-md transition-all duration-300 hover:border-solid hover:bg-white dark:hover:bg-white/10 cursor-pointer">
              <p className="text-[18px] font-semibold theme-text leading-snug">
                Màn hình LED, 4,5 inch hiển thị thông tin trực quan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Cyan Announcement Banner (36px Font Size) */}
      <div className="relative z-20 w-full bg-[#00a8ff] py-10 px-4 shadow-lg shadow-cyan-500/20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h3 className="text-white text-[36px] font-extrabold tracking-wider uppercase leading-tight">
            LÀ SẢN PHẨM TỰ VINFAST SẢN XUẤT, KHÔNG PHẢI LẮP RÁP
          </h3>
        </div>
      </div>
    </section>
  );
}
