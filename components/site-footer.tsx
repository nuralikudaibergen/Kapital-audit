import Image from "next/image"
import { AtSign, BadgeInfo, MapPin, Phone, MessageCircle, UserRound } from "lucide-react"
import { company } from "@/lib/company"

const navCol = [
  { label: "Главная", href: "#home" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Когда нужен аудит", href: "#why" },
  { label: "Контакты", href: "#contacts" },
]

const servicesCol = [
  { label: "Аудит финансовой отчетности", href: "#services" },
  { label: "Обязательный аудит", href: "#services" },
  { label: "Налоговый аудит", href: "#services" },
  { label: "Бухгалтерское сопровождение", href: "#services" },
]

export function SiteFooter() {
  return (
    <footer id="contacts" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-foreground p-1">
              <Image
                src={company.logo}
                alt={`Логотип ${company.shortName}`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-extrabold tracking-wide">{company.shortName}</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-foreground/70">
                аудит
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            {company.legalName} — аудиторская организация в Шымкенте. Независимый аудит, налоговые консультации и сопровождение учета.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${company.phoneHref}`} className="hover:text-ink-foreground">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`https://wa.me/${company.whatsappHref}`} className="hover:text-ink-foreground">
                {company.mobile} — WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${company.mobileHref}`} className="hover:text-ink-foreground">
                {company.mobile}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <AtSign className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                {company.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="hover:text-ink-foreground">
                    {email}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <UserRound className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{company.director}</span>
            </li>
            <li className="flex items-center gap-3">
              <BadgeInfo className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>БИН {company.bin}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-ink-foreground">
            Навигация
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            {navCol.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-ink-foreground">
            Услуги
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            {servicesCol.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-ink-foreground/60 md:px-8">
          © {new Date().getFullYear()} {company.legalName}. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
