"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDateId } from "@/lib/utils";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  bookingId: string;
  date: Date;
  courtLabel: string;
  slot: string;
  priceFormatted: string;
}

export function ConfirmationModal({
  open,
  onClose,
  bookingId,
  date,
  courtLabel,
  slot,
  priceFormatted,
}: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed left-4 right-4 top-1/2 z-[101] mx-auto max-w-md -translate-y-1/2 rounded-3xl border border-volt/30 bg-surface p-6 shadow-[0_0_60px_var(--volt-glow)] md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-success-title"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-muted hover:text-foreground"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
              >
                <CheckCircle2 className="h-16 w-16 text-volt" strokeWidth={1.5} />
              </motion.div>
              <h2
                id="booking-success-title"
                className="mt-4 font-display text-2xl font-extrabold uppercase text-foreground"
              >
                Booking Berhasil!
              </h2>
              <p className="mt-2 text-sm text-muted">
                Ini adalah demo frontend. Untuk konfirmasi resmi, hubungi
                WhatsApp kami.
              </p>
              <p className="mt-4 rounded-lg bg-charcoal px-4 py-2 font-mono text-sm font-bold text-volt">
                {bookingId}
              </p>
              <ul className="mt-4 w-full space-y-2 text-left text-sm text-muted">
                <li>{formatDateId(date)}</li>
                <li>
                  {courtLabel} · {slot}
                </li>
                <li className="font-bold text-volt">{priceFormatted}</li>
              </ul>
              <Button className="mt-8 w-full" onClick={onClose}>
                Kembali ke Beranda
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
