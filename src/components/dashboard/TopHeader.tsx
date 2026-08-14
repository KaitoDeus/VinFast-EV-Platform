"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { useSidebar } from "@/components/dashboard/SidebarContext";
import { Search, Settings, Bell, Menu, LogOut, User, Shield, ChevronDown } from "lucide-react";

export function TopHeader() {
  const { lang, setLanguage, t } = useLanguage();
  const { toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuOpen]);

  // Dynamic Page Title mapping with responsive short titles on mobile
  const renderPageTitle = () => {
    if (pathname === "/dashboard/tracking") return t("header.tracking");
    if (pathname === "/dashboard/messages") return t("header.messages");
    if (pathname === "/dashboard/bookings") return t("header.bookings");
    if (pathname === "/dashboard/units") return t("header.units");
    if (pathname.startsWith("/dashboard/units/")) {
      return (
        <>
          <span className="hidden sm:inline">{lang === "vi" ? "Chi tiết " : "Unit "}</span>
          {lang === "vi" ? "xe" : "Details"}
        </>
      );
    }
    if (pathname === "/dashboard/calendar") return t("header.calendar");
    if (pathname === "/dashboard/clients") return t("header.clients");
    if (pathname === "/dashboard/drivers") return t("header.drivers");
    if (pathname.startsWith("/dashboard/financials/payments")) {
      return (
        <>
          <span className="hidden sm:inline">{lang === "vi" ? "Tài chính - " : "Financials - "}</span>
          {lang === "vi" ? "Khoản thu" : "Payments"}
        </>
      );
    }
    if (pathname.startsWith("/dashboard/financials/expenses")) {
      return (
        <>
          <span className="hidden sm:inline">{lang === "vi" ? "Tài chính - " : "Financials - "}</span>
          {lang === "vi" ? "Khoản chi" : "Expenses"}
        </>
      );
    }
    if (pathname.startsWith("/dashboard/financials")) return t("header.financials");
    return t("header.dashboard");
  };

  return (
    <header className="w-full flex items-center justify-between py-3 sm:py-4 px-3 sm:px-6 lg:px-8 bg-[#1f1f1f] border-b border-[#333333] lg:border-none sticky top-0 z-30">
      {/* Left Title & Mobile Hamburger Button */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2">
        <button
          onClick={toggleMobileSidebar}
          className="p-1.5 sm:p-2 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-200 hover:text-white hover:bg-[#333333] transition-colors lg:hidden cursor-pointer shrink-0"
          title="Toggle Navigation Menu"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-base sm:text-xl lg:text-[26px] font-bold text-white tracking-tight truncate leading-tight">
          {renderPageTitle()}
        </h1>
      </div>

      {/* Right Action Icons & Profile */}
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        {/* Search Bar (Desktop/Tablet) */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t("header.search")}
            className="pl-9 pr-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#38bdf8] w-[140px] sm:w-[180px] lg:w-[240px] transition-all"
          />
        </div>

        {/* Quick Settings Icon (Hidden on small mobile) */}
        <button
          className="p-1.5 sm:p-2.5 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-300 hover:text-white hover:bg-[#333333] transition-colors cursor-pointer hidden sm:flex items-center justify-center shrink-0"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <button
          className="p-1.5 sm:p-2.5 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-300 hover:text-white hover:bg-[#333333] transition-colors relative cursor-pointer flex items-center justify-center shrink-0"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1 right-1 sm:top-1.5 sm:right-1.5 ring-2 ring-[#1f1f1f]" />
        </button>

        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(lang === "vi" ? "en" : "vi")}
          className="px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-200 hover:text-white hover:bg-[#333333] transition-colors text-xs font-bold uppercase cursor-pointer shrink-0"
          title={lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
        >
          {lang}
        </button>

        {/* Admin User Profile with Clickable Dropdown */}
        <div className="relative shrink-0" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 pl-0.5 sm:pl-1 p-1 rounded-2xl hover:bg-[#2a2a2a] transition-all cursor-pointer focus:outline-none"
            aria-expanded={userMenuOpen}
            aria-label="User profile menu"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1464f4] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md shrink-0 ring-2 ring-white/10">
              AS
            </div>
            <div className="hidden xl:block text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Abram Schleifer</h4>
              <p className="text-[11px] text-slate-400 leading-none">{t("profile.adminRole")}</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
          </button>

          {/* User Profile Popover Dropdown Menu */}
          {userMenuOpen && (
            <div className="absolute right-0 top-12 mt-1 w-64 bg-[#262626] border border-[#3a3a3a] rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              {/* User Details Header */}
              <div className="p-3 bg-[#1f1f1f] rounded-xl border border-[#333333] space-y-1 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1464f4] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    AS
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-white leading-tight truncate">Abram Schleifer</h5>
                    <p className="text-[10px] text-slate-400 truncate">admin@vinfast.vn</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold pt-1">
                  <Shield className="w-3 h-3" />
                  <span>{t("profile.superAdmin")}</span>
                </div>
              </div>

              {/* Menu Options */}
              <div className="space-y-1">
                <Link
                  href="/dashboard"
                  onClick={() => setUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#333333] rounded-xl transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>{t("profile.overview")}</span>
                </Link>

                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    alert("Account Settings dialog");
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#333333] rounded-xl transition-colors cursor-pointer text-left"
                >
                  <Settings className="w-4 h-4 text-slate-400" />
                  <span>{t("profile.settings")}</span>
                </button>

                {/* Divider */}
                <div className="h-px bg-[#3a3a3a] my-1" />

                {/* Red Logout CTA Button */}
                <Link
                  href="/"
                  onClick={() => setUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4 text-rose-400" />
                  <span>{t("profile.logout")}</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
