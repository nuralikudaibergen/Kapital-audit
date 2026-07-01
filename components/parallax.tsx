"use client"

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"
import { useScrollY } from "@/hooks/use-scroll-y"

interface ParallaxProps {
  children: ReactNode
  /**
   * -1.0 .. 1.0 — negative moves the layer UP as you scroll DOWN,
   * 0 keeps it pinned to the document flow, positive values move DOWN
   * (visually slower than the page). Typical decorative range: -0.3 .. 0.2.
   */
  speed?: number
  maxOffset?: number
  disableBelow?: number
  className?: string
  as?: ElementType
  style?: CSSProperties
}

/**
 * Wraps children in a positioned shell and translates an inner layer
 * proportional to the current scroll position. No re-renders — the transform
 * is written straight to the DOM in useLayoutEffect, keyed off the throttled
 * scrollY value from useScrollY.
 */
export function Parallax({
  children,
  speed = 0.3,
  maxOffset = 40,
  disableBelow = 768,
  className = "",
  as,
  style,
}: ParallaxProps) {
  const Tag = (as ?? "div") as ElementType
  const shellRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const scrollY = useScrollY()

  useLayoutEffect(() => {
    const node = innerRef.current
    const shell = shellRef.current
    if (!node || !shell) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || window.innerWidth < disableBelow) {
      node.style.transform = "translate3d(0, 0, 0)"
      return
    }

    const rect = shell.getBoundingClientRect()
    const viewportCenter = window.innerHeight / 2
    const elementCenter = rect.top + rect.height / 2
    const rawOffset = (viewportCenter - elementCenter) * speed
    const offset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset))

    node.style.transform = `translate3d(0, ${offset}px, 0)`
  }, [scrollY, speed, maxOffset, disableBelow])

  return (
    <Tag
      ref={shellRef}
      className={className}
      style={{ overflow: "hidden", ...style }}
    >
      <div
        ref={innerRef}
        style={{
          height: "100%",
          minHeight: "100%",
          width: "100%",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
        {children}
      </div>
    </Tag>
  )
}
