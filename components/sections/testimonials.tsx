"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [paused]);

  const currentTestimonial = testimonials[active];

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeading
        overline="Testimonials"
        title="Trusted by teams shipping ambitious products"
        description="Feedback from founders and engineering leaders on delivery quality, velocity, and technical leadership."
      />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative mx-auto mt-12 max-w-4xl"
      >
        <motion.article
          key={currentTestimonial.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex items-center gap-4">
            <Image
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{currentTestimonial.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {currentTestimonial.role}, {currentTestimonial.company}
              </p>
            </div>
          </div>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            &ldquo;{currentTestimonial.quote}&rdquo;
          </p>

          <div className="mt-6 flex gap-1">
            {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
              <motion.span
                key={`${currentTestimonial.id}-${index}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.06, duration: 0.22 }}
              >
                <Star size={18} className="fill-amber-400 text-amber-400" />
              </motion.span>
            ))}
          </div>
        </motion.article>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                active === index
                  ? "w-8 bg-cyan-500"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
