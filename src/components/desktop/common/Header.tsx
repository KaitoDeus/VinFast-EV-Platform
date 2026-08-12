"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider";
import { AnalyticsManager } from "@/infrastructure/analytics";
import { Sun, Moon } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.specs"), href: "#specs" },
    { name: t("nav.colors"), href: "#colors" },
    { name: t("nav.faq"), href: "#faq" },
  ];

  const handlePreorderClick = () => {
    AnalyticsManager.getInstance().trackPreorderClick("desktop_header_cta");
  };

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 theme-header">
      {/* Container: Max Width 1440px, Height 80px, Horizontal Padding 56px, Vertical Padding 16px (Exact Figma Spec) */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[56px] py-[16px] h-[80px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none shrink-0">
          <Image
            src="/VinFast-logo-2026.webp"
            alt="VinFast Logo"
            width={193}
            height={48}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation - 16px Font Size */}
        <nav className="flex items-center gap-8 text-[16px] font-semibold theme-text">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#00a8ff] dark:hover:text-[#00a8ff] transition-colors py-2 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00a8ff] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển đổi giao diện Sáng / Tối"
            suppressHydrationWarning
            title={theme === "dark" ? "Chuyển sang chế độ Sáng" : "Chuyển sang chế độ Tối"}
            className="p-2.5 rounded-full border border-slate-300 dark:border-slate-800 theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Enlarged CTA Pre-Order Button */}
          <Link
            href="#preorder"
            onClick={handlePreorderClick}
            className="bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-[16px] px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95 text-center"
          >
            {t("nav.preorder")}
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header as DesktopHeader };
