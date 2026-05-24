"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Twitter", href: "https://x.com", icon: FaXTwitter },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 bg-white/70 py-10 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Copyright {new Date().getFullYear()} Ferdinand Dablo. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-cyan-300"
              aria-label={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}

          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="#home"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-300/80 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-cyan-300"
            aria-label="Back to top"
          >
            Top <ArrowUp size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
