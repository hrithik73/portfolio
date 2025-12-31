'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t border-zinc-100 dark:border-zinc-900'>
      <div className='mx-auto max-w-2xl px-6 py-8'>
        <div className='flex items-center justify-between'>
          <p className='text-xs text-zinc-400 dark:text-zinc-600'>
            © {new Date().getFullYear()} Hritik Singh
          </p>
          <motion.button
            onClick={scrollToTop}
            className='text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
