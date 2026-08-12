"use client";

import React from "react";
import Link from "next/link";

export function DashboardFooter() {
  return (
    <footer className="w-full pt-8 pb-6 border-none flex flex-col md:flex-row items-center justify-between text-xs theme-muted gap-4">
      <p>Copyright © 2026 VinFast Platform. All rights reserved.</p>

      <div className="flex items-center gap-6">
        <Link href="#" className="hover:theme-text transition-colors">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:theme-text transition-colors">
          Term and conditions
        </Link>
        <Link href="#" className="hover:theme-text transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
