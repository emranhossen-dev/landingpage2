import Image from "next/image";
import { Check, ClipboardEdit, PackageCheck, PhoneCall } from "lucide-react";
import { product, specs } from "@/data/product";

export function Showcase() {
  return (
    <section className="starfield border-y border-white/10 bg-night-900">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-card">
          <Image
            src={product.images[1].src}
            alt={product.images[1].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl">
            রাতের আকাশ, এখন আপনার ঘরেই
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            লাইট অফ করে প্রজেক্টরটা চালিয়ে দিন — সিলিং আর দেয়াল জুড়ে ভেসে উঠবে গ্যালাক্সি,
            চাঁদ আর তারার ঝিলমিল। বাচ্চাদের ঘুমপাড়ানি গল্পের সঙ্গী হিসেবে যেমন দারুণ,
            নিজের রুমের মুড লাইটিংয়ের জন্যও ঠিক তেমনই।
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "ঘুমের আগে চোখের জন্য আরামদায়ক, নরম আলো",
              "বাচ্চাদের কল্পনার জগৎ — তারা চেনা হবে খেলতে খেলতে",
              "পার্টি বা ফটো ব্যাকগ্রাউন্ড হিসেবেও ব্যবহার করা যায়",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-slate-200">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check size={13} strokeWidth={3} />
                </span>
                {line}
              </li>
            ))}
          </ul>
          <a
            href="#order"
            className="mt-8 inline-block rounded-xl bg-cta-500 px-6 py-3 font-bold text-white transition hover:bg-cta-600"
          >
            অর্ডার করতে ক্লিক করুন
          </a>
        </div>
      </div>
    </section>
  );
}

export function Specs() {
  return (
    <section id="specs" className="bg-night-950">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">স্পেসিফিকেশন</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          {specs.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[140px_1fr] gap-3 px-5 py-3.5 text-sm sm:grid-cols-[220px_1fr] sm:text-base ${
                i % 2 === 0 ? "bg-night-850" : "bg-night-900"
              }`}
            >
              <span className="font-medium text-slate-400">{row.label}</span>
              <span className="font-medium text-slate-100">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: ClipboardEdit,
    title: "ফর্মটি পূরণ করুন",
    desc: "নিচের অর্ডার ফর্মে নাম, মোবাইল নম্বর ও ঠিকানা দিন।",
  },
  {
    icon: PhoneCall,
    title: "কল করে কনফার্ম করা হবে",
    desc: "আমাদের টিম ফোন করে অর্ডারটি নিশ্চিত করবে।",
  },
  {
    icon: PackageCheck,
    title: "পেমেন্ট ডেলিভারিতে",
    desc: "প্রোডাক্ট হাতে পেয়ে চেক করে তারপর টাকা পরিশোধ করুন।",
  },
];

export function HowToOrder() {
  return (
    <section className="border-y border-white/10 bg-night-900">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">কীভাবে অর্ডার করবেন?</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-white/10 bg-night-850 p-6">
              <span className="absolute right-5 top-5 text-4xl font-bold text-white/5">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <step.icon size={23} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
