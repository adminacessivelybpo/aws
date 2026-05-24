"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function SkillsExperienceSection() {
  return (
    <section id="skills" className="bg-slate-100/70 px-5 py-24 dark:bg-slate-900/40 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          overline="Skills & Experience"
          title="Execution depth across product and platform"
          description="Hands-on delivery across frontend craftsmanship, mobile strategy, backend reliability, and cloud-native operations."
        />

        <div className="mt-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">Experience Timeline</h3>
            <ol className="mt-6 space-y-5">
              {experiences.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ x: 4 }}
                  className="relative border-l-2 border-cyan-500/70 pl-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                    {item.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
