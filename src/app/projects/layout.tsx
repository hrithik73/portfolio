import { ReactNode } from 'react';

interface ProjectLayout {
  children: ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayout) => {
  return (
    <div className='p-10 flex flex-col justify-center items-center'>
      <h3 className='font-bold text-xl my-5'>
        Personal Projects i have worked
      </h3>
      {children}
    </div>
  );
};
export default ProjectLayout;
