"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider";
import { useMobileMenu } from "@/hooks";
import { Sun, Moon, Menu, X } from "lucide-react";

export function MobileHeader() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  const navLinks = [
    { name: t("nav.about"), href: "#gioi-thieu" },
    { name: t("nav.features"), href: "#ly-do-lua-chon" },
    { name: t("nav.specs"), href: "#thong-so-ky-thuat" },
    { name: t("nav.colors"), href: "#mau-xe" },
    { name: t("nav.faq"), href: "#cau-hoi-thuong-gap" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 theme-header">
      <div className="flex items-center justify-between px-5 h-[64px]">
        {/* Mobile Logo */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <Image
            src="/VinFast-logo-2026.webp"
            alt="VinFast Mobile Logo"
            width={140}
            height={35}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển đổi giao diện Sáng / Tối"
            suppressHydrationWarning
            className="p-2 rounded-full border border-slate-700/60 dark:border-slate-700/60 theme-text hover:bg-slate-800/40 transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* CTA Pre-order Button */}
          <Link
            href="#dat-truoc"
            className="bg-[#00a8ff] hover:bg-[#0093e0] text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-md active:scale-95"
          >
            {t("nav.preorder")}
          </Link>

          <button
            onClick={toggleMobileMenu}
            aria-label="Mở menu"
            className="p-2 rounded-lg theme-text hover:bg-slate-800/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Touch Drawer */}
      {mobileMenuOpen && (
        <div className="theme-header border-b border-slate-800 px-5 py-4 space-y-4 animate-in slide-in-from-top duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="theme-text hover:text-primary font-semibold text-base py-2.5 border-b border-slate-800/30 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-primary">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
