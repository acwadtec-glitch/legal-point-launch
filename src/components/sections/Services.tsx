import { ArrowRight, Briefcase, Building2, Gavel, FileText, Scale, UserCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const icons = [Scale, FileText, Building2, Gavel, Briefcase, UserCheck];

export function Services() {
  const { copy } = useI18n();
  const { services } = copy;

  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          label={services.label}
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[i] ?? Scale;
            return (
              <Reveal as="article" key={item.title} delay={(i % 3) * 90}>
                <div className="card-elevated group h-full p-7">
                  <span className="grid size-12 place-items-center rounded-md border border-gold/35 bg-gold/8 transition-colors group-hover:bg-gold">
                    <Icon
                      className="size-5.5 text-gold-deep transition-colors group-hover:text-gold-foreground"
                      strokeWidth={1.6}
                    />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-primary"
                  >
                    {services.more}
                    <ArrowRight className="size-4 flip-rtl transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
