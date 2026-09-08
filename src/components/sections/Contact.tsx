import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { contact } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function Contact() {
  const { copy, isAr, dir } = useI18n();
  const c = copy.contactSection;
  const [service, setService] = useState("");

  const details = [
    { icon: Phone, label: c.phone, value: contact.phone, ltr: true },
    { icon: Mail, label: c.email, value: contact.email, ltr: true },
    { icon: MapPin, label: c.address, value: isAr ? contact.addressAr : contact.addressEn },
    { icon: Clock, label: c.hours, value: isAr ? contact.hoursAr : contact.hoursEn },
  ];

  return (
    <section id="contact" className="bg-muted/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading label={c.label} title={c.title} subtitle={c.body} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <Reveal className="card-elevated bg-background p-7">
              <ul className="flex flex-col gap-6">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary">
                      <d.icon className="size-4.5 text-gold" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {d.label}
                      </p>
                      <p
                        className="mt-1 text-sm font-medium text-primary"
                        dir={d.ltr ? "ltr" : dir}
                      >
                        {d.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="card-elevated relative overflow-hidden bg-background">
              <div className="navy-panel grid h-52 place-items-center">
                <div className="text-center">
                  <MapPin className="mx-auto size-7 text-gold" strokeWidth={1.6} />
                  <p className="mt-3 text-sm font-semibold text-white/85">{c.mapLabel}</p>
                  <p className="mt-1 text-xs text-white/55">
                    {isAr ? contact.addressAr : contact.addressEn}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <form
              className="card-elevated bg-background p-7 lg:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success(c.form.success);
                (e.currentTarget as HTMLFormElement).reset();
                setService("");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">{c.form.name}</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">{c.form.phone}</Label>
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" dir="ltr" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="email">{c.form.email}</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" dir="ltr" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="service">{c.form.service}</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder={c.form.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {copy.services.items.map((s) => (
                        <SelectItem key={s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">{c.form.message}</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
              </div>
              <Button type="submit" variant="gold" size="xl" className="mt-7 w-full sm:w-auto">
                {c.form.submit}
                <Send className="size-4 flip-rtl" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
