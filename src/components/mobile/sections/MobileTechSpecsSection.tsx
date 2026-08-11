"use client";

import React from "react";
import Image from "next/image";

export function MobileTechSpecsSection() {
  const specCards = [
    {
      title: "Di chuyển được khoảng 80 km",
      desc: "Xe có thể di chuyển được khoảng 80 km sau một lần sạc đầy.",
      bg: "bg-[#E2ECF1]",
    },
    {
      title: "Tốc độ trung bình 30 km/h",
      desc: "Vận tốc tối đa 50 km/h phù hợp với đô thị.",
      bg: "bg-[#FDFFED]",
    },
    {
      title: "Cốp xe dung tích lớn hơn Honda Vision",
      desc: "Cốp xe dung tích lớn hơn Honda Vision.",
      bg: "bg-[#F1E2EC]",
    },
    {
      title: 'Klara "bất tử" khi lội nước',
      desc: "Với tiêu chuẩn IP57, về nguyên lý, động cơ điện của VinFast có thể ngâm nước 0,5m trong 30 phút mà không ảnh hưởng.",
      bg: "bg-[#FFE6D8]",
    },
  ];

  return (
    <section id="thong-so-ky-thuat" className="scroll-mt-[64px] py-10 px-5 theme-bg transition-colors duration-300">
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
