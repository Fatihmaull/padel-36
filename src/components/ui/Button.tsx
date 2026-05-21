"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-volt text-charcoal font-bold hover:bg-lime active:scale-[0.98] shadow-[0_0_24px_var(--volt-glow)]",
  outline:
    "border border-white/20 bg-transparent text-foreground hover:border-volt hover:text-volt",
  ghost: "bg-transparent text-foreground hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm rounded-lg",
  md: "h-12 px-6 text-sm rounded-xl",
  lg: "h-14 px-8 text-base rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 min-h-[44px] min-w-[44px] disabled:opacity-40 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
