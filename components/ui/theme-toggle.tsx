"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const activeTheme = theme === "system" ? resolvedTheme : theme;

  if (!mounted) {
    return (
      <button
        aria-label="Toggle color scheme"
        className="h-10 w-10 rounded-full border border-slate-300/70 bg-white/80 dark:border-slate-700 dark:bg-slate-900/80"
      />
    );
  }

  const isDark = activeTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      type="button"
      aria-label="Toggle color scheme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-300/70 bg-white/80 text-slate-700 backdrop-blur transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 14, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </motion.button>
  );
}
