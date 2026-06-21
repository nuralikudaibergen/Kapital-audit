"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type RevealFrom = "up" | "left" | "right" | "scale" | "blur" | "clip"

const baseClassMap: Record<RevealFrom, string> = {
  up: "reveal",
  left: "reveal-from-left",
  right: "reveal-from-right",
  scale: "reveal-from-scale",
  blur: "reveal-from-blur",
  clip: "reveal-from-clip",
}

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** delay in ms before the element animates in */
  delay?: number
  /** animation direction / style. defaults to "up" (legacy fade-up) */
  from?: RevealFrom
}

export function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  from = "up",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const baseClass = baseClassMap[from]

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
