'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const blogs = [
  {
    year: '2023',
    posts: [
      {
        title: 'Import Aliases in react-native',
        description: 'How to configure import aliases in react-native project.',
        href: '/blog/import-aliases-in-react-native',
      },
    ],
  },
];

export default function BlogPage() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  // Initialize key with stable literal to avoid hydration mismatch
  const [animationKey, setAnimationKey] = useState<string>('/blog/');
  const prevPathnameRef = useRef<string | null>(null);
  const isInitialMount = useRef(true);

  // Handle initial mount and hydration
  useEffect(() => {
    setMounted(true);
    prevPathnameRef.current = pathname || '/blog/';
    isInitialMount.current = false;
  }, []);

  // Track pathname changes and reset animations only when navigating TO this page
  useEffect(() => {
    // Skip on initial mount (handled by the effect above)
    if (isInitialMount.current) return;

    const currentPathname = pathname || '/blog/';
    const prevPathname = prevPathnameRef.current;

    // Only reset animations when navigating TO this page (pathname is "/blog")
    // and pathname actually changed from a different route
    if (
      mounted &&
      prevPathname !== null &&
      prevPathname !== currentPathname &&
      currentPathname === '/blog/'
    ) {
      // Update key only when pathname actually changes (navigation between routes)
      // This triggers animation reset without causing hydration issues
      setAnimationKey(currentPathname);
      setMounted(false);

      // Capture pathname at the time of effect execution to avoid stale closure
      const capturedPathname = currentPathname;
      const timer = setTimeout(() => {
        setMounted(true);
        prevPathnameRef.current = capturedPathname;
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Update ref even if we don't reset animations (for tracking purposes)
      prevPathnameRef.current = currentPathname;
    }
  }, [pathname]);

  return (
    <div className='mx-auto max-w-4xl px-6 py-16'>
      <motion.div
        key={animationKey}
        variants={containerVariants}
        initial='hidden'
        animate={mounted ? 'visible' : 'hidden'}
        className='space-y-16'
      >
        <motion.div variants={itemVariants}>
          <h1 className='text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl'>
            Blog
          </h1>
        </motion.div>

        <div className='space-y-12'>
          {blogs.map((yearGroup, yearIndex) => (
            <motion.div
              key={`${animationKey}-${yearIndex}`}
              variants={itemVariants}
              className='space-y-6'
            >
              <h2 className='text-xl font-semibold text-zinc-500 dark:text-zinc-500'>
                {yearGroup.year}
              </h2>
              <div className='space-y-4'>
                {yearGroup.posts.map((post, postIndex) => (
                  <motion.div
                    key={`${animationKey}-${yearIndex}-${postIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: postIndex * 0.1 }}
                  >
                    <Link
                      href={post.href}
                      className='group block rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800'
                    >
                      <div className='flex items-start justify-between'>
                        <div className='space-y-2'>
                          <h3 className='font-semibold text-zinc-900 dark:text-zinc-100'>
                            {post.title}
                          </h3>
                          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                            {post.description}
                          </p>
                        </div>
                        <ArrowUpRight className='h-5 w-5 text-zinc-400 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100' />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
