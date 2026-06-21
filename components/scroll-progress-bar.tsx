"use client"

import { useEffect, useState } from "react"
import { useScrollY } from "@/hooks/use-scroll-y"

/**
 * 2px progress strip pinned to the bottom edge of the SiteHeader.
 * Reads the throttled scrollY from useScrollY and writes a single
 * transform: scaleX(...) — no re-layout cost.
 */
export function ScrollProgressBar() {
  const y = useScrollY()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0)
  }, [y])

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  )
}
