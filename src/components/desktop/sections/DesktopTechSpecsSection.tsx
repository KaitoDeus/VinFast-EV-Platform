"use client";

import React from "react";
import Image from "next/image";

export function DesktopTechSpecsSection() {
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

          {/* Right Column: 4 Specification Callout Cards Stack (Title: 18px, Desc: 16px) */}
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
