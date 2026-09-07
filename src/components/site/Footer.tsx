import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";

const socials = [
  { icon: Facebook, href: contact.facebook, label: "Facebook" },
  { icon: Instagram, href: contact.instagram, label: "Instagram" },
  { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: contact.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  const { copy, isAr } = useI18n();
  const f = copy.footer;

  return (
    <footer className="navy-panel">
      <div className="section-shell grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{f.description}</p>
          <div className="mt-6 flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label={f.linksTitle}>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">{f.linksTitle}</h3>
          <span className="gold-rule mt-4" />
          <ul className="mt-5 flex flex-col gap-3">
            {f.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id === "privacy" || link.id === "terms" ? "#" : `#${link.id}`}
                  className="text-sm text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">{f.contactTitle}</h3>
          <span className="gold-rule mt-4" />
          <ul className="mt-5 flex flex-col gap-3.5 text-sm text-white/65">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              <span dir="ltr">{contact.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              <span dir="ltr">{contact.email}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-gold" />
              <span>{isAr ? contact.addressAr : contact.addressEn}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="section-shell text-center text-xs text-white/50">{f.copyright}</p>
      </div>
    </footer>
  );
}
