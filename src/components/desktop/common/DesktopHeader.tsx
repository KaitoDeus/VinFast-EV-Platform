"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

export function DesktopHeader() {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Giới thiệu", href: "#gioi-thieu" },
    { name: "Lý do lựa chọn", href: "#ly-do-lua-chon" },
    { name: "Thông số kỹ thuật", href: "#thong-so-ky-thuat" },
    { name: "Màu xe", href: "#mau-xe" },
    { name: "Câu hỏi thường gặp", href: "#cau-hoi-thuong-gap" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 theme-header">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 h-[80px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none shrink-0">
          <Image
            src="/logo.png"
            alt="VinFast Logo"
            width={193}
            height={48}
            className="h-9 w-auto object-contain transition-transform hover:scale-105"
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

          <Link
            href="#dat-truoc"
            className="bg-[#00a8ff] hover:bg-[#0093e0] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95 text-center"
          >
            Đặt trước
          </Link>
        </div>
      </div>
    </header>
  );
}
