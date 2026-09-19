"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? value;
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numStr.replace(/\./g, "").replace(",", "."));
  const hasComma = numStr.includes(",");
  const isThousands = numStr.includes(".") && !hasComma;

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();

    function frame(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted: string;
      if (hasComma) {
        formatted = current.toFixed(1).replace(".", ",");
      } else if (isThousands) {
        formatted = Math.round(current).toLocaleString("de-DE");
      } else {
        formatted = String(Math.round(current));
      }
      setDisplay(formatted);

      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref}>
      {prefix}
      {Number.isNaN(target) ? numStr : display}
      {suffix}
    </span>
  );
}
