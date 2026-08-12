import React from "react";
import { ThemeProvider, LanguageProvider } from "@/components/providers";
import { Sidebar, TopHeader, DashboardFooter } from "@/components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen theme-bg theme-text flex font-sans transition-colors duration-300 selection:bg-primary selection:text-white">
          {/* Left Navigation Sidebar (Persists across route changes without re-rendering) */}
          <Sidebar />

          {/* Main Dashboard Layout Content */}
          <div className="flex-1 flex flex-col min-w-0 min-h-screen">
            {/* Top Bar Header (Persists across route changes without re-rendering) */}
            <TopHeader />

            {/* Main Dynamic Content Area */}
            <main className="flex-1 p-6 lg:p-8 space-y-6 overflow-y-auto flex flex-col justify-between">
              <div className="space-y-6">{children}</div>
              <DashboardFooter />
            </main>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
