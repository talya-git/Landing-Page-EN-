import { Reveal } from "@/components/reveal"
import { Users, HelpCircle, Languages, ShieldAlert, MapPin, Briefcase } from "lucide-react"

const pains = [
  { icon: ShieldAlert, text: "Complex local regulations that are hard to navigate from abroad" },
  { icon: Users, text: "Coordinating multiple professionals who don't speak your language" },
  { icon: Languages, text: "Language barriers and cultural differences in business dealings" },
  { icon: HelpCircle, text: "Uncertainty about the reliability of local professionals" },
  { icon: MapPin, text: "Making critical decisions from thousands of miles away" },
  { icon: Briefcase, text: "The burden of being your own 'project manager' remotely" },
]

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            The Challenge
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            Buying luxury property in Jerusalem is unlike buying anywhere else.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            The combination of complex local regulations and unique challenges facing overseas buyers, creates a landscape that demands deep expertise and trusted guidance. That's why you need the right person in the right place.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 70}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-border/70 bg-background/60 p-6 transition-colors hover:border-gold/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="pt-1.5 leading-relaxed text-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <p className="font-heading text-xl text-balance text-gold-soft sm:text-2xl">
            You need someone you can trust — experienced and deeply rooted in this city.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
