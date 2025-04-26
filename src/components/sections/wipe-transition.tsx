import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

type Props = {
  before: string;
  after: string;
};

export function WipeTransition({ before, after }: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const wipeAmount = useTransform(
    scrollYProgress,
    [0.3, 1],
    ["100%", "0%"]
  );

  const clipPath = useMotionTemplate`inset(${wipeAmount} 0 0 0)`;

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 z-0 h-screen overflow-hidden">
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath }}
        />
      </div>
    </section>
  );
}
