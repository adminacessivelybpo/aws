"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionViewport } from "@/lib/animations";

interface SectionHeadingProps {
  overline: string;
  title: string;
  description: string;
}

export function SectionHeading({
  overline,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
        {overline}
      </p>
      <h2 className="text-balance font-display text-3xl leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
