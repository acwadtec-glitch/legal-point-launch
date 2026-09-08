import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function Process() {
  const { copy } = useI18n();
  const { process } = copy;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading label={process.label} title={process.title} />

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute start-[1.4rem] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent lg:start-0 lg:end-0 lg:top-[1.4rem] lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 110}
              className="relative flex gap-5 lg:flex-col lg:gap-0"
            >
              <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-background font-sans text-sm font-extrabold text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
