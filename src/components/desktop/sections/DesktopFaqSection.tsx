"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function DesktopFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      num: "01",
      question: "Xe sạc đầy đi được bao lâu?",
      answer: "Trong điều kiện tiêu chuẩn, VinFast Klara có thể di chuyển khoảng 80 km sau mỗi lần sạc đầy.",
    },
    {
      num: "02",
      question: "Có dễ dàng thay thế pin khi hết điện không?",
      answer: "Pin Lithium-ion của VinFast được thiết kế tháo rời dễ dàng, hỗ trợ đổi pin nhanh tại hệ thống trạm sạc V-GREEN toàn quốc.",
    },
    {
      num: "03",
      question: "Vận tốc tối đa mà xe đạt được là bao nhiêu?",
      answer: "Xe có thể đạt vận tốc tối đa lên tới 50 km/h, rất phù hợp và an toàn khi di chuyển trong đô thị.",
    },
    {
      num: "04",
      question: "Xe đi ngập nước tối đa bao nhiêu mét?",
      answer: "Động cơ đạt tiêu chuẩn chống nước IP57, có khả năng ngâm nước sâu 0,5m liên tục trong 30 phút mà vẫn hoạt động bình thường.",
    },
    {
      num: "05",
      question: "Dung tích cốp xe?",
      answer: "Cốp xe Klara có dung tích lớn lên tới 22 lít, đủ sức chứa 2 mũ bảo hiểm nửa đầu cùng nhiều vật dụng cá nhân.",
    },
    {
      num: "06",
      question: "Xe cần sạc thường xuyên khi chưa hết điện không?",
      answer: "Pin Lithium-ion cao cấp không bị hiện tượng chai pin khi sạc nhồi, bạn có thể sạc bất cứ lúc nào thuận tiện.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="cau-hoi-thuong-gap" className="scroll-mt-[80px] relative w-full bg-slate-950 py-20 px-8 overflow-hidden">
      {/* Background Showroom Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-luminosity">
        <Image
          src="/section/Banner.png"
          alt="VinFast Factory Showroom Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Gradient Mask */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/85 via-slate-950/90 to-slate-950" />

      {/* Watermark VinFast "V" Logo Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <svg className="w-[600px] h-[600px] text-white" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 85L15 20h20l15 45 15-45h20L50 85z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto space-y-12">
        {/* Header Title (36px font size) */}
        <div className="text-center">
          <h2 className="text-[36px] font-bold text-white tracking-tight leading-snug">
            Mẫu xe máy điện thông minh đầu tiên
          </h2>
        </div>

        {/* 2-Column FAQ Grid (Regular 16px font size inside cards, no extra bolding) */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-white text-slate-900 rounded-[14px] px-6 py-4 flex items-center justify-between shadow-md transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                >
                  <div className="flex items-center gap-4 text-left pr-2">
                    <span className="text-[18px] font-bold text-slate-900">
                      {faq.num}
                    </span>
                    <span className="text-[16px] font-normal text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-700 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Gentle, Buttery-Smooth Grid Dropdown Animation */}
                <div
                  className={`grid transition-all duration-300 ease-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-white/95 backdrop-blur-md text-slate-800 rounded-[14px] p-5 text-[16px] font-normal leading-relaxed shadow-lg border border-slate-200">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
