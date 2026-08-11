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

    // Tech Specs Section
    "specs.card1.title": "Di chuyển được khoảng 80 km",
    "specs.card1.desc": "Xe có thể di chuyển được khoảng 80 km sau một lần sạc đầy.",
    "specs.card2.title": "Tốc độ trung bình 30 km/h",
    "specs.card2.desc": "Vận tốc tối đa 50 km/h phù hợp với đô thị.",
    "specs.card3.title": "Cốp xe dung tích lớn hơn Honda Vision",
    "specs.card3.desc": "Cốp xe Klara có dung tích lớn lên tới 22 lít chứa vừa 2 mũ bảo hiểm.",
    "specs.card4.title": 'Klara "bất tử" khi lội nước',
    "specs.card4.desc": "Với tiêu chuẩn IP57, về nguyên lý, động cơ điện của VinFast có thể ngâm nước 0,5m trong 30 phút mà không ảnh hưởng.",

    // Color Selector Section
    "colors.headline": "6 MÀU SƠN",
    "colors.subtitle": "Phù hợp với mọi lứa tuổi, giới tính",
    "colors.prop1.title": "Kỹ thuật Đức",
    "colors.prop1.desc": "Linh kiện được sản xuất theo công nghệ Đức.",
    "colors.prop2.title": "Thiết kế Ý",
    "colors.prop2.desc": "Được thiết kế bởi nhà thiết kế ô tô hàng đầu Italy.",
    "colors.prop3.title": "Tiêu chuẩn Quốc tế",
    "colors.prop3.desc": "Nội, ngoại thất sang chảnh nhưng vẫn mang đậm bản sắc của Việt Nam.",
    "colors.prop4.title": "Bản sắc Việt",
    "colors.prop4.desc": "Nội, ngoại thất sang chảnh nhưng vẫn mang đậm bản sắc của Việt Nam.",

    // FAQ Section
    "faq.title": "Mẫu xe máy điện thông minh đầu tiên",
    "faq.q1": "Xe sạc đầy đi được bao lâu?",
    "faq.a1": "Trong điều kiện tiêu chuẩn, VinFast Klara có thể di chuyển khoảng 80 km sau mỗi lần sạc đầy.",
    "faq.q2": "Có dễ dàng thay thế pin khi hết điện không?",
    "faq.a2": "Pin Lithium-ion của VinFast được thiết kế tháo rời dễ dàng, hỗ trợ đổi pin nhanh tại hệ thống trạm sạc V-GREEN toàn quốc.",
    "faq.q3": "Vận tốc tối đa mà xe đạt được là bao nhiêu?",
    "faq.a3": "Xe có thể đạt vận tốc tối đa lên tới 50 km/h, rất phù hợp và an toàn khi di chuyển trong đô thị.",
    "faq.q4": "Xe đi ngập nước tối đa bao nhiêu mét?",
    "faq.a4": "Động cơ đạt tiêu chuẩn chống nước IP57, có khả năng ngâm nước sâu 0,5m liên tục trong 30 phút mà vẫn hoạt động bình thường.",
    "faq.q5": "Dung tích cốp xe?",
    "faq.a5": "Cốp xe Klara có dung tích lớn lên tới 22 lít, đủ sức chứa 2 mũ bảo hiểm nửa đầu cùng nhiều vật dụng cá nhân.",
    "faq.q6": "Xe cần sạc thường xuyên khi chưa hết điện không?",
    "faq.a6": "Pin Lithium-ion cao cấp không bị hiện tượng chai pin khi sạc nhồi, bạn có thể sạc bất cứ lúc nào thuận tiện.",

    // Contact Section & Colors
    "contact.title": "Đặt mua xe ngay hôm nay để nhận những ưu đãi tốt nhất",
    "contact.phone": "Số điện thoại",
    "contact.name": "Họ Tên",
    "contact.email": "Email",
    "contact.content": "Nội dung",
    "contact.submit": "ĐẶT HÀNG NGAY",
    "contact.subtext": "* Thông tin của quý khách luôn được bảo mật.",
    "contact.alert": "Cảm ơn quý khách đã đăng ký đặt mua xe VinFast! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.",
    "color.blue": "Xanh",
    "color.red": "Đỏ",
    "color.purple": "Tím",
    "color.yellow": "Vàng",
    "color.white": "Trắng",
    "color.grey": "Xám",

    // Blog Section
    "blog.header": "Blog thông tin",
    "blog.viewall": "Xem tất cả",
    "blog.item1.day": "05",
    "blog.item1.month": "tháng 11",
    "blog.item1.title": "Xe máy điện VinFast Klara có giá 21-54 triệu đồng/chiếc",
    "blog.item1.meta": "14 Nov 2024 | VinFast Press",
    "blog.item1.excerpt": "VinFast vừa chính thức công bố giá bán cho các phiên bản xe Klara ra mắt hôm 3/11 của hãng. Theo đó, trong lô hàng đầu tiên đến tay người tiêu dùng, Klara có giá bán hấp dẫn...",

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
    "features.f2": "Supports 3G connectivity, Bluetooth sync, and GPS navigation",
    "features.f3": "Smartphone App Remote Control & Diagnostics",
    "features.f4": "4.5-inch intuitive HD LED digital display dashboard",

    // Tech Specs Section
    "specs.card1.title": "Range Up to 80 km Per Charge",
    "specs.card1.desc": "Provides a range of up to 80 km on a single full battery charge.",
    "specs.card2.title": "Average Speed 30 km/h",
    "specs.card2.desc": "Top speed of 50 km/h designed specifically for safe urban commuting.",
    "specs.card3.title": "Extra Large Trunk Storage Space",
    "specs.card3.desc": "Spacious 22-liter under-seat storage capacity fits two helmets easily.",
    "specs.card4.title": "IP57 Waterproof Flood Protection",
    "specs.card4.desc": "Built to IP57 waterproof standards, withstanding 0.5m water submersion for 30 minutes seamlessly.",

    // Color Selector Section
    "colors.headline": "6 EXTERIOR COLORS",
    "colors.subtitle": "Tailored for all ages, lifestyles and preferences",
    "colors.prop1.title": "German Engineering",
    "colors.prop1.desc": "Components precision-engineered according to strict German technology standards.",
    "colors.prop2.title": "Italian Styling",
    "colors.prop2.desc": "Crafted by world-class Italian automotive design studios.",
    "colors.prop3.title": "Global Standards",
    "colors.prop3.desc": "Premium interior and exterior styling built for global markets.",
    "colors.prop4.title": "Vietnamese Heritage",
    "colors.prop4.desc": "Sleek contemporary aesthetics fused with rich Vietnamese heritage.",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How far can the vehicle travel on a full charge?",
    "faq.a1": "Under standard driving conditions, VinFast Klara can travel approximately 80 km on a single full charge.",
    "faq.q2": "Is it easy to replace or swap the battery when empty?",
    "faq.a2": "VinFast Lithium-ion batteries are designed for easy removal and fast swapping at V-GREEN battery stations nationwide.",
    "faq.q3": "What is the maximum top speed of the electric scooter?",
    "faq.a3": "The scooter achieves a top speed of up to 50 km/h, engineered for safe and agile urban commuting.",
    "faq.q4": "What is the maximum water wading depth capability?",
    "faq.a4": "The IP57-rated electric powertrain can withstand continuous 0.5-meter water immersion for 30 minutes smoothly.",
    "faq.q5": "What is the trunk storage capacity?",
    "faq.a5": "The Klara trunk features a spacious 22-liter capacity, accommodating 2 helmets and personal belongings.",
    "faq.q6": "Does the battery require frequent charging before running out?",
    "faq.a6": "Advanced Lithium-ion cell chemistry prevents memory degradation, allowing convenient charging at any battery level.",

    // Contact Section & Colors
    "contact.title": "Pre-order your VinFast EV today for exclusive launch offers",
    "contact.phone": "Phone Number",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.content": "Message / Inquiry",
    "contact.submit": "PRE-ORDER NOW",
    "contact.subtext": "* Your personal information is strictly confidential and protected.",
    "contact.alert": "Thank you for pre-ordering your VinFast EV! Our customer support team will contact you shortly.",
    "color.blue": "Blue",
    "color.red": "Red",
    "color.purple": "Purple",
    "color.yellow": "Yellow",
    "color.white": "White",
    "color.grey": "Grey",

    // Blog Section
    "blog.header": "Latest News & Blog",
    "blog.viewall": "View All",
    "blog.item1.day": "05",
    "blog.item1.month": "November",
    "blog.item1.title": "VinFast Klara Smart Electric Scooter Launch Details Announced",
    "blog.item1.meta": "14 Nov 2024 | VinFast Press",
    "blog.item1.excerpt": "VinFast officially announces the pricing and launch specifications for Klara smart electric scooter models, delivering eco-friendly mobility and connected features...",

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
