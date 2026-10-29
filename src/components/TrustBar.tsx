import { Banknote, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: Banknote, title: "ক্যাশ অন ডেলিভারি", desc: "প্রোডাক্ট হাতে পেয়ে টাকা দিন" },
  { icon: Truck, title: "সারাদেশে ডেলিভারি", desc: "ঢাকায় ২৪–৪৮ ঘণ্টায় পৌঁছে যাবে" },
  { icon: RefreshCcw, title: "৭ দিনের রিপ্লেসমেন্ট", desc: "ত্রুটিপূর্ণ হলে বদলি নিশ্চিত" },
  { icon: ShieldCheck, title: "অরিজিনাল প্রোডাক্ট", desc: "চেক করে তারপর পেমেন্ট" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-night-900">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <item.icon size={21} />
            </span>
            <span>
              <span className="block font-semibold text-white">{item.title}</span>
              <span className="mt-0.5 block text-sm text-slate-400">{item.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
