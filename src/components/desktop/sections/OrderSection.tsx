"use client";

import React, { useState } from "react";
import Image from "next/image";

export function OrderSection() {
  const [selectedColor, setSelectedColor] = useState("Xanh");
  const colors = ["Xanh", "Đỏ", "Tím", "Vàng", "Trắng", "Xám"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn quý khách đã đăng ký đặt mua xe VinFast! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
  };

  return (
    <section id="preorder" className="scroll-mt-[80px] w-full bg-[#eeeeee] dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full grid grid-cols-12 min-h-[640px]">
        {/* Left Column: Light Gray Pre-order Form Container (Matching Mockup) */}
        <div className="col-span-6 bg-[#eeeeee] dark:bg-slate-950 p-12 lg:p-16 flex flex-col justify-center border-r border-slate-200 dark:border-slate-800">
          <div className="max-w-[440px] mx-auto w-full space-y-6">
            {/* Form Title */}
            <h2 className="text-[30px] lg:text-[34px] font-bold text-[#000000] dark:text-[#ffffff] tracking-tight leading-snug text-center">
              Đặt mua xe ngay hôm nay để nhận những ưu đãi tốt nhất
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  required
                  className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Họ Tên"
                  required
                  className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              {/* Radio Color Selection Bar */}
              <div className="w-full bg-white dark:bg-slate-900 rounded-[10px] px-4 py-3 shadow-sm border-none">
                <div className="flex items-center justify-between text-[13px] text-slate-500 dark:text-slate-400">
                  {colors.map((color) => (
                    <label key={color} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="scooter-color-desktop"
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
                  rows={4}
                  className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 rounded-[10px] px-4 py-3.5 text-[14px] font-normal shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00a8ff] hover:bg-[#0093e0] text-white font-bold text-[16px] py-4 rounded-full shadow-md uppercase tracking-wider cursor-pointer transition-all active:scale-[0.99]"
              >
                ĐẶT HÀNG NGAY
              </button>

              <p className="text-center text-[12px] text-slate-400 dark:text-slate-500 pt-1">
                * Thông tin của quý khách luôn được bảo mật.
              </p>
            </form>
          </div>
        </div>

        {/* Right Column: Pure White Background Showcase with Backdrop Art Panels (Matching Mockup) */}
        <div className="col-span-6 bg-white dark:bg-slate-900 relative flex items-center justify-center p-12 overflow-hidden">
          {/* Top Right Abstract Art Canvas */}
          <div className="absolute top-10 right-16 z-0 w-[180px] h-[180px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="/section/sec7_art.jpg"
              alt="Artistic Backdrop Frame"
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>

          {/* Bottom Right Crimson Wave Block */}
          <div className="absolute bottom-16 right-0 z-0 w-[80px] h-[170px] bg-gradient-to-br from-rose-700 via-red-600 to-rose-900 rounded-l-3xl shadow-xl" />

          {/* Left Middle Cyan Block */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 z-0 w-[90px] h-[90px] bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl shadow-md opacity-90" />

          {/* Main Red Klara Scooter 8K Cutout */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] z-10">
            <Image
              src="/section/sec1.png"
              alt="VinFast Klara Electric Scooter Pre-order Showcase"
              fill
              priority
              sizes="50vw"
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { OrderSection as DesktopOrderSection };
