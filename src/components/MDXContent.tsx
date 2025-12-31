'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useMDXComponents } from '@/mdx-components';

export function MDXContentWrapper({
  MDXContent,
}: {
  MDXContent: React.ComponentType<{ components?: any }>;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const codeBlocks = document.querySelectorAll('pre[data-theme]');
    codeBlocks.forEach((block) => {
      const htmlElement = block as HTMLElement;
      const currentTheme = htmlElement.getAttribute('data-theme');
      htmlElement.setAttribute('data-theme', currentTheme || '');
    });
  }, [theme, resolvedTheme, mounted]);

  if (!mounted) {
    return null;
  }

  return <MDXContent components={useMDXComponents()} />;
}
