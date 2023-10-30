import { ReactNode } from 'react';

interface ProjectLayout {
  children: ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayout) => {
  return (
    <div className='p-10 flex flex-col justify-center items-center'>
      {children}
    </div>
  );
};
export default ProjectLayout;
