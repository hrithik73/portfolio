import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className='text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-4 mb-2'>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className='text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed'>
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className='text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400'
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className='list-disc list-inside mb-4 text-zinc-600 dark:text-zinc-400 space-y-2'>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className='list-decimal list-inside mb-4 text-zinc-600 dark:text-zinc-400 space-y-2'>
        {children}
      </ol>
    ),
    li: ({ children }) => <li className='ml-4'>{children}</li>,
    code: ({ children, className, ...props }) => {
      const isInlineCode = !className;

      if (isInlineCode) {
        return (
          <code
            className="text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm before:content-[''] after:content-['']"
            {...props}
          >
            {children}
          </code>
        );
      }

      // For code blocks, preserve all props - rehype-pretty-code adds inline styles
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children, className, ...props }) => {
      // Preserve rehype-pretty-code classes and add our own
      const classes = className
        ? `mb-4 rounded-lg overflow-x-auto ${className}`
        : 'mb-4 rounded-lg overflow-x-auto';
      return (
        <pre className={classes} {...props}>
          {children}
        </pre>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic text-zinc-600 dark:text-zinc-400 my-4'>
        {children}
      </blockquote>
    ),
    hr: () => <hr className='my-8 border-zinc-300 dark:border-zinc-700' />,
    ...components,
  };
}
