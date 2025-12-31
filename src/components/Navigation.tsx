'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-6'>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || (item.href === '/' && pathname === '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition-colors ${
              isActive
                ? 'text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
