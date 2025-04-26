"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "@/components/animated-counter"

export function WhySection() {

  return (
    <section id="why" className="pt-20 pb-40 bg-gradient-to-b from-black via-transparent to-accent overflow-hidden">
      <motion.div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why?
        </motion.h2>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedCounter value={26} suffix="%" className="text-9xl font-bold inline-block" />
          <motion.div
            className="absolute -inset-10 bg-black/5 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
        <motion.span
          className="text-4xl block mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          of American hospitals do not enforce proper handwashing
        </motion.span>
      </motion.div>
    </section>
  )
}
