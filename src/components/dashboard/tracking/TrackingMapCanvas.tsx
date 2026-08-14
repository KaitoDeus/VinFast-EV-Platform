"use client";

import React from "react";

export function TrackingMapCanvas() {
  const embedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=-118.2650%2C34.0380%2C-118.2350%2C34.0580&layer=mapnik&marker=34.0480%2C-118.2500";

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden border border-[#333333] bg-[#1f1f1f]">
      {/* ─── Real OpenStreetMap with Dark Mode CSS Filter ─── */}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        className="border-0 w-full h-full invert-[0.88] hue-rotate-180 saturate-[0.85] contrast-[1.1] opacity-80"
        title="Live Vehicle Tracking Map"
        loading="lazy"
      />

      {/* ─── SVG overlay: route polyline + vehicle marker ─── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 480"
        preserveAspectRatio="none"
      >
        {/* Route polyline */}
        <path
          d="M 710,100 L 620,200 L 530,300 L 440,260 L 350,150"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Vehicle marker — red car icon with pulse ring */}
        <g transform="translate(440, 260)">
          <circle r="22" fill="#f43f5e" opacity="0.25" className="animate-ping" />
          <circle r="14" fill="#f43f5e" opacity="0.40" />
          <rect x="-10" y="-15" width="20" height="30" rx="8" fill="#f43f5e" stroke="#fff" strokeWidth="2" />
          <rect x="-6" y="-9" width="12" height="6" rx="2" fill="#fff" />
          <rect x="-6" y="5" width="12" height="3" rx="1" fill="#fff" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
