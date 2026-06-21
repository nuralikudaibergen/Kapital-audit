"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { ScrollProgressBar } from "@/components/scroll-progress-bar"
import { useScrollY } from "@/hooks/use-scroll-y"
import { company } from "@/lib/company"

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Когда нужен аудит", href: "#why" },
  { label: "Контакты", href: "#contacts" },
]

/**
 * Fixed header sits on top of the Hero (yellow palette) at the very top of
 * the page. Once the user scrolls past the Hero into the post-hero region
 * (deep-navy / amber palette), the header re-skins itself so its background
 * matches the new surfaces. Hero remains untouched visually.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const y = useScrollY()
  const scrolled = y > 40
  // Past Hero only after we know window dimensions to avoid a layout flash.
  const pastHero = typeof window !== "undefined" && y > window.innerHeight - 80
  const state = pastHero ? "after" : scrolled ? "scrolled" : "top"

  return (
    <header
      data-header-state={state}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        pastHero
          ? "shadow-[0_4px_0_rgba(15,23,42,0.4)] backdrop-blur supports-[backdrop-filter]:bg-[#0f172acc]"
          : scrolled
            ? "bg-background/95 shadow-[0_4px_0_rgba(17,17,17,0.2)] backdrop-blur supports-[backdrop-filter]:bg-background/85"
            : "bg-transparent"
      }`}
    >
      <ScrollProgressBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 md:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2 text-ink">
          <span className="brand-logo-frame flex h-9 w-9 shrink-0 items-center justify-center rounded-md p-0.5">
            <Image
              src={company.logo}
              alt={`Логотип ${company.shortName}`}
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-sm font-extrabold tracking-wide text-ink">
              {company.shortName}
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-ink/70">
              аудит
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`https://wa.me/${company.whatsappHref}`} className="flex items-center gap-1.5 text-ink">
            <MessageCircle className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
            <span className="text-[11px] leading-tight">
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-ink/70">
                WhatsApp
              </span>
              <span className="font-semibold">{company.mobile}</span>
            </span>
          </a>
          <a href={`tel:${company.phoneHref}`} className="flex items-center gap-1.5 text-ink">
            <Phone className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
            <span className="text-[11px] leading-tight">
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-ink/70">
                Телефон
              </span>
              <span className="font-semibold">{company.phone}</span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contacts"
            className="brand-button hidden rounded-md px-3 py-1 text-[11px] font-bold transition-all duration-300 hover:-translate-y-0.5 sm:inline-block"
          >
            Связаться
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="min-h-9 min-w-9 text-ink lg:hidden"
            aria-label="Открыть меню"
          >
            {open ? <X className="mx-auto h-5 w-5" /> : <Menu className="mx-auto h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav className="hidden border-y-2 border-ink bg-background/70 lg:block">
        <ul className="mx-auto flex max-w-7xl items-center gap-7 px-8 py-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[11px] font-bold tracking-wide text-ink transition-colors hover:text-ink/70"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="border-y-2 border-ink bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-bold tracking-wide text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-1.5 flex flex-col gap-1 border-t border-ink/15 pt-2 text-ink">
              <a href={`https://wa.me/${company.whatsappHref}`} className="py-1 text-sm font-semibold">
                WhatsApp: {company.mobile}
              </a>
              <a href={`tel:${company.phoneHref}`} className="py-1 text-sm font-semibold">
                Телефон: {company.phone}
              </a>
              <a href={`mailto:${company.emails[0]}`} className="py-1 text-sm font-semibold">
                E-mail: {company.emails[0]}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
