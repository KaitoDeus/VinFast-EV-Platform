"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function DesktopFooter() {
  return (
    <footer className="theme-header border-t border-slate-800/80 pt-16 pb-10">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info Column */}
          <div className="col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="VinFast Logo"
                width={193}
                height={48}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="theme-muted text-sm leading-relaxed font-light max-w-sm">
              Công ty Cổ phần Sản xuất và Kinh doanh VinFast - Thành viên của Tập đoàn Vingroup. Tiên phong thúc đẩy cuộc cách mạng di chuyển điện hóa toàn cầu.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider theme-text">Sản phẩm & Dịch vụ</h4>
            <ul className="space-y-2.5 text-sm theme-muted font-light">
              <li><Link href="#gioi-thieu" className="hover:text-primary transition-colors">Giới thiệu VinFast EV</Link></li>
              <li><Link href="#thong-so-ky-thuat" className="hover:text-primary transition-colors">Dòng xe VF 5, VF 6, VF 7, VF 8, VF 9</Link></li>
              <li><Link href="#ly-do-lua-chon" className="hover:text-primary transition-colors">Công nghệ Pin & Trạm sạc V-GREEN</Link></li>
              <li><Link href="#mau-xe" className="hover:text-primary transition-colors">Bộ sưu tập màu sơn ngoại thất</Link></li>
            </ul>
          </div>

          {/* Policy Links */}
          <div className="col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider theme-text">Chính sách</h4>
            <ul className="space-y-2.5 text-sm theme-muted font-light">
              <li><Link href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Điều khoản dịch vụ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Bảo hành 10 năm</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mạng lưới trạm sạc</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider theme-text">Liên hệ CSKH</h4>
            <div className="space-y-3 text-sm theme-muted font-light">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>Hotline: <strong className="theme-text font-bold">1900 23 23 89</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>Email: cskh@vinfast.vn</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>Tòa nhà Symphony, Đường Chu Huy Mân, Vinhomes Riverside, Long Biên, Hà Nội</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Region */}
        <div className="pt-8 flex items-center justify-between text-xs theme-muted font-light">
          <div>
            © {new Date().getFullYear()} VinFast. All rights reserved. Vingroup Ecosystem.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>Việt Nam (Tiếng Việt)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
