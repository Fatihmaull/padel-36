"use client";

import { cn } from "@/lib/utils";
import type { TimeSlot } from "@/lib/constants";

interface TimeSlotGridProps {
  slots: readonly TimeSlot[];
  selected: TimeSlot | null;
  isAvailable: (slot: TimeSlot) => boolean;
  onSelect: (slot: TimeSlot) => void;
}

export function TimeSlotGrid({
  slots,
  selected,
  isAvailable,
  onSelect,
}: TimeSlotGridProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-foreground">
        Pilih jam bermain
      </p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {slots.map((slot) => {
          const booked = !isAvailable(slot);
          const isSelected = selected === slot;
          return (
            <button
              key={slot}
              type="button"
              disabled={booked}
              onClick={() => onSelect(slot)}
              className={cn(
                "min-h-[48px] rounded-xl border text-sm font-bold transition-all",
                booked &&
                  "cursor-not-allowed border-white/5 bg-white/5 text-muted/50 line-through",
                !booked &&
                  isSelected &&
                  "border-volt bg-volt text-charcoal",
                !booked &&
                  !isSelected &&
                  "border-white/10 bg-surface-elevated text-foreground hover:border-volt/50"
              )}
            >
              {slot}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded border border-white/10 bg-surface-elevated" />
          Tersedia
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded border border-volt bg-volt" />
          Dipilih
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded border border-white/5 bg-white/5 line-through" />
          Terbooking
        </span>
      </div>
    </div>
  );
}
