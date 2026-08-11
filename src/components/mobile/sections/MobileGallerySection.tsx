"use client";

import React from "react";
import Image from "next/image";

export function MobileGallerySection() {
  return (
    <section className="py-12 px-5 theme-bg border-t border-slate-800/40">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Phong cách sống di chuyển xanh
          </span>
          <h2 className="text-2xl font-extrabold theme-text tracking-tight">
            THƯ VIỆN HÌNH ẢNH
          </h2>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800/60 shadow-lg">
            <Image
              src="/section/Gallery.jpg"
              alt="VinFast Mobile Gallery 1"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800/60 shadow-lg">
            <Image
              src="/section/contact.jpg"
              alt="VinFast Mobile Gallery 2"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
