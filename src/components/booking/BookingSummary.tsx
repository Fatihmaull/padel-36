"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { formatDateId } from "@/lib/utils";

interface BookingSummaryProps {
  date: Date;
  courtLabel: string;
  slot: string;
  priceFormatted: string;
}

export function BookingSummary({
  date,
  courtLabel,
  slot,
  priceFormatted,
}: BookingSummaryProps) {
  return (
    <div className="rounded-2xl border border-volt/30 bg-gradient-to-br from-volt/10 to-transparent p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-volt mb-4">
        Ringkasan booking
      </p>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-4 w-4 text-volt shrink-0" />
          <span className="text-muted">
            <span className="block text-foreground font-semibold">Tanggal</span>
            {formatDateId(date)}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-volt shrink-0" />
          <span className="text-muted">
            <span className="block text-foreground font-semibold">Lapangan</span>
            {courtLabel}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 text-volt shrink-0" />
          <span className="text-muted">
            <span className="block text-foreground font-semibold">Jam</span>
            {slot} · {SITE.sessionDuration}
          </span>
        </li>
      </ul>
      <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-muted">
            Total untuk {SITE.playersPerSession} pemain
          </p>
          <p className="font-display text-3xl font-extrabold text-volt">
            {priceFormatted}
          </p>
        </div>
      </div>
    </div>
  );
}
