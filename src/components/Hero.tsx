"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, Check, Phone, ShoppingCart, Star } from "lucide-react";
import { formatPrice, product, site } from "@/data/product";

export default function Hero() {
  const [active, setActive] = useState(0);
  const discount = product.regularPrice - product.price;

  return (
    <section className="starfield relative overflow-hidden bg-night-950">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-8 md:grid-cols-2 md:pt-12">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-night-850 shadow-glow">
            <Image
              src={product.images[active].src}
              alt={product.images[active].alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute left-3 top-3 rounded-full bg-cta-500 px-3 py-1 text-xs font-bold text-white">
              {product.badge}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
              {formatPrice(discount)} ছাড়
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActive(i)}
                aria-label={`ছবি ${i + 1}`}
                className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                  active === i
                    ? "border-accent-400"
                    : "border-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="15vw" />
              </button>
            ))}
          </div>
        </div>

        {/* Buy panel */}
        <div>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-xl font-medium text-accent-400">{product.hook}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="font-semibold text-white">{product.rating}</span>
            <span className="text-slate-400">({product.reviewCount} রিভিউ)</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <BadgeCheck size={15} /> {product.soldCount} বিক্রিত
            </span>
          </div>

          <p className="mt-4 leading-relaxed text-slate-300">{product.shortDesc}</p>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
            <span className="pb-1 text-lg text-slate-500 line-through">
              {formatPrice(product.regularPrice)}
            </span>
            <span className="mb-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-sm font-semibold text-emerald-400">
              সাশ্রয় {formatPrice(discount)}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">
            + ডেলিভারি চার্জ প্রযোজ্য · ক্যাশ অন ডেলিভারি সুবিধা আছে
          </p>

          <ul className="mt-6 space-y-2.5">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-slate-200">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                  <Check size={13} strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cta-500 px-6 py-3.5 text-base font-bold text-white shadow-card transition hover:bg-cta-600"
            >
              <ShoppingCart size={19} />
              এখনই অর্ডার করুন
            </a>
            <a
              href={`tel:${site.phoneLink}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/40"
            >
              <Phone size={18} />
              কল করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
