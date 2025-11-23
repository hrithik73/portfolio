"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme("light")}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
          theme === "light"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
            : "text-zinc-600 dark:text-zinc-400"
        }`}
        aria-label="Light theme"
      >
        Light
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme("dark")}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
          theme === "dark"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
            : "text-zinc-600 dark:text-zinc-400"
        }`}
        aria-label="Dark theme"
      >
        Dark
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme("system")}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
          theme === "system"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
            : "text-zinc-600 dark:text-zinc-400"
        }`}
        aria-label="System theme"
      >
        System
      </motion.button>
    </div>
  );
}

