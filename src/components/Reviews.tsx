import { MapPin, Star } from "lucide-react";
import { reviews } from "@/data/product";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          fill={i < n ? "currentColor" : "none"}
          className={i < n ? "" : "text-slate-600"}
        />
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-night-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          কাস্টমাররা যা বলছেন
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-night-850 p-6"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-300">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 font-bold text-accent-400">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-white">{r.name}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin size={11} /> {r.area} · ভেরিফাইড ক্রেতা
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
