"use client";

import React from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useFaqAccordion } from "@/hooks";

export function MobileFaqSection() {
  const { faqs, openIndex, toggleFaq } = useFaqAccordion(0);

  return (
    <section id="cau-hoi-thuong-gap" className="py-12 px-5 theme-bg border-t border-slate-800/40">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải đáp thắc mắc</span>
          </div>
          <h2 className="text-2xl font-extrabold theme-text tracking-tight">
            CÂU HỎI THƯỜNG GẶP
          </h2>
          <p className="theme-muted text-xs font-light">
            Mọi thông tin cần biết về xe điện VinFast.
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="theme-card border rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="font-bold text-xs theme-text leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs theme-muted leading-relaxed font-light border-t border-slate-800/30 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Pre-order CTA Box */}
        <div
          id="dat-truoc"
          className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/80 via-slate-900 to-cyan-950 border border-cyan-500/30 text-center space-y-4 shadow-xl"
        >
          <h3 className="text-xl font-black text-white tracking-tight">
            ĐẶT CỌC XE ĐIỆN VINFAST
          </h3>
          <p className="text-slate-300 text-xs font-light leading-relaxed">
            Nhận ưu đãi bộ sạc 7.4kW tại nhà & miễn phí sạc 1 năm V-GREEN.
          </p>
          <div className="space-y-3 pt-2">
            <button className="w-full bg-[#00a8ff] active:bg-[#0093e0] text-white font-extrabold text-sm py-3 rounded-full shadow-lg shadow-cyan-500/30">
              Xác nhận Đặt Trước (10.000.000 VNĐ)
            </button>
            <Link
              href="tel:1900232389"
              className="w-full border border-white/20 active:bg-white/10 text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hotline: 1900 23 23 89</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
