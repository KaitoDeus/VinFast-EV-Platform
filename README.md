# VinFast EV Platform - AI Warranty & Sales Management System

Hệ thống Quản lý Bảo hành & Kinh doanh Xe điện VinFast thông minh tích hợp trí tuệ nhân tạo (AI Engine Analytics).

## 🚀 Công nghệ sử dụng (Tech Stack)
- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Glassmorphism Custom Utilities
- **Icons:** Lucide React Icons
- **Utility:** clsx, tailwind-merge

## 📁 Cấu trúc dự án tiêu chuẩn (Standard Architecture)

```
VinFast-EV-Platform/
├── docs/                      # Tài liệu nghiệp vụ & kỹ thuật
├── public/                    # Tài nguyên tĩnh (Hình ảnh, logo)
├── src/
│   ├── app/                   # Next.js App Router (Pages & Layouts)
│   │   ├── page.tsx           # Landing Page Showroom & Tra cứu VIN khẩn cấp
│   │   ├── showroom/          # Showroom trưng bày xe & phụ kiện
│   │   ├── warranty-lookup/   # Portal tra cứu lịch sử bảo hành theo số VIN
│   │   ├── service-center/    # Portal Trung tâm dịch vụ (SC Staff & Technician)
│   │   ├── admin-analytics/   # Executive Dashboard AI Analytics & Dự báo lỗi
│   │   ├── cart/              # Giỏ hàng & Thanh toán cọc (VietQR, VNPAY)
│   │   ├── layout.tsx         # Root Layout
│   │   └── globals.css        # VinFast Electric styling
│   ├── components/            # UI Components tái sử dụng
│   │   ├── common/            # Navbar, Footer, Badges
│   │   ├── warranty/          # VinSearchForm, WarrantyClaimList
│   │   └── showroom/          # VehicleCard, SpecFilters
│   ├── lib/                   # Utilities & Helper functions (formatCurrency, formatDate)
│   ├── services/              # WarrantyService & Mock Data Provider
│   └── types/                 # TypeScript Definitions (Vehicle, Warranty, Order, User)
├── package.json
└── tsconfig.json
```

## 🛠️ Hướng dẫn cài đặt & Chạy ứng dụng

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Chạy môi trường phát triển (Dev mode)
npm run dev

# 3. Kiểm tra Build Production
npm run build
```
