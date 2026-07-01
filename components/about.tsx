import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { Parallax } from "@/components/parallax"
import { company } from "@/lib/company"

const paragraphs = [
  `${company.legalName} работает как аудиторская организация и помогает компаниям получать независимое мнение о финансовой отчетности, налоговых рисках и состоянии учета.`,
  `Руководитель и аудитор: ${company.director}. Для клиентов это персональная ответственность, понятная коммуникация и внимательная работа с документами.`,
  "Мы проводим обязательный и инициативный аудит, готовим аудиторские заключения, разбираем слабые места учета и даем рекомендации, которые можно применить в управлении бизнесом.",
]

const details = [
  ["Вид деятельности", company.activity],
  ["Руководитель / аудитор", company.director],
  ["БИН", company.bin],
  ["Юридический адрес", company.legalAddress],
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <Reveal className="relative grid grid-cols-2 gap-4">
          <span
            className="absolute -left-6 -top-6 h-20 w-32 -skew-x-[32deg] bg-ink/18"
            aria-hidden="true"
          />
          <Parallax speed={0.04} className="brand-panel aspect-[4/3] overflow-hidden rounded-xl">
            <div className="group h-full">
              <Image
                src="/about-1.png"
                alt="Аудитор за работой с финансовыми документами"
                width={600}
                height={420}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </Parallax>
          <Parallax speed={0.06} className="brand-panel mt-8 aspect-[4/3] overflow-hidden rounded-xl">
            <div className="group h-full">
              <Image
                src="/about-2.png"
                alt="Анализ финансовой отчетности"
                width={600}
                height={420}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </Parallax>
        </Reveal>

        <Reveal from="right" delay={120}>
          <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <span className="h-px w-8 bg-primary" />
            О компании
          </span>
          <h2 className="mt-4 font-heading text-2xl font-extrabold leading-snug text-foreground md:text-3xl">
            {company.legalName} — независимая аудиторская организация в Шымкенте.
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="brand-panel mt-7 grid gap-3 rounded-xl p-4 text-sm">
            {details.map(([label, value]) => (
              <div key={label} className="grid gap-1 sm:grid-cols-[180px_1fr]">
                <dt className="font-bold text-foreground">{label}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {company.addressNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
