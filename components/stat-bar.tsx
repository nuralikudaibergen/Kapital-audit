import { Counter } from "@/components/counter"
import { Reveal } from "@/components/reveal"
import { company } from "@/lib/company"

const stats = [
  { to: 2003, prefix: "", suffix: "", label: "год регистрации БИН" },
  { to: 1, prefix: "", suffix: "", label: "профильная аудиторская организация" },
  { to: 2, prefix: "", suffix: "", label: "e-mail для связи" },
  { to: 7252, prefix: "", suffix: "", label: "городской код Шымкента" },
]

export function StatBar() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-ink-foreground md:py-20">
      <span
        className="pointer-events-none absolute -left-20 top-1/2 h-16 w-96 -translate-y-1/2 -skew-x-[32deg] bg-background/12"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-16 bottom-10 h-14 w-80 -skew-x-[32deg] bg-background/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-8">
        <Reveal as="p" className="text-center text-sm font-bold uppercase tracking-[0.3em] text-ink-foreground/70">
          {company.shortName} в данных
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              from="scale"
              delay={i * 120}
              className="group flex flex-col items-center text-center"
            >
              <Counter
                to={s.to}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-heading text-5xl font-extrabold leading-none text-primary transition-transform duration-500 group-hover:scale-110 md:text-6xl"
              />
              <span className="mt-4 max-w-[180px] text-xs font-semibold uppercase tracking-wide text-ink-foreground/70 md:text-sm">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
