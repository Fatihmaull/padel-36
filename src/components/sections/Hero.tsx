"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";

const badges = [
  "2 Lapangan",
  "Standar Internasional",
  "Buka Malam Hari",
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[90dvh] overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24 grain"
    >
      <div className="absolute inset-0 court-pattern opacity-60" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-volt/10 blur-[100px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-lime/5 blur-[80px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Bandung Timur · Cibiru</Badge>
            <h1 className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Pionir{" "}
              <span className="text-volt">Padel</span>
              <br />
              di Bandung Timur
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Rasakan energi olahraga dengan pertumbuhan tercepat di dunia.
              Kort premium, komunitas solid, dan pengalaman bermain yang
              bikin ketagihan — hanya di {SITE.name}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#booking" size="lg" className="w-full sm:w-auto">
                Booking Lapangan
                <ArrowRight size={18} />
              </Button>
              <Button
                href="#fasilitas"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Lihat Fasilitas
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-1"
        >
          <div className="relative aspect-[4/5] max-h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-surface lg:max-h-none lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-volt/20 via-transparent to-charcoal" />
            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 400 400"
              fill="none"
            >
              <rect
                x="40"
                y="40"
                width="320"
                height="320"
                rx="8"
                stroke="#CCFF00"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <line x1="200" y1="40" x2="200" y2="360" stroke="#CCFF00" strokeWidth="1" opacity="0.5" />
              <line x1="40" y1="200" x2="360" y2="200" stroke="#CCFF00" strokeWidth="1" opacity="0.5" />
              <circle cx="200" cy="200" r="48" stroke="#A3E635" strokeWidth="2" fill="rgba(204,255,0,0.08)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-volt bg-volt/10">
                <Zap className="h-12 w-12 text-volt" fill="currentColor" />
              </div>
            </div>
            <p className="absolute bottom-4 left-4 right-4 text-center text-xs font-bold uppercase tracking-widest text-muted">
              Visual lapangan — ganti dengan foto kort
            </p>
          </div>

          {badges.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`absolute rounded-xl border border-volt/30 bg-charcoal/90 px-3 py-2 text-xs font-bold uppercase tracking-wide text-volt backdrop-blur-sm ${
                i === 0
                  ? "-left-2 top-8 lg:-left-6"
                  : i === 1
                    ? "-right-2 top-1/3 lg:-right-4"
                    : "bottom-12 -left-2 lg:bottom-16"
              }`}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
