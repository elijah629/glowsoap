"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function ZoomText() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 300])

  const textScale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 z-10 flex items-center justify-center h-screen overflow-hidden">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative"
            style={{
              scale: textScale,
              transformOrigin: "46.5% 50%",
            }}
          >
            <h1 className="text-6xl md:text-9xl glow font-black">GlowSoap</h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

