import Image from "next/image"
import { FileCheck, BarChart3, UserCog, Handshake, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Parallax } from "@/components/parallax"
import { company } from "@/lib/company"

const items = [
  {
    icon: FileCheck,
    text: "Компаниям, которым требуется обязательная аудиторская проверка финансовой отчетности.",
  },
  {
    icon: BarChart3,
    text: "Собственникам, которые хотят увидеть реальные риски в учете, налогах и бизнес-процессах.",
  },
  {
    icon: UserCog,
    text: "Новому руководству, которому важно быстро разобраться в состоянии документов и отчетности.",
  },
  {
    icon: Handshake,
    text: "Партнерам и инвесторам, которым нужно независимое подтверждение финансовых показателей.",
  },
]

export function Help() {
  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <span className="h-px w-8 bg-primary" />
            Когда нужен аудит
          </span>
          <h2 className="mt-4 font-heading text-xl font-extrabold leading-snug text-foreground md:text-2xl">
            {company.shortName} помогает, когда бизнесу нужна проверенная финансовая информация для отчетности, решений или переговоров.
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {items.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="brand-panel group flex flex-col gap-3 rounded-xl p-3 transition-colors duration-300 hover:bg-background"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-ink bg-ink text-primary-foreground shadow-[4px_4px_0_rgba(17,17,17,0.22)] transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <a
            href="#contacts"
            className="brand-button group mt-10 inline-flex min-h-11 items-center gap-2 rounded-md px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1"
          >
            Подробнее
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={120} className="brand-panel group relative overflow-hidden rounded-2xl">
          <Parallax speed={0.04}>
            <Image
              src="/help-1.png"
              alt="Специалисты обсуждают аудит на встрече"
              width={760}
              height={620}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Parallax>
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
        </Reveal>
      </div>
    </section>
  )
}
