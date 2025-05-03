"use client"

import { motion } from "framer-motion"

export function RoadmapSection() {
  const roadmapItems = [
    {
      period: "H1 2025",
      title: "PERFECT DESIGN FOR PRODUCTION",
      description:
        "We will refine our design for mass production in the second half of the year. Initially, we will introduce a limited number (10-20) of hand-built preview models.",
    },
    {
      period: "H2 2025",
      title: "MASS PRODUCTION",
      description:
        "Initiate the automated production process of GlowSoap with rigorous quality assurance measures, while also deploying on-site staff to meticulously inspect for any potential defects. Additionally, we will incorporate an automatic dispenser and light system.\nSales Volume: 200.",
    },
    {
      period: "H1 2026",
      title: "IN-HOUSE FLUORESCENT POWDER",
      description:
        "We will opt to produce the fluorescent powder internally within our organization.\nSales Volume: 1000.",
    },
    {
      period: "H2 2026",
      title: "FINAL PRODUCT",
      description:
        "During the second half of the year, our primary emphasis will be on enhancing product stability to ensure a seamless customer experience.\nSales Volume: 10,000+.",
    },
  ];

  return (
    <section id="roadmap" className="container mx-auto p-4 overflow-hidden">
      <motion.h2
        className="text-3xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Roadmap
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-1 bg-muted"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />

        {/* Timeline items */}
        {roadmapItems.map((item, i) => (
          <motion.div
            key={i}
            className={`flex items-start gap-8 mb-20 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
          >
            <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`} />

            <motion.div
              className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-0 md:ml-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: 0.3 * i + 0.2,
              }}
            >
              <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
            </motion.div>

            <div className={`flex-1 pl-4 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"} text-left`}>
              <span className="text-lg font-bold block mb-1">{item.period}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
