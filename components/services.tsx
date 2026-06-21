"use client"

import { useState } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Аудит финансовой отчетности",
    heading: "Независимая проверка отчетности и понятные рекомендации для руководства.",
    body: [
      "Проверяем достоверность бухгалтерской и финансовой отчетности, оцениваем существенные риски и качество раскрытия данных.",
      "По итогам работы клиент получает аудиторское заключение и практичные замечания по улучшению учета и контроля.",
    ],
  },
  {
    title: "Налоговый аудит",
    heading: "Налоговая проверка помогает снизить риски штрафов и доначислений.",
    body: [
      "Проверяем корректность исчисления налогов, своевременность уплаты и наличие документов, подтверждающих операции.",
      "Формируем список рисков и рекомендаций, которые помогают подготовиться к проверкам контролирующих органов.",
    ],
  },
  {
    title: "Обязательный аудит",
    heading: "Аудиторская проверка для компаний, которым она требуется по законодательству.",
    body: [
      "Проводим проверку финансовой отчетности в соответствии с требованиями Республики Казахстан.",
      "Помогаем пройти процесс спокойно: согласуем перечень документов, сроки, формат взаимодействия и итоговую выдачу заключения.",
    ],
  },
  {
    title: "Инициативный аудит",
    heading: "Добровольная проверка дает собственнику честную картину состояния бизнеса.",
    body: [
      "Подходит перед сменой руководства, сделками, привлечением партнеров или внутренней оценкой эффективности учета.",
      "Фокусируемся на тех участках, где бизнесу нужна наибольшая ясность: документы, налоги, задолженности, контрольные процедуры.",
    ],
  },
  {
    title: "Аудит специального назначения",
    heading: "Точечная проверка под конкретный вопрос собственника или руководителя.",
    body: [
      "Проверяем отдельные участки учета, операции, контрагентов или показатели, которые имеют значение для решения.",
      "Формат подходит для due diligence, подготовки к сделкам, оценки активов и проверки спорных операций.",
    ],
  },
]

export function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,360px)_1fr]">
        <ul className="brand-panel space-y-2 self-start rounded-xl p-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`group flex min-h-11 w-full items-center gap-3 rounded-lg px-4 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                  i === active
                    ? "brand-button text-primary-foreground"
                    : "border border-ink/20 bg-background/45 text-foreground hover:translate-x-1 hover:bg-background"
                }`}
              >
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    i === active
                      ? "translate-x-0 text-primary-foreground"
                      : "text-primary group-hover:translate-x-1"
                  }`}
                  aria-hidden="true"
                />
                {s.title}
              </button>
            </li>
          ))}
        </ul>

        <div>
          <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <span className="h-px w-8 bg-primary" />
            Наши услуги
          </span>
          <div key={active} className="tab-in">
            <h2 className="mt-4 text-balance font-heading text-2xl font-extrabold leading-snug text-ink-foreground md:text-3xl">
              {current.heading}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-foreground/80 md:text-base">
              {current.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <a
            href="#contacts"
            className="brand-button group mt-8 inline-flex min-h-11 items-center gap-2 rounded-md px-7 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1"
          >
            Получить консультацию
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
