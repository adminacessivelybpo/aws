"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

const filters = ["all", "web", "mobile", "backend", "ai"] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeading
        overline="Projects"
        title="Selected work with measurable impact"
        description="A mix of product platforms, mobile apps, cloud systems, and applied AI solutions delivered for real teams and real constraints."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
              filter === item
                ? "bg-slate-900 text-white dark:bg-cyan-400 dark:text-slate-900"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      key={tag}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
                >
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="relative h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6">
                <h4 className="font-display text-2xl text-slate-900 dark:text-slate-100">
                  {selectedProject.title}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-cyan-400 dark:text-slate-900"
                  >
                    Live demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
                  >
                    Source <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
