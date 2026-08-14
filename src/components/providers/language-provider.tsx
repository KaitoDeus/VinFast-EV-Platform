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
    // ─── Header Nav (Landing Page) ───
    "nav.about": "Giới thiệu",
    "nav.features": "Lý do lựa chọn",
    "nav.specs": "Thông số kỹ thuật",
    "nav.colors": "Màu xe",
    "nav.faq": "Câu hỏi thường gặp",
    "nav.preorder": "Đặt trước",

    // ─── Hero Section ───
    "hero.title1": "BỀN ĐẸP",
    "hero.title2": "THÔNG MINH",
    "hero.title3": "SINH THÁI",

    // ─── Features Section ───
    "features.title": "Mẫu xe máy điện thông minh đầu tiên",
    "features.subtitle": "Đây là dòng xe được tích hợp nhiều công nghệ hiện đại bên trong thiết kế điệu đà nhưng giá bán lại phù hợp với đại đa số người Việt",
    "features.banner": "LÀ SẢN PHẨM TỰ VINFAST SẢN XUẤT, KHÔNG PHẢI LẮP RÁP",
    "features.f1": "Động cơ điện công nghệ Bosch cho lượng khí thải CO2 bằng 0",
    "features.f2": "Xe hỗ trợ các kết nối 3G, Bluetooth và định vị GPS",
    "features.f3": "Kiểm soát bằng smartphone",
    "features.f4": "Màn hình LED, 4,5 inch hiển thị thông tin trực quan",

    // ─── Tech Specs Section ───
    "specs.card1.title": "Di chuyển được khoảng 80 km",
    "specs.card1.desc": "Xe có thể di chuyển được khoảng 80 km sau một lần sạc đầy.",
    "specs.card2.title": "Tốc độ trung bình 30 km/h",
    "specs.card2.desc": "Vận tốc tối đa 50 km/h phù hợp với đô thị.",
    "specs.card3.title": "Cốp xe dung tích lớn hơn Honda Vision",
    "specs.card3.desc": "Cốp xe Klara có dung tích lớn lên tới 22 lít chứa vừa 2 mũ bảo hiểm.",
    "specs.card4.title": 'Klara "bất tử" khi lội nước',
    "specs.card4.desc": "Với tiêu chuẩn IP57, về nguyên lý, động cơ điện của VinFast có thể ngâm nước 0,5m trong 30 phút mà không ảnh hưởng.",

    // ─── Color Selector Section ───
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

    // ─── FAQ Section ───
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

    // ─── Contact Section ───
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

    // ─── Blog Section ───
    "blog.header": "Blog thông tin",
    "blog.viewall": "Xem tất cả",
    "blog.item1.day": "05",
    "blog.item1.month": "tháng 11",
    "blog.item1.title": "Xe máy điện VinFast Klara có giá 21-54 triệu đồng/chiếc",
    "blog.item1.meta": "14 Nov 2024 | VinFast Press",
    "blog.item1.excerpt": "VinFast vừa chính thức công bố giá bán cho các phiên bản xe Klara ra mắt hôm 3/11 của hãng. Theo đó, trong lô hàng đầu tiên đến tay người tiêu dùng, Klara có giá bán hấp dẫn...",

    // ─── Footer (Landing) ───
    "footer.headline": "VINFAST - WEBSITE CHÍNH THỨC",
    "footer.address": "Số 39A Nguyễn Trãi, Thượng Đình, Thanh Xuân, TP Hà Nội",
    "footer.copyright": "Trang web được tạo bởi © KaitoDeus",
    "footer.lang_vi": "Việt Nam (Tiếng Việt)",
    "footer.lang_en": "International (English)",

    // ═══════════════════════════════════════════════════════════════════════
    // ─── DASHBOARD I18N DICTIONARY (VIETNAMESE) ───
    // ═══════════════════════════════════════════════════════════════════════

    // Sidebar
    "sidebar.dashboard": "Tổng quan",
    "sidebar.bookings": "Đơn đặt xe",
    "sidebar.units": "Kho xe điện",
    "sidebar.calendar": "Lịch trình",
    "sidebar.clients": "Khách hàng",
    "sidebar.drivers": "Tài xế",
    "sidebar.financials": "Tài chính",
    "sidebar.payments": "Khoản thu",
    "sidebar.expenses": "Khoản chi",
    "sidebar.tracking": "Định vị GPS",
    "sidebar.messages": "Tin nhắn",
    "sidebar.logout": "Đăng xuất",
    "sidebar.promoText": "Tối ưu vận hành đội xe điện & khách hàng cùng VinFast Platform",
    "sidebar.updateNow": "Nâng cấp ngay",

    // TopHeader & Page Titles
    "header.search": "Tìm kiếm...",
    "header.dashboard": "Tổng quan",
    "header.tracking": "Định vị GPS",
    "header.messages": "Tin nhắn",
    "header.bookings": "Đơn đặt xe",
    "header.units": "Kho xe điện",
    "header.unitDetails": "Chi tiết xe",
    "header.calendar": "Lịch trình",
    "header.clients": "Khách hàng",
    "header.drivers": "Tài xế",
    "header.payments": "Khoản thu & Hóa đơn",
    "header.expenses": "Khoản chi & Chi phí",
    "header.financials": "Tài chính",
    "profile.adminRole": "Quản trị viên VinFast",
    "profile.superAdmin": "Tài khoản Super Admin",
    "profile.overview": "Tổng quan Dashboard",
    "profile.settings": "Cài đặt tài khoản",
    "profile.logout": "Đăng xuất (Logout)",

    // Common Actions
    "common.cards": "Thẻ",
    "common.table": "Bảng",
    "common.filter": "Bộ lọc",
    "common.search": "Tìm kiếm...",
    "common.all": "Tất cả",
    "common.status": "Trạng thái",
    "common.action": "Thao tác",
    "common.edit": "Sửa",
    "common.view": "Xem",
    "common.delete": "Xóa",
    "common.prev": "Trước",
    "common.next": "Sau",
    "common.resultsPerPage": "Hiển thị mỗi trang",
    "common.swipeHint": "Vuốt ngang để xem đủ cột",
    "common.check": "Kiểm tra",

    // Overview Charts & Widgets
    "overview.earningsSummary": "Thống kê doanh thu",
    "overview.last8Month": "8 tháng qua",
    "overview.thisWeek": "Tuần này",
    "overview.thisYear": "Năm nay",
    "overview.rentStatus": "Trạng thái thuê",
    "overview.totalStatus": "Tổng trạng thái",
    "overview.hired": "Đang thuê",
    "overview.pending": "Chờ duyệt",
    "overview.cancelled": "Đã hủy",
    "overview.carAvailability": "Tra cứu xe sẵn sàng",
    "overview.checkAvailability": "Kiểm tra ngay",
    "overview.bookingsOverview": "Tổng quan đơn đặt",
    "overview.reminders": "Nhắc nhở & Bảo dưỡng",
    "overview.reminder1": "Kiểm tra và bảo dưỡng định kỳ các xe trong đội xe.",
    "overview.reminder2": "Cập nhật bảng giá thuê xe cho mùa du lịch sắp tới.",
    "overview.reminder3": "Xem xét đánh giá của khách hàng và cải thiện chất lượng dịch vụ.",
    "overview.carTypes": "Phân loại dòng xe",

    // Metric Cards (Overview)
    "metrics.revenue": "Tổng doanh thu",
    "metrics.bookings": "Đơn đặt mới",
    "metrics.rented": "Xe đang cho thuê",
    "metrics.available": "Xe sẵn sàng",
    "metrics.fromLastWeek": "so với tuần trước",
    "metrics.units": "Xe",

    // Bookings Module
    "bookings.title": "Đơn Đặt Xe",
    "bookings.id": "Mã đơn",
    "bookings.date": "Ngày đặt",
    "bookings.client": "Khách hàng",
    "bookings.car": "Dòng xe",
    "bookings.plan": "Gói thuê",
    "bookings.period": "Thời gian thuê",
    "bookings.driver": "Tài xế",
    "bookings.payment": "Thanh toán",
    "bookings.status": "Trạng thái",
    "bookings.add": "Thêm đơn đặt",
    "bookings.carType": "Loại xe",
    "bookings.assigned": "Đã có",
    "bookings.none": "Không",

    // Financials Module
    "financials.invoices": "Danh sách hóa đơn",
    "financials.expensesList": "Danh mục chi phí",
    "financials.createInvoice": "Tạo hóa đơn",
    "financials.ratePerDay": "Giá / Ngày",
    "financials.dueDate": "Hạn thanh toán",
    "financials.amount": "Số tiền",
    "financials.category": "Danh mục",
    "financials.quantity": "Số lượng",
    "financials.balance": "Số dư hiện tại",
    "financials.income": "Tổng thu nhập",
    "financials.expenses": "Tổng chi phí",
    "financials.searchInvoice": "Tìm hóa đơn, khách hàng...",
    "financials.searchExpense": "Tìm kiếm khoản chi...",

    // Tracking Module
    "tracking.searchPlaceholder": "Tìm xe, biển số, khách hàng...",
    "tracking.battery": "Dung lượng pin",
    "tracking.speed": "Tốc độ",
    "tracking.range": "Quãng đường còn lại",
    "tracking.temp": "Nhiệt độ động cơ",
    "tracking.addVehicle": "Thêm xe theo dõi",
    "tracking.sendMsg": "Gửi tin nhắn",
    "tracking.carType": "Loại xe",
    "tracking.carNumber": "Biển số xe",
    "tracking.rentInfo": "Thông tin thuê",

    // Messages Module
    "messages.searchPlaceholder": "Tìm kiếm cuộc trò chuyện...",
    "messages.online": "Trực tuyến",
    "messages.offline": "Ngoại tuyến",
    "messages.typePlaceholder": "Nhập nội dung tin nhắn...",
    "messages.send": "Gửi tin nhắn",
    "messages.today": "Hôm nay",
    "messages.yesterday": "Hôm qua",

    // Footer
    "footer.dashboardCopyright": "Nền tảng Quản trị & Vận hành Đội xe VinFast EV © 2026",
  },
  en: {
    // ─── Header Nav (Landing Page) ───
    "nav.about": "About Us",
    "nav.features": "Why Choose",
    "nav.specs": "Tech Specs",
    "nav.colors": "Colors",
    "nav.faq": "FAQ",
    "nav.preorder": "Pre-Order",

    // ─── Hero Section ───
    "hero.title1": "DURABLE",
    "hero.title2": "SMART",
    "hero.title3": "ECO EV",

    // ─── Features Section ───
    "features.title": "The First Smart Electric Scooter Platform",
    "features.subtitle": "Integrated with cutting-edge smart technology inside an elegant design tailored for global eco-friendly mobility.",
    "features.banner": "MANUFACTURED IN-HOUSE BY VINFAST, NOT ASSEMBLED",
    "features.f1": "Bosch electric powertrain technology with ZERO CO2 emissions",
    "features.f2": "Supports 3G connectivity, Bluetooth sync, and GPS navigation",
    "features.f3": "Smartphone App Remote Control & Diagnostics",
    "features.f4": "4.5-inch intuitive HD LED digital display dashboard",

    // ─── Tech Specs Section ───
    "specs.card1.title": "Range Up to 80 km Per Charge",
    "specs.card1.desc": "Provides a range of up to 80 km on a single full battery charge.",
    "specs.card2.title": "Average Speed 30 km/h",
    "specs.card2.desc": "Top speed of 50 km/h designed specifically for safe urban commuting.",
    "specs.card3.title": "Extra Large Trunk Storage Space",
    "specs.card3.desc": "Spacious 22-liter under-seat storage capacity fits two helmets easily.",
    "specs.card4.title": "IP57 Waterproof Flood Protection",
    "specs.card4.desc": "Built to IP57 waterproof standards, withstanding 0.5m water submersion for 30 minutes seamlessly.",

    // ─── Color Selector Section ───
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

    // ─── FAQ Section ───
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

    // ─── Contact Section ───
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

    // ─── Blog Section ───
    "blog.header": "Latest News & Blog",
    "blog.viewall": "View All",
    "blog.item1.day": "05",
    "blog.item1.month": "November",
    "blog.item1.title": "VinFast Klara Smart Electric Scooter Launch Details Announced",
    "blog.item1.meta": "14 Nov 2024 | VinFast Press",
    "blog.item1.excerpt": "VinFast officially announces the pricing and launch specifications for Klara smart electric scooter models, delivering eco-friendly mobility and connected features...",

    // ─── Footer (Landing) ───
    "footer.headline": "VINFAST - OFFICIAL WEBSITE",
    "footer.address": "39A Nguyen Trai, Thuong Dinh, Thanh Xuan, Hanoi, Vietnam",
    "footer.copyright": "Website created by © KaitoDeus",
    "footer.lang_vi": "Vietnam (Vietnamese)",
    "footer.lang_en": "International (English)",

    // ═══════════════════════════════════════════════════════════════════════
    // ─── DASHBOARD I18N DICTIONARY (ENGLISH) ───
    // ═══════════════════════════════════════════════════════════════════════

    // Sidebar
    "sidebar.dashboard": "Dashboard",
    "sidebar.bookings": "Bookings",
    "sidebar.units": "Units",
    "sidebar.calendar": "Calendar",
    "sidebar.clients": "Clients",
    "sidebar.drivers": "Drivers",
    "sidebar.financials": "Financials",
    "sidebar.payments": "Payments",
    "sidebar.expenses": "Expenses",
    "sidebar.tracking": "Tracking",
    "sidebar.messages": "Messages",
    "sidebar.logout": "Logout",
    "sidebar.promoText": "Optimize EV fleet operations & satisfaction with VinFast Platform",
    "sidebar.updateNow": "Update Now",

    // TopHeader & Page Titles
    "header.search": "Search...",
    "header.dashboard": "Dashboard",
    "header.tracking": "Tracking",
    "header.messages": "Messages",
    "header.bookings": "Bookings",
    "header.units": "Units",
    "header.unitDetails": "Unit Details",
    "header.calendar": "Calendar",
    "header.clients": "Clients",
    "header.drivers": "Drivers",
    "header.payments": "Financials - Payments",
    "header.expenses": "Financials - Expenses",
    "header.financials": "Financials",
    "profile.adminRole": "Admin VinFast",
    "profile.superAdmin": "Super Admin Account",
    "profile.overview": "Dashboard Overview",
    "profile.settings": "Account Settings",
    "profile.logout": "Logout",

    // Common Actions
    "common.cards": "Cards",
    "common.table": "Table",
    "common.filter": "Filter",
    "common.search": "Search...",
    "common.all": "All",
    "common.status": "Status",
    "common.action": "Action",
    "common.edit": "Edit",
    "common.view": "View",
    "common.delete": "Delete",
    "common.prev": "Prev",
    "common.next": "Next",
    "common.resultsPerPage": "Results per page",
    "common.swipeHint": "Swipe horizontally to see all columns",
    "common.check": "Check",

    // Overview Charts & Widgets
    "overview.earningsSummary": "Earnings Summary",
    "overview.last8Month": "Last 8 Month",
    "overview.thisWeek": "This Week",
    "overview.thisYear": "This Year",
    "overview.rentStatus": "Rent Status",
    "overview.totalStatus": "Total Status",
    "overview.hired": "Hired",
    "overview.pending": "Pending",
    "overview.cancelled": "Cancelled",
    "overview.carAvailability": "Car Availability",
    "overview.checkAvailability": "Check",
    "overview.bookingsOverview": "Bookings Overview",
    "overview.reminders": "Reminders",
    "overview.reminder1": "Inspect and service the fleet vehicles.",
    "overview.reminder2": "Update the car rental pricing plans for the upcoming season.",
    "overview.reminder3": "Review customer feedback and implement improvements.",
    "overview.carTypes": "Car Types",

    // Metric Cards (Overview)
    "metrics.revenue": "Total Revenue",
    "metrics.bookings": "New Bookings",
    "metrics.rented": "Rented Cars",
    "metrics.available": "Available Cars",
    "metrics.fromLastWeek": "from last week",
    "metrics.units": "Unit",

    // Bookings Module
    "bookings.title": "Car Bookings",
    "bookings.id": "Booking ID",
    "bookings.date": "Booking Date",
    "bookings.client": "Client Name",
    "bookings.car": "Car Model",
    "bookings.plan": "Plan",
    "bookings.period": "Rental Period",
    "bookings.driver": "Driver",
    "bookings.payment": "Payment",
    "bookings.status": "Status",
    "bookings.add": "Add Booking",
    "bookings.carType": "Car Type",
    "bookings.assigned": "Assigned",
    "bookings.none": "None",

    // Financials Module
    "financials.invoices": "Invoices",
    "financials.expensesList": "Expenses",
    "financials.createInvoice": "Create Invoice",
    "financials.ratePerDay": "Rate / Day",
    "financials.dueDate": "Due Date",
    "financials.amount": "Amount",
    "financials.category": "Category",
    "financials.quantity": "Quantity",
    "financials.balance": "Total Balance",
    "financials.income": "Total Income",
    "financials.expenses": "Total Expenses",
    "financials.searchInvoice": "Search Invoice, client name, etc",
    "financials.searchExpense": "Search expense, item name...",

    // Tracking Module
    "tracking.searchPlaceholder": "Search vehicle, plate, client...",
    "tracking.battery": "Battery Capacity",
    "tracking.speed": "Speed",
    "tracking.range": "Remaining Range",
    "tracking.temp": "Motor Temperature",
    "tracking.addVehicle": "Add to Tracking",
    "tracking.sendMsg": "Send a Message",
    "tracking.carType": "Car Type",
    "tracking.carNumber": "Car Number",
    "tracking.rentInfo": "Rent Info",

    // Messages Module
    "messages.searchPlaceholder": "Search conversations...",
    "messages.online": "Online",
    "messages.offline": "Offline",
    "messages.typePlaceholder": "Type a message...",
    "messages.send": "Send Message",
    "messages.today": "Today",
    "messages.yesterday": "Yesterday",

    // Footer
    "footer.dashboardCopyright": "VinFast EV Fleet Management Platform © 2026",
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
