import { Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex text-center justify-between px-5 items-center border-b-[0.5px] border-slate-600'>
      <p> Hritik Singh </p>

      <div className='flex  flex-row gap-5 items-center  '>
        <div className='flex cursor-pointer items-center gap-1 h-10 hover:underline'>
          <a
            href='https://twitter.com/hrithik73_'
            target='_blank'
            className='text-sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-brand-x'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <title>X (formerly known as Twitter)</title>
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M4 4l11.733 16h4.267l-11.733 -16z'></path>
              <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772'></path>
            </svg>
          </a>
        </div>

        <div className='flex cursor-pointer items-center gap-1 h-10 hover:underline'>
          <a
            href='https://github.com/hrithik73'
            target='_blank'
            className='text-sm'
          >
            <Github size={20} />
          </a>
        </div>

        <div className='flex cursor-pointer items-center gap-1 h-10 hover:underline'>
          <a
            href='https://instagram.com/hrithik73_'
            target='_blank'
            className='text-sm'
          >
            <Instagram size={18} />
          </a>
        </div>

        <div className='flex cursor-pointer items-center gap-1 h-10 hover:underline'>
          <a
            href='mailto:shrithik404@gmail.com'
            target='_blank'
            className='text-sm'
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
