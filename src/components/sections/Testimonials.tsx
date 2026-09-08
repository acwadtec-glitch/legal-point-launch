import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function Testimonials() {
  const { copy } = useI18n();
  const { testimonials } = copy;

  return (
    <section className="bg-muted/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading label={testimonials.label} title={testimonials.title} />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal as="article" key={item.name} delay={i * 100}>
              <figure className="card-elevated flex h-full flex-col bg-background p-7">
                <Quote className="size-7 text-gold/70 flip-rtl" strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className="grid size-11 place-items-center rounded-full bg-primary font-sans text-sm font-bold text-gold"
                    dir="ltr"
                    aria-hidden="true"
                  >
                    {item.name.replace(/[^\p{L}]/gu, "").slice(0, 2)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-primary">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
