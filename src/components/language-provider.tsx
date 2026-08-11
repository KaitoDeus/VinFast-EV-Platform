"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Header Nav
    "nav.about": "Giới thiệu",
    "nav.features": "Lý do lựa chọn",
    "nav.specs": "Thông số kỹ thuật",
    "nav.colors": "Màu xe",
    "nav.faq": "Câu hỏi thường gặp",
    "nav.preorder": "Đặt trước",

    // Hero Section
    "hero.title1": "BỀN ĐẸP",
    "hero.title2": "THÔNG MINH",
    "hero.title3": "SINH THÁI",

    // Features Section
    "features.title": "Mẫu xe máy điện thông minh đầu tiên",
    "features.subtitle": "Đây là dòng xe được tích hợp nhiều công nghệ hiện đại bên trong thiết kế điệu đà nhưng giá bán lại phù hợp với đại đa số người Việt",
    "features.banner": "LÀ SẢN PHẨM TỰ VINFAST SẢN XUẤT, KHÔNG PHẢI LẮP RÁP",
    "features.f1": "Động cơ điện công nghệ Bosch cho lượng khí thải CO2 bằng 0",
    "features.f2": "Xe hỗ trợ các kết nối 3G, Bluetooth và định vị GPS",
    "features.f3": "Kiểm soát bằng smartphone",
    "features.f4": "Màn hình LED, 4,5 inch hiển thị thông tin trực quan",

    // Contact Section
    "contact.title": "Đặt mua xe ngay hôm nay để nhận những ưu đãi tốt nhất",
    "contact.phone": "Số điện thoại",
    "contact.name": "Họ Tên",
    "contact.email": "Email",
    "contact.content": "Nội dung",
    "contact.submit": "ĐẶT HÀNG NGAY",
    "contact.subtext": "* Thông tin của quý khách luôn được bảo mật.",

    // Footer
    "footer.headline": "VINFAST - WEBSITE CHÍNH THỨC",
    "footer.address": "Số 39A Nguyễn Trãi, Thượng Đình, Thanh Xuân, TP Hà Nội",
    "footer.copyright": "Trang web được tạo bởi © KaitoDeus",
    "footer.lang_vi": "Việt Nam (Tiếng Việt)",
    "footer.lang_en": "International (English)",
  },
  en: {
    // Header Nav
    "nav.about": "About Us",
    "nav.features": "Why Choose",
    "nav.specs": "Tech Specs",
    "nav.colors": "Colors",
    "nav.faq": "FAQ",
    "nav.preorder": "Pre-Order",

    // Hero Section
    "hero.title1": "DURABLE",
    "hero.title2": "SMART",
    "hero.title3": "ECO EV",

    // Features Section
    "features.title": "The First Smart Electric Scooter Platform",
    "features.subtitle": "Integrated with cutting-edge smart technology inside an elegant design tailored for global eco-friendly mobility.",
    "features.banner": "MANUFACTURED IN-HOUSE BY VINFAST, NOT ASSEMBLED",
    "features.f1": "Bosch electric powertrain technology with ZERO CO2 emissions",
    "features.f2": "Integrated 3G, Bluetooth and real-time GPS navigation",
    "features.f3": "Full smartphone app control & diagnostics",
    "features.f4": "4.5-inch intuitive HD LED digital display dashboard",

    // Contact Section
    "contact.title": "Order your VinFast EV today for exclusive launch offers",
    "contact.phone": "Phone Number",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.content": "Message / Inquiry",
    "contact.submit": "PRE-ORDER NOW",
    "contact.subtext": "* Your personal information is strictly protected.",

    // Footer
    "footer.headline": "VINFAST - OFFICIAL WEBSITE",
    "footer.address": "39A Nguyen Trai, Thuong Dinh, Thanh Xuan, Hanoi, Vietnam",
    "footer.copyright": "Website created by © KaitoDeus",
    "footer.lang_vi": "Vietnam (Vietnamese)",
    "footer.lang_en": "International (English)",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("vi");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["vi"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
