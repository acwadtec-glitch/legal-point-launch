import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function Faq() {
  const { copy } = useI18n();
  const { faq } = copy;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading label={faq.label} title={faq.title} />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="mb-3 rounded-lg border border-border px-5 transition-colors data-[state=open]:border-gold/50 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="py-5 text-start text-base font-semibold text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
