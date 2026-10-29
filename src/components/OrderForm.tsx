"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Minus, Plus } from "lucide-react";
import { delivery, formatPrice, product } from "@/data/product";

/**
 * Frontend-only order form.
 * Backend/Admin তৈরি হলে submitOrder()-এর ভিতরে অর্ডার API-তে
 * POST করতে হবে (যেমন POST /api/orders)। আপাতত অর্ডারটি শুধু
 * স্ক্রিনে কনফার্মেশন হিসেবে দেখানো হয়, কোথাও পাঠানো হয় না।
 */

type Area = "inside" | "outside";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState<Area>("inside");
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const deliveryCharge = area === "inside" ? delivery.insideDhaka : delivery.outsideDhaka;
  const subtotal = product.price * qty;
  const total = useMemo(() => subtotal + deliveryCharge, [subtotal, deliveryCharge]);

  function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 3) {
      setError("আপনার সঠিক নাম লিখুন।");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(phone.trim())) {
      setError("সঠিক 11 ডিজিটের মোবাইল নম্বর দিন (01XXXXXXXXX)।");
      return;
    }
    if (address.trim().length < 10) {
      setError("বিস্তারিত ঠিকানা লিখুন (বাসা/রোড/এলাকা)।");
      return;
    }
    setError("");
    // TODO(backend): এখানে অর্ডার API কল হবে — POST /api/orders
    // body: { name, phone, address, area, qty, total, product: product.name }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="order" className="bg-night-950">
        <div className="mx-auto max-w-2xl px-4 py-16">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
            <CheckCircle2 className="mx-auto text-emerald-400" size={52} />
            <h2 className="mt-4 text-2xl font-bold text-white">অর্ডারটি গ্রহণ করা হয়েছে!</h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-300">
              ধন্যবাদ, <b className="text-white">{name}</b>। আমাদের টিম শীঘ্রই{" "}
              <b className="text-white">{phone}</b> নম্বরে কল করে অর্ডারটি কনফার্ম করবে।
              প্রোডাক্ট হাতে পেয়ে মোট <b className="text-white">{formatPrice(total)}</b>{" "}
              পরিশোধ করলেই হবে।
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40"
            >
              আরেকটি অর্ডার করুন
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="bg-night-950">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          অর্ডার করতে ফর্মটি পূরণ করুন
        </h2>
        <p className="mt-2 text-center text-slate-400">
          ক্যাশ অন ডেলিভারি — কোনো অগ্রিম পেমেন্ট লাগবে না
        </p>

        <form
          onSubmit={submitOrder}
          className="mt-8 rounded-2xl border border-white/10 bg-night-850 p-6 shadow-card"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <div className="min-w-0">
              <p className="truncate font-semibold text-white">{product.name}</p>
              <p className="text-sm text-slate-400">
                {formatPrice(product.price)}{" "}
                <span className="line-through">{formatPrice(product.regularPrice)}</span>
              </p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-3">
              <span className="text-sm text-slate-400">পরিমাণ</span>
              <div className="flex items-center rounded-lg border border-white/15">
                <button
                  type="button"
                  aria-label="পরিমাণ কমান"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-2.5 py-2 text-slate-300 transition hover:text-white"
                >
                  <Minus size={15} />
                </button>
                <span className="w-8 text-center font-bold text-white">{qty}</span>
                <button
                  type="button"
                  aria-label="পরিমাণ বাড়ান"
                  onClick={() => setQty(Math.min(10, qty + 1))}
                  className="px-2.5 py-2 text-slate-300 transition hover:text-white"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-200">
                আপনার নাম *
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="যেমন: মোঃ রহিম উদ্দিন"
                className="w-full rounded-lg border border-white/15 bg-night-900 px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-200">
                মোবাইল নম্বর *
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01XXXXXXXXX"
                inputMode="tel"
                className="w-full rounded-lg border border-white/15 bg-night-900 px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-slate-200">
                সম্পূর্ণ ঠিকানা *
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="বাসা/হোল্ডিং, রোড, এলাকা, থানা, জেলা"
                rows={3}
                className="w-full resize-none rounded-lg border border-white/15 bg-night-900 px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none"
              />
            </div>

            <fieldset>
              <legend className="mb-1.5 text-sm font-medium text-slate-200">ডেলিভারি এলাকা *</legend>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`cursor-pointer rounded-lg border px-3.5 py-3 text-sm transition ${
                    area === "inside"
                      ? "border-accent-400 bg-accent-500/10 text-white"
                      : "border-white/15 text-slate-300 hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="area"
                    className="sr-only"
                    checked={area === "inside"}
                    onChange={() => setArea("inside")}
                  />
                  ঢাকার ভিতরে
                  <span className="block text-xs text-slate-400">
                    চার্জ {formatPrice(delivery.insideDhaka)}
                  </span>
                </label>
                <label
                  className={`cursor-pointer rounded-lg border px-3.5 py-3 text-sm transition ${
                    area === "outside"
                      ? "border-accent-400 bg-accent-500/10 text-white"
                      : "border-white/15 text-slate-300 hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="area"
                    className="sr-only"
                    checked={area === "outside"}
                    onChange={() => setArea("outside")}
                  />
                  ঢাকার বাইরে
                  <span className="block text-xs text-slate-400">
                    চার্জ {formatPrice(delivery.outsideDhaka)}
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mt-6 space-y-1.5 rounded-xl bg-night-900 px-4 py-4 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>সাবটোটাল ({qty}টি)</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>ডেলিভারি চার্জ</span>
              <span>{formatPrice(deliveryCharge)}</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2 text-base font-bold text-white">
              <span>সর্বমোট</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-lg bg-red-500/10 px-3.5 py-2.5 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-cta-500 py-3.5 text-base font-bold text-white transition hover:bg-cta-600"
          >
            অর্ডার কনফার্ম করুন — {formatPrice(total)}
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            অর্ডার করলে আমাদের টিম কল করে বিস্তারিত নিশ্চিত করবে।
          </p>
        </form>
      </div>
    </section>
  );
}
