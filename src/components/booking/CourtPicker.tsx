"use client";

import { cn } from "@/lib/utils";
import { COURTS, type CourtId } from "@/lib/constants";

interface CourtPickerProps {
  selected: CourtId | null;
  onSelect: (court: CourtId) => void;
}

export function CourtPicker({ selected, onSelect }: CourtPickerProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-foreground">
        Pilih lapangan
      </p>
      <div className="grid grid-cols-2 gap-3">
        {COURTS.map((court) => {
          const isSelected = selected === court.id;
          return (
            <button
              key={court.id}
              type="button"
              onClick={() => onSelect(court.id)}
              className={cn(
                "relative min-h-[120px] overflow-hidden rounded-2xl border p-4 text-left transition-all",
                isSelected
                  ? "border-volt bg-volt/10 ring-2 ring-volt"
                  : "border-white/10 bg-surface-elevated hover:border-volt/40"
              )}
            >
              <div className="absolute inset-0 court-pattern opacity-40" />
              <div className="relative">
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    isSelected ? "text-volt" : "text-muted"
                  )}
                >
                  {court.subtitle}
                </span>
                <p className="mt-2 font-display text-lg font-extrabold uppercase text-foreground">
                  {court.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
