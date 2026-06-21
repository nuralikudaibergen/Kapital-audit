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
    if (!node) return
    node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`
  }, [scrollY, speed])

  return (
    <Tag
      ref={shellRef}
      className={className}
      style={{ overflow: "hidden", ...style }}
    >
      <div
        ref={innerRef}
        style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
      >
        {children}
      </div>
    </Tag>
  )
}
