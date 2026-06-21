"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  to: number
  from?: number
  /** ms */
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  numberClassName?: string
  /** BCP-47 locale tag used by Intl.NumberFormat. Defaults to "ru-RU". */
  locale?: string
}

/**
 * Animates a numeric value from `from` to `to` with an ease-out cubic curve
 * the first time the element enters the viewport. Uses rAF, no external deps.
 */
export function Counter({
  to,
  from = 0,
  duration = 1500,
  prefix = "",
  suffix = "",
  className = "",
  numberClassName = "",
  locale = "ru-RU",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [value, setValue] = useState(from)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced-motion: snap straight to target.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setValue(to)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.disconnect()

          const start = performance.now()
          const delta = to - from

          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3)
            setValue(from + delta * eased)
            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick)
            } else {
              rafRef.current = null
            }
          }
          rafRef.current = requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [to, from, duration])

  const formatter = new Intl.NumberFormat(locale)
  const display = formatter.format(Math.round(value))

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span className={numberClassName}>{display}</span>
      {suffix}
    </span>
  )
}
