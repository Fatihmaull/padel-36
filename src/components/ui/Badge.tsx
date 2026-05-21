import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "volt" | "outline";
}

export function Badge({ children, className, variant = "volt" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
        variant === "volt" && "bg-volt/15 text-volt border border-volt/30",
        variant === "outline" && "border border-white/20 text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
