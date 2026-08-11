"use client";

import React, { useState } from "react";
import Image from "next/image";

export function MobileOrderSection() {
  const [selectedColor, setSelectedColor] = useState("Xanh");
  const colors = ["Xanh", "Đỏ", "Tím", "Vàng", "Trắng", "Xám"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn quý khách đã đăng ký đặt mua xe VinFast! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
  };

  return (
    <section id="dat-truoc" className="scroll-mt-[64px] w-full bg-[#eeeeee] dark:bg-slate-950 transition-colors duration-300">
      {/* Upper Scooter Showcase with White Background */}
      <div className="bg-white dark:bg-slate-900 py-10 px-5 relative overflow-hidden flex justify-center">
        {/* Backdrop Art Blocks */}
        <div className="absolute top-4 right-4 z-0 w-[120px] h-[120px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/section/sec7_art.jpg"
            alt="Artistic Backdrop Frame"
            fill
            sizes="120px"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-6 right-0 z-0 w-[50px] h-[110px] bg-gradient-to-br from-rose-700 to-red-600 rounded-l-2xl shadow-lg" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-0 w-[60px] h-[60px] bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl shadow-sm opacity-90" />

        {/* Scooter Image */}
        <div className="relative w-full max-w-[340px] aspect-[4/3] z-10">
          <Image
            src="/section/sec1.png"
            alt="VinFast Klara Electric Scooter Pre-order Showcase"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center drop-shadow-xl"
          />
        </div>
      </div>

      {/* Lower Light Gray Pre-order Form Container */}
      <div className="bg-[#eeeeee] dark:bg-slate-950 py-10 px-5 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[440px] mx-auto space-y-6">
          <h2 className="text-[24px] font-bold text-[#000000] dark:text-[#ffffff] tracking-tight leading-snug text-center">
            Đặt mua xe ngay hôm nay để nhận những ưu đãi tốt nhất
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <input
                type="tel"
                placeholder="Số điện thoại"
                required
                className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Họ Tên"
                required
                className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff]"
              />
            </div>

            {/* Radio Color Options */}
            <div className="w-full bg-white dark:bg-slate-900 rounded-[10px] px-3.5 py-3 shadow-sm border-none">
              <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400 flex-wrap gap-2">
                {colors.map((color) => (
                  <label key={color} className="inline-flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="scooter-color-mobile"
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
                className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00a8ff] active:bg-[#0093e0] text-white font-bold text-[15px] py-3.5 rounded-full shadow-md uppercase tracking-wider cursor-pointer"
            >
              ĐẶT HÀNG NGAY
            </button>

            <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 pt-1">
              * Thông tin của quý khách luôn được bảo mật.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
