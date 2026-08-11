"use client";

import React, { useState } from "react";
import Image from "next/image";

export function DesktopContactSection() {
  const [selectedColor, setSelectedColor] = useState("Xanh");
  const colors = ["Xanh", "Đỏ", "Tím", "Vàng", "Trắng", "Xám"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn quý khách đã đăng ký đặt mua xe VinFast! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
  };

  return (
    <section id="lien-he" className="scroll-mt-[80px] w-full theme-bg transition-colors duration-300">
      <div id="dat-truoc" className="w-full grid grid-cols-12 min-h-[640px]">
        {/* Left Column: Form Container (Dynamically switches #eeeeee in Light / #242424 in Dark) */}
        <div className="col-span-6 contact-form-bg p-12 lg:p-16 flex flex-col justify-center transition-colors duration-300">
          <div className="max-w-[460px] mx-auto w-full space-y-6">
            {/* Form Title: Dynamically switches #000000 Solid Black in Light / #ffffff Pure White in Dark */}
            <h2 className="text-[36px] font-bold theme-text tracking-tight leading-snug text-center">
              Đặt mua xe ngay hôm nay để nhận những ưu đãi tốt nhất
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Họ Tên"
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              {/* Radio Color Selection Bar */}
              <div className="w-full contact-input rounded-[8px] px-4 py-3 shadow-sm border">
                <div className="flex items-center justify-between text-[14px] sm:text-[16px] theme-muted">
                  {colors.map((color) => (
                    <label key={color} className="inline-flex items-center gap-1.5 cursor-pointer hover:text-[#00a8ff]">
                      <input
                        type="radio"
                        name="scooter-color-contact"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => setSelectedColor(color)}
                        className="w-4 h-4 text-[#00a8ff] focus:ring-[#00a8ff]"
                      />
                      <span>{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Nội dung"
                  rows={4}
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none transition-all"
                />
              </div>

              {/* Submit Button (18px font size) */}
              <button
                type="submit"
                className="w-full bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-[18px] py-4 rounded-full shadow-md uppercase tracking-wider cursor-pointer transition-all active:scale-[0.99]"
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

        {/* Right Column: Showcase Container (Dynamically switches #ffffff in Light / #333333 in Dark) */}
        <div className="col-span-6 contact-showcase-bg relative flex items-center justify-center p-8 overflow-hidden transition-colors duration-300">
          <div className="relative w-full max-w-[580px] aspect-[4/3]">
            <Image
              src="/section/sec7.png"
              alt="VinFast Klara Pre-order Showcase Artwork"
              fill
              priority
              sizes="50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
