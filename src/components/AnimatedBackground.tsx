'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Light mode - warm cream to soft white gradient */}
      <div className='absolute inset-0 dark:hidden bg-gradient-to-br from-amber-50/50 via-white to-rose-50/30' />

      {/* Dark mode - deep charcoal gradient */}
      <div className='absolute inset-0 hidden dark:block bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950' />

      {/* Subtle animated soft glow */}
      <motion.div
        className='absolute top-0 right-0 w-[60%] h-[60%] rounded-full blur-[150px] dark:hidden'
        style={{
          background:
            'linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(254, 215, 170, 0.2) 100%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Dark mode glow */}
      <motion.div
        className='absolute top-0 right-0 w-[50%] h-[50%] rounded-full blur-[150px] hidden dark:block'
        style={{
          background:
            'radial-gradient(circle, rgba(63, 63, 70, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
