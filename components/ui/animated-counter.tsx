"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 text-center backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
    >
      <p className="font-display text-4xl font-semibold text-slate-900 dark:text-slate-50">
        {count}
        {suffix ?? ""}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}
