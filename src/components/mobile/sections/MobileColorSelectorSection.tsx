"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useColorSelector } from "@/hooks";

export function MobileColorSelectorSection() {
  const { colors, selectedColor, selectColor } = useColorSelector();

  return (
    <section id="mau-xe" className="py-12 px-5 theme-bg border-t border-slate-800/40">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Tùy biến phong cách
          </span>
          <h2 className="text-2xl font-extrabold theme-text tracking-tight">
            BỘ MÀU SƠN NGOẠI THẤT
          </h2>
          <p className="theme-muted text-xs font-light">
            Công nghệ sơn phủ 5 lớp cao cấp chống trầy xước.
          </p>
        </div>

        {/* Mobile Car Preview */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800/60 shadow-xl">
          <Image
            src="/section/sec4.jpg"
            alt={`VinFast EV ${selectedColor.name}`}
            fill
            sizes="100vw"
            className="object-cover object-center transition-all duration-300"
          />
          <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full border border-white/40 shadow-inner shrink-0"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <div className="min-w-0">
              <div className="text-xs font-bold text-white truncate">{selectedColor.name}</div>
              <div className="text-[10px] text-slate-300 font-light truncate">{selectedColor.desc}</div>
            </div>
          </div>
        </div>

        {/* Mobile Touch Color Palette Grid */}
        <div className="theme-card border rounded-2xl p-5 space-y-4 shadow-md">
          <h3 className="text-sm font-bold theme-text">Chọn màu ngoại thất</h3>
          <div className="grid grid-cols-3 gap-3">
            {colors.map((color) => {
              const isSelected = selectedColor.id === color.id;
              return (
                <button
                  key={color.id}
                  onClick={() => selectColor(color)}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/10 scale-105"
                      : "border-slate-800"
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />}
                  </div>
                  <span className="text-[11px] font-semibold theme-text text-center truncate w-full">
                    {color.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
