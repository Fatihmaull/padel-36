"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden md:block safe-top",
        scrolled && "bg-charcoal/90 backdrop-blur-md border-b border-white/8"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#beranda" className="group flex flex-col">
          <span className="font-display text-xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-volt transition-colors">
            {SITE.name}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-volt">
            {SITE.location}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-volt transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#tentang"
            className="text-sm font-medium text-muted hover:text-volt transition-colors"
          >
            Tentang
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button href="#booking" size="sm" className="hidden lg:inline-flex">
            Booking Sekarang
          </Button>
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/8 bg-surface px-6 py-4 lg:hidden">
          {[...NAV_ITEMS, { id: "tentang", label: "Tentang", href: "#tentang" }].map(
            (item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-foreground hover:text-volt"
              >
                {item.label}
              </a>
            )
          )}
          <Button href="#booking" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Booking Sekarang
          </Button>
        </nav>
      )}
    </header>
  );
}
