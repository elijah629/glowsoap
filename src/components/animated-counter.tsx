"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  value,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = Math.min(value, 999)

    // First set to zero
    setCount(0)

    // If zero, return
    if (start === end) return

    // Find duration per increment
    const totalFrames = Math.min(end * 2, 120)
    const incrementTime = (duration * 1000) / totalFrames

    // Timer
    const timer = setInterval(() => {
      start += 1
      setCount(start)

      if (start >= end) clearInterval(timer)
    }, incrementTime)

    // Cleanup
    return () => {
      clearInterval(timer)
    }
  }, [value, duration, isInView])

  return (
    <motion.span
      ref={ref}
      className={cn("", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}
