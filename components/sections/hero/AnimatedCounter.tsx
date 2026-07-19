"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  return (
    <CountUp
      end={value}
      duration={2.2}
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}