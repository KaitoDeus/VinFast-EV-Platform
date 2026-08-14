"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { useSidebar } from "@/components/dashboard/SidebarContext";
import {
  LayoutGrid,
  CheckSquare,
  Car,
  CalendarDays,
  UserCircle,
  IdCard,
  PieChart,
  Activity,
  MessageCircle,
  LogOut,
  Sparkles,
  ChevronDown,
  X,
} from "lucide-react";

export function Sidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const { isMobileOpen, closeMobileSidebar } = useSidebar();
  const [financialsOpen, setFinancialsOpen] = useState(
    pathname.startsWith("/dashboard/financials")
  );

  const navItems = [
    { name: t("sidebar.dashboard"), icon: LayoutGrid, href: "/dashboard" },
    { name: t("sidebar.bookings"), icon: CheckSquare, href: "/dashboard/bookings" },
    { name: t("sidebar.units"), icon: Car, href: "/dashboard/units" },
    { name: t("sidebar.calendar"), icon: CalendarDays, href: "/dashboard/calendar" },
    { name: t("sidebar.clients"), icon: UserCircle, href: "/dashboard/clients" },
    { name: t("sidebar.drivers"), icon: IdCard, href: "/dashboard/drivers" },
    {
      name: t("sidebar.financials"),
      icon: PieChart,
      href: "/dashboard/financials/payments",
      subItems: [
        { name: t("sidebar.payments"), href: "/dashboard/financials/payments" },
        { name: t("sidebar.expenses"), href: "/dashboard/financials/expenses" },
      ],
    },
    { name: t("sidebar.tracking"), icon: Activity, href: "/dashboard/tracking" },
    { name: t("sidebar.messages"), icon: MessageCircle, href: "/dashboard/messages", badge: "5" },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay (Visible only on < 1024px when drawer is open) */}
      {isMobileOpen && (
        <div
          onClick={closeMobileSidebar}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300 animate-fade-in"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar (Desktop fixed width & Mobile slide-out drawer) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[270px] sm:w-[280px] lg:w-[260px] shrink-0 bg-[#1f1f1f] border-r border-[#333333] flex flex-col justify-between p-6 min-h-screen overflow-y-auto transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div className="space-y-7">
          {/* Top Logo & Mobile Close Button */}
          <div className="flex items-center justify-between px-1">
            <Link
              href="/"
              onClick={closeMobileSidebar}
              className="flex items-center gap-2.5 focus:outline-none"
            >
              <Image
                src="/VinFast-logo-2026.webp"
                alt="VinFast Official Brand Logo"
                width={150}
                height={38}
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                className="h-7 sm:h-8 w-auto object-contain transition-all block"
                priority
              />
            </Link>

            {/* Close Button on Mobile Drawer */}
            <button
              onClick={closeMobileSidebar}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-[#2a2a2a] transition-colors lg:hidden cursor-pointer"
              title="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isParentActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : item.href !== "#" && pathname.startsWith(item.href.split("/payments")[0]);

              if (item.subItems) {
                const isSubActive = pathname.startsWith("/dashboard/financials");

                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setFinancialsOpen(!financialsOpen)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all border group cursor-pointer ${
                        isSubActive
                          ? "bg-[#2a2a2a] text-[#38bdf8] border-[#38bdf8]/40 shadow-2xs font-bold"
                          : "border-transparent text-slate-300 hover:bg-[#2a2a2a] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className={`w-5 h-5 transition-colors ${
                            isSubActive
                              ? "text-[#38bdf8]"
                              : "text-slate-400 group-hover:text-white"
                          }`}
                        />
                        <span className="tracking-tight text-slate-200 font-semibold group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          financialsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Sub-items List (Payments & Expenses) */}
                    {financialsOpen && (
                      <div className="pl-11 space-y-1 pt-0.5">
                        {item.subItems.map((sub) => {
                          const isCurrentSub = pathname === sub.href;

                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMobileSidebar}
                              className={`block px-4 py-2 rounded-xl text-xs transition-all border ${
                                isCurrentSub
                                  ? "bg-[#2a2a2a] text-[#38bdf8] font-bold border-[#38bdf8]/40 shadow-2xs"
                                  : "border-transparent text-slate-300 font-semibold hover:bg-[#2a2a2a] hover:text-white"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileSidebar}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all border group ${
                    isParentActive
                      ? "bg-[#2a2a2a] text-[#38bdf8] border-[#38bdf8]/40 shadow-2xs font-bold"
                      : "border-transparent text-slate-300 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={`w-5 h-5 transition-colors ${
                        isParentActive
                          ? "text-[#38bdf8]"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    <span className="tracking-tight text-slate-200 font-semibold group-hover:text-white">
                      {item.name}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="w-5 h-5 rounded-full bg-[#ff3366] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Upgrade Promo Card & Logout */}
        <div className="space-y-5 pt-6">
          {/* Promo Card */}
          <div className="relative rounded-2xl p-4.5 overflow-hidden bg-gradient-to-br from-[#181818] via-[#2a1b24] to-[#181818] text-white shadow-xl border border-rose-950/40">
            <div className="relative z-10 space-y-2.5">
              <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <p className="text-[12px] font-medium text-slate-300 leading-snug">
                {t("sidebar.promoText")}
              </p>
              <button className="bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors shadow-sm cursor-pointer">
                {t("sidebar.updateNow")}
              </button>
            </div>
          </div>

          {/* Logout Link */}
          <Link
            href="/"
            onClick={closeMobileSidebar}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-rose-950/30 hover:text-rose-400 transition-colors"
          >
            <LogOut className="w-4 h-4 text-slate-400 group-hover:text-rose-400" />
            <span>{t("sidebar.logout")}</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
