import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VinFast EV Platform - Xe Máy Điện Thông Minh VinFast Chính Thức",
  description:
    "Trang web chính thức VinFast EV. Khám phá các dòng xe máy điện thông minh VinFast Klara, Feliz, Vento, Evo200 với công nghệ pin CATL, trợ lý ảo AI và trạm sạc V-GREEN toàn quốc.",
  keywords: [
    "VinFast",
    "Xe máy điện VinFast",
    "VinFast Klara",
    "VinFast EV",
    "Xe điện thông minh",
    "Pin CATL",
    "Trạm sạc V-GREEN",
    "Đặt cọc VinFast",
  ],
  authors: [{ name: "VinFast Vietnam", url: "https://vinfastauto.com" }],
  metadataBase: new URL("https://vinfast-ev.vn"),
  openGraph: {
    title: "VinFast EV Platform - Xe Máy Điện Thông Minh",
    description:
      "Tận hưởng công nghệ tiên phong từ VinFast: Động cơ điện Bosch, pin LFP/CATL sạc siêu nhanh, trợ lý ảo AI Tiếng Việt.",
    url: "https://vinfast-ev.vn",
    siteName: "VinFast EV Platform",
    images: [
      {
        url: "/section/sec1.png",
        width: 1200,
        height: 630,
        alt: "VinFast Klara Smart Electric Scooter Showcase",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VinFast EV Platform - Xe Máy Điện Thông Minh",
    description: "Xe máy điện thông minh VinFast - Công nghệ xanh cho tương lai.",
    images: ["/section/sec1.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoDealer",
      "@id": "https://vinfast-ev.vn/#organization",
      name: "VinFast Official EV Platform",
      url: "https://vinfast-ev.vn",
      logo: "https://vinfast-ev.vn/VinFast-logo-2026.webp",
      image: "https://vinfast-ev.vn/section/Banner.png",
      description:
        "Nền tảng chính thức giới thiệu và đặt hàng các dòng xe máy điện thông minh VinFast tại Việt Nam.",
      telephone: "+84-123-456-789",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Số 39A Nguyễn Trãi, Thượng Đình, Thanh Xuân",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      priceRange: "21.000.000 VNĐ - 1.980.000.000 VNĐ",
    },
    {
      "@type": "Product",
      "@id": "https://vinfast-ev.vn/#product-klara",
      name: "VinFast Klara Smart Electric Scooter",
      image: "https://vinfast-ev.vn/section/sec1.png",
      description:
        "Xe máy điện thông minh VinFast Klara công nghệ Đức, thiết kế Ý, khả năng lội nước IP57.",
      brand: {
        "@type": "Brand",
        name: "VinFast",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "VND",
        price: "39900000",
        availability: "https://schema.org/InStock",
        url: "https://vinfast-ev.vn/#preorder",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${mulish.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
