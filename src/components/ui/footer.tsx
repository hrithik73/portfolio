import { Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex flex-col text-center'>
      <div className='flex md:flex-row flex-col md:gap-5 gap-1 justify-center items-center  border-b-[0.5px] border-slate-600'>
        <div className='flex items-center gap-1 h-10 hover:underline'>
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
          <a
            href='https://twitter.com/hrithik73_'
            target='_blank'
            className='text-sm'
          >
            @hrithik73_
          </a>
        </div>

        <div className='flex items-center gap-1 h-10 hover:underline'>
          <Github size={20} />
          <a
            href='https://github.com/hrithik73'
            target='_blank'
            className='text-sm'
          >
            @hrithik73
          </a>
        </div>

        <div className='flex items-center gap-1 h-10 hover:underline'>
          <Instagram size={18} />
          <a
            href='https://instagram.com/hrithik73_'
            target='_blank'
            className='text-sm'
          >
            @hrithik73_
          </a>
        </div>

        <div className='flex items-center gap-1 h-10 hover:underline'>
          <Mail size={18} />
          <a
            href='mailto:shrithik404@gmail.com'
            target='_blank'
            className='text-sm'
          >
            shrithik404-at-gmail.com
          </a>
        </div>
      </div>

      <p>2023 © Hritik Singh.</p>
    </div>
  );
};

export default Footer;
