import { GithubIcon } from 'lucide-react';

import { projects } from '~/data/site';

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
    <a href={link} className='cursor-pointer' target='_blank'>
      <div className='border-slate-600 hover:border-[0.5px] rounded p-5 my-5 dark:bg-slate-800  bg-gray-50'>
        <h3 className='text-base font-bold'>{title}</h3>
        <p>{description}</p>
        <a href={githubLink} className='flex gap-2 my-2' target='_blank'>
          <GithubIcon />
          <p>{techStack}</p>
        </a>
      </div>
    </a>
  );
};

export default function Projects() {
  return (
    <div className=''>
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
