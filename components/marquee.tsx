import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: string[]
  /** Animation duration in seconds. Lower = faster. */
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
  itemClassName?: string
  separator?: string
}

/**
 * CSS-only infinite marquee. The `items` list is rendered twice in a single
 * flex track and translated by -50% so the second copy takes over seamlessly.
 * The duplicate is `aria-hidden` so screen readers announce each item once.
 */
export function Marquee({
  items,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className = "",
  itemClassName = "",
  separator = "•",
}: MarqueeProps) {
  const trackClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right"

  const renderItems = (keyPrefix: string) => (
    <>
      {items.map((item, i) => (
        <span
          key={`${keyPrefix}-${i}`}
          className={cn(
            "flex shrink-0 items-center gap-6 px-6 text-sm font-bold uppercase tracking-[0.2em]",
            itemClassName,
          )}
        >
          <span>{item}</span>
          {separator ? (
            <span aria-hidden="true" className="opacity-40">
              {separator}
            </span>
          ) : null}
        </span>
      ))}
    </>
  )

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        pauseOnHover && "marquee-paused",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn("marquee", trackClass)}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0">{renderItems("a")}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {renderItems("b")}
        </div>
      </div>
    </div>
  )
}
