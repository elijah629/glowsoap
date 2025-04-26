"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"

interface HeroSectionProps {
  scrollProgress: MotionValue<number>
}

export function HeroSection({ scrollProgress }: HeroSectionProps) {
  const heroImageY = useTransform(scrollProgress, [0, 0.2], [0, -50])
  const heroTextY = useTransform(scrollProgress, [0, 0.2], [0, 50])
  const heroOpacity = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 0.8])

  return (
    <section className="min-h-screen flex items-center h-[200vh] bg-[linear-gradient(to_bottom,#FF00EE,transparent_40%,transparent_60%,#0FF_85%,white_100%)]">
      <motion.div
        style={{ y: heroTextY, opacity: heroOpacity }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center container mx-auto px-4"
      >
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedText text="GlowSoap" className="text-3xl sm:text-7xl font-black" delay={0.5} />
          <motion.p
            className="text-md sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            GlowSoap uses advanced fluorescent technology to visually train healthcare professionals and staff in
            sterile environments, ensuring proper handwashing technique and reducing infection risks.
          </motion.p>
          <motion.div
            className="flex sm:flex-row gap-2 flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button asChild size="lg">
              <Link href="/store">
                PRE-ORDER
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary" size="lg">
              <Link href="/#why">
                LEARN MORE
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="order-first md:order-last"
          style={{ y: heroImageY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <Image
              src="https://placehold.co/600/png"
              alt="GlowSoap product image"
              width={600}
              height={600}
              className="aspect-square w-full object-cover rounded-lg relative z-10 border shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
