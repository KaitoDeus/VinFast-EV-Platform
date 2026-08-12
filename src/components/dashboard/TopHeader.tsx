"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider";
import { Search, Settings, Bell, Sun, Moon } from "lucide-react";

export function TopHeader() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLanguage } = useLanguage();
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
    <header className="w-full flex items-center justify-between py-4 px-8 theme-header border-none">
      <div>
        <h1 className="text-[26px] font-bold theme-text tracking-tight">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 text-sm rounded-xl contact-input border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-[#00a8ff] w-[200px] lg:w-[260px] transition-all"
          />
        </div>

        {/* Quick Settings Icon */}
        <button className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Settings className="w-4 h-4" />
        </button>

        {/* Notification Bell */}
        <button className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 ring-2 ring-white dark:ring-slate-900" />
        </button>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>

        {/* Language Switcher */}
        <button
          onClick={() => setLanguage(lang === "vi" ? "en" : "vi")}
          className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 theme-text hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold uppercase"
        >
          {lang}
        </button>

        {/* Admin User Profile */}
        <div className="flex items-center gap-3 pl-2">
          <div className="w-9 h-9 rounded-full bg-[#1464f4] text-white flex items-center justify-center font-bold text-sm shadow-md">
            AS
          </div>
          <div className="hidden xl:block">
            <h4 className="text-sm font-bold theme-text leading-tight">Abram Schleifer</h4>
            <p className="text-xs theme-muted leading-none">Admin VinFast</p>
          </div>
        </div>
      </div>
    </header>
  );
}
