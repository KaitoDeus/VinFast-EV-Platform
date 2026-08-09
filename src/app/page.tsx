import { Header } from "@/components/common/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Standard Next.js Setup
          </span>
          <h1 className="text-4xl font-extrabold text-white">
            VinFast EV Platform
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Dự án đã sẵn sàng với cấu trúc chuẩn: Next.js App Router, TypeScript, Tailwind CSS, Lucide Icons, và mô hình chia thư mục tiêu chuẩn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-sky-400">📁 src/app</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Next.js App Router quản lý layout, routing và API endpoints.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-emerald-400">📁 src/components</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Thư mục chứa UI Components dùng chung (Header, Buttons, Cards...).
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-purple-400">📁 src/services & types</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Thư mục chứa kiểu dữ liệu TypeScript và logic gọi API/Services.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
