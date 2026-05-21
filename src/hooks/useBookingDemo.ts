"use client";

import { useCallback, useMemo, useState } from "react";
import {
  COURTS,
  PRICING,
  TIME_SLOTS,
  type CourtId,
  type TimeSlot,
} from "@/lib/constants";
import { formatRupiah, toDateKey } from "@/lib/utils";

export type BookingStep = 1 | 2 | 3 | 4;

function getPriceForDateAndSlot(date: Date, slot: TimeSlot): number {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  if (isWeekend) return PRICING.peak;

  const hour = parseInt(slot.split(":")[0], 10);
  if (hour >= PRICING.peakHourStart) return PRICING.peak;
  return PRICING.offPeak;
}

/** Deterministic mock: some slots appear booked based on date + court hash */
function isSlotBooked(
  dateKey: string,
  court: CourtId,
  slot: TimeSlot
): boolean {
  const seed = `${dateKey}-${court}-${slot}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 5 === 0;
}

export function useBookingDemo() {
  const [step, setStep] = useState<BookingStep>(1);
  const [date, setDate] = useState<Date | null>(null);
  const [court, setCourt] = useState<CourtId | null>(null);
  const [slot, setSlot] = useState<TimeSlot | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const availableDays = useMemo(() => {
    const days: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }
    return days;
  }, []);

  const price = useMemo(() => {
    if (!date || !slot) return null;
    return getPriceForDateAndSlot(date, slot);
  }, [date, slot]);

  const courtLabel = useMemo(() => {
    if (!court) return null;
    return COURTS.find((c) => c.id === court)?.label ?? court;
  }, [court]);

  const isSlotAvailable = useCallback(
    (s: TimeSlot) => {
      if (!date || !court) return true;
      return !isSlotBooked(toDateKey(date), court, s);
    },
    [date, court]
  );

  const canProceed = useMemo(() => {
    switch (step) {
      case 1:
        return date !== null;
      case 2:
        return court !== null;
      case 3:
        return slot !== null;
      case 4:
        return date && court && slot;
      default:
        return false;
    }
  }, [step, date, court, slot]);

  const selectDate = (d: Date) => {
    setDate(d);
    setSlot(null);
  };

  const selectCourt = (c: CourtId) => {
    setCourt(c);
    setSlot(null);
  };

  const selectSlot = (s: TimeSlot) => {
    if (!date || !court) return;
    if (!isSlotBooked(toDateKey(date), court, s)) setSlot(s);
  };

  const nextStep = () => {
    if (!canProceed) return;
    if (step < 4) setStep((s) => (s + 1) as BookingStep);
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => (s - 1) as BookingStep);
  };

  const goToStep = (s: BookingStep) => {
    if (s === 1) setStep(1);
    if (s === 2 && date) setStep(2);
    if (s === 3 && date && court) setStep(3);
    if (s === 4 && date && court && slot) setStep(4);
  };

  const confirmBooking = () => {
    if (!date || !court || !slot || !price) return;
    const id = `P36-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setBookingId(id);
    setShowModal(true);
  };

  const resetBooking = () => {
    setStep(1);
    setDate(null);
    setCourt(null);
    setSlot(null);
    setShowModal(false);
    setBookingId(null);
  };

  return {
    step,
    date,
    court,
    slot,
    price,
    courtLabel,
    showModal,
    bookingId,
    availableDays,
    timeSlots: TIME_SLOTS,
    canProceed,
    isSlotAvailable,
    selectDate,
    selectCourt,
    selectSlot,
    nextStep,
    prevStep,
    goToStep,
    confirmBooking,
    resetBooking,
    setShowModal,
    formatPrice: price ? formatRupiah(price) : null,
  };
}
