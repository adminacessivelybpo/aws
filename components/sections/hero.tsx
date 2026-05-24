"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const headline = "I craft bold digital products across web, mobile, cloud, and AI.";

const particles = Array.from({ length: 20 }).map((_, index) => ({
  id: index,
  size: 6 + ((index * 7) % 16),
  left: `${(index * 13) % 100}%`,
  top: `${(index * 19) % 100}%`,
  duration: 12 + (index % 8),
  delay: (index % 5) * 0.7,
}));

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    if (reduceMotion) return;

    if (index > headline.length) return;

    const timeout = window.setTimeout(() => {
      setTypedText(headline.slice(0, index));
      setIndex((current) => current + 1);
    }, 38);

    return () => window.clearTimeout(timeout);
  }, [index, reduceMotion]);

  const displayedText = reduceMotion ? headline : typedText;

  const ctaButtons = useMemo(
    () => [
      {
        label: "View Projects",
        href: "#projects",
        style:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300",
      },
      {
        label: "Let us collaborate",
        href: "#contact",
        style:
          "border border-slate-300 bg-white/80 text-slate-900 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300",
      },
    ],
    [],
  );

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_#6ee7ff_0%,_transparent_35%),radial-gradient(circle_at_80%_20%,_#f59e0b_0%,_transparent_32%),linear-gradient(120deg,_#0f172a_0%,_#164e63_45%,_#0f172a_100%)] opacity-95 dark:opacity-80" />
      <motion.div
        style={{ y: reduceMotion ? 0 : parallaxY }}
        className="absolute inset-0 -z-10"
      >
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/30 blur-[1px]"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -18, 0],
                    x: [0, 10, -6, 0],
                    opacity: [0.3, 0.7, 0.2, 0.3],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}
      </motion.div>

      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-5 pb-20 md:grid-cols-[1.2fr_1fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            <Sparkles size={14} /> Full-Stack Product Engineer
          </span>
          <p className="mt-6 font-display text-5xl font-black uppercase tracking-[0.08em] text-transparent drop-shadow-[0_6px_22px_rgba(34,211,238,0.45)] bg-gradient-to-r from-cyan-200 via-white to-amber-200 bg-clip-text md:text-7xl">
            Ferdinand Dablo
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight md:text-6xl">
            {displayedText}
            {!reduceMotion ? (
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              >
                |
              </motion.span>
            ) : null}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base text-slate-100/90 md:text-lg">
            I design and build high-impact products with intentional UX, resilient backend systems,
            and intelligent AI features that scale in production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {ctaButtons.map((button) => (
              <motion.a
                key={button.label}
                href={button.href}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${button.style}`}
              >
                {button.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Building Across</p>
          <div className="mt-4 space-y-4 text-slate-100">
            <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Web Platforms</p>
            <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Mobile Experiences</p>
            <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Cloud Infrastructure</p>
            <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">AI-Powered Features</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-sm text-white/90"
      >
        Scroll
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
