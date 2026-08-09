import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-black sticky top-0 z-50 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo VinFast */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="VinFast Logo"
            width={193}
            height={48}
            className="h-8 md:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link href="#gioi-thieu" className="hover:text-white transition-colors">
            Giới thiệu
          </Link>
          <Link href="#ly-do-lua-chon" className="hover:text-white transition-colors">
            Lý do lựa chọn
          </Link>
          <Link href="#thong-so-ky-thuat" className="hover:text-white transition-colors">
            Thông số kỹ thuật
          </Link>
          <Link href="#mau-xe" className="hover:text-white transition-colors">
            Màu xe
          </Link>
          <Link href="#cau-hoi-thuong-gap" className="hover:text-white transition-colors">
            Câu hỏi thường gặp
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="#dat-truoc"
            className="bg-[#00a8ff] hover:bg-[#0093e0] text-white font-semibold text-sm px-6 py-2 rounded-full transition-all duration-200 shadow-md shadow-cyan-500/20 active:scale-95"
          >
            Đặt trước
          </Link>
        </div>
      </div>
    </header>
  );
}
