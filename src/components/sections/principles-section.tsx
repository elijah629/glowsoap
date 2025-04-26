"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"

interface PrinciplesSectionProps {
  scrollProgress: MotionValue<number>
}

export default function PrinciplesSection({ scrollProgress }: PrinciplesSectionProps) {
  const howContentY = useTransform(scrollProgress, [0.3, 0.6], [50, -50])


  const principles = [
    {
      number: "01",
      title: "EASY",
      description: "GlowSoap should be utilized by all individuals and designed to cater to everyone.",
    },
    {
      number: "02",
      title: "EFFECTIVE",
      description: "Our product needed to be effective and work for anyone who uses it.",
    },
    {
      number: "03",
      title: "AND BUILT TO LAST",
      description:
        "We don't want users to repurchase. In chaotic environments such as a hospital where patients are constantly being seen, GlowSoap needs to be there for doctors.",
    },
  ]

  return (
    <ParallaxSection id="how" className="py-20 bg-secondary/70">
      <motion.div className="container mx-auto px-4" style={{ y: howContentY }}>
        <motion.h2
          className="text-3xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg bg-background border"
              transition={{ duration: 0.6, delay: 0.2 * i }}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-bold mb-2">{principle.number}</div>
              <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
              <p className="leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ParallaxSection>
  )
}
