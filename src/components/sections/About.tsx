"use client";

import {
  Target,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PADEL_FACTS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Target,
  Zap,
  Trophy,
};

export function About() {
  return (
    <section id="tentang" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Tentang Padel 36"
          title="Destinasi Padel Premium di Cibiru"
          description="Kami membawa pengalaman padel kelas dunia ke Bandung Timur — komunitas yang inklusif, fasilitas terbaik, dan semangat olahraga tanpa batas."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Padel 36 Cibiru</strong> adalah
              pionir padel di kawasan Bandung Timur. Didirikan untuk para
              pecinta olahraga yang ingin merasakan sensasi rally cepat,
              strategi cerdas, dan atmosfer kompetitif yang tetap fun.
            </p>
            <p>
              Dengan lapangan standar internasional, pencahayaan malam yang
              maksimal, dan area lounge yang nyaman, kami menciptakan ruang di
              mana pemula dan pro bisa berkembang bersama.
            </p>
            <p>
              Bergabunglah dengan komunitas yang percaya setiap orang layak
              merasakan buzz dari pukulan &apos;mustahil&apos; — smash yang
              menggetarkan kort dan jiwa.
            </p>
          </div>

          <div className="rounded-2xl border border-volt/20 bg-surface p-6 md:p-8">
            <h3 className="font-display text-xl font-extrabold uppercase text-volt mb-2">
              Apa itu Padel?
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Padel adalah olahraga raket yang menggabungkan tenis dan squash.
              Dimainkan di kort berdinding kaca, dengan raket padel dan bola
              khusus — mudah dipelajari, sangat adiktif.
            </p>
            <div className="flex gap-4 overflow-x-auto snap-x-mandatory pb-2 -mx-1 px-1 md:grid md:grid-cols-2 md:overflow-visible md:gap-4">
              {PADEL_FACTS.map((fact) => {
                const Icon = iconMap[fact.icon];
                return (
                  <div
                    key={fact.title}
                    className="min-w-[140px] shrink-0 snap-start rounded-xl border border-white/8 bg-surface-elevated p-4 md:min-w-0"
                  >
                    <Icon className="mb-2 h-5 w-5 text-volt" />
                    <p className="text-sm font-bold text-foreground">
                      {fact.title}
                    </p>
                    <p className="mt-1 text-xs text-muted">{fact.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
