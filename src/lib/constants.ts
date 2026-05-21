export const SITE = {
  name: "Padel 36",
  location: "Cibiru Bandung",
  tagline: "Pionir Padel di Bandung Timur",
  whatsapp: "6280000000000",
  whatsappMessage:
    "Halo Padel 36! Saya ingin bertanya tentang booking lapangan.",
  address: "Cibiru, Bandung Timur, Jawa Barat, Indonesia",
  mapsQuery: "Cibiru+Bandung+Timur+Padel",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cibiru+Bandung+Timur",
  sessionDuration: "90 menit",
  playersPerSession: 4,
} as const;

export const PRICING = {
  offPeak: 150_000,
  peak: 250_000,
  peakHourStart: 17,
} as const;

export const TIME_SLOTS = [
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];
export type CourtId = "court1" | "court2";

export const COURTS: { id: CourtId; label: string; subtitle: string }[] = [
  { id: "court1", label: "Lapangan 1", subtitle: "Panoramic Court" },
  { id: "court2", label: "Lapangan 2", subtitle: "Premium Lighting" },
];

/** Mock booked slots: dateKey-courtId-slot */
export const BOOKED_SLOTS: Record<string, true> = {
  // Populated dynamically is harder; use seed patterns in hook
};

export const NAV_ITEMS = [
  { id: "beranda", label: "Beranda", href: "#beranda" },
  { id: "fasilitas", label: "Fasilitas", href: "#fasilitas" },
  { id: "harga", label: "Harga", href: "#harga" },
  { id: "lokasi", label: "Lokasi", href: "#lokasi" },
] as const;

export const FACILITIES = [
  {
    icon: "LayoutGrid" as const,
    title: "Lapangan Baru Standar Internasional",
    description:
      "Kort panoramic dengan permukaan premium dan standar kompetisi internasional.",
  },
  {
    icon: "Lightbulb" as const,
    title: "Pencahayaan Malam Maksimal",
    description:
      "Sistem lighting high-lux untuk permainan malam yang tajam dan nyaman.",
  },
  {
    icon: "Package" as const,
    title: "Sewa Raket & Bola Premium",
    description:
      "Perlengkapan berkualitas tersedia — datang dan langsung main.",
  },
  {
    icon: "Monitor" as const,
    title: "Pro Scorekeeper & Scoreboard",
    description:
      "Pencatatan skor profesional dan papan skor digital di lapangan.",
  },
  {
    icon: "Coffee" as const,
    title: "Player Lounge & Cafe",
    description:
      "Area santai dan kafe untuk recharge sebelum dan sesudah bermain.",
  },
  {
    icon: "Camera" as const,
    title: "Free Dokumentasi",
    description:
      "Foto dan video highlight gratis untuk momen terbaikmu di kort.",
  },
];

export const PADEL_FACTS = [
  {
    icon: "Users" as const,
    title: "4 Pemain",
    description: "Ganda 2 vs 2 di kort yang lebih kecil dari tenis.",
  },
  {
    icon: "Target" as const,
    title: "Mudah Dipelajari",
    description: "Cocok untuk pemula maupun atlet berpengalaman.",
  },
  {
    icon: "Zap" as const,
    title: "Dinamis & Seru",
    description: "Rally cepat, strategi, dan energi tanpa henti.",
  },
  {
    icon: "Trophy" as const,
    title: "Kompetitif",
    description: "Olahraga dengan pertumbuhan tercepat di dunia.",
  },
];
