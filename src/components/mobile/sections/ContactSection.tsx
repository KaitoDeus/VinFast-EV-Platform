"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { AnalyticsManager } from "@/infrastructure/analytics";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ phone: "", name: "", email: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AnalyticsManager.getInstance().trackContactSubmit(formData);
    alert(t("contact.alert"));
  };

  return (
    <section id="contact" className="scroll-mt-[64px] w-full theme-bg transition-colors duration-300">
      <div id="preorder">
        {/* Upper Scooter Showcase */}
        <div className="contact-showcase-bg py-8 px-4 relative overflow-hidden flex justify-center transition-colors duration-300">
          <div className="relative w-full max-w-[380px] aspect-[4/3]">
            <Image
              src="/section/sec7.png"
              alt="VinFast Klara Smart Electric Scooter Pre-order Showcase Artwork"
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder={t("contact.phone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff]"
                />
              </div>

              <div>
                <textarea
                  placeholder={t("contact.content")}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00a8ff] active:bg-[#0093e0] text-white font-extrabold text-[18px] py-3.5 rounded-full shadow-md uppercase tracking-wider cursor-pointer transition-all active:scale-[0.99]"
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

export { ContactSection as MobileContactSection };
