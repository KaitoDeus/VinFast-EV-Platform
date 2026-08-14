"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function UnitDetailsHeader() {
  const { lang, t } = useLanguage();

  return (
    <div className="flex items-center gap-4">
      {/* Back Arrow Button */}
      <Link
        href="/dashboard/units"
        className="w-10 h-10 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] text-[#38bdf8] flex items-center justify-center transition-all shadow-2xs hover:bg-[#333333] shrink-0"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>

      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <Link href="/dashboard/units" className="hover:text-[#38bdf8] transition-colors">
            {t("header.units")}
          </Link>
          <span>/</span>
          <span className="text-white font-bold">{t("header.unitDetails")}</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">{t("header.unitDetails")}</h2>
      </div>
    </div>
  );
}
