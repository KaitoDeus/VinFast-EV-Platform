"use client";

import React, { useState } from "react";
import Image from "next/image";

interface UnitHeroGalleryProps {
  mainImage: string;
  galleryImages: string[];
  modelName: string;
}

export function UnitHeroGallery({
  mainImage,
  galleryImages,
  modelName,
}: UnitHeroGalleryProps) {
  const images = galleryImages && galleryImages.length >= 3 ? galleryImages : [mainImage, mainImage, mainImage];
  const [selectedImage, setSelectedImage] = useState(images[0] || mainImage);

  return (
    <div className="space-y-4">
      {/* Large Main Car Image Card */}
      <div className="theme-card rounded-2xl border shadow-sm p-8 flex items-center justify-center relative min-h-[280px] lg:min-h-[340px] overflow-hidden">
        <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px]">
          <Image
            src={selectedImage}
            alt={modelName}
            fill
            sizes="(max-width: 1200px) 100vw, 60vw"
            className="object-contain transition-all duration-300 transform hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* 3 Thumbnail Gallery Cards */}
      <div className="grid grid-cols-3 gap-4">
        {images.slice(0, 3).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`theme-card rounded-2xl border p-4 flex items-center justify-center transition-all relative h-[90px] sm:h-[110px] ${
              selectedImage === img
                ? "ring-2 ring-[#00a8ff] border-transparent shadow-md scale-[1.02]"
                : "hover:border-slate-300 dark:hover:border-slate-700 opacity-80 hover:opacity-100"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`${modelName} angle ${idx + 1}`}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
