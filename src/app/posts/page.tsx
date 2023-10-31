import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='prose dark:prose-invert mb-36'>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
