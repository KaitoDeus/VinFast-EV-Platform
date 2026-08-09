# VinFast EV Platform

Hệ thống Quản lý Bảo hành & Kinh doanh Xe điện VinFast.

## Công nghệ sử dụng (Tech Stack)

- Framework: Next.js (App Router)
- Ngôn ngữ: TypeScript
- Styling: Tailwind CSS
- Icon: Lucide React
- Utilities: clsx, tailwind-merge

## Cấu trúc dự án tiêu chuẩn (Project Structure)

```text
VinFast-EV-Platform/
├── public/                    # Tài nguyên tĩnh (images, icons)
├── src/
│   ├── app/                   # Next.js App Router (layout, pages, globals.css)
│   ├── components/            # Giao diện UI tái sử dụng
│   ├── hooks/                 # Custom React Hooks
│   ├── lib/                   # Utilities & Helper functions
│   ├── services/              # Logic gọi API & Services
│   └── types/                 # Định nghĩa kiểu dữ liệu TypeScript
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Hướng dẫn cài đặt & Thực thi

### 1. Cài đặt các thư viện phụ thuộc

```bash
npm install
```

### 2. Chạy môi trường phát triển (Development)

```bash
npm run dev
```

### 3. Kiểm tra biên dịch Production (Build)

```bash
npm run build
```
