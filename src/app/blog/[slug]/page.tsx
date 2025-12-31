import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { evaluate } from '@mdx-js/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import Link from 'next/link';
import * as runtime from 'react/jsx-runtime';
import { useMDXComponents } from '@/mdx-components';

const blogDir = path.join(process.cwd(), 'content/blog');

async function getPost(slug: string) {
  const mdPath = path.join(blogDir, `${slug}.md`);
  const mdxPath = path.join(blogDir, `${slug}.mdx`);

  let filePath: string | null = null;
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  }

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const result = await evaluate(content, {
    ...runtime,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'poimandres',
          keepBackground: false,
          defaultLang: 'plaintext',
        },
      ],
    ],
  });

  const MDXContent = result.default;

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    MDXContent,
  };
}

export async function generateStaticParams() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.(md|mdx)$/, ''),
    }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className='mx-auto max-w-2xl px-6 py-16'>
        <h1 className='text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4'>
          Post not found
        </h1>
        <Link
          href='/'
          className='text-sm text-zinc-600 dark:text-zinc-400 underline'
        >
          ← Back home
        </Link>
      </div>
    );
  }

  const { MDXContent } = post;

  return (
    <div className='mx-auto max-w-2xl px-6 py-16'>
      <Link
        href='/#writing'
        className='text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 inline-block'
      >
        ← Back
      </Link>

      <article>
        <header className='mb-8'>
          <h1 className='text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2'>
            {post.title}
          </h1>
          {post.date && (
            <time className='text-sm text-zinc-500 dark:text-zinc-500'>
              {post.date}
            </time>
          )}
        </header>

        <div className='prose prose-zinc dark:prose-invert prose-sm max-w-none'>
          <MDXContent components={useMDXComponents()} />
        </div>
      </article>
    </div>
  );
}
