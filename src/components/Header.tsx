import { Phone, ShoppingCart, Zap } from "lucide-react";
import { site } from "@/data/product";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#" className="flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-cyan-500 text-white">
            <Zap className="h-4.5 w-4.5" size={18} />
          </span>
          <span className="truncate text-lg font-bold tracking-tight text-white">
            {site.shopName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="whitespace-nowrap transition hover:text-white">ফিচার</a>
          <a href="#specs" className="whitespace-nowrap transition hover:text-white">স্পেসিফিকেশন</a>
          <a href="#reviews" className="whitespace-nowrap transition hover:text-white">রিভিউ</a>
          <a href="#faq" className="whitespace-nowrap transition hover:text-white">জিজ্ঞাসা</a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${site.phoneLink}`}
            className="hidden items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm text-slate-200 transition hover:border-white/30 sm:flex"
          >
            <Phone size={15} />
            <span className="whitespace-nowrap">{site.phoneDisplay}</span>
          </a>
          <a
            href="#order"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-cta-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cta-600"
          >
            <ShoppingCart size={15} />
            অর্ডার করুন
          </a>
        </div>
      </div>
    </header>
  );
}
