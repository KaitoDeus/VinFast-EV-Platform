"use client";

import React, { useEffect } from "react";
import { LanguageProvider } from "@/components/providers";
import { Sidebar, TopHeader, DashboardFooter } from "@/components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Enforce dark mode exclusively across the entire Dashboard
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <LanguageProvider>
      <div className="dark min-h-screen bg-[#1f1f1f] text-white flex font-sans transition-colors duration-300 selection:bg-primary selection:text-white">
        {/* Left Navigation Sidebar */}
        <Sidebar />

        {/* Main Dashboard Layout Content */}
        <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-[#1f1f1f]">
          {/* Top Bar Header */}
          <TopHeader />

          {/* Main Dynamic Content Area */}
          <main className="flex-1 p-6 lg:p-8 space-y-6 overflow-y-auto flex flex-col justify-between bg-[#1f1f1f]">
            <div className="space-y-6">{children}</div>
            <DashboardFooter />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}
