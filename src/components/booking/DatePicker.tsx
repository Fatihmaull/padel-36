"use client";

import { cn, formatDateShort } from "@/lib/utils";

interface DatePickerProps {
  days: Date[];
  selected: Date | null;
  onSelect: (date: Date) => void;
}

const DAY_NAMES = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

export function DatePicker({ days, selected, onSelect }: DatePickerProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-foreground">
        Pilih tanggal
      </p>
      <div className="flex gap-2 overflow-x-auto snap-x-mandatory pb-2 -mx-1 px-1">
        {days.map((day) => {
          const isSelected =
            selected?.toDateString() === day.toDateString();
          const isToday =
            new Date().toDateString() === day.toDateString();
          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => onSelect(day)}
              className={cn(
                "flex min-h-[72px] min-w-[64px] shrink-0 snap-start flex-col items-center justify-center rounded-xl border px-3 py-3 transition-all",
                isSelected
                  ? "border-volt bg-volt text-charcoal shadow-[0_0_20px_var(--volt-glow)]"
                  : "border-white/10 bg-surface-elevated text-foreground hover:border-volt/50"
              )}
            >
              <span className="text-[10px] font-bold uppercase opacity-80">
                {DAY_NAMES[day.getDay()]}
              </span>
              <span className="text-lg font-extrabold">{day.getDate()}</span>
              <span className="text-[10px] font-medium">
                {formatDateShort(day).split(" ")[1]}
              </span>
              {isToday && !isSelected && (
                <span className="mt-1 text-[9px] font-bold text-volt">Hari ini</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
