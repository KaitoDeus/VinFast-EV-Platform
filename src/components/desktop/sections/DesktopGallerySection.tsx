"use client";

import React from "react";
import Image from "next/image";

export function DesktopGallerySection() {
  return (
    <section className="py-24 theme-bg border-t border-slate-800/40">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
            Phong cách sống di chuyển xanh
          </h2>
          <p className="text-4xl font-extrabold theme-text tracking-tight">
            THƯ VIỆN HÌNH ẢNH VINFAST EV
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 relative aspect-[16/9] rounded-3xl overflow-hidden border border-slate-800/60 dark:border-slate-800 light:border-slate-200 shadow-2xl group">
            <Image
              src="/section/Gallery.jpg"
              alt="VinFast Lifestyle Gallery"
              fill
              sizes="66vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="col-span-4 relative rounded-3xl overflow-hidden border border-slate-800/60 dark:border-slate-800 light:border-slate-200 shadow-2xl group">
            <Image
              src="/section/contact.jpg"
              alt="VinFast EV Contact & Test Drive"
              fill
              sizes="33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
