import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { About } from "@/components/sections/About";
import { BookingSection } from "@/components/sections/BookingSection";
import { Facilities } from "@/components/sections/Facilities";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Pricing } from "@/components/sections/Pricing";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-28 md:pb-0 md:pt-16">
        <Hero />
        <About />
        <Facilities />
        <Pricing />
        <BookingSection />
        <Location />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppFAB />

      {/* Mobile top brand strip */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between border-b border-white/5 bg-charcoal/80 px-4 backdrop-blur-md md:hidden safe-top">
        <a href="#beranda" className="flex flex-col">
          <span className="font-display text-sm font-extrabold uppercase leading-none">
            {SITE.name}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-volt">
            {SITE.location}
          </span>
        </a>
        <a
          href="#booking"
          className="rounded-lg bg-volt px-3 py-2 text-[10px] font-bold uppercase text-charcoal"
        >
          Book
        </a>
      </div>
    </>
  );
}
