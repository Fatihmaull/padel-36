"use client";

import {
  Camera,
  Coffee,
  LayoutGrid,
  Lightbulb,
  Monitor,
  Package,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FACILITIES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid,
  Lightbulb,
  Package,
  Monitor,
  Coffee,
  Camera,
};

export function Facilities() {
  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Fasilitas"
          title="Semua yang Kamu Butuhkan di Satu Tempat"
          description="Dari kort panoramic hingga dokumentasi gratis — setiap detail dirancang untuk pengalaman bermain premium."
        />

        <div className="flex gap-4 overflow-x-auto snap-x-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 md:gap-5">
          {FACILITIES.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="min-w-[280px] shrink-0 snap-start rounded-2xl border border-white/8 bg-surface p-6 transition-colors hover:border-volt/40 md:min-w-0"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-volt/10">
                  <Icon className="h-6 w-6 text-volt" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
