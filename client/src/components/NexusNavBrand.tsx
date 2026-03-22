import { cn } from "@/lib/utils";

type NexusNavBrandProps = {
  className?: string;
  variant?: "nav" | "compact" | "footer";
};

/**
 * Full wordmark + mark from `/logo.png` (transparent PNG on dark UI).
 */
export function NexusNavBrand({
  className,
  variant = "nav",
}: NexusNavBrandProps) {
  const sizeClass =
    variant === "compact"
      ? "h-[17px] sm:h-[1.15rem]"
      : variant === "footer"
        ? "h-6 sm:h-7"
        : "h-7 max-w-[min(280px,82vw)] sm:h-8 md:h-9";

  return (
    <span
      className={cn(
        "inline-flex select-none items-center leading-none",
        className,
      )}
    >
      <img
        src="/logo.png"
        alt="Nexus"
        width={260}
        height={52}
        decoding="async"
        className={cn(sizeClass, "w-auto object-contain object-left")}
      />
    </span>
  );
}
