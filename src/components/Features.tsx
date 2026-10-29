import { Gift, Lamp, Package, Rotate3d, Sparkles, Usb } from "lucide-react";
import { features } from "@/data/product";

const iconMap = {
  sparkles: Sparkles,
  rotate: Rotate3d,
  lamp: Lamp,
  usb: Usb,
  box: Package,
  gift: Gift,
} as const;

export default function Features() {
  return (
    <section id="features" className="bg-night-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          কেন এই প্রজেক্টরটা সবার পছন্দ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          ছোট্ট একটা ডিভাইস, কিন্তু ফিচারে ভরপুর — ঘরের পরিবেশ বদলে দেওয়ার জন্য যা যা লাগে, সবই আছে।
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-night-850 p-6 transition hover:border-accent-500/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/25 to-cyan-500/20 text-accent-400">
                  <Icon size={23} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
