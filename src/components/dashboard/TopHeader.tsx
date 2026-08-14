"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { useSidebar } from "@/components/dashboard/SidebarContext";
import { Search, Settings, Bell, Menu } from "lucide-react";

export function TopHeader() {
  const { lang, setLanguage } = useLanguage();
  const { toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();

  // Dynamic Page Title mapping
  const getPageTitle = () => {
    if (pathname === "/dashboard/tracking") return "Tracking";
    if (pathname === "/dashboard/messages") return "Messages";
    if (pathname === "/dashboard/bookings") return "Bookings";
    if (pathname === "/dashboard/units") return "Units";
    if (pathname.startsWith("/dashboard/units/")) return "Unit Details";
    if (pathname === "/dashboard/calendar") return "Calendar";
    if (pathname === "/dashboard/clients") return "Clients";
    if (pathname === "/dashboard/drivers") return "Drivers";
    if (pathname.startsWith("/dashboard/financials/payments")) return "Financials - Payments";
    if (pathname.startsWith("/dashboard/financials/expenses")) return "Financials - Expenses";
    if (pathname.startsWith("/dashboard/financials")) return "Financials";
    return "Dashboard";
  };

  return (
    <header className="w-full flex items-center justify-between py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-b border-[#333333] lg:border-none sticky top-0 z-30">
      {/* Left Title & Mobile Hamburger Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleMobileSidebar}
          className="p-2 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-200 hover:text-white hover:bg-[#333333] transition-colors lg:hidden cursor-pointer"
          title="Toggle Navigation Menu"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-lg sm:text-xl lg:text-[26px] font-bold text-white tracking-tight truncate max-w-[180px] sm:max-w-none">
          {getPageTitle()}
        </h1>
      </div>

      {/* Right Action Icons & Profile */}
      <div className="flex items-center gap-2 sm:gap-3.5">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#38bdf8] w-[140px] sm:w-[180px] lg:w-[240px] transition-all"
          />
        </div>

        {/* Quick Settings Icon */}
        <button
          className="p-2 sm:p-2.5 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-300 hover:text-white hover:bg-[#333333] transition-colors cursor-pointer"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <button
          className="p-2 sm:p-2.5 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-300 hover:text-white hover:bg-[#333333] transition-colors relative cursor-pointer"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1.5 right-1.5 ring-2 ring-[#1f1f1f]" />
        </button>

        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(lang === "vi" ? "en" : "vi")}
          className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-[#333333] bg-[#2a2a2a] text-slate-200 hover:text-white hover:bg-[#333333] transition-colors text-xs font-bold uppercase cursor-pointer"
        >
          {lang}
        </button>

        {/* Admin User Profile */}
        <div className="flex items-center gap-2.5 pl-1">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1464f4] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md shrink-0">
            AS
          </div>
          <div className="hidden xl:block">
            <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Abram Schleifer</h4>
            <p className="text-[11px] text-slate-400 leading-none">Admin VinFast</p>
          </div>
        </div>
      </div>
    </header>
  );
}
