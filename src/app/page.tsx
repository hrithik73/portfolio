export default function Home() {
  return (
    <main className='flex flex-col mb-28 items-center justify-between '>
      <div className='mt-5'>
        <h4 className='text-xl'>Hello, I am </h4>
        <h1 className='text-5xl font-bold mt-2'>Hritik Singh</h1>
        <h3 className='mt-5'>
          Frontend Engineer with 2 years of experience in building web and
          mobile apps using react. I am passionate about learning new
          technologies and building innovative solutions.
        </h3>
        <h3 className='text-2xl font-bold mt-14 underline pb-5'>Work</h3>
        <h3>
          I'm currently working at{' '}
          <a
            className='text-red-500'
            href={'https://indianic.com'}
            target='_blank'
            rel='noreferrer'
          >
            Indianic
          </a>{' '}
          as a Software Engineer, building cross-platform mobile application
          using react-native.
        </h3>
        <h3 className='text-2xl font-bold mt-14 pb-5 underline'>
          Side Projects
        </h3>
        <h3>
          Apart from my main work, I loves to make side{' '}
          <a href='/projects' className='cursor-pointer text-red-500'>
            Projects
          </a>{' '}
          for fun and Write{' '}
          <a href='/posts' className='cursor-pointer text-red-500'>
            Blogs
          </a>
        </h3>
      </div>
    </main>
  );
}
