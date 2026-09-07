import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Fades content up when it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(22px)",
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      {label ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.28em]",
            tone === "dark" ? "text-gold" : "text-gold-deep",
          )}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold sm:text-4xl",
          tone === "dark" ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      <span className={cn("gold-rule mt-5", align === "center" && "mx-auto")} />
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
