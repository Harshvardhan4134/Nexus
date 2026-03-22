import { cn } from "@/lib/utils";

type NexusLogoProps = {
  className?: string;
  /** Nav bar (default), compact for mock UI, footer */
  variant?: "default" | "compact" | "footer";
};

/**
 * Wordmark inspired by Next.js: geometric sans, extra-bold caps, tight tracking,
 * optional small suffix aligned to the baseline (like .JS in NEXT.JS).
 */
export function NexusLogo({ className, variant = "default" }: NexusLogoProps) {
  const main =
    variant === "compact"
      ? "text-base md:text-lg"
      : variant === "footer"
        ? "text-lg"
        : "text-xl md:text-2xl";

  const suffix =
    variant === "compact"
      ? "text-[0.38em] mb-[0.06em]"
      : variant === "footer"
        ? "text-[0.42em] mb-[0.08em]"
        : "text-[0.36em] mb-[0.1em]";

  return (
    <div
      className={cn(
        "inline-flex select-none items-end gap-0 font-sans leading-none text-[#eaeaea]",
        className,
      )}
      aria-label="Nexus"
    >
      <span
        className={cn(
          main,
          "font-extrabold uppercase tracking-[-0.04em] text-white",
        )}
        style={{ fontWeight: 800 }}
      >
        NEXUS
      </span>
      <span
        className={cn(
          suffix,
          "ml-[0.1em] font-semibold uppercase tracking-[-0.02em] text-[#a3a3a3]",
        )}
        style={{ fontWeight: 600 }}
      >
        .ai
      </span>
    </div>
  );
}
