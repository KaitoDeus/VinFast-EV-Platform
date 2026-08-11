"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useColorSelector } from "@/hooks";

export function DesktopColorSelectorSection() {
  const { colors, selectedColor, selectColor } = useColorSelector();

  return (
    <section id="mau-xe" className="scroll-mt-[80px] py-24 theme-bg border-t border-slate-800/40">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
            Tùy biến phong cách
          </h2>
          <p className="text-4xl font-extrabold theme-text tracking-tight">
            BỘ MÀU SƠN NGOẠI THẤT
          </p>
          <p className="theme-muted text-base font-light">
            Công nghệ sơn phủ 5 lớp cao cấp chống trầy xước và bền màu dưới mọi điều kiện thời tiết.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-8">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-800/60 dark:border-slate-800 light:border-slate-200 shadow-2xl">
              <Image
                src="/section/sec4.jpg"
                alt={`VinFast EV ${selectedColor.name}`}
                fill
                sizes="66vw"
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-4">
                <div
                  className="w-5 h-5 rounded-full border border-white/40 shadow-inner"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div>
                  <div className="text-base font-bold text-white">{selectedColor.name}</div>
                  <div className="text-xs text-slate-300 font-light">{selectedColor.desc}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-6">
            <div className="theme-card border rounded-3xl p-8 space-y-7 shadow-xl">
              <h3 className="text-xl font-bold theme-text">Chọn màu ngoại thất</h3>

              <div className="grid grid-cols-3 gap-4">
                {colors.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => selectColor(color)}
                      title={color.name}
                      className={`group relative flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-lg scale-105"
                          : "border-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                      </div>
                      <span className="text-xs font-semibold theme-text text-center line-clamp-1">
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-5 border-t border-slate-800/40 text-xs theme-muted leading-relaxed">
                * Màu sắc thực tế có thể có sự sai lệch nhẹ do ánh sáng hiển thị màn hình. Hãy đăng ký lái thử trực tiếp để trải nghiệm màu sơn chân thực nhất.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
