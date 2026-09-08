import { stats } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/site/Reveal";

export function Stats() {
  const { isAr } = useI18n();

  return (
    <section className="navy-panel relative overflow-hidden py-16 lg:py-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.value} delay={i * 90} className="text-center">
            <p className="font-sans text-4xl font-extrabold text-gradient-gold sm:text-5xl" dir="ltr">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide text-white/70">
              {isAr ? stat.ar : stat.en}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
