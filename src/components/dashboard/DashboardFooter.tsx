"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function DashboardFooter() {
  const { lang, t } = useLanguage();

  return (
    <footer className="w-full pt-8 pb-6 border-none flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
      <p>{t("footer.dashboardCopyright")}</p>

      <div className="flex items-center gap-6">
        <Link href="#" className="hover:text-white transition-colors">
          {lang === "vi" ? "Chính sách bảo mật" : "Privacy Policy"}
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          {lang === "vi" ? "Điều khoản dịch vụ" : "Terms & Conditions"}
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          {lang === "vi" ? "Liên hệ hỗ trợ" : "Support & Contact"}
        </Link>
      </div>
    </footer>
  );
}
