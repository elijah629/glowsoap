import { cn } from "@/lib/utils"

export function HowSection() {

  const steps = [
    {
      title: "ATTACH...",
      description: "First, the GlowSoap is attached to the side of a generic soap dispenser.",
    },
    {
      title: "PUMP...",
      description:
        "Once you pump soap, place your hands under the GlowSoap dispenser. It will release fluorescent powder into the soap on your hands.",
    },
    {
      title: "✨ GLOW! ⭐",
      description:
        "Then, the GlowSoap will activate its UV light on the side, illuminating the sink area. When you wash your hands, the parts you haven't scrubbed yet will glow.",
    },
  ]

  return (
    <section id="how" className="relative">
      {steps.map((step, i) => (
        <div key={i} className={cn("h-screen p-5 top-0 sticky flex items-center justify-center", ["bg-accent", "bg-[#0FF]", "bg-yellow-300"][i])}>
          <div className="text-black max-w-md">
            <h3 className="text-6xl font-bold mb-4">{step.title}</h3>
            <p className="text-xl leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </section >
  )
}
