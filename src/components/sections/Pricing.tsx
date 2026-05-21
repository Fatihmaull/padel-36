"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING, SITE } from "@/lib/constants";
import { formatRupiah } from "@/lib/utils";

const tiers = [
  {
    name: "Weekday Off-Peak",
    price: PRICING.offPeak,
    schedule: "Senin – Jumat, sebelum pukul 17:00",
    highlight: false,
  },
  {
    name: "Weekday Peak & Weekend",
    price: PRICING.peak,
    schedule: "Senin – Jumat malam, Sabtu & Minggu",
    highlight: true,
  },
];

const included = [
  `Akses lapangan untuk ${SITE.playersPerSession} pemain`,
  `Durasi sesi ${SITE.sessionDuration}`,
  "Bola & fasilitas kort standar",
  "Area player lounge",
];

export function Pricing() {
  return (
    <section id="harga" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Harga"
          title="Transparan & Tanpa Kejutan"
          description="Pilih waktu bermainmu — harga jelas dari Rp 150.000 hingga Rp 250.000 per sesi."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-2xl border border-volt/30 bg-volt/5 px-6 py-5 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-volt">
            Kisaran harga per sesi
          </p>
          <p className="mt-1 font-display text-3xl font-extrabold text-foreground md:text-4xl">
            {formatRupiah(PRICING.offPeak)} – {formatRupiah(PRICING.peak)}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 md:p-8 ${
                tier.highlight
                  ? "border-volt bg-surface ring-1 ring-volt/20"
                  : "border-white/8 bg-surface"
              }`}
            >
              {tier.highlight && (
                <span className="mb-3 inline-block rounded-full bg-volt px-3 py-0.5 text-[10px] font-bold uppercase text-charcoal">
                  Paling populer
                </span>
              )}
              <h3 className="font-display text-xl font-extrabold uppercase text-foreground">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{tier.schedule}</p>
              <p className="mt-4 font-display text-4xl font-extrabold text-volt">
                {formatRupiah(tier.price)}
              </p>
              <p className="text-xs text-muted">/ sesi · 4 pemain</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/8 bg-surface-elevated p-6">
          <p className="text-sm font-bold uppercase tracking-widest text-volt mb-4">
            Termasuk dalam harga
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                {item}
              </li>
            ))}
          </ul>
          <Button href="#booking" className="mt-8 w-full sm:w-auto">
            Booking Sekarang
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
