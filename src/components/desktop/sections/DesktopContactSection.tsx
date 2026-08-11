"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function DesktopContactSection() {
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
    <section id="lien-he" className="scroll-mt-[80px] w-full theme-bg transition-colors duration-300">
      <div id="dat-truoc" className="w-full grid grid-cols-12 min-h-[640px]">
        {/* Left Column: Form Container */}
        <div className="col-span-6 contact-form-bg p-12 lg:p-16 flex flex-col justify-center transition-colors duration-300">
          <div className="max-w-[460px] mx-auto w-full space-y-6">
            <h2 className="text-[36px] font-bold theme-text tracking-tight leading-snug text-center">
              {t("contact.title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder={t("contact.phone")}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              {/* Radio Color Selection Bar */}
              <div className="w-full contact-input rounded-[8px] px-4 py-3 shadow-sm border">
                <div className="flex items-center justify-between text-[14px] sm:text-[16px] theme-muted">
                  {colors.map((c) => (
                    <label key={c.id} className="inline-flex items-center gap-1.5 cursor-pointer hover:text-[#00a8ff]">
                      <input
                        type="radio"
                        name="scooter-color-contact"
                        value={c.id}
                        checked={selectedColor === c.id}
                        onChange={() => setSelectedColor(c.id)}
                        className="w-4 h-4 text-[#00a8ff] focus:ring-[#00a8ff]"
                      />
                      <span>{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder={t("contact.content")}
                  rows={4}
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-[18px] py-4 rounded-full shadow-md uppercase tracking-wider cursor-pointer transition-all active:scale-[0.99]"
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

        {/* Right Column: Showcase Container */}
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
