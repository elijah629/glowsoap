"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"

export default function FooterCTA() {
  return (
    <ParallaxSection className="bg-primary text-primary-foreground py-20">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to transform healthcare hygiene?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join us in our mission to reduce infections and improve healthcare standards worldwide.
        </p>
        <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
          <Link href="/store">PRE-ORDER NOW</Link>
        </Button>
      </motion.div>
    </ParallaxSection>
  )
}
