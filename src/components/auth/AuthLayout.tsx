"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/components/language-provider";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col justify-between relative selection:bg-[#1464f4] selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#1464f4]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Top Navbar: Brand Logo & Language Switcher */}
      <header className="w-full px-6 py-5 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-28 sm:w-32 h-9 sm:h-10 transition-transform group-hover:scale-105">
            <Image
              src="/VinFast-logo-2026.webp"
              alt="VinFast"
              fill
              priority
              sizes="140px"
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </Link>

        {/* Language Switcher Pill */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] bg-[#1f1f1f] text-xs font-extrabold text-slate-200 hover:text-white hover:border-[#444444] transition-all cursor-pointer shadow-sm active:scale-95"
          title="Toggle Language"
        >
          <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>{lang === "vi" ? "VI" : "EN"}</span>
        </button>
      </header>

      {/* Main Content Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10 z-10">
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </main>

      {/* Auth Footer */}
      <footer className="w-full py-6 px-6 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 z-10">
        <p className="font-medium text-center sm:text-left">
          {t("auth.copyright")}
        </p>

        <div className="flex items-center gap-6 font-semibold">
          <Link href="/privacy" className="hover:text-white transition-colors">
            {t("auth.privacyPolicy")}
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            {t("auth.termsConditions")}
          </Link>
        </div>
      </footer>
    </div>
  );
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <LanguageProvider>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </LanguageProvider>
  );
}
