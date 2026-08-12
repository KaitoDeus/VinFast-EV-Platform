"use client";

import React from "react";
import Image from "next/image";

export function GallerySection() {
  const images = [
    { src: "/section/gallery_1.jpg", alt: "Cốp xe Klara dung tích lớn" },
    { src: "/section/gallery_2.jpg", alt: "Phanh đĩa và bánh trước VinFast Klara" },
    { src: "/section/gallery_3.jpg", alt: "Đèn LED và đầu xe VinFast Klara" },
    { src: "/section/gallery_3.jpg", alt: "Đầu xe Klara màu trắng ngà" },
    { src: "/section/gallery_4.jpg", alt: "Logo Klara S mạ chrome bên sườn xe" },
    { src: "/section/gallery_1.jpg", alt: "Cốp xe rộng rãi chứa vừa mũ bảo hiểm" },
  ];

  return (
    <section className="w-full bg-black overflow-hidden">
      <div className="w-full grid grid-cols-3 gap-0.5 bg-slate-900">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-[4/3] w-full overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="33vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export { GallerySection as DesktopGallerySection };
