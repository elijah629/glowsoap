"use client"

import { motion } from "framer-motion"
import { AnimatedPercent } from "@/components/animated-percent"

export function WhySection() {

  return (
    <section id="why" className="pt-20 pb-40">
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
          <AnimatedPercent value={.26} className="text-9xl font-bold inline-block" />
          <motion.div
            className="absolute -inset-10 bg-black/5 rounded-full blur-3xl -z-10"
            initial={{ scale: 0.5 }}
            whileHover={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 5,
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
