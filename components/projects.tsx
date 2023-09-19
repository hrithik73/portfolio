import Image from 'next/image';
import { projects } from '../data/site';

import { GithubIcon, ArrowUpRight } from 'lucide-react';

interface IProjectCardProps {
  title: string;
  githubLink: string;
  link: string;
  imgSrc: string | undefined;
  description: string;
  techStack: string;
}

const ProjectCard = ({
  title,
  githubLink,
  link,
  imgSrc,
  description,
  techStack,
}: IProjectCardProps) => {
  return (
    <div className='flex flex-col  m-10 border-gray-800 border-1 rounded-md items-center justify-center cursor-pointer max-w-md'>
      <div className='flex flex-col items-center justify-center m-2 '>
        <a target='_blank' rel='noreferrer' href={link}>
          <Image
            className='h-40 w-[100%] object-contain rounded-md bg-gray-800'
            src={imgSrc}
            alt='project card image'
            height={40}
            width={300}
          />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={link}
          className='font-bold text-lg hover:underline my-2'
        >
          {title}
        </a>
        <p className='text-sm text-center '>{description}</p>
      </div>

      <p className='text-xs text-red-500'>{techStack}</p>

      <div className='flex flex-row gap-2 m-3'>
        <a target='_blank' rel='noreferrer' href={githubLink}>
          <GithubIcon />
        </a>
        <a target='_blank' rel='noreferrer' href={link}>
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
      {projects.map((item) => {
        return (
          <ProjectCard
            title={item.title}
            link={item.link}
            githubLink={item.github}
            imgSrc={item.imgSrc}
            description={item.description}
            techStack={item.techStack}
          />
        );
      })}
    </div>
  );
}
