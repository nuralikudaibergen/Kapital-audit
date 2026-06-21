import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { company } from "@/lib/company"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-background pt-20 text-foreground"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-28 top-24 h-24 w-[46vw] -skew-x-[32deg] bg-ink/12" />
        <div className="absolute -right-24 top-44 h-20 w-[40vw] -skew-x-[32deg] bg-ink/16" />
        <div className="absolute bottom-14 left-1/2 h-16 w-[70vw] -translate-x-1/2 -skew-x-[32deg] bg-ink/10" />
        <div className="absolute left-0 top-0 h-full w-2 bg-ink/90 sm:w-4" />
        <div className="absolute right-0 top-0 h-full w-1.5 bg-ink/90 sm:w-3" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pb-16 text-center">
        <div className="hero-in hero-in-1 brand-logo-frame mb-10 p-3">
          <Image
            src={company.logo}
            alt={`Логотип ${company.shortName}`}
            width={200}
            height={200}
            priority
            className="h-36 w-36 object-contain sm:h-44 sm:w-44"
          />
        </div>

        <p className="hero-in hero-in-1 max-w-[calc(100vw-2rem)] break-words text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-ink/70 sm:text-sm sm:tracking-[0.24em]">
          {company.legalName}
        </p>
        <h1 className="hero-in hero-in-1 mt-4 max-w-full break-words font-heading text-5xl font-light text-ink sm:text-7xl md:text-8xl">
          {company.shortName}
        </h1>
        <p className="hero-in hero-in-2 mt-6 max-w-xl text-balance text-base font-medium text-ink/80 sm:text-lg">
          Независимый аудит, налоговые консультации и бухгалтерское сопровождение для бизнеса в Казахстане.
        </p>
        <p className="hero-in hero-in-3 mt-3 max-w-xl text-balance text-sm font-semibold uppercase tracking-[0.25em] text-ink/65 sm:text-base">
          {company.activity} · г. Шымкент
        </p>
        <div className="hero-in hero-in-3 mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="brand-button shine inline-flex min-h-11 items-center gap-2 rounded-md px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1"
          >
            Наши услуги
          </a>
          <a
            href="#contacts"
            className="brand-button-outline inline-flex min-h-11 items-center gap-2 rounded-md px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1"
          >
            Связаться с нами
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ink/60 transition-colors hover:text-ink"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/10" />
    </section>
  )
}
