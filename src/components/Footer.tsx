'use client';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t border-zinc-200 dark:border-zinc-800'>
      <div className='mx-auto max-w-2xl px-6 py-8'>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-zinc-500 dark:text-zinc-500'>
            © {new Date().getFullYear()} Hritik Singh
          </p>
          <button
            onClick={scrollToTop}
            className='text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 transition-colors'
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
