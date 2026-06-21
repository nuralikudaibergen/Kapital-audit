import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { company } from "@/lib/company"

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-10 text-ink-foreground md:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 top-8 h-16 w-80 -skew-x-[32deg] bg-background/16" />
        <div className="absolute -left-16 bottom-6 h-12 w-72 -skew-x-[32deg] bg-background/12" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:items-center md:gap-8 md:px-8">
        <div className="brand-logo-frame flex h-16 w-16 shrink-0 items-center justify-center rounded-xl p-2 md:h-20 md:w-20">
          <Image
            src={company.logo}
            alt={`Логотип ${company.shortName}`}
            width={80}
            height={80}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="font-heading text-xl font-extrabold text-background md:text-2xl">
            Нужна аудиторская проверка или консультация?
          </h3>
          <p className="mt-2 text-sm font-medium text-background/80 md:text-base">
            Свяжитесь с {company.shortName}, чтобы обсудить задачу, сроки и перечень документов.
          </p>
        </div>

        <a
          href="#contacts"
          className="brand-button-outline group shine inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1"
        >
          Написать
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
