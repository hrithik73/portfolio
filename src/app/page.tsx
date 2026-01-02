'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const companies = [
  { name: 'BharatPe', href: 'https://bharatpe.com' },
  { name: 'PokerBaazi', href: 'https://pokerbaazi.com' },
  { name: 'CARS24', href: 'https://cars24.com' },
  { name: 'Indianic', href: 'https://indianic.com' },
];

const projects = [
  {
    title: 'RN Starter',
    description:
      'Opinionated react-native template with commonly used libraries',
    href: 'https://github.com/hrithik73',
    tech: ['React Native', 'TypeScript'],
  },
];

const blogs = [
  {
    title: 'Import Aliases in React Native',
    description: 'Configure import aliases for cleaner code',
    href: '/blog/import-aliases-in-react-native',
  },
  {
    title: 'How to create a boilerplate',
    description: 'Create and publish your own RN starter template',
    href: '/blog/how-to-create-boilerplate-in-react-native',
  },
];

const socialLinks = [
  { name: 'X', href: 'https://x.com/hrithik73_', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/hrithik73', icon: Github },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/hrithik73',
    icon: Linkedin,
  },
  { name: 'Email', href: 'mailto:shrithik404@gmail.com', icon: Mail },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className='mx-auto max-w-2xl px-6 py-12 md:py-20'
      initial='initial'
      animate='animate'
      variants={stagger}
    >
      {/* Hero Section */}
      <motion.section className='mb-20' variants={fadeInUp}>
        <motion.div
          className='mb-6'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className='inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium mb-4'>
            <span>☕</span>
            Fueled by chai & code
          </span>
        </motion.div>

        <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
          <span className='text-shimmer'>Building delightful</span>
          <br />
          <span className='text-zinc-400 dark:text-zinc-500'>
            mobile experiences
          </span>
        </h2>

        <p className='text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl'>
          Mobile app developer with 4+ years crafting React Native apps.
          Currently shaping fintech at{' '}
          <a
            href='https://bharatpe.com'
            className='text-zinc-900 dark:text-zinc-100 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            BharatPe
          </a>
          .
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section className='mb-20' variants={fadeInUp}>
        <h3 className='text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-6'>
          Experience
        </h3>
        <div className='flex flex-wrap gap-3'>
          {companies.map((company, i) => (
            <motion.a
              key={company.name}
              href={company.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {company.name}
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className='mb-20' variants={fadeInUp}>
        <h3 className='text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-6'>
          Projects
        </h3>
        <div className='space-y-4'>
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group block p-4 -mx-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors'
              whileHover={{ x: 2 }}
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <h4 className='font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-2'>
                    {project.title}
                    <ArrowUpRight className='w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all' />
                  </h4>
                  <p className='text-sm text-zinc-500 dark:text-zinc-400 mt-1'>
                    {project.description}
                  </p>
                </div>
              </div>
              <div className='flex gap-2 mt-3'>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className='text-xs px-2 py-1 rounded-md bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Writing Section */}
      <motion.section className='mb-20' variants={fadeInUp}>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider'>
            Writing
          </h3>
          <Link
            href='/blog'
            className='text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'
          >
            View all →
          </Link>
        </div>
        <div className='space-y-1'>
          {blogs.map((blog, i) => (
            <motion.div key={i} whileHover={{ x: 2 }}>
              <Link
                href={blog.href}
                className='group flex items-center justify-between py-3 -mx-4 px-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors'
              >
                <div>
                  <h4 className='font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors'>
                    {blog.title}
                  </h4>
                  <p className='text-sm text-zinc-500 dark:text-zinc-400 mt-0.5'>
                    {blog.description}
                  </p>
                </div>
                <ArrowUpRight className='w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0' />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Connect Section */}
      <motion.section variants={fadeInUp}>
        <h3 className='text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-6'>
          Connect
        </h3>
        <div className='flex gap-3'>
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                link.href.startsWith('mailto:')
                  ? undefined
                  : 'noopener noreferrer'
              }
              className='group w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-sm text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={link.name}
            >
              <link.icon className='w-4 h-4' />
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
