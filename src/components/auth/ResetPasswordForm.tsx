"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ChevronLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { OtpInput } from "./OtpInput";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";
import { useLanguage } from "@/components/language-provider";

export function ResetPasswordForm() {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Email Request, 2: OTP Verification & New Password, 3: Success
  const [email, setEmail] = useState("elementary221b@gmail.com");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(23);

  // Timer countdown for resending OTP
  useEffect(() => {
    if (step === 2 && resendSeconds > 0) {
      const timer = setTimeout(() => setResendSeconds((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, resendSeconds]);

  // Calculate password strength score (0 to 4)
  const calculateStrength = (pwd: string): number => {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 6) score += 1;
    if (pwd.length >= 10) score += 1;
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    return Math.min(4, Math.max(1, score));
  };

  const strengthScore = calculateStrength(newPassword);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      setResendSeconds(23);
    }, 600);
  };

  const handleVerifyOtpAndReset = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      alert(lang === "vi" ? "Vui lòng nhập đủ 6 chữ số mã OTP!" : "Please enter the full 6-digit OTP code!");
      return;
    }
    if (!newPassword) {
      alert(lang === "vi" ? "Vui lòng nhập mật khẩu mới!" : "Please enter a new password!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }, 800);
  };

  const handleResendOtp = () => {
    if (resendSeconds > 0) return;
    setResendSeconds(30);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="bg-[#1f1f1f] border border-[#333333] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Official VinFast Logo at the top center of the form (Prominent & High) */}
      <div className="flex flex-col items-center text-center space-y-2 pt-1 pb-1">
        <Link href="/" className="group block">
          <div className="relative w-44 sm:w-48 h-12 transition-transform group-hover:scale-105">
            <Image
              src="/VinFast-logo-2026.webp"
              alt="VinFast"
              fill
              priority
              sizes="192px"
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </Link>

        {/* Step 1 & 2 Title and Subtitle */}
        {step === 1 && (
          <div className="space-y-1.5 pt-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t("auth.resetPasswordTitle")}
            </h1>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              {t("auth.resetPasswordSubtitle")}
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-1.5 pt-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t("auth.otpTitle")}
            </h1>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              {t("auth.otpSubtitle")}
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-1.5 pt-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t("auth.passwordResetSuccess")}
            </h1>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              {t("auth.passwordResetSuccessDesc")}
            </p>
          </div>
        )}
      </div>

      {/* ─── STEP 1: Enter Email ─── */}
      {step === 1 && (
        <form onSubmit={handleSendEmail} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">
              {t("auth.email")}
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("auth.emailPlaceholder")}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#262626] border border-[#3a3a3a] text-white text-xs font-medium placeholder:text-slate-500 outline-none focus:border-[#00a8ff] focus:ring-2 focus:ring-[#00a8ff]/20 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#1464f4] hover:bg-[#0f52cc] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1464f4]/25 transition-all active:scale-[0.98] cursor-pointer"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{t("auth.resetPasswordBtn")}</span>
                <Lock className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Back to login screen */}
          <div className="text-center pt-2">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs text-[#38bdf8] font-bold hover:underline transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t("auth.backToLogin")}</span>
            </Link>
          </div>
        </form>
      )}

      {/* ─── STEP 2: 6-Digit OTP Verification & New Password ─── */}
      {step === 2 && (
        <form onSubmit={handleVerifyOtpAndReset} className="space-y-4">
          {/* 6-Digit OTP Box Grid */}
          <div className="space-y-1">
            <OtpInput value={otp} onChange={setOtp} length={6} />
          </div>

          {/* New Password Input */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold text-slate-300 block">
              {t("auth.newPassword")}
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={t("auth.passwordPlaceholder")}
                className="w-full pl-10 pr-11 py-3 rounded-2xl bg-[#262626] border border-[#3a3a3a] text-white text-xs font-medium placeholder:text-slate-500 outline-none focus:border-[#00a8ff] focus:ring-2 focus:ring-[#00a8ff]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Password Strength Meter */}
            {newPassword.length > 0 && (
              <PasswordStrengthMeter score={strengthScore} />
            )}
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#1464f4] hover:bg-[#0f52cc] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1464f4]/25 transition-all active:scale-[0.98] cursor-pointer"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{t("auth.verifyOtpBtn")}</span>
                <Lock className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Live Resend OTP Countdown */}
          <div className="text-center text-xs text-slate-400 font-medium pt-1">
            <span>{t("auth.didntReceiveCode")} </span>
            {resendSeconds > 0 ? (
              <span className="text-[#38bdf8] font-bold">
                {t("auth.resendOtpIn")} {resendSeconds}s
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-[#38bdf8] font-bold hover:underline cursor-pointer"
              >
                {t("auth.resendOtpNow")}
              </button>
            )}
          </div>

          {/* Back to Step 1 */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{lang === "vi" ? "Đổi địa chỉ email khác" : "Change email address"}</span>
            </button>
          </div>
        </form>
      )}

      {/* ─── STEP 3: Success Confirmation State ─── */}
      {step === 3 && (
        <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-xs text-emerald-400 font-bold">
            {lang === "vi"
              ? "Mật khẩu của bạn đã được cập nhật thành công!"
              : "Your password has been reset successfully!"}
          </p>
          <Link
            href="/login"
            className="w-full py-3.5 px-4 rounded-2xl bg-[#1464f4] hover:bg-[#0f52cc] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1464f4]/25 transition-all"
          >
            <span>{t("auth.signInButton")}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
