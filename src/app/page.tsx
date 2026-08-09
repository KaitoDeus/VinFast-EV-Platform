import { Header } from "@/components/common/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
            VinFast EV Platform
          </span>
          <h1 className="text-4xl font-extrabold text-white">
            VinFast EV Platform
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Dự án đã được tích hợp đúng bộ Font <strong className="text-white">Mulish</strong> và bảng màu thương hiệu chuẩn VinFast (<span className="text-primary font-mono">#1464F4</span>, <span className="text-secondary font-mono">#92A0B2</span>, <span className="text-slate-300 font-mono">#D9E1E2</span>).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-primary">Font chữ chính</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Mulish (phù hợp đúng bản vẽ Figma VinFast LandingPage).
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-primary">Màu sắc chính</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Primary: <span className="font-mono text-primary">#1464F4</span> (Future Blue).
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-secondary">Màu sắc phụ</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Secondary: <span className="font-mono text-secondary">#92A0B2</span> & Neutral: <span className="font-mono text-slate-300">#D9E1E2</span>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


