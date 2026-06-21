import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { PromoBanner } from "@/components/promo-banner"
import { Help } from "@/components/help"
import { Features } from "@/components/features"
import { SiteFooter } from "@/components/site-footer"
import { Marquee } from "@/components/marquee"
import { StatBar } from "@/components/stat-bar"
import { services } from "@/lib/company"

const servicesMarquee = [...services, "Due diligence"]

const trustMarquee = [
  "Малый и средний бизнес",
  "Производственные компании",
  "Торговые предприятия",
  "Строительные организации",
  "Сервисные компании",
  "Некоммерческие организации",
  "Индивидуальные проекты собственников",
  "Компании с обязательным аудитом",
]

export default function Page() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <Hero />
      <div className="page-after-hero">
        <Marquee
          items={servicesMarquee}
          speed={45}
          className="border-y border-border bg-secondary py-5 text-secondary-foreground"
          itemClassName="text-secondary-foreground/80"
        />
        <About />
        <StatBar />
        <Services />
        <PromoBanner />
        <Help />
        <Features />
        <Marquee
          items={trustMarquee}
          speed={55}
          direction="right"
          className="border-y border-ink-foreground/10 bg-ink py-6 text-ink-foreground"
          itemClassName="text-ink-foreground"
        />
        <SiteFooter />
      </div>
    </main>
  )
}
