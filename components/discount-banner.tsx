import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Parallax } from "@/components/parallax"

export function DiscountBanner() {
  return (
    <section className="bg-secondary py-8">
      <Reveal className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl shadow-lg md:grid-cols-[minmax(0,360px)_1fr]">
        <div className="flex items-center justify-center bg-ink px-8 py-8">
          <a
            href="#contacts"
            className="group inline-flex items-center gap-2 rounded-md border border-ink-foreground/30 px-7 py-3 text-sm font-bold text-ink-foreground transition-colors duration-300 hover:bg-ink-foreground hover:text-ink"
          >
            ПОДРОБНЕЕ
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
        <div className="relative flex items-center overflow-hidden bg-primary px-8 py-8 text-primary-foreground">
          <Parallax speed={-0.2} className="absolute -right-10 -top-10 h-40 w-40">
            <div className="h-full w-full rounded-full bg-primary-foreground/10 blur-2xl animate-float-slow" />
          </Parallax>
          <p className="relative font-heading text-lg font-extrabold leading-snug md:text-2xl">
            Действуют скидки на каждый четвёртый месяц аудита до{" "}
            <span className="inline-block rounded bg-primary-foreground px-2 text-primary">50%</span>!
          </p>
        </div>
      </Reveal>
    </section>
  )
}
