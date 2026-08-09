import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight text-white">
          VINFAST <span className="text-sky-400">EV Platform</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
        </nav>
      </div>
    </header>
  );
}
