"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function MobileFooter() {
  const { lang, setLanguage, t } = useLanguage();

  return (
    <footer className="relative w-full bg-[#121629] py-10 px-5 overflow-hidden transition-colors duration-300 border-t border-slate-800">
      {/* 2D World Map Graphic Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
        <Image
          src="/section/world_map_2d.jpg"
          alt="2D World Map Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 text-center space-y-5">
        {/* Top Centered Brand Logo (Bright Pure White Inverted Filter for High Contrast) */}
        <div className="flex justify-center">
          <Link href="/" className="inline-block">
            <Image
              src="/VinFast-logo-2026.webp"
              alt="VinFast Logo"
              width={160}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert filter"
              priority
            />
          </Link>
        </div>

        {/* Main Headline (36px Font Size on Desktop / 24px-36px Mobile) */}
        <h2 className="text-[24px] sm:text-[36px] font-extrabold text-white tracking-wide uppercase leading-snug">
          {t("footer.headline")}
        </h2>

        {/* Address Subtitle (16px Font Size) */}
        <p className="text-[16px] text-slate-300 font-normal px-2">
          {t("footer.address")}
        </p>

        {/* Contact Info Grey Box Bar (16px Font Size) */}
        <div className="flex justify-center pt-1">
          <div className="bg-[#4a4e63]/60 backdrop-blur-md rounded-sm px-4 py-3 text-[16px] text-slate-200 font-normal flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center shadow-md border border-slate-600/30 w-full max-w-[440px]">
            <div className="flex items-center gap-3">
              <span>Tel: 0123 456 789</span>
              <span className="text-slate-500">|</span>
              <span>Fax: 0123 456 789</span>
            </div>
            <span>
              Email:{" "}
              <a
                href="mailto:demo@gmail.com"
                className="hover:text-[#00a8ff]"
              >
                mailto:demo@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Social Media Icons Row (Enlarged Button Sizes: w-10 h-10) */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-lg bg-[#3b5998] text-white flex items-center justify-center shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-lg bg-[#cd2019] text-white flex items-center justify-center shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* RSS Feed */}
          <a
            href="#"
            aria-label="RSS Feed"
            className="w-10 h-10 rounded-lg bg-[#f26522] text-white flex items-center justify-center shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-3.26A12.3 12.3 0 0 0 4 7.7v-3.26m0 6.52A9.04 9.04 0 0 1 13.04 20h-3.26A5.78 5.78 0 0 0 4 14.22v-3.26z" />
            </svg>
          </a>
        </div>

        {/* Sleek Clean i18n Language Selector (No Underline) */}
        <div className="flex items-center justify-center gap-5 pt-2 text-[15px]">
          {/* Vietnam 🇻🇳 Option */}
          <button
            onClick={() => setLanguage("vi")}
            className={`inline-flex items-center gap-2 transition-all cursor-pointer py-1 no-underline ${
              lang === "vi"
                ? "text-[#00a8ff] font-bold"
                : "text-slate-400 font-normal hover:text-white"
            }`}
          >
            <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 overflow-hidden" viewBox="0 0 30 20">
              <rect width="30" height="20" fill="#da251d" />
              <polygon points="15,4 16.35,8.14 20.71,8.15 17.37,10.58 18.53,15.70 15,13.14 11.47,15.70 12.63,10.58 9.29,8.15 13.65,8.14" fill="#ffff00" />
            </svg>
            <span>{t("footer.lang_vi")}</span>
          </button>

          <span className="text-slate-600 font-light">|</span>

          {/* US / International 🇺🇸 Option */}
          <button
            onClick={() => setLanguage("en")}
            className={`inline-flex items-center gap-2 transition-all cursor-pointer py-1 no-underline ${
              lang === "en"
                ? "text-[#00a8ff] font-bold"
                : "text-slate-400 font-normal hover:text-white"
            }`}
          >
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
            <span>{t("footer.lang_en")}</span>
          </button>
        </div>

        {/* Copyright Subtext (16px Font Size) */}
        <p className="text-[16px] text-slate-400 font-normal pt-1">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
