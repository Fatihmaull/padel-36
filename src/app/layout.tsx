import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Padel 36 Cibiru Bandung | Pionir Padel di Bandung Timur",
  description:
    "Padel 36 Cibiru — lapangan padel premium di Bandung Timur. Booking lapangan, fasilitas internasional, harga transparan Rp 150.000–250.000.",
  keywords: ["padel", "Bandung", "Cibiru", "padel 36", "booking lapangan"],
};

export const viewport: Viewport = {
  themeColor: "#121214",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${syne.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-charcoal font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
