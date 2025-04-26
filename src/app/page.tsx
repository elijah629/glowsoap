"use client"

import { useScroll, useSpring } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import GridBackground from "@/components/grid-background"
import HeroSection from "@/components/sections/hero-section"
import WhySection from "@/components/sections/why-section"
import RoadmapSection from "@/components/sections/roadmap-section"
import FooterCTA from "@/components/sections/footer-cta"
import PrinciplesSection from "@/components/sections/principles-section"
import HowSection from "@/components/sections/how-section"

export default function Home() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 })

  return (
    <>
      {/* Grid Background */}
      <GridBackground />

      {/* Hero Section */}
      <HeroSection scrollProgress={smoothProgress} />

      <Separator />

      {/* Why Section */}
      <WhySection />

      <Separator />

      <HowSection />

      <Separator />

      <PrinciplesSection scrollProgress={smoothProgress} />

      <Separator />

      {/* Roadmap Section */}
      <RoadmapSection scrollProgress={smoothProgress} />

      {/* Footer CTA */}
      <FooterCTA />
    </>
  )
}
