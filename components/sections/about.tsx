"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, sectionViewport, staggerContainer } from "@/lib/animations";
import { stats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeading
        overline="About"
        title="Design-forward engineering with production discipline"
        description="I blend product intuition, systems thinking, and deep implementation detail to ship experiences that feel effortless and perform reliably at scale."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
            alt="Developer workspace"
            width={820}
            height={980}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          className="space-y-5"
        >
          {[
            "From product discovery to deployment pipelines, I operate across the full delivery lifecycle.",
            "My default is fast, tested, accessible interfaces paired with resilient backend architectures.",
            "I focus on measurable outcomes: speed, reliability, usability, and long-term maintainability.",
          ].map((line) => (
            <motion.p
              key={line}
              variants={fadeUp}
              className="text-pretty text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg"
            >
              {line}
            </motion.p>
          ))}

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
