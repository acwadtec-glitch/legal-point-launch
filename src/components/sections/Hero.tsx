import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-legal.jpg";

export function Hero() {
  const { copy, isAr } = useI18n();
  const { hero } = copy;


  return (
    <section id="home" className="relative overflow-hidden bg-background pt-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 end-[-10%] size-[36rem] rounded-full bg-gold/8 blur-3xl"
      />
      <div className="section-shell grid items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/8 px-4 py-1.5">
            <ShieldCheck className="size-4 text-gold-deep" />
            <span className="text-xs font-semibold tracking-wide text-primary">{hero.eyebrow}</span>
          </Reveal>

          <Reveal delay={80} as="div">
            <h1 className="mt-6 text-4xl leading-[1.15] font-extrabold text-primary sm:text-5xl lg:text-[3.4rem]">
              {hero.headline}
            </h1>
            <span className="gold-rule mt-6 w-20" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">
                {copy.ctaBook}
                <ArrowRight className="flip-rtl" />
              </a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#services">{hero.secondary}</a>
            </Button>
          </Reveal>

          <Reveal delay={240} className="mt-10 grid gap-3 sm:grid-cols-3">
            {hero.trust.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/15">
                  <Check className="size-3 text-gold-deep" />
                </span>
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_50px_90px_-50px_oklch(0.26_0.06_259/0.55)]">
            <img
              src={heroImage}
              alt={hero.imageAlt}
              width={1408}
              height={1600}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent"
            />
          </div>
          <div className="absolute bottom-6 start-6 end-6 rounded-xl border border-gold/25 bg-background/92 p-4 backdrop-blur-md sm:start-[-1.5rem] sm:end-auto sm:max-w-[15rem]">
            <p className="text-2xl font-extrabold text-primary" dir="ltr">10+</p>
            <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground">
              {isAr ? "سنوات من الخبرة القانونية" : "Years of legal experience"}

            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
