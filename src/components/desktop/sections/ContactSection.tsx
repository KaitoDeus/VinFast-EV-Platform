"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { AnalyticsManager } from "@/infrastructure/analytics";
import { PreorderSuccessModal } from "@/components/common/PreorderSuccessModal";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ phone: "", name: "", email: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to POST /api/v1/preorders
    setTimeout(() => {
      AnalyticsManager.getInstance().trackContactSubmit(formData);
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 600);
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    setFormData({ phone: "", name: "", email: "", content: "" });
  };

  return (
    <section id="contact" className="scroll-mt-[80px] w-full theme-bg transition-colors duration-300">
      <div id="preorder" className="w-full grid grid-cols-12 min-h-[640px]">
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
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] transition-all"
                />
              </div>

              <div>
                <textarea
                  placeholder={t("contact.content")}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full contact-input placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-[8px] px-4 py-3.5 text-[16px] font-normal shadow-sm border outline-none focus:ring-2 focus:ring-[#00a8ff] resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-[18px] py-4 rounded-full shadow-md uppercase tracking-wider cursor-pointer transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>{t("contact.submit")}</span>
                )}
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
              alt="VinFast Klara Smart Electric Scooter Pre-order Showcase"
              fill
              priority
              sizes="50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <PreorderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
        customerData={{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }}
      />
    </section>
  );
}

export { ContactSection as DesktopContactSection };
