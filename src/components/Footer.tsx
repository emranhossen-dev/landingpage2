import { Facebook, MapPin, Phone, ShoppingCart } from "lucide-react";
import { formatPrice, product, site } from "@/data/product";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-900 pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{site.shopName}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {site.tagline}। অরিজিনাল গ্যাজেট, সঠিক দাম আর সারাদেশে ক্যাশ অন ডেলিভারি।
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">যোগাযোগ</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Phone size={14} /> {site.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> {site.address}
            </li>
            <li>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Facebook size={14} /> Facebook Page
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">কাস্টমার কেয়ার</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>সকাল ৯টা — রাত ১০টা (প্রতিদিন)</li>
            <li>ডেলিভারি: ঢাকায় ২৪–৪৮ ঘণ্টা, বাইরে ৪৮–৭২ ঘণ্টা</li>
            <li>রিপ্লেসমেন্ট: ত্রুটিপূর্ণ প্রোডাক্টে ৭ দিন</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.shopName}. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}

export function StickyOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night-900/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-300">{product.nameBn}</p>
          <p className="text-base font-bold text-white">
            {formatPrice(product.price)}{" "}
            <span className="text-sm font-normal text-slate-500 line-through">
              {formatPrice(product.regularPrice)}
            </span>
          </p>
        </div>
        <a
          href="#order"
          className="ml-auto flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-cta-500 px-5 py-2.5 font-bold text-white"
        >
          <ShoppingCart size={16} />
          অর্ডার করুন
        </a>
      </div>
    </div>
  );
}
