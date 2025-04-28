"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import NumberFlow, { continuous } from "@number-flow/react";

interface AnimatedCounterProps {
  value: number
  className?: string
}

export function AnimatedPercent({
  value,
  className,
}: AnimatedCounterProps) {
  const [v, setValue] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return;

    setTimeout(() => {
      setValue(value);
    }, 500);

  }, [isInView, setValue, value])

  return (
    <NumberFlow ref={ref} value={v} plugins={[continuous]} willChange format={{ style: "percent" }} className={className} />
  )
}
