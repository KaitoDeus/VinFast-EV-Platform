"use client";

import React, { useState } from "react";
import Image from "next/image";

export function MobileContactSection() {
  const [selectedColor, setSelectedColor] = useState("Xanh");
  const colors = ["Xanh", "Đỏ", "Tím", "Vàng", "Trắng", "Xám"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn quý khách đã đăng ký đặt mua xe VinFast! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
  };

  return (
    <section id="lien-he" className="scroll-mt-[64px] w-full theme-bg transition-colors duration-300">
      <div id="dat-truoc">
        {/* Upper Scooter Showcase */}
        <div className="contact-showcase-bg py-8 px-4 relative overflow-hidden flex justify-center transition-colors duration-300">
          <div className="relative w-full max-w-[380px] aspect-[4/3]">
            <Image
              src="/section/sec7.png"
              alt="VinFast Klara Pre-order Showcase Artwork"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Lower Pre-order Form Container */}
        <div className="contact-form-bg py-10 px-5 transition-colors duration-300">
          <div className="max-w-[440px] mx-auto space-y-6">
            {/* Form Title */}
            <h2 className="text-[26px] sm:text-[36px] font-bold theme-text tracking-tight leading-snug text-center">
              Đặt mua xe ngay hôm nay để nhận những ưu đãi tốt nhất
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Họ Tên"
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              {/* Radio Color Options */}
              <div className="w-full contact-input rounded-[8px] px-3.5 py-3 shadow-sm border">
                <div className="flex items-center justify-between text-[13px] sm:text-[14px] theme-muted flex-wrap gap-2">
                  {colors.map((color) => (
                    <label key={color} className="inline-flex items-center gap-1 cursor-pointer hover:text-[#00a8ff]">
                      <input
                        type="radio"
                        name="scooter-color-mobile-contact"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                        className="w-3.5 h-3.5 text-[#00a8ff] focus:ring-[#00a8ff]"
                      />
                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Nội dung"
                  rows={3}
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none"
                />
              </div>

              {/* Submit Button (18px font size) */}
              <button
                type="submit"
                className="w-full bg-[#00a8ff] active:bg-[#0093e0] text-white font-extrabold text-[18px] py-3.5 rounded-full shadow-md uppercase tracking-wider cursor-pointer"
              >
                ĐẶT HÀNG NGAY
              </button>

              {/* Subtext (12px font size) */}
              <p className="text-center text-[12px] font-normal theme-muted pt-1">
                * Thông tin của quý khách luôn được bảo mật.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
