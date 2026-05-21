import { Mail, Share2 } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-surface pb-28 pt-12 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase text-foreground">
              {SITE.name}
            </p>
            <p className="mt-1 text-sm font-bold uppercase tracking-widest text-volt">
              {SITE.location}
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Pionir padel di Bandung Timur. Rasakan sensasi smash yang
              mustahil — komunitas, kort premium, dan pengalaman kelas dunia.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-volt mb-4">
              Tautan
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="#tentang" className="hover:text-volt transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-volt transition-colors">
                  Fasilitas
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-volt transition-colors">
                  Harga
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-volt transition-colors">
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-volt mb-4">
              Kontak
            </p>
            <p className="text-sm text-muted">{SITE.address}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted hover:border-volt hover:text-volt transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircleIcon />
              </a>
              <a
                href={`mailto:hello@${SITE.name.toLowerCase().replace(" ", "")}.id`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted hover:border-volt hover:text-volt transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted hover:border-volt hover:text-volt transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name} {SITE.location}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-volt transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-volt transition-colors">
              Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MessageCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
