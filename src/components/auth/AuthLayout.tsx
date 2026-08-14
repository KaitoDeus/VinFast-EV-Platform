"use client";

import React from "react";
import { LanguageProvider, useLanguage } from "@/components/language-provider";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col justify-between relative selection:bg-[#1464f4] selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#1464f4]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Top Bar: Language Switcher with National Flags on Top Right */}
      <header className="w-full px-6 py-5 flex items-center justify-end z-10">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#333333] bg-[#1f1f1f] text-xs font-black text-white hover:border-[#555555] hover:bg-[#262626] transition-all cursor-pointer shadow-md active:scale-95"
          title={lang === "vi" ? "Chuyển sang Tiếng Anh" : "Switch to Vietnamese"}
        >
          <span className="text-base leading-none">
            {lang === "vi" ? "🇻🇳" : "🇬🇧"}
          </span>
          <span className="tracking-wide">
            {lang === "vi" ? "VIE" : "ENG"}
          </span>
        </button>
      </header>

      {/* Main Content Form Container (Perfect Center) */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 z-10">
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </main>

      {/* Spacer for bottom balance without footer */}
      <div className="h-6" />
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
