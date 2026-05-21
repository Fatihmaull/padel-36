"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppFAB() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 bottom-24 md:bottom-6"
      aria-label="Hubungi WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
