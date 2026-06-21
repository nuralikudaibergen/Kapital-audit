"use client"

import { useEffect, useState } from "react"

/**
 * Single rAF-throttled scroll listener.
 * Reused by Header, ScrollProgressBar and any <Parallax> consumer.
 * Updates once per animation frame at most.
 */
export function useScrollY(): number {
  const [y, setY] = useState(0)

  useEffect(() => {
    let raf = 0

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        setY(window.scrollY)
        raf = 0
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return y
}
