"use client";

import React from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useFaqAccordion } from "@/hooks";

export function DesktopFaqSection() {
  const { faqs, openIndex, toggleFaq } = useFaqAccordion(0);

  return (
    <section id="cau-hoi-thuong-gap" className="scroll-mt-[80px] py-24 theme-bg border-t border-slate-800/40">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Giải đáp thắc mắc</span>
          </div>
          <h2 className="text-4xl font-extrabold theme-text tracking-tight">
            CÂU HỎI THƯỜNG GẶP
          </h2>
          <p className="theme-muted text-base font-light">
            Mọi thông tin bạn cần biết về sở hữu và trải nghiệm xe điện VinFast.
          </p>
        </div>

        {/* Widescreen 2-column Layout: Left Support Banner & Right Accordion */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4 space-y-6">
            <div className="p-8 rounded-3xl theme-card border space-y-6 shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold theme-text leading-snug">
                Bạn cần tư vấn trực tiếp từ chuyên viên?
              </h3>
              <p className="theme-muted text-sm font-light leading-relaxed">
                Đội ngũ chuyên viên VinFast luôn sẵn sàng giải đáp 24/7 mọi câu hỏi về kỹ thuật, trạm sạc và chính sách ưu đãi.
              </p>
              <div className="pt-2 space-y-3">
                <Link
                  href="tel:1900232389"
                  className="w-full bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-sm px-6 py-3.5 rounded-full transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Tổng đài 1900 23 23 89</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-8 space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="theme-card border rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-lg theme-text leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm theme-muted leading-relaxed font-light border-t border-slate-800/40 mt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pre-order banner */}
        <div
          id="dat-truoc"
          className="mt-20 scroll-mt-[100px] p-12 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-950 border border-cyan-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <h3 className="text-4xl font-black text-white tracking-tight">
              ĐẶT CỌC XE ĐIỆN VINFAST NGAY HÔM NAY
            </h3>
            <p className="text-slate-300 text-base font-light">
              Nhận ngay ưu đãi bộ sạc tận nhà 7.4kW, miễn phí sạc 1 năm tại hệ thống V-GREEN cùng nhiều quà tặng độc quyền.
            </p>
            <div className="pt-4 flex items-center justify-center gap-5">
              <button className="bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-base px-9 py-4 rounded-full transition-all shadow-xl shadow-cyan-500/30 active:scale-95">
                Xác nhận Đặt Trước (10.000.000 VNĐ)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
