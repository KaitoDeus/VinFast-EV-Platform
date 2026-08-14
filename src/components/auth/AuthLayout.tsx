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

      {/* Top Bar: Flag Language Switcher like Landing Page */}
      <header className="w-full px-6 py-5 flex items-center justify-end z-10">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#333333] bg-[#1f1f1f] text-xs font-bold text-white hover:border-[#555555] hover:bg-[#262626] transition-all cursor-pointer shadow-md active:scale-95"
          title={lang === "vi" ? "Chuyển sang Tiếng Anh (International)" : "Chuyển sang Tiếng Việt"}
        >
          {lang === "vi" ? (
            /* Vietnam Flag 🇻🇳 SVG (Exact Landing Page Spec) */
            <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 overflow-hidden" viewBox="0 0 30 20">
              <rect width="30" height="20" fill="#da251d" />
              <polygon points="15,4 16.35,8.14 20.71,8.15 17.37,10.58 18.53,15.70 15,13.14 11.47,15.70 12.63,10.58 9.29,8.15 13.65,8.14" fill="#ffff00" />
            </svg>
          ) : (
            /* International Flag 🇺🇸 SVG (Exact Landing Page Spec) */
            <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 overflow-hidden" viewBox="0 0 30 20">
              <rect width="30" height="20" fill="#b22234" />
              <rect y="2.85" width="30" height="2.85" fill="#ffffff" />
              <rect y="8.57" width="30" height="2.85" fill="#ffffff" />
              <rect y="14.28" width="30" height="2.85" fill="#ffffff" />
              <rect width="13" height="11.42" fill="#3c3b6e" />
              <circle cx="2.5" cy="2.2" r="0.7" fill="#ffffff" />
              <circle cx="6.5" cy="2.2" r="0.7" fill="#ffffff" />
              <circle cx="10.5" cy="2.2" r="0.7" fill="#ffffff" />
              <circle cx="4.5" cy="5.7" r="0.7" fill="#ffffff" />
              <circle cx="8.5" cy="5.7" r="0.7" fill="#ffffff" />
              <circle cx="2.5" cy="9.2" r="0.7" fill="#ffffff" />
              <circle cx="6.5" cy="9.2" r="0.7" fill="#ffffff" />
              <circle cx="10.5" cy="9.2" r="0.7" fill="#ffffff" />
            </svg>
          )}
          <span className="tracking-wide uppercase font-extrabold text-[11px]">
            {lang === "vi" ? "VIE" : "ENG"}
          </span>
        </button>
      </header>

      {/* Main Content Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 z-10">
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </main>

      {/* Spacer */}
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
