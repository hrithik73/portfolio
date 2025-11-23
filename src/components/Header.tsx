"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Hritik Singh
          </motion.h1>
        </Link>
        <div className="flex items-center gap-6">
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
}

