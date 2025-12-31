'use client';

import Link from 'next/link';
import { Navigation } from './Navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      className='sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-900 dark:bg-zinc-950/80'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className='mx-auto flex max-w-2xl items-center justify-between px-6 py-4'>
        <Link href='/' className='group'>
          <h1 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400'>
            hs.
          </h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
