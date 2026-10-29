# Gadget Bro — Product Landing Page

Single-product landing page for **Gadget Bro**, built with **Next.js 15 + TypeScript + Tailwind CSS**.
Frontend only — admin/backend will be connected separately.

## Run locally

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Change the product

All product content lives in **one file**: `src/data/product.ts`
(name, prices, images, features, specs, reviews, FAQs, delivery charges).
Swap the product by editing that file and replacing the images in
`public/images/` — no component changes needed.

## Order form

The order form is frontend-only for now: it validates input
(Bangladeshi mobile number, address), calculates delivery charge
(Inside Dhaka ৳60 / Outside ৳120) and shows a confirmation screen.
When the backend is ready, hook the `submitOrder()` function in
`src/components/OrderForm.tsx` to the orders API (marked with a TODO).

## Structure

- `src/app/` — layout + page (App Router)
- `src/components/` — Header, Hero (gallery + buy panel), TrustBar, Features,
  Details (Showcase / Specs / HowToOrder), Reviews, Faq, OrderForm, Footer
- `src/data/product.ts` — all editable content
- `public/images/` — product photos
