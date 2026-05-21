"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  const baseClass = cn(
    "rounded-2xl border border-white/8 bg-surface p-5 md:p-6",
    (hover || onClick) && "cursor-pointer hover:border-volt/30",
    className
  );

  if (hover || onClick) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={baseClass}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClass}>{children}</div>;
}
