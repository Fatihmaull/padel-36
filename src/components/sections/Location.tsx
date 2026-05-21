"use client";

import { ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export function Location() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Lokasi"
          title="Kunjungi Kami di Cibiru"
          description="Mudah dijangkau dari berbagai titik Bandung Timur. Parkir tersedia."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-volt" />
            <div className="absolute right-0 bottom-0 z-10 h-8 w-8 border-r-2 border-b-2 border-volt" />
            <div className="aspect-[4/3] w-full bg-surface-elevated">
              <iframe
                title="Lokasi Padel 36 Cibiru"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                className="h-full w-full border-0 grayscale contrast-125 opacity-90 invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-volt" />
              <div>
                <p className="font-bold text-foreground">{SITE.name}</p>
                <p className="mt-2 text-muted leading-relaxed">{SITE.address}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={waUrl} className="w-full sm:flex-1">
                <MessageCircle size={18} />
                Hubungi WhatsApp
              </Button>
              <Button
                href={SITE.mapsUrl}
                variant="outline"
                className="w-full sm:flex-1"
              >
                <ExternalLink size={18} />
                Buka di Google Maps
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted">
              Ganti nomor WhatsApp di{" "}
              <code className="rounded bg-white/5 px-1 text-volt">
                src/lib/constants.ts
              </code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
