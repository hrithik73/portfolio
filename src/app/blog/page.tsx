import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const blogDir = path.join(process.cwd(), 'content/blog');

function getPosts() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: file.replace(/\.(md|mdx)$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className='mx-auto max-w-2xl px-6 py-16'>
      <Link
        href='/'
        className='text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 inline-block'
      >
        ← Back
      </Link>

      <h1 className='text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8'>
        Writing
      </h1>

      <div className='space-y-4'>
        {posts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className='text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400'
            >
              {post.title}
            </Link>
            {post.date && (
              <span className='text-sm text-zinc-500 dark:text-zinc-500 ml-2'>
                {post.date}
              </span>
            )}
          </div>
        ))}

        {posts.length === 0 && (
          <p className='text-zinc-500 dark:text-zinc-500'>No posts yet.</p>
        )}
      </div>
    </div>
  );
}
