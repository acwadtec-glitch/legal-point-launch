import { cn } from "@/lib/utils";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Legal Point">
      <span
        className={cn(
          "relative grid size-10 place-items-center rounded-md border transition-colors",
          tone === "light" ? "border-white/25 bg-white/5" : "border-gold/40 bg-gold/8",
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            d="M12 3v16M6.5 19h11M4 8h16M4 8l-2.2 5a3.2 3.2 0 0 0 4.4 0L4 8Zm16 0-2.2 5a3.2 3.2 0 0 0 4.4 0L20 8ZM12 3l-8 5m8-5 8 5"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans text-lg font-extrabold tracking-tight",
            tone === "light" ? "text-white" : "text-primary",
          )}
        >
          Legal<span className="text-gold">Point</span>
        </span>
        <span
          className={cn(
            "mt-1 font-sans text-[0.6rem] font-medium uppercase tracking-[0.3em]",
            tone === "light" ? "text-white/50" : "text-muted-foreground",
          )}
        >
          Law &amp; Consultation
        </span>
      </span>
    </a>
  );
}
