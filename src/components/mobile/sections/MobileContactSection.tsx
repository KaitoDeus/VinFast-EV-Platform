"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function MobileContactSection() {
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState("Xanh");

  const colors = [
    { id: "Xanh", label: t("color.blue") },
    { id: "Đỏ", label: t("color.red") },
    { id: "Tím", label: t("color.purple") },
    { id: "Vàng", label: t("color.yellow") },
    { id: "Trắng", label: t("color.white") },
    { id: "Xám", label: t("color.grey") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.alert"));
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
              {t("contact.title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="tel"
                  placeholder={t("contact.phone")}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              {/* Radio Color Options */}
              <div className="w-full contact-input rounded-[8px] px-3.5 py-3 shadow-sm border">
                <div className="flex items-center justify-between text-[13px] sm:text-[14px] theme-muted flex-wrap gap-2">
                  {colors.map((c) => (
                    <label key={c.id} className="inline-flex items-center gap-1 cursor-pointer hover:text-[#00a8ff]">
                      <input
                        type="radio"
                        name="scooter-color-mobile-contact"
                        value={c.id}
                        checked={selectedColor === c.id}
                        onChange={() => setSelectedColor(c.id)}
                        className="w-3.5 h-3.5 text-[#00a8ff] focus:ring-[#00a8ff]"
                      />
                      <span>{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder={t("contact.content")}
                  rows={3}
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00a8ff] active:bg-[#0093e0] text-white font-extrabold text-[18px] py-3.5 rounded-full shadow-md uppercase tracking-wider cursor-pointer"
              >
                {t("contact.submit")}
              </button>

              {/* Subtext */}
              <p className="text-center text-[12px] font-normal theme-muted pt-1">
                {t("contact.subtext")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
