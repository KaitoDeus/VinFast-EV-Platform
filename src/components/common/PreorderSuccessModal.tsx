"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, KeyRound, Mail, Phone, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface PreorderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerData: {
    name: string;
    email: string;
    phone: string;
  };
}

export function PreorderSuccessModal({
  isOpen,
  onClose,
  customerData,
}: PreorderSuccessModalProps) {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#1f1f1f] text-white border border-[#333333] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-[#2a2a2a] transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with VinFast Logo & Success Badge */}
        <div className="flex flex-col items-center text-center space-y-3 pt-2">
          <div className="relative w-36 h-9">
            <Image
              src="/VinFast-logo-2026.webp"
              alt="VinFast"
              fill
              priority
              sizes="144px"
              className="object-contain filter brightness-0 invert"
            />
          </div>

          <div className="w-14 h-14 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {t("contact.successTitle")}
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              {t("contact.successSubtitle")}
            </p>
          </div>
        </div>

        {/* Account & Password Dispatch Information Card */}
        <div className="bg-[#262626] border border-[#3a3a3a] rounded-2xl p-4 sm:p-5 space-y-3.5">
          <div className="flex items-center gap-2.5 text-xs font-bold text-[#38bdf8]">
            <KeyRound className="w-4 h-4 shrink-0 text-[#00a8ff]" />
            <span>{t("contact.accountCreatedNotice")}</span>
          </div>

          <div className="space-y-2 text-xs divide-y divide-[#333333]">
            <div className="flex items-center justify-between py-1">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {t("contact.accountEmail")}
              </span>
              <span className="font-semibold text-white truncate max-w-[200px]">
                {customerData.email || "—"}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                {t("contact.accountPhone")}
              </span>
              <span className="font-semibold text-white">
                {customerData.phone || "—"}
              </span>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-[#1a1a1a] rounded-xl p-3 border border-[#333333]/80 space-y-1">
            <p className="text-[11px] text-amber-300 font-medium leading-relaxed">
              🔒 {t("contact.passwordSentNotice")}
            </p>
            <p className="text-[10px] text-slate-400 leading-normal">
              {t("contact.checkInboxNotice")}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-1">
          <Link
            href={`/login?email=${encodeURIComponent(customerData.email)}`}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#1464f4] hover:bg-[#0f52cc] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1464f4]/25 transition-all active:scale-[0.98]"
          >
            <span>{t("contact.loginNowBtn")}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl text-slate-400 hover:text-white text-xs font-semibold hover:bg-[#262626] transition-colors cursor-pointer"
          >
            {t("contact.closeModal")}
          </button>
        </div>
      </div>
    </div>
  );
}
