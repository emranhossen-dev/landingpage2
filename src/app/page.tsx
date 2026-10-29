import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import { HowToOrder, Showcase, Specs } from "@/components/Details";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import OrderForm from "@/components/OrderForm";
import Footer, { StickyOrderBar } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <Showcase />
      <Specs />
      <HowToOrder />
      <Reviews />
      <Faq />
      <OrderForm />
      <Footer />
      <StickyOrderBar />
    </main>
  );
}
