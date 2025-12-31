import Link from 'next/link';

const companies = ['BharatPe', 'PokerBaazi', 'Cars24', 'Indianic'];

const projects = [
  {
    title: 'RN Starter',
    description:
      'Opinionated react-native template with commonly used libraries to kickstart your react-native app development',
    href: 'https://github.com/hrithik73',
  },
];

const blogs = [
  {
    title: 'Import Aliases in React Native',
    description: 'How to configure import aliases in react-native project.',
    href: '/blog/import-aliases-in-react-native',
  },
];

const socialLinks = [
  { name: 'X', href: 'https://x.com/hrithik73_' },
  { name: 'GitHub', href: 'https://github.com/hrithik73' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/hrithik73' },
  { name: 'Email', href: 'mailto:shrithik404@gmail.com' },
];

export default function Home() {
  return (
    <div className='mx-auto max-w-2xl px-6 py-16'>
      <section className='mb-16'>
        <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4'>
          Mobile app developer with 4+ years of experience building React Native
          apps. Currently at{' '}
          <a
            href='https://bharatpe.com'
            className='underline hover:text-zinc-900 dark:hover:text-zinc-100'
            target='_blank'
            rel='noopener noreferrer'
          >
            BharatPe
          </a>
          .
        </p>
        <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4'>
          I specialize in building high-performance mobile applications with a
          focus on user experience and clean architecture. I've worked on a
          diverse range of projects including Fintech, B2B, Gaming, E-commerce
          and more.
        </p>
        <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section id='work' className='mb-16'>
        <h2 className='text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-4'>
          Work
        </h2>
        <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
          I've worked at{' '}
          {companies.map((company, i) => (
            <span key={company}>
              <span className='text-zinc-900 dark:text-zinc-100 font-medium'>
                {company}
              </span>
              {i < companies.length - 1 &&
                (i === companies.length - 2 ? ' and ' : ', ')}
            </span>
          ))}
          .
        </p>
      </section>

      <section className='mb-16'>
        <h2 className='text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-4'>
          Projects
        </h2>
        <div className='space-y-4'>
          {projects.map((project, i) => (
            <div key={i}>
              <a
                href={project.href}
                className='text-zinc-900 dark:text-zinc-100 font-medium underline hover:text-zinc-600 dark:hover:text-zinc-400'
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.title}
              </a>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id='writing' className='mb-16'>
        <h2 className='text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-4'>
          Writing
        </h2>
        <div className='space-y-4'>
          {blogs.map((blog, i) => (
            <div key={i}>
              <Link
                href={blog.href}
                className='text-zinc-900 dark:text-zinc-100 font-medium underline hover:text-zinc-600 dark:hover:text-zinc-400'
              >
                {blog.title}
              </Link>
              <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>
                {blog.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          href='/blog'
          className='inline-block mt-4 text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
        >
          View all →
        </Link>
      </section>

      <section>
        <h2 className='text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-4'>
          Connect
        </h2>
        <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
          Let's build something great together.
        </p>
        <div className='flex flex-wrap gap-4'>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                link.href.startsWith('mailto:')
                  ? undefined
                  : 'noopener noreferrer'
              }
              className='text-sm text-zinc-600 dark:text-zinc-400 underline hover:text-zinc-900 dark:hover:text-zinc-100'
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
