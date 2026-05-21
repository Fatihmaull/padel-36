"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { ConfirmationModal } from "@/components/booking/ConfirmationModal";
import { CourtPicker } from "@/components/booking/CourtPicker";
import { DatePicker } from "@/components/booking/DatePicker";
import { TimeSlotGrid } from "@/components/booking/TimeSlotGrid";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useBookingDemo } from "@/hooks/useBookingDemo";
import { cn } from "@/lib/utils";

const STEPS = [
  { num: 1, label: "Tanggal" },
  { num: 2, label: "Lapangan" },
  { num: 3, label: "Jam" },
  { num: 4, label: "Bayar" },
] as const;

export function BookingSection() {
  const booking = useBookingDemo();

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Booking"
          title="Pesan Lapangan Sekarang"
          description="Demo interaktif — pilih tanggal, lapangan, dan jam. Tanpa backend, langsung di browser."
        />

        <div className="rounded-3xl border border-white/10 bg-surface p-4 md:p-8">
          {/* Progress */}
          <div className="mb-8 flex items-center justify-between gap-2">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex flex-1 items-center">
                <button
                  type="button"
                  onClick={() => booking.goToStep(s.num)}
                  className={cn(
                    "flex flex-col items-center gap-1 w-full",
                    booking.step >= s.num ? "opacity-100" : "opacity-40"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
                      booking.step === s.num
                        ? "bg-volt text-charcoal"
                        : booking.step > s.num
                          ? "bg-volt/30 text-volt"
                          : "bg-white/10 text-muted"
                    )}
                  >
                    {s.num}
                  </span>
                  <span className="hidden text-[10px] font-semibold uppercase sm:block text-muted">
                    {s.label}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "h-0.5 flex-1 mx-1 rounded",
                      booking.step > s.num ? "bg-volt" : "bg-white/10"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={booking.step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              {booking.step === 1 && (
                <DatePicker
                  days={booking.availableDays}
                  selected={booking.date}
                  onSelect={booking.selectDate}
                />
              )}
              {booking.step === 2 && (
                <CourtPicker
                  selected={booking.court}
                  onSelect={booking.selectCourt}
                />
              )}
              {booking.step === 3 && (
                <TimeSlotGrid
                  slots={booking.timeSlots}
                  selected={booking.slot}
                  isAvailable={booking.isSlotAvailable}
                  onSelect={booking.selectSlot}
                />
              )}
              {booking.step === 4 &&
                booking.date &&
                booking.courtLabel &&
                booking.slot &&
                booking.formatPrice && (
                  <BookingSummary
                    date={booking.date}
                    courtLabel={booking.courtLabel}
                    slot={booking.slot}
                    priceFormatted={booking.formatPrice}
                  />
                )}
            </motion.div>
          </AnimatePresence>

          {!booking.canProceed && (
            <p className="mt-4 text-center text-xs text-muted">
              Lengkapi pilihan di atas untuk melanjutkan
            </p>
          )}

          <div className="mt-8 flex gap-3">
            {booking.step > 1 && (
              <Button
                variant="outline"
                onClick={booking.prevStep}
                className="flex-1 sm:flex-none"
              >
                <ChevronLeft size={18} />
                Kembali
              </Button>
            )}
            {booking.step < 4 ? (
              <Button
                onClick={booking.nextStep}
                disabled={!booking.canProceed}
                className="flex-1"
              >
                Lanjutkan
                <ChevronRight size={18} />
              </Button>
            ) : (
              <Button
                onClick={booking.confirmBooking}
                disabled={!booking.canProceed}
                className="flex-1"
              >
                Lanjutkan ke Pembayaran
              </Button>
            )}
          </div>
        </div>
      </div>

      {booking.showModal &&
        booking.bookingId &&
        booking.date &&
        booking.courtLabel &&
        booking.slot &&
        booking.formatPrice && (
          <ConfirmationModal
            open={booking.showModal}
            onClose={booking.resetBooking}
            bookingId={booking.bookingId}
            date={booking.date}
            courtLabel={booking.courtLabel}
            slot={booking.slot}
            priceFormatted={booking.formatPrice}
          />
        )}
    </section>
  );
}
