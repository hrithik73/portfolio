'use client';

import Link from 'next/link';
import { Navigation } from './Navigation';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80'>
      <div className='mx-auto flex max-w-2xl items-center justify-between px-6 py-4'>
        <Link href='/'>
          <h1 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity'>
            Hritik Singh
          </h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
