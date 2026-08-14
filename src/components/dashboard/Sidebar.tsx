"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
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
} from "lucide-react";

export function Sidebar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [financialsOpen, setFinancialsOpen] = useState(
    pathname.startsWith("/dashboard/financials")
  );

  const navItems = [
    { name: "Dashboard", icon: LayoutGrid, href: "/dashboard" },
    { name: "Bookings", icon: CheckSquare, href: "/dashboard/bookings" },
    { name: "Units", icon: Car, href: "/dashboard/units" },
    { name: "Calendar", icon: CalendarDays, href: "/dashboard/calendar" },
    { name: "Clients", icon: UserCircle, href: "/dashboard/clients" },
    { name: "Drivers", icon: IdCard, href: "/dashboard/drivers" },
    {
      name: "Financials",
      icon: PieChart,
      href: "/dashboard/financials/payments",
      subItems: [
        { name: "Payments", href: "/dashboard/financials/payments" },
        { name: "Expenses", href: "/dashboard/financials/expenses" },
      ],
    },
    { name: "Tracking", icon: Activity, href: "/dashboard/tracking" },
    { name: "Messages", icon: MessageCircle, href: "/dashboard/messages", badge: "5" },
  ];

  return (
    <aside className="w-[260px] shrink-0 theme-header border-none flex flex-col justify-between p-6 min-h-screen">
      <div className="space-y-8">
        {/* VinFast Brand Logo (Pure Black in Light Mode, Pure White in Dark Mode) */}
        <div className="flex items-center gap-3 px-2">
          <Link href="/" className="flex items-center gap-2.5 focus:outline-none">
            <Image
              src="/VinFast-logo-2026.webp"
              alt="VinFast Official Brand Logo"
              width={160}
              height={40}
              style={{
                filter: theme === "dark" ? "brightness(0) invert(1)" : "brightness(0)",
              }}
              className="h-8 w-auto object-contain transition-all block"
              priority
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
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
                        ? "bg-[#edf7fc] text-[#00a8ff] border-[#bae6fd] dark:bg-slate-800 dark:text-[#38bdf8] dark:border-sky-800 shadow-2xs font-bold"
                        : "border-transparent text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className={`w-5 h-5 transition-colors ${
                          isSubActive
                            ? "text-[#00a8ff] dark:text-[#38bdf8]"
                            : "text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white"
                        }`}
                      />
                      <span className="tracking-tight text-slate-900 dark:text-slate-100 font-semibold group-hover:text-black dark:group-hover:text-white">
                        {item.name}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform duration-200 ${
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
                            className={`block px-4 py-2 rounded-xl text-xs transition-all border ${
                              isCurrentSub
                                ? "bg-[#edf7fc] text-[#00a8ff] font-bold border-sky-200 dark:bg-slate-800 dark:text-[#38bdf8] dark:border-sky-800 shadow-2xs"
                                : "border-transparent text-slate-800 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white"
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
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all border group ${
                  isParentActive
                    ? "bg-[#edf7fc] text-[#00a8ff] border-[#bae6fd] dark:bg-slate-800 dark:text-[#38bdf8] dark:border-sky-800 shadow-2xs font-bold"
                    : "border-transparent text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={`w-5 h-5 transition-colors ${
                      isParentActive
                        ? "text-[#00a8ff] dark:text-[#38bdf8]"
                        : "text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white"
                    }`}
                  />
                  <span className="tracking-tight text-slate-900 dark:text-slate-100 font-semibold group-hover:text-black dark:group-hover:text-white">
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
      <div className="space-y-6 pt-6">
        {/* Dark Red/Cyan Gradient Banner */}
        <div className="relative rounded-2xl p-5 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white shadow-xl border border-rose-900/30">
          <div className="relative z-10 space-y-3">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-[13px] font-medium text-slate-200 leading-snug">
              Optimize your EV fleet operations & customer satisfaction with VinFast Platform
            </p>
            <button className="bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors shadow-sm cursor-pointer">
              Update Now
            </button>
          </div>
        </div>

        {/* Logout Link */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[15px] font-semibold text-slate-900 dark:text-slate-200 hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-rose-600 transition-colors"
        >
          <LogOut className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-rose-600" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
