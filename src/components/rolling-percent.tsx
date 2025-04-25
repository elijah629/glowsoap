"use client";

import AnimatedNumbers from "react-animated-numbers";

export function RollingPercent({ percent }: { percent: number }) {
  return (
    <AnimatedNumbers
      animateToNumber={percent}
      className="after:content-['%']"
    />
  );
}
