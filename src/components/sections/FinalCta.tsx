import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";

export function FinalCta() {
  const { copy } = useI18n();

  return (
    <section className="navy-panel relative overflow-hidden py-20 lg:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 start-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="section-shell relative text-center">
        <Reveal>
          <span className="gold-rule mx-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            {copy.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {copy.finalCta.body}
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button variant="gold" size="xl" asChild>
            <a href="#contact">
              {copy.ctaBook}
              <ArrowRight className="flip-rtl" />
            </a>
          </Button>
          <Button variant="outlineLight" size="xl" asChild>
            <a href="#contact">{copy.ctaContact}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
