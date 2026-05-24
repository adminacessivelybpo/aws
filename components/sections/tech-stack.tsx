"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pipelineItems, programmingLanguageItems, techItems } from "@/lib/data";

export function TechStackSection() {
  const combinedItems = [
    ...techItems.map((item) => ({ ...item, group: "Core" })),
    ...programmingLanguageItems.map((item) => ({ ...item, group: "Language" })),
    ...pipelineItems.map((item) => ({ ...item, group: "Pipeline" })),
  ];

  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#1e293b,_#020617_65%)] px-5 py-24 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center opacity-20" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          overline="Tech Stack"
          title="Multi-domain expertise from frontend to AI"
          description="Curated capabilities across modern web, native mobile, cloud-native backend systems, and machine learning workflows."
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {combinedItems.map((item) => (
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              key={`${item.group}-${item.name}`}
              className="group rounded-2xl border border-slate-600/40 bg-slate-900/75 p-4 text-center shadow-[0_8px_30px_rgba(2,6,23,0.28)] backdrop-blur"
            >
              <span
                className={`mb-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                  item.group === "Pipeline"
                    ? "bg-cyan-500/15 text-cyan-300"
                    : item.group === "Language"
                      ? "bg-indigo-500/15 text-indigo-300"
                      : "bg-slate-500/20 text-slate-200"
                }`}
              >
                {item.group}
              </span>
              <item.icon
                size={34}
                style={{ color: item.accent }}
                className="mx-auto transition-transform duration-300 group-hover:scale-110"
              />
              <p className="mt-2 text-balance text-xs font-semibold text-white md:text-sm">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
