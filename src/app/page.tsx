import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col mb-36 items-center justify-between p-10 '>
      <div className='flex flex-col justify-center items-center gap-10'>
        <Image
          src='https://github.com/hrithik73.png'
          height={100}
          width={100}
          className='rounded-full self-start '
          alt='Profile picture of Hritik Singh'
        />
        <p className='w-full text-left'>
          Hey, My Name is Hritik Singh, I'm a Software Engineer at{' '}
          <a
            className='text-red-400'
            href='https://indianic.com'
            target='_blank'
          >
            Indianic.
          </a>
          <p>
            With 2 years of experience in building mobile and web apps using
            react. I build pixel perfect , smooth and performent application
            which scale
          </p>
          <p>
            My Daily Tech Stack include React, React Native, Typescript,
            Firebase,Redux and other js libraries
          </p>
        </p>
      </div>
    </main>
  );
}
