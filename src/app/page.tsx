"use client"

import { useScroll, useSpring } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import GridBackground from "@/components/grid-background"
import { HeroSection } from "@/components/sections/hero-section"
import { WhySection } from "@/components/sections/why-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { FooterCTA } from "@/components/sections/footer-cta"
import { PrinciplesSection } from "@/components/sections/principles-section"
import { HowSection } from "@/components/sections/how-section"
import { ZoomText } from "@/components/sections/zoom-text"
import { WipeTransition } from "@/components/sections/wipe-transition"

export default function Home() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 })

  return (
    <main className="-mt-16">
      <GridBackground />

      <ZoomText />

      <HeroSection scrollProgress={smoothProgress} />

      <WipeTransition before="https://placehold.co/800x600/FFFFFF/D2B48C?text=Hand" after="https://placehold.co/800x600/000000/00ffff?text=Hand" />

      <WhySection />

      <HowSection />

      <Separator />

      <PrinciplesSection scrollProgress={smoothProgress} />

      <Separator />

      <RoadmapSection />

      <FooterCTA />
    </main>
  )
}
