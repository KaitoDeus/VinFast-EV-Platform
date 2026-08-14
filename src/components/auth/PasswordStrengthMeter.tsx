"use client";

import React from "react";
import { useLanguage } from "@/components/language-provider";

interface PasswordStrengthMeterProps {
  score: number; // 0 to 4
}

export function PasswordStrengthMeter({ score }: PasswordStrengthMeterProps) {
  const { t } = useLanguage();

  const getStrengthLabel = (s: number) => {
    switch (s) {
      case 0:
      case 1:
        return { label: t("auth.strengthWeak"), color: "text-rose-400" };
      case 2:
        return { label: t("auth.strengthFair"), color: "text-amber-400" };
      case 3:
        return { label: t("auth.strengthGood"), color: "text-sky-400" };
      case 4:
      default:
        return { label: t("auth.strengthStrong"), color: "text-emerald-400" };
    }
  };

  const getSegmentColor = (index: number, currentScore: number) => {
    if (index >= currentScore) {
      return "bg-[#333333]";
    }
    if (currentScore === 1) return "bg-rose-500";
    if (currentScore === 2) return "bg-amber-500";
    if (currentScore === 3) return "bg-[#00a8ff]";
    return "bg-emerald-500";
  };

  const { label, color } = getStrengthLabel(score);

  return (
    <div className="space-y-1.5 pt-1">
      {/* 4 Segment Progress Bar */}
      <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-full rounded-full transition-all duration-300 ${getSegmentColor(
              index,
              score
            )}`}
          />
        ))}
      </div>

      {/* Strength Label Feedback */}
      <div className="flex items-center justify-between text-[11px] font-medium">
        <span className="text-slate-400">
          {t("auth.passwordStrength")}: <span className={`font-bold ${color}`}>{label}</span>
        </span>
      </div>
    </div>
  );
}
