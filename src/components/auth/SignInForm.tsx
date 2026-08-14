"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function SignInForm() {
  const { lang, t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/dashboard";
    }, 800);
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

        {/* Scaled-down elegant title */}
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
          {t("auth.signInTitle")}
        </h1>
      </div>

      {/* Sign In Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Address Input */}
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

        {/* Password Input */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-300 block">
              {t("auth.password")}
            </label>
            <Link
              href="/forgot-password"
              className="text-[11px] text-[#38bdf8] font-bold hover:underline"
            >
              {t("auth.forgotPassword")}
            </Link>
          </div>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-2 pt-0.5">
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-[#3a3a3a] accent-[#1464f4] bg-[#262626] cursor-pointer"
          />
          <label htmlFor="rememberMe" className="text-xs text-slate-300 font-medium cursor-pointer">
            {t("auth.rememberMe")}
          </label>
        </div>

        {/* Primary Sign In Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#1464f4] hover:bg-[#0f52cc] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#1464f4]/25 transition-all active:scale-[0.98] cursor-pointer"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>{t("auth.signInButton")}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Sign Up */}
      <div className="text-center text-xs text-slate-400 font-medium">
        <span>{t("auth.dontHaveAccount")} </span>
        <Link
          href="/register"
          className="text-[#38bdf8] font-bold hover:underline transition-all"
        >
          {t("auth.signUpLink")}
        </Link>
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-[#333333]" />
      </div>

      {/* Social Sign In with Google */}
      <button
        type="button"
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => (window.location.href = "/dashboard"), 600);
        }}
        className="w-full py-3 px-4 rounded-2xl bg-[#262626] hover:bg-[#2e2e2e] border border-[#3a3a3a] text-white font-bold text-xs flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer shadow-xs"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>{t("auth.signInWithGoogle")}</span>
      </button>
    </div>
  );
}
