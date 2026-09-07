import { Lock, MessagesSquare, ShieldCheck, Sparkles, LifeBuoy } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const icons = [ShieldCheck, Sparkles, Lock, MessagesSquare, LifeBuoy];

export function WhyUs() {
  const { copy } = useI18n();
  const { why } = copy;

  return (
    <section id="why" className="bg-muted/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading label={why.label} title={why.title} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal
                as="article"
                key={item.title}
                delay={(i % 3) * 80}
              >
                <div className="card-elevated h-full bg-background p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-md bg-primary">
                      <Icon className="size-4.5 text-gold" strokeWidth={1.7} />
                    </span>
                    <h3 className="text-base font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
