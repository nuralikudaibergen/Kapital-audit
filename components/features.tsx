import { Gauge, Calculator, ShoppingBag, UserMinus, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: Gauge,
    text: "Понять, какие участки учета и контроля требуют внимания в первую очередь.",
  },
  {
    icon: Calculator,
    text: "Оценить качество бухгалтерского учета и снизить риск ошибок в отчетности.",
  },
  {
    icon: ShoppingBag,
    text: "Подготовиться к покупке бизнеса, расширению компании или работе с инвестором.",
  },
  {
    icon: UserMinus,
    text: "Проверить положение дел перед сменой директора, главного бухгалтера или управленческой команды.",
  },
  {
    icon: ShieldCheck,
    text: "Получить аудиторское заключение и подтвердить достоверность финансовых данных.",
  },
  {
    icon: Sparkles,
    text: "Найти понятные решения для оптимизации учета, налогов и внутреннего контроля.",
  },
]

export function Features() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal as="h2" className="text-center font-heading text-2xl font-extrabold text-foreground md:text-3xl">
          Наша помощь нужна, чтобы:
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, text }, i) => {
            const from = (["left", "right", "scale"] as const)[i % 3]
            return (
              <Reveal
                key={text}
                from={from}
                delay={(i % 3) * 120}
                className="brand-panel group flex flex-col items-center rounded-2xl p-4 text-center transition-colors duration-300 hover:bg-background"
              >
                <span className="relative flex h-16 w-16 items-center justify-center rounded-lg border-2 border-ink bg-ink text-primary-foreground shadow-[5px_5px_0_rgba(17,17,17,0.24)] transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </span>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
