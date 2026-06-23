import { Reveal } from "@/components/reveal"
import { UserCheck, MapPinned, Layers } from "lucide-react"

const points = [
  { icon: UserCheck, title: "Curated Expert Network", text: "Handpicked professionals with a proven track record, warmly recommended by our past clients." },
  { icon: MapPinned, title: "Everything Under One Roof", text: "Legal, design, financial, suppliers, importers, and property management." },
  { icon: Layers, title: "Smooth & Secure Process", text: "Every step is supervised by our team, solely for your best interests." },
]

export function Solution() {
  return (
    <section id="solution" className="relative py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Text */}
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            The Solution
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            So what is A-Z?
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            A-Z is a full-service solution covering every aspect of your real estate journey in Jerusalem: from legal support through financing, planning and design at the highest levels, to direct connections with local suppliers and selected importers - no middlemen, at prices you won't find anywhere else. We ensure every step is smooth, secure, and handled by the best professionals, warmly recommended by our past clients upon completion.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{p.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Video */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <video
                className="aspect-[9/13] w-full object-cover sm:aspect-[4/5]"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/luxury-interior.png"
              >
                <source src="/media/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

