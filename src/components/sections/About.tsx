import { Award, ScrollText, HeartHandshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const icons = [Award, ScrollText, HeartHandshake];

export function About() {
  const { copy } = useI18n();
  const { about } = copy;

  return (
    <section id="about" className="bg-muted/60 py-20 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading label={about.label} title={about.title} align="start" />
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{about.body}</p>
            </Reveal>
          </div>

          <ul className="grid gap-4">
            {about.values.map((value, i) => {
              const Icon = icons[i] ?? Award;
              return (
                <Reveal as="li" key={value.title} delay={i * 90}>
                  <div className="card-elevated flex items-start gap-4 bg-background p-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary">
                      <Icon className="size-5 text-gold" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{value.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
