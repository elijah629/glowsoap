"use client"

import type { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  id?: string
}

export default function ParallaxSection({ children, className, speed = 0.1, id }: ParallaxSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 1000])

  return (
    <motion.section id={id} style={{ y }} className={cn("relative overflow-hidden", className)}>
      {children}
    </motion.section>
  )
}
