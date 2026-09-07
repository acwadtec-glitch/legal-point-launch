import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";
import { contact } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

function LangSwitcher({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const { lang, setLang } = useI18n();
  const base =
    "px-2.5 py-1 text-xs font-semibold rounded-sm transition-colors cursor-pointer";
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border p-0.5",
        tone === "light" ? "border-white/20" : "border-border",
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={cn(
          base,
          "font-arabic",
          lang === "ar"
            ? "bg-gold text-gold-foreground"
            : tone === "light"
              ? "text-white/70 hover:text-white"
              : "text-muted-foreground hover:text-primary",
        )}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          base,
          "font-sans",
          lang === "en"
            ? "bg-gold text-gold-foreground"
            : tone === "light"
              ? "text-white/70 hover:text-white"
              : "text-muted-foreground hover:text-primary",
        )}
      >
        English
      </button>
    </div>
  );
}

export function Header() {
  const { copy } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/92 py-2 backdrop-blur-xl"
          : "border-b border-transparent bg-background py-3.5",
      )}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.menu}>
          {copy.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-center after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitcher />
          <Button variant="gold" size="lg" asChild>
            <a href="#contact">{copy.ctaBook}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={copy.menu}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="border-b border-border">
              <div className="section-shell pt-2 pb-6">
                <nav className="flex flex-col divide-y divide-border">
                  {copy.nav.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="py-3.5 text-base font-medium text-foreground transition-colors hover:text-gold-deep"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <Button variant="gold" size="lg" className="mt-5 w-full" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    {copy.ctaBook}
                  </a>
                </Button>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4 text-gold-deep" />
                  <span dir="ltr">{contact.phone}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
