import { Reveal } from "@/components/reveal"
import { Scale, Landmark, PencilRuler, HardHat, ChefHat } from "lucide-react"

const services = [
  {
    icon: Scale,
    num: "01",
    title: "Legal Support",
    subtitle: "Leading real estate and property attorneys",
    items: ["Title verification", "Land registry & permits", "Purchase & sale contracts", "Real estate taxation & complex transactions", "Legal solutions"],
  },
  {
    icon: Landmark,
    num: "02",
    title: "Finance & Mortgages",
    subtitle: "Customized funding strategy",
    items: ["Financial planning & mortgage consulting", "Bank negotiations", "Feasibility studies & advanced financing solutions"],
  },
  {
    icon: PencilRuler,
    num: "03",
    title: "Architecture & Interior Design",
    subtitle: "Turning vision into home",
    items: ["Architectural planning & interior design", "Renderings & material selection", "Full guidance throughout"],
  },
  {
    icon: HardHat,
    num: "04",
    title: "Contractors & Execution",
    subtitle: "Management & supervision at every stage",
    items: ["Contractor matching & quality control", "Budget & timeline management", "Ongoing supervision"],
  },
  {
    icon: ChefHat,
    num: "05",
    title: "Kitchens, Carpentry & Finishes",
    subtitle: "Where your home gets its character",
    items: ["Custom kitchens & premium carpentry", "Ceramics, cladding & sanitary ware", "Full supplier coordination"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="pointer-events-none absolute -top-20 right-0 -z-10 h-96 w-96 gold-glow opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 gold-glow opacity-40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            Full Service
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            Why Work With Us?
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            A carefully curated network of professionals with proven experience guiding buyers in premium luxury projects in Jerusalem.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <article className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/60 p-7 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 gold-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                <p className="relative mt-1 text-sm text-gold-soft">{s.subtitle}</p>
                <ul className="relative mt-5 flex flex-col gap-2.5 border-t border-border/60 pt-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* Closing card */}
          <Reveal delay={services.length * 80}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 p-7 text-center">
              <img src="/media/a-z.png" alt="A-Z" className="mb-5 h-16 w-auto" />
              <p className="font-heading text-xl font-bold text-balance text-foreground">
                Considering buying or renovating? Already a client? Let us handle everything.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center self-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Contact A-Z Department
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
