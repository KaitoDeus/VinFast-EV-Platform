"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function MobileFooter() {
  return (
    <footer className="theme-header border-t border-slate-800/80 pt-10 pb-8 px-5">
      <div className="space-y-8">
        {/* Brand & Logo */}
        <div className="space-y-3">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="VinFast Logo"
              width={140}
              height={35}
              className="h-7 w-auto object-contain"
            />
          </Link>
          <p className="theme-muted text-xs leading-relaxed font-light">
            Công ty Cổ phần Sản xuất và Kinh doanh VinFast - Thành viên của Tập đoàn Vingroup. Tiên phong di chuyển điện hóa toàn cầu.
          </p>
        </div>

        {/* Quick Links Mobile Stack */}
        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-800/40">
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider theme-text">Sản phẩm</h4>
            <ul className="space-y-2 text-xs theme-muted font-light">
              <li><Link href="#gioi-thieu" className="hover:text-primary transition-colors">Giới thiệu EV</Link></li>
              <li><Link href="#thong-so-ky-thuat" className="hover:text-primary transition-colors">Dòng xe VF</Link></li>
              <li><Link href="#ly-do-lua-chon" className="hover:text-primary transition-colors">V-GREEN</Link></li>
              <li><Link href="#mau-xe" className="hover:text-primary transition-colors">Màu xe</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider theme-text">Chính sách</h4>
            <ul className="space-y-2 text-xs theme-muted font-light">
              <li><Link href="#" className="hover:text-primary transition-colors">Bảo mật</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Điều khoản</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Bảo hành 10 năm</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Trạm sạc</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Mobile Card */}
        <div className="p-4 rounded-2xl theme-card border space-y-2.5 text-xs theme-muted font-light">
          <h4 className="font-bold uppercase tracking-wider theme-text mb-1">Tổng đài hỗ trợ</h4>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Hotline: <strong className="theme-text font-bold">1900 23 23 89</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>cskh@vinfast.vn</span>
          </div>
          <div className="flex items-start gap-2 pt-1">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <span>Vinhomes Riverside, Long Biên, Hà Nội</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800/40 text-center text-xs theme-muted font-light space-y-2">
          <div>© {new Date().getFullYear()} VinFast. Vingroup Ecosystem.</div>
          <div className="flex items-center justify-center gap-1.5 text-primary text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Việt Nam (Tiếng Việt)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
