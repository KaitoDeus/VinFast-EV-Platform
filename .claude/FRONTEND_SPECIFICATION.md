# TÀI LIỆU ĐẶC TẢ KỸ THUẬT FRONTEND (NEXT.JS 16 & TYPESCRIPT)
# DỰ ÁN: NỀN TẢNG ĐẶT CỌC & QUẢN TRỊ ĐỘI XE ĐIỆN VINFAST (VINFAST EV PLATFORM)

> **Dành cho:** Đội ngũ Kỹ sư Frontend (Frontend Development Team) & Fullstack Engineers  
> **Phiên bản tài liệu:** v1.1.0  
> **Ngăn xếp công nghệ:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, Turbopack  
> **Repository:** `https://github.com/KaitoDeus/VinFast-FE`  
> **Ngày phát hành:** 15/08/2026

---

## 📑 MỤC LỤC

1. [Tổng Quan Kiến Trúc Frontend](#1-tổng-quan-kiến-trúc-frontend)
2. [Cấu Trúc Thư Mục Dự Án (Project File Tree)](#2-cấu-trúc-thư-mục-dự-án-project-file-tree)
3. [Hệ Thống Thiết Kế (Design System & Color Tokens)](#3-hệ-thống-thiết-kế-design-system--color-tokens)
4. [Đặc Tả Phân Hệ & Tuyến Đường (Routes & Page Specifications)](#4-đặc-tả-phân-hệ--tuyến-đường-routes--page-specifications)
   - 4.1. B2C Landing Page (`/`) & Modal Cấp Tài Khoản Tự Động
   - 4.2. Authentication Suite (`/login`, `/register`, `/forgot-password`)
   - 4.3. B2B Fleet Management Dashboard (`/dashboard/*`)
5. [Kiến Trúc Quản Lý Trạng Thái & Providers](#5-kiến-trúc-quản-lý-trạng-thái--providers)
6. [Hệ Thống Đa Ngôn Ngữ Song Ngữ (i18n Engine: VI & EN)](#6-hệ-thống-đa-ngôn-ngữ-song-ngữ-i18n-engine-vi--en)
7. [Quy Chuẩn Thiết Kế Tối Ưu Mobile (Responsive Architecture)](#7-quy-chuẩn-thiết-kế-tối-ưu-mobile-responsive-architecture)
8. [Tối Ưu Hiệu Năng & SEO (Core Web Vitals & JSON-LD)](#8-tối-ưu-hiệu-năng--seo-core-web-vitals--json-ld)

---

## 1. TỔNG QUAN KIẾN TRÚC FRONTEND

Hệ thống Frontend được xây dựng theo chuẩn **Next.js 16 App Router** kết hợp với **Server & Client Components** phân tách rõ ràng, sử dụng **Tailwind CSS v4** và trình biên dịch siêu tốc **Turbopack**.

### 🌟 3 Phân hệ Nòng cốt:
1. **B2C Consumer Landing Page (`/`)**: Trưng bày, tương tác chọn màu 360°, cấu hình kỹ thuật pin LFP/CATL và đặt cọc trực tuyến xe máy điện thông minh VinFast (Klara, Feliz, Vento, Evo200). Tích hợp **Modal thông báo cấp tài khoản & mật khẩu ngẫu nhiên tự động** qua Email/SMS. Hỗ trợ song ngữ (VI/EN) và chuyển đổi Light/Dark mode.
2. **Authentication Suite (`/login`, `/register`, `/forgot-password`)**: Hệ thống đăng nhập, đăng ký với thanh đo độ mạnh mật khẩu (Password Strength Meter), đặt lại mật khẩu và nhập mã OTP 6 số thời gian thực kèm bộ đếm ngược. Hỗ trợ tự động điền Email (`?email=...`) khi chuyển hướng từ đơn đặt hàng.
3. **B2B Fleet Management Dashboard (`/dashboard/*`)**: Bảng điều khiển quản trị vận hành đội xe toàn diện gồm 8 phân hệ (Tracking GPS, Messages, Bookings, Units, Calendar, Clients, Drivers, Financials). Toàn bộ Dashboard được **khóa cứng Dark Mode `#1f1f1f`**.

```
                                      KIẾN TRÚC FRONTEND
  
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 Root Layout (`app/layout.tsx`)                              │
│                • Font Mulish • SEO Meta & Schema.org JSON-LD • Analytics Scripts            │
└──────────────────────────────────────────────┬──────────────────────────────────────────────┘
                                               │
               ┌───────────────────────────────┼───────────────────────────────┐
               ▼                               ▼                               ▼
  ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
  │   Landing Page (B2C)   │      │   Auth Suite (Public)  │      │  Admin Dashboard (B2B) │
  │        Route: `/`      │      │ `/login` | `/register` │      │  Route: `/dashboard/*` │
  ├────────────────────────┤      ├────────────────────────┤      ├────────────────────────┤
  │ • ThemeProvider        │      │ • AuthLayout Container │      │ • Locked Dark Mode     │
  │   (Light/Dark toggle)  │      │ • LanguageProvider     │      │   (`bg-[#1f1f1f]`)     │
  │ • LanguageProvider     │      │ • Centered VinFast Logo│      │ • SidebarProvider      │
  │ • 360° Color Picker    │      │ • 6-Digit OTP & Meter  │      │ • Dual-View Mobile     │
  │ • Auto Account Modal   │      │ • Auto Email Prefill   │      │ • Real-time GPS Maps   │
  │ • Pre-order Lead Form  │      │ • Flag Switcher (VIE)  │      │ • B2B Chat System      │
  └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

---

## 2. CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT FILE TREE)

```
VinFast-FE/
├── .claude/                             # Cấu hình AI Assistant & Tài liệu đặc tả
│   ├── CLAUDE.md                        # Quy chuẩn làm việc & hướng dẫn chung
│   ├── DESIGN_SYSTEM.md                 # Bộ quy chuẩn màu sắc, font, radii, shadows
│   ├── MEMORY.md                        # Lịch sử tiến trình, bộ nhớ dự án & roadmap
│   ├── BACKEND_JAVA_SPECIFICATION.md    # Tài liệu đặc tả dành cho Backend Java
│   └── FRONTEND_SPECIFICATION.md        # Tài liệu đặc tả kỹ thuật Frontend
├── public/                              # Tài nguyên tĩnh (Hình ảnh xe, icons, logos)
│   ├── cars/                            # Ảnh các dòng xe điện VinFast
│   ├── section/                         # Banners và hình ảnh landing page
│   ├── team/                            # Avatars khách hàng & tài xế
│   └── VinFast-logo-2026.webp           # Logo chính thức thương hiệu VinFast
├── src/
│   ├── app/                             # Next.js App Router (Pages & Layouts)
│   │   ├── layout.tsx                   # Root HTML Layout & JSON-LD Metadata
│   │   ├── page.tsx                     # B2C Landing Page
│   │   ├── login/                       # Trang Đăng nhập (Wrapped in Suspense for email prefill)
│   │   ├── register/                    # Trang Đăng ký tài khoản
│   │   ├── forgot-password/             # Trang Quên mật khẩu & OTP 6 số
│   │   └── dashboard/                   # Toàn bộ phân hệ Dashboard quản trị
│   │       ├── layout.tsx               # Dashboard Master Layout (Locked Dark Mode)
│   │       ├── page.tsx                 # Dashboard Tổng quan (Overview Charts)
│   │       ├── bookings/                # Đơn đặt xe (KPIs & Diverging Chart)
│   │       ├── calendar/                # Lịch trình nhận/trả xe theo tuần
│   │       ├── clients/                 # Quản lý danh sách khách hàng
│   │       ├── drivers/                 # Quản lý đội ngũ tài xế & ca trực
│   │       ├── financials/              # Tài chính, Dòng tiền & Chi phí
│   │       ├── messages/                # Hệ thống trò chuyện trực tiếp (Chat)
│   │       ├── tracking/                # Định vị GPS xe điện trên bản đồ OSM
│   │       └── units/                   # Quản lý kho xe & Chi tiết xe (`[id]`)
│   ├── components/                      # React UI Components
│   │   ├── auth/                        # Form Đăng nhập, Đăng ký, OTP, Layout Auth
│   │   │   ├── AuthLayout.tsx           # Layout Auth có Flag Switcher SVG
│   │   │   ├── OtpInput.tsx             # 6-digit numeric input with auto-advance & paste
│   │   │   ├── PasswordStrengthMeter.tsx# 4-segment dynamic strength bar
│   │   │   ├── SignInForm.tsx           # Sign In Form with ?email=... prefill
│   │   │   ├── SignUpForm.tsx           # Sign Up Form with elevated VinFast logo
│   │   │   └── ResetPasswordForm.tsx    # Multi-step Reset Password & OTP countdown
│   │   ├── common/                      # Reusable components
│   │   │   └── PreorderSuccessModal.tsx # Modal thông báo cấp tài khoản & mật khẩu tạm
│   │   ├── dashboard/                   # Components giao diện Dashboard
│   │   ├── desktop/                     # Components Landing page bản Desktop
│   │   ├── mobile/                      # Components Landing page bản Mobile
│   │   └── providers/                   # Context Providers (Language, Theme, Sidebar)
│   ├── domain/                          # Models & Entities
│   ├── infrastructure/                  # Analytics & Utility Handlers
│   └── types/                           # TypeScript Interface definitions
└── package.json                         # Dependencies & Scripts
```

---

## 3. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM & COLOR TOKENS)

Hệ thống thiết kế tuân thủ nghiêm ngặt các mã màu và kích thước quy chuẩn:

### 🎨 3.1. Bảng Màu Chuẩn (Color Palette)
- **Nền Dashboard Canvas (Chế độ tối bắt buộc):** `#141414` (Page Canvas), `#1f1f1f` (Card Surfaces)
- **Nền Thẻ con & Ô nhập liệu (Elevated Cards & Inputs):** `#262626` / `#2a2a2a`
- **Đường viền phân cách (Borders):** `#333333` (Default), `#3a3a3a` (Inputs), `#444444` (Hover)
- **Màu thương hiệu VinFast (Brand Signature Blue):** `#1464f4`
- **Màu nhấn công nghệ điện tử (Electric Cyan):** `#00a8ff` / `#38bdf8`
- **Màu nút hành động nổi bật (Action Red / Rose):** `#ff3366` / `#e02654`
- **Màu trạng thái thành công / Pin mạnh:** `#10b981` / `#34d399`
- **Màu trạng thái cảnh báo / Chờ duyệt:** `#f59e0b` / `#fbbf24`
- **Màu trạng thái lỗi / Quá hạn:** `#f43f5e` / `#fb7185`

### 📐 3.2. Bo Góc & Phân Cấp Typography
- **Container / Modal / Cards lớn:** `rounded-3xl` (24px) hoặc `rounded-2xl` (16px)
- **Ô nhập liệu (Inputs) & Nút bấm (Buttons):** `rounded-xl` (12px) hoặc `rounded-2xl`
- **Pills / Status Badges:** `rounded-full`
- **Font chữ:** `Mulish` (Landing page) và `system-ui, Plus Jakarta Sans, Inter` (Dashboard & Auth)

---

## 4. ĐẶC TẢ PHÂN HỆ & TUYẾN ĐƯỜNG (ROUTES & PAGE SPECS)

### 4.1. B2C Consumer Landing Page (`/`)
- **Tách biệt hiển thị Desktop (`≥ 1024px`) & Mobile (`< 1024px`)**.
- **Hero Section:** Tiêu đề động "BỀN ĐẸP - THÔNG MINH - SINH THÁI".
- **360° Color Selector:** Bộ chọn 6 màu sơn (Xanh, Đỏ, Tím, Vàng, Trắng, Xám) với hiệu ứng chuyển đổi mượt mà.
- **Features & Tech Specs:** Động cơ điện Bosch, pin CATL, tiêu chuẩn chống nước IP57, cốp 22L.
- **Pre-order Form & Modal Cấp Tài khoản Tự động (`PreorderSuccessModal.tsx`):**
  - Khách hàng điền: Số điện thoại, Họ tên, Email, Nội dung.
  - Bấm **"ĐẶT HÀNG NGAY"** ➔ Nút hiển thị spinner loading ➔ Mở Modal xác nhận thành công.
  - Modal hiển thị thông báo:
    - 🚗 Logo VinFast & Tích xanh thành công.
    - 🔑 Tài khoản quản trị đơn hàng đã được tạo tự động: Email & Số điện thoại.
    - 🔒 Mật khẩu đăng nhập tạm thời đã được sinh ngẫu nhiên và gửi về **Email** & **SMS** của khách hàng.
    - 🔘 Nút bấm **"Đăng nhập ngay để theo dõi đơn hàng ➔"**: Tự động chuyển hướng tới `/login?email=...` với Email được điền sẵn trong form đăng nhập.
- **Language & Theme Switcher:** Nút cờ SVG `🇻🇳 VIE` / `🇺🇸 ENG` và nút chuyển Light/Dark mode.

---

### 4.2. Authentication Suite

#### 1. Đăng ký tài khoản (`/register` & `/auth/signup`)
- **Header:** Nút cờ quốc gia SVG vector `🇻🇳 VIE` / `🇺🇸 ENG` góc trên bên phải.
- **Form Card:** Logo VinFast chính giữa đỉnh form.
- **Tiêu đề:** **`Sign Up`** (`Đăng ký`) - *đã loại bỏ chữ "For Free" và dòng mô tả phụ*.
- **Trường nhập:** Họ và tên (`User` icon), Email (`Mail` icon), Mật khẩu (`Lock` icon + nút mắt bật/tắt).
- **Thanh đo độ mạnh mật khẩu (PasswordStrengthMeter):** 4 phân đoạn trực quan tự động tính điểm (`Weak` ➔ `Fair` ➔ `Good` ➔ `Strong`).
- **Nút Đăng ký:** `Sign Up ➔` (`Đăng ký ➔`) màu xanh VinFast Blue kèm spinner loading.
- **Nút Google:** `Sign Up With Google` có logo Google chuẩn.
- **Chuyển hướng:** *Already have an account? Sign In.*

#### 2. Đăng nhập hệ thống (`/login` & `/auth/login`)
- **Bọc `<Suspense>` tại trang `/login/page.tsx`** để hỗ trợ `useSearchParams` an toàn khi build tĩnh.
- **Tự động điền Email:** Trích xuất tham số `?email=...` từ URL và điền sẵn vào ô Email input.
- Email, Mật khẩu có mắt ẩn/hiện, checkbox *Remember me* và liên kết *Forgot password?* trỏ tới `/forgot-password`.
- Nút `Sign In ➔` (`Đăng nhập ➔`) và nút `Sign In With Google`.

#### 3. Quên mật khẩu & Xác thực OTP 6 số (`/forgot-password` & `/auth/reset-password`)
- **Bước 1 (Nhập Email):** Nhập email nhận mã OTP ➔ Bấm `Reset Password 🔒`.
- **Bước 2 (Nhập OTP & Mật khẩu mới):**
  - Bộ 6 ô nhập OTP (`OtpInput.tsx`): Tự động nhảy ô kế tiếp, lùi ô khi Backspace, hỗ trợ Paste mã 6 số từ clipboard.
  - Bộ đếm ngược thời gian thực: `Didn't receive the code? Re-send OTP Code in 23s`.
  - Nhập mật khẩu mới kèm thanh đo độ mạnh.
- **Bước 3 (Thành công):** Thông báo thành công và tự động chuyển hướng về `/login`.

---

### 4.3. B2B Fleet Management Dashboard (`/dashboard/*`)

Tất cả các trang con trong Dashboard đều áp dụng **chế độ Dark Mode cố định `#1f1f1f`** và hỗ trợ **song ngữ 100% (VI/EN)**:

| Tuyến đường (Route) | Tên phân hệ | Các tính năng & Components trọng tâm |
|---|---|---|
| **`/dashboard`** | **Tổng quan (Overview)** | 4 Thẻ KPI doanh thu & xe, Biểu đồ doanh thu 8 tháng (`EarningsChart`), Biểu đồ trạng thái thuê (`RentStatusChart`), Tra cứu xe sẵn sàng (`CarAvailabilityWidget`), Biểu đồ cột đơn đặt (`BookingsBarChart`), Thẻ nhắc nhở bảo dưỡng (`RemindersCard`). |
| **`/dashboard/bookings`** | **Đơn đặt xe** | 4 Thẻ KPI đơn sắp tới/chờ duyệt/đã hủy/hoàn thành, Biểu đồ thanh lệch hướng (`BookingsDivergingChart`), Bảng đơn đặt xe đầy đủ (`FullBookingsTable`) hỗ trợ **Dual-View Mobile** (Chế độ Thẻ vs Chế độ Cuộn ngang). |
| **`/dashboard/units`** | **Kho xe điện** | Thanh điều khiển tìm kiếm & lọc loại xe/trạng thái (`UnitsHeaderControls`), Chế độ xem Lưới (`UnitsGridView`) & Danh sách (`UnitsListView`), Modal thêm xe mới (`AddUnitModal`). |
| **`/dashboard/units/[id]`** | **Chi tiết xe** | Thông số kỹ thuật 6 chỉ số (Hộp số, Sức chứa, Quãng đường, Pin, Tốc độ tối đa, Tăng tốc), Gallery ảnh xe, Lịch bảo dưỡng. |
| **`/dashboard/calendar`** | **Lịch trình** | Thanh điều khiển lọc Ngày/Tuần/Nhận xe/Trả xe (`CalendarHeaderControls`), Bảng lịch tuần (`CalendarGrid`), Panel chi tiết lịch trình bên phải (`ScheduleDetailPanel`). |
| **`/dashboard/clients`** | **Khách hàng** | Bảng danh sách khách hàng (`ClientsTable`), mã KH, tên, email, sđt, CCCD/Hộ chiếu, GPLX, điểm tích lũy, modal thêm/sửa khách hàng. |
| **`/dashboard/drivers`** | **Tài xế** | Bảng danh sách tài xế (`DriversTable`), giờ làm việc, đánh giá sao, trạng thái trực, Panel hồ sơ chi tiết (`DriverDetailsPanel`) kèm lịch trực tháng và nút gửi tin nhắn. |
| **`/dashboard/financials`** | **Tài chính** | 3 Thẻ KPI số dư/thu/chi, Biểu đồ dòng tiền thu chi 12 tháng (`CashflowChart`), Biểu đồ tròn phân bổ chi phí (`ExpenseBreakdownChart`), Trang con Khoản thu (`/payments`) & Khoản chi (`/expenses`). |
| **`/dashboard/tracking`** | **Định vị GPS** | Bản đồ tương tác OpenStreetMap/Leaflet hiển thị vị trí các xe điện, Danh sách xe bên trái (`TrackingSidebarList`), Thanh thông số xe trực tiếp bên dưới (`TrackingInfoBar`: Tốc độ, % pin, nhiệt độ, quãng đường còn lại). |
| **`/dashboard/messages`** | **Tin nhắn (Chat)** | Danh sách hội thoại nhóm Today/Yesterday (`ChatSidebarList`), Khung chat (`ChatMessagesList`), Thanh nhập tin nhắn (`ChatInputBar`), Hỗ trợ giao diện Master-Detail tối ưu mobile. |

---

## 5. KIẾN TRÚC QUẢN LÝ TRẠNG THÁI & PROVIDERS

Hệ thống sử dụng các React Context Providers tinh gọn, không phát sinh dependencies cồng kềnh:

```tsx
// 1. LanguageProvider (src/components/providers/language-provider.tsx)
// Cung cấp lang ("vi" | "en"), toggleLanguage(), setLanguage(), t(key: string)

// 2. SidebarProvider (src/components/dashboard/SidebarContext.tsx)
// Quản lý trạng thái mở/đóng Sidebar Drawer trên màn hình Mobile & Tablet

// 3. ThemeProvider (src/components/providers/theme-provider.tsx)
// Phục vụ độc lập cho Landing Page (Light/Dark mode)
```

---

## 6. HỆ THỐNG ĐA NGÔN NGỮ SONG NGỮ (i18N ENGINE)

Toàn bộ văn bản hiển thị trên hệ thống được định nghĩa tập trung trong từ điển song ngữ tại [`src/components/providers/language-provider.tsx`](file:///D:/VinFast-FE/src/components/providers/language-provider.tsx):

- **Cách sử dụng chuẩn trong Component:**
  ```tsx
  import { useLanguage } from "@/components/language-provider";

  export function ExampleComponent() {
    const { lang, t } = useLanguage();
    return <h1>{t("overview.earningsSummary")}</h1>;
  }
  ```
- **Các nhóm khóa chính:** `nav.*`, `hero.*`, `features.*`, `specs.*`, `contact.*` (kèm các khóa cho Modal thông báo cấp tài khoản & mật khẩu), `sidebar.*`, `header.*`, `common.*`, `overview.*`, `bookings.*`, `units.*`, `calendar.*`, `clients.*`, `drivers.*`, `financials.*`, `tracking.*`, `messages.*`, `auth.*`.

---

## 7. QUY CHUẨN THIẾT KẾ TỐI ƯU MOBILE (RESPONSIVE)

1. **Thanh điều hướng Sidebar Mobile:** Tự động ẩn trên màn hình `< 1024px`, kích hoạt bằng nút Hamburger menu trên `TopHeader.tsx` trượt mượt mà dạng Drawer kèm lớp nền mờ `backdrop-blur-sm`.
2. **Dual-View Mobile Mode (Thẻ & Bảng cuộn ngang):**
   - **Chế độ Thẻ (Cards Mode):** Mặc định hiển thị từng bản ghi dưới dạng thẻ dọc bo tròn `#262626`, đầy đủ thông tin, thao tác chạm nhanh.
   - **Chế độ Bảng (Table Mode):** Chuyển sang bảng cuộn ngang `min-w-[700px]` mượt mà có nhãn hướng dẫn `👉 Vuốt ngang để xem đủ cột`.
   - Nút chuyển đổi chế độ `[ Thẻ ] [ Bảng ]` đặt ngay góc trên bảng.
3. **Phân hệ Chat Mobile (Master-Detail Flow):** Trên mobile, khi người dùng bấm vào một cuộc hội thoại từ danh sách, giao diện tự động chuyển toàn màn hình sang khung chat kèm nút `← Quay lại` ở góc trên để quay về danh sách.

---

## 8. TỐI ƯU HIỆU NĂNG & SEO

1. **Cấu trúc Dữ liệu Có Cấu trúc (Schema.org JSON-LD):** Tích hợp sẵn schema `AutoDealer` (Đại lý xe chính thức VinFast) và `Product` (Xe máy điện thông minh VinFast Klara) tại `src/app/layout.tsx`.
2. **OpenGraph & Twitter Cards:** Tối ưu hình ảnh banner chia sẻ mạng xã hội (`/section/sec1.png`).
3. **Chỉ số Core Web Vitals:** Tối ưu tải ảnh bằng `next/image` với định dạng WebP hiện đại, kích thước responsive `sizes`, độ trễ CLS = 0.
4. **Kiểm thử biên dịch (Build Quality Gate):**
   - `npx tsc --noEmit` đạt chuẩn **0 lỗi TypeScript**.
   - `npm run build` biên dịch thành công toàn bộ **22/22 tĩnh & động routes**.
