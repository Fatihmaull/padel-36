"use client";

import { Calendar, Home, MapPin, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const ICONS: Record<string, React.ReactNode> = {
  beranda: <Home size={20} strokeWidth={2} />,
  fasilitas: <Sparkles size={20} strokeWidth={2} />,
  harga: <Calendar size={20} strokeWidth={2} />,
  lokasi: <MapPin size={20} strokeWidth={2} />,
};

export function BottomNav() {
  const active = useActiveSection(
    ["beranda", "fasilitas", "harga", "booking", "lokasi"],
    "beranda"
  );

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-bottom"
      aria-label="Navigasi utama"
    >
      <div className="relative border-t border-white/8 bg-surface/95 backdrop-blur-xl px-2 pt-2 pb-2">
        <div className="flex items-end justify-around">
          {NAV_ITEMS.slice(0, 2).map((item) => (
            <NavItem
              key={item.id}
              href={item.href}
              label={item.label}
              icon={ICONS[item.id]}
              active={active === item.id}
            />
          ))}

          <a
            href="#booking"
            className="relative -top-5 flex flex-col items-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-volt text-charcoal shadow-[0_0_32px_var(--volt-glow)] font-bold text-[10px] uppercase tracking-wide">
              Book
            </span>
            <span className="mt-1 text-[10px] font-bold text-volt">
              Sekarang
            </span>
          </a>

          {NAV_ITEMS.slice(2).map((item) => (
            <NavItem
              key={item.id}
              href={item.href}
              label={item.label}
              icon={ICONS[item.id]}
              active={active === item.id}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 transition-colors",
        active ? "text-volt" : "text-muted"
      )}
    >
      {icon}
      <span className="text-[10px] font-semibold">{label}</span>
    </a>
  );
}
